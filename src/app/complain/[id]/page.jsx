import AddComplain from "@app/components/complain/AddComplain";
import prisma from "@app/utils/prismadb";
import React from "react";
const getPatientProfile = async (id) => {
  const patient = await prisma.patient.findUnique({
    where: {
      id,
    },
  });
  return patient || {};
};
export default async function Page({ params }) {
  const { id } = params;
  const patient = await getPatientProfile(id);
  console.log("Complain:", patient);
  return (
    <div className='row '>
      <div className='col-sm-12'>
        <div className='card'>
          <div className='card-body'>
            <AddComplain patient={patient} />
          </div>
        </div>
      </div>
    </div>
  );
}
