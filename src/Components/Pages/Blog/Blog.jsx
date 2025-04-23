import React, { useState, useEffect } from 'react'
import Header from '../../Molecules/Header/Header'
import Footer from '../../Molecules/Footer/Footer'
import "./Blog.scss"
import { Link } from 'react-router-dom'
import blog from "../../Images/12874.jpg"
import fb from "../../AdminPanel/Blog/firebase";
import { Helmet } from 'react-helmet'
const DB = fb.firestore()
const Blogslist = DB.collection('blogs');
const BlogsCategory = DB.collection('blog-categories');

const Blog = () => {

    const [blogs, Setblogs] = useState([]);

    useEffect(() => {
        // 👇️ scroll to top on page load

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        const unsubscribe = Blogslist.limit(100).onSnapshot(querySnapshot => {
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

    const [blogsCategories, SetblogsCategories] = useState([]);

    useEffect(() => {
        // 👇️ scroll to top on page load

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        const unsubscribe = BlogsCategory.limit(100).onSnapshot(querySnapshot => {
            // Get all documents from collection - with IDs
            const data2 = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            // Update state
            SetblogsCategories(data2);
        });

        // Detach listener
        return unsubscribe;
    }, []);


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Expert Financial Insights & Tips | Mutual Funds, Insurance, Investments Blog | Wise Funds
                </title>
                <link rel="canonical" href="https://www.wisefunds.com/blog" />
                <meta name="description" content="Stay informed with Wise Funds blog. Read expert articles on mutual funds, fixed income, gold, insurance, and personalized investment strategies. Empower your financial decisions with our latest insights." />
                <meta name="keywords" content="financial blog, mutual funds articles, investment tips, insurance insights, fixed income strategies, gold investments, financial advice, Wise Funds blog, wealth management tips" />
            </Helmet>
            <Header />
            <div className="blog-page">
                <div class="four" >
                    <h3>Blog <em></em></h3>
                </div >

                <div className="blog-body">
                    {/* <div className="categories">
                        <select >
                            {blogsCategories.map(blog => (
                                <option key={blog.Category} value={blog.Category} >{blog.Category}</option>
                            ))}
                        </select>
                    </div> */}
                    <div className="blogs">
                        {blogs.map(blog => (
                            <Link to={"/show/" + blog.id} className="blog-card">
                                <div className="blog-card-left">
                                    <img src={blog.Image} alt={blog.Title} />
                                    {/* <p>12 january 24</p> */}
                                </div>

                                <div className="blog-card-right">
                                    <h3>{blog.Title}</h3>
                                    <div className='body' dangerouslySetInnerHTML={{ __html: blog.Body }}></div>
                                    {/* <p>{post.description}</p> */}
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Blog