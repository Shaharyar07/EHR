import React from "react";

const ComplainHistory = ({ complainHistory, handleChange }) => {
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
                  <select
                    className='form-control select'
                    name='complainHistory.painCharacter'
                    value={complainHistory.painCharacter}
                    onChange={handleChange}
                    required
                  >
                    <option value=''>Select Option</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                  </select>
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
                  <select
                    className='form-control select'
                    name='complainHistory.timing'
                    value={complainHistory.timing}
                    onChange={handleChange}
                    required
                  >
                    <option value=''>Select Option</option>
                    <option value='constant'>Remains Constant</option>
                    <option value='variable'>Changes throughout the day</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>
                    Exacerbating & Alleviating Factor
                  </label>
                  <select
                    className='form-control select'
                    name='complainHistory.alleriatingFactors'
                    value={complainHistory.alleriatingFactors}
                    onChange={handleChange}
                    required
                  >
                    <option value=''>Select Option</option>
                    <option value='exacerbate'>
                      Exacerbating with Physical Abilities
                    </option>
                    <option value='alleviates'>Alleviates with rest</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6'>
                <h5 className='my-field'>2. Onset of Sign & Symptoms</h5>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Sign & Symptoms</label>
                  <select
                    className='form-control select'
                    name='complainHistory.symptoms'
                    placeholder='Select Sign & Symptoms'
                    value={complainHistory.symptoms}
                    onChange={handleChange}
                    required
                  >
                    <option value=''>Select Option</option>
                    <option value='Acute'>Acute</option>
                    <option value='Chronic'>Chronic</option>
                  </select>
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
                          name='complainHistory.severitySymptoms'
                          className='form-check-input'
                          value={severityValue}
                          onChange={handleChange}
                          checked={
                            complainHistory.severitySymptoms ===
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
