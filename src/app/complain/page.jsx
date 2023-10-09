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
          
            <div className='profile-basic2'>
            <h5 className='myfield'>1. Pain</h5>
              <div className='row'>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Character</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      <option value=''>Select Option</option>
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
                      <option value=''>Select Option</option>
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
                      <option value=''>Select Option</option>
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
                      <option value=''>Select Option</option>
                      <option value='exacerbate'>Exacerbating with Physical Abilities</option>
                      <option value='alleviates'>Alleviates with rest</option>
                    
                    </select>
                  </div>
                </div>
              </div>

            
            <div className='row'>
              <div className='col-md-6'>
              <h5 className=' myfield'>2. Onset of Sign & Symptoms</h5>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Sign & Symptoms</label>
                    <select
                      className='form-control select'
                      name='symptoms' placeholder='Select Sign & Symptoms'
                      >
                      <option value=''>Select Option</option>
                      <option value='Acute'>Acute</option>
                      <option value='Chronic'>Chronic</option>
                     
                    </select>
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

{/* Symptom History */}

<div className='card-box p-4'>
        <h3 className='card-title mb-3'>Symptom History</h3>
        <div className='row'>
          <div className='col-md-12'>
           <div className='profile-basic2'>
           
              <div className='row'>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Constitutional Symptoms</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'> Symptoms of Anemia</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Symptoms of Neutropenia</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'> Symptoms of Bleeding Diathesis</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
                </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'> Symptoms of Lumphoma</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
               </div>
               <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'> Symptoms of Hyperviscosity</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div>
                <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Symptoms of Trhromboembolism</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Duration of Signs and Symptomss</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* Family History */}
           
<div className='card-box p-4'>
        <h3 className='card-title mb-3'>Family History</h3>
        <div className='row'>
          <div className='col-md-12'>
           <div className='profile-basic2'>
           
              <div className='row'>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Hematologic Maliqnanay</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div>
             
             
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Comorbidities */}
<div className='card-box p-4'>
        <h3 className='card-title mb-3'>Comorbidities</h3>
        <div className='row'>
          <div className='col-md-12'>
           <div className='profile-basic2'>
           
              <div className='row'>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Hepatitis</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div>
              <div className="col-12 col-md-6 col-xl-6">
                <div className="form-group select-gender">
                 <label className="gen-label">Diabetes
                <span className="login-danger">*</span>
                    </label>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Severity" className="form-check-input" />
                    Type 1
                   </label>
                   </div>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Severity" className="form-check-input" />
                    Type 2
                   </label>
                 </div>
                </div>
            </div>
            <div className="col-md-6 ">
                <div className="form-group local-forms">
                  <label>
                   Any Surgery in the Past <span className="login-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>TB</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      <option value=''>Select Option</option>
                
                      <option value='Yes'>Yes</option>
                      <option value='No'> No</option>
                    </select>
                  </div>
              </div>
            <div className="col-md-6 ">
                <div className="form-group local-forms">
                  <label>
                  Chemicals <span className="login-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>

              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Chemotheraphy</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      <option value=''>Select Option</option>
                
                      <option value='Yes'>Yes</option>
                      <option value='No'> No</option>
                    </select>
                  </div>
              </div>
              <div className="col-md-6 ">
                <div className="form-group local-forms">
                  <label>
                  Toxins <span className="login-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>

              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Radiations</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      <option value=''>Select Option</option>
                
                      <option value='Yes'>Yes</option>
                      <option value='No'> No</option>
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Alcohol</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      <option value=''>Select Option</option>
                
                      <option value='Yes'>Yes</option>
                      <option value='No'> No</option>
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Smoking</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      <option value=''>Select Option</option>
                
                      <option value='Yes'>Yes</option>
                      <option value='No'> No</option>
                    </select>
                  </div>
              </div>
              <div className="col-md-6 ">
                <div className="form-group local-forms">
                  <label>
                   History of any type of Cancer <span className="login-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Anemia</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      <option value=''>Select Option</option>
                
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Platelet Disorder</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      <option value=''>Select Option</option>
                
                    </select>
                  </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

{/* Transfusion and Transplant History */}
      <div className='card-box p-4'>
        <h3 className='card-title mb-3'>Transfusion and Transplant History</h3>
        <div className='row'>
          <div className='col-md-12'>
           <div className='profile-basic2'>
           
           <div className='row'>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Any Transfusion recieved in the Past </label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Any Transfusion reaction </label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Any Transplant in the Past </label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Medication History </label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div>         
             
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* Physical Examination */}

                   
      <div className='card-box p-4'>
        <h3 className='card-title mb-3'>Physical Examination </h3>
        <div className='row'>
          <div className='col-md-12'>
           <div className='profile-basic2'>
           
              <div className='row'>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Eyes </label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Mouth Ulcers </label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Lymphadenopathy </label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Abdominal</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div>         
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Skin</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div> 

              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Spleen Abdominal Visceral Examination</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div> 
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Liver Visceral Examination</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      {/* <option value=''>Select Option</option>
                      <option value='Sharp'>Sharp</option>
                      <option value='Dull'>Dull</option>
                      <option value='Burning'>Burning</option>
                      <option value='Pressure Like'>Pressure Like</option> */}
                    </select>
                  </div>
              </div> 
            </div>
            </div>
          </div>
        </div>
      </div>

{/* LAB Test */}

<div className='card-box p-4'>
        <h3 className='card-title mb-3'>Transfusion and Transplant History</h3>
        <div className='row'>
          <div className='col-md-12'>
           <div className='profile-basic2'>
           
           <div className='row'>
           <div className="col-12 col-md-6 col-xl-6">
                <div className="form-group select-gender">
                 <label className="gen-label">Lab Test
                <span className="login-danger">*</span>
                    </label>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Lab" className="form-check-input" />
                    CBC
                   </label>
                   </div>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Lab" className="form-check-input" />
                    Blood Smear Examination
                   </label>
                 </div>
                 <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Lab" className="form-check-input" />
                    Specific Diagnostic tests
                   </label>
                 </div>


                 <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Lab" className="form-check-input" />
                    Specific Diagnostic tests
                   </label>
                 </div>
                 <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Lab" className="form-check-input" />
                    Microscopic Bone Marrow Examination
                   </label>
                 </div>
                </div>
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