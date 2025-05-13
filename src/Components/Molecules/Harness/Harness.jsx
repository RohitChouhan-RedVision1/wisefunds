import React, { useState, useEffect, useRef } from 'react'
import Title from '../Title/Title'
import c from "../../Images/3.png"
import d from "../../Images/4.png"
import s1 from "../../Images/a.png"
import s2 from "../../Images/2.png"
import "../Harness/Harness.scss"
// import { useSpring, animated } from 'react-spring';
import mascot from "../../Images/WFS Mascot.png"
import { useInView } from "framer-motion"
import { motion, useScroll } from 'framer-motion';

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Harness = () => {

    const [Position, setSPosition] = useState("");
    const [Top, setSTop] = useState("");
    const [Left, setSLeft] = useState("");
    const [image, setImage] = useState(s1);
    const [blur, setBlur] = useState("");
    const [T1Top, setT1Top] = useState("");
    const [T1width, setT1Width] = useState("");
    const [LPosition, LsetSPosition] = useState("");
    const [LTop, LsetSTop] = useState("");
    const [LLeft, LsetSLeft] = useState("");
    const [Limage, LsetImage] = useState(s1);
    const [Lblur, LsetBlur] = useState("");
    const [LT1Top, LsetT1Top] = useState("");
    const [LT1width, LsetT1Width] = useState("");

    const changeSlider = () => {
        window.scrollY >= 3800 ? setImage(s2) : setImage(s1);
        window.scrollY >= 3800 ? setBlur("blur-in 1s 1") : setBlur("none");
        window.scrollY >= 2000 ? setSPosition("sticky") : setSPosition("none");
        window.scrollY >= 2000 ? setSTop("20%") : setSTop("none");
        window.scrollY >= 2300 ? setSLeft("43%") : setSLeft("none");
        window.scrollY <= 2900 ? setT1Width("100%") : setT1Width("25%");
        window.scrollY <= 2000 ? setT1Top("0%") : setT1Top("30%");

        window.scrollY >= 4800 ? LsetImage(s2) : setImage(s1);
        window.scrollY >= 4800 ? LsetBlur("blur-in 1s 1") : setBlur("none");
        window.scrollY >= 3000 ? LsetSPosition("sticky") : setSPosition("none");
        window.scrollY >= 3000 ? LsetSTop("20%") : setSTop("none");
        window.scrollY >= 3300 ? LsetSLeft("43%") : setSLeft("none");
        window.scrollY <= 3900 ? LsetT1Width("100%") : setT1Width("25%");
        window.scrollY <= 3000 ? LsetT1Top("0%") : setT1Top("30%");
    }
    window.addEventListener('scroll', changeSlider);

    return (
        <>
            <div className="harness">
                <AnimationOnScroll animateIn="animate__slideInUp" offset={0}>
                    {/* <div class="four" style={{ width: T1width, position: T1Position, marginLeft: T1Left, top: T1Top, marginTop: T1margin }} >
                        <h3 >Harness the Power of <em>our robust app</em> to take control of your Financial Future</h3>
                    </div > */}
                    {/* <div class="four" style={{ width: "30%", position: 'absolute', top: "30%" }} >
                    </div > */}
                </AnimationOnScroll >
                {/* <Title title1="Harness the Power of" title2="our robust app" title3=" to take control of your Financial Future" /> */}
                <AnimationOnScroll animateIn="animate__slideInUp">
                    <div className="harness-body">
                        <h3 className='title' style={{ width: T1width, top: T1Top }} >Harness the Power of <em>our robust app</em> to take control of your Financial Future</h3>

                        <div className="harness-card">
                            <div className="big" style={{ position: Position, top: Top, right: Left }}>
                                <img src={image} alt="img" className="big" style={{ animation: blur }}
                                />
                                <img src={mascot} alt="" className='mascot' />
                                {/* <motion.h4
                                    animate={{ x: [0, 100, 0] }}
                                >Harness the Power of <em>our robust app</em> to take control of your Financial Future</motion.h4> */}
                            </div>
                            <AnimationOnScroll animateIn="animate__zoomIn">
                                <div className="first">
                                    <h3>All Your investment in one place</h3>
                                    <p >Simplify your investment journey by tracking and managing all your assets and allocation through the user friend app. Say goodbye to the hassle of juggling multiple platforms!</p>
                                    <div className="circle1"></div>
                                </div>

                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__zoomIn">

                                <div className="second">
                                    <h3>Robust Smart Assistant </h3>
                                    <p >Unlock the power of Wise Funds’ robust smart assistant—an intuitive guide that crafts personalized investment strategies, perfectly aligned with your goals and risk appetite, ensuring financial success.
                                    </p>
                                    <div className="circle1"></div>
                                </div>

                            </AnimationOnScroll>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>

            <div className="harness-laptop">
                <AnimationOnScroll animateIn="animate__slideInUp" offset={0}>
                    {/* <div class="four" style={{ width: T1width, position: T1Position, marginLeft: T1Left, top: T1Top, marginTop: T1margin }} >
                        <h3 >Harness the Power of <em>our robust app</em> to take control of your Financial Future</h3>
                    </div > */}
                    {/* <div class="four" style={{ width: "30%", position: 'absolute', top: "30%" }} >
                    </div > */}
                </AnimationOnScroll >
                {/* <Title title1="Harness the Power of" title2="our robust app" title3=" to take control of your Financial Future" /> */}
                <AnimationOnScroll animateIn="animate__slideInUp">
                    <div className="harness-body">
                        <h3 className='title' style={{ width: LT1width, top: LT1Top }} >Harness the Power of <em>our robust app</em> to take control of your Financial Future</h3>

                        <div className="harness-card">
                            <div className="big" style={{ position: LPosition, top: LTop, right: LLeft }}>
                                <img src={Limage} alt="img" className="big" style={{ animation: Lblur }}
                                />
                                <img src={mascot} alt="" className='mascot' />
                                {/* <motion.h4
                                    animate={{ x: [0, 100, 0] }}
                                >Harness the Power of <em>our robust app</em> to take control of your Financial Future</motion.h4> */}
                            </div>
                            <AnimationOnScroll animateIn="animate__zoomIn">
                                <div className="first">
                                    <h3>All Your investment in one place</h3>
                                    <p >Simplify your investment journey by tracking and managing all your assets and allocation through the user friend app. Say goodbye to the hassle of juggling multiple platforms!</p>
                                    <div className="circle1"></div>
                                </div>

                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__zoomIn">

                                <div className="second">
                                    <h3>Robust Smart Assistant </h3>
                                    <p >Unlock the power of Wise Funds’ robust smart assistant—an intuitive guide that crafts personalized investment strategies, perfectly aligned with your goals and risk appetite, ensuring financial success.
                                    </p>
                                    <div className="circle1"></div>
                                </div>

                            </AnimationOnScroll>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>

            <div className="harness-mobile">
                < div class="four" >
                    <h3>Harness the Power of <em>our robust app</em> to take control of your Financial Future</h3>
                </div >

                <div className="harness-mobile-body">
                    <div className="harness-mobile-card">
                        <div className="big">
                            <img src={s1} alt="img" className="big" />
                            <img src={mascot} alt="" className='mascot' />
                        </div>
                        <div className="tet">
                            <h3>All Your investment in one place</h3>
                            <p >Simplify your investment journey by tracking and managing all your assets and allocation through the user friend app. Say goodbye to the hassle of juggling multiple platforms!</p>
                            <div className="circle1"></div>
                        </div>
                    </div>

                    <div className="harness-mobile-card">
                        <div className="big">
                            <img src={s2} alt="img" className="big" />
                            <img src={mascot} alt="" className='mascot' />
                        </div>
                        <div className="tet">
                            <h3>Robust Smart Assistant </h3>
                            <p >Unlock the power of Wise Funds’ robust smart assistant—an intuitive guide that crafts personalized investment strategies, perfectly aligned with your goals and risk appetite, ensuring financial success.
                            </p>
                            <div className="circle1"></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Harness