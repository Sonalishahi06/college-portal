import React, { useState } from "react";
import "./Academics.css";

function Academics() {
  const [activeTab, setActiveTab] = useState("programsOffered");
  return (
    <div className="academic-page">
     <div className="academic-heading">
      <h1>Academics</h1>
    </div>
    <div className="academic-container">
      {/* LEFT SIDE BUTTONS */}
      <div className="academic-menu">
        <button className={activeTab === "programsOffered" ? "active" : ""}
            onClick={() => setActiveTab("programsOffered")}>
          Programs Offered
        </button>

       <button className={activeTab === "admission" ? "active" : ""}
            onClick={() => setActiveTab("admission")}>
          Admission
        </button>

        <button className={activeTab === "syllabus" ? "active" : ""}
            onClick={() => setActiveTab("syllabus")}>
          Syllabus
        </button>

        <button className={activeTab === "anti" ? "active" : ""}
            onClick={() => setActiveTab("anti")}>
          Anti Ragging
        </button>

        <button className={activeTab === "list" ? "active" : ""}
            onClick={() => setActiveTab("list")}>
          List of Holidays
        </button>

      </div>

       {/* RIGHT SIDE CONTENT */}
       <div className="academic-content">
       {activeTab === "programsOffered" && (
        <>
         <p className="section-heading">Programs Offered</p>
         <hr className="section-line"/>
              <p>B P Mandal College of Engineering offers undergraduate engineering programs approved by AICTE.</p>

              <table>
                <tr><th>Course</th><th>Duration</th><th>Intake</th></tr>
                <tr><td>B.Tech (CSE)</td><td>4 Years</td><td>60</td></tr>
                <tr><td>B.Tech (EEE)</td><td>4 Years</td><td>60</td></tr>
                <tr><td>B.Tech (ME)</td><td>4 Years</td><td>60</td></tr>
                <tr><td>B.Tech (CE)</td><td>4 Years</td><td>60</td></tr>
                <tr><td>B.Tech (CEWCA)</td><td>4 Years</td><td>30</td></tr>
                <tr><td>B.Tech (AIML)</td><td>4 Years</td><td>60</td></tr>
                <tr><td>B.Tech (3D Animation & Graphics)</td><td>4 Years</td><td>30</td></tr>
              </table>
              </>
       )}
         
             {activeTab === "admission" && (
        <>
         <p className="heading">Admission Incharge</p>
         <hr className="section-line"/>
              <p className="subheading">Prof. Akhilesh Kumar, Mob- +91-9097375683</p>

               <p className="heading">Joint Admission Incharge</p>
         <hr className="section-line"/>
              <p className="subheading">Prof. Pankaj Kumar, Mob- +91-6201152929</p>
              </>
       )}
        
          {activeTab === "syllabus" && (
            <>
              <p className="section-heading">Syllabus</p>
              <hr className="section-line"/>
              <p>Updated syllabus is prescribed by AICTE.</p>
              <div className="syllabus-list">
              <a href="/syllabus/syllabus.pdf"target="_blank" rel="noreferrer" className="pdf-link">Group-1 Syllabus(PDF)</a>
              <a href="/syllabus/syllabus2.pdf"target="_blank" rel="noreferrer" className="pdf-link">Group-2 Syllabus(PDF)</a>
              </div>
            </>
          )}

           {activeTab === "anti" && (
            <>
              <p className="section-heading">Anti Ragging</p>
              <hr className="section-line"/>
               <p className="title" id="t2"> <span className="start-bold">About Ragging:</span>Ragging in any form is banned inside and outside the campus.
                Strict action is taken against persons flouting this rule; no leniency is shown.
                 Suspension and/or withdrawal from the hostel/ college is the first action against the offender.
                  The Supreme Court of India has also defined ragging as a criminal offense.</p>

                  <p className="title" id="t"> <span className="start-bold">Definition of student ragging:</span>Any conduct by a student, whether by words spoken or written or by an act which includes physical abuse, 
                  lewd acts, teasing, rough or rude treatment, indulging in rowdy, undisciplined and obscene activities which 
                  causes or is likely to cause annoyance, undue hardship, physical or psychological harm or mental trauma or
                   raise apprehension or fear in a fresher / junior student or other students or forcing a student to do any 
                   act which such a student is not willing to do and which has the effect of causing or generating a sense of
                    shame or embarrassment or danger to a student’s life or adversely affect the physique or psyche of a fresher 
                    or a junior student</p>

                    <h3 className="h">Student help number regarding ragging</h3>
                    <p>Toll Free No. : 1800 – 180 – 5522</p>
                    <p>E-mail :helpline@antiragging.in</p>
              
            </>
            )}

             {activeTab === "list" && (
            <>
              <p className="section-heading">List of Holidays</p>
              <hr className="section-line"/>
              <div className="syllabus-list">
              
              <a href="/syllabus/holiday.pdf"target="_blank" rel="noreferrer" className="pdf-link">List of holidays for year 2022</a>
              </div>
            </>
          )}
          

       </div>
    </div>
    </div>
  );
}
export default Academics;