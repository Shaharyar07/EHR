"use client";
import Image from "next/image";
import profileImage from "@app/assets/img/user.jpg";


const CreateProfileForm = () => {
    return (
    <form >
      <div className='card-box p-4'>
        <h3 className='card-title mb-3'>Demographics</h3>
        <div className='row'>
          <div className='col-md-12'>
            <div className='profile-img-wrap'>
              <Image className='inline-block' src={profileImage} alt='user' />
              <div className='fileupload btn'>
                <span className='btn-text'>edit</span>
                <input className='upload' type='file' />
              </div>
            </div>
            <div className='profile-basic'>
              <div className='row'>

              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Name</label>
                    <input
                      type='text'
                      className='form-control floating'
                      name='phone'
                     />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Gender</label>
                    <select
                      className='form-control select'
                      name='gender'
                      >
                      <option value=''>Select Gender</option>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                    </select>
                  </div>
                </div>
              
                <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>birthDate</label>
                    <input
                      type='date'
                      className='form-control floating'
                      name='birthDate'
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group local-forms '>
                    <label className='focus-label'>Age</label>
                    <input
                      type='number'
                      className='form-control floating'
                      name='age'
                      />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Martial Status</label>
                    <select
                      className='form-control select'
                      name='gender'
                      >
                      <option value=''>Select Status</option>
                      <option value='Single'>Single</option>
                      <option value='Married'>Married</option>

                    </select>
                  </div>
                </div>
         <div className='col-md-6'>
            <div className='form-group local-forms'>
            <label className='focus-label'>Occupation</label>
            <input
               type='text'
               className='form-control floating'
               name='phone'
              />
            </div>
           </div>

           <div className='col-md-6'>
            <div className='form-group local-forms'>
            <label className='focus-label'>Race/Ethnicity</label>
            <input
               type='text'
               className='form-control floating'
               name='phone'
              />
            </div>
           </div>
           <div className='col-md-12'>
            <button
              type='submit'
              className='btn btn-primary btn-rounded center myButton' 
            >
              Submit
            </button>
          </div>
         
              </div>
            </div>
          </div>
       
        </div>
        
      </div>
     
    </form>
  );
};

export default CreateProfileForm;
