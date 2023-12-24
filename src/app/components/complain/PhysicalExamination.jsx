import React from 'react'

const PhysicalExamination = () => {
  return (
    <div className='card-box p-4'>
      <h3 className='card-title mb-3'>Physical Examination </h3>
      <div className='row'>
        <div className='col-md-12'>
          <div className='profile-basic2'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Eyes </label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>
                    <option value='Jaundice'>Jaundice</option>
                    <option value='Pallor'>Pallor</option>
                    <option value='Plethora'>Plethora</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Mouth Ulcers </label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>
                    <option value='Mouth Ulcer'>Mouth Ulcer</option>
                    <option value='Gum Swelling'>Gum Swelling</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Lymphadenopathy </label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Visceral Examination</label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>
                    <option value='Spleenomegaly '>Spleenomegaly </option>
                    <option value='Hepatomegaly'>Hepatomegaly </option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Skin</label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>
                    <option value='Pallor'>Pallor</option>
                    <option value='Redness'>Redness</option>
                    <option value='Cyanosis'>Cyanosis</option>
                    <option value='Petechia'>Petechia</option>
                    <option value='Excoriation'>Excoriation</option>
                    <option value='Leg Ucler'>Leg Ucler</option>
                    <option value='ecchymoses'>ecchymoses</option>
                    <option value='easy brusing'>easy bruising</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group local-forms'>
                  <label className='focus-label'>Mediastinal Masses</label>
                  <select className='form-control select' name='character'>
                    <option value=''>Select Option</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
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

export default PhysicalExamination