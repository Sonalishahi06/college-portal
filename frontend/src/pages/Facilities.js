import React, { useState } from "react";
import "./Facilities.css";

function Facilities(){
     const [activeTab, setActiveTab] = useState("CL");
    return (
     <div className="page">

     <div className="heading">
      <h1>Facilities & Services</h1>
      </div>
      <div className="container">
        <div className="menu">
          <button
            className={activeTab === "CL" ? "active" : ""}
            onClick={() => setActiveTab("CL")}
          >
            Central library
          </button>

          <button
            className={activeTab === "CC" ? "active" : ""}
            onClick={() => setActiveTab("CC")}
          >
            Computer Center
          </button>

          <button
            className={activeTab === "Hostels" ? "active" : ""}
            onClick={() => setActiveTab("Hostels")}
          >
            Hostels
          </button>
          </div> 

          <div className="content">
            {activeTab==="CL" && (
                <>
                    <p className="section-heading">Central library</p>
                    <hr className="section-line"/>
                    <p>Library at BPMCE fully air-conditioned buildings with enough infrastructure to augment the needs of students. It has vast collection of many text and reference books besides other resource materials. The main objective is to deliver world class service to its users by providing various books, journals, dailies, magazines and other related materials.</p>
                </>
            )}

            {activeTab==="CC" && (
                <>
                    <p className="section-heading">Computer Center</p>
                    <hr className="section-line"/>
                    <p>BP Mandal College Of Engineering has excellent infrastructure facilities such as spacious and air-conditioned classrooms to provide students a comfortable environment for learning. The College has well equipped state- of – art Laboratories. All the labs and workshops in their respective discipline are highly spacious, well equipped with adequate equipment to meet the learning requirements of students and help them in carrying out Research and Development Projects. Computer labs are laced with high speed internet connection.</p>
                    </>
            )}

            {activeTab==="Hostels" && (
                <>
                    <p className="section-heading">Hostels</p>
                    <hr className="section-line"/>
                    <p>
                        BPMCE provides well-maintained hostel facilities for boys and girls.
      The hostels offer a safe, disciplined, and comfortable environment
      with furnished rooms, mess facilities, 24×7 security, Wi-Fi
      connectivity, and medical support.
                    </p>
                </>
            )}
          </div>
        
        
          </div>
        </div>
    );
}
export default Facilities;