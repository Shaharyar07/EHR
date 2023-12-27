import React from "react";
import prisma from "@app/utils/prismadb";

const getPatientReport = async (id) => {
  const patientReport = await prisma.patient.findUnique({
    where: {
      id,
    },
    include: {
      complain: true,
      vitals: true,
      familyHistory: true,
      complainHistory: true,
      symptomHistory: true,
      comorbidities: true,
      TransfusionAndTransplantHistory: true,
      PhysicalExamination: true,
      CBC: true,
      LabTests: true,
    },
  });
  return patientReport || [];
};

export default async function Page({ params }) {
  const patientReport = await getPatientReport(params.id);
  console.log(patientReport);
  return (
    <div className='page-wrapper'>
      <div className='content'>
        <div className='page-header'>
          <div className='row'>
            <div className='col-sm-12'>
              <ul className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <a href='invoices.html'>Accounts </a>
                </li>
                <li className='breadcrumb-item'>
                  <i className='feather-chevron-right' />
                </li>
                <li className='breadcrumb-item active'> Report</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='card'>
              <div className='card-body'>
                <div className='invoice-head-clinic'>
                  <div className='row'>
                    <div className='col-12 col-md-6'>
                      <div className='invoice-counts'>
                        <h4>
                          Invoice <span>#345766</span>
                        </h4>
                      </div>
                    </div>
                    <div className='col-12 col-md-6'>
                      <div className='invoice-counts float-end'>
                        <h4>
                          Status:{" "}
                          <a href='javascript:;' className='status-green'>
                            Success
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row custom-invoice'>
                  <div className='col-12 col-md-6 m-b-20'>
                    <img
                      src='assets/img/logo.png'
                      width={35}
                      height={35}
                      alt=''
                    />{" "}
                    <span>EHR</span>
                    <ul className='list-unstyled invoice-clinic mt-2'>
                      <li>name</li>
                      {/* <li></li>
                    <li>GST No:2914035</li> */}
                    </ul>
                  </div>
                  <div className='col-12 col-md-6 m-b-20'>
                    {/* <div className="invoice-details">
                    <h3>Bill To:</h3>
                    <h3>Zydus Medicals</h3>
                    <ul className="list-unstyled invoice-clinic">
                      <li>5754 Airport Rd</li>
                      <li>Coosada, AL, 36020</li>
                      <li>United States</li>
                      <li>888-777-6655</li>
                      <li>
                        <a
                          href="https://preclinic.dreamguystech.com/cdn-cgi/l/email-protection"
                          className="_cf_email_"
                          data-cfemail="2e4c4f5c5c574d5b4a4f6e4b564f435e424b004d4143"
                        >
                          [email&nbsp;protected]
                        </a>
                      </li>
                    </ul>
                  </div> */}
                  </div>
                </div>

                {/* Complain */}

                <div className='col-12 col-sm-12'>
                  <div className='form-group local-forms'>
                    <p>
                      Presenting Complain: Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Earum hic veniam molestias
                      commodi fugiat magni quos labore mollitia illo suscipit
                      odit ipsam provident doloribus officiis temporibus
                      dolores, quas enim fugit rerum praesentium maiores
                      voluptatum dicta, pariatur voluptatem! Dolore atque,
                      incidunt, cum ut temporibus debitis distinctio quidem
                      error minima praesentium vero eligendi. Ab optio vel
                      voluptate earum. Voluptates quis harum, accusamus fugiat
                      molestias maiores nobis deleniti praesentium tempore!
                    </p>
                  </div>
                </div>

                {/* Cancer? */}

                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Cancer Status</h4>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>Cancer Status:</label>
                    </div>
                  </div>
                </div>
                {/* Vitals */}
                <div className='row'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='form-heading'>
                        <h4>Patient Vitals</h4>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>Patient Name: Nimra</label>
                        {/* <p>Patient: Nimra</p> */}
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>MR Number: 96428735</label>
                        {/* <p>MR Number: 12345</p> */}
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>BP</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>Pulse Rate</label>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>Temperature</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>Respiratory Rate</label>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>Weight</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>Height</label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* History of Presenting Complain */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Pain</h4>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Generalized Bone & Joint Pain
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='gen-label'>Site</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Unilateral or Bilateral Localized Site
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>Timing</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Exacerbating & Alleviating Factor
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Onset of Sign & Symptoms</h4>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>Sign & Symptoms: </label>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='form-heading'>
                        <h4>Swelling</h4>
                      </div>
                    </div>
                    <div className='row'></div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>Site:</label>
                      </div>
                    </div>
                  </div>

                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Severity of Symptoms</h4>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='gen-label'>
                          Severity of Symptoms:
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sign and Symptoms */}

                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Signs & Symptoms</h4>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Constitutional Symptoms:{" "}
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Symptoms of Anemia:
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Symptoms of Neutropenia:
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Symptoms of Thrombocytopenia:
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Symptoms of Lymphoma:
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Symptoms of Hyperviscosity:
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Symptoms of Thromboembolism:
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Duration of Signs and Symptoms:{" "}
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Symptoms of CNS Involvement:
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Family History */}

                <div>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Family History</h4>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Hematologic Malignancy:
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Comorbidities */}

                <div className='row'>
                  <div className='form-heading'>
                    <h4>Comorbidities</h4>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>Syndromes:</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>Hepatitis:</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>Diabetes:</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>Any Surgery in the Past: </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>TB:</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>Chemicals</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>Chemotherapy</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>Toxins</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>Radiations</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>Alcohol</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>Smoking</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>History of any type of Cancer</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>Anemia</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>Platelet Disorder</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          History of Viral Infections
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>HIV In Parent</label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transfusion and Transplant History  */}

                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Transfusion and Transplant History </h4>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Any Transfusion received in the Past
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Any Transfusion infection reaction
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>
                          Any Transplant in the Past
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Medication History */}

                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Medication History</h4>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>Medication History:</label>
                    </div>
                  </div>
                </div>

                {/* Physical Examination */}
                <div className='row'>
                  <div className='form-heading'>
                    <h4>Physical Examination</h4>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>Eyes:</label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>Mouth Ulcers:</label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>Lymphadenopathy:</label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Visceral Examination:
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>Skin:</label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>Mediastinal Masses:</label>
                    </div>
                  </div>
                </div>

                {/* CBC IF Available */}

                <div className='row'>
                  <div className='row'>
                    <div className='form-heading'>
                      <h4>CBC If Available</h4>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>WBC</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>RBC</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>Platelets</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>Neutrophils</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label className='focus-label'>Lymphocytes</label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Lab Test */}
                <div className='row'>
                  <div className='row'>
                    <div className='form-heading'>
                      <h4>Order Lab Test</h4>
                      <div className='col-md-6'>
                        <div className='form-group local-forms'>
                          <label className='focus-label'>
                            Tests Recommended:
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='notification-box'>
          <div className='msg-sidebar notifications msg-noti'>
            <div className='topnav-dropdown-header'>
              <span>Messages</span>
            </div>
            <div className='drop-scroll msg-list-scroll' id='msg_list'>
              <ul className='list-box'>
                <li>
                  <a href='chat.html'>
                    <div className='list-item'>
                      <div className='list-left'>
                        <span className='avatar'>R</span>
                      </div>
                      <div className='list-body'>
                        <span className='message-author'>Richard Miles </span>
                        <span className='message-time'>12:28 AM</span>
                        <div className='clearfix' />
                        <span className='message-content'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='chat.html'>
                    <div className='list-item new-message'>
                      <div className='list-left'>
                        <span className='avatar'>J</span>
                      </div>
                      <div className='list-body'>
                        <span className='message-author'>John Doe</span>
                        <span className='message-time'>1 Aug</span>
                        <div className='clearfix' />
                        <span className='message-content'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='chat.html'>
                    <div className='list-item'>
                      <div className='list-left'>
                        <span className='avatar'>T</span>
                      </div>
                      <div className='list-body'>
                        <span className='message-author'>
                          {" "}
                          Tarah Shropshire{" "}
                        </span>
                        <span className='message-time'>12:28 AM</span>
                        <div className='clearfix' />
                        <span className='message-content'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='chat.html'>
                    <div className='list-item'>
                      <div className='list-left'>
                        <span className='avatar'>M</span>
                      </div>
                      <div className='list-body'>
                        <span className='message-author'>Mike Litorus</span>
                        <span className='message-time'>12:28 AM</span>
                        <div className='clearfix' />
                        <span className='message-content'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='chat.html'>
                    <div className='list-item'>
                      <div className='list-left'>
                        <span className='avatar'>C</span>
                      </div>
                      <div className='list-body'>
                        <span className='message-author'>
                          {" "}
                          Catherine Manseau{" "}
                        </span>
                        <span className='message-time'>12:28 AM</span>
                        <div className='clearfix' />
                        <span className='message-content'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='chat.html'>
                    <div className='list-item'>
                      <div className='list-left'>
                        <span className='avatar'>D</span>
                      </div>
                      <div className='list-body'>
                        <span className='message-author'>
                          {" "}
                          Domenic Houston{" "}
                        </span>
                        <span className='message-time'>12:28 AM</span>
                        <div className='clearfix' />
                        <span className='message-content'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='chat.html'>
                    <div className='list-item'>
                      <div className='list-left'>
                        <span className='avatar'>B</span>
                      </div>
                      <div className='list-body'>
                        <span className='message-author'> Buster Wigton </span>
                        <span className='message-time'>12:28 AM</span>
                        <div className='clearfix' />
                        <span className='message-content'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='chat.html'>
                    <div className='list-item'>
                      <div className='list-left'>
                        <span className='avatar'>R</span>
                      </div>
                      <div className='list-body'>
                        <span className='message-author'> Rolland Webber </span>
                        <span className='message-time'>12:28 AM</span>
                        <div className='clearfix' />
                        <span className='message-content'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='chat.html'>
                    <div className='list-item'>
                      <div className='list-left'>
                        <span className='avatar'>C</span>
                      </div>
                      <div className='list-body'>
                        <span className='message-author'> Claire Mapes </span>
                        <span className='message-time'>12:28 AM</span>
                        <div className='clearfix' />
                        <span className='message-content'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='chat.html'>
                    <div className='list-item'>
                      <div className='list-left'>
                        <span className='avatar'>M</span>
                      </div>
                      <div className='list-body'>
                        <span className='message-author'>Melita Faucher</span>
                        <span className='message-time'>12:28 AM</span>
                        <div className='clearfix' />
                        <span className='message-content'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='chat.html'>
                    <div className='list-item'>
                      <div className='list-left'>
                        <span className='avatar'>J</span>
                      </div>
                      <div className='list-body'>
                        <span className='message-author'>Jeffery Lalor</span>
                        <span className='message-time'>12:28 AM</span>
                        <div className='clearfix' />
                        <span className='message-content'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='chat.html'>
                    <div className='list-item'>
                      <div className='list-left'>
                        <span className='avatar'>L</span>
                      </div>
                      <div className='list-body'>
                        <span className='message-author'>Loren Gatlin</span>
                        <span className='message-time'>12:28 AM</span>
                        <div className='clearfix' />
                        <span className='message-content'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='chat.html'>
                    <div className='list-item'>
                      <div className='list-left'>
                        <span className='avatar'>T</span>
                      </div>
                      <div className='list-body'>
                        <span className='message-author'>Tarah Shropshire</span>
                        <span className='message-time'>12:28 AM</span>
                        <div className='clearfix' />
                        <span className='message-content'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className='topnav-dropdown-footer'>
              <a href='chat.html'>See all messages</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
