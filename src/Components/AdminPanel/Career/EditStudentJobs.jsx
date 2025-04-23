import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fb from "../Blog/firebase";
import AdminDashboardNav from "../AdminDashboardNav";
import { useNavigate } from 'react-router-dom';
const DB = fb.firestore()
const ESJ = DB.collection('Opportunities For Students');

const EditStudentJobs = () => {

    let navigate = useNavigate();
    let id;

    const [Esj, SetEsj] = useState([]);
    useEffect(() => {

        // check if the user is logged in
        fb.auth().onAuthStateChanged(function (user) {
            if (user) {
                id = user.uid;
                navigate('/career/edit-student-jobs');
                console.log("uid", id);
            } else {
                navigate('/admin-login');
                console.log("user is logged out")
            }
        });

        const unsubscribe = ESJ.limit(100).onSnapshot(querySnapshot => {
            // Get all documents from collection - with IDs
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            // Update state
            SetEsj(data);
        });

        // Detach listener
        return unsubscribe;
    }, []);

    const DeleteBlog = (id) => {
        ESJ.doc(id).delete().then(() => {
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
                    <h3>Edit Jobs for Students</h3>

                    <div className='student-edit'>
                        {Esj.map(career => (
                            <div className="student-edit-card" key={career.id}>
                                <div className="student-edit-card-text">
                                    <p>{career.Job_Type}</p>

                                    <h3>{career.Job_Title}</h3>
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

export default EditStudentJobs
