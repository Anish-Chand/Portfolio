'use client'

import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Code2, Cpu, Globe2, Layers3, Mail, Menu, Sparkles, X, Zap, BriefcaseBusiness, GraduationCap, Bot, Workflow, Monitor, Database, Network } from 'lucide-react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const projects = [
  { num:'01', title:'Eraya Ratna', type:'E-commerce / Web', description:'An e-commerce website for a spiritual accessories brand, focused on responsive presentation, product discovery, navigation and online-store functionality.', tags:['WordPress','WooCommerce','Responsive UI'], accent:'amber' },
  { num:'02', title:'AI Lead Generation System', type:'AI / Automation', description:'An automated lead-generation system for discovering, extracting, processing and organizing business data, with exploration of locally hosted AI models.', tags:['Python','n8n','Playwright','Local AI'], accent:'lime' },
  { num:'03', title:'Nekomi', type:'Web Application', description:'A modern API-driven web application with search, filtering, content discovery, episode selection, responsive UI and modular architecture.', tags:['Next.js','React','Node.js','APIs'], accent:'cyan' },
]

const capabilities = [
  { icon:Globe2, title:'Web Development', text:'Responsive websites and web applications built with modern frameworks, thoughtful UI and a focus on practical business needs.' },
  { icon:Sparkles, title:'AI & Intelligent Products', text:'AI-powered agents, LLM applications and integrations designed around useful business problems—not AI for the sake of AI.' },
  { icon:Layers3, title:'Workflow Automation', text:'Connected workflows that reduce repetitive manual work by combining APIs, automation platforms, AI and external services.' },
  { icon:Zap, title:'Technical Solutions', text:'Hands-on problem solving across architecture, implementation, troubleshooting, documentation and digital project delivery.' },
]

const stack = ['Next.js','React','JavaScript','TypeScript','Tailwind CSS','Node.js','Express.js','Python','n8n','AI Agents','LLMs','REST APIs','WordPress','WooCommerce','Playwright','Git','Vercel']

function CursorGlow(){
  const [pos,setPos]=useState({x:-500,y:-500})
  useEffect(()=>{ const move=(e:MouseEvent)=>setPos({x:e.clientX,y:e.clientY}); window.addEventListener('mousemove',move); return()=>window.removeEventListener('mousemove',move)},[])
  return <div className="cursor-glow" style={{transform:`translate3d(${pos.x-220}px,${pos.y-220}px,0)`}} />
}

