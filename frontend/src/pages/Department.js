import React, { act, useState } from "react";
import img from "../assets/banner-civil-engineering.jpg";
// import imgg from "../assets/download.gif";
import img1 from "../assets/download1.jpg";
import img2 from "../assets/images1.jpg";
import img3 from "../assets/image01.jpg";
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

<div className="faculty-box">
  <h3>Prof. Kunal Kumar (HoD)</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Civil Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor & Head of Department</p>
      <p><strong>Phone:</strong> 8084575671</p>
      <p><strong>Email:</strong> kunal1989kumar@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Akhilesh Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      {/* <img src={imgg} alt="Prof. Akhilesh Kumar" /> */}
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Civil Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 8789297615</p>
      <p><strong>Email:</strong> akhileshkumar3804@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Mr. Nishikant Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Civil Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9882559784</p>
      <p><strong>Email:</strong> nishikantbpmce32@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Raushan Anand</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Civil Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong></p>
      <p><strong>Email:</strong> raushanbpmc@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Vicky Anand</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Civil Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 7011851841</p>
      <p><strong>Email:</strong> Vickya.pg18.ce@Nitp.ac.in</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Pankaj Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Civil Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9826822401</p>
      <p><strong>Email:</strong> pankajkumarpk8888@gmail.com</p>
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

               <div className="faculty-box">
  <h3>Prof. Akhilesh Kumar (HoD)</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Civil Engineering with Computer Application</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 8789297615</p>
      <p><strong>Email:</strong> akhileshkumar3804@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Mr. Nishikant Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Civil Engineering with Computer Application</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9882559784</p>
      <p><strong>Email:</strong> nishikantbpmce32@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Kunal Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Civil Engineering with Computer Application</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 8084575671</p>
      <p><strong>Email:</strong> kunal1989kumar@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Vicky Anand</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Civil Engineering with Computer Application</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 7011851841</p>
      <p><strong>Email:</strong> Vickya.pg18@Nitp.ac.in</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Pankaj Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Civil Engineering with Computer Application</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9826822401</p>
      <p><strong>Email:</strong> pankajkumarpk8888@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Raushan Anand</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Civil Engineering with Computer Application</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 8676904033</p>
      <p><strong>Email:</strong> raushanbpmce@gmail.com</p>
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

              <div className="faculty-box">
  <h3>Prof. Arbind Kumar Amar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Mechanical Engineering</p>
      <p><strong>Designation:</strong> Associate Professor, Principal-in-charge</p>
      <p><strong>Phone:</strong> 9386164570</p>
      <p><strong>Email:</strong> ak_amar73@yahoo.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Dr. Ajay Giri</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Mechanical Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor, Head of Department</p>
      <p><strong>Phone:</strong> 9837461332</p>
      <p><strong>Email:</strong> ajay_giri05@rediffmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Uttam Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Mechanical Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9661358043</p>
      <p><strong>Email:</strong> uttamiitp1@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Firoz Akhtar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Mechanical Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9661212563</p>
      <p><strong>Email:</strong> firozakhtar1581@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Rahul Ranjan Bharti</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Mechanical Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 8585936360</p>
      <p><strong>Email:</strong> 15rahulbharti@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Bablu Das</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Mechanical Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 8864024435</p>
      <p><strong>Email:</strong> bkmech78@gmail.com</p>
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
            <p className="section-heading" id="ce">About Electrical & Electronics Engineering</p>
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

              <div className="faculty-box">
  <h3>Prof. Mithlesh Kumar (HoD)</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Electrical and Electronics Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor & HoD</p>
      <p><strong>Phone:</strong> 9905234255</p>
      <p><strong>Email:</strong> bpmceeee110@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Hare Krishna Mishra</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Electrical and Electronics Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9667152999</p>
      <p><strong>Email:</strong> hare.dbit@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Ashish Kumar Suman</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Electrical and Electronics Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9773823121</p>
      <p><strong>Email:</strong> sumanashish.rkt@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Mitesh Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Electrical and Electronics Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9074359119</p>
      <p><strong>Email:</strong> mitesh.sva@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Nitish Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Electrical and Electronics Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9990169965</p>
      <p><strong>Email:</strong> nitianj@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Abhimanyu Mandal</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Electrical and Electronics Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 7000374740</p>
      <p><strong>Email:</strong> mandal.abhimanyu225@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Kumar Ask</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Electrical and Electronics Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9798152615</p>
      <p><strong>Email:</strong> kumar29ask@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Bhavesh Nandan</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Electrical and Electronics Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 8864024435</p>
      <p><strong>Email:</strong> bkmech78@gmail.com</p>
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
            <img src={img2} alt="BPMCE Campus" className="img"/>
            <p className="section-heading" >About Computer Science & Engineering</p>
            <hr className="section-line"/>

            <p className="about-pages">
          Welcome to the Department of Computer Science and Engineering at BPMCE, Madhepura.
          It is my pleasure to express my thoughts as HOD that we are developing Engineers with a rich blend of competent, technical, managerial, and social skills and contribute to nation-building. The department places emphasis on all the aspects of computers such as Computer Networks, Design, and Analysis of Algorithms, Computer Organization and Architecture, Operating Systems, Database Systems, Theory of Computation, Computer Graphics, and many more. The department takes the initiative to improve the soft skills, analytical capabilities, and verbal communication of the students in such a manner that they can face the competition in the corporate world confidently. To meet the objectives, the division pays special emphasis on teaching and hands-on practical work. Students exhibit their innovative ideas, skills, and potential as final-year projects. The excellent infrastructure, and teaching faculty of the best kind of the division ensuring quality education such as interaction among students, parents, and staff, along with a Training and Placement Wing ensures a bright future for its scholar. The Department of Computer Science and Engineering utilizes suitable computer technology in its daily activities to provide a conducive environment for learning and exploring the world of computer science. The department primarily provides undergraduate students with knowledge and skills in the field of computer science. CSE students are encouraged to be the best software professionals or entrepreneurs through modern and innovative teaching-learning processes.I congratulate the team of faculty members and the students for their amazing and continuous efforts and wish all of them a great academic career.
          </p>
          <div className="hod-sign">
               <p><strong>Best Wishes,</strong></p>
               <p>Murlidhar Prasad Singh</p>
               <p>Assistant Professor & HOD</p>
               <p>Department of CSE</p>
              </div>

              <p className="section-heading">List of Faculties</p>
              <hr className="section-line"/>

              <div className="faculty-box">
  <h3>Prof. Murlidhar Prasad Singh (HoD)</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor, Head of Department</p>
      <p><strong>Phone:</strong> 9074687528</p>
      <p><strong>Email:</strong> singhmurlidhar@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Md. Ehtashamoul Haque</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 8053396077</p>
      <p><strong>Email:</strong> ehtasham47@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Arun Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor (Guest)</p>
      <p><strong>Phone:</strong> 6376068291</p>
      <p><strong>Email:</strong> arunkr75@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Mr. Ravi Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering</p>
      <p><strong>Designation:</strong> Lab Assistant (Guest)</p>
      <p><strong>Phone:</strong> 8114508113</p>
      <p><strong>Email:</strong> sonubhardwaj4200@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Amit Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor, Head of Department</p>
      <p><strong>Phone:</strong> 9798005363</p>
      <p><strong>Email:</strong> amitbcebhagalpur@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Md Izhar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9572754777</p>
      <p><strong>Email:</strong> mdizhar1996@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Manisha Kumari Singh</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 7992320227</p>
      <p><strong>Email:</strong> manisha.ks241@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Praveen Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 8789382669</p>
      <p><strong>Email:</strong> praveenkumaryadav782@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Sujeet Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 7004216261</p>
      <p><strong>Email:</strong> ksujeet.cs@gmail.com</p>
    </div>
  </div>
