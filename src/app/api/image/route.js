import prisma from "@app/utils/prismadb";

export async function PUT(request) {
  const body = await request.json();
  const { patientId, cancer } = body;
  console.log("Patient ID: ", patientId, "Cancer: ", cancer);
  try {
    const existingPatient = await prisma.patient.findUnique({
      where: { id: patientId },
    });

    if (!existingPatient) {
      return new Response(
        JSON.stringify({
          data: {
            status: 404,
            message: "Patient not found",
          },
        })
      );
    }

    const patient = await prisma.patient.update({
      data: {
        cancer: cancer,
      },
      where: {
        id: patientId,
      },
    });

    return new Response(
      JSON.stringify({
        data: {
          message: "Patient updated successfully!!!",
          status: 200,
        },
      })
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        data: {
          message: "Server error occurred in /image route",
          status: 500,
        },
      })
    );
  }
}
