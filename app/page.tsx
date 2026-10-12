'use client'

import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Code2, Cpu, Globe2, Layers3, Mail, Menu, Sparkles, X, Zap, BriefcaseBusiness, GraduationCap, Bot, Workflow, Monitor, Database, Network, Send, CheckCircle2 } from 'lucide-react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const projects = [
  { num:'01', title:'Eraya Ratna', type:'E-commerce / Web', description:'An e-commerce website for a spiritual accessories brand, focused on responsive presentation, product discovery, navigation and online-store functionality.', tags:['WordPress','WooCommerce','Responsive UI'], accent:'amber' },
  { num:'02', title:'AI Lead Generation System', type:'AI / Automation', description:'An automated lead-generation system for discovering, extracting, processing and organizing business data, with exploration of locally hosted AI models.', tags:['Python','n8n','Playwright','Local AI'], accent:'lime' },
  { num:'03', title:'Nekomi', type:'Web Application', description:'An API-driven anime discovery experience with search, filtering, content discovery and episode selection, built with a modular web architecture.', tags:['Next.js','React','Node.js','APIs'], accent:'cyan' },
  { num:'04', title:'FloodGuard AI', type:'Hackathon / Disaster Intelligence', description:'A flood-monitoring and decision-support platform combining water-level telemetry, risk indicators, forecasts, maps, alerts and what-if scenarios in a digital-twin-style interface.', tags:['Next.js','FastAPI','PostGIS','IoT','Geospatial'], accent:'blue' },
  { num:'05', title:'A.E.G.I.S. AI', type:'Hackathon / Emergency Intelligence', description:'An autonomous emergency and geospatial intelligence system that processes citizen reports, applies NLP and verification, prioritizes incidents, and supports operators through a real-time command console.', tags:['Python','FastAPI','NLP','Geospatial','React'], accent:'red' },
  { num:'06', title:'A.L.I.A.', type:'AI Assistant / Desktop App', description:'Artificial Logical Intelligence Assistant: a desktop AI assistant with a dark split-screen interface, typed conversation flow, and an agent controller for interacting with an LLM-backed assistant.', tags:['Python','AI Agent','Desktop GUI','LLM'], accent:'purple' },
]

const capabilities = [
  { icon:Globe2, title:'Web Development', text:'Responsive websites and web applications built with modern frameworks, thoughtful UI and a focus on practical business needs.' },
  { icon:Sparkles, title:'AI & Intelligent Products', text:'AI-powered agents, LLM applications and integrations designed around useful business problems—not AI for the sake of AI.' },
  { icon:Layers3, title:'Workflow Automation', text:'Connected workflows that reduce repetitive manual work by combining APIs, automation platforms, AI and external services.' },
  { icon:Zap, title:'Technical Solutions', text:'Hands-on problem solving across architecture, implementation, troubleshooting, documentation and digital project delivery.' },
]

const stack = ['Next.js','React','JavaScript','TypeScript','Tailwind CSS','Node.js','Express.js','Python','n8n','AI Agents','LLMs','REST APIs','WordPress','WooCommerce','Playwright','Git','Vercel']

const skillGroups = [
  { title:'Web development', number:'01', skills:['HTML & CSS','JavaScript','React','Next.js','Tailwind CSS','WordPress','WooCommerce'] },
  { title:'AI & automation', number:'02', skills:['AI Agents','LLM Applications','n8n','Workflow Design','API Integration','Prompt Engineering','Local AI / llama.cpp'] },
  { title:'Backend & tools', number:'03', skills:['Node.js','Express.js','REST APIs','SQL','Git & GitHub','Vercel','Hostinger','Playwright'] },
  { title:'Technical foundations', number:'04', skills:['Python','Java','Linux','Web Security Fundamentals','Network Security Fundamentals','Troubleshooting','Documentation'] },
]

