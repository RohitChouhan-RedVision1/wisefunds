import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import { ToastContainer, toast } from 'react-toastify';
import List from './List'
import { Helmet } from 'react-helmet'

const SimpleInterest = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    const [interest, setInterest] = useState(0);
    const [investedAmount, setInvestedAmount] = useState(0);

    const [roi, setRoi] = useState(0);
    const [time, setTime] = useState(0);
    const [amount, setAmount] = useState(0);

    const rateofInterest = roi / 100;

    const calculate = () => {
        var interestresult = rateofInterest * time * amount;
        setInterest(parseInt(interestresult));
        setInvestedAmount(parseInt(amount) + parseInt(interestresult));
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Simple Interest Calculator | Calculate Your Interest Instantly
                </title>
                <link rel="canonical" href="https://www.wisefunds.com/simple-interest-calculator" />
                <meta name="description" content="Use our Simple Interest Calculator to quickly determine the interest earned on your investment. Ideal for students, investors, and financial planners. Easy and accurate!" />
                <meta name="keywords" content="simple interest calculator, interest calculation, investment interest, financial calculator, SI calculator, interest formula" />
            </Helmet>
            <ToastContainer />
            <Header />
            <div className="sip">
                <div class="four" >
                    <h3>Simple Interest <em>Calculator</em></h3>
                </div >
                <div className="sip-body">
                    <div className="sip-left">

                        <label >Principal Amount</label>
                        <div className="sip-left-card">
                            {/* <p>₹&nbsp;{amount}</p> */}
                            <input type="number"
                                min={1000} max={10000000}
                                value={amount}
                                onChange={(e) => setAmount(parseInt(e.target.value))}
                            />
                            <input type="range"
                                min={1000} max={10000000}
                                value={amount}
                                onChange={(e) => setAmount(parseInt(e.target.value))}
                            />
                        </div>

                        <label >Rate Of Interest</label>
                        <div className="sip-left-card">
                            {/* <p>{roi}&nbsp;%</p> */}
                            <input type="number"
                                min={1} max={50}

                                value={roi}
                                onChange={(e) => setRoi(parseFloat(e.target.value))}
                            />
                            <input type="range"
                                min={1} max={50}
                                value={roi}
                                onChange={(e) => setRoi(parseFloat(e.target.value))}
                            />
                        </div>


                        <label >Time</label>
                        <div className="sip-left-card">
                            {/* <p>{time}&nbsp;Yr</p> */}
                            <input type="number"
                                min={1} max={30}
                                value={time}
                                onChange={(e) => setTime(parseInt(e.target.value))}
                            />
                            <input type="range"
                                min={1} max={30}
                                value={time}
                                onChange={(e) => setTime(parseInt(e.target.value))}
                            />
                        </div>




                        <button onClick={calculate}>Calculate</button>
                    </div>


                    <div className="sip-right">
                        <p className='main'>Invested Amount <span>₹{investedAmount.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
                        <p>Interest <span>₹{interest.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
                    </div>
                </div>

                <div className="sip-bottom">
                    <div className="sip-text">
                        <h3>What is a Simple Interest (SI) Calculator?
                        </h3>
                        <p>A Simple Interest (SI) Calculator is a tool that helps you easily calculate the interest on a principal amount over a specified period at a fixed interest rate. Simple interest is a straightforward method of calculating the interest on a loan or investment, where the interest is computed on the original principal. Unlike compound interest, which adds interest on top of previously earned interest, simple interest remains constant throughout the investment or loan period.
                        </p>

                        <h3>Why Use the Wise Funds Simple Interest Calculator?
                        </h3>
                        <p>The Wise Funds Simple Interest Calculator is designed to help you quickly and accurately calculate the interest on your investments or loans. Our calculator simplifies the process, allowing you to make informed financial decisions with confidence.  </p>

                        <h3>Benefits of Using the Wise Funds Calculator
                        </h3>

                        <ol>
                            <li>Ease of Use: Our user-friendly interface ensures that you can input your data effortlessly, giving you instant results without any complicated steps.
                            </li>
                            <li>Accuracy: With precise calculations, the Wise Funds Simple Interest Calculator provides accurate interest amounts based on your principal, rate, and time period, helping you plan better.
                            </li>
                            <li>Time-Saving: No need to perform manual calculations or use complex formulas. The calculator does the math for you, saving you time and reducing the risk of errors.
                            </li>
                            <li>Versatility: Whether you’re calculating interest for a loan, an investment, or any other financial scenario, our calculator is versatile enough to handle a variety of financial situations.
                            </li>
                        </ol>


                        <h3>Frequently Asked Questions (FAQ)
                        </h3>

                        <h5>1.  How do I use the Wise Funds Simple Interest Calculator?
                        </h5>
                        <p>Simply enter the principal amount, interest rate, and the time period for which the interest is to be calculated. Click "Calculate" to get the result instantly.
                        </p>
                        <h5>2. What is simple interest?
                            How much time does it take to use the FD calculator?
                        </h5>
                        <p>Simple interest is a method of calculating the interest charge on a loan or investment. It is determined by multiplying the principal amount by the interest rate and the time period.
                        </p>

                        <h5>3. Can I use this calculator for both loans and investments?
                        </h5>
                        <p>Yes, the Wise Funds Simple Interest Calculator can be used to calculate interest on both loans and investments.
                        </p>

                        <h5>4. What do the terms ‘Principal,’ ‘Rate,’ and ‘Time’ mean?
                        </h5>
                        <ul>
                            <li>Principal: The initial amount of money that you invest or borrow.</li>
                            <li>Rate: The percentage of interest charged or earned per period.</li>
                            <li>Time: The duration for which the money is invested or borrowed.
                            </li>
                        </ul>

                        <h5>5. Is the interest calculated using this calculator accurate?
                        </h5>
                        <p>Yes, the calculator provides accurate results based on the information you input. However, it’s important to ensure that the data entered is correct.
                        </p>

                        <h5>6.  Can I use this calculator for different currencies?
                        </h5>
                        <p>Yes, the Wise Funds Simple Interest Calculator works with any currency, as long as the inputs are consistent.
                        </p>
                    </div>
                    <List />

                </div >
            </div >
            <Footer />
        </>
    )
}

export default SimpleInterest