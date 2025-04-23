import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import fb from "../../AdminPanel/Blog/firebase";
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from 'react-toastify'

const DB = fb.firestore()
const OFPList = DB.collection('Opportunities For Professionals');
const storage = fb.storage();
const JFFP = DB.collection('Job Form Professionals');
const JobFormForProfessionals = () => {

    const form = useRef();

    const submit = async (e) => {
        e.preventDefault();
        if (Name == "" && pdfUpload == "" && Email == "" && Mobile == "" && Position == "" && CoverLetter == "" && Location == "") {
            toast.error("Please fill all the fields");
        } else if (Name == "") {
            toast.error("Please fill Job Title");
        } else if (Email == "") {
            toast.error("Please fill Email");
        } else if (Mobile == "") {
            toast.error("Please fill Mobile");
        } else if (Location == null) {
            toast.error("Please Select Preferred Location");
        } else if (Position == null) {
            toast.error("Please Select Job Position");
        } else if (CoverLetter == "") {
            toast.error("Please write a Cover Letter");
        }
        else if (pdfUpload === null) {
            toast.error("Please upload CV");
        }
        else {

            if (pdfUpload.size > 100000) {
                toast.error("Please upload a file smaller than 1mb");
                return false;
            }
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!emailRegex.test(Email)) {
                toast.error('Please enter a valid email address');
                return
            }

            if (typeof Mobile !== "undefined") {

                var pattern = new RegExp(/^[0-9\b]+$/);

                if (!pattern.test(Mobile)) {
                    toast.error("Please enter only number.");
                    return

                } else if (Mobile.length !== 10) {
                    toast.error("Please enter 10 digit phone number.");
                    return
                }
            }

            uploadBytes(pdfRef, pdfUpload)
                .then((snapshot) => {
                    getDownloadURL(snapshot.ref)
                        .then((url) => {
                            setpdfURL(url);
                        })
                        .catch((error) => {
                            toast.error(error.message);
                        });
                })
                .catch((error) => {
                    toast.error(error.message);
                });

            JFFP.add({
                Name: Name,
                Email: Email,
                Mobile: Mobile,
                CV: pdfURL,
                Position: Position,
                Location: Location,
                Cover_Letter: CoverLetter
            }).then((docRef) => {
                toast.success('Application Submitted Successfully')
            }).catch((error) => {
                console.error("error:", error);
            });

            emailjs.sendForm('service_bh2lrla', 'template_58oajnn', form.current, 'ILc-SJ1fH27uOArlH')
                .then((result) => {
                    console.log(result.text);

                }, (error) => {
                    console.log(error.text);
                });
        }
    }

    const [Name, SetName] = useState("");
    const [Email, SetEmail] = useState("");
    const [Mobile, SetMobile] = useState("");
    const [Position, SetPosition] = useState("");
    const [Location, SetLocation] = useState("");
    const [CoverLetter, SetCoverLetter] = useState("");
    const [careerOFP, SetCareerOFP] = useState([]);
    const [pdfUpload, setPdfUpload] = useState(null);//uploading image
    const uniqueId = uuid();//creating a unique id
    const pdfRef = storageRef(storage, `${uniqueId}`);//storing image in firebase storage with a unique id
    const [pdfURL, setpdfURL] = useState('');// retrieving URL

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        // fetching data from database for career for students
        const OFP = OFPList.limit(100).onSnapshot(querySnapshot => {
            // Get all documents from collection - with IDs
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            // Update state
            SetCareerOFP(data);
        });

        // Detach listener
        return OFP;
        // fetching data from database for career ends
    }, []);

    return (

        <>
            <ToastContainer />
            <div className='job-form'>

                <div className="modal fade" id="JobFormForProfessionals" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title fs-5" id="exampleModalLabel">Apply Now</h3>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form ref={form} id='career-form' method='POST' >
                                    <div className="mb-3">
                                        <input type="text"
                                            className='form-control'
                                            name="Name"
                                            placeholder="Enter Name *"
                                            autoFocus
                                            onChange={(e) => { SetName(e.target.value) }}
                                            required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text"
                                            name="Mobile"
                                            className='form-control'
                                            placeholder="Enter Mobile *"
                                            autoFocus
                                            onChange={(e) => { SetMobile(e.target.value) }}
                                            required />
                                    </div>

                                    <div className="mb-3">
                                        <input style={{ textTransform: 'lowercase' }} type="email"
                                            name="Email"
                                            className='form-control'
                                            placeholder="Enter Email *"
                                            autoFocus
                                            onChange={(e) => { SetEmail(e.target.value) }}
                                            required />
                                    </div>

                                    <div className="mb-3">
                                        <input type="file"
                                            className='form-control'
                                            accept='application/pdf'
                                            autoFocus
                                            onChange={(e) => {
                                                setPdfUpload(e.target.files[0]);
                                            }}
                                            required />
                                    </div>
                                    <input type="text"
                                        style={{ display: "none" }}
                                        name="CV"
                                        value={pdfURL}
                                    />
                                    <input type="text"
                                        style={{ display: "none" }}
                                        name="careerType"
                                        value="Professional"
                                    />

                                    <select aria-label="Default select example"
                                        onChange={(e) => { SetPosition(e.target.value) }}
                                        className="form-select mb-3"
                                        name='Job_Position'>
                                        <option hidden>Select Job Position</option>
                                        {careerOFP.map(careers => (
                                            <option value={careers.Job_Title}>{careers.Job_Title}</option>
                                        ))}
                                    </select>

                                    {careerOFP.map(careers => (
                                        <select aria-label="Default select example"
                                            onChange={(e) => { SetLocation(e.target.value) }}
                                            className="form-select mb-3"
                                            name='Job_Location'>

                                            <option hidden value="Select Preferred Location">Select Preferred Location</option>
                                            {careers.Location.map(datas => (
                                                <option value={datas.value}>{datas.label}</option>
                                            ))}

                                        </select>
                                    ))}
                                    <textarea
                                        className="form-control mb-3"
                                        placeholder='Cover Letter *'
                                        name="Job_Letter"
                                        rows="4"
                                        onChange={(e) => { SetCoverLetter(e.target.value) }}></textarea>

                                    <button type="submit" className="btn w-100" value="Submit" onClick={submit}>Submit</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default JobFormForProfessionals
