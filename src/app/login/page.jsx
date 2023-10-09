import Image from "next/image";
import logo from "@app/assets/img/login-02.png";
import LoginForm from "@app/components/forms/LoginForm";

const Login = () => {
  return (
    <div className='main-wrapper login-body'>
      <div className='container-fluid px-0'>
        <div className='row'>
          <div className='col-lg-6 login-wrap'>
            <div className='login-sec'>
              <div className='log-img'>
                <Image src={logo} alt='' />
              </div>
            </div>
          </div>
          <div className='col-lg-6 login-wrap-bg'>
            <div className='login-wrapper'>
              <div className='loginbox'>
                <div className='login-right'>
                  <div className='login-right-wrap'>
                    <h2>Sign In</h2>
                    <LoginForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
