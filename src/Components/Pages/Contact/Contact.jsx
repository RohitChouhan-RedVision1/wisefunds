// components =============================
import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../AdminPanel/firebase';
import { Helmet } from 'react-helmet'
import emailjs from '@emailjs/browser';

// components ends ========================

// scss =============================
import "./Contact.scss"
import Footer from '../../Molecules/Footer/Footer'
import Header from '../../Molecules/Header/Header'

// scss ends ========================

// images =============================
import contact from '../../Images/Contact/contact.webp'
import noida from '../../Images/Contact/noida.webp'
import delhi from '../../Images/Contact/delhi.webp'
import lucknow from '../../Images/Contact/lucknow.webp'
import varanasi from '../../Images/Contact/varanasi.webp'
import allahabad from '../../Images/Contact/allahabad.webp'
import mumbai from '../../Images/Contact/mumbai.webp'
import chandigarh from '../../Images/Contact/chandigarh.webp'
// images ends ========================

const Contact = () => {


    useEffect(() => {
        // 👇️ scroll to top on page load

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

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

                emailjs.sendForm('service_bh2lrla', 'template_58oajnn', form.current, 'ILc-SJ1fH27uOArlH')
                    .then((result) => {
                        console.log(result.text);

                    }, (error) => {
                        console.log(error.text);
                    });


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

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Wise Funds  | Get Expert Financial Insights Today
                </title>
                <link rel="canonical" href="https://www.wisefunds.com/contact-us" />
                <meta name="description" content="Need financial advice? Contact Wise Funds today for expert guidance on mutual funds, fixed income, insurance, and more. We're here to help you achieve your financial goals." />
                <meta name="keywords" content=": Contact Wise Funds, financial advice, mutual funds contact, investment inquiries, financial planning support, expert financial guidance, SEBI complaints." />
            </Helmet>
            <Header />
            <ToastContainer />

            <div className='contact-page'>
                <div class="four" >
                    <h3>Contact <em>Us</em></h3>
                </div >

                <div className="locations">
                    <div className="location-card">
                        <div className="location-card-text">
                            <img src={noida} alt="" />
                            <div className="location-card-caption">
                                <h3>Wise Funds Pvt. Ltd Head Office </h3>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                    G-5, Sector - 3 Noida, Uttar Pradesh - 201301
                                </p>
                                <a href="tel:01204114832">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                    0120-4114832
                                </a>
                                <a href="tel:01204377615">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                    0120-4377615
                                </a>
                                <a href="tel:01204312268">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                    0120-4312268
                                </a>
                                <a href="mailto:contactus@wisefinserv.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                    contactus@wisefinserv.com
                                </a>
                                <span>For any grievance addressal please contact our Compliance. The contact details of compliance is mentioned below:</span>
                                <b className='compliance'>Compliance: <a href="mailto:compliance@wisefinserv.com"> compliance@wisefinserv.com</a></b>
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7007.347632363503!2d77.319067!3d28.579556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4599cc488a7%3A0xd1035f18d15e1788!2sWise%20Finserv%20Pvt.%20Ltd!5e0!3m2!1sen!2sus!4v1695905720702!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="location-card-2">
                        <div className="location-card-text">
                            <img src={noida} alt="" />

                            <div className="location-card-caption">
                                <h3>Noida Branch</h3>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                    KLJ Noida One(IT Park) , Plot No B-8, Unit No- C308, <br />
                                    Noida Sec-62, Uttar Pradesh-201301
                                </p>
                                <a href="tel:01203543158">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                    0120-3543158
                                </a>
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.2473279784344!2d77.36356877550044!3d28.62234857567035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzIwLjUiTiA3N8KwMjEnNTguMSJF!5e0!3m2!1sen!2sin!4v1696864315140!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="location-card">
                        <div className="location-card-text">
                            <img src={delhi} alt="" />

                            <div className="location-card-caption">
                                <h3>Delhi Branch</h3>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                    20, Onward Coworkx,
                                    First Floor , Okhla Phase 3<br />
                                    Okhla Industrial Estate
                                    New Delhi-20
                                </p>
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5385618421915!2d77.2670069!3d28.5535863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce30c7f783cb1%3A0xcbb8b1da41205f9f!2sOnward%20Workspaces-%20NSIC%20Okhla%20Phase%203!5e0!3m2!1sen!2sin!4v1698750265867!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="location-card-2">
                        <div className="location-card-text">
                            <img src={varanasi} alt="" />
                            <div className="location-card-caption">
                                <h3>Varanasi Branch</h3>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                    Kuber Complex, Shop no 60,
                                    1st Floor, Rathyatra,<br />
                                    Varanasi, UP 221010
                                </p>
                                <a href="tel:05422277990">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                    0542-2277990
                                </a>
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3606.893644087544!2d82.9915049264631!3d25.3077771554414!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dffed2a3449%3A0x11a24f4d3fd63f31!2sKuber%20Complex%2C%20Rathyatra%20Sigra%20Rd%2C%20Jahumandi%2C%20Varanasi%2C%20Uttar%20Pradesh%20221010!5e0!3m2!1sen!2sin!4v1696864217079!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="location-card">
                        <div className="location-card-text">
                            <img src={mumbai} alt="" />
                            <div className="location-card-caption">
                                <h3>Mumbai Branch</h3>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                    Office Unit No 1003,
                                    Haware infotech park<br />
                                    Plot no 39/3 sector 30A ,
                                    Vashi 400703 Mumbai
                                </p>
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9543774929375!2d72.9993002!3d19.0657434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c14e84cbb1cf%3A0xec7d66136f702da4!2sHaware%20Infotech%20Park%2C%20Sector%2030A%2C%20Vashi%2C%20Navi%20Mumbai%2C%20Maharashtra%20400703!5e0!3m2!1sen!2sin!4v1698750393377!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="location-card-2">
                        <div className="location-card-text">
                            <img src={lucknow} alt="" />
                            <div className="location-card-caption">
                                <h3>Lucknow Branch</h3>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                    Saran Chamber-1, Park Road,
                                    Hazratganj, Lucknow<br />
                                    Uttar Pradesh 226001, India
                                </p>
                                <a href="tel:05224305089">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                    0522-4305089
                                </a>
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3559.8795672204556!2d80.94700837427096!3d26.843782563051512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUwJzM3LjYiTiA4MMKwNTYnNTguNSJF!5e0!3m2!1sen!2sin!4v1696864148866!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="location-card">
                        <div className="location-card-text">
                            <img src={allahabad} alt="" />
                            <div className="location-card-caption">
                                <h3>Allahabad Branch</h3>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                    4C, SN Towers, Maharishi Dayanand Marg,
                                    Opp Radio <br />  Station, Civil Lines
                                    Allahabad, Uttar Pradesh-211001
                                </p>
                                <a href="tel:05224305089">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                    0522-4305089
                                </a>
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3602.3185546290183!2d81.81880837539043!3d25.461036377542055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDI3JzM5LjciTiA4McKwNDknMTcuMCJF!5e0!3m2!1sen!2sin!4v1696864277303!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="location-card-2">
                        <div className="location-card-text">
                            <img src={chandigarh} alt="" />
                            <div className="location-card-caption">
                                <h3>Chandigarh Branch</h3>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                    Cabin No. 53,54,55  SCO 41 Sector 11 Panchkula, 134109
                                </p>
                                <a href="tel:05224305089">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                    0522-4305089
                                </a>
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3431.1302530887774!2d76.8492778!3d30.6866111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQxJzExLjgiTiA3NsKwNTAnNTcuNCJF!5e0!3m2!1sen!2sin!4v1705059814269!5m2!1sen!2sin"></iframe>
                    </div>

                </div>

                <div className="contact-page-body">
                    <form method='POST' ref={form}>
                        <h3>Send Us a Message</h3>

                        <div className="form-body">
                            <div className="input">
                                <label>Name*</label>
                                <input type="text"
                                    placeholder='Your Name'
                                    name='Name'
                                    value={userData.careers_name}
                                    onChange={postUserData}
                                    required
                                />
                            </div>

                            <div className="input">
                                <label>Email*</label>
                                <input type="text"
                                    placeholder='Your Email'
                                    name='Email'
                                    value={userData.Email}
                                    onChange={postUserData}
                                    required
                                />
                            </div>

                            <div className="input">
                                <label>Phone*</label>
                                <input type="text"
                                    placeholder='Your Phone Number'
                                    name='Phone'
                                    value={userData.Phone}
                                    onChange={postUserData}
                                    required
                                />
                            </div>

                            <div className="input">
                                <label>Company*</label>
                                <input type="text"
                                    placeholder='Company Name'
                                    name='Company'
                                    value={userData.Company}
                                    onChange={postUserData}
                                    required
                                />
                            </div>
                        </div>

                        <div className="input">
                            <label>Message*</label>
                            <textarea
                                name='Message'
                                value={userData.Message}
                                onChange={postUserData}
                                required
                                placeholder='Your Message'
                                rows="6">
                            </textarea>
                        </div>

                        <button onClick={SubmitData}>Submit</button>
                    </form>
                    <div className="contact-info">
                        <h3>Contact Information</h3>

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
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact