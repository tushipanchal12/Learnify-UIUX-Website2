import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="brand" aria-label="Learnify home">
      <span className="brand-mark"><GraduationCap size={22} /></span>
      <span>Learnify</span>
    </Link>
  );
}