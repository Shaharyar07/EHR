import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      {" "}
      <form action='/'>
        <div className='form-group'>
          <label>
            Email <span className='login-danger'>*</span>
          </label>
          <input className='form-control' />
        </div>
        <div className='form-group'>
          <label>
            Password <span className='login-danger'>*</span>
          </label>
          <input className='form-control pass-input' />
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
          <button className='btn btn-primary  btn-block' type='submit'>
            {" "}
            Login{" "}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
