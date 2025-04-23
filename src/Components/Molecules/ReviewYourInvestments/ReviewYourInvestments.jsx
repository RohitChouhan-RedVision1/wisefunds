import React, { useState } from 'react'
import clca from "../../Images/Homepage/Review investments/1.png"
import cowm from "../../Images/Homepage/Review investments/2.png"
import diarm from "../../Images/Homepage/Review investments/3.png"
import com from "../../Images/Homepage/Review investments/4.png"
import edat from "../../Images/Homepage/Review investments/1.png"
import cus from "../../Images/Homepage/Review investments/1.png"
import "./ReviewYourInvestments.scss"
import Title from '../Title/Title'
import { Link } from 'react-router-dom'

const ReviewYourINvestments = () => {

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
            img: clca,
            title: "In-depth Portfolio Reviews",
            description: " Receive thorough evaluations of your investment portfolio, covering performance metrics, historical returns, and goal alignment."


        },
        {
            on: cwm,
            id: "cwm",
            img: cowm,
            title: "Advanced Analytical Tools",
            description: "Leverage state-of-the-art tools for deeper insights, assessing market conditions, historical data, and predictive models."

        },
        {
            on: darm,
            id: "darm",
            img: diarm,
            title: "Risk Assessment and Management",
            description: "Identify and mitigate potential risks through comprehensive risk analysis, evaluating market volatility and sector exposures."

        },
        {
            on: cm,
            id: "cm",
            img: com,
            title: "Performance Benchmarking",
            description: "Compare your portfolio’s performance against industry benchmarks, highlighting strengths and opportunities for improvement."

        },
        {
            on: eat,
            id: "eat",
            img: edat,
            title: "Asset Allocation Strategies",
            description: "Optimize your asset allocation with tailored recommendations based on risk tolerance, investment horizon, and financial goals."

        },
        {
            on: cs,
            id: "cs",
            img: cus,
            title: "Personalized Recommendations",
            description: "Receive customized advice tailored to your unique financial situation, helping you achieve your specific investment objectives."

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
                <Title title1="Review your" title2="investments" title3="with Wise Funds" />

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

export default ReviewYourINvestments
