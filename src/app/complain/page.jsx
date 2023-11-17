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
                    <label className='focus-label'>Generalized Bone & Joint Pain</label>
                    <select
                      className='form-control select'
                      name='Generalized Bone & Joint Pain'
                      >
                      <option value=''>Select Option</option>
                      <option value='Yes'>Yes</option>
                      <option value='No'>No</option>
                      
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

                     
                     </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Unilateral or Bilateral Localized Site</label>
                    <select
                      className='form-control select'
                      name='radiating pain'
                      >
                       <input className="form-control" type="text" />
                    
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
        <h3 className='card-title mb-3'>Signs and Symptoms</h3>
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
                      <option value=''>Select Option</option>

                      <option value='fatigue'>fatigue</option>
                      <option value='lethargy'>lethargy</option>
                      <option value='malaise'>malaise</option>
                      <option value='weight loss'>weight loss</option>
                      <option value='night sweats'>night sweats</option>
                      <option value='bone pain'>bone pain</option>
                      <option value='fever'>fever</option>
                      <option value='early satiety'>early satiety</option>
                      <option value='vomiting'>vomiting</option>
                      <option value='loss of appetite'>loss of appetite</option>
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
                      <option value=''>Select Option</option>
                      <option value='fatigue'>fatigue</option>
                      <option value='dizziness'>dizziness</option>
                      <option value='Dyspnea (SOB)'>Dyspnea with Mild Exertion(SOB)</option>
                      <option value='Decreased Exercise Tolerance'>Decreased Exercise Tolerance</option>
                      <option value='Headaches'> Headaches</option>
                      <option value='Pallor'> Pallor</option>
                      <option value='Worsening Angina'>Worsening Angina</option>
                      <option value='Ankle Swelling'>Ankle Swelling</option>
                      <option value='Palpitations'>Palpitations</option>
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
                      <option value=''>Select Option</option>
                     <option value='Other Recurrent infections'>Recurrent Infections</option>
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'> Symptoms of Thrombocytopenia</label>
                    <select
                      className='form-control select'
                      name='Symptoms of Thrombocytopenia'
                      >
                      <option value=''>Select Option</option>
                      <option value='Bleeding Diathesis'>Bleeding Diathesis</option>
                      <option value='Epitaxis'>Epitaxis</option>
                      <option value='Petechiae'>Petechiae</option>
                      <option value='Ecchymoisis'>Ecchymoisis</option>
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
                      <option value=''>Select Option</option>
                      <option value='Enlarge/Painful Lymphnodes'>Enlarge/Painful Lymphnodes</option>
                      <option value='Painful Spleenomegaly'>Painful Spleenomegaly</option>
                      <option value='B Symptoms'>B Symptoms</option>
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
                      <option value=''>Select Option</option>
                      <option value='Neuropathy'>Neuropathy</option>
                      <option value='Epistaxis'>Epistaxis</option>
                      <option value='Headache'>Headache</option>
                      <option value='Blurred Vision'>Blurred Vision</option>
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
                      <option value=''>Select Option</option>
                      <option value='Swelling/Limbpain'>Swelling/Limbpain</option>
                      <option value='Chest Pain'>Chest Pain</option>
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
                      <option value=''>Select Option</option>
                      <option value='Acute'>Acute</option>
                      <option value='Chronic'>Chronic</option>
                     
                    </select>
                  </div>
                  </div>
                  <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Symptoms of CNS Involvement </label>
                    <select
                      className='form-control select'
                      name='Symptoms of CNS Involvement'
                      >
                      <option value=''>Select Option</option>
                      <option value='Seizure'>Seizure</option>
                      <option value='Imbalance'>Imbalance</option>
                      <option value='Facial Muscle Weakness'>Facial Muscle Weakness</option>
                      <option value='Blurred Vision'>Blurred Vision</option>
                      <option value='Headache'>Headache</option>
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
                      <option value=''>Select Option</option>
                      <option value='AML'>AML</option>
                      <option value='ALL'>ALL</option>
                      <option value='CML'>CML</option>
                      <option value='CLL'>CLL</option>
                      <option value='Lymphoma'>Lymphoma</option>
                      <option value='Inherited Hematologic Disorder'>Inherited Hematologic Disorder</option>
                      <option value='Haemchromatosis'>Haemchromatosis</option>
                      <option value='Haemophilia'>Haemophilia</option>
                      <option value='Thalessimia'>Thalessimia</option>
                      <option value='LPNs'>LPNs</option>
                      <option value='Sibling'>Any Sibling with ALL</option>
                      <option value='twin'>Any Identical twin with ALL Disorder</option>
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
                    <label className='focus-label'>Syndromes</label>
                    <select
                      className='form-control select'
                      name='syndromes'
                      >
                    <option value=''>Select Option</option>
                    <option value='Down Syndromes'>Down Syndromes</option>
                    <option value='Bedkwith-Wiedeman Syndrome'>Bedkwith-Wiedeman Syndrome</option>
                    <option value='Schwachman Syndrome'>Schwachman Syndrome</option>
                    <option value='Ataxia-telangiectasia'>Ataxia-telangiectasia</option>
                    <option value='Blooms Syndrome'>Blooms Syndrome</option>
                    <option value='Fanocini Anemia'>Fanocini Anemia</option>
                    <option value='Nijmogen Breakage Syndrome'>Nijmogen Breakage Syndrome</option>
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Hepatitis</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      <option value=''>Select Option</option>
                      <option value='A'>A</option>
                      <option value='B'>B</option>
                      <option value='C'>C</option>
                      <option value='D'>D</option>
                      <option value='E'>E</option>
                      <option value='Neonatal'>Neonatal Hepatitis</option>
                      
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
                      <option value='Aplastic'>Aplastic Anemia</option>
                      <option value='Iron'>Iron Deficency Anemia</option>
                      <option value='Haemolytic'>Haemolytic Anemia</option>
                      <option value='Sickle'>Sickle cell Anemia</option>
                      <option value='Thalassemia'>Thalassemia</option>
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
                    <option value='ITP'>ITP</option>
                    <option value='DIC'>DIC</option>
                    <option value='TTP'>TTP</option>
                    <option value='HUS'>HUS</option>
                    <option value='HELLP'>HELLP</option>
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>History of Viral Infections</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                    <option value=''>Select Option</option>
                    <option value='Influenza in child or mother'>Influenza in child or mother</option>
                    <option value='Measles in child or mother'>Measles in child or mother</option>
                    <option value='Mumps in child or mother'>Mumps in child or mother</option>
                    <option value='Chicken pox in child or mother'>Chicken pox in child or mother</option>
                   
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>HIV In Parent</label>
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
                      <option value=''>Select Option</option>
                      <option value='RCB'>RCB</option>
                      <option value='Platelets'>Platelets</option>
                      <option value='Plasma Products'>Plasma Products</option>
                 
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Any Transfusion infection reaction </label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                       <input className="form-control" type="text" />
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
                      <option value=''>Select Option</option>
                      <option value='Autologous Stem cell'>Autologous Stem cell</option>
                      <option value='Allogenic Stem cell'>Allogenic</option>
                      
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
        <h3 className='card-title mb-3'>Medication History </h3>
        <div className='row'>
                    <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Medication History </label>
                    <select
                      className='form-control select'
                      name='character'
                      >
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
                    <select
                      className='form-control select'
                      name='character'
                      >
                      <option value=''>Select Option</option>
                      <option value='Mouth Ulcer'>Mouth Ulcer</option>
                      <option value='Gum Swelling'>Gum Swelling</option>
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
                      <option value=''>Select Option</option>
                      <option value='Yes'>Yes</option>
                      <option value='No'>No</option>
                    </select>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Visceral Examination</label>
                    <select
                      className='form-control select'
                      name='character'
                      >
                      <option value=''>Select Option</option>
                      <option value='Spleenomegaly '>Spleenomegaly </option>
                      <option value='Hepatomegaly'>Hepatomegaly </option>
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
                    <select
                      className='form-control select'
                      name='character'
                      >
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

      {/* <div className='card-box p-4'>
        <h3 className='card-title mb-3'>Transfusion and Transplant History</h3>
        <div className='row'>
          <div className='col-md-12'>
           <div className='profile-basic2'>
           
           <div className='row'>
              <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'>Symptoms of CNS Involvement </label>
                    <select
                      className='form-control select'
                      name='Symptoms of CNS Involvement'
                      >
                      <option value=''>Select Option</option>
                      <option value='Seizure'>Seizure</option>
                      <option value='Imbalance'>Imbalance</option>
                      <option value='Facial Muscle Weakness'>Facial Muscle Weakness</option>
                      <option value='Blurred Vision'>Blurred Vision</option>
                      <option value='Headache'>Headache</option>
                    </select>
                  </div>
              </div>
             
                     
             
            </div>
            </div>
          </div>
        </div>
      </div> */}

     
{/* LAB Test */}
<div className='row'>
            <div className="col-12 col-md-6 col-xl-6">
                <div className="form-group select-gender">
                <h3 className='card-title mb-3'> Lab test </h3>
                 {/* <label className="card-title mb-3 ">Lab Test
                <span className="login-danger">*</span>
                    </label> */}
                    <div className='card-box p-4'>
        <label className="card-title mb-3 ">CBC(if values available)
                <span className="login-danger">*</span>
                    </label>
        <div className='row'>
          <div className='col-md-12'>
           <div className='profile-basic2'>
           
           <div className='row'>
           <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'> WBC</label>
                    <input className="form-control" type="text" />
                
                  </div>
              
            </div>
                   <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'> RBC</label>
                    <input className="form-control" type="text" />
               </div>
                  </div>
                  <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'> Platelets</label>
                    <input className="form-control" type="text" />
               </div>
                  </div>

                  <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'> Neutrophils</label>
                    <input className="form-control" type="text" />
               </div>
                  </div>  
                  <div className='col-md-6'>
                  <div className='form-group local-forms'>
                    <label className='focus-label'> Lymphocytes</label>
                    <input className="form-control" type="text" />
               </div>
                  </div> 

          
             
            </div>

            </div>
          </div>
        </div>
      </div>
      <label className="card-title mb-3 ">Order Lab Test
                <span className="login-danger">*</span>
                    </label>
                    <br></br>
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

                 <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Lab" className="form-check-input" />
                    Bone Marrow Biopsy
                   </label>
                   </div>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Lab" className="form-check-input" />
                    Cytochemistry
                   </label>
                   </div>

                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Lab" className="form-check-input" />
                    Flow aytometry and Immunohistochemistry
                   </label>
                   </div>



                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Lab" className="form-check-input" />
                    Chromosome tests
                   </label>
                   </div>

                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Lab" className="form-check-input" />
                    Cytogenetics
                   </label>
                   </div>

                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Lab" className="form-check-input" />
                    Fluorescent in situ hybridization(FISH)
                   </label>
                   </div>


                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Lab" className="form-check-input" />
                    Other molecular and Genetic  Lumbar Puncture Test
                   </label>
                   </div>
                   <div className="form-check-inline">
                    <label className="form-check-label">
                   <input type="radio" name="Lab" className="form-check-input" />
                    Other molecular and Genetic Lymph Node Biopsy Test
                   </label>
                   </div>
                </div>
            </div>
            </div>

          <div className='col-md-12'>
            <button
              type='submit'
              className='btn btn-primary btn-rounded center myButton'
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