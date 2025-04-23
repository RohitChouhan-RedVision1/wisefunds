// components =============================
import React, {useEffect} from 'react'
import Title from "../../Molecules/Title/Title"
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { Link } from 'react-router-dom';
import ImageGallery from "react-image-gallery";

// components ends ========================

// scss =============================
import "./About.scss"
// import "~react-image-gallery/styles/scss/image-gallery.scss";

// scss ends ========================

// images =============================
import mission from "../../Images/Homepage/About/mission.jpg"
import story from "../../Images/Homepage/About/our story.png"
import mission2 from "../../Images/Homepage/About/mission_2.mp4"
import cities from "../../Images/Homepage/About/Citites.png"
import clients from "../../Images/Homepage/About/Clients.png"
import qteam from "../../Images/Homepage/About/Team.png"
import t1 from "../../Images/Homepage/About/Team/Ajay Yadav.webp"
import t2 from "../../Images/Homepage/About/Team/Charu Pahuja.webp"
import t3 from "../../Images/Homepage/About/Team/Chetna Yadav.webp"
import t4 from "../../Images/Homepage/About/Team/Sadhna Singhal.webp"
import t5 from "../../Images/Homepage/About/Team/Noopur Singhal.webp"
import t6 from "../../Images/Homepage/About/Team/Manoj Kumar Goel.webp"
import WiseInvestments from "../../Images/Homepage/About/Wise Group/1.webp"
import WiseWealth from "../../Images/Homepage/About/Wise Group/3.webp"
import WiseInsuranceMarketing from "../../Images/Homepage/About/Wise Group/2.webp"
import WiseFunds from "../../Images/Homepage/About/Wise Group/4.webp"
import WiseBonds from "../../Images/Homepage/About/Wise Group/5.webp"
import BenefitsWeOffer from '../../Molecules/BenefitsWeOffer/BenefitsWeOffer';
import Testimonials from "../../Molecules/Testimonials/Testimonials"
import l1 from "../../Images/Life/1.png"
import l2 from "../../Images/Life/2.png"
import l3 from "../../Images/Life/3.png"
import l4 from "../../Images/Life/4.png"
import l5 from "../../Images/Life/5.png"
import l6 from "../../Images/Life/6.png"
import l7 from "../../Images/Life/7.png"
import l8 from "../../Images/Life/8.png"
import l9 from "../../Images/Life/9.png"
import l10 from "../../Images/Life/10.png"
import l11 from "../../Images/Life/11.png"
import l12 from "../../Images/Life/12.png"
import l13 from "../../Images/Life/13.png"
import l14 from "../../Images/Life/14.png"
import l15 from "../../Images/Life/15.png"
import l16 from "../../Images/Life/16.png"
import l17 from "../../Images/Life/17.png"
import l18 from "../../Images/Life/18.png"
import l19 from "../../Images/Life/19.png"
import l20 from "../../Images/Life/20.png"
import l21 from "../../Images/Life/21.png"
import l22 from "../../Images/Life/22.png"
import l23 from "../../Images/Life/23.png"
import l24 from "../../Images/Life/24.png"
import l25 from "../../Images/Life/25.png"
import l26 from "../../Images/Life/26.png"
import l27 from "../../Images/Life/27.png"
import l28 from "../../Images/Life/28.png"
import l29 from "../../Images/Life/29.png"
import l30 from "../../Images/Life/30.png"
import l31 from "../../Images/Life/31.png"
import l32 from "../../Images/Life/32.png"
import l33 from "../../Images/Life/33.png"
import l34 from "../../Images/Life/34.png"
import l35 from "../../Images/Life/35.png"
import l36 from "../../Images/Life/36.png"
import l37 from "../../Images/Life/37.png"
import l38 from "../../Images/Life/38.png"
import l39 from "../../Images/Life/39.png"
import l40 from "../../Images/Life/40.png"
import l41 from "../../Images/Life/41.png"
import l42 from "../../Images/Life/42.png"
import l43 from "../../Images/Life/43.png"
import l44 from "../../Images/Life/44.png"
import { Carousel } from 'react-responsive-3d-carousel'
import { Helmet } from 'react-helmet';

// images ends ========================

