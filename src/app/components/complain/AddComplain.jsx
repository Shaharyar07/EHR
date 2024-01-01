"use client";
import React, { useState } from "react";
import SymptomHistory from "./SymptomHistory";
import FamilyHistory from "./FamilyHistory";
import Comorbidities from "./Comorbidities";
import TransfusionHistory from "./TransfusionHistory";
import LabTest from "./LabTest";
import MedicalHistory from "./MedicalHistory";
import PhysicalExamination from "./PhysicalExamination";
import ComplainHistory from "./ComplainHistory";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

const AddComplain = ({ patient }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    patientId: patient.id,
    complaint: "",
    complainHistory: {
      painCharacter: "",
      painSite: "",
      radiatingPain: "",
      timing: "",
      alleviatingFactors: "",
      symptoms: "",
      swellingSite: "",
      severitySymptom: "",
    },
    symptomHistory: {
      constitutionalSymptoms: [],
      anemiaSymptoms: [],
      neutropeniaSymptoms: [],
      thromboembolismSymptoms: [],
      lumphomaSymptoms: [],
      hyperviscositySymptoms: [],
      durationSymptom: "",
    },
    familyHistory: {
      hematologicMalignancy: [],
    },
    comorbidities: {
      syndromes: [],
      hepatitis: [],
      diabetes: "",
      surgeryInPast: [],
      tb: "",
      chemicalExposure: "",
      chemoTherapy: "",
      toxicExposure: "",
      radiations: "",
      alcohol: "",
      smoking: "",
      historyOfCancer: "",
      anemia: [],
      plateletDisorder: [],
      viralInfection: [],
      HIV: "",
    },
    physicalExamination: {
      eyes: [],
      mouthUlcer: [],
      lymphadenopathy: "",
      visceralExamination: [],
      skin: [],
      mediationalMasses: "",
    },
    transfusionHistory: {
      transfusionInPast: "",
      transfusionReaction: "",
      transplant: "",
      medicalHistory: [],
    },
    cbc: {
      wbc: "",
      rbc: "",
      platelet: "",
      neutrophils: "",
      lymphocytes: "",
    },
    labTests: {
      cbc: "",
      bloodSmear: "",
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    // Handling nested state
    const nameParts = name.split(".");
    if (nameParts.length === 2) {
      setFormState((prevState) => ({
        ...prevState,
        [nameParts[0]]: {
          ...prevState[nameParts[0]],
          [nameParts[1]]: value,
        },
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formState);
    setLoading(true);

    try {
      const response = await axios.post(
        "/api/complain",
        
        formState
      );
      const data = response?.data?.data;
      if (data.status === 200) {
        toast.success("Complain created successfully");
        setLoading(false);
        revalidatePath(`/patientprofile/${patient.id}`);
        router.push(`/patientprofile/${patient.id}`);
      } else {
        toast.error(data.message);
        setLoading(false);
      }
      setFormState({
        patientId: patient.id,
        complaint: "",
        complainHistory: {
          painCharacter: "",
          painSite: "",
          radiatingPain: "",
          timing: "",
          alleviatingFactors: "",
          symptoms: "",
          swellingSite: "",
          severitySymptom: "",
        },
        symptomHistory: {
          constitutionalSymptoms: [],
          anemiaSymptoms: [],
          neutropeniaSymptoms: [],
          thromboembolismSymptoms: [],
          lumphomaSymptoms: [],
          hyperviscositySymptoms: [],
          durationSymptom: "",
        },
        familyHistory: {
          hematologicMalignancy: [],
        },
        comorbidities: {
          syndromes: [],
          hepatitis: [],
          diabetes: "",
          surgeryInPast: [],
          tb: "",
          chemicalExposure: "",
          chemoTherapy: "",
          toxicExposure: "",
          radiations: "",
          alcohol: "",
          smoking: "",
          historyOfCancer: "",
          anemia: [],
          plateletDisorder: [],
          viralInfection: [],
          HIV: "",
        },
        physicalExamination: {
          eyes: [],
          mouthUlcer: [],
          lymphadenopathy: "",
          visceralExamination: [],
          skin: [],
          mediationalMasses: "",
        },
        transfusionHistory: {
          transfusionInPast: "",
          transfusionReaction: "",
          transplant: "",
          medicalHistory: [],
        },
        cbc: {
          wbc: "",
          rbc: "",
          platelet: "",
          neutrophils: "",
          lymphocytes: "",
        },
        labTests: {
          cbc: "",
          bloodSmear: "",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-12'>
          <div className='form-heading'>
            <h4>Patient Details</h4>
          </div>
        </div>
        <div className='col-12 col-md-6 col-xl-4'>
          <div className='form-group local-forms'>
            <label>
              Patient Name <span className='login-danger'>*</span>
            </label>
            <select className='form-control select' disabled name='patient'>
              <option value={`${patient.id}`}>{patient.name}</option>
            </select>
          </div>
        </div>
        <div className='col-12 col-md-6 col-xl-4'>
          <div className='form-group local-forms'>
            <label>
              MR Number <span className='login-danger'>*</span>
            </label>
            <input
              className='form-control'
              type='text'
              disabled
              value={patient.id}
            />
          </div>
        </div>

        <div className='col-12 col-sm-12'>
          <div className='form-group local-forms'>
            <label>
              Presenting Complain <span className='login-danger'>*</span>
            </label>
            <textarea
              className='form-control'
              rows={3}
              cols={30}
              value={formState.complaint}
              name='complaint'
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Camplain History */}
        <ComplainHistory
          complainHistory={formState.complainHistory}
          handleChange={handleChange}
        />

        {/* { Symptom History} */}
        <SymptomHistory
          symptomHistory={formState.symptomHistory}
          handleChange={handleChange}
        />

        {/* Family History */}
        <FamilyHistory
          familyHistory={formState.familyHistory}
          handleChange={handleChange}
        />

        {/* Comorbidities */}
        <Comorbidities
          comorbidities={formState.comorbidities}
          handleChange={handleChange}
        />

        {/* Transfusion and Transplant History */}
        <TransfusionHistory
          transfusionHistory={formState.transfusionHistory}
          handleChange={handleChange}
        />

        {/* Medication History */}
        <MedicalHistory
          medicalHistory={formState.transfusionHistory.medicalHistory}
          handleChange={handleChange}
        />

        {/* Physical Examination */}
        <PhysicalExamination
          physicalExamination={formState.physicalExamination}
          handleChange={handleChange}
        />

        {/* LAB Test */}
        <LabTest
          cbc={formState.cbc}
          labTests={formState.labTests}
          handleChange={handleChange}
        />

        <div className='col-md-12'>
          <button
            type='submit'
            className='btn btn-primary btn-rounded'
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddComplain;
