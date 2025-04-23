import React, { useState, useEffect } from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import Title from "../../Molecules/Title/Title"
import "./Calculators.scss"
import { pmt, fv, pv } from 'financial'
import List from './List'
import { Helmet } from 'react-helmet'

const ChildMarrige = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [costOfMarrige, setcostOfMarrige] = useState(2000000);
  const [childAge, setChildAge] = useState(10);
  const [childMarrigeAge, setChildMarrigeAge] = useState(28);
  const [inflation, setInflation] = useState(6);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [sip, setSIP] = useState(0);
  const [lumpsum, setLumpsum] = useState(0);
  const [costOfMarrigeInFuture, setcostOfMarrigeInFuture] = useState(0);

  let costofmarrigeinfuture, inflationrate, yearsleft;
  const calculate = () => {
    // const futureValue = 10 * Math.pow(1 + per / (0.00113865515), 1);

    // console.log("nav: " + futureValue);
    yearsleft = childMarrigeAge - childAge
    inflationrate = inflation / 100;
    const expectedrate = expectedReturn / 100;
    const costofmarrigeinfuture = costOfMarrige * Math.pow(1 + inflationrate, yearsleft);
    const lump = pv(expectedrate, yearsleft, 0, -costofmarrigeinfuture);
    const siprequired = pmt(expectedrate / 12, childAge * 12, 0, -costofmarrigeinfuture)
    setLumpsum(lump);
    setSIP(siprequired);

    // costofmarrigeinfuture = fv(inflationrate, yearsleft, -costOfMarrige);
    console.log(costofmarrigeinfuture)
    setcostOfMarrigeInFuture(costofmarrigeinfuture)

  };

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Child Marriage Planning Calculator | Plan Financially for Your Child’s Wedding
        </title>
        <link rel="canonical" href="https://www.wisefunds.com/child-marrige-calculator" />
        <meta name="description" content=" Use our Child Marriage Planning Calculator to estimate how much you need to save for your child’s wedding. Plan your savings and secure your financial future." />
        <meta name="keywords" content="child marriage planning calculator, wedding planning, financial planning, child marriage, savings plan, future expenses" />
      </Helmet>
      <Header />
      <div className="sip">
        <div class="four" >
          <h3>Child Marrige Planning <em>Calculator</em></h3>
        </div >
        <div className="sip-body">
          <div className="sip-left">

            <label>Current cost of Marriage</label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{costOfMarrige}</p> */}
              <input type="number" min={100000} max={100000000} value={costOfMarrige} onChange={(e) => setcostOfMarrige(parseInt(e.target.value))} />
              <input type="range" min={100000} max={100000000} value={costOfMarrige} onChange={(e) => setcostOfMarrige(parseInt(e.target.value))} />
            </div>

            <label>Child Age</label>
            <div className="sip-left-card">
              {/* <p>{childAge}</p> */}
              <input type="number" min={18} max={40} value={childAge} onChange={(e) => setChildAge(parseInt(e.target.value))} />
              <input type="range" min={18} max={40} value={childAge} onChange={(e) => setChildAge(parseInt(e.target.value))} />
            </div>

            <label>Child Marriage Age</label>
            <div className="sip-left-card">
              {/* <p>{childMarrigeAge}</p> */}
              <input type="number" min={18} max={40} value={childMarrigeAge} onChange={(e) => setChildMarrigeAge(parseInt(e.target.value))} />
              <input type="range" min={18} max={40} value={childMarrigeAge} onChange={(e) => setChildMarrigeAge(parseInt(e.target.value))} />
            </div>

            <label>Inflation</label>
            <div className="sip-left-card">
              {/* <p>{inflation}&nbsp;%</p> */}
              <input type="number" value={inflation} onChange={(e) => setInflation(parseInt(e.target.value))} />
              <input type="range" value={inflation} onChange={(e) => setInflation(parseInt(e.target.value))} />
            </div>

            <label>expected rate of return</label>
            <div className="sip-left-card">
              {/* <p>{expectedReturn}&nbsp;</p> */}
              <input type="number" min={1} max={40} value={expectedReturn} onChange={(e) => setExpectedReturn(parseInt(e.target.value))} />
              <input type="range" min={1} max={40} value={expectedReturn} onChange={(e) => setExpectedReturn(parseInt(e.target.value))} />
            </div>

            <label>No of year left for marriage : {childMarrigeAge - childAge}</label>
            <label>Cost Of Marriage in future: {costOfMarrigeInFuture.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</label>
            <button onClick={calculate}>Calculate</button>

          </div>

          <div className="sip-right">
            <p className='main'>SIP Required<span>₹{sip.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>Lumpsum Required<span>₹{lumpsum.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
          </div>
        </div>

        <div className="sip-bottom">
          <div className="sip-text">
            <h3>What is a Child Marriage Planning Calculator?
            </h3>
            <p>A Child Marriage Planning Calculator is a financial tool designed to help parents estimate the amount of savings required to fund their child's wedding in the future. Considering factors like the estimated cost of the wedding, the time horizon, and the expected rate of return on investments, this calculator helps you plan and save systematically to ensure you have enough funds when the time comes.
            </p>

            <h3>Why Use the Wise Funds Child Marriage Planning Calculator?
            </h3>
            <p>The Wise Funds Child Marriage Planning Calculator is crafted to assist parents in making informed financial decisions regarding their child's wedding. By providing a clear estimate of the required savings, it enables you to plan effectively and avoid financial stress in the future.</p>

            <h3>Benefits of Using the Wise Funds Calculator
            </h3>

            <ol>
              <li><b>Accurate Cost Estimation: </b>Get a realistic estimate of how much money you'll need to save for your child's wedding, taking inflation into account.
              </li>
              <li><b>Systematic Planning: </b>Plan your savings journey by determining how much to set aside each month to reach your goal.
              </li>
              <li><b>Customizable Scenarios:</b>Adjust the wedding cost, time horizon, and expected returns to see how these factors affect your savings plan.
              </li>
              <li><b>Peace of Mind: </b>Knowing that you’re financially prepared for your child’s wedding gives you peace of mind.
              </li>
              <li><b>Long-Term Financial Security: </b>Ensure that your savings are on track to meet your financial goals without compromising other financial commitments.
              </li>

            </ol>

            <h3>Frequently Asked Questions (FAQ)
            </h3>

            <h5>1. What inputs do I need for the Child Marriage Planning Calculator?
            </h5>
            <p>You need to input the estimated cost of the wedding, the number of years until the wedding, and the expected rate of return on your savings or investments.</p>

            <h5>2. How does inflation affect my savings plan?</h5>
            <p>The calculator accounts for inflation by adjusting the estimated wedding cost, helping you save enough to meet future expenses.
            </p>

            <h5>3. Can I use the calculator for more than one child?</h5>
            <p>Yes, you can use the calculator to plan for the weddings of multiple children by creating separate plans for each.
            </p>

            <h5>4. What if I start saving late?</h5>
            <p>If you start saving later, the calculator will show you how much more you need to save each month to reach your goal.
            </p>

            <h5>5. How often should I review my savings plan?
            </h5>
            <p>It’s advisable to review your savings plan annually or whenever there are significant changes in your financial situation or wedding costs.
            </p>
          </div>
          <List />

        </div>
      </div>
      <Footer />
    </>
  )
}

export default ChildMarrige