"use client";
import Image from "next/image";
import search from "../assets/img/icons/search-normal.svg";

import refresh from "../assets/img/icons/re-fresh.svg";
import pdf from "../assets/img/icons/pdf-icon-01.svg";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import FeatherIcon from "feather-icons-react";

const Page = () => {
  return (
    <>
      <div className='content'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='card card-table show-entire'>
              <div className='card-body'>
                <div className='page-table-header mb-2'>
                  <div className='row align-items-center'>
                    <div className='col'>
                      <div className='doctor-table-blk'>
                        <h3>Patient Report</h3>
                        <div className='doctor-search-blk'>
                          <div className='top-nav-search table-search-blk'>
                            <form>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='Search here'
                              />
                              <a className='btn'>
                                <Image src={search} alt='' />
                              </a>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='staff-search-table'>
                  <div className='row'>
                    <div className='col-12 col-md-6 col-xl-3'>
                      <div className='form-group local-forms cal-icon'>
                        <label>Date</label>
                        <input
                          className='form-control datetimepicker'
                          type='text'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-md-6 col-xl-3'>
                    <div className='doctor-submit'></div>
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
                            defaultValue='something'
                          />
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Report</th>
                      <th>Date</th>
                      <th>Time</th>

                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className='form-check check-tables '>
                          <input
                            className='form-check-input '
                            type='checkbox'
                            defaultValue='something'
                          />
                        </div>
                      </td>
                      <td> Nimra</td>
                      <td className='profile-image'>
                        <Link href='#'>
                          <Image src={pdf} alt='' />
                        </Link>
                      </td>
                      <td> 12/08/2023</td>
                      <td>12:00pm</td>
                      <td>
                        <div className='dropdown center'>
                          {/* <a
                                  className='custom-badge status-green'
                                  aria-expanded='false'
                                  href={}
                                  target='_blank'
                                > */}
                          Download
                          {/* </a> */}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
