import React from "react";
import Select from "react-select";

const TransfusionHistory = ({ transfusionHistory, handleChange }) => {
  const transfusionOptions = [
    { value: "RCB", label: "RCB" },
    { value: "Platelets", label: "Platelets" },
    { value: "Plasma Products", label: "Plasma Products" },
  ];

  const transplantOptions = [
    { value: "Autologous Stem cell", label: "Autologous Stem cell" },
    { value: "Allogenic Stem cell", label: "Allogenic Stem cell" },
  ];

  const infectionOptions = [
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
        name: "transfusionHistory",
        value: {
          ...transfusionHistory,
          ...newObject,
        },
      },
    });
  };

  return (
    <div className='card-box p-4'>
      <h3 className='card-title mb-3'>Transfusion and Transplant History</h3>
      <div className='row'>
        <div className='col-md-12'>
          <div className='profile-basic2'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>
                    Any Transfusion recieved in the Past{" "}
                  </label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    className='form-control select'
                    name='transfusionHistory.transfusionInPast'
                    onChange={handleSelectChange}
                    options={transfusionOptions}
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>
                    Any Transfusion infection reaction{" "}
                  </label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    className='form-control select'
                    name='transfusionHistory.transfusionReaction'
                    onChange={handleSelectChange}
                    options={infectionOptions}
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>
                    Any Transplant in the Past{" "}
                  </label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    className='form-control select'
                    name='transfusionHistory.transplant'
                    onChange={handleSelectChange}
                    options={transplantOptions}
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

export default TransfusionHistory;
