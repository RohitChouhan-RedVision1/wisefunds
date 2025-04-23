import AdminDashboardNav from '../AdminDashboardNav'
import React, { useState, useEffect, useRef } from 'react'
import fb from "../Blog/firebase";
import { DownloadTableExcel } from 'react-export-table-to-excel';

import { useNavigate } from 'react-router-dom';
const DB = fb.firestore()
const OFPList = DB.collection('Job Form Professionals');

const JobStudentsDB = () => {

    let navigate = useNavigate();
    let id;

    const [careerofp, SetCareerofp] = useState([]);

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        // check if the user is logged in
        fb.auth().onAuthStateChanged(function (user) {
            if (user) {
                id = user.uid;
                navigate('/job-form-professionals-database');
                console.log("uid", id);
            } else {
                navigate('/admin-login');
                console.log("user is logged out")
            }
        });

        // fetching data from database for career for students
        const OFS = OFPList.limit(100).onSnapshot(querySnapshot => {
            // Get all documents from collection - with IDs
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            // Update state
            SetCareerofp(data);
        });

        // Detach listener
        return OFS;
        // fetching data from database for career ends
    }, []);
    const tableRef = useRef(null);
    let i = 1;

    return (
        <div>
            <div className='dashboard'>
                <AdminDashboardNav />
                <div className='dashboard-app'>
                    <h3>Job Form Responses of Professionals</h3>

                    <div className='contact-form'>
                        <DownloadTableExcel
                            filename="Job Form Responses of Professionals"
                            sheet="Responses"
                            currentTableRef={tableRef.current}
                        >

                            <button className='export'> Export excel </button>

                        </DownloadTableExcel>
                        <table ref={tableRef}>
                            <thead>
                                <tr>
                                    <th>S. No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Position</th>
                                    <th>Location</th>
                                    <th>Cover Letter</th>
                                    <th>CV</th>
                                </tr>
                            </thead>
                            {careerofp.map(careers => (
                                <tbody>
                                    <tr>
                                        <td>{i++}</td>
                                        <td>{careers.Name}</td>
                                        <td>{careers.Email}</td>
                                        <td>{careers.Mobile}</td>
                                        <td>{careers.Position}</td>
                                        <td>{careers.Location}</td>
                                        <td>{careers.Cover_Letter}</td>
                                        <td><a target='_blank' style={{ fontWeight: 'bold' }} href={careers.CV}>Download CV</a></td>
                                    </tr>
                                </tbody>
                            ))}

                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default JobStudentsDB
