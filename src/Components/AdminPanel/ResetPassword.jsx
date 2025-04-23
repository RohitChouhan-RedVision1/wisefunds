import React, { useEffect, useState } from 'react'
import AdminDashboardNav from './AdminDashboardNav'
import fb from "../AdminPanel/Blog/firebase";
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {

  let navigate = useNavigate();
  let id;

  useEffect(() => {

    fb.auth().onAuthStateChanged(function (user) {
      if (user) {
        id = user.uid;
        navigate('/admin-reset-password');
        console.log("uid", id);
      } else {
        navigate('/admin-login');
        console.log("user is logged out")
      }
    });
  }, [])

  var user = fb.auth().currentUser;

  const [password, setPassword] = useState('');
  const reset = () => {
    user.updatePassword(password).then(function () {
      alert('Password Updated Successfully...')
    }).catch(function (error) {
      alert(error)
    });
  }


  return (
    <div>
      <div className='dashboard'>
        <AdminDashboardNav />
        <div className='dashboard-app'>
          <h3>Change Password</h3>

          <div className='admin-settings'>
            <input type="password" placeholder='Enter New Password' onChange={(e) => { setPassword(e.target.value) }} />
            <button onClick={reset}>Reset Password</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ResetPassword
