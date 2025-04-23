import React, { useState, useEffect } from "react";
import Select from 'react-select'
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

const CreateBlog = () => {

    // Checking if the user is logged in===============================================
    let navigate = useNavigate();
    let id;

    // const sub = () => {
    //     setTimeout(() => {
    //         submit();
    //     }, 1000);
    // }


    useEffect(() => {

        fb.auth().onAuthStateChanged(function (user) {
            if (user) {
                id = user.uid;
                navigate('/create/');
                console.log("uid", id);
            } else {
                navigate('/admin-login');
                console.log("user is logged out")
            }
        });

    }, [])

    // Checking if the user is logged in ends===============================================

    // React Quill===============================================

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



    // Form Submission===============================================

    const [value, setValue] = useState("");
    const [title, SetTitle] = useState("");
    const [date, setDate] = useState("");
    const [blogId, SetBlogId] = useState("");
    const [blogMetaTitle, SetBlogMetaTitle] = useState("");
    const [blogMetaDescription, SetBlogMetaDescription] = useState("");
    const [blogMetaKeywords, SetBlogMetaKeywords] = useState("");

    const [imageUpload, setImageUpload] = useState(null);//uploading image
    const uniqueId = uuid();//creating a unique id
    const imageRef = storageRef(storage, `${uniqueId}`);//storing image in firebase storage with a unique id
    const [imageURL, setImageURL] = useState('');// retrieving URL
    let v = 0;

    const submit = async (e) => {
        e.preventDefault();
        if (title == "" && value == "" && date == "" && categories.length == 0 && blogId == "" && blogMetaTitle == "" && blogMetaDescription == "" && blogMetaKeywords == "") {
            alert("Please fill all the fields");
        } else if (title == "") {
            alert("Please fill Title");
        } else if (value == "") {
            alert("Please fill Body");
        } else if (blogId == "") {
            alert("Please fill Blog Id");
        } else if (date == "") {
            alert("Please fill Date");
        } else if (imageUpload === null) {
            alert("Please select an image");
        } else if (categories.length == 0) {
            alert("Please select a category");
        }
        else {

            if (imageUpload.size > 1e6) {
                alert("Please upload a file smaller than 1 MB");
                return false;
            }
            uploadBytes(imageRef, imageUpload)
                .then((snapshot) => {
                    getDownloadURL(snapshot.ref)
                        .then((url) => {
                            setImageURL(url);
                        })
                        .catch((error) => {
                            alert(error.message);
                        });
                })
                .catch((error) => {
                    alert(error.message);
                });

            Blogslist.doc(blogId).set({
                Title: title,
                Body: value,
                Date: date,
                Image: imageURL,
                Categories: categories,
                MetaTitle: blogMetaTitle,
                MetaDescription: blogMetaDescription,
                MetaKeywords: blogMetaKeywords

            }).then((docRef) => {
                alert('Blog Posted Successfully')
            }).catch((error) => {
                console.error("error:", error);
            });


        }
    }

    // Form Submission Ends===============================================

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
                        <form method='POST' onSubmit={submit}>
                            <div className="form-field">
                                <div className="__input">
                                    <label htmlFor="">Blog Meta Title</label>
                                    <input
                                        type="text"
                                        placeholder="Blog Meta Title"
                                        onChange={(e) => { SetBlogMetaTitle(e.target.value) }}
                                        required />

                                </div>
                                <div className="__input">
                                    <label htmlFor="">Blog Meta Description</label>
                                    <input
                                        type="text"
                                        placeholder="Blog Meta Description"
                                        onChange={(e) => { SetBlogMetaDescription(e.target.value) }}
                                        required />

                                </div>
                                <div className="__input">
                                    <label htmlFor="">Blog Meta Keywords</label>
                                    <input
                                        type="text"
                                        placeholder="Blog Meta Keywords"
                                        onChange={(e) => { SetBlogMetaKeywords(e.target.value) }}
                                        required />

                                </div>
                                <div className="__input">
                                    <label htmlFor="">Blog Id</label>
                                    <input
                                        type="text"
                                        placeholder="BlogId"
                                        onChange={(e) => { SetBlogId(e.target.value) }}
                                        required />

                                </div>
                                <div className="__input">
                                    <label htmlFor="">Blog Title</label>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        onChange={(e) => { SetTitle(e.target.value) }}
                                        required />

                                </div>
                                <div className="__input">
                                    <label htmlFor="">Blog Posting Date</label>
                                    <input
                                        type="date"
                                        onChange={(e) => { setDate(e.target.value) }}
                                        required />

                                </div>

                                <div className="__input">
                                    <label htmlFor="">Blog Image</label>
                                    <div className="input">
                                        <p style={{ color: "red" }}>(Image should be in jpg/png format, less then 1mb and in 1920px*1080px dimensions)</p>
                                        <input
                                            label="Image"
                                            placeholder="Choose image"
                                            accept="image/png,image/jpg"
                                            type="file"
                                            onChange={(e) => {
                                                setImageUpload(e.target.files[0]);
                                            }}
                                            required
                                        />
                                    </div>

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
                                        onChange={setValue}
                                        value={value}
                                    >
                                    </ReactQuill>
                                </div>
                                <button type="submit" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default CreateBlog;