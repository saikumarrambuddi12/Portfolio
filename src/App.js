import React, { useState, useEffect } from 'react';
import { 
  Code, Layout, Server, Wrench, GraduationCap, Briefcase, Award, 
  Mail, Phone, MapPin, ExternalLink, Download, 
  Sun, Moon, ChevronUp, CheckCircle, Send, Sparkles, 
  Terminal, Cpu, Database, ShieldCheck, Eye
} from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const PORTFOLIO_DATA = {
  name: "Rambuddi Sai Kumar",
  title: "Frontend Developer",
  location: "Hyderabad, Telangana, India",
  email: "rambuddisaikumar@gmail.com",
  phone: "+91 7095894537",
  linkedin: "https://linkedin.com/in/saikumar-rambuddi-3baa751b1",
  github: "https://github.com",
  experienceYears: "2.1+",
  summary: "Frontend Developer with 2.1 years of professional experience, skilled in React.js, TypeScript, Next.js, and Tailwind CSS. Experienced in developing responsive, intuitive web applications, building reusable design systems, and integrating RESTful APIs",
  
  skills: [
    { name: "React.js", category: "Frontend", level: 92, icon: Code },
    { name: "JavaScript (ES6+)", category: "Frontend", level: 90, icon: Code },
    { name: "TypeScript", category: "Frontend", level: 82, icon: Code },
    { name: "Next.js", category: "Frontend", level: 80, icon: Code },
    { name: "HTML5 & CSS3", category: "Frontend", level: 95, icon: Code },
    { name: "Context API & Redux", category: "Frontend", level: 88, icon: Code },
    
    { name: "Tailwind CSS", category: "Styling", level: 95, icon: Layout },
    { name: "Bootstrap", category: "Styling", level: 85, icon: Layout },
    
    { name: "MySQL", category: "Backend & DB", level: 78, icon: Database },
    { name: "RESTful APIs", category: "Backend & DB", level: 90, icon: Server },
    
    { name: "Git & GitHub", category: "Tools & DevOps", level: 88, icon: Wrench },
    { name: "Docker", category: "Tools & DevOps", level: 70, icon: Cpu },
    { name: "Postman", category: "Tools & DevOps", level: 85, icon: Terminal },
    { name: "JWT Authentication", category: "Tools & DevOps", level: 85, icon: ShieldCheck }
  ],

  experiences: [
    {
      company: "Vega Web Solutions Pvt. Ltd",
      role: "Frontend Developer",
      duration: "08/2025 - 07/2026",
      location: "Hyderabad, India",
      highlights: [
        "Developed and maintained highly responsive, scalable web applications using React.js and Tailwind CSS.",
        "Converted UI/UX designs into pixel-perfect components with high cross-browser compatibility and accessible interfaces.",
        "Seamlessly integrated frontend applications with RESTful backend endpoints.",
        "Optimized client-side rendering speed, web accessibility scores, and device responsiveness."
      ],
      tech: ["React.js", "Tailwind CSS", "REST APIs", "JavaScript", "Context API"]
    },
    {
      company: "RFCHH Software Pvt Ltd",
      role: "Frontend Developer",
      duration: "08/2024 - 06/2025",
      location: "Hyderabad, India",
      highlights: [
        "Engineered and optimized a scalable tuition platform, improving student-tutor interaction efficiency by 40%.",
        "Reduced overall API response latency by 30% through targeted frontend data caching and query optimizations.",
        "Designed and implemented dynamic UI component libraries using React.js and Tailwind CSS to increase user engagement.",
        "Collaborated closely with backend teams for real-time data synchronization and secure session flow."
      ],
      tech: ["React.js", "Tailwind CSS", "REST APIs", "Performance Tuning"]
    }
  ],

  projects: [
    {
      id: "faircoupons",
      title: "Faircoupons",
      category: "E-Commerce / Deals",
      duration: "12/2025 - 02/2026",
      tech: ["Next.js", "Tailwind CSS", "REST APIs", "JavaScript"],
      summary: "A modern web-based deals and coupon aggregator platform connecting shoppers with real-time discounts.",
      details: [
        "Allowed users to browse, search, and apply discount codes across multi-tier retail categories.",
        "Implemented high-performance Next.js server components and real-time coupon API integration.",
        "Designed clean intuitive offer filters, discount copy-to-clipboard functionality, and live status badges."
      ]
    },
    {
      id: "hrms",
      title: "HRMS - Human Resource Management System",
      category: "Enterprise Web App",
      duration: "03/2025 - 06/2025",
      tech: ["React.js", "Tailwind CSS", "REST APIs", "JWT Auth"],
      summary: "Comprehensive enterprise HRMS platform automating employee lifecycles, payroll, and performance tracking.",
      details: [
        "Designed granular role-based modules for Admin, Teachers, Students, and HR personnel.",
        "Built dynamic tuition fee structures, payment tracking with automated PDF receipt generation mockups.",
        "Ensured bulletproof session state and secure payload transmission using JWT Authentication and RESTful APIs."
      ]
    },
    {
      id: "gruhapandittutions",
      title: "Gruhapandittutions",
      category: "EdTech Platform",
      duration: "10/2024 - 03/2025",
      tech: ["React.js", "Tailwind CSS", "REST APIs", "JWT Auth"],
      summary: "A massive tutoring platform connecting 10,000+ tutors and students with 5,000+ successful matches.",
      details: [
        "Optimized real-time interaction modules supporting 2,000+ group learning sessions and 1,500+ 1-on-1 sessions.",
        "Built tutor scheduling dashboards, instant inquiry flows, and smart location-based tutor matchers.",
        "Significantly improved page loading speeds and interactive component rendering responsiveness."
      ]
    }
  ],

  award: {
    title: "Frontend Developer Contribution Award",
    issuer: "Company Excellence Recognition",
    description: "Awarded for outstanding contributions in building a scalable tuition platform using React.js, Tailwind CSS, and REST APIs. Recognized for enhancing user experience, optimizing app load performance, and seamless backend API integration."
  },

  education: [
    {
      degree: "B.Tech in Computer Science & Technology Engineering",
      institution: "Kakinada Institute Of Science And Technology",
      period: "2019 - 2023",
      location: "Kakinada",
      grade: "6.34 CGPA"
    },
    {
      degree: "Board Of Intermediate Education (MPC)",
      institution: "Sri Chaitanya Junior College",
      period: "2017 - 2019",
      location: "Vishakapatanam",
      grade: "7.44 CGPA"
    },
    {
      degree: "Board of Secondary Education (SSC)",
      institution: "Narayana High School",
      period: "2016 - 2017",
      location: "Kuntikota",
      grade: "7.3 CGPA"
    }
  ]
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("All");
  const [skillCategory, setSkillCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setContactSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setContactSubmitted(false), 5000);
    }, 1200);
  };


