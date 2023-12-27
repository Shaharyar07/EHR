import React from "react";
import Select from "react-select";
const PhysicalExamination = ({ physicalExamination, handleChange }) => {
  const eyesOptions = [
    { value: "Jaundice", label: "Jaundice" },
    { value: "Pallor", label: "Pallor" },
    { value: "Plethora", label: "Plethora" },
  ];

  const mouthUlcersOptions = [
    { value: "Mouth Ulcer", label: "Mouth Ulcer" },
    { value: "Gum Swelling", label: "Gum Swelling" },
  ];

  const lymphadenopathyOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const visceralExaminationOptions = [
    { value: "Spleenomegaly ", label: "Spleenomegaly " },
    { value: "Hepatomegaly", label: "Hepatomegaly " },
  ];

  const skinOptions = [
    { value: "Pallor", label: "Pallor" },

    { value: "Redness", label: "Redness" },
    { value: "Cyanosis", label: "Cyanosis" },
    { value: "Petechia", label: "Petechia" },
    { value: "Excoriation", label: "Excoriation" },
    { value: "Leg Ucler", label: "Leg Ucler" },
    { value: "ecchymoses", label: "ecchymoses" },
    { value: "easy brusing", label: "easy bruising" },
  ];

  const mediastinalMassesOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
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
        name: "physicalExamination",
        value: {
          ...physicalExamination,
          ...newObject,
        },
      },
    });
  };

  return (
    <div className='card-box p-4'>
      <h3 className='card-title mb-3'>Physical Examination </h3>
      <div className='row'>
        <div className='col-md-12'>
          <div className='profile-basic2'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Eyes </label>
                  <Select
                    className='form-control select'
                    name='physicalExamination.eyes'
                    onChange={handleSelectChange}
                    options={eyesOptions}
                    isMulti
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Mouth Ulcers </label>
                  <Select
                    className='form-control select'
                    name='physicalExamination.mouthUlcer'
                    onChange={handleSelectChange}
                    options={mouthUlcersOptions}
                    isMulti
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Lymphadenopathy </label>
                  <Select
                    className='form-control select'
                    name='physicalExamination.lymphadenopathy'
                    onChange={handleSelectChange}
                    options={lymphadenopathyOptions}
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Visceral Examination</label>
                  <Select
                    className='form-control select'
                    name='physicalExamination.visceralExamination'
                    onChange={handleSelectChange}
                    options={visceralExaminationOptions}
                    isMulti
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Skin</label>
                  <Select
                    className='form-control select'
                    name='physicalExamination.skin'
                    onChange={handleSelectChange}
                    options={skinOptions}
                    isMulti
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Mediastinal Masses</label>
                  <Select
                    className='form-control select'
                    name='physicalExamination.mediationalMasses'
                    onChange={handleSelectChange}
                    options={mediastinalMassesOptions}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicalExamination;
