import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Academics from './pages/Academics';
// import Gallery from './pages/Gallery';
import Departments from './pages/Department';
import Facilities from './pages/Facilities';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';
import CourseDetails from "./pages/CourseDetails";
import CourseInfo from "./pages/CourseInfo";
import ApplyNow from "./pages/ApplyNow";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseDetails />} />
         <Route path="/courses/:courseId" element={<CourseInfo />} />
         <Route path="/apply" element={<ApplyNow />} />

        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path='/academics' element={<Academics/>}/>
        {/* <Route path='/gallery' element={<Gallery/>}/> */}
        <Route path='/departments' element={<Departments/>}/>
        <Route path='/facilities' element={<Facilities/>}/>
      </Routes>
      <Footer/> 
      <FooterBottom/>
     
   
    </BrowserRouter>
    
  );
}

export default App;
