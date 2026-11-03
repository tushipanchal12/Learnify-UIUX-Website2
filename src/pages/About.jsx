import { ArrowRight, HeartHandshake, Lightbulb, Target } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return <main className="page-main">
    <section className="about-hero"><div className="container about-hero-grid"><div><span className="eyebrow">ABOUT LEARNIFY</span><h1>Learning that opens <span>possibilities.</span></h1><p>We believe everyone deserves the opportunity to learn, grow and build a future they are excited about.</p><Link className="btn btn-primary btn-large" to="/courses">Explore our courses <ArrowRight size={18}/></Link></div><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85" alt="Learnify community working together"/></div></section>
    <section className="section container"><SectionTitle eyebrow="OUR PURPOSE" title="Make learning work for everyone" text="We bring together practical education, supportive mentors and a community that celebrates progress." center/><div className="mission-grid"><article><span><Target/></span><h3>Our mission</h3><p>Make quality education accessible, practical and inspiring for every curious mind.</p></article><article><span><Lightbulb/></span><h3>Our vision</h3><p>A world where people can keep learning and adapting at every stage of life.</p></article><article><span><HeartHandshake/></span><h3>Our values</h3><p>Curiosity, inclusion, real-world skills and meaningful progress guide everything we do.</p></article></div></section>
    <section className="container about-banner"><div><span className="eyebrow light-eyebrow">GROW WITH US</span><h2>Your next opportunity<br/>starts with one lesson.</h2><Link className="btn btn-white" to="/register">Join Learnify <ArrowRight size={17}/></Link></div></section>
  </main>;
}