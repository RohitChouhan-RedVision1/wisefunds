import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import { fv } from 'financial'
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
        // const futureValue = fv(principal, timePeriod, rate);

        setFutureValue(futureValue);
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>FD Calculator | Calculate Fixed Deposit Interest and Maturity Amount</title>
                <link rel="canonical" href="https://www.wisefunds.com/fd-calculator" />
                <meta name="description" content="Use our FD Calculator to calculate the interest and maturity amount on your fixed deposits. Plan your savings with guaranteed returns." />
                <meta name="keywords" content=" FD calculator, fixed deposit, FD interest, maturity amount, savings plan, guaranteed returns" />
            </Helmet>
            <Header />
            <div className="sip">
                <div class="four" >
                    <h3>FD <em>Calculator</em></h3>
                </div >
                <div className="sip-body">
                    <div className="sip-left">
                        <label>Total Investment </label>
                        <div className="sip-left-card">
                            {/* <p>₹&nbsp;{principal}</p> */}
                            <input type="number" min={5000} max={10000000} value={principal} onChange={(e) => setPrincipal(parseInt(e.target.value))} />

                            <input type="range" min={5000} max={10000000} value={principal} onChange={(e) => setPrincipal(parseInt(e.target.value))} />
                        </div>

                        <label>Interest Rate (%):</label>
                        <div className="sip-left-card">
                            {/* <p>{interestRate}&nbsp;%</p> */}
                            <input type="number" min={1} max={15} value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />

                            <input type="range" min={1} max={15} value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />
                        </div>

                        <label>Time Period (years):</label>
                        <div className="sip-left-card">
                            {/* <p>{interestRate}&nbsp;Yr</p> */}
                            <input type="number" min={1} max={25} value={timePeriod} onChange={(e) => setTimePeriod(parseInt(e.target.value))} />

                            <input type="range" min={1} max={25} value={timePeriod} onChange={(e) => setTimePeriod(parseInt(e.target.value))} />
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
                        <h3>Fixed Deposit Calculator Online
                        </h3>
                        <p>Fixed Deposit Calculator Online A fixed deposit (FD) is a type of term investment offered by several banks and NBFCs. These deposits typically offer a higher rate of interest, subject to certain terms and conditions. The amount you deposit in an FD is locked for a predetermined period which can vary between 7 days and 10 years.
                        </p>
                        <p>The interest rate for FDs is fixed at the time of opening the deposit and independent of any fluctuations in the market. Some financial institutions even allow one to break their FDs prematurely on paying a certain penalty fee. An FD calculator can be used online to determine the interest and the amount that it will accrue at the time of maturity. It is a simple-to-use tool available on the Wise Funds website.
                        </p>

                        <h3>How can an FD calculator help you?
                        </h3>
                        <p>Calculating the maturity amount of an FD can be a complicated and time-consuming process. An online FD calculator enables one to figure it without breaking a sweat.
                        </p>

                        <ul>
                            <li>FD maturity calculations are complex involving multiple variables. An FD deposit calculator does all the hard work and gives you the accurate figures just at the click of a button.
                            </li>
                            <li>It helps you save a lot of time on these complex calculations. c. A fixed deposit return calculator enables you to compare the maturity amount and interest rates of FDs offered by different financial institutions. You can make an informed decision when you have all the figures at your disposal.
                            </li>
                        </ul>

                        <p>The formula to determine FD maturity amount
                        </p>

                        <p>There are two types of FD that you may avail – simple interest FD and compound interest FD. Wise Funds has calculators for both these types of FD.
                        </p>

                        <p>The fixed deposit calculator for simple interest FD uses the following formula –</p>

                        <p>M = P + (P x r x t/100), where –
                        </p>
                        <ul>
                            <li> P is the principal amount that you deposit</li>
                            <li>r is the rate of interest per annum</li>
                            <li>t is the tenure in years</li>

                        </ul>

                        <p>For example, if you deposit a sum of Rs. 1,00,000 for 5 years at 10% interest, the equation reads –
                        </p>

                        <p>M= Rs. 1,00,000 + (1,00,000 x 10 x 5/100)= Rs. 1,50,000
                        </p>

                        <p>For compound interest FD, the FD return calculator uses the following formula –
                            M= P + P &#x7B;{"(1 + i / 100) t – 1"}&#x7D;
                            , where –
                        </p>

                        <ul>
                            <li>P is the principal amount</li>
                            <li>i is the rate of interest per period</li>
                            <li>t is the tenure</li>
                        </ul>

                        <p>For example, if you take the same variables, the compound interest FD will accrue,
                        </p>

                        <p>M= Rs. 1,00,000 &#x7B;{"(1 + 10/100) 5-1"}&#x7D;
                        </p>
                        <p>Or, Rs. 1,61,051
                        </p>

                        <h3>How to use Wise Funds’s FD calculator?
                        </h3>
                        <p>Follow the steps mentioned below to use an FD deposit calculator conveniently.
                        </p>
                        <ul>
                            <li>Ensure you have all the related data available with you. </li>
                            <li>Enter the variables as mentioned in the formula on their designated slots. </li>
                            <li>The FD maturity amount will be displayed instantly. </li>
                        </ul>

                        <h3>Advantages of using Wise Funds FD calculator India
                        </h3>

                        <p>Know the exact amount you will receive at the time of FD maturity using the FD amount calculator.
                        </p>

                        <p>There are several other advantages of using these calculators –
                        </p>

                        <h3>Frequently Asked Questions (FAQ)
                        </h3>
                        <p>Here are some common queries answered.
                        </p>

                        <h5> Is the FD interest calculator free to use?
                        </h5>
                        <p>Absolutely. You do not have to pay anything to use the calculators. All of our calculators are free.
                        </p>
                        <h5>How much time does it take to use the FD calculator?
                        </h5>
                        <p>It takes just a few seconds.
                        </p>

                        <h5> What happens if the calculator malfunctions?
                        </h5>
                        <p>Wise Funds ensures that none of our offerings malfunction. However, if you still face any issue, you can contact our customer representatives by clicking on the ‘Contact Us’ section.
                        </p>

                        <h5>How does the FD calculator help in future financial planning?
                        </h5>
                        <p>Once you know how much your Fixed Deposit will fetch you after the tenure ends, you can either choose to reinvest or withdraw the amount.
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