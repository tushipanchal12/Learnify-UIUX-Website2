import { Link } from "react-router-dom";
import { Clock3, Star, Users } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <Link to={`/courses/${course.id}`} className="course-image">
        <img src={course.image} alt={course.title} loading="lazy"/>
        <span className="course-category">{course.category}</span>
      </Link>
      <div className="course-content">
        <div className="course-meta"><span><Star size={14} fill="currentColor"/> {course.rating}</span><span>{course.level}</span></div>
        <h3><Link to={`/courses/${course.id}`}>{course.title}</Link></h3>
        <p className="course-description">{course.description}</p>
        <div className="course-stats"><span><Users size={14}/> {course.students} students</span><span><Clock3 size={14}/> {course.duration}</span></div>
        <div className="course-card-bottom"><strong>{course.price}</strong><Link to={`/courses/${course.id}`}>View course <span>→</span></Link></div>
      </div>
    </article>
  );
}