const About = () => {

    
    useEffect(() => {
        // 👇️ scroll to top on page load

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const wisegroup = [
        {
            url: "https://www.wiseinvestments.in/",
            imgUrl: WiseInvestments,
            alt: "Wise Investments"
        },
        {
            url: "",
            imgUrl: WiseWealth,
            alt: "Wise Wealth"
        },
        {
            url: "http://wisefinservinsurance.com",
            imgUrl: WiseInsuranceMarketing,
            alt: "Wise Insurenace marketing"
        },
        {
            url: "https://wisefunds.in/",
            imgUrl: WiseFunds,
            alt: "Wise funds"
        },
        {
            url: "https://wisebonds.in/",
            imgUrl: WiseBonds,
            alt: "Wise Bonds"
        }

    ]

    const team = [
        {
            id: "team1",
            imgUrl: t1,
            name: "Mr. Ajay Yadav",
            designation: "CEO & CIO",
            description: <p>Mr. Ajay Kumar Yadav CFP CM, the Group CEO & CIO of Wise Finserv, a visionary leader who is the driving force behind the well-oiled machinery that powers this esteemed financial institution across India. With over 23+ years of diverse experience in both the Financial Services and Pharmaceutical Industry, Mr. Yadav is a true master of his craft.
                <br /><br />
                As a Chartered Member of the Financial Planning Standards Board, Mr .Yadav holds one of the most highly recognized certifications in Wealth Management & Financial Planning, a testament to his unwavering dedication to his profession. He completed his MBA from Madras University and has been at the helm for more than two decades, leading by example and inspiring those around him to achieve excellence.<br /><br />

                Mr. Yadav's commitment to continued learning and professional growth is evident in his attendance of a short course on Behavioral Finance from IIM Ahmedabad, one of India's premier B Schools. He possesses a comprehensive understanding of diverse facets of Financial Services, including Private Banking and Investment Banking. He is a talented Wealth Manager with an exceptional understanding of Financial Planning, having developed long-standing relationships with high-net-worth individuals across the globe.<br /><br />

                Before joining Wise Finserv, Mr. Yadav served with distinction at Torrent Pharma, Reliance Capital, ICICI Bank, DBS Bank & ICICI Securities Private Wealth. He has been recognized by various media houses of repute, including Hindustan Times, Radio One, Amar Ujala, Jagran, and Dalal Street, among others.</p>,
            linkedin: "https://www.linkedin.com/in/ajay-kumar-yadav-137b5721/"
        },
        {
            id: "team2",
            imgUrl: t2,
            name: "Charu pahuja",
            designation: "Director & Chief Operating Officer",
            description: <p>Ms. Charu Pahuja CFP CM , the Group Director Business Head of Wise Finserv, a dynamic and accomplished executive leader who has played an instrumental role in driving the company's brand and establishing a strong domestic footprint of growth pan India With over 20+ years of illustrious experience across the Banking & Financial Services Industry, Ms. Pahuja is a true trailblazer in her field.
                <br /><br />
                As a Chartered Member of the Financial Planning Standards Board, Ms. Pahuja holds one of the most highly recognized certifications in Wealth Management & Financial Planning, a testament to her unwavering commitment to excellence. She completed her MBA in Finance with the highest honors and has also attended a short course on Behavioral Finance from IIM Ahmedabad, one of India's premier B Schools, demonstrating her commitment to continued learning and professional growth.
                <br /><br />
                Ms. Pahuja is an established executive leader who has executed corporate governance standards to align the group companies' expanding business and equip a sustainable workforce. She is a Wealth Manager of the highest standards with an exceptional understanding of Financial Planning, having developed long-standing relationships with high-net-worth individuals across the globe.
                <br /><br />

                Before joining Wise Finserv, Ms. Pahuja served with distinction at HDFC Bank, ICICI Bank, DBS Bank & ICICI Securities Private Wealth, where she honed her skills and established a reputation for excellence in her field. She has been recognized by various reputed media houses, including Hindustan Times, Radio One, Amar Ujala, Jagran, and Dalal Street, among others.</p>,
            linkedin: "https://www.linkedin.com/in/charu-pahuja-3406aa43/"
        },
        {
            id: "team3",
            imgUrl: t3,
            name: "chetna yadav",
            designation: "director & principal officer",
            description: <p>Ms. Chetna Yadav has experience of more than a decade in Customer Relationship Management, Client Service, Operations, and Operational Risk Management.<br /><br />

                Prior to joining Wise Finserv, she was associated with Panacea Biotec, EXL Services Pvt. Ltd., Steria India Ltd., & Ascent Construction Pvt. Ltd.<br /><br />

                She is a MBA from University of Allahabad.</p>,
            linkedin: "https://www.linkedin.com/in/chetna-yadav-00342210a/"
        },
        {
            id: "team4",
            imgUrl: t4,
            name: "sadhna singhal",
            designation: "head- human resources",
            description: <p>Ms. Sadhna Singhal has over 16 years of experience in Talent Acquisition, Talent Management and Employee Engagement.<br /><br />

                Prior to joining Wise Finserv, She was associated with ANSA Co-operative and Singhal & Singhal Fabricators Pvt. Ltd.<br /><br />

                She is a Bachelor in Science & M.A from University of Kanpur.</p>,
            linkedin: "https://www.linkedin.com/in/sadhana-singhal-98335a20/"
        },
        {
            id: "team5",
            imgUrl: t5,
            name: "noopur singhal",
            designation: "chief legal advisor",
            description: <p>Noopur Singhal, Advocate, LL.B. from Campus Law Centre, University of Delhi, is our associate partner and has been on the company legal advisory panel. Ms. Noopur is a B.A(P) Graduate from Delhi University and has Certificate course in Forensic Science. She started her practice in the year 2007 in all kinds of cases i.e. Civil, Criminal, Revenue, Service, Land and Rent Laws and is the chairperson of Local Complaints Committee, New Delhi District, New Delhi since 2016.<br /><br />

                She has experience of more than 10 years in litigation side and is handling all kinds of litigations in Hon’ble Supreme Court of India, High Court of Delhi and other Tribunals and Courts.<br /><br />

                She has successfully conducted litigations in the field of Writ Law (Civil and Criminal), Constitutional Law, Service Law, Arbitration and Dispute Resolutions, Land Acquisition Law, Tort Law, Labour Law, Employment Law, Banking and Matrimonial Law. She has a vast experience in handling legal matters on behalf of State Govt., Public Sector Undertakings and Mega Corporations and Companies and has expertise in providing legal opinions, handling contractual matters, holding legal conferences to address the legal issues of individuals, state corporations, partnership firms and private limited companies.</p>,
            linkedin: "https://www.linkedin.com/in/noopur-singhal-0ba06a23/"
        },
        {
            id: "team6",
            imgUrl: t6,
            name: "Manoj Kumar Goel",
            designation: "chief advsior-taxation",
            description: <p>Mr. Manoj Kumar Goel is a Law Graduates & Member of Bar Council of Delhi. He is practicing since 1995. He has rich experience (more than 27 Years) in the field of Direct / Indirect Taxation, Corporate Advisory Services and other services.</p>,
            linkedin: ""
        },

    ]

    const images = [
        {
            original: l1,
            thumbnail: l1,
        },
        {
            original: l2,
            thumbnail: l2,
        },
        {
            original: l3,
            thumbnail: l3,
        },
        {
            oliginal: l4,
            thumbnail: l4,
        },
        {
            original: l5,
            thumbnail: l5,
        },
        {
            original: l6,
            thumbnail: l6,
        },
        {
            original: l7,
            thumbnail: l7,
        },
        {
            original: l8,
            thumbnail: l8,
        },
        {
            original: l9,
            thumbnail: l9,
        },
        {
            original: l10,
            thumbnail: l10,
        },
        {
            original: l11,
            thumbnail: l11,
        },
        {
            original: l12,
            thumbnail: l12,
        },
        {
            original: l13,
            thumbnail: l13,
        },
        {
            original: l14,
            thumbnail: l14,
        },
        {
            original: l15,
            thumbnail: l15,
        },
        {
            original: l16,
            thumbnail: l16,
        },
        {
            original: l17,
            thumbnail: l17,
        },
        {
            original: l18,
            thumbnail: l18,
        },
        {
            original: l19,
            thumbnail: l19,
        },
        {
            original: l20,
            thumbnail: l20,
        },
        {
            original: l21,
            thumbnail: l21,
        },
        {
            original: l22,
            thumbnail: l22,
        },
        {
            original: l23,
            thumbnail: l23,
        },
        {
            original: l24,
            thumbnail: l24,
        },
        {
            original: l25,
            thumbnail: l25,
        },
        {
            original: l26,
            thumbnail: l26,
        },
        {
            original: l27,
            thumbnail: l27,
        },
        {
            original: l28,
            thumbnail: l28,
        },
        {
            original: l29,
            thumbnail: l29,
        },
        {
            original: l30,
            thumbnail: l30,
        },
        {
            original: l31,
            thumbnail: l31,
        },
        {
            original: l32,
            thumbnail: l32,
        },
        {
            original: l33,
            thumbnail: l33,
        },
        {
            original: l34,
            thumbnail: l34,
        },
        {
            original: l35,
            thumbnail: l35,
        },
        {
            original: l36,
            thumbnail: l36,
        },
        {
            original: l37,
            thumbnail: l37,
        },
        {
            original: l38,
            thumbnail: l38,
        },
        {
            original: l39,
            thumbnail: l39,
        },
        {
            original: l40,
            thumbnail: l40,
        },
        {
            original: l41,
            thumbnail: l41,
        },
        {
            original: l42,
            thumbnail: l42,
        },
        {
            original: l43,
            thumbnail: l43,
        },
        {
            original: l44,
            thumbnail: l44,
        },

    ];

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Wise Funds | Your Trusted Partner in Financial Growth.
                </title>
                <link rel="canonical" href="https://www.wisefunds.com/about-us" />
                <meta name="description" content="Join Wise Funds to achieve your financial independence. Invest in top-rated mutual funds, life insurance, health insurance, and more. Secure transactions, expert advice, and comprehensive portfolio management to grow your wealth." />
                <meta name="keywords" content="About Wise Funds, Benefits We offer, Mutual Funds, Groww, Financial Planning, Our Team, We are on a mission to change how India invests, The Wise Group, Best insurance." />
            </Helmet>
            <Header />
            <div className="about">
                < div class="four" >
                    <h3>Our <em>Story</em></h3>
                </div >

                <div className="about-body">
                    <img src={story} alt="Our Story" />
                    <div className="about-body-text">
                        <p>Wise Funds is a digital initiative brought to you by Wise Finserv, designed to revolutionize the way individuals approach Investing With a focus on empowering our clients to make informed decisions and achieve their financial goals, we are committed to providing accessible and personalized solutions tailored to each individual's unique needs.
                        </p>
                        <p>Driven by a passion for financial literacy and innovation, our team at Wise Funds is dedicated to democratizing financial expertise. We understand that navigating the complexities of finance can be daunting, which is why we've created a user-friendly platform and assembled a team of experts to guide you every step of the way.
                        </p>
                        <p>At Wise Funds, we believe in transparency, integrity, and trust. We're not just a financial service provider; we're your partner on the journey to financial success. Whether you're planning for retirement, saving for a dream vacation, or simply looking to manage your finances more effectively, we're here to help you turn your aspirations into reality</p>

                        <p>Join us on this exciting journey as we empower individuals to take control of their financial futures with confidence and wisdom. Welcome to Wise Funds – where your financial well-being is our top priority.
                        </p>
                    </div>

                </div>

                <div className="about-mission">
                    <div className="about-mission-text">
                        <h3>We are on a mission to change how India invests</h3>
                        <p>At Wise Funds, our mission is to empower individuals with the knowledge and tools they need to take control of their financial futures. We strive to democratize financial expertise by providing accessible resources and personalized guidance, fostering a community where everyone can thrive financially.
                        </p>
                    </div>
                    {/* <img src={mission} alt="mission" /> */}
                    <video id="bannerVideo" autoPlay muted loop>
                        <source src={mission2} type="video/mp4" />
                    </video>
                </div>

                <div className="statistics">
                    <Title title1="Some" title2="Statistics" title3="" />
                    <div className="statistics-body">
                        <div className="statistics-card">
                            <img src={clients} alt="Happy Clients" />
                            <div className="statistics-card-text">
                                <h3><span> <CountUp start={0} end={22000} delay={0}>
                                    {({ countUpRef, start }) => (
                                        <ReactVisibilitySensor onChange={start} delayedCall={true}>
                                            <span ref={countUpRef} />
                                        </ReactVisibilitySensor>
                                    )}
                                </CountUp></span>+</h3>
                                <p>Happy Clients Served</p>
                            </div>

                        </div>

                        <div className="statistics-card">
                            <img src={qteam} alt="Qualified Team" />
                            <div className="statistics-card-text">
                                <h3><span> <CountUp start={0} end={100} delay={0}>
                                    {({ countUpRef, start }) => (
                                        <ReactVisibilitySensor onChange={start} delayedCall={true}>
                                            <span ref={countUpRef} />
                                        </ReactVisibilitySensor>
                                    )}
                                </CountUp></span>+</h3>
                                <p>Qualified Team</p>
                            </div>

                        </div>

                        <div className="statistics-card">
                            <img src={cities} alt="Qualified Team" />
                            <div className="statistics-card-text">
                                <h3><span> <CountUp start={0} end={400} delay={0}>
                                    {({ countUpRef, start }) => (
                                        <ReactVisibilitySensor onChange={start} delayedCall={true}>
                                            <span ref={countUpRef} />
                                        </ReactVisibilitySensor>
                                    )}
                                </CountUp></span>+</h3>
                                <p>Cities Served</p>
                            </div>

                        </div>

                    </div>
                </div>

                <section id="team" class="team-area">
                    {/* <div class="container"> */}
                    <Title title1="Our" title2="Team" title3="" />
                    <div class="row team-items">
                        <div class="col-md-4 single-item">
                            <div class="item">
                                <div class="thumb">
                                    <img class="img-fluid" src={t1} alt="Thumb" />
                                </div>
                                <div class="info">
                                    <span class="message">
                                        <a href="https://www.linkedin.com/in/ajay-kumar-yadav-137b5721/"><svg id="Apple" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m454.26 23.47h-396.52a34.21 34.21 0 0 0 -34.11 34.11v396.52a34.21 34.21 0 0 0 34.11 34.11h396.52a34.21 34.21 0 0 0 34.11-34.11v-396.52a34.21 34.21 0 0 0 -34.11-34.11zm-290.4 396h-68.47v-221.34h68.47zm-34.23-252.38a40.55 40.55 0 1 1 40.55-40.55 40.54 40.54 0 0 1 -40.55 40.55zm293.29 252.43h-68.92v-121.42s1.61-24.34-11.41-37c-11.84-11.49-28.3-8.68-28.3-8.68s-18.31.46-28.3 16c-6 9.33-7.76 22.05-8.21 30.7v120.4h-68.48v-221.39h68.47v26.66c6.2-8.81 17.07-20.54 32.86-26.66 24-9.28 44.61-7.92 62.32-2.58 22.21 6.69 34.88 25.36 39.47 34.54 6.17 12.32 10.5 28.75 10.5 49.3z" fill="#0073b6" /></svg></a>
                                    </span>
                                    <h4>Mr. Ajay Yadav</h4>
                                    <span>CEO & CIO</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 single-item">
                            <div class="item">
                                <div class="thumb">
                                    <img class="img-fluid" src={t2} alt="Thumb" />

                                </div>
                                <div class="info">
                                    <span class="message">
                                        <a href="https://www.linkedin.com/in/charu-pahuja-3406aa43/"><svg id="Apple" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m454.26 23.47h-396.52a34.21 34.21 0 0 0 -34.11 34.11v396.52a34.21 34.21 0 0 0 34.11 34.11h396.52a34.21 34.21 0 0 0 34.11-34.11v-396.52a34.21 34.21 0 0 0 -34.11-34.11zm-290.4 396h-68.47v-221.34h68.47zm-34.23-252.38a40.55 40.55 0 1 1 40.55-40.55 40.54 40.54 0 0 1 -40.55 40.55zm293.29 252.43h-68.92v-121.42s1.61-24.34-11.41-37c-11.84-11.49-28.3-8.68-28.3-8.68s-18.31.46-28.3 16c-6 9.33-7.76 22.05-8.21 30.7v120.4h-68.48v-221.39h68.47v26.66c6.2-8.81 17.07-20.54 32.86-26.66 24-9.28 44.61-7.92 62.32-2.58 22.21 6.69 34.88 25.36 39.47 34.54 6.17 12.32 10.5 28.75 10.5 49.3z" fill="#0073b6" /></svg></a>
                                    </span>
                                    <h4>Charu Pahuja</h4>
                                    <span>Director & Chief Operating Officer</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 single-item">
                            <div class="item">
                                <div class="thumb">
                                    <img class="img-fluid" src={t3} alt="Thumb" />

                                </div>
                                <div class="info">
                                    <span class="message">
                                        <a href="https://www.linkedin.com/in/chetna-yadav-00342210a/"><svg id="Apple" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m454.26 23.47h-396.52a34.21 34.21 0 0 0 -34.11 34.11v396.52a34.21 34.21 0 0 0 34.11 34.11h396.52a34.21 34.21 0 0 0 34.11-34.11v-396.52a34.21 34.21 0 0 0 -34.11-34.11zm-290.4 396h-68.47v-221.34h68.47zm-34.23-252.38a40.55 40.55 0 1 1 40.55-40.55 40.54 40.54 0 0 1 -40.55 40.55zm293.29 252.43h-68.92v-121.42s1.61-24.34-11.41-37c-11.84-11.49-28.3-8.68-28.3-8.68s-18.31.46-28.3 16c-6 9.33-7.76 22.05-8.21 30.7v120.4h-68.48v-221.39h68.47v26.66c6.2-8.81 17.07-20.54 32.86-26.66 24-9.28 44.61-7.92 62.32-2.58 22.21 6.69 34.88 25.36 39.47 34.54 6.17 12.32 10.5 28.75 10.5 49.3z" fill="#0073b6" /></svg></a>
                                    </span>
                                    <h4>chetna yadav</h4>
                                    <span>director & principal officer</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row team-items">
                        <div class="col-md-4 single-item">
                            <div class="item">
                                <div class="thumb">
                                    <img class="img-fluid" src={t4} alt="Thumb" />
                                </div>
                                <div class="info">
                                    <span class="message">
                                        <a href="https://www.linkedin.com/in/sadhana-singhal-98335a20/"><svg id="Apple" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m454.26 23.47h-396.52a34.21 34.21 0 0 0 -34.11 34.11v396.52a34.21 34.21 0 0 0 34.11 34.11h396.52a34.21 34.21 0 0 0 34.11-34.11v-396.52a34.21 34.21 0 0 0 -34.11-34.11zm-290.4 396h-68.47v-221.34h68.47zm-34.23-252.38a40.55 40.55 0 1 1 40.55-40.55 40.54 40.54 0 0 1 -40.55 40.55zm293.29 252.43h-68.92v-121.42s1.61-24.34-11.41-37c-11.84-11.49-28.3-8.68-28.3-8.68s-18.31.46-28.3 16c-6 9.33-7.76 22.05-8.21 30.7v120.4h-68.48v-221.39h68.47v26.66c6.2-8.81 17.07-20.54 32.86-26.66 24-9.28 44.61-7.92 62.32-2.58 22.21 6.69 34.88 25.36 39.47 34.54 6.17 12.32 10.5 28.75 10.5 49.3z" fill="#0073b6" /></svg></a>
                                    </span>
                                    <h4>sadhna singhal</h4>
                                    <span>head- human resources</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 single-item">
                            <div class="item">
                                <div class="thumb">
                                    <img class="img-fluid" src={t5} alt="Thumb" />

                                </div>
                                <div class="info">
                                    <span class="message">
                                        <a href="https://www.linkedin.com/in/noopur-singhal-0ba06a23/"><svg id="Apple" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m454.26 23.47h-396.52a34.21 34.21 0 0 0 -34.11 34.11v396.52a34.21 34.21 0 0 0 34.11 34.11h396.52a34.21 34.21 0 0 0 34.11-34.11v-396.52a34.21 34.21 0 0 0 -34.11-34.11zm-290.4 396h-68.47v-221.34h68.47zm-34.23-252.38a40.55 40.55 0 1 1 40.55-40.55 40.54 40.54 0 0 1 -40.55 40.55zm293.29 252.43h-68.92v-121.42s1.61-24.34-11.41-37c-11.84-11.49-28.3-8.68-28.3-8.68s-18.31.46-28.3 16c-6 9.33-7.76 22.05-8.21 30.7v120.4h-68.48v-221.39h68.47v26.66c6.2-8.81 17.07-20.54 32.86-26.66 24-9.28 44.61-7.92 62.32-2.58 22.21 6.69 34.88 25.36 39.47 34.54 6.17 12.32 10.5 28.75 10.5 49.3z" fill="#0073b6" /></svg></a>
                                    </span>
                                    <h4>noopur singhal</h4>
                                    <span>chief legal advisor</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 single-item">
                            <div class="item">
                                <div class="thumb">
                                    <img class="img-fluid" src={t6} alt="Thumb" />

                                </div>
                                <div class="info">
                                    <span class="message">
                                        <a href="https://www.wisefinserv.com/about-us"><svg id="Apple" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m454.26 23.47h-396.52a34.21 34.21 0 0 0 -34.11 34.11v396.52a34.21 34.21 0 0 0 34.11 34.11h396.52a34.21 34.21 0 0 0 34.11-34.11v-396.52a34.21 34.21 0 0 0 -34.11-34.11zm-290.4 396h-68.47v-221.34h68.47zm-34.23-252.38a40.55 40.55 0 1 1 40.55-40.55 40.54 40.54 0 0 1 -40.55 40.55zm293.29 252.43h-68.92v-121.42s1.61-24.34-11.41-37c-11.84-11.49-28.3-8.68-28.3-8.68s-18.31.46-28.3 16c-6 9.33-7.76 22.05-8.21 30.7v120.4h-68.48v-221.39h68.47v26.66c6.2-8.81 17.07-20.54 32.86-26.66 24-9.28 44.61-7.92 62.32-2.58 22.21 6.69 34.88 25.36 39.47 34.54 6.17 12.32 10.5 28.75 10.5 49.3z" fill="#0073b6" /></svg></a>
                                    </span>
                                    <h4>Manoj Kumar Goel</h4>
                                    <span>chief advsior-taxation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </section>

                <BenefitsWeOffer />
                <Testimonials />

                <div className="life">
                    <Title title1="Life At" title2="WiseFunds" title3="" />

                    <div className="life-body">
                        {/* <ImageGallery items={images} /> */}
                        <Carousel autoPlay={true} interval={1500} showStatus={false} arrowsDefaultColor='#2058D4' showIndicators={false}>
                            <img src={l1} alt="example-image-1" />
                            <img src={l2} alt="example-image-2" />
                            <img src={l3} alt="example-image-2" />
                            <img src={l4} alt="example-image-2" />
                            <img src={l5} alt="example-image-2" />
                            <img src={l6} alt="example-image-2" />
                            <img src={l7} alt="example-image-2" />
                            <img src={l8} alt="example-image-2" />
                            <img src={l9} alt="example-image-2" />
                            <img src={l10} alt="example-image-2" />
                            <img src={l11} alt="example-image-2" />
                            <img src={l12} alt="example-image-2" />
                            <img src={l13} alt="example-image-2" />
                            <img src={l14} alt="example-image-2" />
                            <img src={l15} alt="example-image-2" />
                            <img src={l16} alt="example-image-2" />
                            <img src={l17} alt="example-image-2" />
                            <img src={l18} alt="example-image-2" />
                            <img src={l19} alt="example-image-2" />
                            <img src={l20} alt="example-image-2" />
                            <img src={l21} alt="example-image-2" />
                            <img src={l22} alt="example-image-2" />
                            <img src={l23} alt="example-image-2" />
                            <img src={l24} alt="example-image-2" />
                            <img src={l25} alt="example-image-2" />
                            <img src={l26} alt="example-image-2" />
                            <img src={l27} alt="example-image-2" />
                            <img src={l28} alt="example-image-2" />
                            <img src={l29} alt="example-image-2" />
                            <img src={l30} alt="example-image-2" />
                            <img src={l30} alt="example-image-2" />
                            <img src={l32} alt="example-image-2" />
                            <img src={l33} alt="example-image-2" />
                            <img src={l34} alt="example-image-2" />
                            <img src={l35} alt="example-image-2" />
                            <img src={l36} alt="example-image-2" />
                            <img src={l37} alt="example-image-2" />
                            <img src={l38} alt="example-image-2" />
                            <img src={l39} alt="example-image-2" />
                            <img src={l40} alt="example-image-2" />
                            <img src={l41} alt="example-image-2" />
                            <img src={l42} alt="example-image-2" />
                            <img src={l43} alt="example-image-2" />
                            <img src={l44} alt="example-image-2" />
                        </Carousel>


                        {/* <div className="life-card">
                            <img src={life} alt="" />
                            <img src={life} alt="" />
                            <img src={life} alt="" />
                            <img src={life} alt="" />
                            <img src={life} alt="" />
                            <img src={life} alt="" />

                        </div> */}
                    </div>
                </div>


                <div className="wise-group">
                    <Title title1="The" title2="Wise" title3="Group" />

                    <div className="wise-group-body">
                        {wisegroup.map((item) => (
                            <Link to={item.url} target='_blank'><img src={item.imgUrl} alt={item.alt} /></Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About