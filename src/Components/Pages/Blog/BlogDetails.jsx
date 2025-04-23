import React, { useState, useEffect } from 'react'
import Header from '../../Molecules/Header/Header'
import Footer from '../../Molecules/Footer/Footer'
import "./Blog.scss"
import { useParams, Link } from 'react-router-dom';
import fb from "../../AdminPanel/Blog/firebase";
import { Helmet } from 'react-helmet'
import blog from "../../Images/12874.jpg"
const DB = fb.firestore()
const Blogslist = DB.collection('blogs');
const BlogsCategory = DB.collection('blog-categories');
const Bloglist = DB.collection('blogs');

const BlogDetails = () => {

    const { id } = useParams();
    const [blogs, Setblogs] = useState([]);
    Blogslist.doc(id).get().then((snapshot) => {
        const data = snapshot.data()
        Setblogs(data);
    });

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

    const [blogsList, SetblogsList] = useState([]);

    useEffect(() => {

        const unsubscribe = Bloglist.limit(100).onSnapshot(querySnapshot => {
            // Get all documents from collection - with IDs
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            // Update state
            SetblogsList(data);
        });

        // Detach listener
        return unsubscribe;
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{blogs.MetaTitle}</title>
                <meta name="description" content={blogs.MetaDescription} />
                <meta name="keywords" content={blogs.MetaKeywords} />
            </Helmet>
            <Header />
            <div className="blog-details">

                <div className="blog-details-left">
                    <img src={blogs.Image} alt={blogs.Title} />

                    <h4>{blogs.Title}</h4>

                    <div className="date">
                        <h5><svg fill="none" height="24" viewBox="0 0 22 24" width="22" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill="#000" fill-rule="evenodd"><path d="m11 0c-2.76142 0-5 2.23858-5 5s2.23858 5 5 5c2.7614 0 5-2.23858 5-5s-2.2386-5-5-5zm-3 5c0-1.65685 1.34315-3 3-3 1.6569 0 3 1.34315 3 3s-1.3431 3-3 3c-1.65685 0-3-1.34315-3-3z" /><path d="m10.5556 12c-5.82972 0-10.5556 4.7259-10.5556 10.5556 0 .7977.6467 1.4444 1.44444 1.4444h19.11116c.7977 0 1.4444-.6467 1.4444-1.4444 0-5.8297-4.7259-10.5556-10.5556-10.5556zm.8888 2c4.5385 0 8.2516 3.5338 8.5379 8h-17.96455c.28625-4.4662 3.99934-8 8.53785-8z" /></g></svg>wise funds team /&nbsp;</h5>
                        <h5><svg id="Capa_1" enable-background="new 0 0 512.228 512.228" height="512" viewBox="0 0 512.228 512.228" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m413.333 39.447h-19.106v-19.333c0-11.046-8.954-20-20-20s-20 8.954-20 20v19.333h-196.227v-19.333c0-11.046-8.954-20-20-20s-20 8.954-20 20v19.333h-19.105c-54.531 0-98.895 44.364-98.895 98.894v274.878c0 54.531 44.364 98.895 98.895 98.895h314.439c54.53 0 98.894-44.364 98.894-98.895v-274.878c0-54.53-44.364-98.894-98.895-98.894zm-314.438 40h19.105v39c0 11.046 8.954 20 20 20s20-8.954 20-20v-39h196.228v39c0 11.046 8.954 20 20 20s20-8.954 20-20v-39h19.106c32.474 0 58.894 26.42 58.894 58.894v19.106h-432.228v-19.106c0-32.474 26.42-58.894 58.895-58.894zm314.438 392.667h-314.438c-32.475 0-58.895-26.42-58.895-58.895v-215.772h432.228v215.772c0 32.475-26.42 58.895-58.895 58.895zm-235.666-196c0 11.046-8.954 20-20 20h-39.333c-11.046 0-20-8.954-20-20s8.954-20 20-20h39.333c11.045 0 20 8.954 20 20zm236.228 0c0 11.046-8.954 20-20 20h-39.333c-11.046 0-20-8.954-20-20s8.954-20 20-20h39.333c11.045 0 20 8.954 20 20zm-118.228 0c0 11.046-8.954 20-20 20h-39.333c-11.046 0-20-8.954-20-20s8.954-20 20-20h39.333c11.045 0 20 8.954 20 20zm-118 118c0 11.046-8.954 20-20 20h-39.333c-11.046 0-20-8.954-20-20s8.954-20 20-20h39.333c11.045 0 20 8.954 20 20zm236.228 0c0 11.046-8.954 20-20 20h-39.333c-11.046 0-20-8.954-20-20s8.954-20 20-20h39.333c11.045 0 20 8.954 20 20zm-118.228 0c0 11.046-8.954 20-20 20h-39.333c-11.046 0-20-8.954-20-20s8.954-20 20-20h39.333c11.045 0 20 8.954 20 20z" /></g></svg>{blogs.Date}</h5>
                    </div>
                    <div className='body' dangerouslySetInnerHTML={{ __html: blogs.Body }}></div>
                </div>

                <div className="blog-details-right">

                    <div className="recent-post">
                        <h4>Categories</h4>

                        <div className="recent-post-body">
                            {blogsCategories.map(blog => (
                                <p>{blog.Category}</p>
                            ))}
                        </div>

                    </div>

                    <div className="recent-post">
                        <h4>Recent Blog posts</h4>
                        <div className="recent-post-body">
                            {blogsCategories.map(blog => (
                                <div className="recent-post-card">
                                    <img src={blogsList.Image} alt={blogsList.Title} />

                                    <div className="text">
                                        <h3>{blogsList.Title}</h3>
                                        <p>{blogsList.Date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default BlogDetails