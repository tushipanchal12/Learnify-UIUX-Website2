import { useEffect, useState } from "react";
import { BookOpen, Clock3, LayoutDashboard, LogOut, Settings, Trophy, UserRound, Play } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { courses } from "../data";

export default function Dashboard() {
  const [user,setUser] = useState({name:"Alex Morgan",email:"alex@example.com"});
  const navigate = useNavigate();
  useEffect(()=>{try{const saved=JSON.parse(localStorage.getItem("learnifyUser"));if(saved)setUser(saved)}catch{}},[]);
  const logout=()=>{localStorage.removeItem("learnifyUser");navigate("/")};
  const enrolled=[{course:courses[0],progress:72,next:"Wireframing and user flows"},{course:courses[1],progress:45,next:"Responsive layouts"}];
  return <main className="dashboard-page"><div className="container dashboard-layout">
    <aside className="dashboard-sidebar"><div className="sidebar-label">LEARNING SPACE</div><Link className="side-link active" to="/dashboard"><LayoutDashboard/> Overview</Link><Link className="side-link" to="/courses"><BookOpen/> Browse courses</Link><Link className="side-link" to="/about"><UserRound/> About Learnify</Link><button className="side-link side-logout" onClick={logout}><LogOut/> Log out</button><div className="sidebar-help"><div className="help-icon">✦</div><strong>Keep growing!</strong><p>Your next big skill is just one lesson away.</p><Link to="/courses">Find a course →</Link></div></aside>
    <section className="dashboard-content"><div className="dashboard-heading"><div><span className="eyebrow">YOUR LEARNING SPACE</span><h1>Good morning, {user.name.split(" ")[0]} 👋</h1><p>Ready to continue learning today?</p></div><div className="profile-chip"><span>{user.name.charAt(0).toUpperCase()}</span><div><strong>{user.name}</strong><small>Student account</small></div></div></div>
      <div className="dashboard-stats"><div className="dash-stat"><span className="stat-icon purple"><BookOpen/></span><strong>04</strong><small>Enrolled courses</small></div><div className="dash-stat"><span className="stat-icon green"><Trophy/></span><strong>68%</strong><small>Average progress</small></div><div className="dash-stat"><span className="stat-icon orange"><Clock3/></span><strong>12h</strong><small>Learning time</small></div></div>
      <div className="dashboard-section-head"><div><span className="eyebrow">YOUR CLASSROOM</span><h2>Continue learning</h2></div><Link to="/courses">Explore courses →</Link></div>
      <div className="enrolled-list">{enrolled.map(({course,progress,next})=><article className="enrolled-card" key={course.id}><img src={course.image} alt={course.title}/><div className="enrolled-info"><span className="course-category-text">{course.category}</span><h3>{course.title}</h3><p>Next lesson: {next}</p><div className="progress-line"><span style={{width:`${progress}%`}}/></div><small>{progress}% completed</small></div><Link className="btn btn-primary continue-btn" to={`/courses/${course.id}`}><Play size={15} fill="currentColor"/> Continue</Link></article>)}</div>
      <div className="dashboard-tip"><span>✦</span><div><strong>A little progress adds up.</strong><p>Set aside 20 minutes today to keep your learning streak alive.</p></div></div>
    </section>
  </div></main>;
}