const handleResumeDownload = () => {
  const link = document.createElement("a");

  link.href = "/R SAIKUMAR.pdf";
  link.download = "R SAIKUMAR.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const filteredSkills = PORTFOLIO_DATA.skills.filter(s => 
    skillCategory === "All" || s.category === skillCategory
  );

  const filteredProjects = PORTFOLIO_DATA.projects.filter(p => 
    activeTab === "All" || p.category.includes(activeTab) || p.tech.some(t => t.toLowerCase().includes(activeTab.toLowerCase()))
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-slate-950 text-slate-100 dark' : 'bg-slate-50 text-slate-800'}`}>
      
      {}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg' : 'bg-white/85 backdrop-blur-md border-b border-slate-200 shadow-md') : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-bold text-xl tracking-tight hover:opacity-90 transition">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
              RS
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent font-extrabold">
              Sai Kumar
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className={`p-2 rounded-xl transition-all ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button 
              onClick={handleResumeDownload}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-4 py-2 rounded-xl font-medium text-sm shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </nav>

      {}
      <section id="hero" className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
        {/* Background glow accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4" /> Available for New Opportunities
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">{PORTFOLIO_DATA.name}</span>
              </h1>

              <h2 className="text-xl sm:text-2xl font-semibold text-slate-400 flex items-center gap-2">
                <Code className="w-6 h-6 text-cyan-400 inline" /> {PORTFOLIO_DATA.title}
              </h2>

              <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Crafting pixel-perfect, highly responsive, and user-centric web applications with <span className="text-cyan-400 font-semibold">React.js</span>, <span className="text-blue-400 font-semibold">Next.js</span>, and <span className="text-indigo-400 font-semibold">Tailwind CSS</span>.
              </p>

              {/* Quick Details Badges */}
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm pt-2 text-slate-400">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> {PORTFOLIO_DATA.location}</span>
                <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-cyan-400" /> {PORTFOLIO_DATA.experienceYears} Years Exp.</span>
                <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-cyan-400" /> {PORTFOLIO_DATA.email}</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a 
                  href="#contact" 
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium shadow-lg shadow-cyan-500/25 transition-all active:scale-95 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> Get In Touch
                </a>
                
                <a 
                  href="#projects" 
                  className={`px-6 py-3 rounded-xl font-medium border transition-all flex items-center gap-2 ${darkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-200' : 'border-slate-300 hover:bg-slate-200 text-slate-800'}`}
                >
                  <Eye className="w-4 h-4" /> View Projects
                </a>

                <div className="flex items-center gap-3 pl-2">
                  <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noopener noreferrer" className={`p-2.5 rounded-xl border transition ${darkMode ? 'border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 bg-slate-900' : 'border-slate-200 hover:border-cyan-500 bg-white'}`}>
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href={PORTFOLIO_DATA.github} target="_blank" rel="noopener noreferrer" className={`p-2.5 rounded-xl border transition ${darkMode ? 'border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 bg-slate-900' : 'border-slate-200 hover:border-cyan-500 bg-white'}`}>
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Visual Decorative Card */}
            <div className="md:col-span-5 flex justify-center mt-8 md:mt-0">
              <div className={`w-full max-w-md p-6 rounded-2xl border shadow-2xl relative backdrop-blur-xl ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
                <div className="flex items-center justify-between border-b border-slate-700/50 pb-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">developer_profile.jsx</span>
                </div>
                
                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <p><span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-blue-400">name:</span> <span className="text-emerald-400">"{PORTFOLIO_DATA.name}"</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">role:</span> <span className="text-emerald-400">"Frontend Specialist"</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">yearsExp:</span> <span className="text-amber-400">2.1</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">coreTech:</span> [<span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"TypeScript"</span>, <span className="text-emerald-400">"TailwindCss"</span>],</p>
                  <p className="pl-4"><span className="text-blue-400">database:</span> [<span className="text-emerald-400">"MySQL"</span>],</p>
                  <p className="pl-4"><span className="text-blue-400">passions:</span> [<span className="text-emerald-400">"UI UX"</span>, <span className="text-emerald-400">"Performance"</span>, <span className="text-emerald-400">"Clean Code"</span>]</p>
                  <p>&#125;;</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400"><CheckCircle className="w-3.5 h-3.5" /> Ready for deployment</span>
                  <span>Hyderabad, IN</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="about" className={`py-20 ${darkMode ? 'bg-slate-900/50' : 'bg-slate-100/70'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="mt-2 text-slate-400">Passionate about interactive design, clean code, and intuitive user experiences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-2xl border transition-all hover:scale-[1.02] ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Frontend Excellence</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                2.1 years building real-world web apps using React.js, TypeScript, and Next.js. Focused on crafting responsive, pixel-perfect interfaces with smooth component lifecycles.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border transition-all hover:scale-[1.02] ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Backend Capabilities</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Expanded into backend engineering with MySQL and Docker. Capable of building REST APIs, managing database logic, and orchestrating full-stack features.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border transition-all hover:scale-[1.02] ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Performance & UI Optimization</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Proven track record in optimizing web performance—reducing API latency by 30% and improving user interaction efficiency by 40% on enterprise platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Stack
            </h2>
            <p className="mt-2 text-slate-400">Core technologies and tools I work with daily</p>

            {/* Skill Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["All", "Frontend", "Styling", "Backend & DB", "Tools & DevOps"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSkillCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    skillCategory === cat 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20' 
                      : (darkMode ? 'bg-slate-900 text-slate-400 hover:bg-slate-800' : 'bg-slate-200 text-slate-700 hover:bg-slate-300')
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSkills.map((skill, idx) => {
              const IconComp = skill.icon;
              return (
                <div 
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all duration-300 hover:border-cyan-500/50 group ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-sm sm:text-base">{skill.name}</span>
                    </div>
                    <span className="text-xs font-mono text-cyan-400">{skill.level}%</span>
                  </div>

                  {/* Level Bar */}
                  <div className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {}
      <section id="experience" className={`py-20 ${darkMode ? 'bg-slate-900/50' : 'bg-slate-100/70'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="mt-2 text-slate-400">Detailed track record in frontend development & platform optimization</p>
          </div>

          <div className="max-w-4xl mx-auto relative border-l-2 border-slate-700/60 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {PORTFOLIO_DATA.experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-cyan-500 ring-4 ring-slate-950 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${darkMode ? 'bg-slate-900 border-slate-800 hover:border-cyan-500/40' : 'bg-white border-slate-200 shadow-md'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400">{exp.role}</h3>
                      <p className="text-base font-semibold text-slate-300">{exp.company}</p>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 flex flex-col sm:items-end">
                      <span className="font-mono">{exp.duration}</span>
                      <span className="text-slate-500">{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6 text-sm text-slate-300">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                    {exp.tech.map((t, idx) => (
                      <span key={idx} className={`text-xs px-3 py-1 rounded-full font-medium ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-700'}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="mt-2 text-slate-400">Applications I have built and scaled</p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["All", "Next.js", "React.js", "EdTech", "E-Commerce"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20' 
                      : (darkMode ? 'bg-slate-900 text-slate-400 hover:bg-slate-800' : 'bg-slate-200 text-slate-700 hover:bg-slate-300')
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <div 
                key={proj.id}
                className={`rounded-2xl border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-cyan-500/50 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {proj.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{proj.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {proj.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className={`text-xs px-2.5 py-1 rounded-lg ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`p-4 px-6 border-t flex items-center justify-between ${darkMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-100 bg-slate-50'}`}>
                  <button 
                    onClick={() => setSelectedProject(proj)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition"
                  >
                    <Eye className="w-4 h-4" /> View Details
                  </button>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className={`max-w-2xl w-full rounded-2xl border p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 text-slate-800'}`}>
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              ✕
            </button>

            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {selectedProject.category}
            </span>

            <h3 className="text-2xl font-bold mt-3 mb-2">{selectedProject.title}</h3>
            <p className="text-xs font-mono text-slate-400 mb-6">{selectedProject.duration}</p>

            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Key Accomplishments</h4>
            <ul className="space-y-3 mb-6 text-sm text-slate-300">
              {selectedProject.details.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tech.map((t, idx) => (
                <span key={idx} className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex justify-end">
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:from-cyan-400 hover:to-blue-500 transition"
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      <section className={`py-16 ${darkMode ? 'bg-slate-900/50' : 'bg-slate-100/70'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-8 sm:p-10 rounded-3xl border bg-gradient-to-r ${darkMode ? 'from-slate-900 via-slate-900 to-indigo-950/40 border-slate-800' : 'from-white via-white to-blue-50 border-slate-200'} shadow-xl relative overflow-hidden`}>
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20">
                  <Award className="w-4 h-4" /> Honor & Recognition
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                  {PORTFOLIO_DATA.award.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {PORTFOLIO_DATA.award.description}
                </p>
              </div>

              <div className="shrink-0 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Award className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="mt-2 text-slate-400">Academic foundation and qualification history</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-cyan-400">{edu.period}</span>
                <h3 className="text-lg font-bold mt-1 mb-2 leading-snug">{edu.degree}</h3>
                <p className="text-sm text-slate-400 mb-4">{edu.institution}</p>
                <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-800">
                  <span className="text-slate-500">{edu.location}</span>
                  <span className="font-semibold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400">CGPA: {edu.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-slate-900/50' : 'bg-slate-100/70'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="mt-2 text-slate-400">Have a project or opportunity? Let's build something awesome together.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
            
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className={`p-6 sm:p-8 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-md'}`}>
                <h3 className="text-xl font-bold mb-6">Contact Details</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-semibold text-slate-400">Email Me</h4>
                      <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-sm sm:text-base font-medium hover:text-cyan-400 transition">
                        {PORTFOLIO_DATA.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-semibold text-slate-400">Call / WhatsApp</h4>
                      <a href={`tel:${PORTFOLIO_DATA.phone}`} className="text-sm sm:text-base font-medium hover:text-cyan-400 transition">
                        {PORTFOLIO_DATA.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-semibold text-slate-400">Location</h4>
                      <p className="text-sm sm:text-base font-medium">{PORTFOLIO_DATA.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <h4 className="text-xs uppercase font-semibold text-slate-400 mb-4">Connect on Socials</h4>
                  <div className="flex gap-3">
                    <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-xl border flex items-center gap-2 text-sm transition ${darkMode ? 'border-slate-800 hover:border-cyan-500 text-slate-300' : 'border-slate-200 hover:border-cyan-500 text-slate-700'}`}>
                      <FaLinkedin className="w-4 h-4 text-cyan-400" /> LinkedIn
                    </a>
                    <a href={PORTFOLIO_DATA.github} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-xl border flex items-center gap-2 text-sm transition ${darkMode ? 'border-slate-800 hover:border-cyan-500 text-slate-300' : 'border-slate-200 hover:border-cyan-500 text-slate-700'}`}>
                      <FaGithub className="w-4 h-4 text-cyan-400" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Interactive Contact Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleFormSubmit} className={`p-6 sm:p-8 rounded-2xl border space-y-4 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-md'}`}>
                {contactSubmitted && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Message received! Thanks for contacting Rambuddi Sai Kumar. I will reply soon.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe" 
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-800'}`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com" 
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-800'}`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Subject</label>
                  <input 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="Project Inquiry / Job Opportunity" 
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-800'}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Write your message here..." 
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-800'}`}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {}
      <footer className={`py-8 border-t ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div>
            © {new Date().getFullYear()} Rambuddi Sai Kumar. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <a href="#hero" className="hover:text-cyan-400 transition flex items-center gap-1">
              Back to Top <ChevronUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}