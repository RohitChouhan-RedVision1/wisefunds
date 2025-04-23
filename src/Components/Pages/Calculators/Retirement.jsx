import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import { Helmet } from 'react-helmet'
import List from './List'

const RetirementCalculator = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [lifeExpectancy, setLifeExpectancy] = useState(80);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [legacyCorpus, setLegacyCorpus] = useState(10000000);
  const [inflationRate, setInflationRate] = useState(6);
  const [realRateOfReturn, setRealRateOfReturn] = useState(0);
  const [expectedRateOfReturn, setExpectedRateOfReturn] = useState(12);

  const calculateRetirement = () => {
    const yearsLeftForRetirement = retirementAge - currentAge;
    const yearsLeftAfterRetirement = lifeExpectancy - retirementAge;

    // Calculate future monthly expenses at retirement
    const futureMonthlyExpenses = monthlyExpense * Math.pow(1 + inflationRate / 100, yearsLeftForRetirement);

    // Calculate corpus required at retirement
    const corpusRequiredAtRetirement = futureMonthlyExpenses * (12 * yearsLeftAfterRetirement) + legacyCorpus;

    // Calculate lumpsum required
    const lumpsumRequired = corpusRequiredAtRetirement / Math.pow(1 + expectedRateOfReturn / 100, yearsLeftForRetirement);

    // Calculate SIP required
    const monthlyRate = (expectedRateOfReturn / 100) / 12;
    const months = yearsLeftForRetirement * 12;

    // const sipRequired = lumpsumRequired * (expectedRateOfReturn / 100) / (Math.pow(1 + expectedRateOfReturn / 100, yearsLeftForRetirement) - 1);
    const sipRequired = corpusRequiredAtRetirement / ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    return {
      lumpsumRequired,
      sipRequired,
      corpusRequiredAtRetirement,
      futureMonthlyExpenses,
    };
  };

  const { lumpsumRequired, sipRequired, corpusRequiredAtRetirement, futureMonthlyExpenses } = calculateRetirement();

  return (
    <>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Retirement Planning Calculator | Secure Your Future with Accurate Calculations
        </title>
        <link rel="canonical" href="https://www.wisefunds.com/retirement-calculator" />
        <meta name="description" content=" Use our Retirement Planning Calculator to estimate the savings you need for a comfortable retirement. Plan your future with confidence and ease." />
        <meta name="keywords" content="retirement planning calculator, retirement savings, pension planning, retirement corpus, financial planning, secure retirement" />
      </Helmet>
      <div className="sip">
        <div class="four" >
          <h3>Retirement <em>Calculator</em></h3>
        </div >
        <div className="sip-body">
          <div className="sip-left">
            <label htmlFor="">Current Age</label>
            <div className="sip-left-card">
              {/* <p>{currentAge}Yr</p> */}
              <input type="number" min={18} max={60} value={currentAge} onChange={(e) => setCurrentAge(parseInt(e.target.value))} />

              <input type="range" min={18} max={60} value={currentAge} onChange={(e) => setCurrentAge(parseInt(e.target.value))} />
            </div>


            <label htmlFor="">Retirement age </label>
            <div className="sip-left-card">
              {/* <p>{retirementAge}Yr</p> */}
              <input type="number" min={30} max={60} value={retirementAge} onChange={(e) => setRetirementAge(parseInt(e.target.value))} />

              <input type="range" min={30} max={60} value={retirementAge} onChange={(e) => setRetirementAge(parseInt(e.target.value))} />
            </div>

            <label htmlFor="">Life expectency</label>
            <div className="sip-left-card">
              {/* <p>{lifeExpectancy}Yr</p> */}
              <input type="number" min={18} max={100} value={lifeExpectancy} onChange={(e) => setLifeExpectancy(parseInt(e.target.value))} />

              <input type="range" min={18} max={100} value={lifeExpectancy} onChange={(e) => setLifeExpectancy(parseInt(e.target.value))} />
            </div>

            <label htmlFor="">Monthly expense as of today</label>
            <div className="sip-left-card">
              {/* <p>{monthlyExpense}</p> */}
              <input type="number" min={1000} max={100000000} value={monthlyExpense} onChange={(e) => setMonthlyExpense(parseInt(e.target.value))} />

              <input type="range" min={1000} max={100000000} value={monthlyExpense} onChange={(e) => setMonthlyExpense(parseInt(e.target.value))} />
            </div>

            <label htmlFor="">Legacy Corpus for future generation</label>
            <div className="sip-left-card">
              {/* <p>{legacyCorpus}</p> */}
              <input type="number" value={legacyCorpus} onChange={(e) => setLegacyCorpus(parseInt(e.target.value))} />

              <input type="range" value={legacyCorpus} onChange={(e) => setLegacyCorpus(parseInt(e.target.value))} />
            </div>

            <label htmlFor="">Inflation</label>
            <div className="sip-left-card">
              {/* <p>{inflationRate}&nbsp;%</p> */}
              <input type="number" value={inflationRate} onChange={(e) => setInflationRate(parseFloat(e.target.value))} />

              <input type="range" value={inflationRate} onChange={(e) => setInflationRate(parseFloat(e.target.value))} />
            </div>

            <label htmlFor="">Real Rate of Return</label>
            <div className="sip-left-card">
              {/* <p>{realRateOfReturn}&nbsp;%</p> */}
              <input type="number" value={realRateOfReturn} onChange={(e) => setRealRateOfReturn(parseFloat(e.target.value))} />

              <input type="range" value={realRateOfReturn} onChange={(e) => setRealRateOfReturn(parseFloat(e.target.value))} />
            </div>

            <label htmlFor="">expected rate of return</label>
            <div className="sip-left-card">
              {/* <p>{expectedRateOfReturn}&nbsp;%</p> */}
              <input type="number" value={expectedRateOfReturn} onChange={(e) => setExpectedRateOfReturn(parseFloat(e.target.value))} />

              <input type="range" value={expectedRateOfReturn} onChange={(e) => setExpectedRateOfReturn(parseFloat(e.target.value))} />
            </div>

            <button onClick={calculateRetirement}>Calculate</button>

          </div>
          <div className="sip-right">
            <p className='main'>Corpus Required at Retirement <span>₹ {corpusRequiredAtRetirement.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>Monthly Expenses at Retirement <span>₹ {futureMonthlyExpenses.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>SIP Required <span>₹ {sipRequired.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>Lumpsum Required <span>₹ {lumpsumRequired.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
          </div>
        </div>

        <div className="sip-bottom">
          <div className="sip-text">
            <h3>What Is a Retirement Calculator, Why Use Wise Funds Retirement Calculator, and How Retirement Calculators Are Beneficial</h3>

            <h3>What Is a Retirement Calculator?</h3>
            <p>A retirement calculator helps you estimate how much money you’ll need to save for a comfortable retirement. By inputting your current savings, retirement goals, and expected expenses, the calculator provides an estimate of how much you need to invest now to achieve financial security in retirement. </p>

            <h3>Understanding Retirement Planning
            </h3>
            <p>Retirement planning involves determining how much money you’ll need to maintain your lifestyle post-retirement. A retirement calculator simplifies this process by factoring in inflation, your expected lifespan, and retirement goals.</p>

            <h3>Why You Need a Retirement Calculator</h3>
            <p>Without a clear retirement plan, you risk running out of money in your later years. A retirement calculator helps you stay on track by providing a detailed savings plan based on your future needs and current savings rate.</p>

            <h3>Key Inputs for Retirement Calculation</h3>

            <ul>
              <li>Current Savings: Your existing retirement corpus.</li>
              <li>Monthly Investment: How much you plan to save each month.</li>
              <li>Expected Rate of Return: The percentage return on your investments.</li>
              <li>Retirement Age: The age at which you plan to retire.</li>
              <li>Post-Retirement Expenses: Expected monthly expenses post-retirement.</li>
            </ul>

            <h3>Estimating Post-Retirement Expenses</h3>
            <p>One of the most crucial factors in retirement planning is estimating your future expenses. The retirement calculator helps you project your monthly expenses, factoring in inflation and other lifestyle changes.</p>

            <h3>Why Use a Wise Funds Retirement Calculator?</h3>
            <p>The Wise Funds retirement calculator provides detailed insights into your retirement savings needs. It’s designed to give you a clear understanding of how much you should save now to secure your future.</p>

            <h3>Personalized Retirement Solutions</h3>
            <p>The Wise Funds retirement calculator offers personalized results, allowing you to adjust your savings and retirement goals in real-time. This ensures that you’re always on track with your financial plan.</p>

            <h3>Accurate Future Expense Projections</h3>
            <p>One of the key benefits of the Wise Funds retirement calculator is its ability to accurately project future expenses, taking inflation into account. This helps you plan better and avoid financial shortfalls in retirement.</p>
          </div>
          <List />

        </div>

      </div>
      <Footer />
    </>
  )
}

export default RetirementCalculator