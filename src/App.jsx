import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(()=>{window.scrollTo(0,0)},[pathname]);
  return null;
}

export default function App() {
  return <>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/courses/:id" element={<CourseDetails/>}/>
      <Route path="/login" element={<Auth mode="login"/>}/>
      <Route path="/register" element={<Auth mode="register"/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<main className="not-found container"><h1>Page not found</h1><a href="/">Go home</a></main>}/>
    </Routes>
    <Footer/>
  </>;
}