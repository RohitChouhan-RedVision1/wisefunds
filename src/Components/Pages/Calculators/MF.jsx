import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import List from './List'
import { Helmet } from 'react-helmet'
import { fv } from 'financial'

const MF = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [principal, setPrincipal] = useState(5000);
  const [lumpsumInvestment, setLumpsumInvestment] = useState(500000)
  const [monthlyInterestRate, setMonthlyInterestRate] = useState(13)
  const [lumpsumInterestRate, setLumpsumInterestRate] = useState(8)
  const [timePeriod, setTimePeriod] = useState(15);
  const [futureValue, setFutureValue] = useState(0);

  const calculate = () => {
    const monthlyInterest = (monthlyInterestRate / 100) / 12;
    const lumpsumInterest = lumpsumInterestRate / 100;
    const tenure = timePeriod * 12;
    const futureValue1 = fv(monthlyInterest, tenure, -principal, 0);
    const futureValue2 = fv(lumpsumInterest, timePeriod, -lumpsumInvestment, 0);

    // const futureValue1 = principal * Math.pow(1 + monthlyInterest, tenure);
    // const futureValue2 = lumpsumInvestment * Math.pow(1 + lumpsumInterest, timePeriod);
    const result = futureValue1 + futureValue2;
    setFutureValue(result);
    console.log(futureValue1);
    console.log(futureValue2);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mutual Fund Calculator | Estimate Your Mutual Fund Returns</title>
        <link rel="canonical" href="https://www.wisefunds.com/mf-calculator" />
        <meta name="description" content="Calculate the potential returns on your mutual fund investments with our Mutual Fund Calculator. Plan your investment strategy with accurate predictions." />
        <meta name="keywords" content="mutual fund calculator, MF returns, investment calculator, mutual funds, financial planning, mutual fund performance" />
      </Helmet>

      <Header />
      <div className="sip">
        <div class="four" >
          <h3>MF <em>Calculator</em></h3>
        </div >
        <div className="sip-body">
          <div className="sip-left">
            <label>Monthly Investment </label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{principal}</p> */}
              <input type="number" min={500} max={10000000} value={principal} onChange={(e) => setPrincipal(parseInt(e.target.value))} />

              <input type="range" min={500} max={10000000} value={principal} onChange={(e) => setPrincipal(parseInt(e.target.value))} />
            </div>

            <label>Lumpsump Investment </label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{principal}</p> */}
              <input type="number" min={500} max={10000000} value={lumpsumInvestment} onChange={(e) => setLumpsumInvestment(parseInt(e.target.value))} />

              <input type="range" min={500} max={10000000} value={lumpsumInvestment} onChange={(e) => setLumpsumInvestment(parseInt(e.target.value))} />
            </div>


            <label>Expected Rate of Return for Monthly Investment </label>
            <div className="sip-left-card">
              {/* <p>{interestRate}&nbsp;%</p> */}
              <input type="number" min={1} max={50} value={monthlyInterestRate} onChange={(e) => setMonthlyInterestRate(parseFloat(e.target.value))} />

              <input type="range" min={1} max={50} value={monthlyInterestRate} onChange={(e) => setMonthlyInterestRate(parseFloat(e.target.value))} />
            </div>

            <label>Expected Rate of Return for Lumpsump Investment </label>
            <div className="sip-left-card">
              {/* <p>{interestRate}&nbsp;%</p> */}
              <input type="number" min={1} max={50} value={lumpsumInterestRate} onChange={(e) => setLumpsumInterestRate(parseFloat(e.target.value))} />

              <input type="range" min={1} max={50} value={lumpsumInterestRate} onChange={(e) => setLumpsumInterestRate(parseFloat(e.target.value))} />
            </div>

            <label>Tenure</label>
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
            <h3>What Is a Mutual Fund Calculator (SIP and Lump Sum Combined), Why Use Wise Funds MF Calculator, and How It Benefits You</h3>

            <h3>What Is a Mutual Fund Calculator for SIP and Lump Sum Combined?</h3>
            <p>A Mutual Fund calculator that combines SIP (Systematic Investment Plan) and Lump Sum helps you calculate the future value of your investments when you're contributing both regular SIP instalments and a one-time lump sum amount. This type of calculator is ideal for investors who are investing through a mix of both methods and want to get a holistic picture of how their wealth will grow over time.</p>

            <h3>Why Combine SIP and Lump Sum?</h3>
            <p>Combining both SIP and lump sum in your investment strategy allows you to take advantage of market movements with the lump sum amount while continuing to build wealth steadily with SIP contributions. This dual approach gives you both the benefits of disciplined investing (through SIP) and the potential for higher growth from a lump sum, especially during market lows.</p>

            <h3>How a Combined SIP and Lump Sum Mutual Fund Calculator Works</h3>
            <p>The combined Mutual Fund calculator factors in:
            </p>

            <ol>
              <li>SIP Contribution Amount: The fixed amount you invest regularly, usually monthly.
              </li>
              <li>Lump Sum Amount: A one-time investment made upfront.
              </li>
              <li>Investment Tenure: The duration for which you plan to stay invested.</li>
              <li>Expected Rate of Return: The rate at which you expect the invested amount to grow over time.</li>
            </ol>

            <p>By inputting these details, the calculator estimates the future value of your combined investments, considering both the monthly contributions and the lump sum, along with compound interest.</p>

            <h3>Benefits of Using a Combined SIP and Lump Sum Mutual Fund Calculator</h3>

            <ul>
              <li>Accurate Projections: Provides a clear estimate of your total returns by combining both methods of investing.</li>
              <li>Flexible Financial Planning: Allows you to visualize how your wealth will grow with both regular SIPs and a lump sum investment.</li>
              <li>Goal-Oriented: Helps in goal-based financial planning by giving you a detailed view of how much you’ll accumulate for specific objectives like retirement, education, or buying a house.</li>
            </ul>

            <h3>Key Features of a Combined Mutual Fund Calculator</h3>
            <ul>
              <li>Dual Investment Tracking: It calculates both SIP and lump sum contributions together for a more comprehensive investment projection.</li>
              <li>Compounding Effect: Factors in the power of compounding to show how both SIP and lump sum contributions grow over time.</li>
              <li>Scenario Comparison: Allows you to compare different combinations of SIP amounts and lump sum contributions to see which strategy works best for you.</li>
            </ul>

            <h3>Why Use the Wise Funds Mutual Fund Calculator?</h3>
            <p>The Wise Funds Mutual Fund Calculator makes it easy for you to calculate the future value of your investments when using both SIP and lump sum strategies. It’s designed to provide accurate, customized results based on your financial goals, investment amount, and time horizon.</p>

            <h3>Why Combining SIP and Lump Sum Investments Makes Sense</h3>
            <ul>
              <li>Market Timing & Rupee Cost Averaging: Lump sum investments allow you to capture market lows, while SIP investments use rupee cost averaging to mitigate the risk of market volatility.</li>
              <li>Maximizing Growth: Lump sum investments benefit from early compounding, while SIPs ensure you continue to build wealth steadily over time.</li>
              <li>Maximizing Growth: Lump sum investments benefit from early compounding, while SIPs ensure you continue to build wealth steadily over time.</li>
            </ul>

            <h3>How to Use the Wise Funds MF Calculator for SIP and Lump Sum Together</h3>
            <ol>
              <li>Enter SIP Details: Start by inputting the monthly SIP contribution you plan to make.</li>
              <li>Add Lump Sum Investment: Then, add the one-time lump sum amount you’ve invested or plan to invest.</li>
              <li>Select Tenure: Define the total time period for which you’ll stay invested.
              </li>
              <li>Expected Rate of Return: Enter an expected annual rate of return based on your investment choices or the market performance.</li>
              <li>Review Your Results: The calculator will show the future value of your investments, combining both SIP and lump sum contributions.</li>
            </ol>

            <h3>How Combining SIP and Lump Sum Helps You Grow Your Wealth</h3>
            <p>By combining the two strategies, the lump sum benefits from compounding over a longer period, while SIP investments allow you to continuously invest and grow wealth. The regular contributions ensure that you’re investing even during market downturns, which reduces the impact of volatility.</p>

            <p>For instance, if you invest ₹1,00,000 as a lump sum upfront and ₹5,000 monthly through SIP for 10 years, the calculator will estimate how much wealth you’ll accumulate by combining both investments. This holistic approach gives you a better understanding of your total returns and helps you adjust your financial strategy accordingly.</p>

            <h3>Conclusion</h3>
            <p>Using a combined SIP and lump sum Mutual Fund calculator from Wise Funds provides a complete overview of how your investments will grow. It empowers you to make informed decisions by giving you accurate projections, helping you align your investments with your financial goals. Whether you’re saving for retirement or a major purchase, this calculator is an essential tool for any investor looking to balance SIPs with lump sum investments.</p>

          </div>
          <List />

        </div>
      </div>
      <Footer />
    </>
  )
}

export default MF