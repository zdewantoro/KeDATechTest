import React from "react";

const ForgotPasswordPage = () => {
  return (
    <div className="containerauth">
      <div className="wrapper">
        <form action="">
          <h1>Forgot Password</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="email" placeholder="E-mail" required />
            <i className="bx bxs-user"></i>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
          <div className="register-link">
            <p>
              <a href="/signin">Back to Sign In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
