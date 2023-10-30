"use client";
import React from 'react'

import Image from "next/image";
import searchimage1 from "../assets/img/icons/search-normal.svg";
import refreshimage from "../assets/img/icons/re-fresh.svg";
import image from "../assets/img/user.jpg";
import Link from "next/link";
import FeatherIcon from "feather-icons-react";

function page() {
  return (
  
    <div className='content'>
    <div className='page-header'>
      <div className='row'>
        <div className='col-sm-12'>
          <ul className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link href='#'> Dashboard</Link>
            </li>
            <li className='breadcrumb-item'>
              <FeatherIcon
                className='feather-chevron-right'
                icon='chevron-right'
              />
            </li>
            <li className='breadcrumb-item active'>Patient List</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='row'>
      <div className='col-sm-12'>
        <div className='card card-table show-entire'>
          <div className='card-body'>
            <div className='page-table-header mb-2'>
              <div className='row align-items-center'>
                <div className='col'>
                  <div className='doctor-table-blk'>
                    <h3>Patient List</h3>
                    <div className='doctor-search-blk'>
                      <div className='top-nav-search table-search-blk'>
                        <form>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Search here'
                          />
                          <a className='btn'>
                            <Image src={searchimage1} alt='' />
                          </a>
                        </form>
                      </div>
                      {/* <div className='add-group'>
                        <a
                          href='#'
                          className='btn btn-primary doctor-refresh d-none d-sm-block ms-2'
                        >
                          <Image src={refreshimage} alt='' />
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='table-responsive'>
              <table className='table border-0 custom-table comman-table datatable mb-0'>
                <thead>
                  <tr>
                    <th>
                      <div className='form-check check-tables'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                        
                          value='something'
                        />
                      </div>
                    </th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Joining Date</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  
                    
                      <tr >
                        <td>
                          <div className='form-check check-tables'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              defaultValue='something'
                            />
                          </div>
                        </td>
                        <td className='profile-image'>
                          <Link
                            href={{
                            
                              }}
                            
                          >
                            <Image
                              width={28}
                              height={28}
                              src={image}
                              className='rounded-circle m-r-5'
                              alt=''
                            />{" "}
                           Nimra
                          </Link>
                        </td>
                        <td>age</td>
                        <td>gender</td>
                        <td>
                          <a href='#'> phone </a>
                        </td>
                        <td>
                          <a
                            // href='https://preclinic.dreamguystech.com/cdn-cgi/l/email-protection'
                            // className='__cf_email__'
                            // data-cfemail='a3c6dbc2ced3cfc6e3c6cec2cacf8dc0ccce'
                          >
                            {/* {patient.email} */}
                            email
                          </a>
                        </td>
                        <td>date</td>
                      </tr>
                  
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page
