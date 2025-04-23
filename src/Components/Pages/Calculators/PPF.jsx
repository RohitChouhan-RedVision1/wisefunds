import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import List from './List'
import { Helmet } from 'react-helmet'
import { toast, ToastContainer } from 'react-toastify'

const PPFCalculator = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [interestRate, setInterestRate] = useState(10.00);
    // const [time, setTime] = useState(4);
    const [amount, setAmount] = useState(1000);
    const [maturityAmount, setMaturityAmount] = useState(0);

    const calculateMaturityAmount = () => {
        let interest, amt;
        let currentAmount = amount;

        if (amount > 150000) {
            toast.error("Amount cannot be greater then 150000");
            setAmount(0);
            return
        } else {
            for (let i = 1; i < 15; i++) {
                interest = currentAmount * (interestRate / 100);
                // console.log("currentAmount: " + currentAmount);
                // console.log("interest: " + interest);
                currentAmount += interest;
                amt = currentAmount + amount;
                // console.log("currentAmount: " + amt);
                currentAmount = amt
            }
            setMaturityAmount(amt);
        }


    };


    return (
        <>
            <ToastContainer />
            <Helmet>
                <meta charSet="utf-8" />
                <title> PPF Calculator | Calculate Your PPF Investment Returns</title>
                <link rel="canonical" href="https://www.wisefunds.com/ppf-calculator" />
                <meta name="description" content="Estimate the maturity value of your PPF investments with our PPF Calculator. Plan your long-term savings and secure your financial future." />
                <meta name="keywords" content="PPF calculator, Public Provident Fund, PPF returns, long-term savings, financial planning, tax-saving investments" />
            </Helmet>
            <Header />
            <div className="sip">
                <div class="four" >
                    <h3>PPF <em>Calculator</em></h3>
                </div >
                <div className="sip-body">
                    <div className="sip-left">

                        <label>Amount</label>
                        <div className="sip-left-card">
                            {/* <p>₹&nbsp;{amount}</p> */}
                            <input
                                type="number"
                                value={amount}
                                min={500}
                                max={150000}
                                onChange={(e) => setAmount(parseFloat(e.target.value))}
                            />
                            <input
                                type="range"
                                value={amount}
                                min={500}
                                max={150000}
                                onChange={(e) => setAmount(parseFloat(e.target.value))}
                            />
                        </div>

                        <label>Rate Of Interest</label>
                        <div className="sip-left-card">
                            {/* <p>{interestRate}&nbsp;%</p> */}
                            <input
                                type="number"
                                min={1}
                                max={40}
                                value={interestRate}
                                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                            />
                            <input
                                type="range"
                                min={1}
                                max={40}
                                value={interestRate}
                                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                            />
                        </div>

                        {/* <label></label>
                        <div className="sip-left-card">
                             <p>{time}&nbsp;Yr</p> 
                            <input
                                type="number"
                                value={time}
                                min={15}
                                max={50}
                                onChange={(e) => setTime(parseInt(e.target.value))}
                            />
                            <input
                                type="range"
                                value={time}
                                min={15}
                                max={50}
                                onChange={(e) => setTime(parseInt(e.target.value))}
                            />
                        </div> */}

                        <button onClick={calculateMaturityAmount}>Calculate</button>

                    </div>
                    <div className="sip-right">
                        <p className='main'>Maturity Amount <span>₹{maturityAmount.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
                        <p>Duration (Years):<span>15</span></p>
                    </div>
                </div>

                <div className="sip-bottom">
                    <div className="sip-text">
                        <h3>Public Provident Fund Calculator ( PPF)
                        </h3>
                        <p>The first step towards wealth management is accumulating savings. You will find a lot of options for savings accounts; however, look for the ones that guarantee substantial returns risk-free. PPF accounts are one of the most common features which come into the picture. PPF account refers to Public Provident fund account and is meant to invest your valuable capital. If you are a new employee or a responsible parent who wishes to save for the future, then PPF is ideal for you. Calculating the interest rates and returns on your PPF account turns a bit difficult. To make these difficult calculations easy, PPF account calculators can be used.
                        </p>

                        <h3>How can a PPF calculator help you?
                        </h3>
                        <p>This financial tool allows one to resolve their queries related to Public Provident Fund accounts. There are certain specifications that are to be abided by while calculating maturity amount after a certain point of time. It keeps a track on the growth of your capital. Those who already have a PPF savings account know that interest rates change on a monthly basis. Nowadays, it is easier to keep a check on changing interest rates. However, with the discovery of a public provident fund calculator, account holders find it easier to find out monthly changes made in rate of interest. In the market, you may find a lot of user-friendly PPF calculators and for choosing trustworthy ones, Wise Funds is simply the option.
                        </p>

                        <h3>Formula used for calculating PPF
                        </h3>
                        <p>Wise Funds uses a formula to compute the deposited amount, interest, etc. This formula has been given below –
                        </p>
                        <p>F = P [({"(1+i) ^n"}-1)/i]</p>
                        <p>This formula represents the following variables –</p>
                        <table>
                            <tr>
                                <td>P</td>
                                <td>Principal sum</td>
                            </tr>

                            <tr>
                                <td>F</td>
                                <td>Maturity of PPF</td>
                            </tr>

                            <tr>
                                <td>N</td>
                                <td>Total number of years</td>
                            </tr>

                            <tr>
                                <td>P</td>
                                <td>P Annual instalments</td>
                            </tr>

                        </table>


                        <h3>How to use PPF calculator?
                        </h3>
                        <p>To enjoy this computing tool to the maximum, you need to understand how it works.
                            Its user-friendly and accurate information makes it a device worthy of purchase.
                            The only job of the user is to put values within specific columns and you are good to go.
                            Details that are to be provided to this PPF amount calculator include tenure, total amount invested, interest earned and also amount invested monthly or yearly.
                        </p>

                        <ul>
                            <li>Enter the values in the requisite fields and the total maturity amount will be reflected within seconds.</li>
                            <li>If an individual deposits amount on 1st of April then interest will be calculated based on financial year.
                                Inflation might affect this interest rate.</li>
                        </ul>

                        <h3>Advantages of using PPF calculator
                        </h3>
                        <p>The list below demonstrates the benefits of using an online PPF calculator. Have a look at it.
                        </p>

                        <ul>
                            <li>This computing device allows users to make a clear idea about how much interest can be earned with the investment of a certain amount of money.</li>
                            <li>With the assistance of this calculator, you can be saved from paying hefty tax.</li>
                            <li>We often find it difficult to decide on the maturity period of their investment and this problem is easily solved with the use of PPF calculator India.</li>
                            <li>It also offers estimation on total investment in a financial year.</li>
                            <li>To ensure that the user is able to get accurate results, it is essential to provide the computing device with deposited amounts along with the type of deposit i.e. fixed or variable.</li>

                        </ul>

                        <h3>FAQs
                        </h3>

                        <h5>1. Can I transfer my PPF account to another branch or office?
                        </h5>
                        <p>Yes, you find the liberty to transfer the account to another office or branch.
                        </p>

                        <h5>2. How much interest rate can I get on my PPF account?
                        </h5>
                        <p>The interest rate is mainly determined by the Central Government periodically. At present, the interest rate is 7.1% per annum.
                        </p>

                        <h5>3. When is my investment going to mature?
                        </h5>
                        <p>In PPF accounts, maturity can be attained after 15 years. After this period, you are liable to withdraw the entire amount.
                        </p>

                    </div>
                    <List />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default PPFCalculator