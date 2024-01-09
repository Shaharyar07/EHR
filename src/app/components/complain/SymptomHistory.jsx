import React from "react";
import Select from "react-select";

const SymptomHistory = ({ symptomHistory, handleChange }) => {
  const constitutionalSymptomsOptions = [
    { label: "Fatigue", value: "fatigue" },
    { label: "Lethargy", value: "lethargy" },
    { label: "Malaise", value: "malaise" },
    { label: "Weight Loss", value: "weight loss" },
    { label: "Night Sweats", value: "night sweats" },
    { label: "Bone Pain", value: "bone pain" },
    { label: "Fever", value: "fever" },
    { label: "Early Satiety", value: "early satiety" },
    { label: "Vomiting", value: "vomiting" },
    { label: "Loss of Appetite", value: "loss of appetite" },
    // ... Add other options as needed
  ];

  const anemiaSymptomsOptions = [
    { label: "Fatigue", value: "fatigue" },
    { label: "Dizziness", value: "dizziness" },
    { label: "Dyspnea with Mild Exertion (SOB)", value: "Dyspnea (SOB)" },
    {
      label: "Decreased Exercise Tolerance",
      value: "Decreased Exercise Tolerance",
    },
    { label: "Headaches", value: "Headaches" },
    { label: "Pallor", value: "Pallor" },
    { label: "Worsening Angina", value: "Worsening Angina" },
    { label: "Ankle Swelling", value: "Ankle Swelling" },
    { label: "Palpitations", value: "Palpitations" },
    // ... Add other options as needed
  ];
  const thrombocytopeniaSymptomsOptions = [
    { value: "Bleeding Diathesis", label: "Bleeding Diathesis" },
    { value: "Epistaxis", label: "Epistaxis" },
    { value: "Petechiae", label: "Petechiae" },
    { value: "Ecchymoisis", label: "Ecchymoisis" },
  ];

  const lymphomaSymptomsOptions = [
    {
      value: "Enlarge/Painful Lymphnodes",
      label: "Enlarge/Painful Lymphnodes",
    },
    { value: "Painful Spleenomegaly", label: "Painful Spleenomegaly" },
    { value: "B Symptoms", label: "B Symptoms" },
  ];

  const hyperviscositySymptomsOptions = [
    { value: "Neuropathy", label: "Neuropathy" },
    { value: "Epistaxis", label: "Epistaxis" },
    { value: "Headache", label: "Headache" },
    { value: "Blurred Vision", label: "Blurred Vision" },
  ];

  const thromboembolismSymptomsOptions = [
    { value: "Swelling/Limbpain", label: "Swelling/Limbpain" },
    { value: "Chest Pain", label: "Chest Pain" },
  ];

  const durationSymptomsOptions = [
    { value: "Acute", label: "Acute" },
    { value: "Chronic", label: "Chronic" },
  ];

  const cnsSymptomsOptions = [
    { value: "Seizure", label: "Seizure" },
    { value: "Imbalance", label: "Imbalance" },
    { value: "Facial Muscle Weakness", label: "Facial Muscle Weakness" },
    { value: "Blurred Vision", label: "Blurred Vision" },
    { value: "Headache", label: "Headache" },
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
        name: "symptomHistory",
        value: {
          ...symptomHistory,
          ...newObject,
        },
      },
    });
  };

  return (
    <div className='card-box p-4'>
      <h3 className='card-title mb-3'>Signs and Symptoms</h3>
      <div className='row'>
        <div className='col-md-12'>
          <div className='profile-basic2'>
            <div className='row'>
              {/* Constitutional Symptoms */}
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Constitutional Symptoms</label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    name='constitutionalSymptoms'
                    isMulti
                    options={constitutionalSymptomsOptions}
                    className='basic-multi-select'
                    classNamePrefix='select'
                    onChange={handleSelectChange}
                  />
                </div>
              </div>

              {/* Symptoms of Anemia */}
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Symptoms of Anemia</label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    name='anemiaSymptoms'
                    className='basic-multi-select'
                    classNamePrefix='select'
                    isMulti
                    options={anemiaSymptomsOptions}
                    onChange={handleSelectChange}
                  />
                </div>
              </div>

              {/* Symptoms of Neutropenia */}
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Symptoms of Neutropenia</label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    name='neutropeniaSymptoms'
                    onChange={handleSelectChange}
                    isMulti
                    className='basic-multi-select'
                    classNamePrefix='select'
                    options={[
                      {
                        label: "Recurrent Infections",
                        value: "Recurrent Infections",
                      },
                    ]}
                  />
                </div>
              </div>

              {/* Symptoms of Thrombocytopenia */}
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>
                    Symptoms of Thrombocytopenia
                  </label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    name='thromboembolismSymptoms'
                    onChange={handleSelectChange}
                    isMulti
                    options={thrombocytopeniaSymptomsOptions}
                    className='basic-multi-select'
                    classNamePrefix='select'
                  />
                </div>
              </div>

              {/* Symptoms of Lymphoma */}
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Symptoms of Lymphoma</label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    className='basic-multi-select'
                    classNamePrefix='select'
                    name='lumphomaSymptoms'
                    onChange={handleSelectChange}
                    options={lymphomaSymptomsOptions}
                    isMulti
                  />
                </div>
              </div>

              {/* Symptoms of Hyperviscosity */}
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>
                    Symptoms of Hyperviscosity
                  </label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    className='basic-multi-select'
                    classNamePrefix='select'
                    name='hyperviscositySymptoms'
                    onChange={handleSelectChange}
                    options={hyperviscositySymptomsOptions}
                    isMulti
                  />
                </div>
              </div>

              {/* Symptoms of Thromboembolism */}
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>
                    Symptoms of Thromboembolism
                  </label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    className='basic-multi-select'
                    classNamePrefix='select'
                    name='thromboembolismSymptoms'
                    onChange={handleSelectChange}
                    options={thromboembolismSymptomsOptions}
                    isMulti
                  />
                </div>
              </div>

              {/* Duration of Signs and Symptoms */}
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>
                    Duration of Signs and Symptoms
                  </label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    className='basic-multi-select'
                    classNamePrefix='select'
                    name='durationSymptom'
                    onChange={handleSelectChange}
                    options={durationSymptomsOptions}
                  />
                </div>
              </div>

              {/* CNS Symptoms */}
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>CNS Symptoms</label>
                  <Select
                    styles={{
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    className='basic-multi-select'
                    classNamePrefix='select'
                    name='cncSymptoms'
                    onChange={handleSelectChange}
                    options={cnsSymptomsOptions}
                    isMulti
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

export default SymptomHistory;
