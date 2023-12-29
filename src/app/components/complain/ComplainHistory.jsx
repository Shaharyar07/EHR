import React from "react";
import Select from "react-select";

const ComplainHistory = ({ complainHistory, handleChange }) => {
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
        name: "complainHistory",
        value: {
          ...complainHistory,
          ...newObject,
        },
      },
    });
  };

  return (
    <div className='card-box p-4'>
      <h3 className='card-title mb-3'>History of Presenting Complain</h3>
      <div className='row'>
        <div className='col-md-12'>
          <div className='profile-basic2'>
            <h5 className='my-field'>1. Pain</h5>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>
                    Generalized Bone & Joint Pain
                  </label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    className='form-control select'
                    name='complainHistory.painCharacter'
                    onChange={handleSelectChange}
                    options={[
                      { value: "Yes", label: "Yes" },
                      { value: "No", label: "No" },
                    ]}
                    required
                  />
                </div>
              </div>
              <div className='col-12 col-md-6 col-xl-6'>
                <div className='form-group select-gender'>
                  <label className='gen-label'>
                    Site
                    <span className='login-danger'>*</span>
                  </label>
                  <div className='form-check-inline'>
                    <label className='form-check-label'>
                      <input
                        type='radio'
                        name='complainHistory.painSite'
                        className='form-check-input'
                        value='Unilateral Localized'
                        onChange={handleChange}
                        checked={
                          complainHistory.painSite === "Unilateral Localized"
                        }
                      />
                      Unilateral Localized
                    </label>
                  </div>
                  <div className='form-check-inline'>
                    <label className='form-check-label'>
                      <input
                        type='radio'
                        name='complainHistory.painSite'
                        className='form-check-input'
                        value='Bilateral Localized'
                        onChange={handleChange}
                        checked={
                          complainHistory.painSite === "Bilateral Localized"
                        }
                      />
                      Bilateral Localized
                    </label>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>
                    Unilateral or Bilateral Localized Site
                  </label>

                  <input
                    className='form-control'
                    type='text'
                    name='complainHistory.radiatingPain'
                    value={complainHistory.radiatingPain}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Timing</label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    className='form-control select'
                    name='complainHistory.timing'
                    onChange={handleSelectChange}
                    options={[
                      { value: "Morning", label: "Morning" },
                      { value: "Evening", label: "Evening" },
                      { value: "Night", label: "Night" },
                      { value: "All Day", label: "All Day" },
                    ]}
                    required
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>
                    Exacerbating & Alleviating Factor
                  </label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    className='form-control select'
                    name='complainHistory.alleviatingFactors'
                    onChange={handleSelectChange}
                    options={[
                      { value: "Exacerbating", label: "Exacerbating" },
                      { value: "Alleviating", label: "Alleviating" },
                    ]}
                    required
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6'>
                <h5 className='my-field'>2. Onset of Sign & Symptoms</h5>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Sign & Symptoms</label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    className='form-control select'
                    name='complainHistory.symptoms'
                    onChange={handleSelectChange}
                    options={[
                      { value: "Gradual", label: "Gradual" },
                      { value: "Sudden", label: "Sudden" },
                    ]}
                    required
                  />
                </div>
              </div>

              <div className='col-md-6'>
                <h5 className='col-md-6 my-field'>3. Swelling</h5>
                <div className='form-group local-forms'>
                  <label>
                    Site <span className='login-danger'>*</span>
                  </label>
                  <input
                    className='form-control'
                    type='text'
                    value={complainHistory.swellingSite}
                    onChange={handleChange}
                    name='complainHistory.swellingSite'
                    required
                  />
                </div>
              </div>
            </div>
            <h5 className='my-field'>4. Severity of Symptoms</h5>
            <div className='col-12 col-md-6 col-xl-6'>
              <div className='form-group'>
                <label className='gen-label'>
                  Severity of Symptoms
                  <span className='login-danger'>*</span>
                </label>

                {[...Array(10)].map((_, index) => {
                  const severityValue = index + 1;
                  return (
                    <div className='form-check-inline' key={severityValue}>
                      <label className='form-check-label'>
                        <input
                          type='radio'
                          name='complainHistory.severitySymptom'
                          className='form-check-input'
                          value={severityValue}
                          onChange={handleChange}
                          checked={
                            complainHistory.severitySymptom ===
                            severityValue.toString()
                          }
                        />
                        {severityValue}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplainHistory;
