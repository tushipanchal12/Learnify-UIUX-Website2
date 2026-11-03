import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff, GraduationCap, Sparkles } from "lucide-react";

export default function Auth({ mode="login" }) {
  const isRegister = mode==="register";
  const [show,setShow] = useState(false);
  const [form,setForm] = useState({name:"",email:"",password:""});
  const [message,setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const submit = e => {
    e.preventDefault();
    if(!form.email || !form.password || (isRegister && !form.name)) return;
    localStorage.setItem("learnifyUser",JSON.stringify({name:form.name || form.email.split("@")[0],email:form.email}));
    setMessage(isRegister ? "Your demo account is ready!" : "Welcome back!");
    setTimeout(()=>navigate("/dashboard",{state:{from:location.pathname}}),600);
  };
  return <main className="auth-page"><div className="auth-shell">
    <div className="auth-art"><div className="auth-art-content"><span className="eyebrow light-eyebrow"><Sparkles size={14}/> LEARN WITHOUT LIMITS</span><h1>Make today<br/>a learning day.</h1><p>Small steps, new skills and bigger possibilities. Your journey starts here.</p><div className="auth-art-illustration"><div className="auth-book"><GraduationCap size={70}/></div><span className="auth-orbit orbit-a"></span><span className="auth-orbit orbit-b"></span></div><div className="auth-art-note">✦ &nbsp; Learn something amazing today</div></div></div>
    <div className="auth-form-side"><div className="auth-form-wrap"><Link to="/" className="back-home">← Back to home</Link><span className="eyebrow">{isRegister?"JOIN THE COMMUNITY":"WELCOME BACK"}</span><h2>{isRegister?"Create your account":"Welcome back!"}</h2><p className="muted-copy">{isRegister?"Start building skills for the future.":"Continue your learning journey with Learnify."}</p>
      <form onSubmit={submit} className="auth-form">
        {isRegister && <label>Full name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Enter your full name"/></label>}
        <label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label>
        <label>Password<div className="password-field"><input required minLength="6" type={show?"text":"password"} value={form.password} onChange={e=>setForm({...form,password:e.target.value})} placeholder="Enter your password"/><button type="button" onClick={()=>setShow(!show)} aria-label="Toggle password visibility">{show?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></label>
        {isRegister && <label className="check-label"><input type="checkbox" required/> I agree to the Terms of Service and Privacy Policy.</label>}
        {!isRegister && <div className="forgot-row"><label className="check-label"><input type="checkbox"/> Remember me</label><a href="mailto:support@learnify.example">Forgot password?</a></div>}
        <button className="btn btn-primary btn-full btn-large" type="submit">{isRegister?"Create account":"Log in"}</button>
        {message && <p className="success-message">{message}</p>}
      </form>
      <p className="auth-switch">{isRegister?"Already have an account?":"New to Learnify?"} <Link to={isRegister?"/login":"/register"}>{isRegister?"Log in":"Create an account"}</Link></p>
      <p className="demo-note">Demo UI only — authentication is not connected to a backend.</p>
    </div></div>
  </div></main>;
}