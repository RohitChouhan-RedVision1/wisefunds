

// scss =============================
import "./Home.scss"
import "animate.css/animate.min.css";
import "../../Sass/animations.scss"

// scss ends ========================

// components =============================
import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import Header from '../../Molecules/Header/Header'
import Footer from '../../Molecules/Footer/Footer'
import { Helmet } from 'react-helmet'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
// import ReactVisibilitySensor from "react-visibility-sensor";
import { useInView } from "framer-motion"
import { scroll } from "framer-motion"
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import Testimonials from "../../Molecules/Testimonials/Testimonials"
import { ToastContainer, toast } from 'react-toastify'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../AdminPanel/firebase';
// components ends ========================

// images =============================
import Title from "../../Molecules/Title/Title"
import logo from "../../Images/Logo/logo.png"
import d1 from "../../Images/Discover/MutualFund.svg"
import d2 from "../../Images/Discover/Term.svg"
import d3 from "../../Images/Discover/Health.svg"
import d4 from "../../Images/Discover/CorporateFD.svg"
import d5 from "../../Images/Discover/StructuredProduct.svg"
import d6 from "../../Images/Discover/PMS.svg"
import shape1 from "../../Images/Homepage/shape1.png"
import shape2 from "../../Images/Homepage/shape2.png"

import getapp from "../../Images/b.png"

import playstore from "../../Images/Homepage/google-play-3d-rendering-icon.png"
import appstore from "../../Images/Homepage/apple_2504884.png"
import icon1 from "../../Images/Homepage/playstore.png"
import icon2 from "../../Images/Homepage/apple-logo.png"

import mascot from "../../Images/Homepage/WFS Mascot.png"
import mf from "../../Images/Homepage/mutual funds.png"
import insurance from "../../Images/Homepage/insurance.png"
import stocks from "../../Images/Homepage/stocks.png"
import gold from "../../Images/Homepage/gold.png"
import fixed from "../../Images/Homepage/fixed income.png"
import mockup from "../../Images/Homepage/phone mockup.png"

// import a from "../../Images/Homepage/133574.jpg"
// import b from "../../Images/Homepage/3888.jpg"
import c from "../../Images/3.png"
import d from "../../Images/4.png"
import s1 from "../../Images/a.png"
import s2 from "../../Images/b.png"
import empower1 from "../../Images/Homepage/Empower/1.png"
import empower2 from "../../Images/Homepage/Empower/2.png"
import empower3 from "../../Images/Homepage/Empower/3.png"
import slide1 from "../../Images/Homepage/Slider/1.png"
import slide2 from "../../Images/Homepage/Slider/2.png"
import slide3 from "../../Images/Homepage/Slider/3.png"
import slide4 from "../../Images/Homepage/Slider/4.png"
import slide5 from "../../Images/Homepage/Slider/5.png"
import slide6 from "../../Images/Homepage/Slider/6.png"

import Harness from "../../Molecules/Harness/Harness";
import Invest from "../../Molecules/Invest/Invest";
import blog from "../../Images/Homepage/blog.jpg"
// import infographic from "../../Images/Homepage/infographic.png"
import ReviewYourINvestments from "../../Molecules/ReviewYourInvestments/ReviewYourInvestments";
import BenefitsWeOffer from "../../Molecules/BenefitsWeOffer/BenefitsWeOffer";
import track from "../../Images/Homepage/track investment.png"
import { useScroll, motion } from "framer-motion";

// images ends ========================


import fb from "../../AdminPanel/Blog/firebase";
import MediaPresence from "../../Molecules/MediaPresence/MediaPresence";
const DB = fb.firestore()
const Blogslist = DB.collection('blogs');

