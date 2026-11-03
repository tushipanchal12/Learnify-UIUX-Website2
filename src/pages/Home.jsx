import { ArrowRight, Play, Sparkles, BookOpen, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { features, courses } from "../data";
import FeatureCard from "../components/FeatureCard";
import CourseCard from "../components/CourseCard";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={15}/> LEARN WITHOUT LIMITS</span>
            <h1>Learn new skills.<br/><span>Build your future.</span></h1>
            <p>Discover expert-led courses, learn at your own pace, and develop the skills you need to achieve your career goals.</p>
            <div className="hero-actions"><Link className="btn btn-primary btn-large" to="/courses">Explore Courses <ArrowRight size={18}/></Link><a className="watch-link" href="#why"><span><Play size={14} fill="currentColor"/></span> Why Learnify?</a></div>
            <div className="hero-proof"><div className="avatar-stack"><i>A</i><i>M</i><i>J</i><i>+</i></div><div><strong>10,000+ learners</strong><small>growing with Learnify</small></div></div>
          </div>
          <div className="hero-visual">
            <div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div>
            <div className="hero-image-frame"><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=90" alt="Students learning together"/></div>
            <div className="floating-card floating-rating"><span className="floating-icon"><Trophy size={19}/></span><div><strong>Top rated courses</strong><small>4.9/5 average rating</small></div></div>
            <div className="floating-card floating-progress"><span className="progress-ring">78%</span><div><strong>Keep it up!</strong><small>Your learning journey</small></div></div>
          </div>
        </div>
      </section>

      <section className="stats-strip"><div className="container stats-grid">
        <div><BookOpen/><strong>200+</strong><span>Online courses</span></div>
        <div><Users/><strong>10K+</strong><span>Happy students</span></div>
        <div><Trophy/><strong>50+</strong><span>Expert mentors</span></div>
        <div><Sparkles/><strong>4.9/5</strong><span>Student rating</span></div>
      </div></section>

      <section className="section container" id="why"><SectionTitle eyebrow="WHY LEARNIFY" title="Everything you need to succeed" text="A flexible learning experience built around your goals." center/>
        <div className="feature-grid">{features.map((f)=><FeatureCard key={f.title} {...f}/>)}</div>
      </section>

      <section className="section courses-section" id="courses"><div className="container">
        <div className="section-heading-row"><SectionTitle eyebrow="LEARN SOMETHING NEW" title="Popular courses" text="Handpicked courses to help you take the next step."/><Link className="btn btn-outline" to="/courses">View all courses <ArrowRight size={17}/></Link></div>
        <div className="course-grid">{courses.slice(0,3).map(c=><CourseCard key={c.id} course={c}/>)}</div>
      </div></section>

      <section className="container cta-section"><div className="cta-card"><div><span className="eyebrow light-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Ready to turn curiosity<br/>into capability?</h2><p>Start learning today. Your future self will thank you.</p><Link className="btn btn-white btn-large" to="/register">Start learning free <ArrowRight size={18}/></Link></div><div className="cta-decoration"><div className="cta-circle">L</div><Sparkles className="cta-sparkle" size={42}/></div></div></section>
    </>
  );
}