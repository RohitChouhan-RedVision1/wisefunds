// components =============================
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ReactSearchBox from "react-search-box";
import SearchBar from "../Search/SearchBar"

// components ends ========================

// scss =============================
import "./Header.scss"
// scss ends ========================

// images =============================
import logo from "../../Images/Logo/logo.png"

// images ends ========================

const Header = () => {

  // const [padding, setPadding] = useState("");
  // const [width, setWidth] = useState("");
  // const [margin, setMargin] = useState("");

  // const [border, setBorder] = useState("");
  // const [boxs, setBoxs] = useState("");
  // const [texts, setTexts] = useState("");
  // const [wid, setWid] = useState("");
  // const [navBg, setNavBg] = useState("");
  // const [color, setColor] = useState("");
  // const [bg, setBg] = useState("");
  // const [radius, setRadius] = useState("");
  // const [disp, setDisp] = useState("");
  // const [boxShadow, setBoxShadow] = useState("");
  // const [transform, setTransform] = useState("");
  // const [borderRadius, setBorderRadius] = useState("");
  // const [transition, setTransition] = useState("");

  // const changeNavBg = () => {
  //   window.scrollY >= 200 ? setNavBg("#fff") : setNavBg("transparent");
  //   window.scrollY >= 200 ? setDisp("none") : setDisp("block");
  //   window.scrollY >= 200 ? setBoxShadow("2px 2px 5px rgba(0,0,0,0.4") : setBoxShadow("none");
  //   window.scrollY >= 200 ? setTransform("none") : setTransform("translate(5%, 0)");
  //   window.scrollY >= 200 ? setBorderRadius("0") : setBorderRadius("10px");
  //   window.scrollY >= 200 ? setTransition(".5s all ease") : setTransition("none");
  //   window.scrollY >= 200 ? setBg("#2058D4") : setBg("#fff");
  //   window.scrollY >= 200 ? setColor("#fff") : setColor("#075107");
  //   window.scrollY >= 200 ? setRadius("10px") : setRadius("none");
  //   window.scrollY >= 200 ? setWid("200px") : setWid("auto");
  //   window.scrollY >= 200 ? setTexts("1px 1px 1px rgba(0,0,0,0.4)") : setTexts("none");
  //   window.scrollY >= 200 ? setBoxs("2px 2px 5px rgba(0,0,0,0.6)") : setBoxs("none");
  //   window.scrollY >= 200 ? setBorder("1px solid #fff") : setBorder("none");
  //   window.scrollY >= 200 ? setPadding("1%") : setPadding("2%");
  //   // window.scrollY >= 200 ? setWidth("80%") : setWidth("70%");
  //   window.scrollY >= 200 ? setMargin("1%") : setMargin("0");

  // }

  // window.addEventListener('scroll', changeNavBg);


  const [display, setDisplay] = useState("none");
  const show = () => {
    setDisplay("block");
  }
  const hide = () => {
    setDisplay("none");
  }

  const links = [
    {
      title: "Private Wealth",
      url: "/"
    },
    {
      title: "About Us",
      url: "/about-us"
    },
    {
      title: "Resources",
      url: "/"
    },
    {
      title: "Contact Us",
      url: "/"
    },
    {
      title: "Login",
      url: "#"
    },

  ]

  const contactInfo = [
    {
      icon: <svg height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Call"><path d="m52.5 42.85-2.83-2.82a5.9873 5.9873 0 0 0 -8.48 0l-1.27 1.26a1.9573 1.9573 0 0 1 -1.83.54c-2.1-.47-5.49-1.92-9.74-6.17-4.26-4.26-5.71-7.65-6.18-9.75a1.9573 1.9573 0 0 1 .54-1.83l1.27-1.27a6.01768 6.01768 0 0 0 0-8.48l-2.83-2.83a6.01143 6.01143 0 0 0 -8.48 0l-.87.87a10.64659 10.64659 0 0 0 -2.89 9.89c1.49 6.71 6.41 15.28 11.98 20.85 5.57 5.56 14.14 10.49 20.84 11.98a10.96437 10.96437 0 0 0 2.34.26 10.68538 10.68538 0 0 0 7.56-3.15l.87-.87a6.01143 6.01143 0 0 0 0-8.48z" /></g></svg>
      ,
      title: "0120-4114832",
      url: "tel:01204114832"
    },
    {
      icon: <svg viewBox="0 -77 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m490.753906 0h-469.507812l234.753906 234.453125zm0 0" /><path d="m0 21.179688v316.445312l158.425781-158.222656zm0 0" /><path d="m256 276.851562-76.347656-76.25-158.40625 158.203126h469.507812l-158.40625-158.203126zm0 0" /><path d="m353.574219 179.402344 158.425781 158.222656v-316.445312zm0 0" /></svg>
      ,
      title: "contactus@wisefinserv.com",
      url: "mailto:contactus@wisefinserv.com"
    },
    {
      icon: <svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-105.6 0-191.5 85.9-191.5 191.5 0 34.4 16.2 77.8 49.4 132.7 27.6 45.6 61.8 90.9 91.9 130.8 13.9 18.4 27 35.8 37.1 50.2 3 4.3 7.9 6.8 13.1 6.8s10.1-2.5 13.1-6.8c10.1-14.4 23.2-31.8 37.1-50.2 30.1-39.9 64.2-85.2 91.9-130.8 33.2-54.9 49.4-98.3 49.4-132.7 0-105.6-85.9-191.5-191.5-191.5zm0 280c-48.8 0-88.5-39.7-88.5-88.5s39.7-88.5 88.5-88.5 88.5 39.7 88.5 88.5-39.7 88.5-88.5 88.5z" /></svg>,
      title: "G-5, Sector - 3 Noida, Uttar Pradesh - 201301",
      url: "https://www.google.com/maps?cid=15060986139053528968"
    }
  ]

  const follow = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>,
      url: "https://www.facebook.com/wisefinserv"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>,
      url: "https://twitter.com/wisefinserv?lang=en"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>,
      url: "https://www.linkedin.com/company/wise-finserv-pvt--ltd-?trk=nav_account_sub_nav_company_adming"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>,
      url: "https://www.youtube.com/channel/UCeF5wd8wQIFiqMnvmMhYEUQ"
    },
  ]

  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];

  const [reso, setreso] = useState(false);

  const openresource = () => {
    setreso(true)
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setreso(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("mouseleave", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("mouseleave", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (

    <div className='header'>
      <div className="header-logo">
        <div className="logo-bg" ></div>
        <Link to={"/"}>
          <img src={logo} alt="logo" /></Link>
        <div className="line1"></div>
        <div className="line2"></div>
      </div>

      <div className="header-links">
        <div className="search-bar">
        <SearchBar/>
        </div>
        <div className="link-bg"></div>
        <Link target='_blank' to={"https://www.wisefinserv.com/"}>Private Wealth</Link>
        <Link to={"/about-us"}>About Us</Link>
        <Link className='res' onClick={openresource} ref={wrapperRef}>Resources
          {reso &&
            <div className="resources">
              <Link to={"/calculators"}>Calculators</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/products"}>Products</Link>

            </div>
          }
        </Link>
        <Link to={"/career"}>Career</Link>
        <Link to={"/contact-us"}>Contact Us</Link>
        <Link to={"/login"}>Login</Link>
      </div>

      <div className="header-mobile" style={{ display: display }}>
        <svg className='cross' onClick={hide} id="Capa_1" enable-background="new 0 0 320.591 320.591" height="512" viewBox="0 0 320.591 320.591" width="512" xmlns="http://www.w3.org/2000/svg"><g><g id="close_1_"><path d="m30.391 318.583c-7.86.457-15.59-2.156-21.56-7.288-11.774-11.844-11.774-30.973 0-42.817l257.812-257.813c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875l-259.331 259.331c-5.893 5.058-13.499 7.666-21.256 7.288z" /><path d="m287.9 318.583c-7.966-.034-15.601-3.196-21.257-8.806l-257.813-257.814c-10.908-12.738-9.425-31.908 3.313-42.817 11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414-6.35 5.522-14.707 8.161-23.078 7.288z" /></g></g></svg>
        <div className="header-mobile-content">
          <Link target='_blank' to={"https://www.wisefinserv.com/"}>Private Wealth</Link>
          <Link to={"/about-us"}>About Us</Link>
          {/* <Link className='res' onClick={openresource} ref={wrapperRef}>Resources */}
          {/* {reso &&
              <div className="resources"> */}
          <Link to={"/calculators"}>Calculators</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/products"}>Products</Link>
          {/* </div>
            } */}
          {/* </Link> */}
          <Link to={"/career"}>Career</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>

      <svg className='menu' onClick={show} id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m512 256.002c0 17.673-14.327 32-32 32h-307.059c-17.673 0-32-14.327-32-32s14.327-32 32-32h307.059c17.673 0 32 14.327 32 32zm-339.059-134.55h307.059c17.673 0 32-14.327 32-32s-14.327-32-32-32h-307.059c-17.673 0-32 14.327-32 32s14.328 32 32 32zm307.059 269.096h-307.059c-17.673 0-32 14.327-32 32s14.327 32 32 32h307.059c17.673 0 32-14.327 32-32s-14.327-32-32-32zm-419.195-333.096h-28.805c-17.673 0-32 14.327-32 32s14.327 32 32 32h28.805c17.673 0 32-14.327 32-32s-14.327-32-32-32zm0 166.551h-28.805c-17.673 0-32 14.327-32 32s14.327 32 32 32h28.805c17.673 0 32-14.327 32-32s-14.327-32-32-32zm0 166.542h-28.805c-17.673 0-32 14.327-32 32s14.327 32 32 32h28.805c17.673 0 32-14.327 32-32s-14.327-32-32-32z" /></svg>
    </div>

  )
}

export default Header
