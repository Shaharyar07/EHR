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
          <div className="col-12 col-md-6 col-xl-4">
                <div className="form-group local-forms">
                  {/* Opthalogist will add MR number of the patient, whose image is being uploaded  */}
                  <label>
                    MR Number <span className="login-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>   
          <UploadImage />
        </div>
      </div>
    </main>
  );
};

export default page;
