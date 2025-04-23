import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import { pmt, fv } from 'financial'
import List from './List'
import { Helmet } from 'react-helmet'

const SSYCalculator = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [currentAge, setCurrentAge] = useState(31);
  const [epfCorpus, setEpfCorpus] = useState(0);
  const [retirement, setRetirement] = useState(60);
  const [monthlyPay, setMonthlyPay] = useState(50000);
  const [annualIncrease, setannualIncrease] = useState(5);
  const [arr, setArr] = useState([]);

  const obj = {};
  const arrayOfObjects = [];

  const [data, setData] = useState([])

  const calculate = () => {

    const age = retirement - currentAge;
    let ageStarts, ageEnd, yearofepf, monthlysalary, openingBalance, employeeYearlyContribution, empoyerYearlyContribution, totalcontribution, rateofinterest = 8.25 / 100, closingbalance, rate, calculate;
    yearofepf = 1;
    monthlysalary = monthlyPay;
    rate = annualIncrease / 100;
    let yourcontribution = 12 / 100;
    let employercontributionrate = 3.67 / 100
    let i = 0;
    console.log(monthlysalary)
    const newData = [];

    for (i = 0; i <= age; i++) {
      // if (ageEnd <= retirement) {
      // age start calculation
      if (i == 0) {
        yearofepf = 1;
        calculate = monthlyPay;
        monthlysalary = calculate
        openingBalance = 0;
        ageStarts = currentAge;
        ageEnd = ageStarts + 1;
        employeeYearlyContribution = 12 * (yourcontribution * monthlysalary);
        empoyerYearlyContribution = 12 * (employercontributionrate * monthlysalary)
        totalcontribution = employeeYearlyContribution + empoyerYearlyContribution;
        closingbalance = (openingBalance + totalcontribution) * (1 + rateofinterest);
        console.log(monthlysalary)

      } else {
        ageStarts += 1;
        // console.log("Age Start: " + ageStarts);

        // year of epf calculation
        yearofepf += 1;
        // console.log("Year of Epf: " + yearofepf);

        // monthly salary calculation
        calculate = (1 + rate) * monthlysalary;
        monthlysalary = calculate
        // console.log("Monthly salary: " + calculate);

        // employee contribution
        employeeYearlyContribution = 12 * (yourcontribution * calculate);
        // console.log("employee contribution: " + employeeYearlyContribution);

        // employer contribution
        empoyerYearlyContribution = 12 * (employercontributionrate * calculate)
        // console.log("employer contribution: " + empoyerYearlyContribution);

        // total contribution

        totalcontribution = employeeYearlyContribution + empoyerYearlyContribution;
        // console.log("Total contribution: " + totalcontribution);

        // closing balance
        openingBalance = closingbalance
        closingbalance = (openingBalance + totalcontribution) * (1 + rateofinterest);
        // console.log("opening Balance: " + openingBalance);

        // opening balance
        // openingBalance = (openingBalance + totalcontribution) * (1 + rateofinterest);
        // console.log("Closing Balance: " + closingbalance);

        // age end
        ageEnd = ageStarts + 1;
        console.log("Age End: " + ageEnd);
      }

      // console.log("Age Start: " + ageStarts);
      // console.log("Year of Epf: " + yearofepf);
      // console.log("Monthly salary: " + calculate);
      // console.log("employee contribution: " + employeeYearlyContribution);
      // console.log("employer contribution: " + empoyerYearlyContribution);
      // console.log("Total contribution: " + totalcontribution);
      // console.log("opening Balance: " + openingBalance);
      // console.log("Closing Balance: " + closingbalance);

      setEpfCorpus(Math.round(closingbalance));

      newData.push({
        a: ageStarts,
        b: yearofepf,
        c: calculate,
        d: employeeYearlyContribution,
        e: empoyerYearlyContribution,
        f: totalcontribution,
        g: openingBalance,
        h: closingbalance,
        i: ageEnd
      });

    }
    setData(newData);
  };


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> EPF Calculator | Calculate Your Employee Provident Fund Savings</title>
        <link rel="canonical" href="https://www.wisefunds.com/epf-calculator" />
        <meta name="description" content="Use our EPF Calculator to estimate the accumulated balance in your Employee Provident Fund. Plan your retirement savings with confidence." />
        <meta name="keywords" content="EPF calculator, Employee Provident Fund, retirement savings, EPF returns, financial planning, provident fund" />
      </Helmet>
      <Header />
      <div className="sip">
        <Title title1="EPF" title2="Calculator" title3="" />
        <div className="sip-body">
          <div className="sip-left">

            <label>Current Age</label>
            <div className="sip-left-card">
              {/* <p>{currentAge}</p> */}
              <input type="number" min={1} max={60} value={currentAge} onChange={(e) => setCurrentAge(parseInt(e.target.value))} />
              <input type="range" min={1} max={60} value={currentAge} onChange={(e) => setCurrentAge(parseInt(e.target.value))} />
            </div>


            {/* <div className="sip-left-card">
              <p>{retirement}</p>
              <input type="number" min={1} value={retirement} onChange={(e) => setRetirement(parseInt(e.target.value))} />
              <input type="range" min={1} value={retirement} onChange={(e) => setRetirement(parseInt(e.target.value))} />
            </div> */}

            <label>Your Monthly Basic Pay + DA</label>
            <div className="sip-left-card">
              <input type="number" value={monthlyPay} onChange={(e) => setMonthlyPay(parseInt(e.target.value))} />
              <input type="range" min={1000} max={10000000} value={monthlyPay} onChange={(e) => setMonthlyPay(parseInt(e.target.value))} />
            </div>

            <label>Expected Annual Increase Basic Pay + DA</label>
            <div className="sip-left-card">
              {/* <p>{annualIncrease}</p> */}
              <input type="number" value={annualIncrease} onChange={(e) => setannualIncrease(parseInt(e.target.value))} />
              <input type="range" value={annualIncrease} onChange={(e) => setannualIncrease(parseInt(e.target.value))} />
            </div>
            <button onClick={calculate}>Calculate</button>

          </div>
          <div className="sip-right">
            <p className='main'>EPF Corpus (At Retirement)<span className='main'><sup>₹</sup>{epfCorpus.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <div className="result">
              <p>Age of Retirement: <span>60</span></p>
              <p>EPF Interest Rate:<span>8.25%</span></p>
              <p>Your Contribution (% of Basic + DA):<span>12%</span></p>
              <p>Employer's Contribution:<span>3.67%</span></p>
            </div>
          </div>
        </div>

        <div className="sip-table">
          <table>
            <thead>
              <tr>
                <td>Age (Start)</td>
                <td>Year of EPF</td>
                <td>EPF Acct. Opening Balance</td>
                <td>Monthly Salary (Basic + DA)</td>
                <td>Employee Yearly Contribution</td>
                <td>Employer's Yearly Contribution</td>
                <td>Total Contribution</td>
                <td>EPF Acct. Closing Balance</td>
                <td>Age (End)</td>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.a}</td>
                  <td>{item.b}</td>
                  <td>₹&nbsp;{Math.round(item.g).toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</td>
                  <td>₹&nbsp;{Math.round(item.c).toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</td>
                  <td>₹&nbsp;{Math.round(item.d).toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</td>
                  <td>₹&nbsp;{Math.round(item.e).toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</td>
                  <td>₹&nbsp;{Math.round(item.f).toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</td>
                  <td>₹&nbsp;{Math.round(item.h).toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</td>
                  <td>{item.i}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sip-bottom">
          <div className="sip-text">
            <h3>Employment Provident Fund Calculator EPF
            </h3>
            <p>Most private sector employees are entitled to receive post-retirement benefits if they function in the organised sector. Note that government employees are additionally eligible for pensions unlike their private sector counterparts. The Employee Provident Fund was set up after the EPF Act was passed in the Parliament. Under the law, the Employees Provident Fund Organisation of India (or EFPO) controls the funds deposited by both the employee and employer in a permanent account, affixed by an UAN or Unique Account Number. An EPF calculator can help you estimate your savings appropriately. The PF calculator uses proprietary technology to fetch the correct sum every time you input data. Provident Fund acts as a guarantee for future prosperity or loss of employment, and is of great use for future financial decision-making.</p>

            <h3>How can an EPF calculator help you?
            </h3>
            <p>Once you start using our PF calculator in India, you can easily track where your hard-earned money is being stored, and how much interest it has accumulated.
              Here are some interesting advantages of using an EPF calculator online.
            </p>

            <ul>
              <li>You do not have to manually calculate your total contributions each time.</li>
              <li>We assure that our PF calculator online works correctly on every occasion.</li>
              <li>You do not have to worry if the interest rates or contribution ratios vary over a period.
                The EPF calculator will automatically take into account the alteration.</li>
              <li>Finally, whenever you use our EPF calculator, you are automatically informed of any recent transactions, contributions and changes, if any. For example, the current rate of interest on EPF is 8.65%. If it changes during the financial year due to any new legislation, you will be notified once you log in. .</li>
            </ul>

            <p>The formula to determine EPF amount
            </p>

            <p>When you use Wise Funds’s EPF calculator in India, you are assured of quality and reliability. This is the data you should keep in handy before you use the calculator.</p>

            <p>1. Your basic monthly salary including Dearness Allowance (DA)</p>
            <p>2. Your employer’s contribution</p>
            <p>3. Your retirement age (Including VRS, if you have such plans.)</p>
            <p>4. Your current EPF balance</p>
            <p>5. Your current EPF balance</p>

            <p>It is very easy to access and use our EPF calculator.
              Just input the values and the result will be generated within seconds.
            </p>

            <p>Step 1: Enter your basic salary and your age
            </p>
            <p>Step 2: As soon as you input the values, the employer’s contribution ( EPS+EPF), total interest earned and total maturity amount will be reflected in the results.
            </p>

            <h3>What are the advantages of Wise Funds’s PF account calculator?</h3>
            <p>Wise Funds offers you a number of choices with many different calculators, a list of which you can see below. All of our calculators are free to use.
              They are regularly updated to avoid any glitches.
            </p>

            <h3>FAQs
            </h3>

            <h5>1. Is the EPF calculator free to use?
            </h5>
            <p>Yes, all of our calculators are free to use.
            </p>

            <h5>2. How many times can I use the online EPF calculator?
            </h5>
            <p>There is no fixed upper cap on the number of times you can use the service. You can use it as many times as necessary.</p>

            <h5>3. Can I use the same calculator even after I change my job?
            </h5>
            <p>Even if you shift to a new job, the UAN stays the same. It is fixed and unchangeable. Thus, you can use the same EPF calculator.
            </p>

            <h5>4. What happens if the depositor rates- from either my end or my employer’s- changes?
            </h5>
            <p>In that case, you will need to modify the value you put in when using the EPF calculator.
            </p>

            <h5>5. When can I withdraw the money from my EPF account?</h5>
            <p>You can only withdraw the money for personal purposes:
            </p>
            <ul>
              <li> After you have completed 7 years of service
              </li>
              <li> Only thrice during the EPF account’s duration.
              </li>
            </ul>

            <p>Note that you cannot withdraw more than 50% of your personal contribution
            </p>
          </div>
          <List />

        </div>

      </div>
      <Footer />
    </>
  )
}

export default SSYCalculator