function Nav(){
  const [open,setOpen]=useState(false)
  const links=[['Work','#work'],['Services','#capabilities'],['About','#about']]
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

  return <main id="top">
    <CursorGlow/><Nav/>

    <section className="hero section-pad">
      <motion.div className="hero-copy" style={{y:heroY}}>
        <div className="eyebrow"><span className="dot"/> AVAILABLE FOR REMOTE FREELANCE PROJECTS <span className="line"/></div>
        <h1>I build <em>web experiences</em> and intelligent digital systems.</h1>
        <p className="hero-lede">I'm Anish Chand Gupta — a web developer and AI automation builder creating responsive websites, web applications, AI-powered workflows and practical technical solutions for businesses.</p>
        <div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowDownRight size={18}/></a><a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={17}/></a></div>
      </motion.div>
      <motion.div className="hero-art" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:1.1,ease:[.16,1,.3,1]}}>
        <div className="orb orb-a"/><div className="orb orb-b"/><div className="orb orb-c"/>
        <div className="code-card"><div className="card-top"><span>solution.ts</span><span>● ● ●</span></div><pre>{`const solution = {\n  web:  "responsive",\n  ai:   "practical",\n  work: "scalable"\n}`}</pre><div className="card-foot"><span><Code2 size={13}/> BUILD</span><span><Cpu size={13}/> AUTOMATE</span></div></div>
      </motion.div>
      <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><div/></div>
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
      <div className="section-label">01 / THE APPROACH</div>
      <h2>Technology is only useful<br/><span>when it solves something.</span></h2>
      <p>I combine modern web development, AI, automation and practical problem-solving to turn ideas into usable digital products. The goal is not to use every tool available—it is to choose the right tools and build something that works.</p>
    </section>

    <section id="work" className="work section-pad">
      <div className="section-head"><div><div className="section-label">02 / SELECTED WORK</div><h2>A curated look at<br/><span>what I build.</span></h2></div><p>I keep this portfolio focused rather than filling it with noise. These projects represent the kinds of web, AI and automation work I enjoy doing.</p></div>
      <div className="projects">{projects.map((p,i)=><motion.article key={p.title} className={`project ${p.accent}`} onMouseEnter={()=>setActive(i)} onMouseLeave={()=>setActive(null)} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.07,duration:.65}}>
        <div className="project-number">{p.num}</div><div className="project-main"><div className="project-meta">{p.type}</div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><div className="project-action">{active===i?<ArrowUpRight size={25}/>:<ArrowDownRight size={25}/>}</div><div className="project-visual"><div className="visual-grid"/>{i===0 ? <div className="store-ui"><div className="store-nav"><b>ERAYA</b><span>SHOP · COLLECTION · CART</span></div><div className="store-hero"><span>SPIRITUAL ACCESSORIES</span><b>DISCOVER<br/>YOUR PIECE</b></div><div className="store-products"><i/><i/><i/></div></div> : i===1 ? <div className="automation-ui"><div className="flow-head"><span>LEAD ENGINE</span><b>LIVE</b></div><div className="flow-line"><i><Globe2/></i><span>DISCOVER</span><i><Database/></i><span>PROCESS</span><i><Bot/></i><span>QUALIFY</span><i><Workflow/></i><span>ROUTE</span></div><div className="terminal"><small>workflow.run()</small><code>leads → enrich → score → deliver</code></div></div> : <div className="app-ui"><div className="app-top"><b>NEKOMI</b><span>SEARCH　 FILTER　 PROFILE</span></div><div className="app-hero"><span>NOW STREAMING</span><b>DISCOVER<br/>YOUR NEXT STORY</b></div><div className="app-bars"><i/><i/><i/><i/></div></div>}</div>
      </motion.article>)}</div>
    </section>

    <section id="capabilities" className="capabilities section-pad">
      <div className="section-label">03 / WHAT I DO</div>
      <div className="cap-grid">{capabilities.map((c,i)=>{const Icon=c.icon;return <motion.div key={c.title} className="cap" initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><div className="cap-icon"><Icon size={22}/></div><span>0{i+1}</span><h3>{c.title}</h3><p>{c.text}</p><a href="#contact">Let's talk <ArrowUpRight size={15}/></a></motion.div>})}</div>
    </section>

    <section id="about" className="about section-pad">
      <div className="section-label">04 / EXPERIENCE</div>
      <div className="about-grid"><div><h2>Developer.<br/><span>Problem solver.</span></h2><div className="about-intro"><p>My work sits at the intersection of <strong>web development, AI, automation and technical problem-solving.</strong></p><p>I currently work with <strong>We Build Brands</strong> across system architecture, AI automation and technical solutions, after previously working as a project manager intern across website, branding and marketing projects.</p></div></div>
      <div className="timeline">
        <div className="timeline-item"><div className="timeline-icon"><BriefcaseBusiness size={17}/></div><div><span>2024 — PRESENT</span><h3>System Architect / AI Automation & Technical Solutions</h3><p>Business automation workflows, AI-powered agents, API integrations, technical architecture, troubleshooting and documentation.</p></div></div>
        <div className="timeline-item"><div className="timeline-icon"><BriefcaseBusiness size={17}/></div><div><span>OCT 2023 — JUN 2024</span><h3>Project Manager Intern</h3><p>Managed digital projects involving website development, branding, design and marketing deliverables, coordinating requirements and timelines.</p></div></div>
        <div className="timeline-item"><div className="timeline-icon"><GraduationCap size={17}/></div><div><span>2023 — PRESENT</span><h3>Bachelor of Computer Applications</h3><p>The Maharaja Sayajirao University, Baroda. Programming, databases, web development, software engineering, networking and cybersecurity fundamentals.</p></div></div>
      </div></div>
    </section>

    <section className="stack section-pad"><div className="stack-inner"><div><div className="section-label">05 / TOOLKIT</div><h2>The tools behind<br/><span>the work.</span></h2></div><div className="marquee"><div className="marquee-track">{[...stack,...stack].map((x,i)=><span key={i}>{x} <b>✦</b></span>)}</div></div></div></section>

    <section className="proof section-pad">
      <div className="section-label">06 / BEYOND THE BUILD</div>
      <div className="proof-grid">
        <div><span className="proof-kicker">CERTIFICATIONS</span><h3>Microsoft Tools<br/>Project Management<br/>Generative AI — Outskill</h3></div>
        <div><span className="proof-kicker">HIGHLIGHT</span><h3>Third Place<br/><span>Career Cosmos 2024</span></h3><p>University-level competition.</p></div>
        <div><span className="proof-kicker">WORKING STYLE</span><h3>Curious. Practical.<br/><span>Always learning.</span></h3><p>Focused on building useful things and improving the system behind them.</p></div>
      </div>
    </section>

    <section id="contact" className="contact section-pad"><div className="contact-glow"/><div className="section-label">07 / LET'S BUILD</div><h2>Have an idea?<br/><em>Let's make it real.</em></h2><p>Tell me what you're trying to build, improve or automate. Share as much or as little as you have—I can help turn the idea into a practical next step.</p><a className="contact-mail" href="mailto:anishchandra225@gmail.com">anishchandra225@gmail.com <ArrowUpRight size={25}/></a><div className="contact-bottom"><span>India · Available for remote freelance projects</span><span>© 2026 Anish Chand Gupta</span></div></section>

    <footer><a href="#top" className="brand"><span>AG</span><b>Anish.</b></a><div><a href="#work">Work</a><a href="#capabilities">Services</a><a href="#contact">Contact</a></div><a href="mailto:anishchandra225@gmail.com"><Mail size={16}/></a></footer>
  </main>
}
