"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const user = { email, password };

    const result = await signIn("credentials", {
      ...user,
      redirect: false,
    });
    console.log(result);
    if (result.error) {
      toast.error(result.error);
      setLoading(false);
    } else if (result.ok) {
      toast.success("Login successful");
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>
          Email <span className='login-danger'>*</span>
        </label>
        <input
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>
          Password <span className='login-danger'>*</span>
        </label>
        <input
          className='form-control pass-input'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
        <button
          className='btn btn-primary  btn-block'
          type='submit'
          disabled={loading}
        >
          {loading ? "Logging you in..." : "Login"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
