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
            <h5>1.Pain</h5>
              <div className='row'>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Character</label>
                    <select
                      className='form-control select'
                      name='gender'
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
                            <input type="radio" name="Unilateral Localized" className="form-check-input" />
                            Unilateral Localized
                        </label>
                        </div>
                        <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" name="Bilateral Localized" className="form-check-input" />
                            Bilateral Localized
                        </label>
                    </div>

                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" name="Unilateral Localized" className="form-check-input" />
                            Generalized
                        </label>
                        </div>
        </div>
                </div>
             
               
              
                
                        
               

              </div>
            </div>
          </div>
        </div>
      </div>



              {/* <div className='card-box'>
              <h3 className='card-title mb-3'>History of Presenting Complain</h3>
              <div className='row'>
              <div className=' col-md-12'>
            <div className='form-group local-forms'>
              <label className='focus-label'>Medical History</label>
            
               </div> */}

          
            {/* </div>
            </div>
            </div> */}

          <div className='col-md-12'>
            <button
              type='submit'
              className='btn btn-primary btn-rounded center'
            >
              
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