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
  const [numberOfYears, setNumberOfYears] = useState(0);
  const [compoundingFrequency, setCompoundingFrequency] = useState(1);
  const [result, setResult] = useState(0);

  const calculate = () => {
    const r = interestRate / 100;
    const n = compoundingFrequency;
    const t = numberOfYears;
    const A = principal * Math.pow(1 + r / n, n * t);
    setResult(A);
  };

  return (
    <>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Compound Interest Calculator | Maximize Your Investment Returns
        </title>
        <link rel="canonical" href="https://www.wisefunds.com/compound-interest-calculator" />
        <meta name="description" content="Calculate the future value of your investments with our Compound Interest Calculator. See how compounding can boost your savings over time. Try it now!" />
        <meta name="keywords" content="compound interest calculator, compounding returns, investment growth, financial planning, CI calculator, interest compounding" />
      </Helmet>
      <div className="sip">
        <div class="four" >
          <h3>Compund Interest <em>Calculator</em></h3>
        </div >
        <div className="sip-body">
          <div className="sip-left">

            <label>Principal Amount</label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{principal}</p> */}
              <input type="number" min={1000} max={10000000} value={principal} onChange={(e) => setPrincipal(parseInt(e.target.value))} />

              <input type="range" min={1000} max={10000000} value={principal} onChange={(e) => setPrincipal(parseInt(e.target.value))} />
            </div>

            <label>Interest Rate (%)</label>
            <div className="sip-left-card">
              {/* <p>{interestRate}&nbsp;%</p> */}
              <input type="number" min={1} max={50} value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />
              <input type="range" min={1} max={50} value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />
            </div>

            <label>Number of Years</label>
            <div className="sip-left-card">
              {/* <p>{numberOfYears}&nbsp;Yr</p> */}
              <input type="number" min={1} max={30} value={numberOfYears} onChange={(e) => setNumberOfYears(parseInt(e.target.value))} />

              <input type="range" min={1} max={30} value={numberOfYears} onChange={(e) => setNumberOfYears(parseInt(e.target.value))} />
            </div>

            <label>Compounding Frequency (Time  in a year)</label>
            <div className="sip-left-card">
              {/* <p>{compoundingFrequency}</p> */}
              <input type="number" min={1} max={12} value={compoundingFrequency} onChange={(e) => setCompoundingFrequency(parseInt(e.target.value))} />

              <input type="range" min={1} max={12} value={compoundingFrequency} onChange={(e) => setCompoundingFrequency(parseInt(e.target.value))} />
            </div>


            <button onClick={calculate}>Calculate</button>

          </div>
          <div className="sip-right">
            <p className='main'>Total Amount <span>₹{result.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
          </div>
        </div>

        <div className="sip-bottom">
          <div className="sip-text">
            <h3>What is a Compound Interest(CI) Calculator?
            </h3>
            <p>A Compound Interest Calculator is a tool that helps you calculate the interest on an initial principal, which grows over time as interest is added to both the original amount and the accumulated interest. Unlike simple interest, where interest is calculated solely on the principal, compound interest adds the interest earned back to the principal, resulting in exponential growth. This calculator is essential for understanding how your investments will grow over time, whether you're saving for retirement, a major purchase, or any long-term goal.
            </p>

            <h3>Why Use the Wise Funds Compound Interest Calculator?
            </h3>
            <p>The Wise Funds Compound Interest Calculator is designed to help you accurately calculate the future value of your investments by taking into account the power of compounding. Whether you're planning long-term investments or saving for specific goals, this calculator helps you understand how your money can grow over time.</p>

            <h3>Benefits of Using the Wise Funds Calculator
            </h3>

            <ol>
              <li><b>Growth Projection:</b> See how your investments can grow over time by adding the interest earned back to the principal, leading to potentially higher returns.
              </li>
              <li><b>Flexible Inputs:</b>Adjust variables like the interest rate, compounding frequency, and investment duration to see how different scenarios can impact your investment growth.
              </li>
              <li><b>Long-Term Planning:</b>Use the calculator to plan for future financial goals, such as retirement, education, or a major purchase, by visualizing the growth of your savings over time.
              </li>
              <li><b>Accuracy:</b>The calculator uses precise formulas to provide accurate projections, helping you make informed financial decisions.
              </li>
              <li><b>Ease of Use:</b>With a user-friendly interface, the Wise Funds Compound Interest Calculator simplifies complex calculations, making it accessible to everyone.
              </li>
            </ol>


            <h3>Frequently Asked Questions (FAQ)
            </h3>

            <h5>1.  How does compound interest differ from simple interest?
            </h5>
            <p>Compound interest is calculated on both the initial principal and the accumulated interest, while simple interest is calculated only on the principal amount.
            </p>
            <h5>2. What is the compounding frequency?
            </h5>
            <p>Compounding frequency refers to how often the interest is calculated and added to the principal. Common frequencies include annually, semi-annually, quarterly, and monthly.
            </p>

            <h5>3. Can this calculator be used for loans as well as investments?
            </h5>
            <p>Yes, the Wise Funds Compound Interest Calculator can be used to calculate interest for both loans and investments.
            </p>

            <h5>4. How does the interest rate affect the compound interest?
            </h5>
            <p> A higher interest rate will result in greater compound interest, leading to faster growth of your investment.
            </p>

            <h5>5. Can I use this calculator for recurring investments?
            </h5>
            <p>Yes, the calculator can account for additional contributions to your principal, helping you plan for regular investments.
            </p>
          </div>
          <List />

        </div >
      </div>
      <Footer />
    </>
  )
}

export default LumpSum