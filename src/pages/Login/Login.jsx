import React, { useEffect, useRef } from "react";
import SectionHeading from "../../components/SectionHeading";
import Cover from "../shared/Cover/Cover";
import loginImgBg from "../../assets/others/Illustration.svg";
import loginImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useState } from "react";

const Login = () => {
  const [disabled, setDisabled] = useState(true)
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [[]]);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
