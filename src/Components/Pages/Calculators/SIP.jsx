import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import List from './List'
import { Helmet } from 'react-helmet'


const SIP = () => {

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
                <title>SIP Calculator | Plan Your Mutual Fund SIP Investments</title>
                <link rel="canonical" href="https://www.wisefunds.com/sip-calculator" />
                <meta name="description" content="Use Wise Funds SIP Calculator to estimate the future value of your mutual fund investments. Plan your SIPs and achieve your financial goals with accurate calculations." />
                <meta name="keywords" content="SIP calculator, mutual fund SIP, systematic investment plan, SIP returns, financial planning, SIP investment, Financial Calculator, What is SIP?, Start SIP" />
            </Helmet>
            <Header />
            <div className="sip">
                <div class="four" >
                    <h3>SIP <em>Calculator</em></h3>
                </div >
                <div className="sip-body">
                    <div className="sip-left">
                        <label htmlFor="">Monthly Investment </label>
                        <div className="sip-left-card">
                            {/* <p>₹&nbsp;{sipAmount}</p> */}
                            <input type="number" max={1000000} min={10} value={sipAmount} onChange={(e) => setSipAmount(parseInt(e.target.value))} />

                            <input type="range" max={1000000} min={10} value={sipAmount} onChange={(e) => setSipAmount(parseInt(e.target.value))} />
                        </div>

                        <label htmlFor="">Rate Of Interest</label>
                        <div className="sip-left-card">
                            {/* <p>{expectedReturn}&nbsp; %</p> */}
                            <input type="number" min={1} max={30} value={expectedReturn} onChange={(e) => setExpectedReturn(parseInt(e.target.value))} />

                            <input type="range" min={1} max={30} value={expectedReturn} onChange={(e) => setExpectedReturn(parseInt(e.target.value))} />
                        </div>

                        <label htmlFor="">Duration (Years)</label>
                        <div className="sip-left-card">
                            {/* <p>{investmentPeriod} &nbsp; Yr</p> */}
                            <input type="number" min={1} max={40} value={investmentPeriod} onChange={(e) => setInvestmentPeriod(parseInt(e.target.value))} />

                            <input type="range" min={1} max={40} value={investmentPeriod} onChange={(e) => setInvestmentPeriod(parseInt(e.target.value))} />
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
                        <h3>SIP Calculator (Systematic Investment Plan): A Beginner’s Perspective</h3>
                        <p> If you’re just stepping into the world of investments, it’s easy to mix up SIPs with mutual funds. However, SIPs are actually just one way to invest in mutual funds, the other being a lump sum investment. With a SIP, you commit to investing a fixed amount of money at regular intervals—whether weekly, monthly, or quarterly—into a mutual fund.
                        </p>

                        <h3>                        What is a SIP Calculator?
                        </h3>
                        <p> A SIP calculator is your go-to tool for estimating the returns on your SIP investments. These calculators have become increasingly popular, especially among millennials who are drawn to the simplicity and discipline of SIPs.
                            While the SIP calculator gives you a projected return, it’s important to remember that the actual returns can vary. Factors like market conditions, exit loads, and expense ratios—which the calculator doesn’t account for—can impact your final returns.</p>

                        <h3>Why Use a SIP Calculator?</h3>
                        <p>  SIP investments are often touted by financial experts as a smart, disciplined way to grow your wealth. They encourage regular saving, which can lead to significant returns over time.
                        </p>


                        <h3>Here’s how a SIP calculator can help you:
                        </h3>

                        <ul>
                            <li>Set Your Investment Goals: It helps you figure out how much to invest regularly.</li>
                            <li>Track Your Investments: See the total amount you’ve invested over time.</li>
                            <li>Estimate Potential Returns: Get an estimate of what your investments could be worth at the end of your chosen tenure.</li>
                        </ul>

                        <p>Keep in mind that the estimated returns can fluctuate based on market performance.
                        </p>

                        <h3>How to Use the Wise Funds SIP Calculator
                        </h3>
                        <p>Using the Wise Funds SIP calculator is straightforward and hassle-free. Just input the monthly amount you wish to invest, the duration of your investment, and your expected rate of return. Instantly, you’ll get an estimate of the maturity amount at the end of your investment period.
                        </p>

                        <h3>Benefits of the Wise Funds SIP Calculator
                        </h3>
                        <p>The Wise Funds SIP calculator offers several advantages that make it a valuable tool for any investor:
                        </p>

                        <ul>
                            <li>
                                Strategic Investment Planning: Easily plan your investments based on the amount and tenure that aligns with your financial goals.</li>
                            <li>Accurate Return Estimates: Get quick and reliable estimates of your investment’s total value at the end of the SIP period.</li>
                            <li>Time Efficiency: Save time and eliminate errors with the calculator’s accurate computations, freeing you from the tedious manual calculations.</li>
                        </ul>

                        <p>By leveraging the Wise Funds SIP calculator, you can ensure that your investment strategy is tailored to your financial objectives and needs.
                        </p>
                    </div>
                    <List />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default SIP