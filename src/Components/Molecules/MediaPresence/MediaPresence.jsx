import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./MediaPresence.scss";
import star from "../../Images/Homepage/star.png";
import rating from "../../Images/Homepage/rating.png";
import Card1image from "../../Images/MediaPresence/Senior_Citizen_Event_2024_xhmofr.jpg";
import Card2image from "../../Images/MediaPresence/Investment_Awarness_Program_Cleo_County_Sector_121_Noida_d0j9ko.jpg";
import Card3image from "../../Images/MediaPresence/WhatsApp_Image_2023-10-08_at_22.07.30_a6898c5e_yh4vtm.jpg";
import Card4image from "../../Images/MediaPresence/WhatsApp_Image_2023-10-08_at_21.41.36_fd5969bb_bdsgtg.jpg";
import Card5image from "../../Images/MediaPresence/IMG-20231009-WA0011_ksvkit.jpg";
import Card6image from "../../Images/MediaPresence/mint-newspaper-2018_fjbh6g.jpg";
import Card7image from "../../Images/MediaPresence/jvcc_event_2017_dt1d00.jpg";
import Card8image from "../../Images/MediaPresence/RashtriyaSahara.jpg";
import Card9image from "../../Images/MediaPresence/jvcc_event_2017_t93sip.jpg";
import Card10image from "../../Images/MediaPresence/jvcc_event_-_2017_cg5pqc.jpg";
import Card11image from "../../Images/MediaPresence/hindustan times20100.jpg";
import Card12image from "../../Images/MediaPresence/hindustan_times_2018_ehczid.jpg";
import Card13image from "../../Images/MediaPresence/hindustan_times_2018_omlctg.jpg";
import Card14image from "../../Images/MediaPresence//hindustan_times_2018._vflzhx.jpg";
import Card15image from "../../Images/MediaPresence/hindustan_times_-_2018_pkssog.jpg";
import Card16image from "../../Images/MediaPresence/hindustan_times_-_2017_vd3x8n.jpg";
import Card17image from "../../Images/MediaPresence/dainik_jvcc_-_2017_ujx5ya.jpg";
import Card18image from "../../Images/MediaPresence/dainik_jagran_-2017_bqb7vo.jpg";
import Card19image from "../../Images/MediaPresence//IMG-20231009-WA0014_iv3rz5.jpg";
import Card20image from "../../Images/MediaPresence/WhatsApp_Image_2023-10-08_at_21.59.38_201f1222_gmkwul.jpg";
import Card21image from "../../Images/MediaPresence/1_l1s9u1.jpg";
import Card22image from "../../Images/MediaPresence/2_qdcbfo.jpg";
import Card23image from "../../Images/MediaPresence/3_dngqgq.jpg";
import Card24image from "../../Images/MediaPresence/4_h94umq.jpg";
import Card25image from "../../Images/MediaPresence/5_t5y17l.jpg";
import Card26image from "../../Images/MediaPresence/Hindustan_dhtwqa.jpg";
import Card27image from "../../Images/MediaPresence/चिकित्सकों को निवेश की दी जानकारी.jpg";
import Card28image from "../../Images/MediaPresence/7_aqm5mt.jpg";
import Card29image from "../../Images/MediaPresence/8_obxy5d.jpg";
import Card31image from "../../Images/MediaPresence/6_tvbou5.jpg";
import Card30image from "../../Images/MediaPresence/9_mdmb8h.jpg";
import Card32image from "../../Images/MediaPresence/9_os8jc9.jpg";
import Card33image from "../../Images/MediaPresence/news33.jpg";
import Card34image from "../../Images/MediaPresence/Hindi Danik Raipur.jpg";
import Card35image from "../../Images/MediaPresence/Raipur Bhilai.jpg";
import Card36image from "../../Images/MediaPresence/News 1.jpg";
import Card37image from "../../Images/MediaPresence/IMG-20250421-WA0046.jpg";
import Card38image from "../../Images/MediaPresence/IMG-20250421-WA0047.jpg";
import Card39image from "../../Images/MediaPresence/IMG-20250421-WA0048.jpg";
import Card40image from "../../Images/MediaPresence//IMG-20250421-WA0050.jpg";
import Card41image from "../../Images/MediaPresence//IMG-20250421-WA0051.jpg";
import Card42image from "../../Images/MediaPresence//IMG-20250421-WA0053.jpg";
import CNBCNEWS from "../../Images/newslogo/cnbc.png";
import CXONEWS from "../../Images/newslogo/cxo.png";
import BuisnessNEWS from "../../Images/newslogo/business-standard.png";
import goodreturnNEWS from "../../Images/newslogo/good-return.png";
import hindustantimesNEWS from "../../Images/newslogo/hz.png";
import indianexpressNEWS from "../../Images/newslogo/indian-express.png";
import khabaryatraNEWS from "../../Images/newslogo/khabar-yatra.png";
import livemintNEWS from "../../Images/newslogo/live-mint.png";
import moneycontrolNEWS from "../../Images/newslogo/money-control.png";
import observeNEWS from "../../Images/newslogo/observe-now.png";
import Title from "../Title/Title";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
 