const Home = () => {


    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // testimonial ===========================


    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };

        return (
            <p className="text">
                {isReadMore ? text.slice(0, 200) : text}
                <span
                    onClick={toggleReadMore}
                    className="read-or-hide"
                    style={{ color: "#2058D4" }}
                >
                    {isReadMore ? "...Read More" : " Show Less"}
                </span>
            </p>
        );
    };

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const Butn = () => {
        return (
            <div className="btn">
                <a href="https://play.google.com/store/apps/details?id=com.wisefunds.app">
                    <img src={icon1} alt="play store" />
                    Play Store
                </a>
                <a href="https://apps.apple.com/no/app/wise-funds/id1591215757">
                    <img src={icon2} alt="app store" />
                    App Store
                </a>
            </div>
        );
    };

    const itemsslider = [
        <div class="slider-card car1">
            <div className="text">
                <h4>Unlock expert reviews for your portfolio
                    today!</h4>
                <p>Access Expert financial advice without the price tag. Wise funds empowers everyone to make
                    decisions, guiding you towards financial security and success.</p>
                <Butn> </Butn>
            </div>

            <div className="img">
                <img src={slide1} alt="mockup" />
            </div>

        </div>,
        <div class="slider-card">
            <div className="text">
                <h4>Invest Wisely With Wise Funds</h4>
                <p>A mutual funds app for smart investors. Get expert financial advice and plan for
                    retirement confidently.</p>

                <Butn> </Butn>
            </div>

            <div className="img">
                <img src={slide2} alt="mockup" />
            </div>

        </div>,
        <div class="slider-card">

            <div className="text">
                <h4>Track, Manage, Grow,</h4>
                <p>Personalized investment solutions to help you achieve financial goals effectively and efficiently.&quot;</p>

                <Butn> </Butn>
            </div>


            <div className="img">
                <img src={slide3} alt="mockup" />
            </div>
        </div>,
        <div class="slider-card">
            <div className="text">
                <h4>Invest In NFO</h4>
                <p>Explore a diverse range of New Fund Offers tailored to match your financial objectives and risk
                    tolerance</p>

                <Butn> </Butn>
            </div>


            <div className="img">
                <img src={slide4} alt="mockup" />
            </div>
        </div>,
        <div class="slider-card">
            <div className="text">
                <h4>Mutual Funds Made Easy</h4>
                <p>Choosing the right mutual fund just got simpler! Our platform offers tailored solutions based on
                    your goals and preferences. Invest wisely with confidence.</p>

                <Butn> </Butn>

            </div>

            <div className="img">
                <img src={slide5} alt="mockup" />
            </div>
        </div>,

        <div class="slider-card">
            <div className="text">
                <h4>Financial Wisdom for all</h4>
                <p>Review your investments with Wise Funds or Unlock expert reviews for your portfolio
                    today!</p>
                <p>Gain clarity and confidence in your investments with Wise Funds&#39; thorough portfolio review.
                    Empower your financial future today.</p>

                <div className="btn">
                    <a href="#">
                        Contact Us
                    </a>
                </div>
            </div>


            <div className="img">
                <img src={slide6} alt="mockup" />
            </div>

        </div>,
    ];

    // testimonial ends ===============================


    // contact ========================================
    const form = useRef();
    const [userData, setUserData] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Message: ""
    });
    let name, value;
    const postUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserData({ ...userData, [name]: value });
    }
    //connect with firebase

    const SubmitData = async (e) => {
        e.preventDefault();
        const { Name, Email, Phone, Message, Company } = userData;
        if (Name && Email && Phone && Message && Company) {

            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!emailRegex.test(userData.Email)) {
                toast.error('Please enter a valid email address');
                return
            }

            if (typeof Phone !== "undefined") {

                var pattern = new RegExp(/^[0-9\b]+$/);

                if (!pattern.test(userData.Phone)) {
                    toast.warn("Please enter only number.");
                    return

                } else if (userData.Phone.length !== 10) {
                    toast.warn("Please enter 10 digit phone number.");
                    return
                }
            }

            try {

                const docRef = await addDoc(collection(db, "Contact_Form"), {
                    Name: Name,
                    Email: Email,
                    Phone: Phone,
                    Message: Message,
                    Company: Company
                });

                // emailjs.sendForm('service_wblyans', 'template_n9ua8wv', form.current, 'ke7NgkL-D_6Ssn-xZ')
                //   .then((result) => {
                //     console.log(result.text);

                //   }, (error) => {
                //     console.log(error.text);
                //   });

                toast.success('Message Sent Successfully');

                setUserData({
                    Name: "",
                    Email: "",
                    Phone: "",
                    Message: "",
                    Company: ""
                })

                // console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
                toast.error("Error adding document")
            }
        }
        else {
            toast.error('Please fill the data');
        }
    };

    // contact ends ===================================

    // blog ===========================================

    const [blogs, Setblogs] = useState([]);

    useEffect(() => {
        // 👇️ scroll to top on page load

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        const unsubscribe = Blogslist.limit(3).onSnapshot(querySnapshot => {
            // Get all documents from collection - with IDs
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            // Update state
            Setblogs(data);
        });

        // Detach listener
        return unsubscribe;
    }, []);

    // blog ends =======================================

    return (
        <div>
            <Header />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Top Investment Solutions | Mutual Funds, Fixed Income & Insurance | Wise Funds                </title>
                <link rel="canonical" href="https://www.wisefunds.com" />
                <meta name="description" content="Discover expert investment solutions with Mutual funds, Fixed Income, Insurance, PMS, Stocks, and much more with Wise Funds to grow your wealth. Understand the risks, make informed decisions, and achieve your financial goals with expert guidance. Start investing with us today!." />
                <meta name="keywords" content="Wise Funds, Mutal Funds, Groww, Financial Planning, Invest in Mutual Funds Fixed Income tax efficient pms Insurance , Retirement Planning Legacy Planning Child Marriage, Invest With Confidence, Grow With Wisdom, Groww Mutual Funds,  Expert Portfolio advice, Financial calculators, Small Case, Stocks, Review your investments, performance Benchmark, Asset Allocation Strategies, Track your Investment, Wise FinServ Unlocking your wealth potential, financial solutions, wealth management, Fixed Income, Tax-Efficient Investing," />
            </Helmet>
            <ToastContainer />

            <div className="slider">
                <a href="#contact" className="slider-btn">
                    Connect to Wise Funds
                </a>

                <div className="slider-body">
                    <AliceCarousel
                        mouseTracking
                        items={itemsslider}
                        // responsive={responsive4}
                        controlsStrategy="alternate"
                        autoPlay={true}
                        infinite={true}
                        autoPlayInterval={4000}
                        disableDotsControls={true}
                        renderPrevButton={() => {
                            return <svg id="Layer_2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2"><g id="Icon"><g id="_46" data-name="46"><path d="m362 0h-212c-82.84 0-150 67.16-150 150v212c0 82.84 67.16 150 150 150h212c82.84 0 150-67.16 150-150v-212c0-82.84-67.16-150-150-150zm-33.33 261.85-104.4 124.65c-2.1 1.8-4.73 2.7-7.88 2.7s-7.95-1.43-14.4-4.28-11.7-6.97-15.75-12.38c-4.05-5.4-6.08-9.38-6.08-11.92s.9-4.72 2.7-6.53l90.9-100.8-92.25-94.95c-1.8-1.8-2.7-3.98-2.7-6.52s2.03-6.6 6.08-12.15 9.29-9.75 15.75-12.6c6.45-2.85 11.25-4.28 14.4-4.28s5.77 1.05 7.88 3.15l103.95 115.2c4.2 4.2 6.3 7.95 6.3 11.25s-1.5 6.45-4.5 9.45z" /></g></g></svg>
                        }}
                        renderNextButton={() => {
                            return <svg id="Layer_2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2"><g id="Icon"><g id="_46" data-name="46"><path d="m362 0h-212c-82.84 0-150 67.16-150 150v212c0 82.84 67.16 150 150 150h212c82.84 0 150-67.16 150-150v-212c0-82.84-67.16-150-150-150zm-33.33 261.85-104.4 124.65c-2.1 1.8-4.73 2.7-7.88 2.7s-7.95-1.43-14.4-4.28-11.7-6.97-15.75-12.38c-4.05-5.4-6.08-9.38-6.08-11.92s.9-4.72 2.7-6.53l90.9-100.8-92.25-94.95c-1.8-1.8-2.7-3.98-2.7-6.52s2.03-6.6 6.08-12.15 9.29-9.75 15.75-12.6c6.45-2.85 11.25-4.28 14.4-4.28s5.77 1.05 7.88 3.15l103.95 115.2c4.2 4.2 6.3 7.95 6.3 11.25s-1.5 6.45-4.5 9.45z" /></g></g></svg>
                        }}
                    />
                </div>
            </div>

            <Testimonials />

            {/* <div className="whyus">
                <Title title1="Benefits" title2=" We" title3="Offer" />
                <AnimationOnScroll offset={0} animateOnce={true} animateIn="animate__slideInUp">
                    <div className="why-body">

                        <div className="why-card" data-value="1" id='a001'>
                            <img src={w1} alt="icons" />
                            <div className="why-card-text">
                                <h3>Expert Portfolio Advice</h3>
                                <p>Receive tailored guidance from financial experts to
                                    optimize your portfolio and achieve your goals.</p>
                            </div>
                        </div>
                        <div className="why-card" data-value="2" id='002'>
                            <img src={w2} alt="icons" />
                            <div className="why-card-text">
                                <h3>Robust Technology</h3>
                                <p>Our advanced Robust system eliminates the need for a
                                    traditional advisor. Simply input your goals, Time Horizon, and risk tolerance, and
                                    receive personalized investment strategies tailored to your needs.</p>
                            </div>
                        </div>
                        <div className="why-card" data-value="3" id='003'>
                            <img src={w3} alt="icons" />
                            <div className="why-card-text">
                                <h3>Dedicated Relationship Manager</h3>
                                <p>Enjoy personalized assistance throughout your
                                    financial journey with a dedicated relationship manager, guiding you every step of
                                    the way.</p>
                            </div>
                        </div>
                        <div className="why-card" data-value="4" id='004'>
                            <img src={w4} alt="icons" />
                            <div className="why-card-text">
                                <h3>Comprehensive Investment Tracking</h3>
                                <p>Easily monitor and manage all your
                                    investments in one place with our intuitive tracking system, ensuring you stay
                                    informed and in control.</p>
                            </div>
                        </div>
                        <div className="why-card" data-value="5" id='005'>
                            <img src={w5} alt="icons" />
                            <div className="why-card-text">
                                <h3>Empowering Financial Education</h3>
                                <p>Gain access to valuable financial knowledge
                                    and resources to enhance your understanding and make informed decisions about
                                    your investments.</p>
                            </div>
                        </div>
                        <div className="why-card" data-value="5" id='006'>
                            <img src={w6} alt="icons" />
                            <div className="why-card-text">
                                <h3>Curated Product baskets</h3>
                                <p>Explore our curated financial service baskets, meticulously
                                    designed by seasoned professionals to meet your investment needs with precision and
                                    expertise.</p>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div> */}

            <BenefitsWeOffer />
            <ReviewYourINvestments />

            <div className="investment">
                <Title title1="Track your" title2="investment" title3="at your fingertips" />
                <AnimationOnScroll offset={0} animateOnce={true} animateIn="animate__slideInUp">
                    <div className="investment-body">
                        {/* <img src={track} alt="logo" /> */}
                        <div className="line"></div>
                        <div className="circle">
                            <div className="circle-b"></div>
                            <div className="circle-b"></div>
                            <div className="circle-b"></div>
                            <div className="circle-b"></div>
                            <div className="circle-b"></div>
                        </div>
                        <div className="invest-card card1">
                            <img src={mf} alt="Mutual Funds" />
                            <span>Mutual Funds</span>
                        </div>
                        <div className="invest-card card2">
                            <img src={stocks} alt="Mutual Funds" />
                            <span>Stocks</span>
                        </div>
                        <div className="invest-card card3">
                            <img src={fixed} alt="Mutual Funds" />
                            <span>Fixed income</span>
                        </div>
                        <div className="invest-card card4">
                            <img src={gold} alt="Mutual Funds" />
                            <span>Gold</span>
                        </div>
                        <div className="invest-card card5">
                            <img src={insurance} alt="Mutual Funds" />
                            <span>Insurance</span>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>

            <Harness />

            <div className="empower">
                <Title title1="Empower" title2="your" title3="Dreams" />
                <AnimationOnScroll offset={0} animateOnce={true} animateIn="animate__slideInLeft">
                    <div className="empower-body">
                        <div className="empower-card">
                            <h3>Retirement planning </h3>
                            <h6>Chart Your Tomorrow: Retirement Made Simple. Plan Wisely, Live Fully</h6>
                            <img src={empower1} alt="Empower" />
                            <Link to={"/login"}>Invest Now</Link>
                        </div>
                        <div className="empower-card">
                            <h3>Child Marriage Planning</h3>
                            <h6>Plan Their Tomorrow, Today: Child Marriage Made Financially Feasible!</h6>
                            <img src={empower2} alt="Empower" />
                            <Link to={"/login"}>Invest Now</Link>
                        </div>
                        <div className="empower-card">
                            <h3>Unlock Prosperity</h3>
                            <h6>From Calculators to Cart—Your Financial Journey Starts Here!</h6>
                            <img src={empower3} alt="Empower" />
                            <Link to={"/login"}>Invest Now</Link>
                        </div>
                    </div>
                </AnimationOnScroll>

            </div>

            <MediaPresence />

            <Invest />

            <div className="getapp">
                {/* <Title title="Get the App Now!" description="Start Investments in 2 min by downloading our Mobile APP from the links below." /> */}
                <Title title1="Get the " title2="App" title3="Now!" />
                <AnimationOnScroll offset={0} animateOnce={true} animateIn="animate__slideInUp">
                    <div className="getapp-body">
                        <div className="getapp-card">
                            {/* <h6>Available on:</h6> */}
                            <a href="https://play.google.com/store/apps/details?id=com.wisefunds.app" className="play">
                                <img src={playstore} alt="play store" />

                                <div className="text">
                                    Play Store
                                    <img src={shape1} alt="shape1" className="shape1" />
                                    <div className="circle"></div>
                                    <div className="rectangle"></div>
                                    <div className="square"></div>
                                </div>
                            </a>

                            <a href="https://apps.apple.com/no/app/wise-funds/id1591215757" className="app">
                                <div className="text">
                                    App Store
                                    <img src={shape2} alt="shape2" className="shape2" />
                                    <div className="circle"></div>
                                    <div className="rectangle"></div>
                                    <div className="square"></div>
                                </div>
                                <img src={appstore} alt="play store" />
                            </a>

                        </div>
                        <img className="phone" src={getapp} alt="get the app" />
                    </div>
                </AnimationOnScroll>
            </div>

            <div className="blog-home">
                <Title title1="Blogs" title2="" title3="" />
                <AnimationOnScroll offset={0} animateOnce={true} animateIn="animate__slideInUp">
                    <div class="container">
                        <div class="blog-row">
                            {blogs.map(blog => (
                                <div class="blog">
                                    <div class="blog-image">
                                        <img src={blog.Image} alt="blog Image" />
                                        <div class="date">{blog.Date}</div>
                                    </div>
                                    <div class="blog-content">
                                        <h2>{blog.Title}</h2>
                                        <div className='body' dangerouslySetInnerHTML={{ __html: blog.Body }}></div>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel metus vel est fermentum consectetur.</p> */}
                                        <Link to={"/show/" + blog.id}>Read More</Link>
                                    </div>
                                </div>
                            ))}
                            {/* <div class="blog">
                                <div class="blog-image">
                                    <img src={blog} alt="Blog Image 1" />
                                    <div class="date">June 11, 2024</div>
                                </div>
                                <div class="blog-content">
                                    <h2>Blog Post 2</h2>
                                    <p>Nullam vehicula turpis in tellus lacinia euismod. Proin tristique arcu vel ullamcorper fermentum.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                            <div class="blog">
                                <div class="blog-image">
                                    <img src={blog} alt="Blog Image 1" />
                                    <div class="date">June 12, 2024</div>
                                </div>
                                <div class="blog-content">
                                    <h2>Blog Post 3</h2>
                                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </AnimationOnScroll>
            </div>

            <div id="contact" className="contact">
                <Title title1="Send" title2="Us" title3="a Message" />
                <AnimationOnScroll offset={0} animateOnce={true} animateIn="animate__slideInUp">
                    <div className="contact-body">
                        <div className="contact-info">
                            <h3>contact information</h3>
                            <a href="#">
                                <div className="svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                </div>

                                <p> WISE FUNDS
                                    G-05,&nbsp; Ground floor,&nbsp; Sector-3,&nbsp;
                                    Noida 201301</p>
                            </a>

                            <a href="#">
                                <div className="svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                </div>

                                <p>+91-1204114832</p>
                            </a>

                            <a href="#">
                                <div className="svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                                </div>

                                <p>8929541454</p>
                            </a>

                            <a href="mailto:contactus@wisefunds.in">
                                <div className="svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                </div>

                                <p>contactus@wisefunds.in</p>
                            </a>

                            <a href="mailto:contactus@wisefunds.in">
                                <div className="svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" /></svg>
                                </div>

                                <p>Schedule a Phone /Zoom Call</p>
                            </a>
                        </div>

                        <form className="contact-form" ref={form} method="POST" >
                            <div className="input">
                                <input type="text"
                                    placeholder='Your Name'
                                    name='Name'
                                    value={userData.careers_name}
                                    onChange={postUserData}
                                    required
                                />
                                <input type="text"
                                    placeholder='Your Email'
                                    name='Email'
                                    value={userData.Email}
                                    onChange={postUserData}
                                    required
                                />
                            </div>
                            <div className="input">
                                <input type="text"
                                    placeholder='Your Phone Number'
                                    name='Phone'
                                    value={userData.Phone}
                                    onChange={postUserData}
                                    required
                                />
                                <input type="text"
                                    placeholder='Company Name'
                                    name='Company'
                                    value={userData.Company}
                                    onChange={postUserData}
                                    required
                                />
                            </div>
                            <textarea
                                name='Message'
                                value={userData.Message}
                                onChange={postUserData}
                                required
                                placeholder='Your Message'
                                rows="6">
                            </textarea>
                            <input type="submit" onClick={SubmitData} className="btn" value="Submit" />
                        </form>
                    </div>
                </AnimationOnScroll>
            </div>

            <Footer />
        </div >
    )
}

export default Home
