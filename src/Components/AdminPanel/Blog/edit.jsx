import React, { useState, useEffect } from "react";
import Select from 'react-select'
import { useParams } from 'react-router-dom';

import fb from "./firebase";
import AdminDashboardNav from "../AdminDashboardNav";
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import "firebase/compat/storage";
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage";
import { v4 as uuid } from "uuid";
const DB = fb.firestore()
const CDB = fb.firestore()
const Blogslist = DB.collection('blogs');
const storage = fb.storage();
const BlogsCategories = CDB.collection('blog-categories');

const BlogEdit = () => {
  // Checking if the user is logged in===============================================
  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {

    fb.auth().onAuthStateChanged(function (user) {
      if (user) {
        id = user.uid;
        navigate('/blog');
        console.log("uid", id);
      } else {
        navigate('/admin-login');
        console.log("user is logged out")
      }
    });

  }, [])
  // Checking if the user is logged in Ends===============================================


  // Fetching values from the database to update blog===============================================
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    Blogslist.doc(id).get().then((snapshot) => {
      const data = snapshot.data();
      setTitle(data.Title);
      setBody(data.Body);
      setDate(data.Date);
    });
  }, []);

  // Fetching values from the database to update blog===============================================

  // Blog Update===============================================

  const submit = (e) => {
    e.preventDefault();
    Blogslist.doc(id).update({
      Title: title,
      Date: date,
      Body: body,
      Categories: categories
    })
      .then((docRef) => {
        alert("Blog Updated Successfully")
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }

  // Blog Update Ends===============================================

  // React Quill ===============================================
  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
      [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ]
  };

  var formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];

  // React Quill Ends===============================================

  // Categories===============================================

  const [categories, setCategories] = useState([]);
  const [blogs, Setblogs] = useState([]);

  useEffect(() => {
    const unsubscribe = BlogsCategories.onSnapshot(querySnapshot => {
      // Get all documents from collection - with IDs
      const data = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      // Update state
      Setblogs(data);
    });

    // Detach listener
    return unsubscribe;
  }, []);

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setCategories([...categories, e.target.value]);
    }
  };

  // Categories Ends===============================================

  return (
    <div>
      <div className='dashboard'>
        <AdminDashboardNav />
        <div className='dashboard-app'>
          <h3>Create Blogs</h3>
          <div className="blog-create">
            <form method='POST'>
              <div className="form-field">
                <div className="__input">
                  <label htmlFor="">Blog Title</label>
                  <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => { setTitle(e.target.value) }}
                    required
                    value={title} />

                </div>
                <div className="__input">
                  <label htmlFor="">Blog Posting Date</label>
                  <input
                    type="date"
                    onChange={(e) => { setDate(e.target.value) }}
                    value={date}
                    required />

                </div>

                <div className="__input">
                  <label htmlFor="">Select Categories</label>

                  <div className="checkbox-buttons">
                    {blogs.map(blog => (
                      <div className="checkbox-body" >
                        <input
                          type="checkbox"
                          name="category"
                          id="category"
                          value={blog.Category}
                          onChange={handleCheckboxChange} />
                        <label for="track">{blog.Category}</label>
                      </div>
                    ))}
                  </div>

                </div>

                <div>
                  <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    placeholder="write your content ...."
                    // onChange={handleProcedureContentChange}
                    style={{ height: "220px" }}
                    onChange={setBody}
                    value={body}
                  >
                  </ReactQuill>
                </div>
                <button type="submit" onClick={submit}>Submit</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div >
  )
}

export default BlogEdit
