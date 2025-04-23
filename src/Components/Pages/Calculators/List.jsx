import React from 'react'

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

const List = () => {

    const calculators = [
        {
            name: "SIP Calculator",
            url: "/sip-calculator",
            description: "Calculate how much you need to save or how much you will accumulate with your SIP",
            img: sip
        },
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
    ]

    return (
        <>
            <div className='list'>
                {calculators.map((item) => (
                    <Link to={item.url} className="calculators-card">
                        {item.name}
                    </Link>
                ))}</div>
        </>
    )
}

export default List