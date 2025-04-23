import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import { Helmet } from 'react-helmet'
import List from './List'

const RDCalculator = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [sipAmount, setSipAmount] = useState(2000);
    const [investmentPeriod, setInvestmentPeriod] = useState(1);
    const [expectedReturn, setExpectedReturn] = useState(10);
    const [maturityAmount, setMaturityAmount] = useState(0);

    const calculate = () => {
        const totalInvestment = sipAmount * 12 * investmentPeriod;
        const r = expectedReturn / 100 / 12;
        const n = 12;
        const t = investmentPeriod;
        const futureValue = sipAmount * (((Math.pow(1 + r, n * t) - 1) / r));
        setMaturityAmount(futureValue);
    };



    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>RD Calculator | Plan Your Recurring Deposits for Steady Savings</title>
                <link rel="canonical" href="https://www.wisefunds.com/rd-calculator" />
                <meta name="description" content="Calculate the maturity amount of your recurring deposits with our RD Calculator. Plan your monthly savings and achieve your financial goals." />
                <meta name="keywords" content="RD calculator, recurring deposit, RD maturity, savings plan, monthly savings, steady returns" />
            </Helmet>
            <Header />
            <div className="sip">
                <div class="four" >
                    <h3>RD <em>Calculator</em></h3>
                </div >
                <div className="sip-body">
                    <div className="sip-left">
                        <label >Monthly Investment </label>
                        <div className="sip-left-card">
                            {/* <p>₹&nbsp;{sipAmount}</p> */}
                            <input type="number" min={500} max={1000000} value={sipAmount} onChange={(e) => setSipAmount(parseInt(e.target.value))} />

                            <input type="range" min={500} max={1000000} value={sipAmount} onChange={(e) => setSipAmount(parseInt(e.target.value))} />
                        </div>


                        <label >Rate Of Interest</label>
                        <div className="sip-left-card">
                            {/* <p>{expectedReturn}&nbsp;%</p> */}
                            <input type="number" min={1} max={15} value={expectedReturn} onChange={(e) => setExpectedReturn(parseFloat(e.target.value))} />

                            <input type="range" min={1} max={15} value={expectedReturn} onChange={(e) => setExpectedReturn(parseFloat(e.target.value))} />
                        </div>

                        <label >Duration (Years)</label>
                        <div className="sip-left-card">
                            {/* <p>{investmentPeriod}&nbsp;Yr</p> */}
                            <input type="number" min={1} max={10} value={investmentPeriod} onChange={(e) => setInvestmentPeriod(parseInt(e.target.value))} />

                            <input type="range" min={1} max={10} value={investmentPeriod} onChange={(e) => setInvestmentPeriod(parseInt(e.target.value))} />
                        </div>

                        <button onClick={calculate}>Calculate</button>

                    </div>
                    <div className="sip-right">
                        <p className='main'>Maturity Amount <span>₹{maturityAmount.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
                    </div>
                </div>

                <div className="sip-bottom">
                    <div className="sip-text">
                        <h3>What Is an RD Calculator, Why Use Wise Funds RD Calculator, and How RD Calculators Are Beneficial
                        </h3>

                        <h3>What Is an RD Calculator?</h3>
                        <p>An RD (Recurring Deposit) calculator is a financial tool used to calculate the maturity value of recurring deposits. By simply entering the monthly deposit amount, interest rate, and tenure, you can instantly know how much your investment will grow over time. This saves time and eliminates the guesswork involved in manually calculating returns.
                        </p>

                        <h3>Understanding Recurring Deposits (RD)</h3>
                        <p>A Recurring Deposit is a systematic investment scheme where you deposit a fixed amount every month. It’s a low-risk, steady option for savers who want to grow their wealth over time. With RDs, the interest rate is fixed for the tenure, and you receive the maturity amount with the accumulated interest at the end of the term.
                        </p>

                        <h3>How an RD Calculator Simplifies Savings
                        </h3>
                        <p>The RD calculator takes the complexity out of financial planning by showing you the maturity value in seconds. It factors in monthly deposits, the interest rate, and tenure, making it easier for you to plan your savings and future financial goals like vacations, education, or home purchases.
                        </p>


                        <h3>Key Inputs Required for RD Calculation</h3>
                        <p>To use the RD calculator, you need to provide:
                        </p>
                        <ul>
                            <li>Monthly Deposit Amount: The fixed amount you plan to deposit each month.
                            </li>
                            <li>Rate of Interest: The interest rate offered by the bank.
                            </li>
                            <li>Tenure: The investment duration in months.
                            </li>
                            <li>Compounding Frequency: How often the interest is compounded.
                            </li>
                        </ul>

                        <h3>Benefits of Using an RD Calculator</h3>
                        <ul>
                            <li>Accurate Projections: It gives you an exact estimate of your maturity amount.
                            </li>
                            <li>Time-Saving: In a few clicks, you have a clear picture of your savings.
                            </li>
                            <li>Financial Planning: Helps in goal-oriented savings by allowing you to adjust the monthly deposit or tenure.
                            </li>
                        </ul>

                        <h3>Why Use a Wise Funds RD Calculator?</h3>
                        <p>The Wise Funds RD calculator offers enhanced features that make planning your recurring deposits easier. It’s user-friendly and provides accurate results tailored to your individual savings goals.</p>

                        <h3>Accurate Calculation of Maturity Amount
                        </h3>
                        <p>With the Wise Funds RD calculator, you can trust that the maturity amount is calculated precisely, considering all necessary factors. This helps you make informed financial decisions without worrying about errors.
                        </p>

                        <h3>Ease of Use and Time Efficiency</h3>
                        <p>The Wise Funds RD calculator is designed for simplicity. You can quickly input your details and get results without hassle, saving you time and effort.</p>
                    </div>
                    <List />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default RDCalculator