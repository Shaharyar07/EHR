import React from 'react'

const TransfusionHistory = () => {
  return (
    <div className='card-box p-4'>
      <h3 className='card-title mb-3'>Transfusion and Transplant History</h3>
      <div className='row'>
        <div className='col-md-12'>
          <div className='profile-basic2'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>
                    Any Transfusion recieved in the Past{" "}
                  </label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>
                    <option value='RCB'>RCB</option>
                    <option value='Platelets'>Platelets</option>
                    <option value='Plasma Products'>Plasma Products</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>
                    Any Transfusion infection reaction{" "}
                  </label>
                  <select className='form-control select' name='character'>
                    <input className='form-control' type='text' />
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>
                    Any Transplant in the Past{" "}
                  </label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>
                    <option value='Autologous Stem cell'>
                      Autologous Stem cell
                    </option>
                    <option value='Allogenic Stem cell'>Allogenic</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransfusionHistory