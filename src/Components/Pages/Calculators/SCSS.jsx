import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import { pmt } from 'financial'
import { ToastContainer, toast } from 'react-toastify'
import List from './List'
import { Helmet } from 'react-helmet'


const SCSS = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [tenure, setTenure] = useState(5);
  const [totalamount, setTotalAmount] = useState(0);
  const [quarterly, setQuarterly] = useState(0);
  const [isValid, setIsValid] = useState(true);

  let total, quarter, totalquarters;
  const isNumber = !isNaN(tenure);
  const isInRange = isNumber && tenure >= 5 && tenure <= 99;
  const isMultipleOf3 = isInRange && (tenure - 5) % 3 === 0;


  const calculate = () => {


    if (isNumber && isInRange && isMultipleOf3) {
      setTenure(isMultipleOf3);
      setIsValid(true);

    } else {
      setTenure(5)
      setIsValid(false);
      toast.error("Tenure Should be in multiple of 3 and minimum Tenure should be 5");
      return
    }

    if (amount > 3000000) {
      toast.error("The Amount cannot be more then 30 lakhs");
      setTotalAmount(0);
      setQuarterly(0);
      return;
    } else {
      const intr = interest / 100;
      totalquarters = tenure * 4;
      total = tenure * amount * intr;
      quarter = total / totalquarters;
      setTotalAmount(total);
      setQuarterly(quarter);
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SCSS Calculator | Calculate Returns on Senior Citizen Savings Scheme
        </title>
        <link rel="canonical" href="https://www.wisefunds.com/scss-calculator" />
        <meta name="description" content="Use our SCSS Calculator to estimate the returns on your investment in the Senior Citizen Savings Scheme. Plan your retirement income with accurate calculations." />
        <meta name="keywords" content="SCSS calculator, Senior Citizen Savings Scheme, retirement planning, investment returns, SCSS interest, tax-saving scheme" />
      </Helmet>
      <Header />
      <ToastContainer />
      <div className="sip">
        <div class="four" >
          <h3>SCSS <em>Calculator</em></h3>
        </div >
        <div className="sip-body">
          <div className="sip-left">

            <label >Amount Invested </label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{amount}</p> */}
              <input type="number" min={500} max={300000} value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />

              <input type="range" min={500} max={300000} value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
            </div>

            <label>Interest </label>
            <div className="sip-left-card">
              {/* <p>{interest}&nbsp;%</p> */}
              <input type="number" min={1} max={10} value={interest} onChange={(e) => setInterest(parseFloat(e.target.value))} />

              <input type="range" min={1} max={10} value={interest} onChange={(e) => setInterest(parseFloat(e.target.value))} />

            </div>

            <label>Tenure</label>
            <div className="sip-left-card">
              {/* <p>{tenure}&nbsp;Yr</p> */}
              <input type="number" min={5} max={99} value={tenure} onChange={(e) => setTenure(parseInt(e.target.value))} />
              <p>(Tenure Should be in multiple of 3 like 5, 8, 11, 14...)</p>

              {/* <input type="range" min={5} max={99} value={tenure} onChange={(e) => setTenure(parseInt(e.target.value))} /> */}

            </div>

            <button onClick={calculate}>Calculate</button>

          </div>
          <div className="sip-right">
            <p className='main'>Total interest Amount<span>₹ {totalamount.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>Quarterly Amount <span>₹ {quarterly.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
          </div>
        </div>

        <div className="sip-bottom">
          <div className="sip-text">
            <h3>What is an SCSS Calculator?
            </h3>
            <p>An SCSS (Senior Citizen Savings Scheme) Calculator is a tool designed to help senior citizens calculate the interest earned on their investments in the Senior Citizen Savings Scheme. SCSS is a government-backed savings scheme that offers a high interest rate, making it a popular choice for retirees looking for a secure and regular income. The calculator helps you determine the returns on your investment, taking into account the current interest rate and investment tenure.
            </p>

            <h3>Why Use the Wise Funds SCSS Calculator?
            </h3>
            <p>The Wise Funds SCSS Calculator is tailored to help senior citizens plan their finances effectively by providing accurate estimates of the returns they can expect from the Senior Citizen Savings Scheme. It’s a valuable tool for anyone looking to maximize their post-retirement income.
            </p>

            <h3>Benefits of Using the Wise Funds Calculator
            </h3>

            <ol>
              <li><b>Accurate Interest Calculation: </b>Get precise calculations of the interest earned on your SCSS investment, helping you plan your finances better.</li>
              <li><b>Ease of Use: </b>The calculator is user-friendly, allowing you to input your investment amount and see the potential returns instantly.
              </li>
              <li><b>Security:</b>SCSS is a government-backed scheme, and the calculator provides peace of mind by showing the guaranteed returns on your investment.
              </li>
              <li><b>Tax Benefits: </b>The SCSS offers tax benefits under
                Section 80C of the Income Tax Act, and the calculator helps you understand how much you can save on taxes.
              </li>
              <li><b>Planning for Regular Income: </b>Use the calculator to plan your investments in SCSS and ensure a steady flow of income during your retirement years.
              </li>

            </ol>

            <h3>Frequently Asked Questions (FAQ)
            </h3>

            <h5>1. What is the current interest rate on SCSS?
            </h5>
            <p>The interest rate on SCSS is subject to change every quarter and is determined by the government. The Wise Funds SCSS Calculator is updated with the latest rate.
            </p>
            <h5>2. Can I invest in SCSS if I’m below 60 years of age?
            </h5>
            <p>The SCSS is primarily for individuals aged 60 and above. However, individuals who have retired under a voluntary retirement scheme (VRS) or superannuation at age 55 or more but less than 60 can also invest.
            </p>

            <h5>3. What is the maximum investment limit for SCSS?
            </h5>
            <p>The maximum investment limit for SCSS is ₹15 lakh.
            </p>

            <h5>4.  Is the interest earned from SCSS taxable?
            </h5>
            <p>Yes, the interest earned is taxable. However, the principal amount invested qualifies for tax deduction under Section 80C.
            </p>

            <h5>5. Can I open multiple SCSS accounts?
            </h5>
            <p>You can open more than one SCSS account, but the total investment across all accounts cannot exceed ₹15 lakh.
            </p>
          </div>
          <List />

        </div>

      </div>
      <Footer />
    </>
  )
}

export default SCSS