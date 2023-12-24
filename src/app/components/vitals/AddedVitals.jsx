import Link from "next/link";
import React from "react";

const AddedVitals = ({ vitals }) => {
  // console.log(vitals);

  return (
    <div className='content'>
      <div className='card-box profile-header'>
        <div className='row'>
          <div className='col-md-12'>
            <h6>Vitals</h6>
            <div className='profile-view'>
              <div className='profile-basic'>
                <div className='row'>
                  <div className='col-md-12'>
                    <ul className='personal-info'>
                      <li>
                        <span className='title'>BP:</span>
                        <span className='text'>{vitals?.bloodPressure}</span>
                      </li>
                      <li>
                        <span className='title'>Pulse Rate:</span>
                        <span className='text'>{vitals?.pulseRate}</span>
                      </li>
                      <li>
                        <span className='title'>Temprature:</span>
                        <span className='text'>{vitals?.temperature} C</span>
                      </li>
                      <li>
                        <span className='title'>Respiratory Rate</span>
                        <span className='text'>{vitals?.respiratoryRate}</span>
                      </li>
                      <li>
                        <span className='title'>Weight</span>
                        <span className='text'>{vitals?.weight} KG</span>
                      </li>
                      <li>
                        <span className='title'>height</span>
                        <span className='text'>{vitals?.height} FT</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className='col-lg-12'>
        <Link href={`/complain/${vitals?.patientId}`}>
          <button className='btn btn-primary btn-rounded'>Add Complain</button>
        </Link>
      </div>
    </div>
  );
};
export default AddedVitals;
