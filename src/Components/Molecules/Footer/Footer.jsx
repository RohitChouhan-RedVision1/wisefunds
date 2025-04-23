// components =============================
import React from 'react'
import { Link } from 'react-router-dom'
// components ends ========================

// scss =============================
import "./Footer.scss"
// scss ends ========================


// images =============================
import logo from "../../Images/Logo/logo.png"
import fb from "../../Images/Footer/facebook_5968764.png"
import insta from "../../Images/Footer/instagram_2111463.png"
import yout from "../../Images/Footer/youtube_1384060.png"
import linkedin from "../../Images/Footer/linkedin_220201.png"
import twitter from "../../Images/Footer/twitter_5968958.png"
import google from "../../Images/Footer/search_281764.png"

// images ends ========================

const Footer = () => {

    // const download = () => {
    //     window.open("https://firebasestorage.googleapis.com/v0/b/wise-finserv-private-wealth.appspot.com/o/disclosure.Pdf?alt=media&token=65dbea6d-6f38-4f34-9d7b-f239b970c4ca", '_blank');
    // }

    const information = [
        // {
        //   title: "Home",
        //   url: "/"
        // },
        {
            title: "About Us",
            url: "#"
        },
        {
            title: "Partners",
            url: "#"
        },
        {
            title: "Testimonial",
            url: "#"
        },
        {
            title: "Blog",
            url: "#blog"
        },

        {
            title: "Careers",
            url: "#"
        },

        {
            title: "Privacy",
            url: "#"
        },
        {
            title: "Disclosures",
            url: "#"
        },
        {
            title: "Calculators",
            url: "#"
        },
    ]

    const downloads = [
        {
            title: "Play Store",
            url: "https://play.google.com/store/apps/details?id=com.wisefunds.app"
        },
        {
            title: "IOS",
            url: "https://apps.apple.com/no/app/wise-funds/id1591215757"
        },
    ]

    const company = [
        {
            title: "Privacy Policy",
            url: "/privacy-policy"
        }
    ]

    const usefulLinks = [
        {
            title: "Private Wealth",
            url: "https://www.wisefinserv.com/"
        },
        {
            title: "MF Calculator",
            url: "/mf-calculator"
        },
        {
            title: "EPF Calculator",
            url: "/epf-calculator"
        },
        {
            title: "SSY Calculator",
            url: "/ssy-calculator"
        },
        {
            title: "Child Education",
            url: "/child-education-calculator"
        },
        {
            title: "Car Planning",
            url: "/car-loan-calculator"
        },
        {
            title: "Admin Login",
            url: "/Adminlogin"
        },
        {
            title: "Employee Login",
            url: "/Employeelogin"
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
            title: "contactus@wisefunds.in",
            url: "mailto:contactus@wisefunds.in"
        },
        {
            icon: <svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-105.6 0-191.5 85.9-191.5 191.5 0 34.4 16.2 77.8 49.4 132.7 27.6 45.6 61.8 90.9 91.9 130.8 13.9 18.4 27 35.8 37.1 50.2 3 4.3 7.9 6.8 13.1 6.8s10.1-2.5 13.1-6.8c10.1-14.4 23.2-31.8 37.1-50.2 30.1-39.9 64.2-85.2 91.9-130.8 33.2-54.9 49.4-98.3 49.4-132.7 0-105.6-85.9-191.5-191.5-191.5zm0 280c-48.8 0-88.5-39.7-88.5-88.5s39.7-88.5 88.5-88.5 88.5 39.7 88.5 88.5-39.7 88.5-88.5 88.5z" /></svg>,
            title: `G-05, Ground floor,  Sector-3, Noida 201301`,
            url: "#"
        }
    ]

    const follow = [
        {
            img: insta,
            url: "https://www.instagram.com/wisefundsindia/"

        },
        {
            img: fb,
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>,
            url: "https://www.facebook.com/WiseFundsIndia"
        },
        {
            img: twitter,
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>,
            url: "https://twitter.com/wisefinserv?lang=en"
        },
        {
            img: linkedin,
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>,
            url: "https://www.linkedin.com/company/wise-finserv-pvt--ltd-/?trk=nav_account_sub_nav_company_adming"
        },
        {
            img: yout,
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>,
            url: "https://www.youtube.com/@wisefunds8671"
        },

        {
            img: google,
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>,
            url: "https://www.google.com/search?q=wise+funds&rlz=1C1RXQR_enIN1068IN1069&oq=wise+funds&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyBggCEEUYQDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPNIBCDIzODlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
        },

    ]

    return (
        <div>
            <footer>
                <div className="footer-body">
                    <div className="footer-about">
                        <div className="footer-about-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="footer-about-text">
                            <h2>Wise Funds</h2>
                            <p>We seek to be a reliable partner with each customer and help them in reaching their financial goals by giving unbiased financial advice.</p>
                        </div>

                    </div>

                    <div className="footer-links">
                        <h4>Useful Links</h4>
                        <div className="footer-links-content">
                            {usefulLinks.map((item) => (
                                <Link to={item.url}>
                                    {/* <svg id="Layer_1" enable-background="new 0 0 100 100" height="512" viewBox="0 0 100 100" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m16.1 45c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" /><path d="m26.1 20c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" /><path d="m21.1 75c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z" /><path d="m43 55.6-6.6 26.6c-.7 2.7 2.4 4.8 4.6 3.2l46.6-32.9c1.7-1.2 1.7-3.7 0-4.9l-46.6-32.9c-2.3-1.6-5.3.5-4.6 3.2l6.6 26.5c.3 1.3 1.5 2.3 2.9 2.3h7.2c1.1 0 2.1-.5 2.6-1.5 1.7-3.2 5.1-5.3 9-5.2 5.2.1 9.5 4.5 9.7 9.7.2 5.7-4.4 10.3-10 10.3-3.8 0-7-2.1-8.7-5.2-.5-.9-1.5-1.5-2.6-1.5-2 0-5.1 0-7.2 0-1.3 0-2.5 1-2.9 2.3z" /></svg>&emsp; */}
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div class="footer-links">

                        <h4>Downloads</h4>
                        <div className="footer-links-content">
                            {downloads.map((item) => (
                                <Link to={item.url}>
                                    {/* <svg id="Layer_1" enable-background="new 0 0 100 100" height="512" viewBox="0 0 100 100" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m16.1 45c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" /><path d="m26.1 20c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" /><path d="m21.1 75c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z" /><path d="m43 55.6-6.6 26.6c-.7 2.7 2.4 4.8 4.6 3.2l46.6-32.9c1.7-1.2 1.7-3.7 0-4.9l-46.6-32.9c-2.3-1.6-5.3.5-4.6 3.2l6.6 26.5c.3 1.3 1.5 2.3 2.9 2.3h7.2c1.1 0 2.1-.5 2.6-1.5 1.7-3.2 5.1-5.3 9-5.2 5.2.1 9.5 4.5 9.7 9.7.2 5.7-4.4 10.3-10 10.3-3.8 0-7-2.1-8.7-5.2-.5-.9-1.5-1.5-2.6-1.5-2 0-5.1 0-7.2 0-1.3 0-2.5 1-2.9 2.3z" /></svg>&emsp; */}
                                    {item.title}
                                </Link>
                            ))}
                        </div>

                        <h4 style={{ marginTop: "5%" }}>Company</h4>
                        <div class="footer-links-content">
                            {company.map((item) => (
                                <a href={item.url}>
                                    {/* <svg id="Layer_1" enable-background="new 0 0 100 100" height="512" viewBox="0 0 100 100" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m16.1 45c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" /><path d="m26.1 20c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" /><path d="m21.1 75c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z" /><path d="m43 55.6-6.6 26.6c-.7 2.7 2.4 4.8 4.6 3.2l46.6-32.9c1.7-1.2 1.7-3.7 0-4.9l-46.6-32.9c-2.3-1.6-5.3.5-4.6 3.2l6.6 26.5c.3 1.3 1.5 2.3 2.9 2.3h7.2c1.1 0 2.1-.5 2.6-1.5 1.7-3.2 5.1-5.3 9-5.2 5.2.1 9.5 4.5 9.7 9.7.2 5.7-4.4 10.3-10 10.3-3.8 0-7-2.1-8.7-5.2-.5-.9-1.5-1.5-2.6-1.5-2 0-5.1 0-7.2 0-1.3 0-2.5 1-2.9 2.3z" /></svg>&emsp; */}
                                    {item.title}
                                </a>
                            ))}
                            {/* <a onClick={download}>Disclosure</a> */}
                        </div>



                    </div>


                    <div className="footer-map">
                        <h4>Get In Touch</h4>
                        <div className="footer-follow-top">
                            {follow.map((item) => (
                                <a target="_blank" href={item.url}>
                                    {/* {item.icon} */}
                                    <img src={item.img} alt="icon" />
                                </a>
                            ))}
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.673660065013!2d77.31649212495483!3d28.57956068648522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce508f7ebf6cd%3A0x307bde60dd6918f7!2sWise%20Funds!5e0!3m2!1sen!2sin!4v1717677204029!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>© Copyright {new Date().getFullYear()}. All Rights Reserved by Wise Funds.</p>

                </div>

                <div className="amfi">
                    <h4><a href="#">Disclaimer</a></h4>
                    <div className="amfi-body">
                        <div className="amfi-card">
                            <h6>Registered with AMFI:</h6>
                            <p>Yes</p>
                        </div>
                        <div className="amfi-card">
                            <h6>Date of Initial Registration:</h6>
                            <p>28/12/2020                            </p>
                        </div>
                        <div className="amfi-card">
                            <h6>AMFI Registration Number:</h6>
                            <p>173708</p>
                        </div>
                        <div className="amfi-card">
                            <h6>Current Validity of ARN:</h6>
                            <p>27/12/2026</p>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Footer
