import { useNavigate } from "react-router-dom";
import "./CourseDetails.css";

function CourseDetails() {
    const navigate = useNavigate();
  return (
    <div className="course-page">
      <h1 className="course-title">Our Courses</h1>
      <ul className="course-list">
       <li onClick={() => navigate("/courses/cse")}>
          B.Tech – Computer Science & Engineering
        </li>

        <li onClick={() => navigate("/courses/aiml")}>
          B.Tech – Computer Science & Engineering (AI & ML)
        </li>

        <li onClick={() => navigate("/courses/civil")}>
          B.Tech – Civil Engineering
        </li>

        <li onClick={() => navigate("/courses/civilca")}>
          B.Tech – Civil Engineering with Computer Applications
        </li>

        <li onClick={() => navigate("/courses/mech")}>
          B.Tech – Mechanical Engineering
        </li>

        <li onClick={() => navigate("/courses/eee")}>
          B.Tech – Electrical and Electronics Engineering
        </li>

        <li onClick={() => navigate("/courses/animation")}>
          B.Tech – 3D Animation and Graphics
        </li>
      </ul>
    </div>
  );
}

export default CourseDetails;
