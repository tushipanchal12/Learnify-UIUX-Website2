import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { courses } from "../data";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", "Design", "Development", "Programming", "Business"];
  const filtered = useMemo(() => courses.filter(c =>
    (category === "All" || c.category === category) &&
    `${c.title} ${c.description}`.toLowerCase().includes(query.toLowerCase())
  ), [query, category]);

  return <main className="page-main">
    <section className="page-hero"><div className="container"><span className="eyebrow">EXPLORE & GROW</span><h1>Find your next <span>skill.</span></h1><p>Discover practical courses designed to help you reach your goals.</p></div></section>
    <section className="container courses-browser">
      <div className="course-toolbar"><label className="search-box"><Search size={19}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search for courses..."/></label><span className="result-count"><SlidersHorizontal size={16}/> {filtered.length} courses</span></div>
      <div className="filter-pills">{categories.map(c=><button key={c} className={category===c?"filter-pill active":"filter-pill"} onClick={()=>setCategory(c)}>{c}</button>)}</div>
      {filtered.length ? <div className="course-grid">{filtered.map(c=><CourseCard key={c.id} course={c}/>)}</div> : <div className="empty-state"><Search size={32}/><h3>No courses found</h3><p>Try another search or category.</p><button className="btn btn-outline" onClick={()=>{setQuery("");setCategory("All")}}>Clear filters</button></div>}
    </section>
  </main>;
}