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

  const [age, setAge] = useState(0);
  const [yearofRedemption, setYearofRedemption] = useState(0);
  const [yearlyInvestment, setYearlyInvestment] = useState(0);
  const [yearOfInvesting, setYearOfInvesting] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const investingPeriod = 15;
  const Deferment = 6;
  const RateOfInterest = 8 / 100;
  let redemption;
  let interest, amt;
  let currentAmount = yearlyInvestment;

  const calculate = () => {


    redemption = yearOfInvesting + 21;
    setYearofRedemption(redemption);

    // amount after 15 years
    for (let i = 1; i < 15; i++) {
      interest = currentAmount * RateOfInterest;
      // console.log("currentAmount: " + currentAmount);
      // console.log("interest: " + interest);
      currentAmount += interest;
      // console.log("currentAmount: " + currentAmount);
      amt = currentAmount + yearlyInvestment;
      // console.log("final Amount: " + amt);
      currentAmount = amt
    }

    // amount after 21 years
    for (let j = 0; j < 7; j++) {
      interest = amt * RateOfInterest;
      // console.log("currentAmount: " + amt);
      // console.log("interest: " + interest);
      amt += interest;
      // console.log("currentAmount: " + amt);
      // amt = currentAmount + yearlyInvestment;
      // console.log("final Amount: " + amt);
      // currentAmount = amt
    }

    console.log(amt)

    setTotalAmount(amt);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SSY Calculator | Plan for Your Daughter’s Future with Sukanya Samriddhi Yojana</title>
        <link rel="canonical" href="https://www.wisefunds.com/ssy-calculator" />
        <meta name="description" content="Use our SSY Calculator to estimate the maturity value of your investments in Sukanya Samriddhi Yojana. Secure your daughter's future with accurate planning." />
        <meta name="keywords" content="SSY calculator, Sukanya Samriddhi Yojana, girl child savings, SSY returns, financial planning, daughter’s future" />
      </Helmet>
      <Header />
      <div className="sip">
        <div class="four" >
          <h3>SSY <em>Calculator</em></h3>
        </div >
        <div className="sip-body">
          <div className="sip-left">

            <label>Age</label>
            <div className="sip-left-card">
              {/* <p>{age}&nbsp;Yr</p> */}
              <input type="number" min={1} max={10} value={age} onChange={(e) => setAge(parseInt(e.target.value))} />

              <input type="range" min={1} max={10} value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
            </div>

            <label>Yearly Investment</label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{yearlyInvestment}</p> */}
              <input type="number" min={250} max={150000} value={yearlyInvestment} onChange={(e) => setYearlyInvestment(parseInt(e.target.value))} />

              <input type="range" min={250} max={150000} value={yearlyInvestment} onChange={(e) => setYearlyInvestment(parseInt(e.target.value))} />
            </div>

            <label>Year of Investing</label>
            <div className="sip-left-card">
              {/* <p>{yearOfInvesting}</p> */}
              <input type="number" min={2018} max={2030} value={yearOfInvesting} onChange={(e) => setYearOfInvesting(parseInt(e.target.value))} />

              <input type="range" min={2018} max={2030} value={yearOfInvesting} onChange={(e) => setYearOfInvesting(parseInt(e.target.value))} />
            </div>

            {/* <label>Investing Period: 15</label>
            <label>Year Of Redemption: 21</label>
            <label>Rate of Interest: 8</label>
            <label>Year of Redemption: {yearofRedemption}</label> */}

            <button onClick={calculate}>Calculate</button>

          </div>
          <div className="sip-right">
            <p className='main'>Total Amount<span>₹{totalAmount.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
            <p>Investing Period: <span>15</span></p>
            <p>Year Of Redemption: <span>21</span></p>
            <p>Rate of Interest: <span>8</span></p>
            <p>Year of Redemption: <span>{yearofRedemption}</span></p>
          </div>
        </div>

        <div className="sip-bottom">
          <div className="sip-text">
            <h3>Sukanya Samriddhi Yojana Calculator (SSY)
            </h3>
            <p>
              Sukanya Samriddhi Yojana (SSY) is a savings scheme launched back in 2015 as part of the Government initiative Beti Bachao, Beti Padhao campaign. This scheme enables guardians to open a savings account for their girl child with an authorised commercial bank or India Post branch.
            </p>
            <p>commercial bank or India Post branch.
              As of 1st Sept 2024, SSY accounts offer 8.20% rate of interest. A Sukanya Samriddhi Yojana calculator can help you determine the returns you receive as per the invested amount and tenure.
            </p>

            <h3> Who Can Use This Calculator?
            </h3>
            <p>The first step to take advantage of the SSY calculator is to check whether the eligibility criteria of the scheme is fulfilled. SSY account can be opened by legal guardians of the girl child provided the following conditions are met:-
            </p>

            <ul>
              <li>The girl must be an Indian resident</li>
              <li> The girl shouldn’t be more than 10 years of age.</li>
              <li> Upto two accounts can be opened in a family with two girl children. Additionally, the legal guardians will also need to submit the following documents to be able to start the deposits in the scheme:-</li>
              <li> Duly filled scheme opening document which covers the basic personal details of the account holder and the girl child for whom the account is being opened.</li>
              <li> Birth certificate of the girl child.</li>
              <li> Depositor’s identification documents as well as a valid address proof.</li>
              <li> Medical certificate in the case of the birth of multiple children under a single birth order.</li>
              <li> Additional documents requested by the concerned authority.</li>

            </ul>

            <h3>How can an SSY calculator help you?
            </h3>

            <p>Often parents of the girl child, look to do investments in the name of their child that can help meet the expenses of their daughter’s education and marriage expenses. While there are many investment avenues that can help parents achieve this, Sukanya Samriddhi Yojana has emerged as one of the most popular ones owing to the high-interest rate as well as the tax benefits it offers. Under Section 80 C of the Income Tax Act, 1961, individuals can claim tax exemption up to Rs 1.5 Lakh from the amount contributed to SSY account.
            </p>

            <p>Moreover, the interest income generated from investing is tax-exempt as well. Tax benefits are extended to the maturity amount too. That being said, parents who have zeroed in on using Sukanya Samriddhi as the preferred investment option, now need a tool to calculate the total amount of maturity that they would receive. The manual calculation is cumbersome and prone to error. This is where the Sukanya Samriddhi Calculator comes in handy. According to the maturity amount, investors can make adjustments to regular contributions to reach the desired corpus. The calculator is free to use and can generate error-free output for multiple iterations. The Sukanya Samriddhi Yojana is a long-term investment scheme that can generate high ROI. You have to make a minimum contribution each year to keep the account active. Hence, using a Sukanya Samriddhi Yojana calculator online is beneficial to have an overall assessment of your investments and returns. Few benefits of SSY calculators include:
            </p>

            <ul>
              <li>Shows you the year of maturity for your SSY account.</li>
              <li>Displays the amount you receive upon maturity.</li>
              <li>Helps you plan your investment portfolio more effectively.</li>
            </ul>

            <h3>How Does The SSY Calculator Work?</h3>
            <p>The Sukanya Samriddhi Yojana offers an interest rate of 8.5% per annum. The tenure for maturity for the amount is 21 years. It is important to note that it is important for individuals to make at least one contribution a year to keep the scheme alive till 14 years are completed. The individual may choose to not make contributions in the SSY account between a year and year 21 if they so wish. However, the previous investments made into the account will continue earning on the prevailing interest rate. The final amount is hence calculated based on your net contribution plus interest earned. The Sukanya Yojana calculator uses the following formula to generate results:-
            </p>
            <p>A = P (1 + r/n) ^ nt</p>
            <p>Where</p>
            <table>
              <tr>
                <td>A</td>
                <td>Compound interest</td>
              </tr>

              <tr>
                <td>P</td>
                <td>Principal amount</td>
              </tr>

              <tr>
                <td>R</td>
                <td>Rate of interest</td>
              </tr>

              <tr>
                <td>N</td>
                <td>Number of times interest compounds in a year</td>
              </tr>

              <tr>
                <td>T</td>
                <td>Number of years</td>
              </tr>

            </table>

            <h3>How to use Wise Funds’s SSY Calculator Online?
            </h3>
            <p>Just enter the investment amount per year, age of your girl child, and investment starting year. The calculator will automatically display the maturity year and the amount you receive upon maturity after you enter the details.
            </p>
            <p>Advantages of using Wise Funds Sukanya Samriddhi Scheme Calculator
            </p>
            <p>Using the Wise Funds Sukanya Samriddhi Yojana online calculator provides you with the following benefits –
            </p>

            <ul>
              <li>The Wise Funds Sukanya Yojana calculator is free to use and can generate error-free output for multiple iterations.
              </li>
              <li>The calculator generates output within seconds.
              </li>
              <li>The tool is available online on Wise Funds ‘s website and does not require downloading a utility</li>
              <li>You don’t have to sign up or login to use the calculator, it does not ask any user information except the input fields.
              </li>
              <li>There is no limit to the number of times you can use the SSY calculator.
              </li>
              <li>The calculations are made based on the prevailing SSY interest rates for higher accuracy; individuals don’t have to manually enter interest rates.
              </li>
              <li>The SSY Calculator is up to date and any change implemented in the scheme itself, that affects the calculation of the corpus, will get auto reflected in the workings of the Sukanya Samriddhi calculator.</li>
              <li>The tool works equally efficiently on all devices.
              </li>
            </ul>


            <h3>How Can I Use The Corpus Accumulated From SSY Contributions?
            </h3>
            <p>Upon reaching maturity, the entire corpus accumulated can be withdrawn by the girl child. This can be done after the following documents are produced:-</p>

            <ul>
              <li>Withdrawal application form</li>
              <li>ID Proof and valid address proof</li>
              <li>Citizenship documents</li>
            </ul>

            <p>The corpus withdrawn can be used to meet the expenses of higher education of the girl child, provided she has cleared 10th Standard and reached 18 years of age. The amount can only be used to meet fee and admission charges. To prove that the amount is being utilised for educational purposes, the depositors are required to submit University admission documents as well as fee receipts.
              Premature withdrawal to meet marriage expenses is allowed, provided the girl is 18 and above. The girl will be required to produce an affidavit that states that she is a major. “Looking to invest? Open an account with Wise Funds and start investing in direct Mutual Funds for free”
            </p>

            <h3>FAQs</h3>
            <h5>Who is eligible for a Sukanya Samriddhi Yojana Account?
            </h5>
            <p>Guardians can open an account on behalf of their girl child anytime between when she is born and before she reaches the age of 10.
            </p>

            <h5>How many accounts can be created under SSY?
            </h5>
            <p>Only one SSY account is permitted for a girl child. The number of accounts guardians can create is restricted to two for each of their girl children. Exceptions are only in case of twins or triplets.
            </p>

            <h5>What is the minimum amount required to open an SSY account?
            </h5>
            <p>Individuals can open an account with as low as Rs. 250. They also have to invest a minimum of Rs. 250 to keep the account active.
            </p>

            <h5>What happens when I do not make any deposits?</h5>
            <p>An SSY account is rendered inactive if you don’t make any deposits. However, you can revive your account by paying a penalty charge of Rs. 50.
            </p>

            <h5>What is the maximum amount that I can deposit in a year?
            </h5>
            <p>The maximum amount that you can deposit per year in a Sukanya Samriddhi Yojana account is Rs. 1.5 Lakh.
            </p>

            <h5>What is the maturity period of an SSY account?
            </h5>
            <p>The maturity period of an SSY account is 21 years. However, you only have to make deposits for 14 years. The deposited corpus will earn interest between the 14th and 21st year. Note that an SSY account will be terminated once a girl reaches 21 years of age or gets married, whichever is earlier.
            </p>

            <h5>Does a Sukanya Samriddhi Yojana account provide income tax benefits?
            </h5>
            <p>Yes. SSY accounts provide income tax benefit of up to Rs. 1.5 Lakh under Section 80C.
            </p>

            <h5>Can an accountholder prematurely withdraw from an SSY account?
            </h5>
            <p>Yes. An account holder (the girl) will be able to withdraw from her account once she reaches 18 years of age. The account holder can only withdraw 50% of the accumulated amount once after she reaches this specified age only for the purpose of higher education.
            </p>

            <h5>Can an SSY account be closed before maturity?
            </h5>
            <p>Yes. A Sukanya Samriddhi Yojana account can be closed in the event of the account holder's death or for the treatment of life-threatening diseases, the sanction of which needs to be authorised by the Central Government.
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