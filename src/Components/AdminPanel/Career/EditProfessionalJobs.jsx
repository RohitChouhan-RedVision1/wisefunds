import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fb from "../Blog/firebase";
import AdminDashboardNav from "../AdminDashboardNav";
import { useNavigate } from 'react-router-dom';
const DB = fb.firestore()
const EPJ = DB.collection('Opportunities For Professionals');

const EditProfessionalJobs = () => {

    let navigate = useNavigate();
    let id;

    const [Epj, SetEpj] = useState([]);
    useEffect(() => {

        // check if the user is logged in
        fb.auth().onAuthStateChanged(function (user) {
            if (user) {
                id = user.uid;
                navigate('/career/edit-professional-jobs');
                console.log("uid", id);
            } else {
                navigate('/admin-login');
                console.log("user is logged out")
            }
        });

        const unsubscribe = EPJ.limit(100).onSnapshot(querySnapshot => {
            // Get all documents from collection - with IDs
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            // Update state
            SetEpj(data);
        });

        // Detach listener
        return unsubscribe;
    }, []);

    const DeleteBlog = (id) => {
        EPJ.doc(id).delete().then(() => {
            console.log("Job successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    };

    return (
        <div>
            <div className='dashboard'>
                <AdminDashboardNav />
                <div className='dashboard-app'>
                    <h3>Edit Jobs for Professionals</h3>
                    <div className='student-edit'>
                        {Epj.map(career => (
                            <div className="student-edit-card" key={career.id}>
                                <div className="student-edit-card-text">
                                    <p>Full-Time</p>
                                    <h3>{career.Job_Title}</h3>
                                    <ul>
                                        <li>Locations:</li>
                                        {career.Location.map((datas) => (
                                            <li key={datas}>{datas.label},</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="student-edit-card-button">
                                    <Link to={"/career-for-students"}>View</Link>
                                    <button
                                        onClick={() => { DeleteBlog(career.id) }}
                                    >delete</button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfessionalJobs
