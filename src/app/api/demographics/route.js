import prisma from "@app/utils/prismadb";

export async function POST(request) {
  let body = await request.json();
 

  // Convert age to integer
  if (body.age) {
    body.age = parseInt(body.age, 10);
  }

  try {
    const patient = await prisma.patient.create({
      data: {
        ...body,
      },
    });

    if (!patient) {
      return new Response(
        JSON.stringify({
          data: {
            status: 404,
            message: "Some error occurred with creating a demographics",
          },
        })
      );
    }

    return new Response(
      JSON.stringify({
        data: {
          status: 200,
          message: "Demographics created successfully!!!",
        },
      })
    );
  } catch (error) {
    console.error(error); // Log the error

    return new Response(
      JSON.stringify({
        data: {
          status: 500,
          error: "Some error occurred with creating a demographics",
        },
      })
    );
  }
}