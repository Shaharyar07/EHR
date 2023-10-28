"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import profileImage from "@app/assets/img/profiles/avatar-01.jpg";

import FeatherIcon from "feather-icons-react";

const AddedVitals = () => {
  

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
                      <span className='text'>180/120</span>
                    </li>
                    <li>
                      <span className='title'>Pulse Rate:</span>
                      <span className='text'>
                     180
                      </span>
                    </li>
                    <li>
                      <span className='title'>Temprature:</span>
                      <span className='text'>
                       99.99
                      </span>
                    </li>
                    <li>
                      <span className='title'>Respiratory Rate</span>
                      <span className='text'>
                       100
                      </span>
                    </li>
                    <li>
                      <span className='title'>Weight</span>
                      <span className='text'>
                    71kg
                      </span>
                    </li>
                    <li>
                      <span className='title'>height</span>
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
    <div className='col-lg-12'>
            <Link href={{pathname:"/complain"}}>
            <button
             
              className='btn btn-primary btn-rounded center myButton2'
            >
              Add Complain
             
            </button>
            </Link>
          </div>
  </div>
  
  )
}
export default AddedVitals;