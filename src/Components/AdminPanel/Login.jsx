import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom'
import '../Sass/admin.scss'
import logo from "../Images/Logo/logo.png"
import bg from "../Images/Untitled design.png"

const Login = () => {

    //fetching data from form

    const [userData, setUserData] = useState({
        Email: "",
        Password: ""

    });

    let name, value;
    const postUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserData({ ...userData, [name]: value });
    }

    //fetching data from form ends

    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, userData.Email, userData.Password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/admin")
                console.log(user);
                alert("logged in Successfully")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                alert(errorCode, errorMessage);
            });

    }

    return (
        <div className='admin-login'>
            <div className='admin-login-content'>
                <img src={bg} alt="bg" />
                <form onSubmit={onLogin}>
                    <img src={logo} alt="logo" />
                    <h5>Admin Login</h5>
                    <input
                        type="email"
                        name='Email'
                        label="Email address"
                        placeholder='Email'
                        value={userData.Email}
                        onChange={postUserData}
                        required />
                    <input type="password"
                        name='Password'
                        label="Create password"
                        placeholder='Password'
                        value={userData.Password}
                        onChange={postUserData}
                        required />
                    <input
                        className='login-button'
                        type="submit"
                        value="Login" />
                </form>
            </div>


        </div>
    )
}

export default Login
