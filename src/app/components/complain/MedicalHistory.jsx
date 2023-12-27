import React from "react";
import Select from "react-select";

const MedicalHistory = ({ medicalHistory, handleChange }) => {
  const medicalOptions = [
    { value: "hakeem", label: "Hakeem Medication" },
    { value: "Antimalarial Drug", label: "Antimalarial Drug" },
    { value: "Antiplatelets", label: "Antiplatelets" },
    { value: "Oral Contraceptives", label: "Oral Contraceptives" },
    { value: "Hormone Replacement", label: "Hormone Replacement" },
    { value: "COX-2 Inhibitors", label: "COX-2 Inhibitors" },
    { value: "Erythropoietin", label: "Erythropoietin" },
    { value: "Warfarin", label: "Warfarin" },
    { value: "Antipsychotics", label: "Antipsychotics" },
    { value: "Anticonvulsauts", label: "Anticonvulsauts" },
    { value: "Antithyroid Drugs", label: "Antithyroid Drugs" },
    { value: "Antibiotics", label: "Antibiotics" },
    { value: "Chemotherapy", label: "Chemotherapy" },
    { value: "Adreraline", label: "Adreraline" },
    { value: "Lithium", label: "Lithium" },
    { value: "G-CSF", label: "G-CSF" },
    { value: "Penicillin", label: "Penicillin" },
    { value: "Cephalosporing", label: "Cephalosporing" },
    { value: "Carbamazepine", label: "Carbamazepine" },
    { value: "H2-blokers", label: "H2-blokers" },
    { value: "PPIS", label: "PPIS" },
    { value: "Phenytoin", label: "Phenytoin" },
  ];

  const handleSelectChange = (selectedOptions, { name }) => {
    // Ensure selectedOptions is an array
    if (!Array.isArray(selectedOptions)) {
      selectedOptions = [selectedOptions];
    }

    // Extracting the last part of the name (after the last dot)
    const dropdownName = name.split(".").pop();
    // Creating a new object with the name of the dropdown and the selected options
    const newObject = {
      [dropdownName]: selectedOptions.map((option) => option.value),
    };
    // Updating the state with the new object
    handleChange({
      target: {
        name: "transfusionHistory.medicalHistory",
        value: {
          ...medicalHistory,
          ...newObject,
        },
      },
    });
  };

  return (
    <div className='card-box p-4'>
      <h3 className='card-title mb-3'>Medication History </h3>
      <div className='row'>
        <div className='col-md-6'>
          <div className='form-group local-forms'>
            <label className='focus-label'>Medication History </label>
            <Select
              className='form-control select'
              name='transfusionHistory.medicalHistory'
              onChange={handleSelectChange}
              options={medicalOptions}
              isMulti
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
