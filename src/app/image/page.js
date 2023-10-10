import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import UploadImage from "@app/components/forms/UploadIamge";

const page = () => {
  return (
    <main className='content'>
    
      <div className='row'>
        <div className='card '>
          <h1 className='card-header '>Take Blood Smear Test</h1>
          <UploadImage />
        </div>
      </div>
    </main>
  );
};

export default page;
