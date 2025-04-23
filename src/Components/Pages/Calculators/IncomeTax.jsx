import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import List from "./List"
import { Helmet } from 'react-helmet'

const Gratuity = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [incomeFromSalary, setIncomeFromSalary] = useState(0);
  const [interestIncomeFromBonds, setInterestIncomeFromBonds] = useState(600000);
  const [annuityfromNPS, setAnnuityfromNPS] = useState(250000);
  const [incomeFromOtherSources, setIncomeFromOtherSources] = useState(0);
  const [shortTermCapitalGains, setShortTermCapitalGains] = useState(50000);
  const [longTermCapitalGains, setLongTermCapitalGains] = useState(100000);
  const [shortTermCapitalGainsTax, setShortTermCapitalGainsTax] = useState(0);
  const [longTermCapitalGainsTax, setLongTermCapitalGainsTax] = useState(0);
  const [totalCapitalGainsTax, setTotalCapitalGainsTax] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [Section80C, setSection80C] = useState(150000);
  const [Donationtocharity, setDonationtocharity] = useState(0);
  const [InterestonEducationalLoan, setInterestonEducationalLoan] = useState(0);
  const [Interestondepositsinsavingaccount, setInterestondepositsinsavingaccount] = useState(0);
  const [Section80D, setSection80D] = useState(0);
  const [HRA, setHRA] = useState(0);
  const [Section80CCD, setSection80CCD] = useState(0);
  const [totalOldTaxRegime, setTotalOldTaxRegime] = useState(0);
  const [totalNewTaxRegime, setTotalNewTaxRegime] = useState(0);
  const [totalDeductions, setTotalDeductions] = useState(0);
  const [age, setAge] = useState(50);
  const [sty, setstyle] = useState("")
  const [sty2, setstyle2] = useState("")
  const [old, setOld] = useState(0)
  const [newt, setNewt] = useState(0)
  const [amortizedNewt, setAmortizedNewt] = useState(0)
  const [amortizedOld, setAmortizedOld] = useState(0)
  const [salaried, setSalaried] = useState("Yes")

  let shortterm, longterm, totalold, totaldeductions, totalnew, oldtaxliability, newtaxliability;

  const calculate = () => {
    setTotalIncome(incomeFromSalary + interestIncomeFromBonds + annuityfromNPS + incomeFromOtherSources);

    shortterm = (20 / 100) * shortTermCapitalGains;
    setShortTermCapitalGainsTax(shortterm);

    if (longTermCapitalGains > 125000) {
      longterm = (12.5 / 100) * longTermCapitalGains
      setLongTermCapitalGainsTax(longterm);
    } else {
      longterm = 0
      setLongTermCapitalGainsTax(longterm);
    }

    setTotalCapitalGainsTax(shortterm + longterm);

    if (age < 60 && Interestondepositsinsavingaccount > 10000) {
      toast.warn("The amount should be below 10k");
      setstyle("1px solid red");
      return
    } else if (age > 60 && Interestondepositsinsavingaccount > 50000) {
      toast.warn("The amount should be below 50k");
      setstyle("1px solid red");
      return
    } else {
      setstyle("none");
    }

    if (age < 60 && Section80D > 25000) {
      toast.warn("The amount for Section 80D should be below 25k");
      setstyle2("1px solid red");
      return
    } else if (age > 60 && Section80D > 50000) {
      toast.warn("The amount for Section 80D should be below 50k");
      setstyle2("1px solid red");
      return
    } else {
      setstyle2("none");
    }

    // Total Deductions
    totaldeductions = Section80C + Donationtocharity + InterestonEducationalLoan + Interestondepositsinsavingaccount + Section80D + HRA + Section80CCD;
    setTotalDeductions(totaldeductions)

    // Total Taxable Income after Standard Deduction as per Old Tax Regime
    totalold = ((totalIncome - totalDeductions) - 50000);
    setTotalOldTaxRegime(totalold);

    // Total Taxable Income after Standard Deduction as per New Tax Regime
    totalnew = totalIncome - 75000;

    // old tax liability

    const taxSlabs = [
      { slabStart: 0, slabEnd: 300000, taxRate: 0 },
      { slabStart: 300001, slabEnd: 500000, taxRate: 5 },
      { slabStart: 500001, slabEnd: 1000000, taxRate: 20 },
      { slabStart: 1000001, slabEnd: Infinity, taxRate: 30 }
    ];

    let totalTax = 0;

    taxSlabs.forEach(slab => {
      const taxableAmount = Math.max(0, Math.min(totalold, slab.slabEnd - slab.slabStart + 1));
      totalTax += taxableAmount * (slab.taxRate / 100);
      totalold -= taxableAmount;
    });

    console.log("tax" + Math.round(totalTax));
    setAmortizedOld(Math.round(totalTax / 12));


    if (salaried == "Yes") {
      if (totalTax < 12500) {
        oldtaxliability = 0
      } else {
        oldtaxliability = totalTax
      }
    } else {
      oldtaxliability = totalTax;
    }
    setOld(Math.round(oldtaxliability + totalCapitalGainsTax));
    console.log("liability" + oldtaxliability);

    // new tax liability

    const newtaxSlabs = [
      { slabStart: 0, slabEnd: 300000, taxRate: 0 },
      { slabStart: 300001, slabEnd: 700000, taxRate: 5 },
      { slabStart: 700001, slabEnd: 1000000, taxRate: 10 },
      { slabStart: 1000001, slabEnd: 1200000, taxRate: 15 },
      { slabStart: 1200001, slabEnd: 1500000, taxRate: 20 },
      { slabStart: 1500001, slabEnd: Infinity, taxRate: 30 }

    ];

    let newtotalTax = 0;

    newtaxSlabs.forEach(slab => {
      const newtaxableAmount = Math.max(0, Math.min(totalnew, slab.slabEnd - slab.slabStart + 1));
      newtotalTax += newtaxableAmount * (slab.taxRate / 100);
      totalnew -= newtaxableAmount;
    });

    // console.log(Math.round(newtotalTax));
    setAmortizedNewt(Math.round(newtotalTax / 12));

    if (salaried == "Yes") {
      if (newtotalTax <= 25000) {
        newtaxliability = 0
        // console.log("true")
      } else {
        newtaxliability = newtotalTax
      }
    }
    else {
      newtaxliability = newtotalTax;
    }
    // console.log(salaried)
    setNewt(Math.round(newtaxliability + totalCapitalGainsTax));


  };



  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Income Tax Calculator | Calculate Your Tax Liability Easily
        </title>
        <link rel="canonical" href="https://www.wisefunds.com/income-tax-calculator" />
        <meta name="description" content="Use our Income Tax Calculator to estimate your tax liability based on your income and deductions. Plan your taxes efficiently and save more with accurate calculations." />
        <meta name="keywords" content="income tax calculator, tax liability, tax planning, income tax, tax calculation, tax savings" />
      </Helmet>
      <Header />
      <ToastContainer />
      <div className="sip income">
        <div class="four" >
          <h3>Income Tax<em>Calculator</em></h3>
        </div >
        <div className="sip-body">
          <div className="sip-left">
            <label>Is the client a Salaried Individual (Y/N)</label>
            <select value={salaried} defaultValue={"Yes"} onChange={(e) => setSalaried(e.target.value)}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <div className="sip-left-card">
              <label >Age</label>
              {/* <p>₹&nbsp;{basicSalary}</p> */}
              <input
                type="number" min={18} max={90}
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
              />
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Income
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div className="sip-left-card">
                      <label >Income from Salary</label>
                      {/* <p>₹&nbsp;{basicSalary}</p> */}
                      <input
                        type="number" min={10000} max={100000000}
                        value={incomeFromSalary}
                        onChange={(e) => setIncomeFromSalary(parseInt(e.target.value))}
                      />
                    </div>

                    <div className="sip-left-card">
                      {/* <p>{yearsOfService}&nbsp;Yr</p> */}
                      <label >Interest Income form Bonds </label>
                      <input
                        type="number" min={0} max={50}
                        value={interestIncomeFromBonds}
                        onChange={(e) => setInterestIncomeFromBonds(parseInt(e.target.value))}
                      />
                    </div>

                    <div className="sip-left-card">
                      {/* <p>{yearsOfService}&nbsp;Yr</p> */}
                      <label >Annuity from NPS</label>
                      <input
                        type="number" min={0} max={50}
                        value={annuityfromNPS}
                        onChange={(e) => setAnnuityfromNPS(parseInt(e.target.value))}
                      />
                    </div>

                    <div className="sip-left-card">
                      {/* <p>{yearsOfService}&nbsp;Yr</p> */}
                      <label >Income from Other Sources</label>
                      <input
                        type="number" min={0} max={50}
                        value={incomeFromOtherSources}
                        onChange={(e) => setIncomeFromOtherSources(parseInt(e.target.value))}
                      />
                    </div>
                    <label>Total Income: <span>₹&nbsp;{totalIncome}</span></label>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Capital Gains Calculation
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div className="sip-left-card">
                      {/* <p>{yearsOfService}&nbsp;Yr</p> */}
                      <label >Short Term Capital Gains via SWP from Mutual Funds </label>
                      <input
                        type="number" min={0} max={50}
                        value={shortTermCapitalGains}
                        onChange={(e) => setShortTermCapitalGains(parseInt(e.target.value))}
                      />
                    </div>

                    <div className="sip-left-card">
                      <label >Long Term Capital Gains</label>
                      <input
                        type="number" min={0} max={50}
                        value={longTermCapitalGains}
                        onChange={(e) => setLongTermCapitalGains(parseInt(e.target.value))}
                      />
                    </div>
                    <label>Short Term Capital Gains Tax: <span>₹&nbsp;{shortTermCapitalGainsTax}</span></label>
                    <label>Long Term Capital Gains Tax: <span>₹&nbsp;{longTermCapitalGainsTax}</span></label>
                    <label>Total Capital Gains Tax: <span>₹&nbsp;{totalCapitalGainsTax}</span></label>

                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Computation of Taxable Income as per Old Tax Regime
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div className="sip-left-card">
                      <label >Section  80 C</label>
                      <input
                        type="number" min={0} max={50}
                        value={Section80C}
                        onChange={(e) => setSection80C(parseInt(e.target.value))}
                      />
                    </div>
                    <div className="sip-left-card">
                      <label >Donation to charity u/s 80G</label>
                      <input
                        type="number" min={0} max={50}
                        value={Donationtocharity}
                        onChange={(e) => setDonationtocharity(parseInt(e.target.value))}
                      />
                    </div>
                    <div className="sip-left-card">
                      <label >Interest on Educational Loan u/s 80E</label>
                      <input
                        type="number" min={0} max={50}
                        value={InterestonEducationalLoan}
                        onChange={(e) => setInterestonEducationalLoan(parseInt(e.target.value))}
                      />
                    </div><div className="sip-left-card">
                      <label >Interest on deposits in saving account u/s 80TTA/TTB</label>
                      <input
                        style={{ border: sty }}
                        type="number" min={0} max={50000}
                        value={Interestondepositsinsavingaccount}
                        onChange={(e) => setInterestondepositsinsavingaccount(parseInt(e.target.value))}
                      />
                    </div>
                    <div className="sip-left-card">
                      <label >Section  80 D</label>
                      <input
                        style={{ border: sty2 }}

                        type="number" min={0} max={50}
                        value={Section80D}
                        onChange={(e) => setSection80D(parseInt(e.target.value))}
                      />
                    </div>
                    <div className="sip-left-card">
                      <label >HRA</label>
                      <input
                        type="number" min={0} max={50}
                        value={HRA}
                        onChange={(e) => setHRA(parseInt(e.target.value))}
                      />
                    </div>
                    <div className="sip-left-card">
                      <label >Section 80 CCD</label>
                      <input
                        type="number" min={0} max={50000}
                        value={Section80CCD}
                        onChange={(e) => setSection80CCD(parseInt(e.target.value))}
                      />
                    </div>
                    <label>Total Deductions <span>₹&nbsp;{totalDeductions}</span></label>
                    <label>Total Taxable Income after Standard Deduction as per Old Tax Regime <span>₹&nbsp;{totalOldTaxRegime}</span></label>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={calculate}>Calculate</button>


          </div>
          <div className="sip-right">
            <p className='main'>Tax Liability</p>
            <div className="sip-right-body">
              <div className="sip-right-card">
                <p>Old Tax Regime</p>
                <p><span>₹{old.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
                <p>Amortized Monthly Tax<br /><span>₹{amortizedOld.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
              </div>
              <div className="sip-right-card">
                <p>New Tax Regime</p>
                <p><span>₹{newt.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
                <p>Amortized Monthly Tax<br /><span>₹{amortizedNewt.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="sip-bottom">
          <div className="sip-text">
            <h3>What is an Income Tax Calculator?</h3>
            <p>An Income Tax Calculator is a tool that helps you estimate your tax liability based on your income, deductions, and the applicable tax rates. This calculator simplifies the process of determining how much tax you owe, allowing you to plan your finances better and ensure you’re taking full advantage of available tax deductions and exemptions.
            </p>

            <h3>Why Use the Wise Funds Income Tax Calculator?
            </h3>
            <p>The Wise Funds Income Tax Calculator is designed to provide you with a clear and accurate estimate of your tax obligations. </p>

            <h3>Benefits of Using the Wise Funds Calculator
            </h3>

            <ol>
              <li><b>Accurate Calculations: </b> Obtain a precise calculation of your tax liability based on your income, eligible deductions, and the latest tax slabs.</li>
              <li><b>Tax Planning: </b> Explore various scenarios by adjusting your income and deductions, helping you make informed decisions to minimize your tax burden.
              </li>
              <li><b>Time-Saving:
              </b>Avoid manual calculations and get instant results, saving you time and effort.</li>
              <li><b>Compliance: </b>Stay compliant with tax laws by accurately calculating your tax liability and understanding the deductions and exemptions available to you.
              </li>
              <li><b>User-Friendly: </b>Our intuitive interface ensures that anyone, regardless of their familiarity with tax calculations, can use the calculator with ease.</li>
            </ol>

            <h3>Frequently Asked Questions (FAQ)
            </h3>

            <h5>1. How does the Income Tax Calculator work?
            </h5>
            <p>The calculator requires you to input your total income, eligible deductions, and other relevant information. It then calculates your tax liability based on the latest tax slabs.</p>
            <h5>2. Can I use this calculator for different income sources?
            </h5>
            <p>Yes, the calculator can estimate tax liability for various income sources, including salary, business income, rental income, and more.</p>

            <h5>3. Does the calculator account for the latest tax laws?
            </h5>
            <p>Yes, the Wise Funds Income Tax Calculator is regularly updated to reflect the latest tax laws and regulations.
            </p>

            <h5>4. Can this calculator help me find ways to reduce my tax liability?
            </h5>
            <p>Yes, by inputting different scenarios, the calculator can help you explore potential deductions and exemptions to minimize your tax liability.
            </p>

            <h5>5. Is the Income Tax Calculator free to use?
            </h5>
            <p>Yes, the Wise Funds Income Tax Calculator is completely free to use.
            </p>
          </div>
          <List />

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Gratuity