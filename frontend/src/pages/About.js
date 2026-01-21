import React, { useState } from "react";
import campusImg from "../assets/campus.jpg";
import campusImg2 from "../assets/college.jpg";
import Img1 from "../assets/vission.png";
import "./About.css";

function About() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="about-page">

     <div className="about-heading">
      <h1>About Us</h1>
</div>
      <div className="about-container">

        {/* LEFT SIDE BUTTONS */}
        <div className="about-menu">
          <button
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>

          <button
            className={activeTab === "administration" ? "active" : ""}
            onClick={() => setActiveTab("administration")}
          >
            Administration
          </button>

          <button
            className={activeTab === "affiliation" ? "active" : ""}
            onClick={() => setActiveTab("affiliation")}
          >
            Affiliation
          </button>

          <button
            className={activeTab === "vision" ? "active" : ""}
            onClick={() => setActiveTab("vision")}
          >
            Vision & Mission
          </button>

          <button
            className={activeTab === "courses" ? "active" : ""}
            onClick={() => setActiveTab("courses")}
          >
            Courses
          </button>

          <button
            className={activeTab === "faculty" ? "active" : ""}
            onClick={() => setActiveTab("faculty")}
          >
            Faculty
          </button>

          <button
            className={activeTab === "campus" ? "active" : ""}
            onClick={() => setActiveTab("campus")}
          >
            Campus
          </button>

          <button className={activeTab==="contact"?"active":""}
          onClick={()=>setActiveTab("contact")}
          >
            Contact-Us
          </button>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="about-content">
          {activeTab === "overview" && (
           <>
           <div className="about-image">
             <img src={campusImg} alt="BPMCE Campus"  />
             <img src={campusImg2} alt="BPMCE Campus" />
             </div>
            
             <p className="section-heading">Overview</p>
             <hr className="section-line"/>
             <p><strong>B.P. Mandal College of Engineering, Madhepura</strong> is one amongst the six new Government Engineering College established in 2016 by the Government of Bihar under Department of Science &Technology. It started its first academic session (2016-17) from S.N.P.M Model High School Campus, Madhepura. The college has approval of All India Council of Technical Education (AICTE) and was affiliated to Aryabhatta Knowledge University (AKU), Patna later this Institute is affiliated to Bihar Engineering University, Patna (BEU) on 2022. The new engineering college have seven engineering branches- Civil Engineering, Mechanical Engineering, Electrical & Electronics Engineering, Computer Science & Engineering, Civil Engineering with Computer Application, 3 D Animation & Graphics and Computer Science & Engineering (Artificial Intelligence & Machine Learning).</p>
    
    
  </>
          )}

          {activeTab==="administration" && (
            <>
              <p className="section-heading">Administration</p>
              <hr className="section-line"></hr>
              <p>
                <strong>Administration and Management:-</strong>BP Mandal College of Engineering is a full-fledged Govt. Institution in the Deptt. of Science & Technology, Govt. of Bihar and is bound to function as such. However in Academic and related areas it has to be responsive and participants in the decisions and deliberations of All India Council for Technical Education and other apex bodies like Indian School for Technical Education, Technical Teachers Training Institutes etc. ensuring innovations in Pedagogical and practical aspects of Technical Education. The Administration and Management of the Institute are oriented to these ends too.
Though the Principal is the overall in-charge of all activities and movements of the Institute for smooth functioning and making administration work efficient the following service departments work each under a Professor of proven capability.
              </p>
            </>
          )}

          {activeTab==="affiliation" && (
            <>
              <p className="section-heading">Affiliation</p>
              <hr className="section-line"></hr>
              <p>
                The Institute is academically governed by Bihar Engineering University, Patna which is the degree awarding authority for the institute as B.Tech. and is recognized by the A.I.C.T.E., New Delhi, and the Government of Bihar State.
              </p>
            </>
          )}

          {activeTab === "vision" && (
            <>
            <img src={Img1} alt="BPMCE Campus" className="vision" />
            <p className="section-heading"> Vision</p>
             <hr className="section-line" />
            <p>
               To be recognized globally one of best technical institution in the field of engineering, research and innovation which meets the current age industries and social values.
              
            </p>
            <p className="section-heading"> Mission</p>
             <hr className="section-line" />
             <p>
                <ul>
                  <li>
                    Enhance the technical knowledge and skill in engineering of our students.
                  </li>
                  <li>Undertake collaborative projects with premier institutes and industries through MOUs.</li>
                  <li>To develop an entrepreneurship skill by inculcating entrepreneurship in education.</li>
                  <li>Apart from technical knowledge, develop good moral ethics in students so that they help in the progress of nation and society.</li>
                </ul>
             </p>
            </>
          )}


          {activeTab === "courses" && (
  <>
    <p className="section-heading">Courses Offered</p>
    <hr className="section-line" />

    <p>
      B P Mandal College of Engineering, Madhepura offers the following programs:
    </p>

    <table className="courses-table">
      <thead>
        <tr>
          <th>Course</th>
          <th>Seats Available</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>B.Tech in Computer Science & Engineering</td>
          <td>60</td>
        </tr>
        <tr>
          <td>B.Tech in Mechanical Engineering</td>
          <td>60</td>
        </tr>
        <tr>
          <td>B.Tech in Civil Engineering</td>
          <td>60</td>
        </tr>
        <tr>
          <td>B.Tech in Electrical & Electronics Engineering</td>
          <td>60</td>
        </tr>
        <tr>
          <td>B.Tech in Civil Engineering with Computer Application</td>
          <td>30</td>
        </tr>
        <tr>
          <td>B.Tech in 3D Animation & Graphics</td>
          <td>30</td>
        </tr>
        <tr>
          <td>B.Tech in CSE (Artificial Intelligence & Machine Learning)</td>
          <td>60</td>
        </tr>
      </tbody>
    </table>
    <p className="courses-note"><strong>Note:</strong>Fees are collected as per government norms.</p>
  </>
)}



         {activeTab === "faculty" && (
  <>
    <p className="section-heading">Our Faculty</p>
    <hr className="section-line" />

    <p>
      B P Mandal College of Engineering, Madhepura is proud to have a team of
      highly qualified, experienced, and dedicated faculty members who are
      committed to academic excellence and student development.
    </p>

    <ul className="faculty-points">
      <li> Well-qualified faculty with M.Tech and Ph.D degrees</li>
      <li> Experienced professors and assistant professors</li>
      <li> Strong focus on conceptual learning and practical exposure</li>
      <li>Active involvement in research, workshops, and FDPs</li>
      <li>Student-friendly and mentorship-oriented approach</li>
    </ul>

    <p className="faculty-note">
      The faculty members continuously upgrade their skills to keep pace with
      emerging technologies and industry requirements, ensuring holistic
      development of students.
    </p>
  </>
)}

{activeTab === "campus" && (
  <>
    <p className="section-heading">Campus</p>
    <hr className="section-line" />

    <p>
      B P Mandal College of Engineering, Madhepura is spread over a spacious and
      eco-friendly campus that provides a peaceful and academically enriching
      environment for students.
    </p>

    <ul className="campus-points">
      <li>Lush green and pollution-free campus</li>
      <li> Well-equipped academic blocks and laboratories</li>
      <li>Central library with a vast collection of books and journals</li>
      <li> Modern labs with advanced equipment</li>
      <li>Separate hostels for boys and girls</li>
      <li>Sports facilities for indoor and outdoor games</li>
      <li> Hygienic canteen and common areas</li>
      <li> 24×7 security and CCTV surveillance</li>
    </ul>

    <p className="campus-note">
      The campus promotes overall development by encouraging academic learning,
      innovation, sports, and cultural activities in a safe and supportive
      environment.
    </p>
  </>
)}



          {activeTab==="contact" && (
            <>
            <p className="section-heading">Contact-Us</p>
            <hr className="section-line"/>
            <p><strong>Contact:-</strong>06476299908</p>
            <p className="course-note"><strong>Email:-</strong>enquiry@bpmcemadhepura.org</p>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default About;

