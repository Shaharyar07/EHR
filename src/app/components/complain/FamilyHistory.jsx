import React from "react";
import Select from "react-select";
const FamilyHistory = ({ familyHistory, handleChange }) => {
  const hematologicMalignancyOptions = [
    { value: "AML", label: "AML" },
    { value: "ALL", label: "ALL" },
    { value: "CML", label: "CML" },
    { value: "CLL", label: "CLL" },
    { value: "Lymphoma", label: "Lymphoma" },
    {
      value: "Inherited Hematologic Disorder",
      label: "Inherited Hematologic Disorder",
    },
    { value: "Haemchromatosis", label: "Haemchromatosis" },
    { value: "Haemophilia", label: "Haemophilia" },
    { value: "Thalessimia", label: "Thalessimia" },
    { value: "LPNs", label: "LPNs" },
    { value: "Sibling", label: "Any Sibling with ALL" },
    { value: "twin", label: "Any Identical twin with ALL Disorder" },
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
        name: "familyHistory",
        value: {
          ...familyHistory,
          ...newObject,
        },
      },
    });
  };

  return (
    <div className='card-box p-4'>
      <h3 className='card-title mb-3'>Family History</h3>
      <div className='row'>
        <div className='col-md-12'>
          <div className='profile-basic2'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Hematologic Malignancy</label>
                  <Select
                    className='form-control select'
                    name='hematologicMalignancy'
                    options={hematologicMalignancyOptions}
                    isMulti
                    onChange={handleSelectChange}
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

export default FamilyHistory;
