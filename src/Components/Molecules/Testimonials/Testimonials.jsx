import React from 'react'

import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import star from "../../Images/Homepage/star.png"
import rating from "../../Images/Homepage/rating.png"
import Title from '../Title/Title';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Testimonials = () => {
    const responsive3 = {
        600: { items: 1 },
    };

    const items3 = [

        <div className="review-right-card">
            <h4>Garvit Jain</h4>
            <img src={rating} alt="rating" />
            {/* <ReadMore> */}
            <p>Financial advisory is really good I was able to meet my goal to buy a car. I highly recommend everyone to start investing and seek their advisory</p>
            {/* </ReadMore> */}
        </div>,
        <div className="review-right-card">
            <h4>Hare Krishna Saini</h4>
            <img src={rating} alt="rating" />
            <p>I started SIP with my dad's money really happy with the returns I got, the advisory team is really good, highly recommend everyone to try</p>
        </div>,
        <div className="review-right-card">
            <h4>Maithili Moharil</h4>
            <img src={rating} alt="rating" />
            <p>Great financial services. Totally satisfied by their support and guidance.</p>
        </div>,
        <div className="review-right-card">
            <h4>Rohit</h4>
            <img src={rating} alt="rating" />
            <p>Great service by wise funds, I was scared to invest by they help me overcome my fear and help me grow my money</p>
        </div>,
        <div className="review-right-card">
            <h4>Manvi Bajaj</h4>
            <img src={rating} alt="rating" />
            <p>Literally a excellent experience ... got much help from app.</p>
        </div>,
        <div className="review-right-card">
            <h4>Prakash Nongmaithem</h4>
            <img src={rating} alt="rating" />
            <p>Really good app, really great team, really great service highly recommend</p>
        </div>,
        <div className="review-right-card">
            <h4>Harsh Vardhan Sharma</h4>
            <img src={rating} alt="rating" />
            <p>Had a great experience in wise funds, superb app, superb service highly recommend.</p>
        </div>,
        <div className="review-right-card">
            <h4>Charu Mittal</h4>
            <img src={rating} alt="rating" />
            <p>Nice and convenient  user interface and features in the app as well as on the website..liked it.
            </p>
        </div>,
        <div className="review-right-card">
            <h4>Gargi Jain</h4>
            <img src={rating} alt="rating" />
            <p>This app is just amazing... It is really easy to use and informative too👌👌</p>
        </div>,
        <div className="review-right-card">
            <h4>Darshan Jadhav</h4>
            <img src={rating} alt="rating" />
            <p>This app is very useful, can solve many problems financially..great service ..</p>
        </div>,
        <div className="review-right-card">
            <h4>Fayiz Munna</h4>
            <img src={rating} alt="rating" />
            <p>Thanks to the team and their guidence i was able to go my first international trip. Everybody use their service, thanks</p>
        </div>,
        <div className="review-right-card">
            <h4>Anjali Rajawat</h4>
            <img src={rating} alt="rating" />
            <p>I started my investing journey in this year, i was seeking some advice based on my goals and so far i am really happy with wise funds</p>
        </div>,
        <div className="review-right-card">
            <h4>Shubham</h4>
            <img src={rating} alt="rating" />
            <p>I highly  recommend  their financial  service,  it's amazing, I was able to get my portfolio  in green where my friends got their's  red</p>
        </div>,
        <div className="review-right-card">
            <h4>Bhavya Singh</h4>
            <img src={rating} alt="rating" />
            <p>I started investing in January bcuz i want to go abroad for studies so far it seems like I'll be able to achieve my dream all thanks to wise funds team</p>
        </div>,
        <div className="review-right-card">
            <h4>Ritesh Bhardwaj</h4>
            <img src={rating} alt="rating" />
            <p>Wonderful people to work with amazed with their working lifestyle i will always recommend wise funds for any or every financial help</p>
        </div>,
        <div className="review-right-card">
            <h4>Aniket Raj Jha</h4>
            <img src={rating} alt="rating" />
            <p>If you are among those who have keen interest in investing, Wise Funds is for you.
                Everything has been made keeping things easy and convenient for user.</p>
        </div>
    ];

    return (

        <>
            <Title title1="Some Good" title2="words" title3="from our customers" />


            <div className="review">
                <div className="review-left">
                    <AnimationOnScroll offset={0} animateOnce={true} animateIn="animate__slideInLeft">
                        <div className="review-left-one">
                            <div className="review-left-card">
                                <div className="one">
                                    <h3>4.8</h3>
                                    <img src={star} alt="rating" />
                                </div>
                                <div className="one">
                                    <h6>2394 Ratings</h6>
                                    <p>Google Reviews</p>
                                </div>
                            </div>
                            <div className="review-left-card">
                                <div className="one">
                                    <h3>4.8</h3>
                                    <img src={star} alt="rating" />
                                </div>
                                <div className="one">
                                    <h6>2740 reviews</h6>
                                    <p>Play Store Rating</p>
                                </div>
                            </div>
                        </div>
                        <div className="review-left-two">
                            <div className="review-left-two-card">
                                <h3><span> <CountUp start={0} end={22000} delay={0}>
                                    {({ countUpRef, start }) => (
                                        <ReactVisibilitySensor onChange={start} delayedCall={true}>
                                            <span ref={countUpRef} />
                                        </ReactVisibilitySensor>
                                    )}
                                </CountUp></span>+</h3>
                                <p>active customers</p>
                            </div>
                            <div className="review-left-two-card">
                                <h3><span><CountUp start={0} end={2500} delay={0}>
                                    {({ countUpRef, start }) => (
                                        <ReactVisibilitySensor onChange={start} delayedCall={true}>
                                            <span ref={countUpRef} />
                                        </ReactVisibilitySensor>
                                    )}
                                </CountUp> </span>+</h3>
                                <p>Mutual Fund Schemes</p>
                            </div>
                            <div className="review-left-two-card">
                                <h3><span><CountUp start={0} end={9} delay={0}>
                                    {({ countUpRef, start }) => (
                                        <ReactVisibilitySensor onChange={start} delayedCall={true}>
                                            <span ref={countUpRef} />
                                        </ReactVisibilitySensor>
                                    )}
                                </CountUp> </span>Million+</h3>
                                <p>transcation</p>
                            </div>

                        </div>
                    </AnimationOnScroll>
                </div>

                <div className="review-right">

                    {/* <h3>Some Good words from our customers</h3> */}
                    <AnimationOnScroll offset={0} animateOnce={true} animateIn="animate__slideInUp">
                        <AliceCarousel
                            mouseTracking
                            items={items3}
                            responsive={responsive3}
                            controlsStrategy="alternate"
                            autoPlay={true}
                            infinite={true}
                            autoPlayInterval={1500}
                            disableDotsControls={true}
                            renderPrevButton={() => {
                                return <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g id="Layer_2_19_"><g id="E420_Control_forward_multimedia_music_next"><path d="m256 0c-141.16 0-256 114.84-256 256s114.84 256 256 256 256-114.84 256-256-114.84-256-256-256zm102.47 257c0 .14 0 .27-.06.4s-.05.38-.08.57-.08.31-.12.46-.07.33-.12.49-.1.3-.16.45-.11.31-.17.47-.13.27-.19.4-.15.33-.23.49l-.22.36c-.09.16-.18.32-.29.48s-.18.25-.27.37-.2.28-.31.41-.35.4-.53.59c-.041.049-.084.096-.13.14l-57.82 57.82c-3.907 3.907-10.243 3.907-14.15 0s-3.907-10.243 0-14.15l40.76-40.75h-172.47c-5.523 0-10-4.477-10-10s4.477-10 10-10h172.47l-40.76-40.75c-3.907-3.907-3.907-10.243 0-14.15s10.243-3.907 14.15 0l57.82 57.83s.06.07.1.1c.19.2.38.41.56.63s.2.26.3.39l.28.39c.11.16.2.31.29.47s.15.24.22.37l.23.48c.06.14.13.27.19.41s.11.31.17.47l.16.45c.05.16.08.32.12.48s.09.31.12.47.06.38.08.56 0 .27.06.41c.071.661.071 1.329 0 1.99z" /></g></g></g></svg>
                            }}
                            renderNextButton={() => {
                                return <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g id="Layer_2_19_"><g id="E420_Control_forward_multimedia_music_next"><path d="m256 0c-141.16 0-256 114.84-256 256s114.84 256 256 256 256-114.84 256-256-114.84-256-256-256zm102.47 257c0 .14 0 .27-.06.4s-.05.38-.08.57-.08.31-.12.46-.07.33-.12.49-.1.3-.16.45-.11.31-.17.47-.13.27-.19.4-.15.33-.23.49l-.22.36c-.09.16-.18.32-.29.48s-.18.25-.27.37-.2.28-.31.41-.35.4-.53.59c-.041.049-.084.096-.13.14l-57.82 57.82c-3.907 3.907-10.243 3.907-14.15 0s-3.907-10.243 0-14.15l40.76-40.75h-172.47c-5.523 0-10-4.477-10-10s4.477-10 10-10h172.47l-40.76-40.75c-3.907-3.907-3.907-10.243 0-14.15s10.243-3.907 14.15 0l57.82 57.83s.06.07.1.1c.19.2.38.41.56.63s.2.26.3.39l.28.39c.11.16.2.31.29.47s.15.24.22.37l.23.48c.06.14.13.27.19.41s.11.31.17.47l.16.45c.05.16.08.32.12.48s.09.31.12.47.06.38.08.56 0 .27.06.41c.071.661.071 1.329 0 1.99z" /></g></g></g></svg>
                            }}
                        />
                    </AnimationOnScroll>

                </div>

            </div>

        </>
    )
}

export default Testimonials