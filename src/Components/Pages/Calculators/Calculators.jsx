import React, { useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import { Link } from 'react-router-dom'
import sip from "../../Images/Homepage/Calculators/sip calculator.png"
import sipgoal from "../../Images/Homepage/Calculators/sip calculator.png"
import lumpsum from "../../Images/Homepage/Calculators/lump sum calculator.png"
import swp from "../../Images/Homepage/Calculators/swp.png"
import mf from "../../Images/Homepage/Calculators/mf.png"
import ssy from "../../Images/Homepage/Calculators/ssy.png"
import ppf from "../../Images/Homepage/Calculators/ppf.png"
import fd from "../../Images/Homepage/Calculators/fd.png"
import rd from "../../Images/Homepage/Calculators/rd.png"
import nps from "../../Images/Homepage/Calculators/nps.png"
import epf from "../../Images/Homepage/Calculators/epf.png"
import hra from "../../Images/Homepage/Calculators/hra.png"
import retirement from "../../Images/Homepage/Calculators/retirement.png"
import emi from "../../Images/Homepage/Calculators/emi.png"
import car from "../../Images/Homepage/Calculators/car.png"
import si from "../../Images/Homepage/Calculators/si.png"
import ci from "../../Images/Homepage/Calculators/ci.png"
import stepupsip from "../../Images/Homepage/Calculators/step-up-sip.png"
import childEducation from "../../Images/Homepage/Calculators/child-education.png"
import childMarrige from "../../Images/Homepage/Calculators/child-marrige.png"
import gratuity from "../../Images/Homepage/Calculators/gratuity.png"
import incometax from "../../Images/Homepage/Calculators/income-tax.png"
import scss from "../../Images/Homepage/Calculators/scss.png"
import { Helmet } from 'react-helmet'

const Calculators = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const List = [
        {
            name: "SIP Calculator",
            url: "/sip-calculator",
            description: "Calculate how much you need to save or how much you will accumulate with your SIP",
            img: sip
        },
        // {
        //     name: "SIP Calculator Goal",
        //     url: "/sip-calculator-goal",
        //     description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
        //     img: sipgoal
        // },
        {
            name: "Lump Sum Calculator",
            url: "/lump-sum-calculator",
            description: "Calculate returns for Lumpsum Investments to make best plan to achieve your financial goals",
            img: lumpsum
        },
        {
            name: "SWP Calculator",
            url: "/swp-calculator",
            description: "Calculate your final amount with SWP (Systematic Withdrawal Plans)",
            img: swp
        },
        {
            name: "MF Calculator",
            url: "/mf-calculator",
            description: "Calculate the returns on your mutual fund investments",
            img: mf
        },
        {
            name: "SSY Calculator",
            url: "/ssy-calculator",
            description: "Calculate returns for Sukanya Samriddhi Yojana (SSY) as per your investment",
            img: ssy
        },
        {
            name: "PPF Calculator",
            url: "/ppf-calculator",
            description: "Calculate returns on PPF (Public Provident Fund) seamlessly",
            img: ppf

        },
        {
            name: "EPF Calculator",
            url: "/epf-calculator",
            description: "Calculate returns for your EPF (Employee's Provident Funds)",
            img: epf
        },
        {
            name: "FD Calculator",
            url: "/fd-calculator",
            description: "Check returns on your fixed deposits (FDs) without any hassle",
            img: fd
        },
        {
            name: "RD Calculator",
            url: "/rd-calculator",
            description: "Check returns on your RD(Reccuring Deposit) in just a few clicks",
            img: rd
        },
        {
            name: "NPS Calculator",
            url: "/nps-calculator",
            description: "Calculate returns for your NPS (National Pension Scheme)",
            img: nps
        },
        {
            name: "HRA Calculator",
            url: "/hra-calculator",
            description: "Calculate your HRA (House Rent Allowance) returns easily",
            img: hra
        },
        {
            name: "EMI Calculator",
            url: "/emi-calculator",
            description: "Calculate EMI on your loans - home loan, car loan or personal loan",
            img: emi
        },
        {
            name: "Simple interest",
            url: "/simple-interest-calculator",
            description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
            img: si
        },
        {
            name: "Compound Interest Calculator",
            url: "/compound-interest-calculator",
            description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
            img: ci
        },

        {
            name: " Step Up SIP Calculator",
            url: "/step-up-sip-calculator",
            description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
            img: stepupsip
        },
        {
            name: "Income Tax Calculator",
            url: "/income-tax-calculator",
            description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
            img: incometax
        },
        {
            name: "Gratuity Calculator",
            url: "/gratuity-calculator",
            description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
            img: gratuity
        },
        {
            name: "SCSS  Calculator",
            url: "/scss-calculator",
            description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
            img: scss
        },
        {
            name: "Car Planning Calculator",
            url: "/car-loan-calculator",
            description: "Calculate your loan EMI through this calculator",
            img: car
        },

        {
            name: "Child Marrige Calculator",
            url: "/child-marrige-calculator",
            description: "Calculate how much you need for having a relaxed retirement",
            img: childMarrige
        },

        {
            name: "Child Education Calculator",
            url: "/child-education-calculator",
            description: "Calculate how much you need for having a relaxed retirement",
            img: childEducation
        },
        {
            name: "Retirement Calculator",
            url: "/retirement-calculator",
            description: "Calculate how much you need for having a relaxed retirement",
            img: retirement
        },


        // {
        //     name: "Home Loan Calculator",
        //     url: "/home-loan-calculator",
        //     description: "Calculate your Home Loan EMI through this calculator",
        //     img: home
        // },

        // {
        //     name: "NSC Calculator",
        //     url: "/nsc-calculator",
        //     description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
        // },


        // {
        //     name: " GST",
        //     url: "/gst-calculator",
        //     description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
        // },
        // {
        //     name: "CAGR Calculator",
        //     url: "/cagr-calculator",
        //     description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
        // },
        // {
        //     name: " APY Calculator",
        //     url: "/apy-calculator",
        //     description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
        // },

        // {
        //     name: "Flat VS reducing Rate Calculator",
        //     url: "/flat-vs-reducing-rate-calculator",
        //     description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
        // },
        // {
        //     name: "Brokerage Calculator",
        //     url: "/brokerage-calculator",
        //     description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
        // },
        // {
        //     name: "Margin Calculator",
        //     url: "/margin-calculator",
        //     description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
        // },
        // {
        //     name: "TDS Calculator",
        //     url: "/tds-calculator",
        //     description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
        // },
        // {
        //     name: " Salary Calculator",
        //     url: "/salary-calculator",
        //     description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
        // },
        // {
        //     name: "Inflation Calculator",
        //     url: "/inflation-calculator",
        //     description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
        // },
        // {
        //     name: "Post office MIS Calculator",
        //     url: "/post-office-mis-calculator",
        //     description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
        // },

    ]

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title> Calculators</title>
                <link rel="canonical" href="https://www.wisefunds.com/sip-calculator" />
                <meta name="description" content="Estimate the returns on your one-time investments with our Lump Sum Calculator. Plan your investments and achieve your financial goals with ease." />
                <meta name="keywords" content="lump sum calculator, one-time investment, mutual fund returns, investment planning, financial planning, lump sum returns" />
            </Helmet>
            <Header />
            <div className="calculators">
                <div class="four" >
                    <h3>Calculators <em></em></h3>
                </div >                <div className="calculators-body">
                    {List.map((item) => (
                        <Link to={item.url} className="calculators-card">
                            {/* <img src={image} alt={item.name} /> */}
                            {/* <div className="circle"></div> */}
                            <img src={item.img} alt={item.name} />
                            <div className="calculator-text">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>

                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Calculators 