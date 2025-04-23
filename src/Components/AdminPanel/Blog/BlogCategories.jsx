import React, { useState, useEffect } from "react";
import fb from "./firebase";
import AdminDashboardNav from "../AdminDashboardNav";
import { useNavigate } from 'react-router-dom';
const DB = fb.firestore()
const BlogsCategories = DB.collection('blog-categories');

const BlogCategories = () => {

    let navigate = useNavigate();
    let id;

    const [category, setCategory] = useState("");
    const [blogs, Setblogs] = useState([]);

    const submit = async (e) => {
        e.preventDefault();
        if (category == "") {
            alert("Please Enter Category")
        }
        else {

            BlogsCategories.add({
                Category: category
            }).then((docRef) => {
                alert('Category Added Successfully')
            }).catch((error) => {
                console.error("error:", error);
            });
        }
    }

    useEffect(() => {

        // check if the user is logged in
        fb.auth().onAuthStateChanged(function (user) {
            if (user) {
                id = user.uid;
                navigate('/blog-categories');
                console.log("uid", id);
            } else {
                navigate('/admin-login');
                console.log("user is logged out")
            }
        });

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

    const DeleteBlog = (id) => {
        BlogsCategories.doc(id).delete().then(() => {
            console.log("Category successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    };

    return (
        <div>
            <div className='dashboard'>
                <AdminDashboardNav />
                <div className='dashboard-app'>
                    <h3>Add Blog Categories</h3>
                    <div className="blog-category">
                        <div className="blog-create">
                            <form method='POST'>
                                <div className="form-field">
                                    <div className="__input">
                                        <label htmlFor="">Add Category</label>
                                        <input
                                            type="text"
                                            onChange={(e) => { setCategory(e.target.value) }}
                                            required />
                                    </div>
                                    <button type="submit" onClick={submit}>Submit</button>
                                </div>
                            </form>
                        </div>

                        <div className="blog-category-present">
                            {blogs.map(blog => (
                                <div className="b-p" key={blog.id}>
                                    <p>{blog.Category}</p>
                                    <button
                                        onClick={() => { DeleteBlog(blog.id) }}
                                    >delete</button>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogCategories
