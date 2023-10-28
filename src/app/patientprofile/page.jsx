"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import profileImage from "@app/assets/img/user.jpg";
import FeatherIcon from "feather-icons-react";
import { useSearchParams } from "next/navigation";
import AddedVitals from "@app/components/vitals/AddedVitals";
const Profile = () => {
 

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
                        <h3 className='user-name m-t-0 mb-0'>Nimra</h3>
                        <small className='text-muted'>
                          Age:22
                        </small>
                        <div className='staff-id'>MR :12345678</div>
                      </div>
                    </div>
                    <div className='col-md-7'>
                      <ul className='personal-info'>
                        <li>
                          <span className='title'>Phone:</span>
                          <span className='text'>
                            <a href='#'>+92 398751234</a>
                          </span>
                        </li>
                        <li>
                          <span className='title'>Email:</span>
                          <span className='text'>
                            <a href='#'>ayesha123@gmail.com
                             
                            </a>
                          </span>
                        </li>
                        <li>
                          <span className='title'>Gender:</span>
                          <span className='text'>
                           Female
                          </span>
                        </li>
                        <li>
                          <span className='title'>Martial Status</span>
                          <span className='text'>
                           Single
                          </span>
                        </li>
                        <li>
                          <span className='title'>Occupation</span>
                          <span className='text'>
                           N/A
                          </span>
                        </li>
                        <li>
                          <span className='title'>Race Ethnicity</span>
                          <span className='text'>
                           N/A
                          </span>
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
             <AddedVitals/>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-12'>
      <Link href={{pathname:"/complain"}}>
            <button
             
              className='btn btn-primary btn-rounded center myButton'
            >
              Add Complain
             
            </button>
            </Link>
          </div>
    </>
  );
};

export default Profile;