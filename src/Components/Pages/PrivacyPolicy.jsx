import React from 'react'
import Header from '../Molecules/Header/Header'
import Footer from '../Molecules/Footer/Footer'
import "./Home/Home.scss"

const PrivacyPolicy = () => {
    return (
        <>
        <Header/>
            <div className="privacy-policy">
                <div class="four" >
                    <h3>Privacy <em>Policy</em> </h3>
                </div >
                <p>The information contained on this website is intended for general information purpose only. The information published on this website does not constitute a solicitation, suggestions, inducement , offer or recommendation to purchase or sell any stocks, scripts of debentures, mutual funds units, shares, securities or any financial instruments or to enter into any other transaction. All the information is subject to change without notice. The information published should not be used as a substitute for any form of advice. The information on this site has not been prepared taking into account specific investment objectives, financial situations and needs of any particular investor, and therefore may not be suitable for you. Investor must consult his/her investment advisor/distributor with his investment objectives and risk taking ability.</p>
            </div>
            <Footer/>
        </>
    )
}

export default PrivacyPolicy