import React, { useState } from "react";
import "./SignupPage.css";

const SignupPage = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`OTP sent to: +91${phone}`);
  };

  return (
    <div className="signup-wrapper" p-5 mt-5 mb-5>
      <div className="text-section">
        <h1>Open a free demat & trading account online</h1>
        <p>
          Start investing brokerage free and join a community of 1.5+ crore investors and traders
        </p>
      </div>

      <div className="form-section" p-5 mt-5 mb-5>
        <h2>Signup now</h2>
        <p>Or track your existing application</p>
        <form onSubmit={handleSubmit}>
          <div className="phone-input">
            <span className="flag">🇮🇳</span>
            <span>+91</span>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button type="submit">Get OTP</button>
        </form>
        <small>
          By proceeding, you agree to the Zerodha <a href="#">terms</a> &{" "}
          <a href="#">privacy policy</a>
        </small>
      </div>
    </div>
  );
};

export default SignupPage;
