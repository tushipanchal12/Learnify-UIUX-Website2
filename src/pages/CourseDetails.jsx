import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Award, BookOpen, CheckCircle2, Clock3, PlayCircle, Star, Users } from "lucide-react";
import { courses } from "../data";

const lessons = ["Introduction to the learning journey","Understanding the fundamentals","Planning your first project","Building and testing your work","Portfolio project and next steps"];

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find(c=>c.id===Number(id)) || courses[0];
  const [enrolled,setEnrolled] = useState(false);
  return <main className="page-main">
    <section className="detail-hero"><div className="container detail-grid">
      <div className="detail-copy"><div className="breadcrumbs"><Link to="/">Home</Link> / <Link to="/courses">Courses</Link> / {course.category}</div><span className="eyebrow">{course.category.toUpperCase()} • {course.level.toUpperCase()}</span><h1>{course.title}</h1><p>{course.description}</p><div className="detail-rating"><Star size={16} fill="currentColor"/> <strong>{course.rating}</strong><span>({course.students} learners)</span></div><div className="detail-facts"><span><Clock3/> {course.duration}</span><span><BookOpen/> {course.lessons} lessons</span><span><Users/> {course.students} students</span></div></div>
      <aside className="enroll-card"><img src={course.image} alt={course.title}/><div className="enroll-card-body"><div className="price-line"><strong>{course.price}</strong><span>One-time payment</span></div><button className="btn btn-primary btn-full" onClick={()=>setEnrolled(true)}>{enrolled?"You're enrolled ✓":"Enroll now"}</button><p className="secure-note"><CheckCircle2 size={15}/> {enrolled?"Your course has been added to your learning list.":"Full lifetime access • Learn at your pace"}</p><hr/><h4>This course includes</h4><ul><li><PlayCircle/> On-demand video lessons</li><li><Award/> Completion certificate</li><li><BookOpen/> Practical exercises</li></ul></div></aside>
    </div></section>
    <section className="container detail-content"><div className="detail-main-column"><span className="eyebrow">COURSE OVERVIEW</span><h2>What you'll learn</h2><p className="muted-copy">Build practical knowledge through clear lessons, guided activities and a project you can share.</p><div className="learning-points"><span><CheckCircle2/> Understand key concepts and workflows</span><span><CheckCircle2/> Apply your learning through practical tasks</span><span><CheckCircle2/> Build confidence with a guided project</span><span><CheckCircle2/> Create work you can add to your portfolio</span></div><h2 className="curriculum-title">Course curriculum</h2><div className="lesson-list">{lessons.map((l,i)=><div className="lesson-row" key={l}><span className="lesson-number">{String(i+1).padStart(2,"0")}</span><span>{l}</span><span className="lesson-time">12–18 min</span></div>)}</div></div><aside className="mentor-card"><div className="mentor-avatar">JM</div><span className="eyebrow">YOUR INSTRUCTOR</span><h3>Jordan Miller</h3><p>Product designer & educator with 8+ years of industry experience.</p></aside></section>
  </main>;
}