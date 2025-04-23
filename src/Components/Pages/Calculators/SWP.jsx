import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import { pmt, fv } from 'financial'
import List from "./List"
import { Helmet } from 'react-helmet'
import { toast, ToastContainer } from 'react-toastify'

const SWP = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [expectedweightedreturnoffunds, setexpectedweightedreturnoffunds] = useState(8);
  const [longterm, setLongterm] = useState(0);
  const [period, setPeriod] = useState("");
  const [shortterm, setShortTerm] = useState(0);
  const [valueAfterWithdrawal, setValueAfterWithdrawal] = useState(0);
  const [capitalGainsTax, setCapitalGainsTax] = useState(0);
  const [initialCorpus, setInitialCorpus] = useState(33600000);
  const [assumedInitialNav, setAssumedInitialNav] = useState(10);
  const [swpStartsAfter, setSwpStartsAfter] = useState(3);
  // const [annualSwpRate, setAnnualSwpRate] = useState(0);
  const [swpStarts, setSwpStarts] = useState(0);
  const [netCorpus, setNetCorpus] = useState(0);
  const [totalWithdrawal, setTotalWithdrawal] = useState(0);
  const [netGains, setNetGains] = useState(0);
  const [monthlySwp, setMonthlySwp] = useState(0);
  const [data, setData] = useState([])


  let monthlyswp, rate, cumulativeUnitsLeft, monthlywithdrawal, unitswithdrawn, monthlycapitalgains, annualcapitalgains = 0, capitalgainstax, per, totalwithdrawal = 0, netgains, longTerm = 0;
  let nav = 10;
  let initialUnits = initialCorpus / 10;
  let valueafterwithdrawal;
  // let expectedweightedreturnoffunds = 8 / 100;
  let annualSwpRate = 2 / 100
  let after = swpStartsAfter * 12;
  let total = 108 - swpStartsAfter * 12
  let futureValue;
  let serialno = 0;

  const calculate = () => {

    // monthly swp
    // monthlyswp = annualSwpRate * (initialCorpus / 12);
    // setMonthlySwp(monthlyswp);

    if (initialCorpus > 1000000000) {
      toast.error("Initial corpus cannot be greater then 1000000000");
      setInitialCorpus(0);
      return
    } else if (expectedweightedreturnoffunds > 100) {
      toast.error("Expected Weighted Return of Funds cannot be greater then 100");
      setInitialCorpus(0);
      return
    } else {

      console.log(total);

      const rate = 0.08 / 12 * 0.948879293458304;
      const nper = 1;
      const newData = [];
      // amount after 15 years
      for (let i = 0; i < 120; i++) {

        //  serial no
        serialno += 1;
        console.log("Serial No: " + serialno);

        // nav
        if (serialno == 1) {
          nav = 10;
        }
        else {
          nav = nav * Math.pow(1 + rate, nper);
        }
        // nav = nav.toFixed(2)
        // nav = (expectedweightedreturnoffunds / 10) * (0.948879293458304 / 12) + nav;
        console.log("nav: " + nav);

        // monthly withdrawal
        if (serialno > after) {
          monthlywithdrawal = monthlySwp;

        } else {
          monthlywithdrawal = 0;
        }
        // console.log("Monthly Withdrawal: " + monthlywithdrawal);

        // units withdrawn
        unitswithdrawn = monthlywithdrawal / nav;
        console.log("units withdrawn: " + unitswithdrawn);

        // cumulative units left 
        if (serialno == 1) {
          cumulativeUnitsLeft = initialUnits - unitswithdrawn;
        } else {
          cumulativeUnitsLeft = cumulativeUnitsLeft - unitswithdrawn;
        }
        console.log("cumulative Units Left: " + cumulativeUnitsLeft);

        // value after withdrawal 
        // else {
        valueafterwithdrawal = cumulativeUnitsLeft * nav;
        // }
        console.log("value after withdrawal: " + valueafterwithdrawal);

        // monthly capital gains
        monthlycapitalgains = unitswithdrawn * (nav - 10);
        console.log("monthly capital gains: " + monthlycapitalgains);

        // annual capital gains
        annualcapitalgains += monthlycapitalgains;
        console.log("annual capital gains: " + annualcapitalgains);

        // total withdrawal
        totalwithdrawal += monthlywithdrawal;
        // console.log("total withdrawal: " + totalwithdrawal);

        setNetCorpus(valueafterwithdrawal);

        netgains = valueafterwithdrawal + totalwithdrawal - initialCorpus
        setNetGains(netgains);

        // capital gains tax
        if (serialno % 12 == 0) {
          // capitalgainstax = (20 / 100) * annualcapitalgains;
          if (annualcapitalgains < 125000) {
            capitalgainstax = 0;
          } else {
            capitalgainstax = (annualcapitalgains - 125000) * (12.5 / 100);
          }
        } else {
          capitalgainstax = 0;
        }
        console.log(capitalgainstax)
        // longterm
        longTerm += capitalgainstax;
        setLongterm(longTerm);
        console.log(longterm);

        // if (valueafterwithdrawal < 0) {
        //   break;
        // } 

        newData.push({
          a: serialno,
          b: monthlywithdrawal,
          c: valueafterwithdrawal,
          d: capitalgainstax,
        });
      }
      setData(newData);
    }

  };



  return (
    <>
      <ToastContainer />
      <Helmet>
        <meta charSet="utf-8" />
        <title> SWP Calculator | Plan Systematic Withdrawals from Mutual Funds</title>
        <link rel="canonical" href="https://www.wisefunds.com/swp-calculator" />
        <meta name="description" content="Use our SWP Calculator to calculate the monthly withdrawals from your mutual fund investments. Plan your cash flow with ease and precision." />
        <meta name="keywords" content="SWP calculator, systematic withdrawal plan, mutual fund SWP, regular withdrawals, financial planning, retirement income" />
      </Helmet>
      <Header />
      <div className="sip">
        <div class="four" >
          <h3>SWP <em>Calculator</em></h3>
        </div >

        <div className="sip-body">
          <div className="sip-left">
            <label>Initial Corpus		</label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{initialCorpus}</p> */}
              <input type="number" min={1000} max={1000000000} value={initialCorpus} onChange={(e) => setInitialCorpus(parseInt(e.target.value))} />
              <input type="range" min={1000} max={1000000000} value={initialCorpus} onChange={(e) => setInitialCorpus(parseInt(e.target.value))} />
            </div>

            {/* <label>Assumed Initial NAV</label>
            <div className="sip-left-card">
              <p>{assumedInitialNav}</p>
              <input type="range" value={assumedInitialNav} onChange={(e) => setAssumedInitialNav(parseInt(e.target.value))} />
            </div> */}

            <label>Expected Weighted Return of Funds</label>
            <div className="sip-left-card">
              {/* <p>{expectedweightedreturnoffunds}</p> */}
              <input type="number" value={expectedweightedreturnoffunds} onChange={(e) => setexpectedweightedreturnoffunds(parseInt(e.target.value))} />

              <input type="range" value={expectedweightedreturnoffunds} onChange={(e) => setexpectedweightedreturnoffunds(parseInt(e.target.value))} />
            </div>

            {/* <label>Annual SWP Rate</label>
            <div className="sip-left-card">
              <p>{annualSwpRate}&nbsp;%</p>
              <input type="range" value={annualSwpRate} onChange={(e) => setAnnualSwpRate(parseInt(e.target.value))} />
            </div> */}

            <label>Monthly SWP</label>
            <div className="sip-left-card">
              {/* <p>{monthlySwp}&nbsp;</p> */}
              <input type="number" min={1000} max={10000000} value={monthlySwp} onChange={(e) => setMonthlySwp(parseInt(e.target.value))} />
              <input type="range" min={1000} max={10000000} value={monthlySwp} onChange={(e) => setMonthlySwp(parseInt(e.target.value))} />
            </div>

            <label>Swp Starts After (years)</label>
            <div className="sip-left-card">
              {/* <p>{swpStartsAfter}&nbsp;Yr</p> */}
              <input type="number" min={1} max={40} value={swpStartsAfter} onChange={(e) => setSwpStartsAfter(parseInt(e.target.value))} />

              <input type="range" min={1} max={40} value={swpStartsAfter} onChange={(e) => setSwpStartsAfter(parseInt(e.target.value))} />

            </div>

            {/* <label>Net Corpus at the End of 10 Years</label>
            <div className="sip-left-card">
              <p>₹&nbsp;{netCorpus}</p>
              <input type="range" value={netCorpus} onChange={(e) => setNetCorpus(parseInt(e.target.value))} />
            </div> */}
            {/* 
            <label>Total Withdrawal</label>
            <div className="sip-left-card">
              <p>₹&nbsp;{totalWithdrawal}</p>
              <input type="range" value={totalWithdrawal} onChange={(e) => setTotalWithdrawal(parseInt(e.target.value))} />
            </div> */}

            {/* <label>Net Gains</label>
            <div className="sip-left-card">
              <p>₹&nbsp;{netGains}</p>
              <input type="range" value={netGains} onChange={(e) => setNetGains(parseInt(e.target.value))} />
            </div> */}

            <button onClick={calculate}>Calculate</button>

          </div>

          <div className="sip-right">

            <p className='main'>Net Corpus at the End of 10 Years<span>₹{netCorpus.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            {/* <p>Total Withdrawal<span>₹{totalWithdrawal.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p> */}
            <p>Net Gains<span>₹{netGains.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>Capital Gains Tax Incurred in 10 Years</p>
            <p>Short Term<span>₹{shortterm.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>Long Term<span>₹{longterm.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            {/* <p>Period<span>{period}</span></p>
            <p>Value after Withdrawal<span>₹{valueAfterWithdrawal.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>Capital Gains Tax<span>₹{capitalGainsTax.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p> */}
          </div>
        </div>

        <div className="sip-table swp">
          <table>
            <thead>
              <tr>
                <td>S. No.</td>
                <td>Monthly Withdrawal</td>
                <td>Value After Withdrawal</td>
                <td>Capital Gains Tax</td>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.a}</td>
                  <td>₹&nbsp;{Math.round(item.b).toLocaleString('en-IN', {
                    minimumFractionDigits: 2, maximumFractionDigits: 2
                  })}</td>
                  <td>₹&nbsp;{Math.round(item.c).toLocaleString('en-IN', {
                    minimumFractionDigits: 2, maximumFractionDigits: 2
                  })}</td>
                  <td>₹&nbsp;{Math.round(item.d).toLocaleString('en-IN', {
                    minimumFractionDigits: 2, maximumFractionDigits: 2
                  })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="sip-bottom">
          <div className="sip-text">
            <h3>SWP(Systematic Withdrawal Plan) Calculator
            </h3>
            <p>
              An SWP (Systematic Withdrawal Plan) calculator is designed to help investors plan and manage their withdrawals from mutual fund investments. This tool allows you to determine how much money you can withdraw monthly while maintaining the stability of your investment over time. Whether you’re planning for retirement or seeking a steady income stream, an SWP calculator is an invaluable resource.
            </p>

            <h3> What Is an SWP Calculator?
            </h3>
            <p>An SWP (Systematic Withdrawal Plan) calculator is designed to help investors plan and manage their withdrawals from mutual fund investments. This tool allows you to determine how much money you can withdraw monthly while maintaining the stability of your investment over time. Whether you’re planning for retirement or seeking a steady income stream, an SWP calculator is an invaluable resource.
            </p>

            <h3>Understanding SWP: The Basics
            </h3>
            <p> A Systematic Withdrawal Plan is a financial strategy allowing investors to withdraw a fixed amount of money from their mutual fund investments at regular intervals. Unlike lump sum withdrawals, which can drain your investments quickly, SWP ensures a steady flow of income, making it ideal for retirees or anyone seeking a regular cash flow.
            </p>


            <h3>How Does an SWP Calculator Work?
            </h3>
            <p>An SWP calculator operates by taking into account your investment amount, the expected rate of return, the duration of the investment, and the frequency of withdrawals. It then computes how these variables interact to give you a clear picture of your financial future.
            </p>

            <h3>Customizing Your SWP Plan
            </h3>
            <p>One of the great features of a Systematic Withdrawal Plan calculator is its ability to customize your plan according to your needs and portfolio. You can experiment with different withdrawal amounts and frequencies to see how they affect your investment in a long run.
            </p>

            <h3>Why Use a Wise Funds SWP Calculator?
            </h3>
            <p>The Wise Funds SWP calculator stands out due to its accuracy and user-friendly interface. It’s tailored to meet the unique needs of investors.
            </p>

            <h3>Advantages of Wise Funds SWP Calculators
            </h3>
            <p>Using the Wise Funds SWP calculator offers several advantages, such as:
            </p>
            <ul>
              <li>Accurate Forecasting for Future Planning: The Wise Funds SWP calculator provides estimates, helping you plan your future with confidence. Whether you're planning for retirement or aiming to create a steady income stream, this tool gives you the clarity you need.
              </li>
              <li>Tailored Solutions for Individual Needs: No two investors are alike, and the Wise Funds SWP calculator recognizes this. It allows you to input personalized data, ensuring that the results align with your specific financial situation.
              </li>
              <li>Simplifying Complex Calculations: Financial calculations can be horrifying, but the Wise Funds SWP calculator simplifies them. With just a few data & Clicks, you can obtain detailed insights into your investment’s performance and withdrawal strategy.
              </li>
              <li>Benefits of Using an SWP Calculator: An SWP calculator offers numerous benefits, making it an essential tool for any investor.
              </li>
              <li>Financial Planning with Confidence: With an SWP calculator, you can plan your finances with greater confidence. By understanding how much you can withdraw and for how long, you gain control over your financial future.
              </li>
              <li>Ensuring Steady Income Post-Retirement: For retirees, a SWP calculator is a lifesaver. It ensures that you have a regular & fixed income stream without the risk of draining your portfolio too quickly.
              </li>
              <li>Avoiding Over-Withdrawal Risks: One of the risks of withdrawing from your investments is taking out too much too soon. A SWP calculator helps you avoid this pitfall by providing clarity of how your withdrawals will impact your investment in a long term.
              </li>
            </ul>

          </div>
          <List />

        </div>


      </div>
      <Footer />
    </>
  )
}

export default SWP