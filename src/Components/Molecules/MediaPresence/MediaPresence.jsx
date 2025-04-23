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
import Title from "../Title/Title";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MediaPresence = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({
    name: "",
    image: "",
  });
  const responsive3 = {
    600: { items: 5 },
  };

  const handleCardClick = (name, image) => {
    setModalContent({ name, image });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const items3 = [
    <div
      className="reviews-right-card"
      onClick={() => handleCardClick("Senior Citizen Event 2024", Card1image)}
    >
      <h4>Senior Citizen Event 2024</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className=""></p>
        <p className="">2024</p>
      </div>
      {/* </ReadMore> */}
    </div>,
    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "Investment Awarness Program Cleo County Sector 121 Noida",
          Card2image
        )
      }
    >
      <h4>Investment Awarness Program Cleo County Sector 121 Noida</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">Hindustan Times</p>
        <p className="">2024</p>
      </div>
      {/* </ReadMore> */}
    </div>,
    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "Investment Awarness Program Cleo County Sector 121 Noida",
          Card3image
        )
      }
    >
      <h4>To Protect Liabilities, A term Plan is a better option</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">times of india</p>
        <p className="">2019</p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "Investment Awarness Program Cleo County Sector 121 Noida",
          Card4image
        )
      }
    >
      <h4>Charu pahuja: Leading the future of client-centric business model</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">silicon india</p>
        <p className="">2017</p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "वाइस फिंसर्व का वाराणसी में खुला निःशुल्क वित्तीय परामर्श केन्द्र",
          Card5image
        )
      }
    >
      <h4>वाइस फिंसर्व का वाराणसी में खुला निःशुल्क वित्तीय परामर्श केन्द्र</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">Rashtriya Sahara</p>
        <p className="">2018</p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() => handleCardClick("Ajay Yadav", Card6image)}
    >
      <h4>Ajay Yadav</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">mint newspaper</p>
        <p className="">2018</p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "jal vayu Vihar residents get tips on best investment options",
          Card7image
        )
      }
    >
      <h4>jal vayu Vihar residents get tips on best investment options</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">JVCC event</p>
        <p className="">2017</p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "प्रामाणिक फाइनेंसियल एडवाइजर की सलाह से करें निवेश : अजय",
          Card8image
        )
      }
    >
      <h4>प्रामाणिक फाइनेंसियल एडवाइजर की सलाह से करें निवेश : अजय</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">Rashtriya Sahara</p>
        <p className="">2018</p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "curius resident learn more about investments: senior citizens of Jal Vayu",
          Card9image
        )
      }
    >
      <h4>
        curius resident learn more about investments: senior citizens of Jal
        Vayu
      </h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">JVCC event</p>
        <p className="">2017</p>
      </div>
      {/* </ReadMore> */}
    </div>,
    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick("investment 101 at jal vayu vihar, noida", Card10image)
      }
    >
      <h4>investment 101 at jal vayu vihar, noida</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">JVCC event</p>
        <p className="">2017</p>
      </div>
      {/* </ReadMore> */}
    </div>,
    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "a reader asked why is past performance not indicative of future performance",
          Card11image
        )
      }
    >
      <h4>
        a reader asked why is past performance not indicative of future
        performance
      </h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">hindustan times</p>
        <p className="">2018</p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() => handleCardClick("a story of investment", Card12image)}
    >
      <h4>a story of investment</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">hindustan times</p>
        <p className="">2018</p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "a reader asked: 'Can a fund's risk change over time?'",
          Card13image
        )
      }
    >
      <h4>a reader asked: 'Can a fund's risk change over time?'</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">hindustan times</p>
        <p className="">2018</p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() => handleCardClick("Guru Speak", Card14image)}
    >
      <h4>Guru Speak</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">hindustan times</p>
        <p className="">2018</p>
      </div>
      {/* </ReadMore> */}
    </div>,
    <div
      className="reviews-right-card"
      onClick={() => handleCardClick("Guru Speak", Card15image)}
    >
      <h4>Guru Speak</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">hindustan times</p>
        <p className="">2018</p>
      </div>
      {/* </ReadMore> */}
    </div>,
    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "वरिष्ठ नागरिकों को दी निवेश संबंधी जानकारी",
          Card16image
        )
      }
    >
      <h4>वरिष्ठ नागरिकों को दी निवेश संबंधी जानकारी</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">hindustan times</p>
        <p className="">2018</p>
      </div>
      {/* </ReadMore> */}
    </div>,
    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick("लोगों ने किया लाफ्टर एक्सरसाइज", Card17image)
      }
    >
      <h4>लोगों ने किया लाफ्टर एक्सरसाइज</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">dainik jvcc</p>
        <p className="">2017</p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "जेवीसीसी में लोगों को बताए गए बेहतर निवेश के तरीके",
          Card18image
        )
      }
    >
      <h4>जेवीसीसी में लोगों को बताए गए बेहतर निवेश के तरीके</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">dainik jagran</p>
        <p className="">2017</p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "वाइस फिंसर्व की वित्तीय सेवाएं अब शहर में",
          Card19image
        )
      }
    >
      <h4>वाइस फिंसर्व की वित्तीय सेवाएं अब शहर में</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">amr ujala</p>
        <p className="">2018</p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "Asset Allocation is the Most Important Parameter in Backing the Overall Protfolio Return",
          Card20image
        )
      }
    >
      <h4>
        Asset Allocation is the Most Important Parameter in Backing the Overall
        Protfolio Return
      </h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">hindustan times </p>
        <p className="">2018</p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick("चिकित्सकों को निवेश के गुर सिखाए", Card21image)
      }
    >
      <h4>चिकित्सकों को निवेश के गुर सिखाए</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="">hindustan times </p>
        <p className="">2021</p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "सेक्टर-55 में कार्यक्रम का शुभारंभ करतीं मुख्य अतिथि।",
          Card22image
        )
      }
    >
      <h4>सेक्टर-55 में कार्यक्रम का शुभारंभ करतीं मुख्य अतिथि।</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className=""></p>
        <p className=""></p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "सरकार व कंपनियों के लिए उधार लेने का जरिया है बांड",
          Card23image
        )
      }
    >
      <h4>सरकार व कंपनियों के लिए उधार लेने का जरिया है बांड</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="Jagran">Jagran</p>
        <p className="2022">2022</p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "आईएमए भवन में चिकित्सकों को दी निवेश की जानकारी",
          Card24image
        )
      }
    >
      <h4>आईएमए भवन में चिकित्सकों को दी निवेश की जानकारी</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="Jagran"></p>
        <p className="2022"></p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick("म्युचुअल फड में निवेश एक बेहतर विकल्प", Card25image)
      }
    >
      <h4>म्युचुअल फड में निवेश एक बेहतर विकल्प</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="Jagran">Hindustan</p>
        <p className="2022">2021</p>
      </div>
      {/* </ReadMore> */}
    </div>,
    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick("आईएमए डॉक्टरों ने समझे निवेश के गुर", Card26image)
      }
    >
      <h4>आईएमए डॉक्टरों ने समझे निवेश के गुर</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="Jagran">Hindustan</p>
        <p className="2022"></p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "आईएमए भवन में चिकित्सकों को दी निवेश की जानकारी",
          Card24image
        )
      }
    >
      <h4>आईएमए भवन में चिकित्सकों को दी निवेश की जानकारी</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="Jagran">Amarujala My City</p>
        <p className="2022"></p>
      </div>
      {/* </ReadMore> */}
    </div>,

    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick("चिकित्सकों को निवेश की दी जानकारी", Card27image)
      }
    >
      <h4>चिकित्सकों को निवेश की दी जानकारी</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="Jagran">Hindustan Times</p>
        <p className="2022">2023</p>
      </div>
      {/* </ReadMore> */}
    </div>,
    <div
      className="reviews-right-card"
      onClick={() =>
        handleCardClick(
          "सेमिनार में 100 से अधिक डॉक्टरों ने लिया भाग",
          Card28image
        )
      }
    >
      <h4>सेमिनार में 100 से अधिक डॉक्टरों ने लिया भाग</h4>
      {/* <ReadMore> */}
      <div className="box-paragraph">
        <p className="Jagran">Desh Pratidin</p>
        <p className="2022">2024</p>
      </div>
      {/* </ReadMore> */}
    </div>,

