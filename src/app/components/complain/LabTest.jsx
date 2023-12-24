import React from 'react'

const LabTest = () => {
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
                        <input className='form-control' type='text' />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'> RBC</label>
                        <input className='form-control' type='text' />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'> Platelets</label>
                        <input className='form-control' type='text' />
                      </div>
                    </div>

                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'> Neutrophils</label>
                        <input className='form-control' type='text' />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'> Lymphocytes</label>
                        <input className='form-control' type='text' />
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
              <input type='radio' name='Lab' className='form-check-input' />
              CBC
            </label>
          </div>
          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input type='radio' name='Lab' className='form-check-input' />
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
}

export default LabTest