import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import List from './List'
import { Helmet } from 'react-helmet'

const LumpSum = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [futureValue, setFutureValue] = useState(0);

  const calculate = () => {
    const rate = interestRate / 100; // Convert interest rate to decimal
    const futureValue = principal * Math.pow(1 + rate, timePeriod);
    setFutureValue(futureValue);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Lump Sum Calculator | Calculate Returns on One-Time Investments</title>
        <link rel="canonical" href="https://www.wisefunds.com/lumpsum-calculator" />
        <meta name="description" content="Estimate the returns on your one-time investments with our Lump Sum Calculator. Plan your investments and achieve your financial goals with ease." />
        <meta name="keywords" content="lump sum calculator, one-time investment, mutual fund returns, investment planning, financial planning, lump sum returns" />
      </Helmet>
      <Header />
      <div className="sip">
        <div class="four" >
          <h3>Lump Sum <em>Calculator</em></h3>
        </div >
        <div className="sip-body">
          <div className="sip-left">
            <label>Total Investment </label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{principal}</p> */}
              <input type="number" value={principal} min={500} max={10000000} onChange={(e) => setPrincipal(parseInt(e.target.value))} />

              <input type="range" value={principal} min={500} max={10000000} onChange={(e) => setPrincipal(parseInt(e.target.value))} />
            </div>
            <label>Interest Rate (%):</label>
            <div className="sip-left-card">
              {/* <p>{interestRate}&nbsp;%</p> */}
              <input type="number" min={1} max={30} value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />

              <input type="range" min={1} max={30} value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />
            </div>

            <label>Time Period (years):</label>
            <div className="sip-left-card">
              {/* <p>{timePeriod}&nbsp;Yr</p> */}
              <input type="number" min={1} max={40} value={timePeriod} onChange={(e) => setTimePeriod(parseInt(e.target.value))} />

              <input type="range" min={1} max={40} value={timePeriod} onChange={(e) => setTimePeriod(parseInt(e.target.value))} />
            </div>

            <button onClick={calculate}>Calculate</button>

          </div>
          <div className="sip-right">
            <p className='main'>Total Value <span>₹{futureValue.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
          </div>
        </div>

        <div className="sip-bottom">
          <div className="sip-text">
            <h3>Lump Sum Calculator: Your Investment Planning Partner
            </h3>
            <p>If you're aiming to achieve a financial goal—whether it’s buying a home, funding your child’s education, or building a comfortable retirement fund—knowing how much you need to invest upfront is crucial. That’s where a Lump Sum Calculator comes in handy.
            </p>

            <h3>What is a Lump Sum Calculator?
            </h3>
            <p>A Lump Sum Calculator is a straightforward tool designed to help you figure out how much money you need to invest today to reach a specific financial goal in the future. All you need to do is input your target amount, the expected rate of return, and the time frame for your investment. The calculator then gives you an estimate of the lump sum amount required to achieve your goal.
            </p>

            <h3>Remember, It’s Just an Estimate
            </h3>
            <p>While a Lump Sum Calculator provides a helpful estimate, it’s important to keep in mind that it’s just that—an estimate. The actual returns on your investment can vary due to factors like market fluctuations, changes in interest rates, and economic conditions. The calculator gives you a good starting point, but it’s not a crystal ball for future performance.
            </p>


            <h3>Why Use a Lump Sum Calculator?
            </h3>

            <ul>
              <li>Targeted Planning: It helps you plan your investments with a clear goal in mind, showing you exactly how much you need to invest to hit your target.
              </li>
              <li>Informed Choices: By offering an estimate, the calculator allows you to make informed decisions, ensuring that your investment strategy aligns with your financial aspirations.
              </li>
              <li>Simplifies Calculations: No need to stress over complex math—the calculator does the heavy lifting for you, giving you a quick and easy estimate.
              </li>
              <li>Financial Clarity: It offers a clear picture of what’s needed to achieve your goals, helping you manage your finances more effectively and confidently.
              </li>
            </ul>

            <p>Using our Lump Sum Calculator takes the guesswork out of investment planning, allowing you to focus on making smart, informed decisions to secure your financial future.
            </p>
          </div>
          <List />

        </div>
      </div>
      <Footer />
    </>
  )
}

export default LumpSum