import prisma from "@app/utils/prismadb";
//get request for getting all the patients
export async function POST(request) {
  const body = await request.json();

  // patientId       String   @unique @db.ObjectId
  //   patient         Patient  @relation(fields: [patientId], references: [id]) // add this relation field
  //   height          Float
  //   weight          Float
  //   bloodPressure   String
  //   pulseRate       Int
  //   respiratoryRate Int
  //   temperature     Float
  //convert the value according to the type in schema
  if (body) {
    body.height = parseFloat(body.height);
    body.weight = parseFloat(body.weight);
    body.pulseRate = parseInt(body.pulseRate);
    body.respiratoryRate = parseInt(body.respiratoryRate);
    body.temperature = parseFloat(body.temperature);
  }

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
          error: "Some error occurred with creating a vital",
        },
      })
    );
  }
}
