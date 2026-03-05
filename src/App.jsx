import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, Phone, Terminal, Cpu, Globe, Code, 
  Sun, Moon, Download, ExternalLink,
  GraduationCap, Trophy, Target, Zap, ArrowUpRight // <--- Add these
} from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css'; // Importing the CSS file
import resume from './assets/Resume_18_02_2026.pdf';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('light', !isDark);
  }, [isDark]);

  return (
    <div className="app-container">
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">MITALI RADIA</a>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="mailto:mitaliradia@gmail.com">Contact</a>
          </div>
          <button 
            onClick={() => setIsDark(!isDark)} 
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          
          <h1>
            Building Scalable <br />
            <span className="highlight">Web Solutions</span>
          </h1>
          <p className="desc" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
            Computer Science student at PDEU with a <b>9.81 CGPA</b>. 
            I specialize in the MERN stack, Real-time systems, and solving complex algorithmic problems.
          </p>
          
          <div className="cta-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href={resume} download className="btn-outline">
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="social-links">
            <SocialLink href="https://github.com/mitaliradia" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/mitali-radia-1787852b9/" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="mailto:mitaliradia@gmail.com" icon={<Mail size={20} />} label="Email" />
            <SocialLink href="tel:+919426813375" icon={<Phone size={20} />} label="Phone" />
          </div>
        </motion.div>

        <motion.div 
          className="code-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
           <p><span style={{color: '#a855f7'}}>const</span> developer = <span style={{color: '#eab308'}}>{"{"}</span></p>
           <p>&nbsp;&nbsp;name: <span style={{color: '#22c55e'}}>"Mitali Radia"</span>,</p>
           <p>&nbsp;&nbsp;skills: [<span style={{color: '#22c55e'}}>"React"</span>, <span style={{color: '#22c55e'}}>"Node"</span>, <span style={{color: '#22c55e'}}>"MongoDB"</span>, <span style={{color: '#22c55e'}}>"Express"</span>, <span style={{color: '#22c55e'}}>"C++"</span>],</p>
           <p>&nbsp;&nbsp;hardWorker: <span style={{color: '#22d3ee'}}>true</span>,</p>
           <p>&nbsp;&nbsp;problemSolver: <span style={{color: '#22d3ee'}}>true</span></p>
           <p><span style={{color: '#eab308'}}>{"}"}</span>;</p>
        </motion.div>
      </header>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <StatItem 
            icon={<GraduationCap size={28} />} 
            value="9.81" 
            label="CGPA / 10.0" 
            color="#22d3ee" // Cyan for Academics
          />
          <StatItem 
            icon={<Code size={28} />} 
            value="1514" 
            label="LeetCode" 
            link="https://leetcode.com/u/mitali_radia/"
            color="#ffa116" // LeetCode Orange
          />
          <StatItem 
            icon={<Trophy size={28} />} 
            value="1503" 
            label="CodeChef" 
            link="https://www.codechef.com/users/mradia"
            color="#5b4638" // CodeChef Brown (or use #a855f7 for Purple/Star)
          />
          <StatItem 
            icon={<Target size={28} />} 
            value="1026" 
            label="Codeforces" 
            link="https://codeforces.com/profile/mitali_radia"
            color="#f43f5e" // Codeforces Red
          />
        </div>
      </section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <Terminal className="highlight" /> Featured Projects
        </h2>
        
        <div className="grid-container">
          <ProjectCard 
            title="EV-Go" 
            subtitle="EV Rental System"
            desc="Full-stack MERN application. Implemented real-time features using Socket.IO and optimized MongoDB queries reducing API response time by 60%."
            tags={["React", "Node.js", "Socket.IO", "Razorpay", "MongoDB", "Express.js"]}
            link="https://github.com/mitaliradia/EV-Rental-System"
          />
          <ProjectCard 
            title="MindfulMe" 
            subtitle="Mental Health AI App"
            desc="Integrated Google Gemini AI for personalized insights and Chart.js for mood tracking analytics. Secure JWT-based authentication included."
            tags={["React", "Gemini AI", "Express", "Chart.js", "MongoDB", "Node"]}
            link="https://github.com/ShrutiPatel038/Mental-Health-Companion"
          />
          <ProjectCard 
            title="VideoMate" 
            subtitle="Video & Chat Platform"
            desc="Real-time communication using Stream.io API and Socket.IO. Features a responsive UI and modular backend architecture."
            tags={["React", "Stream.io", "WebRTC", "Node.js", "Express.js", ]}
            link="https://github.com/mitaliradia/VideoMate-2"
          />
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="section" 
        style={{ background: 'rgba(15, 23, 42, 0.3)' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <Code className="highlight" /> Tech Stack
        </h2>

        <div className="grid-container">
          <SkillCard 
            title="Languages & Core" 
            icon={<Cpu className="highlight" />}
            skills={["C", "C++", "Java", "JavaScript", "DSA", "OOP", "DBMS", "OS"]}
          />
          <SkillCard 
            title="Web Technologies" 
            icon={<Globe style={{color: 'var(--accent-purple)'}} />}
            skills={["React.js", "Node.js", "Express.js", "MongoDB", "SQL", "Tailwind CSS"]}
          />
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline">
          <TimelineItem 
            date="Oct 2024 - May 2025"
            title="Core Committee Member"
            org="ACM-W Student Chapter"
            desc="Organized coding contests and technical sessions for 100+ students, improving participation and engagement."
          />
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        id="education" 
        className="section" 
        style={{ paddingTop: '2rem' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>
        
        <div className="timeline">
          <TimelineItem 
            date="July 2023 - May 2027"
            title="B.Tech in Computer Science"
            org="Pandit Deendayal Energy University"
            desc="CGPA: 9.81/10.00. Maintained consistent academic excellence across all semesters."
          />
          <TimelineItem 
            date="Mar 2023"
            title="Higher Secondary Education"
            org="GNFC Narmada Vidyalaya"
            desc="Percentile: 98.53. Focused on Science and Mathematics."
          />
        </div>
      </motion.section>

      <footer className="footer">
        <p>Designed & Built by Mitali Radia</p>
        <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>Bharuch, Gujarat, India</p>
      </footer>
    </div>
  );
};

// --- Sub-Components ---

const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="social-link"
    title={label}
  >
    {icon}
  </a>
);

const StatItem = ({ icon, value, label, link, color }) => {
  const Wrapper = link ? 'a' : 'div';
  const props = link ? { href: link, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Wrapper 
      className="stat-card" 
      {...props}
      style={{ '--card-color': color, cursor: link ? 'pointer' : 'default' }}
    >
      <div className="stat-header">
        <div className="stat-icon">{icon}</div>
        {link && <ArrowUpRight size={20} className="stat-arrow" />}
      </div>
      
      <div>
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </Wrapper>
  );
};
const ProjectCard = ({ title, subtitle, desc, tags, link }) => (
  <div className="card">
    <div className="card-header">
      <div>
        <h3>{title}</h3>
        <p className="subtitle">{subtitle}</p>
      </div>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer" 
          style={{ color: 'var(--text-main)', opacity: 0.7, transition: 'all 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
        >
          <Github size={20} style={{ cursor: 'pointer' }} />
        </a>
      )}
    </div>
    <p className="desc">{desc}</p>
    <div className="tags">
      {tags.map((tag, i) => (
        <span key={i} className="tag">{tag}</span>
      ))}
    </div>
  </div>
);

const SkillCard = ({ title, icon, skills }) => (
  <div className="card">
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
      {icon}
      <h3>{title}</h3>
    </div>
    <div className="tags">
      {skills.map(skill => (
        <span key={skill} className="tag" style={{ background: 'var(--bg-dark)' }}>
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const TimelineItem = ({ date, title, org, desc }) => (
  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <span className="timeline-date">{date}</span>
    <h3>{title}</h3>
    <h4 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{org}</h4>
    <p className="desc">{desc}</p>
  </div>
);

export default Portfolio;