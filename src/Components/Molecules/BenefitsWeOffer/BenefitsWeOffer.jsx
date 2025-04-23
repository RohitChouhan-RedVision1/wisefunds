import React, { useState } from 'react'
import w1 from "../../Images/Homepage/Why_us/1.jpg"
import w2 from "../../Images/Homepage/Why_us/2.jpg"
import w3 from "../../Images/Homepage/Why_us/3.jpg"
import w4 from "../../Images/Homepage/Why_us/4.jpg"
import w5 from "../../Images/Homepage/Why_us/5.jpg"
import w6 from "../../Images/Homepage/Why_us/6.jpg"
import "./BenefitsWeOffer.scss"
import Title from '../Title/Title'
import { Link } from 'react-router-dom'

const BenefitsWeOffer = () => {

    const [show, setshow] = useState({
        cca: true,
        cwm: false,
        darm: false,
        cm: false,
        eat: false,
        cs: false,
    })

    const cca = () => {
        setshow({
            cca: true,
        })
    };

    const cwm = () => {
        setshow({
            cwm: true,
        })
    };

    const darm = () => {
        setshow({
            darm: true,
        })
    };

    const cm = () => {
        setshow({
            cm: true,
        })
    };

    const eat = () => {
        setshow({
            eat: true,
        })
    };

    const cs = () => {
        setshow({
            cs: true,
        })
    };

    const investmentPhilosophy = [
        {
            on: cca,
            id: "cca",
            img: w1,
            title: "Expert Portfolio Advice",
            description: "Receive tailored guidance from financial experts to optimize your portfolio and achieve your goals."


        },
        {
            on: cwm,
            id: "cwm",
            img: w2,
            title: "Robust Technology",
            description: "Our advanced Robust system eliminates the need for a traditional advisor. Simply input your goals, Time Horizon, and risk tolerance, and receive personalized investment strategies tailored to your needs."

        },
        {
            on: darm,
            id: "darm",
            img: w3,
            title: "Dedicated Relationship Manager",
            description: "Enjoy personalized assistance throughout your financial journey with a dedicated relationship manager, guiding you every step of the way."

        },
        {
            on: cm,
            id: "cm",
            img: w4,
            title: "Comprehensive Investment Tracking",
            description: "Easily monitor and manage all your investments in one place with our intuitive tracking system, ensuring you stay informed and in control."

        },
        {
            on: eat,
            id: "eat",
            img: w5,
            title: "Empowering Financial Education",
            description: "Gain access to valuable financial knowledge and resources to enhance your understanding and make informed decisions about your investments."

        },
        {
            on: cs,
            id: "cs",
            img: w6,
            title: "Curated Product baskets",
            description: "Explore our curated financial service baskets, meticulously designed by seasoned professionals to meet your investment needs with precision and expertise."

        },
    ]

    const first = investmentPhilosophy.find((item) => item.id === "cca");
    const second = investmentPhilosophy.find((item) => item.id === "cwm");
    const third = investmentPhilosophy.find((item) => item.id === "darm");
    const fourth = investmentPhilosophy.find((item) => item.id === "cm");
    const fifth = investmentPhilosophy.find((item) => item.id === "eat");
    const sixth = investmentPhilosophy.find((item) => item.id === "cs");


    return (
        <div>
            <div className="investment-philosophy">
                <Title title1="Benefits" title2="We" title3="Offer" />

                <div className="investment-content">
                    <div className="investment-philosophy-body">
                        {investmentPhilosophy.map((item) => (
                            <div className="i-p-card" id={item.id} onClick={item.on}>
                                <div className="i-img">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <h4>{item.title}</h4>
                            </div>
                        ))}
                    </div>
                    <div className="child">
                        {show.cca && (
                            <div className='cca' style={{ animation: "slide-in-right .5s" }} >
                                <h4 >{first.title}</h4>
                                <p>{first.description}</p>
                                <Link to={"/contact-us"}>Connect With Mr. Wise</Link>
                            </div>

                        )}
                        {show.cwm && (
                            <div style={{ animation: "slide-in-right .5s" }} className='cwm'>
                                <h4 >{second.title}</h4>
                                <p>{second.description}</p>
                                <Link to={"/contact-us"}>Connect With Mr. Wise</Link>

                            </div>

                        )}
                        {show.darm && (
                            <div style={{ animation: "slide-in-right .5s" }} >
                                <h4 >{third.title}</h4>
                                <p>{third.description}</p>
                                <Link to={"/contact-us"}>Connect With Mr. Wise</Link>

                            </div>
                        )}
                        {show.cm && (
                            <div style={{ animation: "slide-in-right .5s" }} className='cm'>
                                <h4 >{fourth.title}</h4>
                                <p>{fourth.description}</p>
                                <Link to={"/contact-us"}>Connect With Mr. Wise</Link>

                            </div>
                        )}
                        {show.eat && (
                            <div style={{ animation: "slide-in-right .5s" }} className='eat' >
                                <h4 >{fifth.title}</h4>
                                <p>{fifth.description}</p>
                                <Link to={"/contact-us"}>Connect With Mr. Wise</Link>

                            </div>
                        )}
                        {show.cs && (
                            <div style={{ animation: "slide-in-right .5s" }} className='cs'>
                                <h4 >{sixth.title}</h4>
                                <p>{sixth.description}</p>
                                <Link to={"/contact-us"}>Connect With Mr. Wise</Link>

                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BenefitsWeOffer
