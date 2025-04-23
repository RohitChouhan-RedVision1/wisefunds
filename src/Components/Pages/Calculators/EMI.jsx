import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import { pmt } from 'financial'
import { Helmet } from 'react-helmet'
import { toast, ToastContainer } from 'react-toastify'
import List from './List'

const LumpSum = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [repayableAmount, setRepayableAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [EMI, setTotalEMI] = useState(0);
  const [totalMonths, setTotalMonths] = useState(0);

  let totalm, emi, repayable, interest, type;
  const calculate = () => {
    if (loanAmount == 0 || interestRate == 0 || timePeriod == 0) {
      toast.error("Please enter all the fields.");
      return
    } else {
      type = type || 0;
      const inter = interestRate / 100;
      console.log("inter" + inter)
      totalm = timePeriod * 12;
      console.log(totalm)
      emi = pmt(inter / 12, totalm, -loanAmount, 0);
      repayable = emi * 18;
      interest = repayable - loanAmount;
      setTotalMonths(totalm);
      setTotalEMI(emi);
      setRepayableAmount(repayable);
      setTotalInterest(interest);
    }
  };

  return (
    <>
      <ToastContainer />
      <Helmet>
        <meta charSet="utf-8" />
        <title>EMI Calculator | Calculate Your Loan EMIs Easily
        </title>
        <link rel="canonical" href="https://www.wisefunds.com/emi-calculator" />
        <meta name="description" content="Calculate your loan EMIs with our easy-to-use EMI Calculator. Plan your finances and manage your loans efficiently with accurate EMI calculations." />
        <meta name="keywords" content=" EMI calculator, loan calculator, monthly installment, EMI calculation, loan planning, financial planning" />
      </Helmet>
      <Header />
      <div className="sip">
        <div class="four" >
          <h3>EMI <em>Calculator</em></h3>
        </div >
        <div className="sip-body">
          <div className="sip-left">

            <label>Rate of Interest </label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{loanAmount}</p> */}
              <input type="number" min={100000} max={100000000} value={loanAmount} onChange={(e) => setLoanAmount(parseInt(e.target.value))} />

              <input type="range" min={100000} max={100000000} value={loanAmount} onChange={(e) => setLoanAmount(parseInt(e.target.value))} />
            </div>

            <label>Interest Rate (%):</label>
            <div className="sip-left-card">
              {/* <p>{interestRate}&nbsp;%</p> */}
              <input type="number" value={interestRate} min={1} max={30} onChange={(e) => setInterestRate(parseInt(e.target.value))} />

              <input type="range" value={interestRate} min={1} max={30} onChange={(e) => setInterestRate(parseInt(e.target.value))} />
            </div>

            <label>Tenure (years):</label>
            <div className="sip-left-card">
              {/* <p>{timePeriod}&nbsp;Yr</p> */}
              <input type="number" value={timePeriod} min={1} max={10} onChange={(e) => setTimePeriod(parseFloat(e.target.value))} />

              <input type="range" value={timePeriod} min={1} max={10} onChange={(e) => setTimePeriod(parseFloat(e.target.value))} />
            </div>

            <button onClick={calculate}>Calculate</button>

          </div>
          <div className="sip-right">
            <p className='main'>Total Repayable Amount <span>₹{repayableAmount.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>

            <p>Total Months: <span>{totalMonths.toFixed(0).toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>Total EMI: <span>₹{EMI.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>Total Interest: <span>₹{totalInterest.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>

          </div>
        </div>

        <div className="sip-bottom">
          <div className="sip-text">
            <h3>What Is an EMI Calculator, Why Use the Wise Funds EMI Calculator, and How It’s Beneficial
            </h3>

            <h3>What Is an EMI Calculator?
            </h3>
            <p>An EMI (Equated Monthly Installment) calculator is a tool that helps you calculate the monthly installment amount you'll need to pay for a loan. Whether it's for a home, car, or personal loan, the EMI calculator simplifies the process of understanding your repayment schedule by breaking down the total loan amount, interest rate, and tenure into manageable monthly payments.
            </p>

            <h3>Understanding EMI and Its Components
            </h3>
            <p>EMI is a fixed monthly payment that borrowers pay to lenders over a predetermined loan tenure. It consists of two primary components:
            </p>

            <ul>
              <li>Principal: The loan amount borrowed.
              </li>
              <li>Interest: The fee the lender charges for providing the loan, calculated based on the principal and interest rate.
              </li>
            </ul>

            <p>The EMI remains constant throughout the loan tenure, although the interest and principal proportions change with time. In the initial stages, the interest component is higher, and as the loan progresses, the principal repayment increases.
            </p>

            <h3>How an EMI Calculator Works
            </h3>
            <p>The EMI calculator uses the following inputs to provide an accurate estimate:
            </p>
            <ul>
              <li>Loan Amount: The total amount borrowed.
              </li>
              <li>Interest Rate: The percentage charged by the lender on the loan.
              </li>
              <li>Loan Tenure: The period over which the loan will be repaid, usually in months or years.
              </li>
              <li>Using a mathematical formula, the EMI calculator divides the loan into equal monthly payments, giving you a clear picture of how much you need to pay each month over the loan tenure.
              </li>
            </ul>

            <p>Where:
            </p>

            <p>P = Principal loan amount
            </p>
            <p>r = Monthly interest rate (annual interest rate divided by 12)
            </p>
            <p>n = Number of monthly installments (loan tenure in months)
            </p>

            <h3>Benefits of Using an EMI Calculator
            </h3>
            <ul>
              <li>Financial Planning: Helps you understand the monthly financial commitment required to service the loan.
              </li>
              <li>Loan Comparison: Allows you to compare different loan amounts, interest rates, and tenures to find the most affordable EMI.
              </li>
              <li>Time-Saving: Instantly provides accurate EMI calculations, saving you from manual calculations.
              </li>
              <li>Budgeting: Helps you plan your finances by showing how the EMI fits into your monthly budget.
              </li>
            </ul>

            <h3>Types of Loans for Which You Can Use an EMI Calculator
            </h3>
            <ul>
              <li>Home Loans: For purchasing or renovating a home.
              </li>
              <li>Car Loans: For buying a new or used vehicle.
              </li>
              <li>Personal Loans: For any personal financial need such as weddings, medical emergencies, or vacations.
              </li>
              <li>Education Loans: To fund higher education expenses.
              </li>
            </ul>

            <h3>Why Use the Wise Funds EMI Calculator?
            </h3>
            <p>The Wise Funds EMI Calculator is designed to offer a user-friendly and accurate way to calculate your monthly loan payments. It takes into account both the principal and interest, providing you with a clear and precise figure so you can make informed decisions.
            </p>

            <h3>Key Features of the Wise Funds EMI Calculator
            </h3>

            <ul>
              <li>Quick and Easy to Use: With just a few inputs, you get an instant estimate of your EMI.
              </li>
              <li>Customizable: Adjust the loan amount, interest rate, and tenure to see how they impact your EMI.
              </li>
              <li>Graphical Representation: Get a visual breakdown of the loan repayment schedule, showing how much goes toward interest versus principal over time.
              </li>
              <li>Comparison Tool: Compare different loan options to see which one suits your financial needs the best.
              </li>
              <li>How to Use the Wise Funds EMI Calculator: Step-by-Step Guide
              </li>
              <li>Enter Loan Amount: Input the total loan amount you want to borrow.
              </li>
              <li>Enter Interest Rate: Add the applicable annual interest rate offered by the lender.
              </li>
              <li>Select Loan Tenure: Choose the repayment period in months or years.
              </li>
              <li>Get Instant Results: The EMI calculator will quickly display your estimated monthly EMI, total interest payable, and the overall cost of the loan.
              </li>
              <li>EMI Breakdown: Principal vs. Interest
              </li>
            </ul>

            <p>When you begin repaying a loan, a larger portion of your EMI goes toward interest payments. Over time, as the principal reduces, the interest component decreases, and a larger part of the EMI goes toward repaying the principal. The Wise Funds EMI Calculator helps visualize this with a clear breakdown, so you know exactly how much of your monthly payment is going toward interest and how much toward principal.
            </p>

            <h3>How the EMI Calculator Helps You Compare Loan Options
            </h3>
            <p>One of the key advantages of using an EMI calculator is the ability to compare different loan options. By adjusting the loan amount, tenure, or interest rate, you can see how each change impacts your monthly payments. This allows you to choose the loan that best fits your financial situation.
            </p>
            <p>For example, a longer loan tenure will reduce your EMI, but you will end up paying more interest over time. On the other hand, a shorter tenure will increase your EMI but reduce the total interest paid. The Wise Funds EMI Calculator helps you find the perfect balance.
            </p>
            <h3>Real-Life Example: Calculating EMI for a Home Loan
            </h3>
            <p>Let’s assume you are planning to take a home loan of ₹50,00,000 at an interest rate of 7% for a tenure of 20 years. Using the EMI formula, or better yet, the Wise Funds EMI Calculator, you can easily calculate the monthly EMI. Based on these inputs, the calculator will estimate your EMI, the total interest payable, and the total amount you’ll need to repay over the loan tenure.
            </p>

            <h3>Why You Should Calculate EMI Before Taking a Loan
            </h3>

            <ul>
              <li>Avoid Over-Borrowing: By knowing your EMI beforehand, you can avoid borrowing more than you can comfortably repay.
              </li>
              <li>Plan for the Future: Helps you understand how much of your monthly income will go toward loan repayment and plan your finances accordingly.
              </li>
              <li>Loan Affordability: Ensures that you choose a loan with an EMI that fits within your monthly budget, avoiding financial stress.
              </li>
            </ul>

            <h3>Conclusion
            </h3>
            <p>An EMI calculator is an indispensable tool for anyone considering taking out a loan. Whether you’re borrowing for a home, car, or any other purpose, the Wise Funds EMI Calculator provides quick and accurate results, helping you make informed financial decisions. By using this tool, you can easily plan your loan repayments, compare different loan options, and ensure you’re on the right path to achieving your financial goals without overwhelming your budget.</p>
          </div>
          <List />

        </div>
      </div>
      <Footer />
    </>
  )
}

export default LumpSum