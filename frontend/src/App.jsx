import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Code2, Rocket, Terminal, Sparkles, ArrowRight, Download, MapPin, Zap, Star, Trophy, Menu, X, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  
  const roles = ['Full Stack Developer', 'MERN Expert', 'Problem Solver', 'Tech Enthusiast'];

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Handle form submit
  const handleContactSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields!');
      return;
    }

    setFormStatus('sending');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setFormStatus('');
          setShowContactForm(false);
        }, 3000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
    }
  };

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < roles[roleIndex].length) {
        setTypedText(roles[roleIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [charIndex, roleIndex]);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "AlgoDevFreaks",
      description: "Educational platform with interactive tutorials and real-time code execution for aspiring developers",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      gradient: "from-cyan-500 to-purple-600",
      stats: { users: "1000+", features: "50+" },
      github: "https://github.com/saurabh19062003dwivedi/AlgoDevFreaks",
      live: "#"
    },
    {
      title: "Task Manager",
      description: "Full-featured task management system with real-time updates and collaboration features",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      gradient: "from-green-500 to-teal-600",
      stats: { tasks: "Unlimited", realtime: "Yes" },
      github: "https://github.com/saurabh19062003dwivedi/task-manager",
      live: "https://task-manager-git-main-saurabh19062003dwivedis-projects.vercel.app/"
    },
    {
      title: "Weather App",
      description: "Real-time weather tracking with location-based forecasts and beautiful UI",
      tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      gradient: "from-orange-500 to-pink-600",
      stats: { accuracy: "98%", cities: "200+" },
      github: "https://github.com/saurabh19062003dwivedi/weather_app",
      live: "https://saurabh19062003dwivedi.github.io/weather_app/"
    },
    {
      title: "Tic Tac Toe",
      description: "Interactive tic-tac-toe game with smart AI and smooth animations",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-red-500 to-pink-600",
      stats: { players: "2", ai: "Smart" },
      github: "https://github.com/saurabh19062003dwivedi/tic-tac-toe-SD",
      live: "https://saurabh19062003dwivedi.github.io/tic-tac-toe-SD/"
    },
    {
      title: "Plan With Love",
      description: "Beautiful event planning platform with seamless user experience",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      gradient: "from-pink-500 to-rose-600",
      stats: { events: "Unlimited", ui: "Modern" },
      github: "https://github.com/saurabh19062003dwivedi/Project_plan_with_love",
      live: "https://project-plan-with-love-zdny.vercel.app/"
    },
    {
      title: "Polling Website",
      description: "Interactive polling platform with real-time vote counting and results visualization",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-blue-500 to-indigo-600",
      stats: { polls: "Unlimited", voting: "Real-time" },
      github: "https://github.com/saurabh19062003dwivedi/Polling-website",
      live: "#"
    },
    {
      title: "Tribute Page",
      description: "Responsive tribute page showcasing modern web design principles",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-purple-500 to-pink-600",
      stats: { responsive: "Yes", design: "Modern" },
      github: "https://github.com/saurabh19062003dwivedi/Tribute-page",
      live: "#"
    },
    {
      title: "Calculator",
      description: "Feature-rich calculator with clean UI and advanced operations",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-yellow-500 to-orange-600",
      stats: { operations: "All", ui: "Clean" },
      github: "https://github.com/saurabh19062003dwivedi/Calculator",
      live: "#"
    }
  ];

  const skills = [
    { name: "React.js", level: 92, color: "cyan" },
    { name: "Node.js", level: 90, color: "green" },
    { name: "JavaScript", level: 95, color: "yellow" },
    { name: "MongoDB", level: 85, color: "emerald" },
    { name: "Express", level: 88, color: "purple" },
    { name: "C++", level: 90, color: "blue" },
    { name: "Git", level: 90, color: "orange" },
    { name: "Tailwind", level: 90, color: "cyan" }
  ];

  const experiences = [
    {
      role: "Web Development Intern",
      company: "Dynamite WebTech",
      period: "Apr 2025 - May 2025",
      achievements: [
        "Built 5+ full-stack features from scratch",
        "Reduced load times by 40%",
        "Fixed 20+ critical bugs"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      role: "Head - DARE Department",
      company: "Innovation@EC Club",
      period: "2024 - Present",
      achievements: [
        "Organized 3 major hackathons",
        "Led team of 15+ coordinators",
        "Increased engagement by 60%"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const certifications = [
    { name: "IT Helpdesk", org: "Skill India", icon: "🏆" },
    { name: "Cloud Computing", org: "NPTEL IIT", icon: "☁️" },
    { name: "Internet of Things", org: "NPTEL IIT", icon: "🌐" },
    { name: "Theory of Computation", org: "NPTEL", icon: "🧮" },
    { name: "Database Management", org: "NPTEL IIT", icon: "💾" },
    { name: "C++ Programming", org: "NPTEL IIT", icon: "⚙️" }
  ];

  const stats = [
    { label: "Projects", value: "15+", icon: <Rocket size={24} /> },
    { label: "Code Lines", value: "50K+", icon: <Code2 size={24} /> },
    { label: "Coffee", value: "∞", icon: <Zap size={24} /> },
    { label: "Clients", value: "10+", icon: <Star size={24} /> }
  ];

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        <div 
          className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

   {/* Floating Nav */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-black/40 backdrop-blur-2xl border border-purple-500/20 rounded-full">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SD</div>
          <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-400">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-purple-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center">
          <div className="flex flex-col items-center gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="text-3xl font-bold text-gray-400 hover:text-purple-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-7xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm">Available for work</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            SAURABH DWIVEDI
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-8 h-16">
            <Terminal className="text-purple-400" size={28} />
            <p className="text-3xl md:text-4xl font-bold">{typedText}<span className="animate-pulse">|</span></p>
          </div>

          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12">
            Crafting exceptional digital experiences with <span className="text-purple-400 font-bold">MERN Stack</span> and <span className="text-blue-400 font-bold">Web3</span>
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold hover:scale-105 transition-all"
            >
              View Work <Rocket className="inline ml-2" size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-10 py-5 border-2 border-purple-500 rounded-full font-bold hover:bg-purple-500/10 transition-all"
            >
              Let's Talk
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6 bg-purple-900/20 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:scale-105 transition-all">
                <div className="text-purple-400 mb-2">{stat.icon}</div>
                <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="flex justify-center gap-6 mt-16">
            <a href="https://github.com/saurabh19062003dwivedi" className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-purple-500/50 transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/saurabh-dwivedi-608a24265" className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-blue-500/50 transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:saurabhdwivedi2003sta@gmail.com" className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-pink-500/50 transition-all hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-purple-400" />
        </button>
      </section>

      {/* About */}
      <section id="about" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-black mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl border border-purple-500/20 hover:scale-[1.02] transition-all">
              <h3 className="text-3xl font-bold mb-6">Education & Journey</h3>
              
              <div className="space-y-6">
                <div className="p-6 bg-black/20 rounded-2xl">
                  <h4 className="text-xl font-bold text-purple-400 mb-2">B.Tech - Electronics & Communication</h4>
                  <p className="text-gray-400 mb-3">UIT RGPV, Bhopal • 2022-2026</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full" style={{ width: '75%' }} />
                    </div>
                    <span className="text-purple-400 font-bold">7.58 CGPA</span>
                  </div>
                </div>

                <div className="p-6 bg-black/20 rounded-2xl">
                  <h4 className="text-xl font-bold text-blue-400 mb-2">Higher Secondary (12th)</h4>
                  <p className="text-gray-400 mb-3">School of Excellence, Satna • 2021</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full" style={{ width: '92%' }} />
                    </div>
                    <span className="text-blue-400 font-bold">92.4%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-green-900/20 rounded-xl border border-green-500/20">
                    <Trophy className="text-green-400 mb-2" size={24} />
                    <p className="text-2xl font-bold text-green-400">6+</p>
                    <p className="text-sm text-gray-400">Certifications</p>
                  </div>
                  <div className="p-4 bg-orange-900/20 rounded-xl border border-orange-500/20">
                    <Star className="text-orange-400 mb-2" size={24} />
                    <p className="text-2xl font-bold text-orange-400">Top 10%</p>
                    <p className="text-sm text-gray-400">Class Rank</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-blue-900/20 backdrop-blur-sm rounded-3xl border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3"><MapPin size={18} className="text-blue-400" />Bhopal, India</div>
                  <div className="flex items-center gap-3"><Mail size={18} className="text-purple-400" />saurabhdwivedi2003sta@gmail.com</div>
                  <div className="flex items-center gap-3"><Phone size={18} className="text-pink-400" />+91 9302870915</div>
                </div>
              </div>

              <div className="p-8 bg-pink-900/20 backdrop-blur-sm rounded-3xl border border-pink-500/20">
                <h3 className="text-2xl font-bold mb-6">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {['Web3', 'IoT', 'AI/ML', 'Cloud', 'DevOps', 'UI/UX'].map(i => (
                    <span key={i} className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm font-semibold">{i}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative py-32 px-4 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-black mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map(skill => (
              <div key={skill.name} className="p-6 bg-purple-900/20 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:scale-105 transition-all group">
                <div className="flex justify-between mb-3">
                  <span className="font-bold">{skill.name}</span>
                  <span className="text-purple-400 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-${skill.color}-500 to-purple-500 rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-black mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group p-8 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-105 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs">{tech}</span>
                    ))}
                  </div>

                  <div className="flex gap-4 mb-6 text-xs">
                    {Object.entries(project.stats).map(([key, val]) => (
                      <div key={key}>
                        <div className="text-purple-400 font-bold">{val}</div>
                        <div className="text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 flex items-center gap-2 font-semibold"
                      >
                        <Github size={16} /> Code
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-semibold"
                      >
                        <ArrowRight size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-black mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-8 bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-sm rounded-3xl border border-purple-500/20 hover:scale-[1.02] transition-all">
                <div className="flex flex-col md:flex-row md:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-purple-400">{exp.role}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="p-4 bg-black/20 rounded-xl border border-purple-500/10">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2" />
                        <p className="text-sm text-gray-300">{achievement}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-black mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-6 bg-purple-900/20 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:scale-105 transition-all">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h4 className="text-lg font-bold mb-1">{cert.name}</h4>
                <p className="text-sm text-gray-400">{cert.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Let's Build Something
          </h2>
          <p className="text-xl text-gray-400 mb-12">Have a project in mind? Let's talk!</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:saurabhdwivedi2003sta@gmail.com" className="p-6 bg-purple-900/20 rounded-xl border border-purple-500/20 hover:scale-105 transition-all">
              <Mail className="mx-auto mb-3 text-purple-400" size={32} />
              <p className="font-bold">Email Me</p>
            </a>
            <a href="tel:+919302870915" className="p-6 bg-blue-900/20 rounded-xl border border-blue-500/20 hover:scale-105 transition-all">
              <Phone className="mx-auto mb-3 text-blue-400" size={32} />
              <p className="font-bold">Call Me</p>
            </a>
            <a href="https://linkedin.com/in/saurabh-dwivedi-608a24265" target="_blank" rel="noopener noreferrer" className="p-6 bg-pink-900/20 rounded-xl border border-pink-500/20 hover:scale-105 transition-all">
              <Linkedin className="mx-auto mb-3 text-pink-400" size={32} />
              <p className="font-bold">Connect</p>
            </a>
          </div>

          <button 
            onClick={() => setShowContactForm(true)}
            className="inline-block px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-lg hover:scale-105 transition-all mb-8"
          >
            Send Message
          </button>

          {/* Contact Form Modal */}
          {showContactForm && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-purple-500/30 max-w-lg w-full">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Contact Me</h3>
                  <button onClick={() => setShowContactForm(false)} className="text-gray-400 hover:text-white">
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none resize-none"
                  />

                  <button
                    onClick={handleContactSubmit}
                    disabled={formStatus === 'sending'}
                    className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold hover:scale-105 transition-all disabled:opacity-50"
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>

                  {formStatus === 'success' && (
                    <p className="text-green-400 text-center">✅ Message sent successfully!</p>
                  )}
                  {formStatus === 'error' && (
                    <p className="text-red-400 text-center">❌ Failed to send. Please try again.</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">Designed & Built by <span className="text-purple-400 font-bold">Saurabh Dwivedi</span></p>
          <p className="text-sm text-gray-600">© 2026 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
