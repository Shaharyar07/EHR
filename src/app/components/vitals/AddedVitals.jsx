import Link from "next/link";
import React from "react";

const AddedVitals = async ({ vitals, complain, id }) => {
  // console.log(vitals);
  // console.log(complain);

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
                    {vitals ? (
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
                          <span className='text'>
                            {vitals?.respiratoryRate}
                          </span>
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
                    ) : (
                      <div className='col-lg-12'>
                        <div className='alert alert-danger'>
                          <strong>Vitals Not Added Yet!</strong>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className='col-lg-12'>
        {!complain ? (
          <Link href={`/complain/${id}`}>
            <button className='btn btn-primary btn-rounded'>
              Add Complain
            </button>
          </Link>
        ) : (
          <Link href={`/report/${id}`}>
            <button className='btn btn-primary btn-rounded'>Report</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default AddedVitals;
