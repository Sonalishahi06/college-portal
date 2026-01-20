import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import CollegeBg from "../assets/clgg.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${CollegeBg})` }}>
        <div className="home-text">
        <h1>BP Mandal College of Engineering, Madhepura</h1>
        <p>(Dept. of Science, Technology and Technical Education, Govt. of Bihar)</p>
        <button className="home-btn" onClick={()=>navigate("/courses")}>Explore Courses</button>
      </div>

    </div>
  );
}
export default Home;