</div>

         <p className="section-heading">Vision</p>
           <hr className="section-line"/> 
           <p className="about-pages">To excel in undergraduate and graduate level studies in all sub-areas of computer science & engineering and to make a prominent professional with research and innovation skills useful for industrial and social needs.</p> 
           <p className="section-heading">Mission</p>
           <hr className="section-line"/>
           <ul className="about-pages">
            <li>To provide quality undergraduate education in theoretical as well as practical aspect of computer science which enables students to effectively apply their knowledge to solve real-world problems and thus enhance their potential and knowledge to achieve best in all manners of life.</li>
            <li>To cultivate/skill students to incorporate for team spirit, efficient problem-solving skill, lifelong learning skill, better adaptability for various challenges in technologies. It will further help them to become good communicator, efficient leader, and develop entrepreneurship skill.</li>
            <li>To provide fundamental knowledge of computer science and training to other discipline of engineering at B.P.M.C.E. Madhepura.</li>
            <li>Induce ethical values and spirit of social commitment</li>
           </ul>
        </>
       )}

       {activeTab==="aiml" && (
        <>
           <p className="section-heading" id="ce">About Computer Science & Engineering(AIML)</p>
            <hr className="section-line"/>

            <p className="about-pages">
          Artificial Intelligence is one of the immerged technology. Now a day it is used more or less in every expect of life e.g. Healthcare, transportation, manufacturing etc. There is a very shining career opportunity in the field of AI & ML. We may say that this is the period of AI & ML. In the realm of Computer Science Engineering with a focus on Artificial Intelligence and Machine Learning, our department continues to be at the forefront of cutting-edge research, innovation, and academic excellence. This academic year promises to be no different, as we collectively strive to push the boundaries of knowledge and explore the vast potential of AI and ML technologies. Our dedicated faculty members, with their expertise and passion, are committed to providing you with a learning experience that is not only academically enriching but also prepares you for the dynamic and ever-evolving field of AI and ML. To our students, I encourage you to seize every opportunity to engage with the latest advancements in technology, participate in research initiatives, and contribute your unique perspectives to the department. Your curiosity and creativity are the driving forces behind the transformative projects and ideas that emerge from our academic community. As we navigate the challenges and embrace the opportunities that come our way, let us foster a collaborative and inclusive environment where ideas flourish and talents thrive. Here’s to a year of exploration, growth, and accomplishments! Together, let us continue to make our department a hub of innovation and a source of inspiration for the entire campus. Best wishes for a successful academic year.
          </p>
          <div className="hod-sign">
               <p><strong>Best Wishes,</strong></p>
              <p>Md. Ehtashamoul Haque</p>
              <p>Assistant Professor & HOD</p>
              </div>

              <p className="section-heading">List of Faculties</p>
              <hr className="section-line"/>

              <div className="faculty-box">
  <h3>Prof. Md. Ehtashamoul Haque (HoD)</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering (AIML)</p>
      <p><strong>Designation:</strong> Assistant Professor & HoD</p>
      <p><strong>Phone:</strong> 8053396077</p>
      <p><strong>Email:</strong> ehtasham47@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Manisha Kumari Singh</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering (AIML)</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 7992320227</p>
      <p><strong>Email:</strong> manisha.ks241@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Amit Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering (AIML)</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9798005363</p>
      <p><strong>Email:</strong> amitbcebhagalpur@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Murlidhar Prasad Singh</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering (AIML)</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9074687528</p>
      <p><strong>Email:</strong> singhmurlidhar@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Praveen Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering (AIML)</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 8789382669</p>
      <p><strong>Email:</strong> praveenkumaryadav782@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Sujeet Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering (AIML)</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 7004216261</p>
      <p><strong>Email:</strong> ksujeet.cs@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Md Izhar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> Computer Science & Engineering (AIML)</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9572754777</p>
      <p><strong>Email:</strong> mdizhar1996@gmail.com</p>
    </div>
  </div>
</div>


        </>
       )}

       {activeTab==="ag" && (
        <>
          
          <p className="section-heading">About 3D Animation and Graphics</p>
            <hr className="section-line"/>

            <p className="about-pages">
          Welcome to the Department of 3 D ANIMATION AND GRAPHICS at BPMCE, Madhepura. It is my pleasure to express my thoughts as HOD that we are developing Engineers with a rich blend of competent, technical, managerial, and social skills and contribute to nation-building and I believe “there is no any shortcut for “HARDWORK” “. Department places emphasis on all the aspects of computers such as Computer Networks, Design and Analysis of Algorithm, Computer organization and Architecture, Operating System, Database Management System, Theory of Computation, Computer Graphics and many more. Department takes the initiative to improve the soft skills, analytical capabilities, and verbal communication of the students in such a manner that they can face the competition in the corporate world confidently. To meet the objectives, “Try not to become a man of success but rather try to become a man of VALUE“ the division pays special emphasis on teaching and hands-on practical work. Students exhibit their innovative ideas, skills and potential as final year projects. The excellent infrastructure, teaching faculty of the best kind of the division ensuring quality education such as interaction among students, parents, and staff, along with a Training and Placement Wing ensures a bright future for its scholar. The department of Computer Science and Engineering utilizes suitable computer technology in its daily activities to provide a conducive environment for learning and exploring the world of computer science. The department primarily provides undergraduate students with knowledge and skills in the field of computer science. 3DAG students are encouraged to be the best software professionals or entrepreneurs through modern and innovative teaching-learning processes. I congratulate the team of faculty members and the students for their amazing and continuous efforts and wish all of them a great academic career.
          </p>

          <div className="faculty-box">
    <h3>Prof. Murlidhar Prasad Singh (HoD)</h3>
  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> 3D Animation and Graphics</p>
      <p><strong>Designation:</strong> Assistant Professor & HoD</p>
      <p><strong>Phone:</strong> 9074687528</p>
      <p><strong>Email:</strong> singhmurlidhar@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Md. Ehtashamoul Hoque</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> 3D Animation and Graphics</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 8053396077</p>
      <p><strong>Email:</strong> ehtasham47@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Manisha Kumari Singh</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> 3D Animation and Graphics</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 7992320227</p>
      <p><strong>Email:</strong> manisha.ks241@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Amit Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> 3D Animation and Graphics</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9798005363</p>
      <p><strong>Email:</strong> amitbcebhagalpur@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Praveen Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> 3D Animation and Graphics</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 8789382669</p>
      <p><strong>Email:</strong> praveenkumaryadav782@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Sujeet Kumar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> 3D Animation and Graphics</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 7004216261</p>
      <p><strong>Email:</strong> ksujeet.cs@gmail.com</p>
    </div>
  </div>
</div>

<div className="faculty-box">
  <h3>Prof. Md Izhar</h3>

  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>

    <div className="faculty-info">
      <p><strong>Department:</strong> 3D Animation and Graphics</p>
      <p><strong>Designation:</strong> Assistant Professor</p>
      <p><strong>Phone:</strong> 9572754777</p>
      <p><strong>Email:</strong> mdizhar1996@gmail.com</p>
    </div>
  </div>
</div>

        </>
       )}

       {activeTab==="ash" && (
        <>
         <img src={img3} alt="BPMCE Campus" className="img"/>
          <p className="section-heading" >About Department</p>
            <hr className="section-line"/>

            <p className="about-pages">
       The department of Applied Sciences and Humanities of B.P. Mandal College of Engineering, Madhepura focus on the creation and application of knowledge in the disciplines of Physics, Chemistry, Mathematics, English and Humanities. The department was established in 2016 and the department has been running to support the B. Tech programme. The department The under the dynamic Guidance of its Principal, <strong>Prof. Arvind kumar Amar</strong>  and leadership HOD,<strong>Prof. Manish Kumar Jaiswal</strong>  are focused to turn students into outstanding professionals. Department of Applied Sciences equips students with technical knowledge, skill and ability; motivating them to think creatively, helping them to act independently and take decisions accordingly in all their scientific pursuits and other endeavours. Department has Well-equipped and established with physics, Chemistry, and Smart Class and library etc.
          </p>

          <p className="section-heading" >Objective</p>
            <hr className="section-line"/>        
           <p className="about-pages">To be center of knowledge acquisition, innovation in technical education field and research work and social contribution.</p>
          
           <p className="section-heading">List of Faculties</p>
              <hr className="section-line"/>

              {/* Faculty 1 */}
<div className="faculty-box">
  <h3>Dr. Manish Kumar Jaiswal (HoD)</h3>
  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>
    <div className="faculty-info">
      <p><strong>Department:</strong> Applied Science & Humanities</p>
      <p><strong>Designation:</strong> Assistant Professor, Chemistry Cum HOD</p>
      <p><strong>Phone:</strong> 8802059018</p>
      <p><strong>Email:</strong> jaiswal922@gmail.com</p>
    </div>
  </div>
</div>

{/* Faculty 2 */}
<div className="faculty-box">
  <h3>Dr. Sarangdhar Singh</h3>
  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>
    <div className="faculty-info">
      <p><strong>Department:</strong> Applied Science & Humanities</p>
      <p><strong>Designation:</strong> Guest Assistant Professor (Math)</p>
      <p><strong>Phone:</strong> 8539997008</p>
      <p><strong>Email:</strong> N/A</p>
    </div>
  </div>
</div>

{/* Faculty 3 */}
<div className="faculty-box">
  <h3>Dr. Ajay Kumar</h3>
  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>
    <div className="faculty-info">
      <p><strong>Department:</strong> Applied Science & Humanities</p>
      <p><strong>Designation:</strong> Assistant Professor (Mathematics)</p>
      <p><strong>Phone:</strong> 8770446283</p>
      <p><strong>Email:</strong> ajaykumarrgpv@gmail.com</p>
    </div>
  </div>
</div>

{/* Faculty 4 */}
<div className="faculty-box">
  <h3>Dr. Jitendra</h3>
  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>
    <div className="faculty-info">
      <p><strong>Department:</strong> Applied Science & Humanities</p>
      <p><strong>Designation:</strong> Assistant Professor (Mathematics)</p>
      <p><strong>Phone:</strong> 8840100790</p>
      <p><strong>Email:</strong> jgupta.bbau@gmail.com</p>
    </div>
  </div>
</div>

{/* Faculty 5 */}
<div className="faculty-box">
  <h3>Dr. S. N. Rai</h3>
  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>
    <div className="faculty-info">
      <p><strong>Department:</strong> Applied Science & Humanities</p>
      <p><strong>Designation:</strong> Assistant Professor (Mathematics)</p>
      <p><strong>Phone:</strong> 9415596204</p>
      <p><strong>Email:</strong> shobhnathrai802@gmail.com</p>
    </div>
  </div>
</div>

{/* Faculty 6 */}
<div className="faculty-box">
  <h3>Dr. Neha Shivhare</h3>
  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>
    <div className="faculty-info">
      <p><strong>Department:</strong> Applied Science & Humanities</p>
      <p><strong>Designation:</strong> Assistant Professor (Chemistry)</p>
      <p><strong>Phone:</strong> 9910727811</p>
      <p><strong>Email:</strong> n.shivhare7@gmail.com</p>
    </div>
  </div>
</div>

{/* Faculty 7 */}
<div className="faculty-box">
  <h3>Prof. Md. Sajid</h3>
  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>
    <div className="faculty-info">
      <p><strong>Department:</strong> Applied Science & Humanities</p>
      <p><strong>Designation:</strong> Assistant Professor (Chemistry)</p>
      <p><strong>Phone:</strong> 8287803806</p>
      <p><strong>Email:</strong> iamalrashid@gmail.com</p>
    </div>
  </div>
</div>

{/* Faculty 8 */}
<div className="faculty-box">
  <h3>Dr. Shakila Kumari</h3>
  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>
    <div className="faculty-info">
      <p><strong>Department:</strong> Applied Science & Humanities</p>
      <p><strong>Designation:</strong> Assistant Professor (English)</p>
      <p><strong>Phone:</strong> 9304478448</p>
      <p><strong>Email:</strong> shakilashikha10@gmail.com</p>
    </div>
  </div>
</div>

{/* Faculty 9 */}
<div className="faculty-box">
  <h3>Prof. Prity Kumari Choudhary</h3>
  <div className="faculty-body">
    <div className="faculty-img">
      <div className="profile-icon">👤</div>
    </div>
    <div className="faculty-info">
      <p><strong>Department:</strong> Applied Science & Humanities</p>
      <p><strong>Designation:</strong> Assistant Professor (English)</p>
      <p><strong>Phone:</strong> 7292870275</p>
      <p><strong>Email:</strong> prity101195@gmail.com</p>
    </div>
  </div>
</div>

          <p className="section-heading">Vision</p>
           <hr className="section-line"/> 
          <p className="about-pages">“The objective of the department is to cater our students to pursue both intellectual growth and professional development to motivate the student to have a strong background in the basic science for the engineering curriculum and to feed the budding engineer with fine aspect of science, which make them to understand, endeavor and contribute to the technological advancement of tomorrow.”</p> 
           <p className="section-heading">Mission</p>
           <hr className="section-line"/>
           <p className="about-pages">The department is committed to teach our student to question critically, thing logically, communicate clearly and live ethically also give encouragement to the students by giving the latest development in science so the they can enterprise it for development of technology and investigate the researcher in a student so that he will be an inventor of tomorrow.</p>
        </> 
       )}
      </div>
    </div>

    </div>
  );
}
export default Departments;