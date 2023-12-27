import React from "react";
import Image from "next/image";
import searchimage1 from "../assets/img/icons/search-normal.svg";
import image from "../assets/img/user.jpg";
import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import prisma from "@app/utils/prismadb";
const getPatients = async () => {
  const patients = await prisma.patient.findMany();
  return patients || [];
};

export default async function Page() {
  const patients = await getPatients();

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
                    {patients.map((patient) => {
                      return (
                        <tr key={patient.id}>
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
                            <Link href={`/patientprofile/${patient.id}`}>
                              <Image
                                width={28}
                                height={28}
                                src={image}
                                className='rounded-circle m-r-5'
                                alt=''
                              />{" "}
                              {patient.name}
                            </Link>
                          </td>
                          <td>{patient.age}</td>
                          <td>{patient.gender}</td>
                          <td>
                            <a> {patient.phoneNumber} </a>
                          </td>
                          <td>
                            <a>{patient.email}</a>
                          </td>
                          <td>
                            <span>
                              {new Date(patient.createdAt).toLocaleDateString()}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
