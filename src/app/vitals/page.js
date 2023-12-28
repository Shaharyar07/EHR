import AddVitals from "@app/components/vitals/AddVitals";
import prisma from "@app/utils/prismadb";
import React from "react";
export const dynamic = "force-dynamic";
const getPatients = async () => {
  const patients = await prisma.patient.findMany();
  return patients || [];
};

export default async function Page() {
  const patients = await getPatients();

  return (
    <div className='row '>
      <div className='col-sm-12'>
        <div className='card'>
          <div className='card-body'>
            <AddVitals patients={patients} />
          </div>
        </div>
      </div>
    </div>
  );
}
