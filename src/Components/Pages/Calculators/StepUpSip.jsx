import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import { Helmet } from 'react-helmet'
import { pmt } from 'financial';
import List from './List'
var Finance = require('financejs');
var finance = new Finance();

const ChildEducationPlanning = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [yearsLeft, setYearsLeft] = useState(20);
  const [expectedRate, setExpectedRate] = useState(12);
  const [amountRequired, setAmountRequired] = useState(56776691);
  const [stepUp, setStepUp] = useState(10);
  const [corpus, setCorpusRequired] = useState(0);
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);

  const calculate = () => {
    const expectedRateOfReturn = expectedRate / 100
    const stepupRate = stepUp / 100
    const ratePerPeriod = expectedRateOfReturn / 12; // Monthly rate
    const numberOfPeriods = yearsLeft * 12; // Total months

    const corpus = amountRequired * (expectedRateOfReturn - stepupRate) / (Math.pow((1 + expectedRateOfReturn), yearsLeft) - Math.pow((1 + stepupRate), yearsLeft));
    setCorpusRequired(corpus);
    // const monthlyInvestment = (corpus * ratePerPeriod) / (1 - Math.pow(1 + ratePerPeriod, -12));

    const monthlyInvestment = pmt(ratePerPeriod, 12, 0, -corpus);
    //  pmt =  (pv - fv) * (i) / (1 - (Math.pow(1 + i, -n)))
    // const monthlyInvestment = finance.PMT(ratePerPeriod, 12, -corpus)
    setMonthlyInvestment(monthlyInvestment);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Step-Up SIP Calculator | Boost Your SIP Investments
        </title>
        <link rel="canonical" href="https://www.wisefunds.com/step-up-sip-calculator" />
        <meta name="description" content="Plan your Step-Up SIP investments with our calculator. See how increasing your SIP amount regularly can help you achieve your financial goals faster. Start planning today!" />
        <meta name="keywords" content="Step-Up SIP calculator, SIP investments, mutual funds SIP, systematic investment plan, SIP returns, financial planning" />
      </Helmet>
      <Header />
      <div className="sip">
        <div class="four" >
          <h3>Step Up SIP <em>Calculator</em></h3>
        </div >
        <div className="sip-body">
          <div className="sip-left">
            <label>Amount Required:</label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{amountRequired}</p> */}
              <input type="number" min={500} max={1000000} value={amountRequired} onChange={(e) => setAmountRequired(parseFloat(e.target.value))} />

              <input type="range" min={500} max={1000000} value={amountRequired} onChange={(e) => setAmountRequired(parseFloat(e.target.value))} />
            </div>

            <label>Years Left:</label>
            <div className="sip-left-card">
              {/* <p>{yearsLeft}&nbsp;Yr</p> */}
              <input type="number" min={1} max={40} value={yearsLeft} onChange={(e) => setYearsLeft(parseFloat(e.target.value))} />

              <input type="range" min={1} max={40} value={yearsLeft} onChange={(e) => setYearsLeft(parseFloat(e.target.value))} />
            </div>

            <label>Expected Rate of Return:</label>
            <div className="sip-left-card">
              {/* <p>{expectedRate}&nbsp;%</p> */}
              <input type="number" min={1} max={30} value={expectedRate} onChange={(e) => setExpectedRate(parseFloat(e.target.value))} />

              <input type="range" min={1} max={30} value={expectedRate} onChange={(e) => setExpectedRate(parseFloat(e.target.value))} />
            </div>

            <label>Step Up:</label>
            <div className="sip-left-card">
              {/* <p>{stepUp}&nbsp;%</p> */}
              <input type="number" min={1} max={50} value={stepUp} onChange={(e) => setStepUp(parseFloat(e.target.value))} />

              <input type="range" min={1} max={50} value={stepUp} onChange={(e) => setStepUp(parseFloat(e.target.value))} />
            </div>

            {/* <label>Corpus Required:</label>
            <input type="number" value={corpusRequired} onChange={(e) => setCorpusRequired(parseFloat(e.target.value))} /> */}

            <button onClick={calculate}>Calculate</button>

          </div>
          <div className="sip-right">
            <p className='main'>Corpus Required<span>₹ {corpus.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>Additional Monthly Investment <span>₹ {monthlyInvestment.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
          </div>
        </div>

        <div className="sip-bottom">
          <div className="sip-text">
            <h3>What is a Step-Up SIP Calculator?
            </h3>
            <p>A Step-Up SIP Calculator is a tool that helps you calculate the potential returns on a Systematic Investment Plan (SIP) where the investment amount increases periodically. This strategy allows you to start with a smaller investment and gradually increase it over time, maximizing your returns as your income grows. The calculator shows how your investments will grow if you increase your SIP amount regularly, making it easier to achieve your financial goals.
            </p>

            <h3>Why Use the Wise Funds Step-Up SIP Calculator?
            </h3>
            <p>The Wise Funds Step-Up SIP Calculator is designed to help you plan your SIP investments more effectively by showing you how gradually increasing your contributions can lead to significant growth over time. It’s a great tool for those who want to align their investments with their growing income.
            </p>

            <h3>Benefits of Using the Wise Funds Calculator
            </h3>

            <ol>
              <li><b>Flexibility: </b>Start small and gradually increase your investment amount, making it easier to manage your finances while still investing for the future.
              </li>
              <li><b>Enhanced Returns: </b>By increasing your SIP contributions over time, you can take advantage of the power of compounding, leading to higher returns.
              </li>
              <li><b>Customizable Inputs: </b> Adjust the step-up percentage, investment duration, and expected return rate to see how different strategies can impact your investment growth.
              </li>
              <li><b>Financial Discipline: </b>The Step-Up SIP Calculator encourages regular investment increases, helping you stay committed to your financial goals.
              </li>
              <li><b>Ease of Planning: </b>Use the calculator to create a personalized investment plan that grows with your income, making it easier to achieve long-term financial goals.
              </li>
            </ol>


            <h3>Frequently Asked Questions (FAQ)
            </h3>

            <h5>1.What is a Step-Up SIP?
            </h5>
            <p>A Step-Up SIP is a type of SIP where you increase the investment amount at regular intervals, typically annually, to boost your returns over time.
            </p>
            <h5>2. How does a Step-Up SIP differ from a regular SIP?
            </h5>
            <p>In a regular SIP, the investment amount remains constant throughout the tenure. In a Step-Up SIP, the investment amount increases periodically, allowing for greater potential returns.</p>

            <h5>3. Can I decide how much to increase my SIP amount?
            </h5>
            <p>Yes, you can choose the percentage by which you want to increase your SIP amount, depending on your financial goals and income growth.
            </p>

            <h5>4. Is there a minimum increase amount for a Step-Up SIP?
            </h5>
            <p>The minimum increase amount varies depending on the mutual fund scheme, but it’s typically a small percentage of your current SIP amount.
            </p>

            <h5>5. How does a Step-Up SIP benefit long-term investors?
            </h5>
            <p>A Step-Up SIP allows long-term investors to increase their investment contributions as their income grows, leading to higher returns over time due to the power of compounding.
            </p>
          </div>
          <List />

        </div >
      </div>
      <Footer />
    </>
  )
}

export default ChildEducationPlanning