import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./CourseInfo.css";

function CourseInfo() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const courseData = {
    cse: {
      title: "B.Tech – Computer Science & Engineering",
      duration: "4 Years",
      description:
        "Focuses on programming, data structures, algorithms, web development, AI, and modern computing technologies."
    },
    aiml: {
      title: "B.Tech – CSE (AI & ML)",
      duration: "4 Years",
      description:
        "Specialized program focusing on Artificial Intelligence, Machine Learning, Data Science, and automation."
    },
    civil: {
      title: "B.Tech – Civil Engineering",
      duration: "4 Years",
      description:
        "Covers construction technology, structural design, surveying, and infrastructure development."
    },
    mech: {
      title: "B.Tech – Mechanical Engineering",
      duration: "4 Years",
      description:
        "Includes manufacturing, thermal engineering, machine design, and industrial practices."
    },
    civilca:{
        title: "B.Tech – Civil Engineering with Computer Applications",
      duration: "4 Years",
      description:
        "This interdisciplinary program combines core civil engineering concepts with computer applications. It focuses on construction planning software, data analysis, programming basics, project management tools, and smart infrastructure technologies."
    },
    eee:{
      title: "B.Tech – Electrical and Electronics Engineering",
      duration: "4 Years",
      description:
        "This program covers electrical circuits, power systems, electrical machines, control systems, and electronics. It prepares students for careers in power generation, automation, renewable energy, and electrical system design."
    },
    animation:{
      title: "3D Animation and Graphics",
      duration: "4 Years",
      description:
        "This program focuses on 3D modeling, animation techniques, visual effects, game design, and digital media technologies. It equips students with creative and technical skills for careers in animation studios, gaming, and multimedia industries."
    }
  };

  const course = courseData[courseId];

  if (!course) {
    return <h2 style={{ textAlign: "center" }}>Course Not Found</h2>;
  }

  return (
    <div className="course-info-page">
      <h1>{course.title}</h1>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p>{course.description}</p>
      <button
        className="apply-btn"
        onClick={() => navigate("/apply")}
      >
        Apply Now
      </button>
    </div>
  );
}

export default CourseInfo;
