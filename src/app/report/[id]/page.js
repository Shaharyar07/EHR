import React from "react";
import prisma from "@app/utils/prismadb";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";
export const dynamic = "force-dynamic";
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
  // console.log(patientReport);
  return (
    <div className='page-wrapper'>
      <div className='content'>
        <div className='page-header'>
          <div className='row'>
            <div className='col-sm-12'>
              <ul className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <Link href='/patients'>Patients </Link>
                </li>
                <li className='breadcrumb-item'>
                  <FeatherIcon
                    className='feather-chevron-right'
                    icon='chevron-right'
                  />
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
                      <div className='invoice-counts float-end'>
                        <h3 className='text-center'>
                          Status:{" "}
                          <>
                            {patientReport?.cancer === null ? (
                              <span className='status-red'>Test not taken</span>
                            ) : patientReport?.cancer ? (
                              <span className='status-red'>Cancer</span>
                            ) : (
                              <span className='status-green'>Healthy</span>
                            )}
                          </>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row custom-invoice'>
                  <div className='col-12 col-md-6 '>
                    <ul className='list-unstyled invoice-clinic mt-5'>
                      <li>
                        <strong>Patient Name:</strong> {patientReport?.name}
                      </li>
                    </ul>
                  </div>
                  <div className='col-12 col-md-6'></div>
                </div>

                {/* Complain */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Complain:</strong>{" "}
                        {patientReport?.complain?.complaint}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vitals */}
                {patientReport?.vitals ? (
                  <div className='row'>
                    <div className='col-12'>
                      <div className='form-heading'>
                        <h3>Patient Vitals</h3>
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='form-group local-forms'>
                        <p>
                          <strong>MR Num: </strong>
                          {patientReport?.id}
                        </p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <p>
                          <strong>Blood Pressure: </strong>
                          {patientReport?.vitals?.bloodPressure}
                        </p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <p>
                          <strong>Pulse Rate: </strong>
                          {patientReport?.vitals?.pulseRate}
                        </p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <p>
                          <strong>Respiratory Rate: </strong>
                          {patientReport?.vitals?.respiratoryRate}
                        </p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <p>
                          <strong>Temperature: </strong>
                          {patientReport?.vitals?.temperature}
                        </p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <p>
                          <strong>Weight: </strong>
                          {patientReport?.vitals?.weight}
                        </p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <p>
                          <strong>Height: </strong>
                          {patientReport?.vitals?.height}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='row'>
                    <div className='col-12'>
                      <div className='form-heading'>
                        <h3>Patient Vitals</h3>
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='form-group local-forms'>
                        <p>
                          <strong>MR Num: </strong>
                          {patientReport?.id}
                        </p>
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='col-lg-12'>
                        <div className='alert alert-danger'>
                          <strong>Vitals Not Added Yet!</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* History of Presenting Complain */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h3>Pain</h3>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Generalized Bone & Joint Pain: </strong>
                        {patientReport?.complainHistory?.painCharacter}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Pain Site: </strong>
                        {patientReport?.complainHistory?.painSite}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>
                          Unilateral or Bilateral Localized Site:{" "}
                        </strong>
                        {patientReport?.complainHistory?.radiatingPain}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Pain Duration: </strong>
                        {patientReport?.complainHistory?.timing}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong> Exacerbating & Alleviating Factor: </strong>
                        {patientReport?.complainHistory?.alleviatingFactors}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h3>Onset of Sign & Symptoms</h3>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Signs & Symptoms Started: </strong>
                        {patientReport?.complainHistory?.symptoms}
                      </p>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h3>Swelling</h3>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Swelling Site: </strong>
                        {patientReport?.complainHistory?.swellingSite}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h3>Severity of Symptoms</h3>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Severity of Symptoms: </strong>
                        {patientReport?.complainHistory?.severitySymptom}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sign and Symptoms */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h3>Signs & Symptoms</h3>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>ConstitutionalSymptoms: </strong>
                        {patientReport?.symptomHistory?.constitutionalSymptoms}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Symptoms of Anemia: </strong>
                        {patientReport?.symptomHistory?.anemiaSymptoms}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Symptoms of Neutropenia: </strong>
                        {patientReport?.symptomHistory?.neutropeniaSymptoms}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Symptoms of Thrombocytopenia: </strong>
                        {
                          patientReport?.symptomHistory
                            ?.thrombocytopeniaSymptoms
                        }
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Symptoms of Lymphoma:</strong>
                        {patientReport?.symptomHistory?.lumphomaSymptoms}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Symptoms of Hyperviscosity: </strong>
                        {patientReport?.symptomHistory?.hyperviscositySymptoms}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Symptoms of Thromboembolism: </strong>
                        {patientReport?.symptomHistory?.thromboembolismSymptoms}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Duration of Symptoms: </strong>
                        {patientReport?.symptomHistory?.durationSymptom}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Family History */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h3>Family History</h3>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Hematological Malignancy: </strong>
                        {patientReport?.familyHistory?.hematologicMalignancy.join(
                          ", "
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comorbidities */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h3>Comorbidities</h3>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Syndromes: </strong>
                        {patientReport?.comorbidities?.syndromes.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Hepatitis: </strong>
                        {patientReport?.comorbidities?.hepatitis.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Diabetes: </strong>
                        {patientReport?.comorbidities?.diabetes}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Surgery in the past: </strong>
                        {patientReport?.comorbidities?.surgeryInPast}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>TB: </strong>
                        {patientReport?.comorbidities?.tb}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Chemical Exposure: </strong>
                        {patientReport?.comorbidities?.chemicalExposure}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Chemotherapy: </strong>
                        {patientReport?.comorbidities?.chemotherapy}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Toxins: </strong>
                        {patientReport?.comorbidities?.toxicExposure}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Radiations: </strong>
                        {patientReport?.comorbidities?.radiations}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Alcohol: </strong>
                        {patientReport?.comorbidities?.alcohol}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Smoking:</strong>
                        {patientReport?.comorbidities?.smoking}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>History of Cancer:</strong>
                        {patientReport?.comorbidities?.historyOfCancer}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Anemia</strong>
                        {patientReport?.comorbidities?.anemia.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Platelets Disorder: </strong>
                        {patientReport?.comorbidities?.plateletDisorder.join(
                          ", "
                        )}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Viral Infection:</strong>
                        {patientReport?.comorbidities?.viralInfection.join(
                          ", "
                        )}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>HIV: </strong>
                        {patientReport?.comorbidities?.HIV}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Transfusion and Transplant History */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h3>Transfusion and Transplant History </h3>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Any Transfusion in the Past : </strong>
                        {
                          patientReport?.TransfusionAndTransplantHistory
                            ?.transfusionInPast
                        }
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Any Transfusion reaction: </strong>
                        {
                          patientReport?.TransfusionAndTransplantHistory
                            ?.transfusionReaction
                        }
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Any Transplant in the Past: </strong>
                        {
                          patientReport?.TransfusionAndTransplantHistory
                            ?.transplant
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* Medication History */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h3>Medication History</h3>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Medical History: </strong>
                        {patientReport?.TransfusionAndTransplantHistory?.medicalHistory?.join(
                          ", "
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Physical Examination */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h3>Physical Examination</h3>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Eyes: </strong>
                        {patientReport?.PhysicalExamination?.eyes?.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Mouth Ulcer: </strong>

                        {patientReport?.PhysicalExamination?.mouthUlcer?.join(
                          ", "
                        )}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Lymphadenopathy: </strong>
                        {patientReport?.PhysicalExamination?.lymphadenopathy}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Visceral Examination: </strong>
                        {patientReport?.PhysicalExamination?.visceralExamination?.join(
                          ", "
                        )}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Skin: </strong>
                        {patientReport?.PhysicalExamination?.skin?.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Mediational Masses: </strong>{" "}
                        {patientReport?.PhysicalExamination?.mediationalMasses}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CBC IF Available */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h3>CBC If Available</h3>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>WBC: </strong>
                        {patientReport?.CBC?.wbc}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      {" "}
                      <p>
                        <strong>RBC: </strong>
                        {patientReport?.CBC?.rbc}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Platelets:: </strong>
                        {patientReport?.CBC?.platelet}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Neutrophils: </strong>
                        {patientReport?.CBC?.neutrophils}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Lymphocytes: </strong>
                        {patientReport?.CBC?.lymphocytes}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order Lab Test */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h3>Order Lab Test</h3>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <p>
                        <strong>Lab Test: </strong>
                        {patientReport?.LabTests?.cbc ? (
                          <span>CBC</span>
                        ) : null}{" "}
                        {patientReport?.LabTests?.bloodSmear ? (
                          <span>bloodSmear</span>
                        ) : null}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
