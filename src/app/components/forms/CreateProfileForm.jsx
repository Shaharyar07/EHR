"use client";
import Image from "next/image";
import profileImage from "@app/assets/img/user.jpg";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import axios from "axios";
import toast from "react-hot-toast";
const CreateProfileForm = () => {
  const { pending } = useFormStatus();
  const [profile, setProfile] = useState({
    name: "",
    gender: "",
    age: "",
    bloodGroup: "",
    maritalStatus: "",
    occupation: "",
    race: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(profile);
    try {
      const response = await axios.post("/api/demographics", profile);
      console.log(response.data);
      const data = response?.data?.data;
      if (data.status === 200) {
        toast.success("Profile created successfully");
        setProfile({
          name: "",
          gender: "",
          age: "",
          bloodGroup: "",
          maritalStatus: "",
          occupation: "",
          race: "",
          phoneNumber: "",
          email: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
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
                      required
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
                      required
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
                      required
                    />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='form-group local-forms '>
                    <label className='focus-label'>Blood Group</label>
                    <input
                      type='text'
                      className='form-control floating'
                      name='bloodGroup'
                      value={profile.bloodGroup}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Martial Status</label>
                    <select
                      className='form-control select'
                      name='maritalStatus'
                      value={profile.maritalStatus}
                      onChange={handleInputChange}
                      required
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
                      required
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
                      required
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Phone Number</label>
                    <input
                      type='tel'
                      className='form-control floating'
                      name='phoneNumber'
                      value={profile.phoneNumber}
                      onChange={handleInputChange}
                      required
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
                      required
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <button
                    type='submit'
                    className='btn btn-primary btn-rounded mt-4 float-right'
                    disabled={pending}
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
