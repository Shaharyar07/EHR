import React from "react";
import Select from "react-select";

const LabTest = ({ cbc, labTests, handleChange }) => {
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
        name: "labTests",
        value: {
          ...labTests,
          ...newObject,
        },
      },
    });
  };

  return (
    <div className='row'>
      <div className='col-12 col-md-6 col-xl-6'>
        <div className='form-group select-gender'>
          <h3 className='card-title mb-3'> Lab test </h3>
          <div className='card-box p-4'>
            <label className='card-title mb-3 '>
              CBC(if values available)
              <span className='login-danger'>*</span>
            </label>
            <div className='row'>
              <div className='col-md-12'>
                <div className='profile-basic2'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'> WBC</label>
                        <input
                          className='form-control'
                          type='text'
                          value={cbc.wbc}
                          onChange={handleChange}
                          name='cbc.wbc'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'> RBC</label>
                        <input
                          className='form-control'
                          type='text'
                          value={cbc.rbc}
                          onChange={handleChange}
                          name='cbc.rbc'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'> Platelets</label>
                        <input
                          className='form-control'
                          type='text'
                          value={cbc.platelet}
                          onChange={handleChange}
                          name='cbc.platelet'
                        />
                      </div>
                    </div>

                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'> Neutrophils</label>
                        <input
                          className='form-control'
                          type='text'
                          value={cbc.neutrophils}
                          onChange={handleChange}
                          name='cbc.neutrophils'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'> Lymphocytes</label>
                        <input
                          className='form-control'
                          type='text'
                          value={cbc.lymphocytes}
                          onChange={handleChange}
                          name='cbc.lymphocytes'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label className='card-title mb-3 '>
            Order Lab Test
            <span className='login-danger'>*</span>
          </label>
          <br></br>
          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input
                type='radio'
                name='labTests.cbc'
                className='form-check-input'
                value='cbc'
                onChange={handleChange}
                checked={labTests.cbc === "cbc"}
              />{" "}
              CBC
            </label>
          </div>
          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input
                type='radio'
                name='labTests.bloodSmear'
                className='form-check-input'
                value='bloodSmear'
                onChange={handleChange}
                checked={labTests.bloodSmear === "bloodSmear"}
              />
              Blood Smear Examination
            </label>
          </div>
          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input type='radio' name='Lab' className='form-check-input' />
              Specific Diagnostic tests
            </label>
          </div>

          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input type='radio' name='Lab' className='form-check-input' />
              Specific Diagnostic tests
            </label>
          </div>
          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input type='radio' name='Lab' className='form-check-input' />
              Microscopic Bone Marrow Examination
            </label>
          </div>

          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input type='radio' name='Lab' className='form-check-input' />
              Bone Marrow Biopsy
            </label>
          </div>
          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input type='radio' name='Lab' className='form-check-input' />
              Cytochemistry
            </label>
          </div>

          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input type='radio' name='Lab' className='form-check-input' />
              Flow aytometry and Immunohistochemistry
            </label>
          </div>

          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input type='radio' name='Lab' className='form-check-input' />
              Chromosome tests
            </label>
          </div>

          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input type='radio' name='Lab' className='form-check-input' />
              Cytogenetics
            </label>
          </div>

          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input type='radio' name='Lab' className='form-check-input' />
              Fluorescent in situ hybridization(FISH)
            </label>
          </div>

          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input type='radio' name='Lab' className='form-check-input' />
              Other molecular and Genetic Lumbar Puncture Test
            </label>
          </div>
          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input type='radio' name='Lab' className='form-check-input' />
              Other molecular and Genetic Lymph Node Biopsy Test
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabTest;
