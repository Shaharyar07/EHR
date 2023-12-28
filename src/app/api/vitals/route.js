import prisma from "@app/utils/prismadb";

export async function POST(request) {
  const body = await request.json();

  try {
    //check if the vitals already exists
    const vitalExists = await prisma.vitals.findFirst({
      where: {
        patientId: body.patientId,
      },
    });
    if (vitalExists) {
      return new Response(
        JSON.stringify({
          data: {
            status: 404,
            message: "Vitals already exists",
          },
        })
      );
    }

    const vital = await prisma.vitals.create({
      data: {
        ...body,
        pulseRate: parseInt(body.pulseRate),
        temperature: parseFloat(body.temperature),
        height: parseFloat(body.height),
        weight: parseFloat(body.weight),
        respiratoryRate: parseInt(body.respiratoryRate),
      },
    });

    if (!vital) {
      return new Response(
        JSON.stringify({
          data: {
            status: 404,
            message: "Some error occurred with creating a vital",
          },
        })
      );
    }

    return new Response(
      JSON.stringify({
        data: {
          status: 200,
          message: "Vital created successfully!!!",
        },
      })
    );
  } catch (error) {
    console.error(error); // Log the error

    return new Response(
      JSON.stringify({
        data: {
          status: 500,
          message: "Some error occurred with creating a vital",
        },
      })
    );
  }
}
