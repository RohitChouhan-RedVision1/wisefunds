import React, { useEffect, useState } from "react";
import Header from "../../Molecules/Header/Header";
import Footer from "../../Molecules/Footer/Footer";
import { Helmet } from "react-helmet";
import mascot from "../../Images/WFS Mascot.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const ForgetPassword = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const slug = params.get("loginfor");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpField, setOtpField] = useState(false);
  const [otp, setOtp] = useState("");
  const [mobileno, setMobileNo] = useState("");

  const [provider, setProvider] = useState({
    userName: "",
    type: slug === "ADMIN" ? "ARN" : slug,
    source: "link",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (otpField) {
        // Submitting OTP
        const otpData = {
          OtpMobileNo: mobileno,
          mobileOtp: otp,
        };
        const response = await axios.post("https://redvisionweb.com/api/login/submit-forget-password", otpData);

        if (response.data.msgType === "success") {
          setOtpField(true);
          setError(`${response.data.msg}`);
        } else {
          setError(`${response.data.msg}`);
        }
      } else {
        // Request OTP
        const response = await axios.post("https://redvisionweb.com/api/login/forget-password", provider);

        if (response.data.msgType === "success") {
          setOtpField(true);
          setMobileNo(response.data.encryptedMobileNo);
          setError(
            ` OTP sent to ******${response.data.mobileLastFourDigit} and email ${response.data.email}. Please enter it below.`
          );
        } else {
          setError(`${response.data.msg}`);
        }
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Forget Password | Wise Funds</title>
        <link rel="canonical" href="https://www.wisefunds.com/login" />
        <meta name="description" content="Recover your Wise Funds account securely." />
        <meta name="keywords" content="Forget Password, Wise Funds, OTP" />
      </Helmet>

      <Header />
      <div className="login">
        <div className="container">
          <div className="curved-shape"></div>
          <div className="curved-shape2"></div>

          <div className="form-box Login">
            <img className="mascot" src={mascot} alt="mascot" />
            <h2 className="animation">Forgot Password</h2>
            <form onSubmit={handleSubmit}>
              {!otpField ? (
                <div className="input-box animation">
                  <input
                    type="text"
                    // placeholder="Email"
                    value={provider.userName}
                    onChange={(e) =>
                      setProvider({ ...provider, userName: e.target.value })
                    }
                    required
                  />
                  <label>Email or Username</label>
                </div>
              ) : (
                <div className="input-box animation">
                  <input
                    type="text"
                    // placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                  <label>OTP</label>
                </div>
              )}
                 {!otpField && (
                <div className="input-box animation">
                  <p className="forgot-password">
                    <Link to={`/login?loginfor=${slug}`}>Back to Login</Link>
                  </p>
                </div>
              )}

              {error && <p className="error-msg">{error}</p>}

              <div className="input-box animation">
                <button className="login-btn" type="submit" disabled={loading}>
                  {loading
                    ? "Please wait..."
                    : otpField
                    ? "Verify OTP"
                    : "Send OTP"}
                </button>
              </div>

           
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgetPassword;
