"use client";

import { useState } from "react";
import axios from "axios";

const AddVitals = ({ patients }) => {
  const [formState, setFormState] = useState({
    patientId: "",
    bloodPressure: "",
    pulseRate: "",
    temperature: "",
    respiratoryRate: "",
    weight: "",
    height: "",
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const response = await axios.post("/api/vitals", formState);

      const data = response?.data?.data;
      console.log(data);
      if (data.status === 200) {
        alert("Vitals created successfully");
      } else {
        alert(data.message || "Something went wrong");
      }
      setFormState({
        patientId: "",
        bloodPressure: "",
        pulseRate: "",
        temperature: "",
        respiratoryRate: "",
        weight: "",
        height: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-12'>
          <div className='form-heading'>
            <h4>Patient Vitals</h4>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form-group local-forms'>
            <label>
              Patient Name <span className='login-danger'>*</span>
            </label>
            <select
              className='form-control select'
              name='patientId'
              onChange={handleChange}
            >
              <option value=''>Select patient</option>
              {patients.map((patient) => (
                <option key={patient.id} value={patient.id}>
                  {patient.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form-group local-forms'>
            <label>
              MR Number <span className='login-danger'>*</span>
            </label>
            <input
              className='form-control'
              type='text'
              disabled
              name='mrNumber'
              value={formState.patientId || ""}
            />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6 '>
          <div className='form-group local-forms'>
            <label>
              bloodPressure <span className='login-danger'>*</span>
            </label>
            <input
              className='form-control'
              type='text'
              name='bloodPressure'
              value={formState.bloodPressure}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='col-md-6 '>
          <div className='form-group local-forms'>
            <label>
              Pulse Rate<span className='login-danger'>*</span>
            </label>
            <input
              className='form-control'
              type='text'
              name='pulseRate'
              value={formState.pulseRate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className=' col-md-6 '>
          <div className='form-group local-forms'>
            <label>
              Temprature<span className='login-danger'>*</span>
            </label>
            <input
              className='form-control'
              type='text'
              name='temperature'
              value={formState.temperature}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='col-md-6 '>
          <div className='form-group local-forms'>
            <label>
              Respiratory Rate<span className='login-danger'>*</span>
            </label>
            <input
              className='form-control'
              type='text'
              name='respiratoryRate'
              value={formState.respiratoryRate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 '>
          <div className='form-group local-forms'>
            <label>
              Weight<span className='login-danger'>*</span>
            </label>
            <input
              className='form-control'
              type='text'
              name='weight'
              value={formState.weight}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='col-md-6 '>
          <div className='form-group local-forms'>
            <label>
              Height<span className='login-danger'>*</span>
            </label>
            <input
              className='form-control'
              type='text'
              name='height'
              value={formState.height}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className='col-md-12'>
        <button type='submit' className=' btn btn-primary'>
          Submit Vitals
        </button>
      </div>
    </form>
  );
};

export default AddVitals;
