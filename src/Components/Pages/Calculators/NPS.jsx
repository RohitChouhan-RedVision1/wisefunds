import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
// import * as mathjs from 'mathjs';
// import { futureValue } from 'financial-calculations';
import { fv } from 'financial'
import List from './List'
import { Helmet } from 'react-helmet'

const LumpSum = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [age, setAge] = useState(32);
  const [yearsLeft, setYearsLeft] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(20000);
  const [interestRate, setInterestRate] = useState(12);
  const [total, setTotal] = useState(0);

  const retirementAge = 60;

  const calculateCorpus = () => {
    const yearleft = retirementAge - age;
    const rate = (interestRate / 100) / 12;
    const futureValue = monthlyContribution * ((Math.pow(1 + rate, yearsLeft * 12) - 1) / rate);
    setYearsLeft(yearleft);
    setTotal(futureValue)
  };


  return (
    <>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>NPS Calculator | Plan Your Retirement with National Pension System</title>
        <link rel="canonical" href="https://www.wisefunds.com/nps-calculator" />
        <meta name="description" content=" Use our NPS Calculator to estimate your pension corpus and monthly pension from the National Pension System. Plan your retirement with confidence." />
        <meta name="keywords" content="NPS calculator, National Pension System, retirement planning, pension calculator, NPS returns, pension plan" />
      </Helmet>
      <div className="sip">
        <div class="four" >
          <h3>NPS <em>Calculator</em></h3>
        </div >
        <div className="sip-body">
          <div className="sip-left">
            <label>Your Age:</label>
            <div className="sip-left-card">
              {/* <p>{age}&nbsp;Yr</p> */}
              <input type="number" min={18} max={60} value={age} onChange={(e) => setAge(parseInt(e.target.value))} />

              <input type="range" min={18} max={60} value={age} onChange={(e) => setAge(parseInt(e.target.value))} />

            </div>

            <label>Monthly Contribution:</label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{monthlyContribution}</p> */}
              <input type="number" min={500} max={150000} value={monthlyContribution} onChange={(e) => setMonthlyContribution(parseInt(e.target.value))} />

              <input type="range" min={500} max={150000} value={monthlyContribution} onChange={(e) => setMonthlyContribution(parseInt(e.target.value))} />
            </div>


            <label>Interest Rate (%):</label>
            <div className="sip-left-card">

              {/* <p>{interestRate}%</p> */}
              <input type="number" min={8} max={15} value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />

              <input type="range" min={8} max={15} value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />
            </div>



            <button onClick={calculateCorpus}>Calculate</button>

          </div>
          <div className="sip-right">
            <p className='main'>Total Amount <span>₹{total.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <div className="result">
              <p>Years Left for Retirement: <span>{yearsLeft}</span></p>

            </div>
          </div>
        </div>

        <div className="sip-bottom">
          <div className="sip-text">
            <h3>What Is an NPS Calculator, Why Use Wise Funds NPS Calculator, and How NPS Calculators Are Beneficial
            </h3>

            <h3>What Is an NPS Calculator?</h3>
            <p>An NPS (National Pension Scheme) calculator is an online tool that helps you estimate the pension amount you’ll receive upon retirement. By entering your contribution, expected rate of return, and the tenure of investment, the calculator provides a clear picture of your future pension income.</p>

            <h3>Introduction to National Pension Scheme (NPS)</h3>
            <p>NPS is a government-backed pension scheme that allows individuals to systematically save for retirement. It offers both tax benefits and long-term investment growth, making it a popular choice for those looking to build a retirement corpus.</p>

            <h3>How an NPS Calculator Works</h3>
            <p>The NPS calculator takes your contribution amount, expected rate of return, and investment duration to project the lump sum you will receive at retirement, as well as the monthly pension. It also factors in the percentage you wish to allocate to annuity upon retirement.</p>


            <h3>Inputs Needed for Accurate NPS Calculation</h3>

            <ul>
              <li>Monthly Contribution Amount: How much you plan to invest each month.
              </li>
              <li>Expected Rate of Return: The rate of return you expect on your NPS investments.
              </li>
              <li>Investment Tenure: The number of years you plan to invest until retirement.</li>
              <li>Annuity Allocation: The percentage of your corpus you plan to convert into an annuity.
              </li>
            </ul>

            <h3>Why an NPS Calculator Is a Must for Retirement Planning</h3>
            <ul>
              <li>Future Pension Clarity: Provides accurate estimates of your retirement income.
              </li>
              <li>Goal-Setting: Allows you to adjust your contribution based on your retirement goals.</li>
              <li>Tax Efficiency: Helps you plan contributions that maximize tax benefits.
              </li>
            </ul>

            <h3>Why Choose the Wise Funds NPS Calculator?</h3>
            <p>The Wise Funds NPS calculator offers customized results based on your individual goals, making it easier for you to plan a secure retirement. It ensures that you’re on track with your financial planning and allows for easy adjustments.
            </p>

            <h3>Tailored Retirement Planning Solutions
            </h3>
            <p>The Wise Funds NPS calculator gives you tailored results based on your desired retirement corpus. It allows for real-time adjustments to contributions, making it flexible for long-term planning.
            </p>

            <h3>Flexibility to Adjust Contributions</h3>
            <p>One of the best features of the Wise Funds NPS calculator is the flexibility to modify your inputs and see how different contributions affect your future pension. This empowers you to make informed financial decisions.
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