import React, { useEffect, useRef } from "react";
import SectionHeading from "../../components/SectionHeading";
import Cover from "../shared/Cover/Cover";
import loginImgBg from "../../assets/others/Illustration.svg";
import loginImg from "../../assets/others/authentication2.png";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true)
  const {loginUser} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/' ;
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [[]]);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email,password)
    .then(result => {
      const user = result.user
      console.log(user.email);
      Swal.fire({
        title: "Login Success",
        icon: "success"
      });
      navigate(from, {replace: true})
      form.reset()
    })
    .catch(error => {
      console.error(error);
    })
    console.log(email, password);
  };

  const captchaRef = useRef(null);
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)==true) {
      alert('Captcha Matched');
      setDisabled(false)
  }

  else {
      alert('Captcha Does Not Match');
  }
  };

  return (
    <div className="py-10">
      <div style={{ background: loginImgBg }} className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* Recapcha Start */}
              <div className="form-control">
                <label className="label">Recaptcha</label>
                <LoadCanvasTemplate />
                <input
                  ref={captchaRef}
                  type="text"
                  name="recapcha"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-sx mt-2"
                >
                  Validate{" "}
                </button>
              </div>
              {/* Recapcha End */}
              <div className="form-control mt-6">
                <input
                disabled={disabled}
                  type="submit"
                  value="Login"
                  className="btn bg-[#D1A054B2] text-white"
                />
              </div>
            </form>
            <div className="flex justify-center my-5">
              <SocialLogin></SocialLogin>
            </div>
            <p className="text-center mb-6">
              <small>
                New Here? <Link to='/signup'><span className="text-yellow-600">Create an Account</span></Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
