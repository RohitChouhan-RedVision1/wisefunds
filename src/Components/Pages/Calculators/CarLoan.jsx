import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import { pmt, fv, pv } from 'financial';
import Finance from 'financejs';
import List from './List'
import { Helmet } from 'react-helmet'

const ChildEducationPlanning = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);


  const finance = new Finance();

  const [currentValue, setCurrentValue] = useState(2000000);
  const [yearsLeft, setYearsLeft] = useState(10);
  const [inflationRate, setInflationRate] = useState(6);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [sip, setSIP] = useState(0);
  const [lumpsum, setLumpsum] = useState(0);
  const [costOfCarInFuture, setcostOfCarInFuture] = useState(0);

  let siprequired
  const calculate = () => {
    const inflationrate = inflationRate / 100;
    const expectedrate = expectedReturnRate / 100;
    const monthlyrate = expectedrate / 12
    const costofcarinfuture = currentValue * Math.pow(1 + inflationrate, yearsLeft);
    const lump = pv(expectedrate, yearsLeft, 0, -costofcarinfuture);
    const siprequired = pmt(monthlyrate, yearsLeft * 12, 0, -costofcarinfuture);

    setLumpsum(lump);
    setSIP(siprequired);
    setcostOfCarInFuture(costofcarinfuture)
  };


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Car Planning Calculator | Estimate Total Cost of Car Ownership
        </title>
        <link rel="canonical" href="https://www.wisefunds.com/car-loan-calculator" />
        <meta name="description" content="Plan your car purchase with our Car Planning Calculator. Estimate the total cost, including EMI, insurance, and maintenance, and make an informed decision." />
        <meta name="keywords" content="car planning calculator, car loan calculator, car EMI, vehicle cost, car ownership, auto finance" />
      </Helmet>
      <Header />
      <div className="sip">
        <div class="four" >
          <h3>Car Planning <em>Calculator</em></h3>
        </div >
        <div className="sip-body">
          <div className="sip-left">

            <label>Current Value of Car</label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{currentValue}</p> */}
              <input type="number" min={100000} max={100000000} value={currentValue} onChange={(e) => setCurrentValue(parseInt(e.target.value))} />
              <input type="range" min={100000} max={100000000} value={currentValue} onChange={(e) => setCurrentValue(parseInt(e.target.value))} />

            </div>
            <label>No Of year left to Purchase car</label>
            <div className="sip-left-card">
              {/* <p>{yearsLeft}&nbsp;Yr</p> */}
              <input type="number" min={1} max={30} value={yearsLeft} onChange={(e) => setYearsLeft(parseInt(e.target.value))} />
              <input type="range" min={1} max={30} value={yearsLeft} onChange={(e) => setYearsLeft(parseInt(e.target.value))} />
            </div>

            <label>Inflation</label>
            <div className="sip-left-card">
              {/* <p>{inflationRate}&nbsp;%</p> */}
              <input type="number" min={1} max={30} value={inflationRate} onChange={(e) => setInflationRate(parseInt(e.target.value))} />
              <input type="range" min={1} max={30} value={inflationRate} onChange={(e) => setInflationRate(parseInt(e.target.value))} />
            </div>


            <label>expected rate of return</label>
            <div className="sip-left-card">
              {/* <p>{expectedReturnRate}&nbsp;%</p> */}
              <input type="number" min={1} max={30} value={expectedReturnRate} onChange={(e) => setExpectedReturnRate(parseInt(e.target.value))} />
              <input type="range" min={1} max={30} value={expectedReturnRate} onChange={(e) => setExpectedReturnRate(parseInt(e.target.value))} />
            </div>

            {/* <label>Corpus Required:</label>
            <input type="number" value={corpusRequired} onChange={(e) => setCorpusRequired(parseFloat(e.target.value))} /> */}

            <button onClick={calculate}>Calculate</button>

          </div>
          <div className="sip-right">
            <p className='main'>Cost of Car in Future:  <span><sup>₹</sup>{costOfCarInFuture.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>Lumpsum: <span>₹ {lumpsum.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span> </p>
            <p>SIP Required: <span>₹ {sip.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span> </p>
          </div>
        </div>

        <div className="sip-bottom">
          <div className="sip-text">
            <h3>What is a Car Planning Calculator?
            </h3>
            <p>A Car Planning Calculator is a tool that helps you estimate the total cost of owning a car, taking into account factors like loan amount, interest rate, tenure, down payment, and other associated costs like insurance and maintenance. This calculator helps you determine the monthly EMI (Equated Monthly Installment) and the total cost of owning the car, enabling you to plan your purchase better.
            </p>

            <h3>Why Use the Wise Funds Car Planning Calculator?
            </h3>
            <p>The Wise Funds Car Planning Calculator is designed to help you make informed decisions when purchasing a car by providing a clear picture of the financial commitments involved. It’s an essential tool for anyone considering taking out a car loan or planning to buy a car outright.
            </p>

            <h3>Benefits of Using the Wise Funds Calculator
            </h3>

            <ol>
              <li><b>Comprehensive Cost Estimation: </b>The calculator provides a detailed breakdown of all costs associated with car ownership, including EMI, insurance, and maintenance.
              </li>
              <li><b>Affordability Check: </b>Determine how much you can afford to spend on a car by calculating your monthly EMI and total loan amount.
              </li>
              <li><b>Flexible Scenarios:</b>Adjust the loan tenure, interest rate, and down payment to see how these factors impact your overall cost.
              </li>
              <li><b>Time-Saving: </b>Quickly get an estimate of your car’s total cost without the need for complex manual calculations.
              </li>
              <li><b>Financial Planning: </b>Use the calculator to plan your budget and ensure that car ownership fits within your financial goals.
              </li>

            </ol>

            <h3>Frequently Asked Questions (FAQ)
            </h3>

            <h5>1. What inputs are required for the Car Planning Calculator?
            </h5>
            <p>You need to input the car price, loan amount, interest rate, loan tenure, and down payment. You can also add additional costs like insurance and maintenance.</p>

            <h5>2. Can the calculator help me compare different car loan offers?
            </h5>
            <p>Yes, by inputting different interest rates and tenures, you can compare various car loan offers and choose the one that best fits your budget.
            </p>

            <h5>3. Does the calculator include insurance and maintenance costs?
            </h5>
            <p>Yes, you can include these costs in the calculator to get a more accurate estimate of the total cost of car ownership.
            </p>

            <h5>4. Is it better to take a longer loan tenure for lower EMIs?
            </h5>
            <p>While a longer tenure may lower your EMIs, it increases the total interest paid over the loan period. The calculator can help you find a balance that suits your financial situation.
            </p>

            <h5>5. Can I use this calculator if I’m buying a used car?
            </h5>
            <p>Yes, the calculator can be used for both new and used car purchases by adjusting the inputs accordingly.
            </p>
          </div>
          <List />

        </div>
      </div>
      <Footer />
    </>
  )
}

export default ChildEducationPlanning