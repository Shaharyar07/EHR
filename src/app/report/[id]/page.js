import React from "react";
import prisma from "@app/utils/prismadb";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";
import Image from "next/image";
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
                        <h4 className='text-center'>
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
                        </h4>
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
                        <h4>Patient Vitals</h4>
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='form-group local-forms'>
                        <label>MR Num: {patientReport?.id}</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>
                          BP: {patientReport?.vitals?.bloodPressure}
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>
                          Pulse Rate: {patientReport?.vitals?.pulseRate}
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>
                          Temperature: {patientReport?.vitals?.temperature}
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>
                          Respiratory Rate:{" "}
                          {patientReport?.vitals?.respiratoryRate}
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>Weight: {patientReport?.vitals?.weight}</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group local-forms'>
                        <label>Height: {patientReport?.vitals?.height}</label>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='row'>
                    <div className='col-12'>
                      <div className='form-heading'>
                        <h4>Patient Vitals</h4>
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='form-group local-forms'>
                        <label>MR Num: {patientReport?.id}</label>
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
                      <h4>Pain</h4>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Generalized Bone & Joint Pain:{" "}
                        {patientReport?.complainHistory?.painCharacter}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='gen-label'>
                        Site: {patientReport?.complainHistory?.painSite}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Unilateral or Bilateral Localized Site:{" "}
                        {patientReport?.complainHistory?.radiatingPain}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Timing: {patientReport?.complainHistory?.timing}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Exacerbating & Alleviating Factor:{" "}
                        {patientReport?.complainHistory?.alleviatingFactors}
                      </label>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Onset of Sign & Symptoms</h4>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Sign & Symptoms:{" "}
                        {patientReport?.complainHistory?.symptoms}
                      </label>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Swelling</h4>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Site: {patientReport?.complainHistory?.swellingSite}
                      </label>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Severity of Symptoms</h4>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='gen-label'>
                        Severity of Symptoms::{" "}
                        {patientReport?.complainHistory?.severitySymptom}
                      </label>
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
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Constitutional Symptoms:{" "}
                        {patientReport?.symptomHistory?.constitutionalSymptoms}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Symptoms of Anemia:{" "}
                        {patientReport?.symptomHistory?.anemiaSymptoms}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Symptoms of Neutropenia:{" "}
                        {patientReport?.symptomHistory?.neutropeniaSymptoms}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Symptoms of Thrombocytopenia:{" "}
                        {patientReport?.symptomHistory?.thromboembolismSymptoms}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Symptoms of Lymphoma:{" "}
                        {patientReport?.symptomHistory?.lumphomaSymptoms}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Symptoms of Hyperviscosity:{" "}
                        {patientReport?.symptomHistory?.hyperviscositySymptoms}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Symptoms of Thromboembolism:{" "}
                        {patientReport?.symptomHistory?.thromboembolismSymptoms}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Duration of Signs and Symptoms:{" "}
                        {patientReport?.symptomHistory?.durationSymptom}
                      </label>
                    </div>
                  </div>
                </div>
                {/* Family History */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Family History</h4>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Hematologic Malignancy:{" "}
                        {patientReport?.familyHistory?.hematologicMalignancy.join(
                          ", "
                        )}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Comorbidities */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Comorbidities</h4>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Syndromes:{" "}
                        {patientReport?.comorbidities?.syndromes.join(", ")}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Hepatitis:{" "}
                        {patientReport?.comorbidities?.hepatitis.join(", ")}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label>
                        Diabetes: {patientReport?.comorbidities?.diabetes}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label>
                        Any Surgery in the Past:{" "}
                        {patientReport?.comorbidities?.surgeryInPast}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        TB: {patientReport?.comorbidities?.tb}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label>
                        Chemicals:{" "}
                        {patientReport?.comorbidities?.chemicalExposure}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Chemotherapy:{" "}
                        {patientReport?.comorbidities?.chemotherapy}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label>
                        Toxins: {patientReport?.comorbidities?.toxicExposure}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Radiations: {patientReport?.comorbidities?.radiations}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Alcohol: {patientReport?.comorbidities?.alcohol}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Smoking: {patientReport?.comorbidities?.smoking}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label>
                        History of any type of Cancer:{" "}
                        {patientReport?.comorbidities?.cancerOfHistory}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Anemia:{" "}
                        {patientReport?.comorbidities?.anemia.join(", ")}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Platelet Disorder:{" "}
                        {patientReport?.comorbidities?.plateletDisorder.join(
                          ", "
                        )}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Viral Infections:{" "}
                        {patientReport?.comorbidities?.viralInfection.join(
                          ", "
                        )}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        HIV In Parent: {patientReport?.comorbidities?.HIV}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Transfusion and Transplant History */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Transfusion and Transplant History </h4>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Any Transfusion received in the Past:{" "}
                        {
                          patientReport?.TransfusionAndTransplantHistory
                            ?.transfusionInPast
                        }
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Any Transfusion infection reaction :{" "}
                        {
                          patientReport?.TransfusionAndTransplantHistory
                            ?.transfusionReaction
                        }
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Any Transplant in the Past :{" "}
                        {
                          patientReport?.TransfusionAndTransplantHistory
                            ?.transplant
                        }
                      </label>
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
                      <label className='focus-label'>
                        Medication History: :{" "}
                        {patientReport?.TransfusionAndTransplantHistory?.medicalHistory?.join(
                          ", "
                        )}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Physical Examination */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Physical Examination</h4>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Eyes:{" "}
                        {patientReport?.PhysicalExamination?.eyes?.join(", ")}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Mouth Ulcers:{" "}
                        {patientReport?.PhysicalExamination?.mouthUlcer?.join(
                          ", "
                        )}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Lymphadenopathy:{" "}
                        {patientReport?.PhysicalExamination?.lymphadenopathy}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Visceral Examination:{" "}
                        {patientReport?.PhysicalExamination?.visceralExamination?.join(
                          ", "
                        )}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Skin:{" "}
                        {patientReport?.PhysicalExamination?.skin?.join(", ")}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Mediastinal Masses:{" "}
                        {patientReport?.PhysicalExamination?.mediationalMasses}
                      </label>
                    </div>
                  </div>
                </div>

                {/* CBC IF Available */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>CBC If Available</h4>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        WBC: {patientReport?.CBC?.wbc}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        RBC: {patientReport?.CBC?.rbc}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Platelets: {patientReport?.CBC?.platelet}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Neutrophils: {patientReport?.CBC?.neutrophils}
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Lymphocytes: {patientReport?.CBC?.lymphocytes}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Order Lab Test */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-heading'>
                      <h4>Order Lab Test</h4>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group local-forms'>
                      <label className='focus-label'>
                        Tests Recommended:{" "}
                        {patientReport?.LabTests?.cbc ? <span>CBC</span> : null}{" "}
                        {patientReport?.LabTests?.bloodSmear ? (
                          <span>bloodSmear</span>
                        ) : null}
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
  );
}
