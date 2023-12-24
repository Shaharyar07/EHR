import React from 'react'

const MedicalHistory = () => {
  return (
    <div className='card-box p-4'>
      <h3 className='card-title mb-3'>Medication History </h3>
      <div className='row'>
        <div className='col-md-6'>
          <div className='form-group local-forms'>
            <label className='focus-label'>Medication History </label>
            <select className='form-control select' name='character'>
              <option value=''>Select Option</option>
              <option value='hakeem'>Hakeem Medication</option>
              <option value='Antimalarial Drug'>Antimalarial Drug</option>
              <option value='Antiplatelets'>Antiplatelets</option>
              <option value='Oral Contraceptives'>Oral Contraceptives</option>
              <option value='Hormone Replacement'>Hormone Replacement</option>
              <option value='COX-2 Inhibitors'>COX-2 Inhibitors</option>
              <option value='Erythropoietin'>Erythropoietin</option>
              <option value='Warfarin'>Warfarin</option>
              <option value='Antipsychotics'>Antipsychotics</option>
              <option value='Anticonvulsauts'>Anticonvulsauts</option>
              <option value='Antithyroid Drugs'>Antithyroid Drugs</option>
              <option value='Antibiotics'>Antibiotics</option>
              <option value='Chemotherapy'>Chemotherapy</option>
              <option value='Adreraline'>Adreraline</option>
              <option value='Lithium'>Lithium</option>
              <option value='G-CSF'>G-CSF</option>
              <option value='Penicillin'>Penicillin</option>
              <option value='Cephalosporing'>Cephalosporing</option>
              <option value='Carbamazepine'>Carbamazepine</option>
              <option value='H2-blokers'>H2-blokers</option>
              <option value='PPIS'>PPIS</option>
              <option value='Phenytoin'>Phenytoin</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalHistory