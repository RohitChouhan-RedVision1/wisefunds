import React, { useEffect, useState } from 'react'
import Header from '../../Molecules/Header/Header'
import Footer from '../../Molecules/Footer/Footer'
import fb from "../../AdminPanel/Blog/firebase";
import JobFormForProfessionals from './JobFormForProfessionals';
const DB = fb.firestore()
const OFPList = DB.collection('Opportunities For Professionals');

const CareerForProfessionals = () => {

    const [careerofp, SetCareerofp] = useState([]);

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        // fetching data from database for career for students
        const OFP = OFPList.limit(100).onSnapshot(querySnapshot => {
            // Get all documents from collection - with IDs
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            // Update state
            SetCareerofp(data);
        });

        // Detach listener
        return OFP;
        // fetching data from database for career ends

    }, []);
    const [loc, setLoc] = useState("");

    return (
        <>
            <Header />
            <JobFormForProfessionals />
            <div className="c-f-s">
                <div class="four" >
                    <h3>Career <em>for</em> Professionals</h3>
                </div >

                <div className="c-f-s-body">
                    <div className="c-f-s-right">
                        {careerofp.map(careers => (
                            <div className="c-f-s-card">
                                <p className="job-type">Full-Time</p>
                                <h4 className="job-title">{careers.Job_Title}</h4>
                                <ul>
                                    <li>Locations:</li>
                                    {careers.Location.map((datas) => (
                                        <li key={datas}>{datas.label},</li>
                                    ))}
                                </ul>
                                <div className="p-btn">
                                    <a data-bs-toggle="modal" data-bs-target="#JobFormForProfessionals">Apply Now</a>
                                    <a target='_blank' href={careers.JD}>Download JD</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CareerForProfessionals