import React from "react";
import Image from "next/image";
import profileImage from "@app/assets/img/user.jpg";

import AddedVitals from "@app/components/vitals/AddedVitals";

import prisma from "@app/utils/prismadb";

const getPatientProfile = async (id) => {
  const patient = await prisma.patient.findUnique({
    where: {
      id,
    },
    include: {
      vitals: true,
      complain: true,
    },
  });
  return patient || {};
};
export default async function Page({ params }) {
  const { id } = params;
  const patient = await getPatientProfile(id);
  // console.log("Profile:", patient);
  return (
    <>
      <div className='content'>
        <div className='card-box profile-header'>
          <div className='row'>
            <div className='col-md-12'>
              <h6>Demographics</h6>
              <div className='profile-view'>
                <div className='profile-img-wrap'>
                  <div className='profile-img'>
                    <a href='#'>
                      <Image
                        src={profileImage}
                        alt='Profile Image'
                        width={40}
                        height={40}
                      />
                    </a>
                  </div>
                </div>
                <div className='profile-basic'>
                  <div className='row'>
                    <div className='col-md-5'>
                      <div className='profile-info-left'>
                        <h3 className='user-name m-t-0 mb-0'>
                          {patient?.name}
                        </h3>
                        <small className='text-muted'>Age:{patient?.age}</small>
                        <div className='staff-id'>MR :{patient?.id}</div>
                      </div>
                    </div>
                    <div className='col-md-7'>
                      <ul className='personal-info'>
                        <li>
                          <span className='title'>Blood Group</span>
                          <span className='text'>{patient?.bloodGroup}</span>
                        </li>
                        <li>
                          <span className='title'>Phone:</span>
                          <span className='text'>
                            <a href='#'>{patient?.phoneNumber}</a>
                          </span>
                        </li>
                        <li>
                          <span className='title'>Email:</span>
                          <span className='text'>
                            <a href='#'>{patient?.email}</a>
                          </span>
                        </li>
                        <li>
                          <span className='title'>Gender:</span>
                          <span className='text'>{patient?.gender}</span>
                        </li>
                        <li>
                          <span className='title'>Martial Status</span>
                          <span className='text'>{patient?.maritalStatus}</span>
                        </li>
                        <li>
                          <span className='title'>Occupation</span>
                          <span className='text'>{patient?.occupation}</span>
                        </li>
                        <li>
                          <span className='title'>Race Ethnicity</span>
                          <span className='text'>{patient?.race}</span>
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
        <div className='profile-tabs'>
          <div className='tab-content'>
            <div className='tab-pane show active' id='about-cont'>
              <AddedVitals
                vitals={patient?.vitals}
                complain={patient.complain}
                id={id}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