const cardsData = [
  {
    type: "pdf",
    title: "वाइज फिनसर्व ने एनटीपीसी रायपुर, सिपाट और भिलाई के कर्मचारियों के लिए वित्तीय साक्षरता को बढ़ावा दिया ",
    media: "",
    date: "",
    fileName: "17_March_2025.pdf",
    logo: "",
  },
  {
    type: "pdf",
    title: "Empowering Women Through Financial Independence:A Celebration of Success on Women’s Day ",
    media: "",
    date: "",
    fileName: "North_East.pdf",
    logo: "",
  },
  {
    type: "pdf",
    title: "Charu Ma'am News Coverage",
    media: "",
    date: "",
    fileName: "Ajay_SIr_Article.pdf",
    logo: "",
  },
  {
    type: "pdf",
    title: "वाइज फिनसर्व ने एनटीपीसी रायपुर, सिपाट और भिलाई के कर्मचारियों के लिए वित्तीय साक्षरता को बढ़ावा दिया ",
    media: "",
    date: "",
    fileName: "ek_Raipur_and_Lucknow.pdf",
    logo: "",
  },
  {
    type: "modal",
    title: "Charu Ma'am News Coverage",
    media: "",
    date: "",
    image: Card33image,
    logo: "",
  },
  {
    type: "modal",
    title: "वाइज फिनसर्व ने एनटीपीसी रायपुर, सिपाट और भिलाई के कर्मचारियों के लिए वित्तीय साक्षरता को बढ़ावा दिया ",
    media: "",
    date: "",
    image: Card35image,
    logo: "",
  },

  {
    type: "modal",
    title: "वाइज फिनसर्व ने एनटीपीसी रायपुर, सिपाट और भिलाई के कर्मचारियों के लिए वित्तीय साक्षरता को बढ़ावा दिया ",
    media: "",
    date: "",
    image: Card34image,
    logo: "",
  },
  {
    type: "modal",
    title: "कार्मिकों को लालच के जाल से बचने की चेतावनी  ",
    media: "",
    date: "",
    image: Card40image,
    logo: "",
  },
  {
    type: "modal",
    title: "सेवानिवृत्ति के बाद की वित्तीय योजना पर सेमिनार आयोजित  ",
    media: "",
    date: "",
    image: Card41image,
    logo: "",
  },
  {
    type: "modal",
    title: "वित्तीय योजना पर सेमिनार आयोजित किया  ",
    media: "",
    date: "",
    image: Card42image,
    logo: "",
  },
  {
    type: "link",
    title:
      "Gold versus real estate: Shifting fortunes call for smart diversification this Akshaya Tritiya ",
    media: "Hindustan Times",
    date: "30 April 2025",
    link: "https://www.hindustantimes.com/real-estate/gold-versus-real-estate-shifting-fortunes-call-for-smart-diversification-this-akshaya-tritiya-101745983719668.html",
    logo: hindustantimesNEWS,
  },
  {
    type: "link",
    title:
      "Edelweiss MF bets on India's digital boom with first-of-its-kind fund; should you get in? ",
    media: "Money Control",
    date: "28 April 2025",
    link: "https://www.moneycontrol.com/news/business/personal-finance/edelweiss-bets-on-india-s-digital-boom-with-first-of-its-kind-fund-should-you-get-in-13005945.html",
    logo: moneycontrolNEWS,
  },
  {
    type: "link",
    title:
      "Wise Finserv in Collaboration with ONGC Hosts Seminar on Financial Planning After Retirement ",
    media: "CXO today",
    date: "",
    link: "https://cxotoday.com/press-release/wise-finserv-in-collaboration-with-ongc-hosts-seminar-on-financial-planning-after-retirement",
    logo: CXONEWS ,
  },
  {
    type: "modal",
    title: "वाइज फिनसर्व ने एनटीपीसी रायपुर, सिपाट और भिलाई के कर्मचारियों के लिए वित्तीय साक्षरता को बढ़ावा दिया ",
    media: "",
    date: "",
    image: Card36image,
    logo: "",
  },
  {
    type: "link",
    title:
      "The FY26 Investment Playbook: Here's how you could manage your money this year ",
    media: "Pratidin Rajdhani",
    date: "1 April 2025",
    link: "https://www.moneycontrol.com/news/business/personal-finance/the-fy26-investment-playbook-here-s-how-you-could-manage-your-money-this-year-12977721.html",
    logo: moneycontrolNEWS,
  },
  {
    type: "link",
    title:
      "The FY26 Investment Playbook: Here's how you could manage your money this year ",
    media: "Money Control",
    date: "1 April 2025",
    link: "https://www.moneycontrol.com/news/business/personal-finance/the-fy26-investment-playbook-here-s-how-you-could-manage-your-money-this-year-12977721.html",
    logo: moneycontrolNEWS,
  },
  {
    type: "link",
    title:
      "वाइज़ फिनसर्व एवम ओएनजीसी ने किया सेवानिवृत्ति के बाद की वित्तीय योजना पर सेमिनार आयोजित ",
    media: "Arihant Samachar",
    date: "19 April 2025",
    link: "https://arihantsamachar.com/2025/04/19/wise-finserv-and-ongc-organize-seminar-on-post-retirement-financial-planning/",
    logo: "",
  },
  {
    type: "link",
    title:
      "वाइज़ फिनसर्व और ओएनजीसी ने सेवानिवृत्त कर्मचारियों के लिए आयोजित किया वित्तीय योजना पर विशेष सेमिनार। ",
    media: "Khabaryatra",
    date: "19 April 2025",
    link: "https://khabaryatra.in/special-seminars-on-financial-plan-organized-by-wise-finserv-and-ongc-for-retired-employees/",
    logo: khabaryatraNEWS,
  },
  {
    type: "link",
    title:
      "Wise Finserv in Collaboration with ONGC Hosts Seminar on Financial Planning After Retirement ",
    media: "CXO today",
    date: "22 April 2025",
    link: "https://cxotoday.com/press-release/wise-finserv-in-collaboration-with-ongc-hosts-seminar-on-financial-planning-after-retirement/",
    logo: CXONEWS ,
  },
  {
    type: "link",
    title:
      "Understanding overnight mutual funds and their role in volatile markets ",
    media: "Cnbctv18",
    date: "23 April 2025",
    link: "https://www.cnbctv18.com/personal-finance/overnight-mutual-funds-explainer-role-in-volatile-markets-returns-19592573.htm",
    logo: CNBCNEWS ,
  },
  {
    type: "link",
    title:
      "Can You Claim Deductions Under Sections 80C, 80D, Etc., While Paying Advance Tax? ",
    media: "",
    date: "28 April 2025",
    link: "https://www.goodreturns.in/personal-finance/investment/can-you-claim-deductions-under-sections-80c-80d-etc-while-paying-advance-tax-1420559.html",
    logo: goodreturnNEWS,
  },
  {
    type: "link",
    title:
      "वाइज फिनसर्व ने एनटीपीसी रायपुर, सिपाट और भिलाई के कर्मचारियों के लिए वित्तीय साक्षरता को बढ़ावा दिया ",
    media: "Pratidin Rajdhani",
    date: "13 March 2025",
    link: "https://epaper.pratidinrajdhani.in/view/382/13-mar-2025/8",
    logo: "",
  },
  {
    type: "link",
    title:
      "Specialised Investment Funds: A new avenue for investors looking for higher returns with calculated risks ",
    media: "",
    date: "",
    link: "https://www.moneycontrol.com/news/business/personal-finance/specialised-investment-funds-a-new-avenue-for-investors-looking-for-higher-returns-with-calculated-risks-12953105.html",
    logo: moneycontrolNEWS,
  },
  {
    type: "link",
    title:
      "Navigating the New Tax Landscape: A Guide to the 2025 Income Tax Regime ",
    media: "",
    date: "",
    link: "https://docs.google.com/document/d/1zxvvgFLuOeLt3RtTYwm0XiGTf82PMIwZ1ZmFQ5qieLY/edit?tab=t.0",
    logo: "",
  },
  {
    type: "link",
    title:
      "New Income Tax Bill 2025 Highlights: New I-T bill to be tabled in Lok Sabha on Thursday; How will it impact taxpayers? ",
    media: "",
    date: "",
    link: "https://www.livemint.com/money/income-tax-bill-news-live-nirmala-sitharaman-proposed-bill-date-key-expectations-parliament-this-week-budget-india-news-11739151378116.html",
    logo: livemintNEWS,
  },
  {
    type: "link",
    title: "Press Insider's Mishika Bangia spoke with Indian women leaders ",
    media: "",
    date: "",
    link: "https://www.linkedin.com/posts/press-insider_how-to-break-barriers-and-accelerate-equality-activity-7304014818783502336-GzIe?utm_source=share&amp;utm_medium=member_android&amp;rcm=ACoAAAkt52ABRGCiqcFwps2E8q9Wl5OCxkNHEF0",
    logo: "",
  },
  {
    type: "link",
    title:
      "Looking for last-minute tax-saving avenues before March 31st? Here’s how Section 80C can come to your rescue ",
    media: "",
    date: "",
    link: "https://economictimes.indiatimes.com/wealth/tax/looking-for-last-minute-tax-saving-avenues-before-march-31st-heres-how-section-80c-can-come-to-your-rescue/articleshow/119164513.cms",
    logo: "",
  },
  {
    type: "link",
    title:
      "Why financial year-end portfolio rebalancing matters and how to go about it ",
    media: "Business Standard",
    date: "12 Feb 2025",
    link: "https://www.business-standard.com/amp/finance/personal-finance/why-financial-year-end-portfolio-rebalancing-matters-and-how-to-go-about-it-125032701283_1.html",
    logo: "",
  },
  {
    type: "link",
    title: "New Income Tax Bill 2025: 5 Key Things Every Taxpayer Should Know",
    media: "",
    date: "",
    link: "https://www.herzindagi.com/society-culture/new-income-tax-bill-2025-takeaways-for-taxpayers-article-1018386",
    logo: "",
  },
  {
    type: "modal",
    title: "वाइज़ फिनसर्व ने ओएनजीसी के साथ मिलकर सेवानिवृत्ति के बाद की वित्तीय योजना पर सेमिनार आयोजित किया  ",
    media: "",
    date: "",
    image: Card37image,
    logo: "",
  },
  
  {
    type: "link",
    title: "Raipur hindi edition ",
    media: "",
    date: "14 March 2025",
    link: "https://www.dailypioneer.com/uploads/2025/epaper/march/raipur-hindi-edition-2025-03-14.pdf",
    logo: "",
  },
  {
    type: "link",
    title: "वाइज फिनसर्व ने वित्तीय साक्षरता को बढ़ावा दिया ",
    media: "Haribhoomi",
    date: "13 March 2025",
    link: "https://epaper.haribhoomi.com/view/27736/new-delhi-main-edition-13-03-2025/10",
    logo: "",
  },
  {
    type: "modal",
    title: "वाइज़ फिनसर्व ने ओएनजीसी के साथ मिलकर सेवानिवृत्ति के बाद की वित्तीय योजना पर सेमिनार आयोजित किया  ",
    media: "",
    date: "",
    image: Card38image,
    logo: "",
  },
  {
    type: "link",
    title: "Overnight Mutual Funds Explainer Role in Volatile Markets Returns ",
    media: "",
    date: "",
    link: "https://www.cnbctv18.com/personal-finance/overnight-mutual-funds-explainer-role-in-volatile-markets-returns-19592573.htm",
    logo: CNBCNEWS ,
  },
  {
    type: "link",
    title:
      "Tax Planning 2.0: How the 2025 Regime Impacts Your Financial Strategy ",
    media: "",
    date: "April 2025",
    link: "https://observenow.com/2025/04/tax-planning-2-0-how-the-2025-regime-impacts-your-financial-strategy/",
    logo: observeNEWS,
  },
  {
    type: "modal",
    title: "वाइज़ फिनसर्व ने ओएनजीसी के साथ मिलकर सेवानिवृत्ति के बाद की वित्तीय योजना पर सेमिनार आयोजित किया  ",
    media: "",
    date: "",
    image: Card39image,
    logo: "",
  },
  {
    type: "link",
    title: "How AI is revolutionising wealth management for HNIs and UHNIs",
    media: "",
    date: "April 2025",
    link: "https://www.newindianexpress.com/business/2025/Apr/27/how-ai-is-revolutionising-wealth-management-for-hnis-and-uhnis",
    logo: indianexpressNEWS,
  },
  {
    type: "modal",
    title: "Senior Citizen Event 2024",
    media: "Danik bhaskar",
    date: "2024",
    image: Card1image,
    logo: "",
  },
  {
    type: "modal",
    title: "Investment Awarness Program Cleo County Sector 121 Noida",
    media: "Hindustan Times",
    date: "2024",
    image: Card2image,
    logo: hindustantimesNEWS,
  },
  {
    type: "modal",
    title: "To Protect Liabilities, A term Plan is a better option",
    media: "times of india",
    date: "2019",
    image: Card3image,
    logo: "",
  },
  {
    type: "modal",
    title: "Charu pahuja: Leading the future of client-centric business model",
    media: "silicon india",
    date: "2017",
    image: Card4image,
    logo: "",
  },
  {
    type: "modal",
    title: "वाइस फिंसर्व का वाराणसी में खुला निःशुल्क वित्तीय परामर्श केन्द्र",
    media: "Rashtriya Sahara",
    date: "2018",
    image: Card5image,
    logo: "",
  },
  {
    type: "pdf",
    title: "वाइज फिनसर्व ने एनटीपीसी रायपुर, सिपाट और भिलाई के कर्मचारियों के लिए वित्तीय साक्षरता को बढ़ावा दिया ",
    media: "",
    date: "",
    fileName: "raipur-hindi-edition.pdf",
    logo: "",
  },
  {
    type: "modal",
    title: "Ajay Yadav",
    media: "mint newspaper",
    date: "2018",
    image: Card6image,
    logo: "",
  },
  {
    type: "modal",
    title: "jal vayu Vihar residents get tips on best investment options",
    media: "JVCC event",
    date: "2017",
    image: Card7image,
    logo: "",
  },
  {
    type: "modal",
    title: "प्रामाणिक फाइनेंसियल एडवाइजर की सलाह से करें निवेश : अजय",
    media: "Rashtriya Sahara",
    date: "2018",
    image: Card8image,
    logo: "",
  },
  {
    type: "modal",
    title:
      "curius resident learn more about investments: senior citizens of Jal Vayu",
    media: "JVCC event",
    date: "2018",
    image: Card9image,
    logo: "",
  },
  {
    type: "modal",
    title: "investment 101 at jal vayu vihar, noida",
    media: "JVCC event",
    date: "2017",
    image: Card10image,
    logo: "",
  },
  {
    type: "modal",
    title:
      "a reader asked why is past performance not indicative of future performance",
    media: "hindustan times",
    date: "2018",
    image: Card11image,
    logo: hindustantimesNEWS,
  },
  {
    type: "modal",
    title: "a story of investment",
    media: "hindustan times",
    date: "2018",
    image: Card12image,
    logo: hindustantimesNEWS,
  },
  {
    type: "modal",
    title: "a reader asked: 'Can a fund's risk change over time?",
    media: "hindustan times",
    date: "2018",
    image: Card13image,
    logo: hindustantimesNEWS,
  },
  {
    type: "modal",
    title: "Guru Speak",
    media: "hindustan times",
    date: "2018",
    image: Card14image,
    logo: hindustantimesNEWS,
  },
  {
    type: "modal",
    title: "Guru Speak",
    media: "hindustan times",
    date: "2018",
    image: Card15image,
    logo: hindustantimesNEWS,
  },
  {
    type: "modal",
    title: "वरिष्ठ नागरिकों को दी निवेश संबंधी जानकारी",
    media: "hindustan times",
    date: "2018",
    image: Card16image,
    logo: hindustantimesNEWS,
  },
  {
    type: "modal",
    title: "लोगों ने किया लाफ्टर एक्सरसाइज",
    media: "dainik jvcc",
    date: "2017",
    image: Card17image,
    logo: "",
  },
  {
    type: "modal",
    title: "जेवीसीसी में लोगों को बताए गए बेहतर निवेश के तरीके",
    media: "dainik jagran",
    date: "2017",
    image: Card18image,
    logo: "",
  },
  {
    type: "modal",
    title: "वाइस फिंसर्व की वित्तीय सेवाएं अब शहर में",
    media: "amr ujala",
    date: "2018",
    image: Card19image,
    logo: "",
  },
  {
    type: "modal",
    title:
      "Asset Allocation is the Most Important Parameter in Backing the Overall Protfolio Return",
    media: "hindustan times",
    date: "2018",
    image: Card20image,
    logo: "",
  },
  {
    type: "modal",
    title: "चिकित्सकों को निवेश के गुर सिखाए",
    media: "hindustan times",
    date: "2021",
    image: Card21image,
    logo: hindustantimesNEWS,
  },
  {
    type: "modal",
    title: "सेक्टर-55 में कार्यक्रम का शुभारंभ करतीं मुख्य अतिथि।",
    media: "",
    date: "",
    image: Card22image,
    logo: "",
  },
  {
    type: "modal",
    title: "सरकार व कंपनियों के लिए उधार लेने का जरिया है बांड",
    media: "Jagran",
    date: "2022",
    image: Card23image,
    logo: "",
  },
  {
    type: "modal",
    title: "आईएमए भवन में चिकित्सकों को दी निवेश की जानकारी",
    media: "agran",
    date: "2022",
    image: Card24image,
    logo: "",
  },
  {
    type: "modal",
    title: "म्युचुअल फड में निवेश एक बेहतर विकल्प",
    media: "hindustan",
    date: "2021",
    image: Card25image,
    logo: "",
  },
  {
    type: "modal",
    title: "आईएमए डॉक्टरों ने समझे निवेश के गुर",
    media: "hindustan",
    date: "",
    image: Card26image,
    logo: "",
  },
  {
    type: "modal",
    title: "आईएमए भवन में चिकित्सकों को दी निवेश की जानकारी",
    media: "Amarujala My City",
    date: "",
    image: Card24image,
    logo: "",
  },
  {
    type: "modal",
    title: "चिकित्सकों को निवेश की दी जानकारी",
    media: "Hindustan Times",
    date: "2023",
    image: Card27image,
    logo: hindustantimesNEWS,
  },
  {
    type: "modal",
    title: "सेमिनार में 100 से अधिक डॉक्टरों ने लिया भाग",
    media: "Desh Pratidin",
    date: "2024",
    image: Card28image,
    logo: "",
  },
  {
    type: "modal",
    title: "आई एम ए सदस्यों ने समझा वेल्थ मैनेजमेंट के लाभ",
    media: "Desh Pratidin",
    date: "2024",
    image: Card29image,
    logo: "",
  },
  {
    type: "modal",
    title: "निवेश करने से पहले सही सलाह लेना जरूरी: अजय",
    media: "Desh Pratidin",
    date: "2024",
    image: Card30image,
    logo: "",
  },
  {
    type: "modal",
    title: "प्राइवेट वेल्थ निवेशकों को किया जागरूक",
    media: "Rashtriya Swaroop",
    date: "2024",
    image: Card31image,
    logo: "",
  },
  {
    type: "modal",
    title: "वाईज फिनसर्व की शाखा का उद्घाटन",
    media: "Desh Pratidin",
    date: "2024",
    image: Card32image,
    logo: "",
  },
];
 
