import React, { act, useState } from "react";
import img from "../assets/banner-civil-engineering.jpg";
// import imgg from "../assets/download.gif";
import img1 from "../assets/download1.jpg";
import "./Department.css";


function Departments() {
  const [activeTab, setActiveTab] = useState("civil");
  return(
    <div className="page">
    <div className="heading">
      <h1>Departments</h1>
    </div>
    <div className="container">
      {/* LEFT SIDE BUTTONS */}
      <div className="menu">
        <button className={activeTab === "civil" ? "active" : ""}
            onClick={() => setActiveTab("civil")}>
          Civil Engineering
        </button>

        <button className={activeTab === "cewca" ? "active" : ""}
            onClick={() => setActiveTab("cewca")}>
          Civil Engineering with Computer Application
        </button>

        <button className={activeTab === "me" ? "active" : ""}
            onClick={() => setActiveTab("me")}>
          Mechanical Engineering
        </button>

        <button className={activeTab === "eee" ? "active" : ""}
            onClick={() => setActiveTab("eee")}>
          Electrical and Electronics Engineering
        </button>

         <button className={activeTab === "cse" ? "active" : ""}
            onClick={() => setActiveTab("cse")}>
          Computer Science & Engineering
        </button>

         <button className={activeTab === "aiml" ? "active" : ""}
            onClick={() => setActiveTab("aiml")}>
          Computer Science & Engineering (AIML)
        </button>

         <button className={activeTab === "ag" ? "active" : ""}
            onClick={() => setActiveTab("ag")}>
          3D Animation and Graphics
        </button>

        <button className={activeTab === "ash" ? "active" : ""}
            onClick={() => setActiveTab("ash")}>
          Applied Science & Humanities
        </button>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="content">
        {activeTab === "civil" && (
        <>  
        <img src={img} alt="BPMCE Campus" className="img"/> 
     
     
        <p className="section-heading"> About Civil Engineering</p>
         <hr className="section-line"/>         
            <p>Civil Engineering is considered to be the most versatile branch among all the engineering branches.
             It is the branch with a lot of diversity from Geo-technical Engineering to Structural engineering, 
             Environmental to Hydraulics, Transportation to Hydrology. Civil Engineering can be considered as a single largest branch among all the engineering branches.
             </p>             
           <p className="section-heading">List of Faculties</p>
           <hr className="section-line"/>

           <div class="faculty-box">
        <h3>Prof. Kunal Kumar (HoD)</h3>

          <div class="faculty-body">
            <div class="faculty-img">
              <div class="profile-icon">👤</div>
            </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Civil Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor & Head of Department</p>
              <p><strong>Phone:</strong>  8084575671</p>
              <p><strong>Email:</strong>  kunal1989kumar@gmail.com</p>
        </div>
       </div>
      </div>
  
      <div class="faculty-box">
        <h3>Prof. Akhilesh Kumar</h3>

          <div class="faculty-body">
            <div class="faculty-img">
              {/* <img src={imgg} alt="Prof. Akhilesh Kumar"/> */}
              <div class="profile-icon">👤</div>
            </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Civil Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong> 8789297615</p>
              <p><strong>Email:</strong> akhileshkumar3804@gmail.com</p>
        </div>
       </div>
      </div>

      

      <div class="faculty-box">
        <h3>Mr. Nishikant Kumar</h3>

          <div class="faculty-body">
            <div class="faculty-img">
              {/* <img src={imgg} alt="Prof. Akhilesh Kumar"/> */}
              <div class="profile-icon">👤</div>
            </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Civil Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>9882559784</p>
              <p><strong>Email:</strong>nishikantbpmce32@gmail.com</p>
        </div>
       </div>
      </div>

      <div class="faculty-box">
        <h3>Prof. Raushan Anand</h3>

          <div class="faculty-body">
            <div class="faculty-img">
              {/* <img src={imgg} alt="Prof. Akhilesh Kumar"/> */}
              <div class="profile-icon">👤</div>
            </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Civil Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong></p>
              <p><strong>Email:</strong>raushanbpmc@gmail.com</p>
        </div>
       </div>
      </div>

      <div class="faculty-box">
        <h3>Prof. VICKY ANAND</h3>

          <div class="faculty-body">
            <div class="faculty-img">
              {/* <img src={imgg} alt="Prof. Akhilesh Kumar"/> */}
              <div class="profile-icon">👤</div>
            </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Civil Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>7011851841</p>
              <p><strong>Email:</strong>Vickya.pg18.ce@Nitp.ac.in</p>
        </div>
       </div>
      </div>  

      <div class="faculty-box">
        <h3>Prof. Pankaj Kumar</h3>

          <div class="faculty-body">
            <div class="faculty-img">
              {/* <img src={imgg} alt="Prof. Akhilesh Kumar"/> */}
              <div class="profile-icon">👤</div>
            </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Civil Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>9826822401</p>
              <p><strong>Email:</strong>pankajkumarpk8888@gmail.com</p>
        </div>
       </div>
      </div> 
           <p className="section-heading">Vision</p>
           <hr className="section-line"/> 
           <p>To achieve excellent standards of quality education in Civil Engineering by keeping pace with rapidly changing technologies & to create technical manpower of Global Standards in Civil Engineering with capabilities of accepting new challenges.</p> 
           <p className="section-heading">Mission</p>
           <hr className="section-line"/>
           <ul>
            <li>To impart quality and value based education to raise satisfaction of all stake holders.</li>
            <li>To serve society and Nation for providing professional leadership.</li>
            <li>To create competent professionals who are trained in the design and implementation of Civil Engineering systems.</li>
           </ul>
        </>
       )}

       {activeTab==="cewca" && (
        <>
          <p className="section-heading" id="ce"> About Civil Engineering with Computer Application</p>
         <hr className="section-line"/>
         <p className="about-pages">Dear Esteemed Faculty, Staff, and Students of the Civil Engineering with Computer Applications Department, 
         I extend my warmest greetings to each member of our esteemed department. I want to take a moment to applaud the
          dedication and excellence that has come to define our department. Your unwavering commitment to academic rigor,
           research endeavors, and innovative teaching methodologies has truly set a high standard for others to follow.
            Our department’s unique blend of civil engineering principles and cutting-edge computer applications places 
            us at the forefront of technological advancements. I am confident that the collaborative spirit within our
             department will continue to foster a dynamic learning environment where theoretical knowledge seamlessly 
             integrates with practical applications. To our dedicated students, you are the heartbeat of our department. 
             Your thirst for knowledge, innovative thinking, and commitment to academic excellence make us proud. 
             I encourage each one of you to actively engage in departmental activities, research projects, 
             and extracurricular endeavors that align with your passions. As we collectively strive for excellence,
              let us remember that our strength lies in our unity. Let us foster an environment of mutual respect,
               open communication, and collaboration that paves the way for unprecedented achievements. 
               I am excited about the journey ahead and look forward to witnessing the remarkable accomplishments 
               that I am confident will define this academic year. Best wishes for a successful and fulfilling academic year.
                </p>

              <div className="hod-sign">
               <p><strong>Best Wishes,</strong></p>
               <p>Mr. Akhilesh Kumar</p>
               <p>Assistant Professor & HOD</p>
               <p>Department of CE with CA</p>
              </div>

               <p className="section-heading" id="ce">List of Faculties</p>
               <hr className="section-line"/>

               <div class="faculty-box">
               <h3>Prof. Akhilesh Kumar(HoD)</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Civil Engineering with Computer Application</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong> 8789297615</p>
              <p><strong>Email:</strong> akhileshkumar3804@gmail.com</p>
        </div>
       </div>
      </div>
        
        <div class="faculty-box">
        <h3>Mr. Nishikant Kumar</h3>

          <div class="faculty-body">
            <div class="faculty-img">
              <div class="profile-icon">👤</div>
            </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Civil Engineering with Computer Application</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>9882559784</p>
              <p><strong>Email:</strong>nishikantbpmce32@gmail.com</p>
        </div>
       </div>
      </div>

      <div class="faculty-box">
               <h3>Prof. Kunal Kumar</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Civil Engineering with Computer Application</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong> 8084575671</p>
              <p><strong>Email:</strong>kunal1989kumar@gmail.com</p>
        </div>
       </div>
      </div>

      <div class="faculty-box">
               <h3>Prof. Vicky Anand</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Civil Engineering with Computer Application</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>7011851841</p>
              <p><strong>Email:</strong>Vickya.pg18@Nitp.ac.in</p>
        </div>
       </div>
      </div>

      <div class="faculty-box">
               <h3>Prof. Pankaj Kumar</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Civil Engineering with Computer Application</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>9826822401</p>
              <p><strong>Email:</strong>pankajkumarpk8888@gmail.com</p>
        </div>
       </div>
      </div>

      <div class="faculty-box">
               <h3>Prof. Raushan Anand</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Civil Engineering with Computer Application</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>8676904033</p>
              <p><strong>Email:</strong>raushanbpmce@gmail.com</p>
        </div>
       </div>
      </div>

        </>
       )}

       {activeTab==="me" && (
        <>
        <img src={img1} alt="BPMCE Campus" className="img"/> 
          <p className="section-heading">About Mechanical Engineering</p>
          <hr className="section-line"/>
          <p className="about-pages">
            The branch of Mechanical Engineering is considered to be one of the oldest and broadest engineering discipline.
            The scope of the course varies from material research to machinery development, Nano Technology, Smart materials, Aerospace Technology, FMS, Automation and such other interrelated developments.
             Ample job opportunities are open for Mechanical Engineers in Aerospace, Automotive and Manufacturing sectors apart from research establishments. The areas of study includes Manufacturing processes, Mechatronics, 
            Heat and Mass Transfer, Tool Engineering and Design, Design of machine elements, CIM and Robotic.
          </p>
             <p className="section-heading">List of Faculties</p>
             <hr className="section-line"/>

              <div class="faculty-box">
               <h3>Prof. Arbind Kumar Amar</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Mechanical Engineering</p>
              <p><strong>Designation:</strong>Associate Professor, Principal-in-charge</p>
              <p><strong>Phone:</strong>9386164570</p>
              <p><strong>Email:</strong>ak_amar73@yahoo.com</p>
        </div>
       </div>
      </div>
        
        <div class="faculty-box">
        <h3>Dr. Ajay Giri</h3>

          <div class="faculty-body">
            <div class="faculty-img">
              <div class="profile-icon">👤</div>
            </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Mechanical Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor, Head of Department</p>
              <p><strong>Phone:</strong>9837461332</p>
              <p><strong>Email:</strong>ajay_giri05@rediffmail.com</p>
        </div>
       </div>
      </div>

      <div class="faculty-box">
               <h3>Prof. Uttam Kumar</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Mechanical Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>9661358043</p>
              <p><strong>Email:</strong>uttamiitp1@gmail.com</p>
        </div>
       </div>
      </div>

      <div class="faculty-box">
               <h3>Prof. Firoz Akhtar</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Mechanical Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>9661212563</p>
              <p><strong>Email:</strong> firozakhtar1581@gmail.com</p>
        </div>
       </div>
      </div>

      <div class="faculty-box">
               <h3>Prof. Rahul Ranjan Bharti</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Mechanical Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>8585936360</p>
              <p><strong>Email:</strong>15rahulbharti@gmail.com</p>
        </div>
       </div>
      </div>

      <div class="faculty-box">
               <h3>Prof. Bablu Das</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Mechanical Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>8864024435</p>
              <p><strong>Email:</strong>bkmech78@gmail.com</p>
        </div>
       </div>
      </div>
         <p className="section-heading">Vision</p>
           <hr className="section-line"/> 
           <p className="about-pages">To facilitate transformation of students into good mechanical engineers, responsible citizens and competent professionals for socio economic development of state and nation.</p> 
           <p className="section-heading">Mission</p>
           <hr className="section-line"/>
           <ul className="about-pages">
            <li>To develop the mechanical engineer to become mechanical engineering professional for socio and economic development of nation.</li>
            <li>To provide quality education and to bridge the gap between industry and academia.</li>
            <li>By using their engineering knowledge to become a responsible citizen for the development of society.</li>
           </ul>


        </>
       )}

       {activeTab==="eee" && (
        <>
            <p className="section-heading" id="ce">About Electrical and Electronics Engineering</p>
            <hr className="section-line"/>
            <p className="about-pages">
           It gives me an immense pleasure to note that our college B. P. Mandal college of Engineering Madhepura is bringing out the 3rd magazine. 
           “To acquire knowledge, one must study; But to acquire wisdom, one must observe.” 
           BPMCE provides a platform to every student to develop their learning abilities through magazine. 
           It is my pleasure to share my opinion as a HOD of Electrical and Electronics Engineering branch that this course covers core subjects of electrical & electronics area as well as
            analysis and methods of algorithm through various coding which helps to build the career in the field of Electrical domain, 
            Electronics and communication domain and also IT sector. Scope of this course includes circuit Analysis, power and control system, signal analysis, analog and power electronics, microcontroller-based network design based on digital control system. 
            It also encompasses telecommunication system which helps to develop overall competent engineers of their field. The entire purpose of professional knowledge and education is not only restricted to impart the bookish knowledge but instruct humanitarian values like courage,
            creativity, wisdom, compassion, integrity and reliability in a student. We have various practical laboratories such as basic electrical and electronics engineering lab, Electrical machines lab, digital and analog electronics lab, microcontroller and power electronics lab. Apart from this, 
            we also train the students through various software labs like MATLAB, PROTIOUS, C Language, Virtual labs etc. Students of EEE department take parts in technical and non technical activities, share their technical ideas, develop skills and find their potential to work in different industries. 
            I extend my warm wishes to all the members of our college who works in the backdrop to bring out the best in students. Warm.
          </p>
          <div className="hod-sign">
               <p><strong>Best Wishes,</strong></p>
               <p>Mithlesh Kumar</p>
               <p>Assistant Professor & HOD</p>
               <p>Department of EEE</p>
              </div>

              <p className="section-heading">List of Faculties</p>
              <hr className="section-line"/>

              <div class="faculty-box">
               <h3>Prof. Mithlesh Kumar (HoD)</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong>Electrical and Electronics Engineering</p>
              <p><strong>Designation:</strong>Assistant Professor & Head of Department</p>
              <p><strong>Phone:</strong>9905234255</p>
              <p><strong>Email:</strong> bpmceeee110@gmail.com</p>
        </div>
       </div>
      </div>

              <div class="faculty-box">
               <h3>Prof. Hare Krishna Mishra</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong>Electrical and Electronics Engineering</p>
              <p><strong>Designation:</strong>Assistant Professor</p>
              <p><strong>Phone:</strong>9667152999</p>
              <p><strong>Email:</strong>hare.dbit@gmail.com</p>
        </div>
       </div>
      </div>
        
        <div class="faculty-box">
        <h3>Prof. Ashish Kumar Suman</h3>

          <div class="faculty-body">
            <div class="faculty-img">
              <div class="profile-icon">👤</div>
            </div>

            <div class="faculty-info">
              <p><strong>Department:</strong>Electrical and Electronics Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong> 9773823121</p>
              <p><strong>Email:</strong>sumanashish.rkt@gmail.com</p>
        </div>
       </div>
      </div>

      <div class="faculty-box">
               <h3>Prof. Mitesh Kumar</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong>Electrical and Electronics Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>9074359119</p>
              <p><strong>Email:</strong>mitesh.sva@gmail.com</p>
        </div>
       </div>
      </div>

      <div class="faculty-box">
               <h3>Prof. Nitish Kumar</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong>Electrical and Electronics Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>9990169965</p>
              <p><strong>Email:</strong>nitianj@gmail.com</p>
        </div>
       </div>
      </div>

      <div class="faculty-box">
               <h3>Prof. Abhimanyu Mandal</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong>Electrical and Electronics Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>7000374740</p>
              <p><strong>Email:</strong>mandal.abhimanyu225@gmail.com</p>
        </div>
       </div>
      </div>

      <div class="faculty-box">
               <h3>Prof. Kumar Ask</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong>Electrical and Electronics Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>9798152615</p>
              <p><strong>Email:</strong>kumar29ask@gmail.com</p>
        </div>
       </div>
      </div>

      <div class="faculty-box">
               <h3>Prof. Bhavesh Nandan</h3>

               <div class="faculty-body">
               <div class="faculty-img">
              <div class="profile-icon">👤</div>
             </div>

            <div class="faculty-info">
              <p><strong>Department:</strong> Electrical and Electronics Engineering</p>
              <p><strong>Designation:</strong> Assistant Professor</p>
              <p><strong>Phone:</strong>8864024435</p>
              <p><strong>Email:</strong>bkmech78@gmail.com</p>
        </div>
       </div>
      </div>
         <p className="section-heading">Vision</p>
           <hr className="section-line"/> 
           <p className="about-pages">To excel knowledge in the area of electrical and electronics engineering innovation, education and research to meet the diversified needs of sustainable development of industry as well as society while maintaining professional ethics and human value.</p> 
           <p className="section-heading">Mission</p>
           <hr className="section-line"/>
           <ul className="about-pages">
            <li>To provide quality education in the domain of Electrical & Electronics Engineering.</li>
            <li>To enhance the skills towards the practical approach.</li>
            <li>To impart better skill to meet the challenges of the technical world.</li>
           </ul>


        </>
       )}

       {activeTab==="cse" && (
        <>

        </>
       )}

       {activeTab==="aiml" && (
        <>

        </>
       )}

       {activeTab==="ag" && (
        <>

        </>
       )}

       {activeTab==="ash" && (
        <>

        </>
       )}
      </div>
    </div>

    </div>
  );
}
export default Departments;