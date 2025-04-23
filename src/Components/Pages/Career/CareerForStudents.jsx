import React, { useEffect, useState } from 'react'
import Header from '../../Molecules/Header/Header'
import Footer from '../../Molecules/Footer/Footer'
import fb from "../../AdminPanel/Blog/firebase";

import JobFormForStudents from './JobFormForStudents';
const DB = fb.firestore()
const OFSList = DB.collection('Opportunities For Students');

const CareerForStudents = () => {

    const [careerofs, SetCareerofs] = useState([]);
    const elementsArray = [];

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        // fetching data from database for career for students
        const OFS = OFSList.limit(100).onSnapshot(querySnapshot => {
            // Get all documents from collection - with IDs
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            // Update state
            SetCareerofs(data);
        });

        // Detach listener
        return OFS;
        // fetching data from database for career ends
    }, []);

    // opportunities for Students
    const [StudentsShownFullTime, setStudentsShownFullTime] = useState(false);
    const [StudentsShownInternship, setStudentsShownInternship] = useState(false);
    const [StudentsShownAll, setStudentsShownAll] = useState(true);

    const Sfulltime = () => {
        setStudentsShownFullTime(true);
        setStudentsShownInternship(false);
        setStudentsShownAll(false);

        document.getElementById('s-full-time').style.background = "#2058D4";
        document.getElementById('s-all-programs').style.borderBottom = "#fff";
        document.getElementById('s-internships').style.borderBottom = "#fff";
        document.getElementById('s-full-time').style.color = "#fff";
        document.getElementById('s-all-programs').style.color = "#000";
        document.getElementById('s-internships').style.color = "#000";
    }

    const Sinternship = () => {
        setStudentsShownInternship(true);
        setStudentsShownFullTime(false);
        setStudentsShownAll(false);
        document.getElementById('s-full-time').style.background = "#fff";
        document.getElementById('s-all-programs').style.borderBottom = "#fff";
        document.getElementById('s-internships').style.borderBottom = "#2058D4";
        document.getElementById('s-full-time').style.color = "#000";
        document.getElementById('s-all-programs').style.color = "#000";
        document.getElementById('s-internships').style.color = "#fff";
    }

    const Sall = () => {
        setStudentsShownAll(true);
        setStudentsShownInternship(false);
        setStudentsShownFullTime(false);
        document.getElementById('s-full-time').style.background = "#fff";
        document.getElementById('s-all-programs').style.borderBottom = "#2058D4";
        document.getElementById('s-internships').style.borderBottom = "#fff";
        document.getElementById('s-full-time').style.color = "#000";
        document.getElementById('s-all-programs').style.color = "#fff";
        document.getElementById('s-internships').style.color = "#000";
    }
    const [loc, setLoc] = useState("");

    const filtered = careerofs.filter(careers => {
        return careers.Location.map(data => data.label === loc)
    });

    return (
        <>
            <Header />
            <JobFormForStudents />
            <div className="c-f-s">
                <div class="four" >
                    <h3>Career <em>for</em> Students</h3>
                </div >
                <div className="c-f-s-body">
                    <div className="c-f-s-left">
                        <h3 id='s-all-programs' onClick={Sall}>All Programs<svg fill="none" height="50" viewBox="0 0 50 50" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m32.375 23.5209-11.7917-11.7709c-.1937-.1952-.4241-.3502-.6779-.456-.2539-.1058-.5262-.1602-.8013-.1602-.275 0-.5473.0544-.8012.1602-.2538.1058-.4842.2608-.6779.456-.388.3904-.6058.9184-.6058 1.4688s.2178 1.0784.6058 1.4687l10.3125 10.4167-10.3125 10.3125c-.388.3903-.6058.9184-.6058 1.4688 0 .5503.2178 1.0784.6058 1.4687.1929.1969.423.3535.6769.4607.2539.1073.5266.1632.8022.1643.2757-.0011.5484-.057.8023-.1643.2539-.1072.484-.2638.6769-.4607l11.7917-11.7708c.2115-.1951.3802-.4319.4957-.6954.1154-.2636.175-.5482.175-.8359s-.0596-.5723-.175-.8358c-.1155-.2636-.2842-.5003-.4957-.6954z" fill="rgb(0,0,0)" /></svg></h3>
                        <h3 id='s-internships' onClick={Sinternship}>Internships<svg fill="none" height="50" viewBox="0 0 50 50" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m32.375 23.5209-11.7917-11.7709c-.1937-.1952-.4241-.3502-.6779-.456-.2539-.1058-.5262-.1602-.8013-.1602-.275 0-.5473.0544-.8012.1602-.2538.1058-.4842.2608-.6779.456-.388.3904-.6058.9184-.6058 1.4688s.2178 1.0784.6058 1.4687l10.3125 10.4167-10.3125 10.3125c-.388.3903-.6058.9184-.6058 1.4688 0 .5503.2178 1.0784.6058 1.4687.1929.1969.423.3535.6769.4607.2539.1073.5266.1632.8022.1643.2757-.0011.5484-.057.8023-.1643.2539-.1072.484-.2638.6769-.4607l11.7917-11.7708c.2115-.1951.3802-.4319.4957-.6954.1154-.2636.175-.5482.175-.8359s-.0596-.5723-.175-.8358c-.1155-.2636-.2842-.5003-.4957-.6954z" fill="rgb(0,0,0)" /></svg></h3>
                        <h3 id='s-full-time' onClick={Sfulltime}>Full Time<svg fill="none" height="50" viewBox="0 0 50 50" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m32.375 23.5209-11.7917-11.7709c-.1937-.1952-.4241-.3502-.6779-.456-.2539-.1058-.5262-.1602-.8013-.1602-.275 0-.5473.0544-.8012.1602-.2538.1058-.4842.2608-.6779.456-.388.3904-.6058.9184-.6058 1.4688s.2178 1.0784.6058 1.4687l10.3125 10.4167-10.3125 10.3125c-.388.3903-.6058.9184-.6058 1.4688 0 .5503.2178 1.0784.6058 1.4687.1929.1969.423.3535.6769.4607.2539.1073.5266.1632.8022.1643.2757-.0011.5484-.057.8023-.1643.2539-.1072.484-.2638.6769-.4607l11.7917-11.7708c.2115-.1951.3802-.4319.4957-.6954.1154-.2636.175-.5482.175-.8359s-.0596-.5723-.175-.8358c-.1155-.2636-.2842-.5003-.4957-.6954z" fill="rgb(0,0,0)" /></svg></h3>
                    </div>
                    {StudentsShownFullTime && (
                        <div className="c-f-s-right">
                            {careerofs.filter(careers => careers.Job_Type === 'Full-Time').map(careers => (
                                <div className="c-f-s-card" key={careers.id}>
                                    <p className="job-type">{careers.Job_Type}</p>
                                    <h4 className="job-title">{careers.Job_Title}</h4>
                                    <ul className="job-location">
                                        <li>Locations:</li>
                                        {careers.Location.map((datas) => (
                                            <li key={datas}>{datas.label},</li>
                                        ))}
                                    </ul>
                                    <div className="p-btn">
                                        <a data-bs-toggle="modal" data-bs-target="#JobFormForStudents">Apply Now</a>
                                        <a target='_blank' href={careers.JD}>Download JD</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {StudentsShownInternship && (
                        <div className="c-f-s-right">
                            {careerofs.filter(careers => careers.Job_Type === 'Internship' && careers.Location.filter(datas => datas.label === loc)).map(careers => (
                                <div className="c-f-s-card" key={careers.id}>
                                    <p className="job-type">{careers.Job_Type}</p>
                                    <h4 className="job-title">{careers.Job_Title}</h4>
                                    <ul className="job-location">
                                        <li>Locations:</li>
                                        {careers.Location.map((datas) => (
                                            <li key={datas}>{datas.label},</li>
                                        ))}
                                    </ul>
                                    <div className="p-btn">
                                        <a data-bs-toggle="modal" data-bs-target="#JobFormForStudents">Apply Now</a>
                                        <a target='_blank' href={careers.JD}>Download JD</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {StudentsShownAll && (
                        <div className="c-f-s-right">
                            {filtered.map(careers => (
                                <div className="c-f-s-card" key={careers.id}>
                                    <p className="job-type">{careers.Job_Type}</p>
                                    <h4 className="job-title">{careers.Job_Title}</h4>
                                    <ul className="job-location">
                                        <li>Locations:</li>
                                        {careers.Location.map((datas) => (
                                            <li key={datas}>{datas.label},</li>
                                        ))}
                                    </ul>
                                    <div className="p-btn">
                                        <a data-bs-toggle="modal" data-bs-target="#JobFormForStudents">Apply Now</a>
                                        <a target='_blank' href={careers.JD}>Download JD</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CareerForStudents