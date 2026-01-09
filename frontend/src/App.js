import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Academics from './pages/Academics';
import Gallery from './pages/Gallery';
import Departments from './pages/Department';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/academics' element={<Academics/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/departments' element={<Departments/>}/>
      </Routes>
      <Footer/> 
      <FooterBottom/>
     
   
    </BrowserRouter>
    
  );
}

export default App;
