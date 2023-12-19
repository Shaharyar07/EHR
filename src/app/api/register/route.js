import bcrypt from "bcrypt";
import prisma from "@app/utils/prismadb";

export async function POST(request) {
  if (process.env.NODE_ENV !== "development") {
    return new Response(
      JSON.stringify({
        message: "This route is not accessible in production",
        status: 403,
      })
    );
  }
  try {
    const body = await request.json();
    const { name, email, password } = body;

    //check if user already exists
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExists) {
      return new Response(
        JSON.stringify({
          message: "User already exists",
          status: 400,
        })
      );
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        role: "RECEPTIONIST",
      },
    });

    return new Response(
      JSON.stringify({
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        status: 200,
      })
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        message: "Internal server error",
        status: 400,
      })
    );
  }
}

export async function GET(request) {
  return new Response(
    JSON.stringify({
      message: "This is the register route",
      status: 200,
    })
  );
}