const buildNotes = [
  { label:'THE FOCUS', text:'A clear storefront experience for a spiritual accessories brand, with responsive layouts, product presentation and straightforward navigation.' },
  { label:'THE BUILD', text:'WordPress and WooCommerce, with attention to responsive presentation and the core online-store journey.' },
  { label:'WHAT IT SHOWCASES', text:'Practical website development that connects visual presentation with useful commerce functionality.' },

  { label:'THE FOCUS', text:'A workflow to discover, extract, process and organize business lead data, reducing repetitive research steps.' },
  { label:'THE BUILD', text:'Python and Playwright for browser-driven data collection, with n8n and experiments using locally hosted AI models.' },
  { label:'WHAT IT SHOWCASES', text:'Workflow thinking, data handling and the integration of automation tools into a practical technical system.' },

  { label:'THE FOCUS', text:'An API-driven anime discovery experience with search, filters, content discovery and episode selection.' },
  { label:'THE BUILD', text:'A modular web application using Next.js, React, Node.js, Tailwind CSS and external APIs.' },
  { label:'WHAT IT SHOWCASES', text:'Frontend architecture, responsive UI, API integration and designing connected user journeys.' },

  { label:'THE FOCUS', text:'A flood-monitoring and situational-awareness experience that brings sensor readings, risk levels, forecasts, alerts and geographic context together.' },
  { label:'THE BUILD', text:'The repository includes a Next.js/React/TypeScript frontend and a Python FastAPI backend, with PostgreSQL/PostGIS, Redis, geospatial processing and live update support.' },
  { label:'WHAT IT SHOWCASES', text:'Building a data-rich operational interface around IoT telemetry, geospatial information, forecasting and scenario exploration. It is presented as a hackathon project, not a deployed emergency service.' },

  { label:'THE FOCUS', text:'A command-and-control workflow for turning citizen reports into structured, prioritized incident information for human operators.' },
  { label:'THE BUILD', text:'The project combines a FastAPI backend, text/voice report pathways, NLP parsing, geocoding, verification, deterministic priority scoring, explainability, and a React/TypeScript operator console.' },
  { label:'WHAT IT SHOWCASES', text:'Multi-step AI system design, geospatial intelligence, operator-focused dashboards, and human-reviewed response workflows. The system is a prototype and should not be represented as autonomous real-world dispatch.' },

  { label:'THE FOCUS', text:'A personal AI assistant experience designed around a focused desktop interface and typed conversations with an agent controller.' },
  { label:'THE BUILD', text:'A Python desktop application with a dark split-screen GUI, conversation transcript and message composer, using an LLM provider when configured.' },
  { label:'WHAT IT SHOWCASES', text:'Connecting an assistant interface to an agent workflow. Microphone and waveform controls are currently UI elements; speech capture and text-to-speech are not yet connected.' },
]

function CursorGlow(){
  const [pos,setPos]=useState({x:-500,y:-500})
  useEffect(()=>{ const move=(e:MouseEvent)=>setPos({x:e.clientX,y:e.clientY}); window.addEventListener('mousemove',move); return()=>window.removeEventListener('mousemove',move)},[])
  return <div className="cursor-glow" style={{transform:`translate3d(${pos.x-220}px,${pos.y-220}px,0)`}} />
}

