// components =============================
import React from 'react'
import Header from "../Molecules/Header/Header"
import Footer from "../Molecules/Footer/Footer"

// components ends ========================

// scss =============================
import "./Sample.scss"
// scss ends ========================

// images =============================

// images ends ========================



const Sample = () => {
    return (
        <>
            <Header />
            <div className="sample">
                <div className="title">
                    <h3></h3>
                    <p></p>
                </div>

                <div className="sample-body">

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Sample