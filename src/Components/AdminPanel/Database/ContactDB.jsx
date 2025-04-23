import React, { useState, useEffect, useRef } from 'react'
import AdminDashboardNav from '../AdminDashboardNav'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { DownloadTableExcel } from 'react-export-table-to-excel';

import fb from "../Blog/firebase";

const ContactDB = () => {
  let navigate = useNavigate();
  let id;

  const [todos, setTodos] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "Contact_Form"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setTodos(newData);
        console.log(todos, newData);
      })

  }

  useEffect(() => {

    fb.auth().onAuthStateChanged(function (user) {
      if (user) {
        id = user.uid;
        navigate('/contact-form-database');
        console.log("uid", id);
      } else {
        navigate('/admin-login');
        console.log("user is logged out")
      }
    });

    fetchPost();
  }, [])

  const tableRef = useRef(null);
  let i = 1;

  return (
    <div>
      <div className='dashboard'>
        <AdminDashboardNav />
        <div className='dashboard-app'>
          <h3>Form Responses of Contact Form</h3>
          <div className='contact-form'>
            <DownloadTableExcel
              filename="Form Responses of Contact Form"
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
                  <th>Message</th>
                </tr>
              </thead>
              {
                todos?.map((todo, i) => (
                  <tbody key={i}>
                    <tr>
                      <td>{++i}</td>
                      <td data-column="Name">{todo.Name}</td>
                      <td data-column="Email">{todo.Email}</td>
                      <td data-column="Phone">{todo.Phone}</td>
                      <td data-column="Message">{todo.Message}</td>
                    </tr>
                  </tbody>
                ))
              }
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactDB
