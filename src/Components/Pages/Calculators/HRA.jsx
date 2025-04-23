import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import { pmt, min } from 'financial'
import { Helmet } from 'react-helmet'
import List from './List'

const LumpSum = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [basicSalary, setBasicSalary] = useState(0);
  const [dearnessAllowance, setDearnessAllowance] = useState(0);
  const [HRA, setHRA] = useState(0);
  const [repayableAmount, setRepayableAmount] = useState(0);
  const [living, setLiving] = useState("Yes");
  const [taxable, setTaxable] = useState(0);
  const [HraExemption, setHraExemption] = useState(0);
  const [rentPaid, setRentPaid] = useState(0);
  const [result, setResult] = useState(0);
  const [result1, setResult1] = useState(0);
  const [result1text, setResult1Text] = useState("50% of Basic Salary+ DA (for Metro )");

  let r, yes, no, exemption, taxableHra;

  const calculate = () => {

    if (living == "Yes") {
      setResult1Text("50% of Basic Salary+ DA (for Metro )");
      yes = ((50 / 100) * (dearnessAllowance + basicSalary));
      setResult1(yes);
      r = rentPaid - ((dearnessAllowance + basicSalary) * (10 / 100));

      // console.log("true");
      exemption = Math.min(HRA, r, yes);
      setHraExemption(exemption);
      taxableHra = HRA - exemption;
      setTaxable(taxableHra);
      // console.log(taxableHra);
      setResult(r);

    } else if (living == "No") {
      setResult1Text("40% of Basic Salary & DA(For Non Metro)")
      no = ((40 / 100) * (dearnessAllowance + basicSalary));
      setResult1(no);
      r = rentPaid - ((dearnessAllowance + basicSalary) * (10 / 100));

      // console.log("false");

      exemption = Math.min(HRA, r, no);
      setHraExemption(exemption)

      taxableHra = HRA - exemption;
      setTaxable(taxableHra);
      console.log(taxableHra)
      setResult(r);
    }


  };

  return (
    <>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>HRA Calculator | Calculate Your House Rent Allowance Tax Exemption</title>
        <link rel="canonical" href="https://www.wisefunds.com/hra-calculator" />
        <meta name="description" content=" Calculate your HRA tax exemption with our HRA Calculator. Maximize your tax savings and manage your rental expenses efficiently." />
        <meta name="keywords" content="HRA calculator, House Rent Allowance, tax exemption, rental expenses, HRA tax benefits, tax savings" />
      </Helmet>
      <div className="sip">
        <div class="four" >
          <h3>HRA <em>Calculator</em></h3>
        </div >
        <div className="sip-body">
          <div className="sip-left">
            <label>Basic Salary (p.a)</label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{basicSalary}</p> */}
              <input type="number" min={0} value={basicSalary} onChange={(e) => setBasicSalary(parseInt(e.target.value))} />

              <input type="range" min={0} value={basicSalary} onChange={(e) => setBasicSalary(parseInt(e.target.value))} />
            </div>

            <label>Dearness Allowance(p.a)</label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{dearnessAllowance}</p> */}
              <input type="number" min={0} value={dearnessAllowance} onChange={(e) => setDearnessAllowance(parseInt(e.target.value))} />

              <input type="range" min={0} value={dearnessAllowance} onChange={(e) => setDearnessAllowance(parseInt(e.target.value))} />
            </div>

            <label>HRA(p.a)</label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{HRA}</p> */}
              <input type="number" min={0} value={HRA} onChange={(e) => setHRA(parseInt(e.target.value))} />

              <input type="range" min={0} value={HRA} onChange={(e) => setHRA(parseInt(e.target.value))} />
            </div>

            <label>Rent Paid (p.a)</label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{rentPaid}</p> */}
              <input type="number" min={0} value={rentPaid} onChange={(e) => setRentPaid(parseInt(e.target.value))} />

              <input type="range" min={0} value={rentPaid} onChange={(e) => setRentPaid(parseInt(e.target.value))} />
            </div>

            <label>Living in Metro City</label>
            <select value={living} defaultValue={"Yes"} onChange={(e) => setLiving(e.target.value)}>
              <option value="Yes" defaultChecked>Yes</option>
              <option value="No">No</option>
            </select>

            <button onClick={calculate}>Calculate</button>

          </div>
          <div className="sip-right">
            <p className='main'>HRA exemption <span>₹{HraExemption.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>{result1text}:<span>{result1.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>Rent Paid - 10 % of basic + DA: <span>{result.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>Taxable HRA:<span>₹{taxable.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>

          </div>
        </div>

        <div className="sip-bottom">
          <div className="sip-text">
            <h3>What Is an HRA Calculator, Why Use Wise Funds HRA Calculator, and How HRA Calculators Are Beneficial
            </h3>

            <h3>What Is an HRA Calculator?</h3>
            <p>An HRA (House Rent Allowance) calculator is an tool used to determine the tax-exempt portion of your House Rent Allowance. By inputting your salary, rent, and location details, the calculator helps you understand how much of your HRA is exempt from tax.
            </p>

            <h3>Understanding House Rent Allowance (HRA)</h3>
            <p>HRA is a salary component provided by employers to employees to cover housing costs. It’s particularly important for those living in rented accommodation as it provides tax relief on rent payments.</p>

            <h3>Importance of Calculating HRA for Tax Savings</h3>
            <p>An HRA calculator simplifies the process of calculating how much tax you can save under the HRA exemption rule. Instead of manually calculating the three components of HRA exemption, this tool gives you quick results.</p>

            <h3>Inputs Required for HRA Calculation</h3>

            <ul>
              <li>Basic Salary: Your monthly salary excluding bonuses and allowances.</li>
              <li>Rent Paid: The monthly rent you pay for your accommodation.</li>
              <li>HRA Received: The amount of HRA received from your employer.</li>
              <li>City of Residence: Whether you live in a metro or non-metro city.</li>
            </ul>

            <h3>HRA Exemption Rules Based on Salary and Rent</h3>
            <p>The HRA exemption is calculated based on three factors:</p>
            <ul>
              <li>50% of basic salary for metro cities or 40% for non-metros.
              </li>
              <li>Actual HRA received.
              </li>
              <li>Rent paid minus 10% of your salary.</li>
            </ul>

            <h3>Why Use a Wise Funds HRA Calculator??</h3>
            <p>The Wise Funds HRA calculator is designed to help you easily calculate your HRA exemption. It’s user-friendly and provides instant results, making it perfect for salaried individuals seeking tax savings.</p>

            <h3>Simplifying HRA Exemption Calculations</h3>
            <p>The Wise Funds HRA calculator eliminates the complexity of manual calculations. By inputting basic details, you can quickly see how much of your HRA is exempt from tax, saving you time and effort.</p>

            <h3>Accurate Tax Savings Estimates</h3>
            <p>The Wise Funds HRA calculator gives you an accurate estimate of your tax savings, ensuring that you don’t overpay or underclaim your HRA exemption.</p>
          </div>
          <List />

        </div>

      </div>
      <Footer />
    </>
  )
}

export default LumpSum