import React, { useState } from 'react'
import a from "../../Images/a.png"
import b from "../../Images/Homepage/wise-fund3.png"
import Title from '../Title/Title'
import "./Invest.scss"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import icon1 from "../../Images/Homepage/playstore.png"
import icon2 from "../../Images/Homepage/apple-logo.png"

const Invest = () => {
    const [Position, setSPosition] = useState("");
    const [Top, setSTop] = useState("");
    const [Left, setSLeft] = useState("");
    const [image, setImage] = useState(b);
    const [blur, setBlur] = useState("");

    const changeSlider = () => {
        window.scrollY >= 9200 ? setImage(a) : setImage(b);
        window.scrollY >= 3500 ? setBlur("blur-in 1s 1") : setBlur("none");
        window.scrollY >= 2300 ? setSPosition("sticky") : setSPosition("none");
        window.scrollY >= 2300 ? setSTop("30%") : setSTop("none");
        window.scrollY >= 2300 ? setSLeft("0") : setSLeft("none");
    }

    console.log(window.scrollY)
    window.addEventListener('scroll', changeSlider);

    return (
        <>
            <div className="how">
                <Title title1="How" title2="To" title3="Invest" />
                <AnimationOnScroll animateIn="animate__slideInUp">
                    <div className="how-body">
                        <div className="img">
                            <img src={image} alt="image" style={{ position: Position, top: Top, left: Left, animation: blur }} />
                        </div>
                        <div className="how-card">
                            <div className="how-card-text">
                                {/* <AnimationOnScroll animateIn="animate__SlideInLeft"> */}
                                <h3>Chart your own financial Course</h3>
                                {/* </AnimationOnScroll> */}
                                <p>With the Wise funds app, investing, and monitoring your portfolio is seamless, accessible anytime,
                                    anywhere. Our intuitive mobile application offers comprehensive features, empowering you to manage
                                    your finances effortlessly on the go.</p>
                                <div className="how-btn">
                                    <a href="https://play.google.com/store/apps/details?id=com.wisefunds.app">
                                        <img src={icon1} alt="play store" />
                                        Play Store
                                    </a>
                                    <a href="https://apps.apple.com/no/app/wise-funds/id1591215757">
                                        <img src={icon2} alt="app store" />
                                        App Store
                                    </a>
                                </div>
                            </div>
                            <div className="how-card-text">
                                <h3>Invest With Confidence, Grow With Wisdom</h3>
                                <p>Explore our diverse basket of mutual funds, curated to suit every investor&#39;s needs. With Wise
                                    Funds, embark on a journey of financial growth and security, backed by expert guidance.</p>
                                <div className="how-btn">
                                    <a href="https://play.google.com/store/apps/details?id=com.wisefunds.app">
                                        <img src={icon1} alt="play store" />
                                        Play Store
                                    </a>
                                    <a href="https://apps.apple.com/no/app/wise-funds/id1591215757">
                                        <img src={icon2} alt="app store" />
                                        App Store
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </AnimationOnScroll>
            </div>

            <div className="how-mobile">
                < div class="four" >
                    <h3>How <em>To</em> Invest</h3>
                </div >
                <div className="how-mobile-body">

                    <div className="how-mobile-card">
                        <div className="img">
                            <img src={a} alt="image" />
                        </div>
                        <div className="how-mobile-card-text">
                            <h3>Chart your own financial Course</h3>
                            <p>With the Wise funds app, investing, and monitoring your portfolio is seamless, accessible anytime,
                                anywhere. Our intuitive mobile application offers comprehensive features, empowering you to manage
                                your finances effortlessly on the go.</p>
                            <div className="how-mobile-btn">
                                <a href="https://play.google.com/store/apps/details?id=com.wisefunds.app">
                                    <img src={icon1} alt="play store" />
                                    Play Store
                                </a>
                                <a href="https://apps.apple.com/no/app/wise-funds/id1591215757">
                                    <img src={icon2} alt="app store" />
                                    App Store
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="how-mobile-card">
                        <div className="img">
                            <img src={a} alt="image" />
                        </div>
                        <div className="how-mobile-card-text">

                            <h3>Invest With Confidence, Grow With Wisdom</h3>
                            <p>Explore our diverse basket of mutual funds, curated to suit every investor&#39;s needs. With Wise
                                Funds, embark on a journey of financial growth and security, backed by expert guidance.</p>
                            <div className="how-mobile-btn">
                                <a href="https://play.google.com/store/apps/details?id=com.wisefunds.app">
                                    <img src={icon1} alt="play store" />
                                    Play Store
                                </a>
                                <a href="https://apps.apple.com/no/app/wise-funds/id1591215757">
                                    <img src={icon2} alt="app store" />
                                    App Store
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default Invest