<div
className="reviews-right-card"
onClick={() =>
  handleCardClick(
    "आई एम ए सदस्यों ने समझा वेल्थ मैनेजमेंट के लाभ",
    Card29image
  )
}
>
<h4>आई एम ए सदस्यों ने समझा वेल्थ मैनेजमेंट के लाभ</h4>
{/* <ReadMore> */}
<div className="box-paragraph">
  <p className="Jagran">Desh Pratidin</p>
  <p className="2022">2024</p>
</div>
{/* </ReadMore> */}
</div>,


<div
className="reviews-right-card"
onClick={() =>
  handleCardClick(
    "निवेश करने से पहले सही सलाह लेना जरूरी: अजय",
    Card30image
  )
}
>
<h4>निवेश करने से पहले सही सलाह लेना जरूरी: अजय</h4>
{/* <ReadMore> */}
<div className="box-paragraph">
  <p className="Jagran">Desh Pratidin</p>
  <p className="2022">2024</p>
</div>
{/* </ReadMore> */}
</div>,

<div
className="reviews-right-card"
onClick={() =>
  handleCardClick(
    "प्राइवेट वेल्थ निवेशकों को किया जागरूक",
    Card31image
  )
}
>
<h4>प्राइवेट वेल्थ निवेशकों को किया जागरूक</h4>
{/* <ReadMore> */}
<div className="box-paragraph">
  <p className="Jagran">Rashtriya Swaroop</p>
  <p className="2022">2024</p>
</div>
{/* </ReadMore> */}
</div>,

<div
className="reviews-right-card"
onClick={() =>
  handleCardClick(
    "वाईज फिनसर्व की शाखा का उद्घाटन",
    Card32image
  )
}
>
<h4>वाईज फिनसर्व की शाखा का उद्घाटन</h4>
{/* <ReadMore> */}
<div className="box-paragraph">
  <p className="Jagran">Desh Pratidin</p>
  <p className="2022">2024</p>
</div>
{/* </ReadMore> */}
</div>,


  ];

  return (
    <>
      <Title title1="Our" title2="Media" title3="Presence" />
      <div className="reviews">
        <div className="reviews-right">
          {/* <h3>Some Good words from our customers</h3> */}
          <AnimationOnScroll
            offset={0}
            animateOnce={true}
            animateIn="animate__slideInUp"
          >
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
            <h2>{modalContent.name}</h2>
            {console.log(modalContent.image)}
            <img src={`${modalContent.image}`} alt={modalContent.name} />
          </div>
        </div>
      )}
    </>
  );
};

export default MediaPresence;
