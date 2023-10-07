"use client";
import { useState } from "react";
// import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
//  "@assets/img/icons/login-icon-01.svg";
import loginIcon from '@app/assets/img/icons/login-icon-01.svg'
import Link from "next/link";
import Image from "next/image";

const LoginForm = () => {
  return (
    <>
      {" "}
      <form >
        <div className='form-group'>
          <label>
            Email <span className='login-danger'>*</span>
          </label>
          <input
            className='form-control'/>
        </div>
        <div className='form-group'>
          <label>
            Password <span className='login-danger'>*</span>
          </label>
          <input
            className='form-control pass-input'/>
          <span className='profile-views feather-eye-off toggle-password' />
        </div>
        <div className='forgotpass'>
          <div className='remember-me'>
            <label className='custom_check mr-2 mb-0 d-inline-flex remember-me'>
              Remember me
              <input type='checkbox' name='radio' />
              <span className='checkmark' />
            </label>
          </div>
          <Link href='/forget'>Forgot Password?</Link>
        </div>
        <div className='form-group  login-btn'>
          <button className='btn btn-primary  btn-block' type='submit'> Login  </button>
        </div>
      </form>
      <div className='d-flex flex-column'>
        <div className='socials'>
          {/* <button
            type='button'
            className='btn btn-light  btn-block'>
            <Image src={loginIcon} alt='' />
            <span className='font-bold mx-1'>Sign in with Google</span>
          </button> */}
        </div>

        
      </div>
    </>
  );
};

export default LoginForm;
