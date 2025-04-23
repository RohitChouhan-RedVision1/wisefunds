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

  const [basicSalary, setBasicSalary] = useState(0);
  const [yearsOfService, setYearsOfService] = useState(0);
  const [gratuity, setGratuity] = useState(0);

  const calculateGratuity = () => {

    if (yearsOfService < 5) {
      toast.error("You must have at least 5 years of service to be eligible for gratuity");
      setGratuity(0);
      return
    } else {
      let amount = basicSalary * yearsOfService * (15 / 26);
      setGratuity(amount);
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gratuity Calculator | Calculate Your Gratuity Benefits
        </title>
        <link rel="canonical" href="https://www.wisefunds.com/gratuity-calculator" />
        <meta name="description" content="Estimate your gratuity amount with our Gratuity Calculator. Plan your post-retirement finances by understanding how much gratuity you’re entitled to receive." />
        <meta name="keywords" content="gratuity calculator, gratuity benefits, retirement planning, employee benefits, gratuity calculation, financial planning" />
      </Helmet>
      <Header />
      <ToastContainer />
      <div className="sip">
        <div class="four" >
          <h3>Gratuity <em>Calculator</em></h3>
        </div >
        <div className="sip-body">
          <div className="sip-left">

            <label >Basic + DA (per month )</label>
            <div className="sip-left-card">
              {/* <p>₹&nbsp;{basicSalary}</p> */}
              <input
                type="number" min={10000} max={100000000}
                value={basicSalary}
                onChange={(e) => setBasicSalary(parseInt(e.target.value))}
              />
              <input
                type="range" min={10000} max={100000000}
                value={basicSalary}
                onChange={(e) => setBasicSalary(parseInt(e.target.value))}
              />
            </div>

            <label >No of year in company</label>
            <div className="sip-left-card">
              {/* <p>{yearsOfService}&nbsp;Yr</p> */}
              <input
                type="number" min={5} max={50}
                value={yearsOfService}
                onChange={(e) => setYearsOfService(parseInt(e.target.value))}
              />
              <input
                type="range" min={5} max={50}
                value={yearsOfService}
                onChange={(e) => setYearsOfService(parseInt(e.target.value))}
              />
            </div>

            {/* <label >Duration (Years)</label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(parseInt(e.target.value))}
            /> */}
            <button onClick={calculateGratuity}>Calculate</button>

          </div>
          <div className="sip-right">
            <p className='main'>Gratuity Amount <span>₹{gratuity.toLocaleString('en-IN', {
              minimumFractionDigits: 2, maximumFractionDigits: 2
            })}</span></p>
          </div>
        </div>

        <div className="sip-bottom">
          <div className="sip-text">
            <h3>What is a Gratuity Calculator?
            </h3>
            <p>A Gratuity Calculator is an online tool that helps employees calculate the gratuity amount they are eligible to receive when they leave a job after serving a minimum of five years. Gratuity is a lump-sum payment made by an employer to an employee as a token of appreciation for the services rendered. The calculator simplifies the process of determining the gratuity amount based on your salary and the number of years you've worked with the company.
            </p>

            <h3>Why Use the Wise Funds Gratuity Calculator?
            </h3>
            <p>The Wise Funds Gratuity Calculator is designed to give you a quick and accurate estimate of your gratuity amount, helping you plan for your future finances. Whether you're planning for retirement or considering a job change, this calculator provides clarity on the benefits you’re entitled to.
            </p>

            <h3>Benefits of Using the Wise Funds Calculator
            </h3>

            <ol>
              <li><b>Accurate Estimates: </b> Get a precise calculation of your gratuity amount based on your basic salary and the length of your service.</li>
              <li><b>Easy to Use: </b> Simply input your salary details and years of service to get an instant result without any complicated calculations.
              </li>
              <li><b>Financial Planning:
              </b>Use the calculator to plan for your future, especially if you're nearing retirement or considering switching jobs.</li>
              <li><b>Compliance: </b>Ensure that your gratuity calculations comply with the Payment of Gratuity Act, 1972, which governs gratuity payments in India.
              </li>
              <li><b>Peace of Mind: </b>Knowing your gratuity amount in advance helps you plan your finances and secure your future.
              </li>
            </ol>

            <h3>Frequently Asked Questions (FAQ)
            </h3>

            <h5>1. What is gratuity?
            </h5>
            <p>Gratuity is a financial benefit paid by an employer to an employee as a token of appreciation for long-term service, typically after five years of continuous employment.
            </p>
            <h5>2. How is gratuity calculated?
            </h5>
            <p>Gratuity is calculated using the formula:
              Gratuity = (Basic Salary + Dearness Allowance) × 15/26 × Number of Years of Service.
            </p>

            <h5>3. Is gratuity taxable?
            </h5>
            <p>Gratuity is tax-exempt up to a certain limit under the Income Tax Act. Any amount exceeding this limit is taxable.
            </p>

            <h5>4. Can I calculate gratuity for part-time employment?
            </h5>
            <p>Gratuity is typically calculated for full-time employees. Part-time employees may not be eligible, depending on the company’s policies.
            </p>

            <h5>5. What happens if I leave before completing five years?
            </h5>
            <p>Generally, gratuity is only payable if you have completed at least five years of continuous service with the same employer.
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