const MediaPresence = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({
    title: "",
    image: "",
    logo: "",
  });
 
  const responsive = {
    600: { items: 5 },
  };
 
  const handleModalOpen = (title, image, logo) => {
    setModalContent({ title, image, logo });
    setIsModalOpen(true);
  };
 
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
 
  const items = cardsData.map((card, index) => {
    if (card.type === "modal") {
      return (
        <div
          key={index}
          className="reviews-right-card"
          onClick={() => handleModalOpen(card.title, card.image, card.logo)}
        >
          {card.logo && (
              <img
                src={card.logo}
                alt="Logo"
                className="modal-logo"
                style={{ width: "80px", marginBottom: "10px" }}
              />
            )}
          <h4>{card.title}</h4>
          <div className="box-paragraph">
            <p>{card.media}</p>
            <p>{card.date}</p>
          </div>
        </div>
      );
    } else if (card.type === "link") {
      return (
        <a
          key={index}
          className="reviews-right-card"
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {card.logo && (
              <img
                src={card.logo}
                alt="Logo"
                className="modal-logo"
                style={{ width: "80px", marginBottom: "10px" }}
              />
            )}
          <h4>{card.title}</h4>
          <div className="box-paragraph">
            <p>{card.media}</p>
            <p>{card.date}</p>
          </div>
        </a>
      );
    }else if (card.type === "pdf") {
      return (
        <a
          key={index}
          className="reviews-right-card"
          href={`/pdf/${card.fileName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {card.logo && (
              <img
                src={card.logo}
                alt="Logo"
                className="modal-logo"
                style={{ width: "80px", marginBottom: "10px" }}
              />
            )}
          <h4>{card.title}</h4>
          <div className="box-paragraph">
            <p>{card.media}</p>
            <p>{card.date}</p>
          </div>
        </a>
      );
    }
    return null;
  });
 
  return (
    <>
      <Title title1="Our" title2="Media" title3="Presence" />
      <div className="reviews">
        <div className="reviews-right">
          <AnimationOnScroll
            offset={0}
            animateOnce={true}
            animateIn="animate__slideInUp"
          >
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy="alternate"
              autoPlay={true}
              infinite={true}
              autoPlayInterval={1500}
              disableDotsControls={true}
              renderPrevButton={() => {
                return (
                  <svg
                    id="Capa_1"
                    enable-background="new 0 0 512 512"
                    height="512"
                    viewBox="0 0 512 512"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g id="Layer_2_19_">
                        <g id="E420_Control_forward_multimedia_music_next">
                          <path d="m256 0c-141.16 0-256 114.84-256 256s114.84 256 256 256 256-114.84 256-256-114.84-256-256-256zm102.47 257c0 .14 0 .27-.06.4s-.05.38-.08.57-.08.31-.12.46-.07.33-.12.49-.1.3-.16.45-.11.31-.17.47-.13.27-.19.4-.15.33-.23.49l-.22.36c-.09.16-.18.32-.29.48s-.18.25-.27.37-.2.28-.31.41-.35.4-.53.59c-.041.049-.084.096-.13.14l-57.82 57.82c-3.907 3.907-10.243 3.907-14.15 0s-3.907-10.243 0-14.15l40.76-40.75h-172.47c-5.523 0-10-4.477-10-10s4.477-10 10-10h172.47l-40.76-40.75c-3.907-3.907-3.907-10.243 0-14.15s10.243-3.907 14.15 0l57.82 57.83s.06.07.1.1c.19.2.38.41.56.63s.2.26.3.39l.28.39c.11.16.2.31.29.47s.15.24.22.37l.23.48c.06.14.13.27.19.41s.11.31.17.47l.16.45c.05.16.08.32.12.48s.09.31.12.47.06.38.08.56 0 .27.06.41c.071.661.071 1.329 0 1.99z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                );
              }}
              renderNextButton={() => {
                return (
                  <svg
                    id="Capa_1"
                    enable-background="new 0 0 512 512"
                    height="512"
                    viewBox="0 0 512 512"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g id="Layer_2_19_">
                        <g id="E420_Control_forward_multimedia_music_next">
                          <path d="m256 0c-141.16 0-256 114.84-256 256s114.84 256 256 256 256-114.84 256-256-114.84-256-256-256zm102.47 257c0 .14 0 .27-.06.4s-.05.38-.08.57-.08.31-.12.46-.07.33-.12.49-.1.3-.16.45-.11.31-.17.47-.13.27-.19.4-.15.33-.23.49l-.22.36c-.09.16-.18.32-.29.48s-.18.25-.27.37-.2.28-.31.41-.35.4-.53.59c-.041.049-.084.096-.13.14l-57.82 57.82c-3.907 3.907-10.243 3.907-14.15 0s-3.907-10.243 0-14.15l40.76-40.75h-172.47c-5.523 0-10-4.477-10-10s4.477-10 10-10h172.47l-40.76-40.75c-3.907-3.907-3.907-10.243 0-14.15s10.243-3.907 14.15 0l57.82 57.83s.06.07.1.1c.19.2.38.41.56.63s.2.26.3.39l.28.39c.11.16.2.31.29.47s.15.24.22.37l.23.48c.06.14.13.27.19.41s.11.31.17.47l.16.45c.05.16.08.32.12.48s.09.31.12.47.06.38.08.56 0 .27.06.41c.071.661.071 1.329 0 1.99z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                );
              }}
            />
          </AnimationOnScroll>
        </div>
      </div>
 
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>
              ✕
            </button>
            {modalContent.logo && (
              <img
                src={modalContent.logo}
                alt="Logo"
                className="modal-logo"
                style={{ width: "80px", marginBottom: "10px" }}
              />
            )}
            <h2>{modalContent.title}</h2>
            <img
              src={modalContent.image}
              alt={modalContent.title}
              className="modal-image"
              style={{ maxWidth: "100%", marginTop: "10px" }}
            />
          </div>
        </div>
      )}
    </>
  );
};
 
export default MediaPresence;
 