import React from "react";
import "./auth.css";

const SignUpPage = () => {
  return (
    <div className="containerauth">
      <div className="wrapper">
        <form action="">
          <h1>Sign Up</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="email" placeholder="E-mail" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
          <div className="register-link">
            <p>
              Already have account? <a href="/signin">Sign In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
