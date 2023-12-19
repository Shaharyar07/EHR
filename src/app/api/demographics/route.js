//post request to create a new patient
import prisma from "@app/utils/prismadb";

export async function POST(request) {
  //get the body of the request
  const body = await request.json();
  const {
    name,
    gender,
    age,
    bloodGroup,
    maritalStatus,
    occupation,
    race,
    phoneNumber,
    email,
    
  } = body;
}
