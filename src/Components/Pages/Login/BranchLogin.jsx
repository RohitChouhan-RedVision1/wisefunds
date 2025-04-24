// components =============================
import React, { useEffect, useState } from "react";
import Header from "../../Molecules/Header/Header";
import Footer from "../../Molecules/Footer/Footer";
import playstore from "../../Images/Homepage/apple_2504884.png";
import appstore from "../../Images/Homepage/apple_2504884.png";
import { Helmet } from "react-helmet";
import CryptoJS from "crypto-js";
// components ends ========================

// scss =============================
import "./Login.scss";
// scss ends ========================

// images =============================
import mascot from "../../Images/WFS Mascot.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// images ends ========================

const CryptoJSAesJsons = {
  stringify: function (cipherParams) {
    var j = {
      ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64),
      iv: cipherParams.iv.toString(CryptoJS.enc.Hex),
      s: cipherParams.salt.toString(CryptoJS.enc.Hex),
    };
    return JSON.stringify(j);
  },
  parse: function (jsonStr) {
    var j = JSON.parse(jsonStr);
    return CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(j.ct),
      iv: CryptoJS.enc.Hex.parse(j.iv),
      salt: CryptoJS.enc.Hex.parse(j.s),
    });
  },
};

function encryptPassword(password) {
  const key = "W@ealth!@$#$(%#H(^%)"; // Encryption key
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(password), key, {
    format: CryptoJSAesJsons,
  }).toString();
  return encrypted;
}

const BranchLogin = () => {
  const router = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState({
    username: "",
    password: "",
    loginFor:"BRANCH", // This will be set initially
    callbackUrl: "https://www.wisefunds.in/login",
  });


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      console.log(provider, "provider");
      const formEncodedData = new URLSearchParams();
      const encryptedPassword = encryptPassword(provider.password);
      formEncodedData.append("username", provider.username);
    formEncodedData.append("password", encryptedPassword);
    formEncodedData.append("callbackUrl", provider.callbackUrl);
    formEncodedData.append("loginFor", provider.loginFor);

    console.log("Encoded Form Data:", formEncodedData);

    const res = await axios.post(
      "https://wealthelite.in//api/app-api/website-login",
      formEncodedData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
      
    console.log(res)

      if (res?.data?.status === true) {
        console.log(res.data.url);
        window.location.href = res.data.url; // ✅ correct way to redirect
      } else {
        setError(res.data.msg);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [clas, setClas] = useState("container");
  const [right, setDisplayRight] = useState("none");
  const [left, setDisplayLeft] = useState("block");
  // const [transition, setTransition] = useState("");
  // const [transform, setTransform] = useState("");

  const register = () => {
    setClas("container active");
    setDisplayRight("block");
    setDisplayLeft("none");

    // setRight("65%");
    // setTransition(".5s all ease");
    // setTransform("ScaleX(-1)")
  };

  const login = () => {
    setClas("container");
    setDisplayRight("none");
    setDisplayLeft("block");
    // setRight("15%");
    // setTransition(".5s all ease");
    // setTransform("ScaleX(1)")
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Client Login | Secure Access to Your Financial Portfolio |Wise Funds
        </title>
        <link rel="canonical" href="https://www.wisefunds.com/login" />
        <meta
          name="description"
          content="Login securely to access your financial portfolio with Wise Funds. Manage your investments, track performance, and stay updated on your financial goals."
        />
        <meta
          name="keywords"
          content="Client login, secure access, financial portfolio, investment tracking, Wise Funds login, portfolio management, secure financial access, track your stocks, track your goals"
        />
      </Helmet>
      <Header />
      <div className="login">
        {/* <img style={{ right: right, transition: transition, transform: transform }} className='mascot' src={mascot} alt="mascot" /> */}

        <div class={clas}>
          <div class="curved-shape"></div>
          <div class="curved-shape2"></div>
          <div class="form-box Login">
            <img
              style={{ display: left }}
              className="mascot"
              src={mascot}
              alt="mascot"
            />
            <h2 class="animation">Login</h2>
            <form action={handleSubmit}>
              <div class="input-box animation">
                <input
                  type="text"
                  value={provider.username}
                  onChange={(e) =>
                    setProvider({ ...provider, username: e.target.value })
                  }
                  required
                />
                <label for="">Username</label>
                <box-icon type="solid" name="user"></box-icon>
              </div>

              <div class="input-box animation">
                <input
                  type="password"
                  required
                  value={provider.password}
                  onChange={(e) =>
                    setProvider({ ...provider, password: e.target.value })
                  }
                />
                <label for="">Password</label>
                <box-icon name="lock-alt" type="solid"></box-icon>
              </div>

              <div class="">
                <p class="forgot-password">
                  <Link to={`/forgetpassword?loginfor=BRANCH`}>
                    Forgot Password?
                  </Link>
                </p>
              </div>
              <div class="">
                <button class="login-btn" type="submit" onClick={handleSubmit}>
                  Login
                </button>
              </div>

              <div class="input-box1 animation">
              <p class="text-center">Don't have an account?<br />
              <span class="text-[#2058d4] hover:underline cursor-pointer">For Signup Download Our App</span>
              </p>
                <div className="signup">
                  
                    <a
                      href="https://play.google.com/store/apps/details?id=com.wisefunds.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btnnn"
                    >
                      <img
                        src={playstore}
                        alt="play store"
                        style={{ height: 30, marginRight: 10 }}
                      />
                      Play Store
                    </a>                 
                    <a
                      href="https://apps.apple.com/no/app/wise-funds/id1591215757"
                      target="_blank"
                      rel="noopener noreferrer"
                      
                       className="btnnn"
                    >
                      <img
                        src={appstore}
                        alt="app store"
                        style={{ height: 30, marginRight: 10 }}
                      />
                      App Store
                    </a>
                </div>
              </div>
              {/* <div class="regi-link animation">
                                <p>Don't have an account? <br /> <a href="#" class="SignUpLink" onClick={register}>Sign Up</a></p>
                            </div> */}
            </form>
          </div>
          {/* <div class="form-box Register">
                        <img style={{ display: right }} className='mascot' src={mascot} alt="mascot" />
                        <h2 class="animation">Register</h2>
                        <form action="#">
                            <div class="input-box animation">
                                <input type="text" required />
                                <label for="">Username</label>
                                <box-icon type='solid' name='user'></box-icon>
                            </div>

                            <div class="input-box animation">
                                <input type="email" required />
                                <label for="">Email</label>
                                <box-icon name='envelope' type='solid' ></box-icon>
                            </div>

                            <div class="input-box animation">
                                <input type="password" required />
                                <label for="">Password</label>
                                <box-icon name='lock-alt' type='solid' ></box-icon>
                            </div>

                            <div class="input-box animation">
                                <button class="login-btn" type="submit">Register</button>
                            </div>

                            <div class="regi-link animation">
                                <p>Don't have an account? <br /> <a href="#" class="SignInLink" onClick={handleSubmit}>Sign In</a></p>
                            </div>
                        </form>
                    </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BranchLogin;