function Nav(){
  const [open,setOpen]=useState(false)
  const links=[['Work','#work'],['Services','#capabilities'],['Experience','#about'],['Skills','#skills']]
  return <header className="nav-wrap"><nav className="nav">
    <a className="brand" href="#top"><span>AG</span><b>Anish.</b></a>
    <div className={`nav-links ${open?'open':''}`}>{links.map(([label,href])=><a key={label} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<a href="#contact" className="nav-cta" onClick={()=>setOpen(false)}>Start a project <ArrowUpRight size={15}/></a></div>
    <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
  </nav></header>
}

export default function Home(){
  const {scrollYProgress}=useScroll()
  const smooth=useSpring(scrollYProgress,{stiffness:100,damping:30,restDelta:0.001})
  const heroY=useTransform(smooth,[0,.35],[0,-130])
  const [active,setActive]=useState<number|null>(null)
  const [expandedProject,setExpandedProject]=useState<number|null>(null)
  const [projectType,setProjectType]=useState('Website / web app')
  const [projectBrief,setProjectBrief]=useState('')

  return <main id="top">
    <CursorGlow/><Nav/>

    <section className="hero section-pad">
      <motion.div className="hero-copy" style={{y:heroY}}>
        <div className="eyebrow"><span className="dot"/> AVAILABLE FOR REMOTE FREELANCE PROJECTS <span className="line"/></div>
        <h1>I build <em>web experiences</em> and intelligent digital systems.</h1>
        <p className="hero-lede">I'm Anish Chand Gupta — a web developer and AI automation builder creating responsive websites, web applications, AI-powered workflows and practical technical solutions for businesses.</p>
        <div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowDownRight size={18}/></a><a className="text-link" href="/Anish-Chand-Gupta-Resume.pdf" download>Download résumé <ArrowUpRight size={17}/></a></div>
      </motion.div>
      <motion.div className="hero-art" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:1.1,ease:[.16,1,.3,1]}}>
        <div className="orb orb-a"/><div className="orb orb-b"/><div className="orb orb-c"/>
        <div className="code-card"><div className="card-top"><span>solution.ts</span><span>● ● ●</span></div><pre>{`const solution = {\n  web:  "responsive",\n  ai:   "practical",\n  work: "scalable"\n}`}</pre><div className="card-foot"><span><Code2 size={13}/> BUILD</span><span><Cpu size={13}/> AUTOMATE</span></div></div>
      </motion.div>
      <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><div/></div>
    </section>

    <section className="focus-strip section-pad" aria-label="Core services">
      <a href="#capabilities" className="focus-item"><span>01</span><div><b>Web development</b><small>Websites · E-commerce · Apps</small></div><ArrowUpRight size={17}/></a>
      <a href="#capabilities" className="focus-item"><span>02</span><div><b>AI & intelligent systems</b><small>Agents · Integrations · Workflows</small></div><ArrowUpRight size={17}/></a>
      <a href="#contact" className="focus-item focus-item-cta"><span>↗</span><div><b>Have a project in mind?</b><small>Let's figure out the next step</small></div><ArrowUpRight size={17}/></a>
    </section>

    <section className="system-showcase section-pad">
      <div className="section-label">01 / HOW I THINK</div>
      <div className="system-card">
        <div className="system-copy"><span className="mini-kicker">DIGITAL BUILD SYSTEM</span><h2>One idea.<br/><span>Multiple layers.</span></h2><p>Web interfaces, intelligent logic and automation can work together as one practical system.</p></div>
        <div className="system-map" aria-label="Web and AI system diagram">
          <div className="map-orbit orbit-one"></div><div className="map-orbit orbit-two"></div>
          <div className="map-node node-web"><Monitor size={18}/><span>WEB</span></div>
          <div className="map-node node-ai"><Bot size={18}/><span>AI</span></div>
          <div className="map-node node-data"><Database size={18}/><span>DATA</span></div>
          <div className="map-node node-auto"><Workflow size={18}/><span>AUTOMATE</span></div>
          <div className="map-core"><Network size={22}/><b>BUILD</b><small>CONNECT · SHIP · IMPROVE</small></div>
          <svg className="map-lines" viewBox="0 0 520 360" preserveAspectRatio="none"><path d="M120 90 C185 125 190 155 260 180 S340 235 400 270"/><path d="M390 82 C340 120 330 150 260 180 S175 220 105 275"/><path d="M260 55 L260 180 L260 310"/></svg>
        </div>
      </div>
    </section>

    <section className="statement section-pad">
      <div className="section-label">02 / THE APPROACH</div>
      <h2>Technology is only useful<br/><span>when it solves something.</span></h2>
      <p>I combine modern web development, AI, automation and practical problem-solving to turn ideas into usable digital products. The goal is not to use every tool available—it is to choose the right tools and build something that works.</p>
    </section>

    <section id="work" className="work section-pad">
      <div className="section-head"><div><div className="section-label">03 / SELECTED WORK</div><h2>A curated look at<br/><span>what I build.</span></h2></div><p>I keep this portfolio focused rather than filling it with noise. These projects represent the kinds of web, AI and automation work I enjoy doing.</p></div>
      <div className="projects">{projects.map((p,i)=><motion.article key={p.title} className={`project ${p.accent}`} onMouseEnter={()=>setActive(i)} onMouseLeave={()=>setActive(null)} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.07,duration:.65}}>
        <div className="project-number">{p.num}</div><div className="project-main"><div className="project-meta">{p.type}</div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><div className="project-action">{active===i?<ArrowUpRight size={25}/>:<ArrowDownRight size={25}/>}</div><div className={`project-visual visual-${p.accent}`}><div className="visual-grid"/>
          {i===0 ? <div className="store-ui"><div className="store-nav"><b>ERAYA</b><span>SHOP · COLLECTION · CART</span></div><div className="store-hero"><span>SPIRITUAL ACCESSORIES</span><b>DISCOVER<br/>YOUR PIECE</b></div><div className="store-products"><i/><i/><i/></div></div>
          : i===1 ? <div className="automation-ui"><div className="flow-head"><span>LEAD ENGINE</span><b>LIVE</b></div><div className="flow-line"><i><Globe2/></i><span>DISCOVER</span><i><Database/></i><span>PROCESS</span><i><Bot/></i><span>QUALIFY</span><i><Workflow/></i><span>ROUTE</span></div><div className="terminal"><small>workflow.run()</small><code>leads → enrich → score → deliver</code></div></div>
          : i===2 ? <div className="app-ui"><div className="app-top"><b>NEKOMI</b><span>SEARCH　 FILTER　 PROFILE</span></div><div className="app-hero"><span>NOW STREAMING</span><b>DISCOVER<br/>YOUR NEXT STORY</b></div><div className="app-bars"><i/><i/><i/><i/></div></div>
          : i===3 ? <div className="flood-ui"><div className="mock-top"><span>FLOODGUARD / SITUATION</span><b>● MONITORING</b></div><div className="flood-kpis"><div><small>WATER LEVEL</small><strong>LIVE <em>cm</em></strong></div><div><small>RISK INDEX</small><strong>FORECAST</strong></div></div><div className="flood-map"><svg viewBox="0 0 320 130" aria-hidden="true"><path d="M-5 92 C42 76 50 38 100 52 S165 113 205 73 S265 20 325 40" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M-5 108 C42 92 50 54 100 68 S165 129 205 89 S265 36 325 56" fill="none" stroke="currentColor" strokeWidth="1" opacity=".35"/><circle cx="100" cy="52" r="5" fill="#c9ff4d"/><circle cx="205" cy="73" r="5" fill="#ffb454"/></svg><span>GEOSPATIAL MONITOR</span></div><div className="flood-bottom"><span>TELEMETRY</span><span>FORECAST</span><span>ALERTS</span><span>SCENARIOS</span></div></div>
          : i===4 ? <div className="aegis-ui"><div className="mock-top"><span>A.E.G.I.S. / COMMAND</span><b>INCIDENT INTELLIGENCE</b></div><div className="aegis-center"><div className="aegis-radar"><i/><i/><i/><b>AE</b></div><div className="aegis-side"><span>REPORT INTAKE <em>01</em></span><span>VERIFICATION <em>02</em></span><span>PRIORITY SCORE <em>03</em></span><span>OPERATOR REVIEW <em>04</em></span></div></div><div className="aegis-foot"><span>DETECTION</span><span>GEOCODING</span><span>DECISION SUPPORT</span></div></div>
          : <div className="alia-ui"><div className="mock-top"><span>A.L.I.A.</span><b>ASSISTANT INTERFACE</b></div><div className="alia-orb"><i/><i/><i/><b>AI</b></div><div className="alia-chat"><span>USER MESSAGE</span><p>Help me break this task into steps.</p><span className="alia-response">AGENT · READY TO ASSIST</span></div><div className="alia-input">Message A.L.I.A. <b>↗</b></div></div>}
        </div>
        <button className="project-details-toggle" onClick={()=>setExpandedProject(expandedProject===i?null:i)} aria-expanded={expandedProject===i}>{expandedProject===i?'Hide build notes':'Explore the build'} <span>{expandedProject===i?'−':'+'}</span></button>
        {expandedProject===i&&<motion.div className="project-details" initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} transition={{duration:.3}}><div><span>{buildNotes[i*3].label}</span><p>{buildNotes[i*3].text}</p></div><div><span>{buildNotes[i*3+1].label}</span><p>{buildNotes[i*3+1].text}</p></div><div><span>{buildNotes[i*3+2].label}</span><p>{buildNotes[i*3+2].text}</p></div></motion.div>}
      </motion.article>)}</div>
    </section>

    <section id="capabilities" className="capabilities section-pad">
      <div className="section-label">04 / WHAT I DO</div>
      <div className="cap-grid">{capabilities.map((c,i)=>{const Icon=c.icon;return <motion.div key={c.title} className="cap" initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><div className="cap-icon"><Icon size={22}/></div><span>0{i+1}</span><h3>{c.title}</h3><p>{c.text}</p><a href="#contact">Let's talk <ArrowUpRight size={15}/></a></motion.div>})}</div>
    </section>

    <section id="about" className="about section-pad">
      <div className="section-label">05 / EXPERIENCE</div>
      <div className="about-grid"><div><h2>Developer.<br/><span>Problem solver.</span></h2><div className="about-intro"><p>My work sits at the intersection of <strong>web development, AI, automation and technical problem-solving.</strong></p><p>I currently work with <strong>We Build Brands</strong> across system architecture, AI automation and technical solutions, after previously working as a project manager intern across website, branding and marketing projects.</p></div></div>
      <div className="timeline">
        <div className="timeline-item"><div className="timeline-icon"><BriefcaseBusiness size={17}/></div><div><span>2024 — PRESENT</span><h3>System Architect / AI Automation & Technical Solutions</h3><p>Business automation workflows, AI-powered agents, API integrations, technical architecture, troubleshooting and documentation.</p></div></div>
        <div className="timeline-item"><div className="timeline-icon"><BriefcaseBusiness size={17}/></div><div><span>OCT 2023 — JUN 2024</span><h3>Project Manager Intern</h3><p>Managed digital projects involving website development, branding, design and marketing deliverables, coordinating requirements and timelines.</p></div></div>
        <div className="timeline-item"><div className="timeline-icon"><GraduationCap size={17}/></div><div><span>2023 — PRESENT</span><h3>Bachelor of Computer Applications</h3><p>The Maharaja Sayajirao University, Baroda. Programming, databases, web development, software engineering, networking and cybersecurity fundamentals.</p></div></div>
      </div></div>
    </section>

    <section id="skills" className="skills-section section-pad">
      <div className="skills-heading"><div><div className="section-label">06 / SKILLS & TECHNOLOGIES</div><h2>A practical toolkit.<br/><span>Chosen for the job.</span></h2></div><p>I organize my skills around the work they support—not arbitrary percentage bars. The right combination depends on the problem, the product and the people using it.</p></div>
      <div className="skill-groups">{skillGroups.map(group=><article className="skill-group" key={group.number}><div className="skill-group-top"><span>{group.number}</span><h3>{group.title}</h3><ArrowUpRight size={16}/></div><div className="skill-pills">{group.skills.map(skill=><span key={skill}>{skill}</span>)}</div></article>)}</div>
    </section>

    <section id="education" className="education-section section-pad">
      <div className="education-card"><div className="section-label">07 / EDUCATION</div><div className="education-main"><div className="education-mark"><GraduationCap size={26}/></div><div><span className="education-date">2023 — PRESENT</span><h3>Bachelor of Computer Applications</h3><p>The Maharaja Sayajirao University, Baroda</p><div className="education-topics"><span>Programming</span><span>Database Management</span><span>Web Development</span><span>Software Engineering</span><span>Computer Networks</span><span>Cybersecurity Fundamentals</span></div></div></div></div>
      <div className="credentials-card"><div className="section-label">08 / CERTIFICATIONS & RECOGNITION</div><div className="credential-row"><span className="credential-symbol"><Code2 size={17}/></span><div><h3>Microsoft Tools</h3><p>Certification</p></div><ArrowUpRight size={16}/></div><div className="credential-row"><span className="credential-symbol"><Layers3 size={17}/></span><div><h3>Project Management</h3><p>Certification</p></div><ArrowUpRight size={16}/></div><div className="credential-row"><span className="credential-symbol"><Sparkles size={17}/></span><div><h3>Generative AI — Outskill</h3><p>Certification</p></div><ArrowUpRight size={16}/></div><div className="credential-row"><span className="credential-symbol award"><Zap size={17}/></span><div><h3>Third Place — Career Cosmos 2024</h3><p>University-level competition</p></div><ArrowUpRight size={16}/></div></div>
    </section>

    <section className="stack section-pad"><div className="stack-inner"><div><div className="section-label">09 / TOOLKIT IN MOTION</div><h2>The tools behind<br/><span>the work.</span></h2></div><div className="marquee"><div className="marquee-track">{[...stack,...stack].map((x,i)=><span key={i}>{x} <b>✦</b></span>)}</div></div></div></section>

    <section className="proof section-pad">
      <div className="section-label">10 / HOW I WORK</div>
      <div className="proof-grid">
        <div><span className="proof-kicker">01 — UNDERSTAND</span><h3>Start with the<br/><span>actual problem.</span></h3><p>Clarify the goal, constraints and people who will use the solution before choosing tools.</p></div>
        <div><span className="proof-kicker">02 — BUILD</span><h3>Make it useful.<br/><span>Make it clear.</span></h3><p>Focus on a coherent experience, maintainable implementation and the right level of complexity.</p></div>
        <div><span className="proof-kicker">03 — IMPROVE</span><h3>Test, refine,<br/><span>keep learning.</span></h3><p>Work through edge cases, document decisions and make the next iteration better.</p></div>
      </div>
    </section>

    <section id="contact" className="contact section-pad"><div className="contact-glow"/><div className="section-label">11 / LET'S BUILD</div><div className="contact-layout"><div className="contact-copy"><h2>Have an idea?<br/><em>Let's make it real.</em></h2><p>Tell me what you're trying to build, improve or automate. You don't need a perfect brief—just a starting point.</p><a className="contact-mail" href="mailto:anishchandra225@gmail.com">anishchandra225@gmail.com <ArrowUpRight size={22}/></a><div className="contact-note"><CheckCircle2 size={15}/> Remote freelance projects · India and worldwide</div></div><form className="inquiry-card" onSubmit={(event)=>{event.preventDefault();const subject=encodeURIComponent(`Project inquiry: ${projectType}`);const body=encodeURIComponent(`Hi Anish,\n\nI'm interested in: ${projectType}\n\nProject details:\n${projectBrief || 'I would like to discuss a project.'}\n\nThanks!`);window.location.href=`mailto:anishchandra225@gmail.com?subject=${subject}&body=${body}`}}><div className="inquiry-top"><span>PROJECT STARTER</span><span>01 — 02</span></div><h3>What are you looking to build?</h3><div className="inquiry-options" role="group" aria-label="Project type">{['Website / web app','AI integration','Automation workflow','A mix of everything'].map(option=><button type="button" key={option} className={projectType===option?'selected':''} onClick={()=>setProjectType(option)}>{projectType===option&&<CheckCircle2 size={14}/>}<span>{option}</span></button>)}</div><label htmlFor="project-brief">A little about the project <span>OPTIONAL</span></label><textarea id="project-brief" value={projectBrief} onChange={(event)=>setProjectBrief(event.target.value)} placeholder="What are you hoping to make easier, better, or possible?" rows={4}/><button type="submit" className="inquiry-submit">Start a conversation <Send size={16}/></button><p className="inquiry-foot">Opens your email app with a draft—nothing is sent automatically.</p></form></div><div className="contact-bottom"><span>India · Available for remote freelance projects</span><span>© 2026 Anish Chand Gupta</span></div></section>

    <footer><a href="#top" className="brand"><span>AG</span><b>Anish.</b></a><div><a href="#work">Work</a><a href="#capabilities">Services</a><a href="#contact">Contact</a></div><a href="mailto:anishchandra225@gmail.com"><Mail size={16}/></a></footer>
  </main>
}
