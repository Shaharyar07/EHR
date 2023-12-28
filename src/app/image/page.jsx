import "bootstrap/dist/css/bootstrap.css";
import UploadImage from "@app/components/forms/UploadIamge";
import prisma from "@app/utils/prismadb";
export const dynamic = "force-dynamic";
const getPatients = async () => {
  const patients = await prisma.patient.findMany();
  return patients || [];
};

export default async function Page() {
  const patients = await getPatients();

  return (
    <main className='content'>
      <div className='row'>
        <div className='card '>
          <h1 className='card-header '>Take Blood Smear Test</h1>

          <UploadImage patients={patients} />
        </div>
      </div>
    </main>
  );
}
