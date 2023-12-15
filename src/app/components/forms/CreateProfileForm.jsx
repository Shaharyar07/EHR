"use client";
import Image from "next/image";
import profileImage from "@app/assets/img/user.jpg";
// import { DateTime } from "luxon";
import { useState } from "react";
// import toast from "react-hot-toast";
const CreateProfileForm = () => {

  // const router = useRouter();
  // const [createUserProfile, { isLoading, isError }] = useCreateUserProfileMutation();
  const [profile, setProfile] = useState({
    name: "",
    gender: "",
    age: "",
    bloodGroup: "",
    maritalStatus: "",
    occupation: "",
    race: "",
    phoneNumber: "",
    email: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    
  };


    return (
    <form onSubmit={handleSubmit}>
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
                      name='name'
                      value={profile.name}
                      onChange={handleInputChange}
                     />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Gender</label>
                    <select
                      className='form-control select'
                                            name='gender'
                      value={profile.gender}
                      onChange={handleInputChange}
                      >
                      <option value=''>Select Gender</option>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                    </select>
                  </div>
                </div>
              
              
                <div className='col-md-6'>
                  <div className='form-group local-forms '>
                    <label className='focus-label'>Age</label>
                    <input
                      type='number'
                      className='form-control floating'
                      name='age'
                      value={profile.age}
                      onChange={handleInputChange}
                      />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='form-group local-forms '>
                    <label className='focus-label'>Blood Group</label>
                    <input
                      type='String'
                      className='form-control floating'
                      name='Blood group'
                      value={profile.bloodGroup}
                      onChange={handleInputChange}
                      />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Martial Status</label>
                    <select
                      className='form-control select'
                      name='martial status'
                      value={profile.maritalStatus}
                      onChange={handleInputChange}
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
               name='occupation'
               value={profile.occupation}
                onChange={handleInputChange}
              />
            </div>
           </div>

           <div className='col-md-6'>
            <div className='form-group local-forms'>
            <label className='focus-label'>Race/Ethnicity</label>
            <input
               type='text'
               className='form-control floating'
               name='race'
               value={profile.race}
                onChange={handleInputChange}
              />
            </div>
           </div>
           <div className='col-md-6'>
            <div className='form-group local-forms'>
            <label className='focus-label'>Phone Number</label>
            <input
               type='text'
               className='form-control floating'
               name='phone number'
                value={profile.phoneNumber}
                  onChange={handleInputChange}
              />
            </div>
           </div>
           <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>email</label>
                    <input
                      type='email'
                      className='form-control floating'
                      name='email'
                      value={profile.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
           <div className='col-md-12'>
            <button
              type='submit'
              className='btn btn-primary btn-rounded center myButton' 
            
            >
                Create Profile
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
