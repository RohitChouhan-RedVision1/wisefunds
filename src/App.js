import Home from "./Components/Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Components/Sass/main.scss";
import Calculators from "./Components/Pages/Calculators/Calculators";
import SIP from "./Components/Pages/Calculators/SIP";
import LumpSum from "./Components/Pages/Calculators/LumpSum";
import SWP from "./Components/Pages/Calculators/SWP";
import MF from "./Components/Pages/Calculators/MF";
import SSY from "./Components/Pages/Calculators/SSY";
import PPF from "./Components/Pages/Calculators/PPF";
import EPF from "./Components/Pages/Calculators/EPF";
import FD from "./Components/Pages/Calculators/FD";
import RD from "./Components/Pages/Calculators/RD";
import NPS from "./Components/Pages/Calculators/NPS";
import HRA from "./Components/Pages/Calculators/HRA";
import Retirement from "./Components/Pages/Calculators/Retirement";
import EMI from "./Components/Pages/Calculators/EMI";
import CarLoan from "./Components/Pages/Calculators/CarLoan";
import SimpleInterest from "./Components/Pages/Calculators/SimpleInterest";
import CompoundInterest from "./Components/Pages/Calculators/CompoundInterest";
import StepUpSip from "./Components/Pages/Calculators/StepUpSip";
import IncomeTax from "./Components/Pages/Calculators/IncomeTax";
import Gratuity from "./Components/Pages/Calculators/Gratuity";
import ChildEducationPlanning from "./Components/Pages/Calculators/ChildEducationPlanning";
import SCSS from "./Components/Pages/Calculators/SCSS";
import About from "./Components/Pages/About/About";
import Login from "./Components/Pages/Login/Login";
import Contact from "./Components/Pages/Contact/Contact";
import Blog from "./Components/Pages/Blog/Blog";
import BlogDetails from "./Components/Pages/Blog/BlogDetails";
import Career from "./Components/Pages/Career/Career";
import CareerForStudents from "./Components/Pages/Career/CareerForStudents";
import CareerForProfessionals from "./Components/Pages/Career/CareerForProfessionals";
import Products from "./Components/Pages/Products/Products";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy";
import ChildMarrige from "./Components/Pages/Calculators/ChildMarrige";
import BlogslistView from "./Components/AdminPanel/Blog/blogslist";
import CreateBlog from "./Components/AdminPanel/Blog/create";
import AdminLogin from "./Components/AdminPanel/Login";
import Admin from "./Components/AdminPanel/Admin";
import OpportunitiesForStudents from "./Components/AdminPanel/Career/OpportunitiesForStudents";
import OpportunitiesForProfessionals from "./Components/AdminPanel/Career/OpportunitiesForProfessionals";
import EditStudentJobs from "./Components/AdminPanel/Career/EditStudentJobs";
import EditProfessionalJobs from "./Components/AdminPanel/Career/EditProfessionalJobs";
import ContactDB from "./Components/AdminPanel/Database/ContactDB";
import ResetPassword from "./Components/AdminPanel/ResetPassword";
import JobStudentsDB from "./Components/AdminPanel/Database/JobStudentsDB";
import JobProfessionalsDB from "./Components/AdminPanel/Database/JobProfessionalsDB";
import BlogCategories from "./Components/AdminPanel/Blog/BlogCategories";
import BlogEdit from "./Components/AdminPanel/Blog/edit";
import IframeComponent from "./Components/Molecules/Search/SearchDetail";
import ForgetPassword from "./Components/Pages/Forgetpassword/Forgetpassword";
import AdminLoginn from "./Components/Pages/Login/AdminLogin";
import EmployeeLogin from "./Components/Pages/Login/EmployeeLogin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Adminlogin" element={<AdminLoginn />} />
          <Route path="/Employeelogin" element={<EmployeeLogin />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/show/:id" element={<BlogDetails />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career-for-students" element={<CareerForStudents />} />
          <Route
            path="/career-for-professionals"
            element={<CareerForProfessionals />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Calculators */}
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/sip-calculator" element={<SIP />} />
          <Route path="/lump-sum-calculator" element={<LumpSum />} />
          <Route path="/swp-calculator" element={<SWP />} />
          <Route path="/mf-calculator" element={<MF />} />
          <Route path="/ssy-calculator" element={<SSY />} />
          <Route path="/ppf-calculator" element={<PPF />} />
          <Route path="/epf-calculator" element={<EPF />} />
          <Route path="/fd-calculator" element={<FD />} />
          <Route path="/rd-calculator" element={<RD />} />
          <Route path="/nps-calculator" element={<NPS />} />
          <Route path="/hra-calculator" element={<HRA />} />
          <Route path="/retirement-calculator" element={<Retirement />} />
          <Route path="/emi-calculator" element={<EMI />} />
          <Route
            path="/child-education-calculator"
            element={<ChildEducationPlanning />}
          />
          <Route path="/child-marrige-calculator" element={<ChildMarrige />} />
          <Route path="/car-loan-calculator" element={<CarLoan />} />
          <Route
            path="/simple-interest-calculator"
            element={<SimpleInterest />}
          />
          <Route
            path="/compound-interest-calculator"
            element={<CompoundInterest />}
          />
          <Route path="/step-up-sip-calculator" element={<StepUpSip />} />
          <Route path="/income-tax-calculator" element={<IncomeTax />} />
          <Route path="/gratuity-calculator" element={<Gratuity />} />
          <Route path="/scss-calculator" element={<SCSS />} />

          {/* Admin */}
          <Route exact path="/admin-login" element={<AdminLogin />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/contact-form-database" element={<ContactDB />} />
          <Route
            exact
            path="/job-form-students-database"
            element={<JobStudentsDB />}
          />
          <Route
            exact
            path="/job-form-professionals-database"
            element={<JobProfessionalsDB />}
          />
          <Route
            exact
            path="/admin-reset-password"
            element={<ResetPassword />}
          />

          {/* blog */}
          <Route path="/bloglist" element={<BlogslistView />} />
          <Route path="/create/" element={<CreateBlog />} />
          <Route path="/blog-categories" element={<BlogCategories />} />
          <Route path="/edit-blog/:id" element={<BlogEdit />} />

          {/* Career */}
          <Route
            path="/career/opportunities-for-students"
            element={<OpportunitiesForStudents />}
          />
          <Route
            path="/career/opportunities-for-professionals"
            element={<OpportunitiesForProfessionals />}
          />
          <Route
            path="/career/edit-student-jobs"
            element={<EditStudentJobs />}
          />
          <Route
            path="/career/edit-professional-jobs"
            element={<EditProfessionalJobs />}
          />
          {/* Admin Ends*/}

          {/* Search Component */}
          <Route path="/mf-single-fund/:slug" element={<IframeComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
