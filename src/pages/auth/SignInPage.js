import React from "react";
import "./auth.css";

const SignInPage = () => {
  return (
    <div className="containerauth">
      <div className="wrapper">
        <form action="">
          <h1>Sign In</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/forgotpassword">Forgot password?</a>
          </div>
          <button type="submit" className="btn">
            Sign In
          </button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="/signup">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
