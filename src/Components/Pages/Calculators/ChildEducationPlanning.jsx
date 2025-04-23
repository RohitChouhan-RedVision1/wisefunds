import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import { pmt, pv, fv } from 'financial'
import List from './List'
import { Helmet } from 'react-helmet'

const ChildEducationPlanning = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [currentCost, setCurrentCost] = useState(2000000);
  const [childAge, setChildAge] = useState(10);
  const [higherEducationAge, setHigherEducationAge] = useState(18);
  const [yearsLeft, setYearsLeft] = useState(0);
  const [futureCost, setFutureCost] = useState(0);
  const [inflationRate, setInflationRate] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [sip, setSIP] = useState(0);
  const [lumpsum, setLumpsum] = useState(0);

  const calculate = () => {
    const yearleft = higherEducationAge - childAge;
    setYearsLeft(yearleft);
    const inflationrate = inflationRate / 100;
    const expectedrate = expectedReturn / 100;
    const costofeducationinfuture = currentCost * Math.pow(1 + inflationrate, yearleft);
    const lump = pv(expectedrate, yearleft, 0, -costofeducationinfuture);
    const siprequired = pmt(expectedrate / 12, childAge * 12, 0, -costofeducationinfuture)
    setLumpsum(lump);
    setSIP(siprequired);
    setFutureCost(costofeducationinfuture)
  };

  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Child Education Planning Calculator | Secure Your Child’s Future Education
        </title>
        <link rel="canonical" href="https://www.wisefunds.com/child-education-calculator" />
        <meta name="description" content="Calculate the future cost of your child’s education with our Child Education Planning Calculator. Ensure you save enough to meet all educational expenses." />
        <meta name="keywords" content="child education planning calculator, education savings, future education costs, financial planning, child’s education, college savings plan" />
      </Helmet>
      <Header />
      <div className="sip">
        <div class="four" >
          <h3>Child Education Planning <em>Calculator</em></h3>
        </div >
        <div className="sip-body">
          <div className="sip-left">

            <label>Current Cost of Child Education:</label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{currentCost}</p> */}
              <input type="number" min={10000} max={1000000} value={currentCost} onChange={(e) => setCurrentCost(parseInt(e.target.value))} />
              <input type="range" min={10000} max={1000000} value={currentCost} onChange={(e) => setCurrentCost(parseInt(e.target.value))} />
            </div>

            <label>Child Age:</label>
            <div className="sip-left-card">
              {/* <p>{childAge}</p> */}
              <input type="number" min={1} max={40} value={childAge} onChange={(e) => setChildAge(parseInt(e.target.value))} />
              <input type="range" min={1} max={40} value={childAge} onChange={(e) => setChildAge(parseInt(e.target.value))} />
            </div>

            <label>Child Higher Education Age:</label>
            <div className="sip-left-card">
              {/* <p>{higherEducationAge}</p> */}
              <input type="number" min={1} max={40} value={higherEducationAge} onChange={(e) => setHigherEducationAge(parseInt(e.target.value))} />
              <input type="range" min={1} max={40} value={higherEducationAge} onChange={(e) => setHigherEducationAge(parseInt(e.target.value))} />
            </div>

            {/* <label>No of Years Left for Higher Education: {yearsLeft}</label>
            <label>Cost of Education in Future: {futureCost.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</label> */}

            <label>Inflation Rate:</label>
            <div className="sip-left-card">
              {/* <p>{inflationRate}&nbsp;%</p> */}
              <input type="number" min={1} max={20} value={inflationRate} onChange={(e) => setInflationRate(parseFloat(e.target.value))} />
              <input type="range" min={1} max={20} value={inflationRate} onChange={(e) => setInflationRate(parseFloat(e.target.value))} />
            </div>

            <label>Expected Rate of Return:</label>
            <div className="sip-left-card">
              {/* <p>{expectedReturn}&nbsp;%</p> */}
              <input type="number" min={1} max={20} value={expectedReturn} onChange={(e) => setExpectedReturn(parseFloat(e.target.value))} />
              <input type="range" min={1} max={20} value={expectedReturn} onChange={(e) => setExpectedReturn(parseFloat(e.target.value))} />
            </div>

            <button onClick={calculate}>Calculate</button>

          </div>
          <div className="sip-right">
            <p className='main'>Cost of Education in Future<span>₹ {futureCost}</span></p>
            <p>No of Years Left for Higher Education:<span>{yearsLeft}</span></p>
            <p>SIP Required:<span>₹ {sip}</span></p>
            <p>Lumpsum Required: <span>₹ {lumpsum}</span></p>
          </div>
        </div>

        <div className="sip-bottom">
          <div className="sip-text">
            <h3>What is a Child Education Planning Calculator?
            </h3>
            <p>A Child Education Planning Calculator is a tool designed to help parents estimate the future cost of their child's education and determine how much they need to save to cover these expenses. Considering factors such as the current cost of education, inflation, and the expected rate of return on investments, this calculator helps you plan systematically for your child's educational needs, from primary school to higher education.</p>

            <h3>Why Use the Wise Funds Child Education Planning Calculator?</h3>
            <p>The Wise Funds Child Education Planning Calculator is created to assist parents in ensuring they are financially prepared for their child's education. It provides a clear estimate of the required savings, helping you avoid financial shortfalls and ensuring your child’s educational aspirations are met.
            </p>

            <h3>Benefits of Using the Wise Funds Calculator
            </h3>

            <ol>
              <li><b>Accurate Cost Estimation: </b>Get a realistic estimate of how much money you will need to save for your child’s education, considering rising costs and inflation.
              </li>
              <li><b>Systematic Savings Plan: </b>Determine the amount you need to save regularly to achieve your education funding goals.</li>
              <li><b>Flexible Scenarios:</b> Adjust the education cost, time horizon, and expected returns to see how these factors impact your savings plan.
              </li>
              <li><b>Comprehensive Planning: </b>Cover all stages of education, from primary to higher education, ensuring you’re financially prepared for every step.
              </li>
              <li><b>Financial Confidence: </b> Plan ahead to avoid last-minute financial stress, ensuring that your child’s education is never compromised.
              </li>

            </ol>

            <h3>Frequently Asked Questions (FAQ)
            </h3>

            <h5>1. What details do I need to use the Child Education Planning Calculator?
            </h5>
            <p>You need to input the current cost of education, the number of years until your child begins school or college, and the expected rate of return on your savings or investments.
            </p>

            <h5>2. How does inflation impact education costs?
            </h5>
            <p>Education costs typically rise faster than general inflation. The calculator takes this into account to help you save adequately for future expenses.
            </p>

            <h5>3. Can I plan for multiple education stages (e.g., school and college)?
            </h5>
            <p>Yes, the calculator allows you to plan for different stages of education by inputting separate cost estimates for each stage.
            </p>

            <h5>4. What if the cost of education increases unexpectedly?
            </h5>
            <p>Regularly review and adjust your savings plan to accommodate any unexpected increases in education costs.
            </p>

            <h5>5.  Is it better to start saving early?
            </h5>
            <p>Yes, the earlier you start saving, the more you can benefit from compounding returns, reducing the monthly savings burden.
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