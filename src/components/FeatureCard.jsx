import { Award, Clock3, GraduationCap } from "lucide-react";
const icons = { GraduationCap, Clock3, Award };

export default function FeatureCard({ icon, title, text }) {
  const Icon = icons[icon] || Award;
  return (
    <article className="feature-card">
      <span className="feature-icon"><Icon size={25}/></span>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#courses" className="text-link">Learn more <span>→</span></a>
    </article>
  );
}