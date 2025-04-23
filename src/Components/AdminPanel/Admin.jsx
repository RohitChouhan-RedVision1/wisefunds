import React, { useEffect } from 'react'
import AdminDashboardNav from './AdminDashboardNav'
// import bg from '../Images/Admin Panel/1.png'
import { useNavigate } from 'react-router-dom';
import fb from "../AdminPanel/Blog/firebase";

const Admin = () => {

    let navigate = useNavigate();
    let id;

    useEffect(() => {

        fb.auth().onAuthStateChanged(function (user) {
            if (user) {
                id = user.uid;
                navigate('/admin');
                console.log("uid", id);
            } else {
                navigate('/admin-login');
                console.log("user is logged out")
            }
        });
    }, [])

    return (
        <div>
            <div className='dashboard'>
                <AdminDashboardNav />
                <div className='dashboard-app' style={{ padding: '0' }}>
                    {/* <img src={bg} alt="" style={{ width: '100%' }} /> */}
                    <h3>Welcome to the Admin Panel</h3>
                </div>
            </div>
        </div >
    )
}

export default Admin
