import React from "react";
import Select from "react-select";
const Comorbidities = ({ comorbidities, handleChange }) => {
  const syndromesOptions = [
    { value: "Down Syndromes", label: "Down Syndromes" },
    {
      value: "Bedkwith-Wiedeman Syndrome",
      label: "Bedkwith-Wiedeman Syndrome",
    },
    { value: "Schwachman Syndrome", label: "Schwachman Syndrome" },
    { value: "Ataxia-telangiectasia", label: "Ataxia-telangiectasia" },
    { value: "Blooms Syndrome", label: "Blooms Syndrome" },
    { value: "Fanocini Anemia", label: "Fanocini Anemia" },
    {
      value: "Nijmogen Breakage Syndrome",
      label: "Nijmogen Breakage Syndrome",
    },
  ];
  const hepatitisOptions = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
    { value: "Neonatal", label: "Neonatal Hepatitis" },
  ];
  const anemiaOptions = [
    { value: "Aplastic", label: "Aplastic Anemia" },
    { value: "Iron", label: "Iron Deficency Anemia" },
    { value: "Haemolytic", label: "Haemolytic Anemia" },
    { value: "Sickle", label: "Sickle cell Anemia" },
    { value: "Thalassemia", label: "Thalassemia" },
  ];
  const plateletOptions = [
    { value: "ITP", label: "ITP" },
    { value: "DIC", label: "DIC" },
    { value: "TTP", label: "TTP" },
    { value: "HUS", label: "HUS" },
    { value: "HELLP", label: "HELLP" },
  ];
  const viralOptions = [
    {
      value: "Influenza in child or mother",
      label: "Influenza in child or mother",
    },
    {
      value: "Measles in child or mother",
      label: "Measles in child or mother",
    },
    { value: "Mumps in child or mother", label: "Mumps in child or mother" },
    {
      value: "Chicken pox in child or mother",
      label: "Chicken pox in child or mother",
    },
  ];

  const handleSelectChange = (selectedOptions, { name }) => {
    // Extracting the last part of the name (after the last dot)
    const dropdownName = name.split(".").pop();
    // Creating a new object with the name of the dropdown and the selected options
    const newObject = {
      [dropdownName]: selectedOptions,
    };
    // Updating the state with the new object
    handleChange({
      target: {
        name: "comorbidities",
        value: {
          ...comorbidities,
          ...newObject,
        },
      },
    });
  };

  return (
    <div className='card-box p-4'>
      <h3 className='card-title mb-3'>Comorbidities</h3>
      <div className='row'>
        <div className='col-md-12'>
          <div className='profile-basic2'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Syndromes</label>
                  <Select
                    isMulti
                    name='Syndromes'
                    options={syndromesOptions}
                    className='basic-multi-select'
                    classNamePrefix='select'
                    onChange={handleSelectChange}
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Hepatitis</label>
                  <Select
                    isMulti
                    name='hepatitis'
                    options={hepatitisOptions}
                    className='basic-multi-select'
                    classNamePrefix='select'
                    onChange={handleSelectChange}
                  />
                </div>
              </div>
              <div className='col-12 col-md-6 col-xl-6'>
                <div className='form-group select-gender'>
                  <label className='gen-label'>
                    Diabetes
                    <span className='login-danger'>*</span>
                  </label>
                  <div className='form-check-inline'>
                    <label className='form-check-label'>
                      <input
                        type='radio'
                        name='comorbidities.diabetes'
                        className='form-check-input'
                        checked={comorbidities.diabetes === "Type 1"}
                        value='Type 1'
                        onChange={handleChange}
                      />
                      Type 1
                    </label>
                  </div>
                  <div className='form-check-inline'>
                    <label className='form-check-label'>
                      <input
                        type='radio'
                        name='comorbidities.diabetes'
                        className='form-check-input'
                        checked={comorbidities.diabetes === "Type 2"}
                        value='Type 2'
                        onChange={handleChange}
                      />
                      Type 2
                    </label>
                  </div>
                </div>
              </div>
              <div className='col-md-6 '>
                <div className='form-group local-forms'>
                  <label>
                    Any Surgery in the Past{" "}
                    <span className='login-danger'>*</span>
                  </label>
                  <input
                    className='form-control'
                    type='text'
                    value={comorbidities.surgeryInPast}
                    onChange={handleChange}
                    name='comorbidities.surgeryInPast'
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>TB</label>
                  <Select
                    name='TB'
                    options={[
                      {
                        label: "Yes",
                        value: "Yes",
                      },
                      {
                        label: "No",
                        value: "No",
                      },
                    ]}
                    className='basic-select'
                    classNamePrefix='select'
                    onChange={handleSelectChange}
                  />
                </div>
              </div>
              <div className='col-md-6 '>
                <div className='form-group local-forms'>
                  <label>
                    Chemical Exposure <span className='login-danger'>*</span>
                  </label>
                  <input
                    className='form-control'
                    type='text'
                    value={comorbidities.chemicalExposure}
                    onChange={handleChange}
                    name='comorbidities.chemicalExposure'
                  />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Chemotheraphy</label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'> No</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6 '>
                <div className='form-group local-forms'>
                  <label>
                    Toxins <span className='login-danger'>*</span>
                  </label>
                  <input className='form-control' type='text' />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Radiations</label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>

                    <option value='Yes'>Yes</option>
                    <option value='No'> No</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Alcohol</label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>

                    <option value='Yes'>Yes</option>
                    <option value='No'> No</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Smoking</label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>

                    <option value='Yes'>Yes</option>
                    <option value='No'> No</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6 '>
                <div className='form-group local-forms'>
                  <label>
                    History of any type of Cancer{" "}
                    <span className='login-danger'>*</span>
                  </label>
                  <input className='form-control' type='text' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Anemia</label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>
                    <option value='Aplastic'>Aplastic Anemia</option>
                    <option value='Iron'>Iron Deficency Anemia</option>
                    <option value='Haemolytic'>Haemolytic Anemia</option>
                    <option value='Sickle'>Sickle cell Anemia</option>
                    <option value='Thalassemia'>Thalassemia</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Platelet Disorder</label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>
                    <option value='ITP'>ITP</option>
                    <option value='DIC'>DIC</option>
                    <option value='TTP'>TTP</option>
                    <option value='HUS'>HUS</option>
                    <option value='HELLP'>HELLP</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>
                    History of Viral Infections
                  </label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>
                    <option value='Influenza in child or mother'>
                      Influenza in child or mother
                    </option>
                    <option value='Measles in child or mother'>
                      Measles in child or mother
                    </option>
                    <option value='Mumps in child or mother'>
                      Mumps in child or mother
                    </option>
                    <option value='Chicken pox in child or mother'>
                      Chicken pox in child or mother
                    </option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>HIV In Parent</label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>

                    <option value='Yes'>Yes</option>
                    <option value='No'> No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comorbidities;
