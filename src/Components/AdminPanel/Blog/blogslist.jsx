import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fb from "./firebase";
import AdminDashboardNav from "../AdminDashboardNav";
import { useNavigate } from 'react-router-dom';
const DB = fb.firestore()
const Blogslist = DB.collection('blogs');

const BlogslistView = () => {

    let navigate = useNavigate();
    let id;

    const [blogs, Setblogs] = useState([]);
    useEffect(() => {

        // check if the user is logged in
        fb.auth().onAuthStateChanged(function (user) {
            if (user) {
                id = user.uid;
                navigate('/bloglist');
                console.log("uid", id);
            } else {
                navigate('/admin-login');
                console.log("user is logged out")
            }
        });

        const unsubscribe = Blogslist.onSnapshot(querySnapshot => {
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

    const DeleteBlog = (id) => {
        Blogslist.doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    };
    return (
        <div>
            <div className='dashboard'>
                <AdminDashboardNav />
                <div className='dashboard-app'>
                    <h3>Blog List</h3>
                    <div className="blog-list">
                        {blogs.map(blog => (
                            <div className="blog-card" key={blog.id}>
                                <img src={blog.Image} alt="" />
                                <div className="blog-card-text">
                                    <p>{blog.Title}</p>
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                                        {blog.Date}</span>
                                </div>

                                <div className="blog-card-button">
                                    <Link to={"/show/" + blog.id}>View</Link>
                                    <Link to={"/edit-blog/"+blog.id}>Edit</Link>
                                    <button
                                        onClick={() => { DeleteBlog(blog.id) }}
                                    >delete</button>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogslistView;