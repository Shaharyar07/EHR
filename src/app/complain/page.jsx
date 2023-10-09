import React from 'react'

const page = () => {
  return (
  <>
   <div className="row ">
    <div className="col-sm-12">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-12">
                <div className="form-heading">
                  <h4>Patient Details</h4>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-4">
                <div className="form-group local-forms">
                  <label>
                    Patient Name <span className="login-danger">*</span>
                  </label>
                 <select
                      className='form-control select'
                      name='patient'
                      >
                      <option value=''>Select patient</option>              
                </select>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-4">
                <div className="form-group local-forms">
                  <label>
                    MR Number <span className="login-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
        
              <div className="col-12 col-sm-12">
                <div className="form-group local-forms">
                  <label>
                    Presenting Complain <span className="login-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows={3}
                    cols={30}
                    defaultValue={""}
                  />
                </div>
                </div>  

       <div className='card-box p-4'>
        <h3 className='card-title mb-3'>History of Presenting Complain</h3>
        <div className='row'>
          <div className='col-md-12'>
          
            <div className='profile-basic'>
            <h5 className='myfield'>1. Pain</h5>
              <div className='row'>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Character</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      <option value=''>Select Character</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option>
                    </select>
                  </div>
                </div>
              <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group select-gender">
                        <label className="gen-label">Site
                    <span className="login-danger">*</span>
                        </label>
                        <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" name="Site" className="form-check-input" />
                            Unilateral Localized
                        </label>
                        </div>
                        <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" name="Site" className="form-check-input" />
                            Bilateral Localized
                        </label>
                        </div>

                        <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" name="Site" className="form-check-input" />
                            Generalized
                        </label>
                        </div>
                     </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Radiating Pain</label>
                    <select
                      className='form-control select'
                      name='radiating pain'
                      >
                      <option value=''>Select Radiating Pain</option>
                      <option value='Yes'>Yes</option>
                      <option value='No'>No</option>
                    
                    </select>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Timing</label>
                    <select
                      className='form-control select'
                      name='timing'
                      >
                      <option value=''>Select Timing</option>
                      <option value='constant'>Remains Constant</option>
                      <option value='variable'>Changes throughout the day</option>
                    
                    </select>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Exacerbating & Alleriating Factor</label>
                    <select
                      className='form-control select'
                      name='ExacerbatingFactor'
                      >
                      <option value=''>Select Exacerbating & Alleriating Factor</option>
                      <option value='exacerbate'>Exacerbating with Physical Abilities</option>
                      <option value='alleviates'>Alleviates with rest</option>
                    
                    </select>
                  </div>
                </div>
              </div>

            
            <div className='row'>
              <div className='col-md-6'>
              <h5 className='col-md-6 myfield'>2. Onset of Sign & Symptoms</h5>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Sign & Symptoms</label>
                    <select
                      className='form-control select'
                      name='symptoms' placeholder='Select Sign & Symptoms'
                      >
                      <option value=''>Select Sign & Symptoms</option>
                      <option value='Acute'>Acute</option>
                      <option value='Chronic'>Chronic</option>
                     
                    </select>
                  </div>
                </div>
            </div>
            
            <div className=" col-md-6 ">
            <h5 className='col-md-6 myfield'>3. Swelling</h5>
                <div className="form-group local-forms">
                <label>
                Site <span className="login-danger">*</span>
                </label>
                <input className="form-control" type="text" />
                </div>
            </div>
          
            <h5 className='myfield'>4. Severity of Symptoms</h5>
            <div className="col-12 col-md-6 col-xl-6">
                <div className="form-group select-gender">
                 <label className="gen-label">Severity of Symptoms
                <span className="login-danger">*</span>
                    </label>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Severity" className="form-check-input" />
                    0
                   </label>
                   </div>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Severity" className="form-check-input" />
                    1
                   </label>
                   </div>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Severity" className="form-check-input" />
                    2
                   </label>
                   </div>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Severity" className="form-check-input" />
                    3
                   </label>
                   </div>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Severity" className="form-check-input" />
                    4
                   </label>
                   </div>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Severity" className="form-check-input" />
                    5
                   </label>
                   </div>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Severity" className="form-check-input" />
                    6
                   </label>
                   </div>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Severity" className="form-check-input" />
                    7
                   </label>
                   </div>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Severity" className="form-check-input" />
                    8
                   </label>
                   </div>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Severity" className="form-check-input" />
                    9
                   </label>
                   </div>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Severity" className="form-check-input" />
                    10
                   </label>
                   </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>

{/* Part 5 Starts here */}

<div className='card-box p-4'>
        <h3 className='card-title mb-3'>History of Presenting Complain</h3>
        <div className='row'>
        <div className='col-md-12'>
        <div className='profile-basics'></div>
        <div className='row'>
              <div className="col-12 col-md-6 col-xl-4">
                <div className="form-group local-forms">
                  
                <label className='focus-label'>Constitutional Symptoms</label>
                    <select
                      className='form-control select'
                      name='symptoms' placeholder=''
                      >
                      <option value=''>Constitutional Symptoms</option>
                      <option value='Acute'>Acute</option>
                      
                     
                    </select>
                </div>
              </div>
         
  
            
      </div>
        </div>
        </div>
      </div>

           
          <div className='col-md-12'>
            <button
              type='submit'
              className='btn btn-primary btn-rounded center'
            >
              Submit
            </button>
          </div>
    </div>
        </form>
        </div>
              </div>
              </div>
          
       
    </div>


  </>
  
  )
}

export default page