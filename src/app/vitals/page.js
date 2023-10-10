import React from 'react'

const page = () => {
  return (
    <div className="row ">
    <div className="col-sm-12">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-12">
                <div className="form-heading">
                  <h4>Patient Vitals</h4>
                </div>
              </div>
              <div className="col-md-6">
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
              <div className="col-md-6">
                <div className="form-group local-forms">
                  <label>
                    MR Number <span className="login-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
           </div>
      
      <div className='row'>
              <div className="col-md-6 ">
                <div className="form-group local-forms">
                  <label>
                    BP <span className="login-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
         
  
              <div className="col-md-6 ">
                <div className="form-group local-forms">
                  <label>
                    Pulse Rate<span className="login-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
         
      </div>
         <div className='row'>
              <div className=" col-md-6 ">
                <div className="form-group local-forms">
                  <label>
                    Temprature<span className="login-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
    
              <div className="col-md-6 ">
                <div className="form-group local-forms">
                  <label>
                  Respiratory Rate<span className="login-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
          
          </div>
          <div className='row'>
              <div className="col-md-6 ">
                <div className="form-group local-forms">
                  <label>
                    Weight<span className="login-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
    
              <div className="col-md-6 ">
                <div className="form-group local-forms">
                  <label>
                   Heigth<span className="login-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
          
          </div>        
          <div className='col-md-12'>
           
            <button
              type='submit'
              className=' btn btn-primary btn-rounded center myVitalButton'>
              Submit Vitals
            </button>
         
         </div>
        </form>
        </div>
              </div>
    </div>
    </div>
  )
  }

export default page;