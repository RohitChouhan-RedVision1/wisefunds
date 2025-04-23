import React, {useEffect} from 'react'
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import "./Products.scss"
import mutual from "../../Images/Product/Mutual Funds.jpg"
import financial from "../../Images/Product/Financial Goal Mapping.jpg"
import fixed from "../../Images/Product/Fixed Income.jpg"
import health from "../../Images/Product/Health Insurance.jpg"
import portfolio from "../../Images/Product/Portfolio Tracking.jpg"
import life from "../../Images/Product/Life Insurance.jpg"
import { Helmet } from 'react-helmet'

const Products = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Comprehensive Financial Products | Mutual Funds, Insurance, PMS & More | Wise Funds
                </title>
                <link rel="canonical" href="https://www.wisefunds.com/products" />
                <meta name="description" content="Explore a wide range of financial products with Wise Funds, including mutual funds, fixed income, gold investments, life & health insurance, and Portfolio Management Services (PMS). Secure your financial future today with our expert solutions. " />
                <meta name="keywords" content="financial products, mutual funds, fixed income, gold investments, life insurance, health insurance, Portfolio Management Services, PMS, Wise Funds, investment solutions, secure investments, Groww." />
            </Helmet>
            <Header />
            <div className="products">
                <div class="four" >
                    <h3>Product <em>Offering </em></h3>
                </div >

                <div className="products-body">
                    <div className="products-card">
                        <img src={mutual} alt="" />
                        <div className="products-text">
                            <h4>Mutual Funds</h4>
                            <p>At Wise Funds, we prioritize meticulous analysis in selecting asset classes. Our investment options, including mutual funds, offer diversification across assets. Through thorough research, we choose suitable funds for your portfolio, ensuring professional management and effective risk mitigation. This tailored approach aligns with your financial objectives for a balanced investment strategy
                            </p>
                        </div>
                    </div>
                    <div className="products-card">
                        <img src={fixed} alt="" />
                        <div className="products-text">
                            <h4>Fixed Income</h4>
                            <p>Before selecting any asset class, our method hinges on detailed research and comprehensive analysis. Fixed income instruments, including government securities, state government bonds, and corporate bonds, are crucial for portfolio stability. We meticulously curate these assets to provide steady income streams, making them essential for income-focused investors and capital preservation within a diversified portfolio.</p>
                        </div>
                    </div>
                    <div className="products-card">
                        <img src={portfolio} alt="" />
                        <div className="products-text">
                            <h4>Portfolio Tracking</h4>
                            <p>With our expertise, we employ advanced tracking tools to monitor investment performance and analyze market trends. We customize portfolios based on your risk tolerance, financial goals, and time horizon, ensuring optimal allocation and informed decision-making for long-term growth.</p>
                        </div>
                    </div>
                    <div className="products-card">
                        <img src={financial} alt="" />
                        <div className="products-text">
                            <h4>Financial Goal Mapping</h4>
                            <p>Empower yourself by charting your own financial journey. Identify your aspirations, set achievable targets, and track your progress. Our tools and resources are here to support you every step of the way, ensuring you stay on course to achieve your financial dreams.</p>
                        </div>
                    </div>
                    <div className="products-card">
                        <img src={life} alt="" />
                        <div className="products-text">
                            <h4>Life Insurance</h4>
                            <p>Tailored to individual needs, we meticulously assess factors like age, income, and dependents to recommend suitable life insurance policies that provide adequate coverage and financial security for loved ones in times of need.
                            </p>
                        </div>
                    </div>
                    <div className="products-card">
                        <img src={health} alt="" />
                        <div className="products-text">
                            <h4>Health Insurance</h4>
                            <p>Understanding your medical history, lifestyle, and budget, we help select health insurance plans offering comprehensive coverage for essential healthcare services, ensuring you're protected against unforeseen medical expenses without compromising on quality care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Products