
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  ExternalLink,
  Menu,
  X,
  Send,
  FlaskConical,
  Award,
  Microscope,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Binary
} from 'lucide-react';
import MoleculeBackground from './components/MoleculeBackground';
import SectionWrapper from './components/SectionWrapper';
import { EXPERIENCES, TECHNICAL_SKILLS, COMPLIANCE_SKILLS, EDUCATION, ICON_MAP } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('sending');
    const formData = new FormData(e.target as HTMLFormElement);
    console.log('Form Submitted:', Object.fromEntries(formData));
    setTimeout(() => setContactStatus('sent'), 1500);
  };

  // Direct download/view link for the provided Google Drive image
  const profileImageUrl = "https://lh3.googleusercontent.com/d/1GukzquhOIyrI9H0P0TUkt6dm9lw2I6UY";

  return (
    <div className="relative min-h-screen selection:bg-[#0047AB]/30 selection:text-white">
      <MoleculeBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#0047AB] to-[#10b981]">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              Md. Elin <span className="text-[#0047AB]">Hossain</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium hover:text-[#0047AB] transition-colors">About</a>
            <a href="#experience" className="text-sm font-medium hover:text-[#0047AB] transition-colors">Experience</a>
            <a href="#skills" className="text-sm font-medium hover:text-[#0047AB] transition-colors">Skills</a>
            <a href="#education" className="text-sm font-medium hover:text-[#0047AB] transition-colors">Education</a>
            <a href="#contact" className="px-5 py-2.5 bg-[#0047AB] rounded-full text-sm font-semibold hover:bg-[#0047AB]/80 transition-all hover:shadow-[0_0_15px_rgba(0,71,171,0.4)]">Contact</a>
          </div>

          <button className="md:hidden p-2 glass rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col space-y-6 text-lg font-medium">
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
                <a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a>
                <a href="#contact" className="text-[#0047AB]" onClick={() => setIsMenuOpen(false)}>Contact Me</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-xs font-bold mb-8 uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Chemical Engineer | QC & R&D Specialist</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
            Md. Elin <br /><span className="text-gradient-cobalt">Hossain</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl font-light leading-relaxed">
            Leading <span className="text-white font-medium border-b-2 border-[#10b981]/30">Quality Control</span> at top FDA-approved facilities with a focus on method validation and innovative R&D.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a href="#experience" className="px-10 py-5 bg-[#0047AB] rounded-2xl font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(0,71,171,0.3)] hover:shadow-[0_15px_40px_rgba(0,71,171,0.5)]">
              View Experience <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="px-10 py-5 glass rounded-2xl font-bold hover:bg-white/5 transition-all border border-white/10 flex items-center justify-center hover:border-white/30">
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group shrink-0"
        >
          {/* Static Photo Container */}
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border border-white/10 p-3 relative z-10 transition-all duration-700 group-hover:border-[#0047AB]/50">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#10b981]/50 shadow-[0_0_60px_rgba(16,185,129,0.15)] transition-all duration-700 group-hover:shadow-[0_0_80px_rgba(16,185,129,0.4)] group-hover:border-[#10b981]">
              <motion.img 
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
                src={profileImageUrl} 
                alt="Md. Elin Hossain"
                className="w-full h-full object-cover object-top filter contrast-[1.05]"
                referrerPolicy="no-referrer"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://picsum.photos/600/600';
                }}
              />
            </div>
            
            {/* Laboratory Accents - Static */}
            <div className="absolute top-2 right-6 w-14 h-14 glass rounded-2xl flex items-center justify-center border border-[#10b981]/40 shadow-xl transition-all duration-500 group-hover:rotate-12 group-hover:bg-[#10b981]/10">
              <FlaskConical className="text-[#10b981] w-7 h-7" />
            </div>
            
            <div className="absolute -bottom-2 right-12 glass px-4 py-2 rounded-xl border border-[#0047AB]/40 shadow-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0047AB] animate-pulse" />
              <span className="text-[10px] font-black text-white tracking-widest uppercase italic">FDA Compliant</span>
            </div>
          </div>
          
          {/* Decorative Outer Aura - Static base, grows on hover */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-[#0047AB]/5 rounded-full transition-all duration-1000 group-hover:w-[125%] group-hover:h-[125%] group-hover:border-[#0047AB]/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-t-2 border-r-2 border-transparent border-t-[#10b981]/30 border-r-[#0047AB]/30 rounded-full transition-all duration-1000 group-hover:rotate-180" />
        </motion.div>
      </section>

      {/* Summary */}
      <SectionWrapper id="about" className="relative">
        <div className="glass p-10 md:p-16 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0047AB]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-[#0047AB]/10 transition-colors" />
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                <span className="w-12 h-1 bg-gradient-to-r from-[#10b981] to-[#0047AB] inline-block rounded-full" />
                Scientific Profile
              </h2>
              <p className="text-slate-400 leading-relaxed text-xl mb-10 font-light">
                Results-oriented Chemical Engineer with a proven track record of excellence in <span className="text-white font-medium">high-stakes pharmaceutical environments</span>. Specialist in instrumental analysis and compliance orchestration.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0047AB]/50 transition-colors">
                  <h4 className="text-white font-black text-2xl mb-1 tracking-tight">FDA</h4>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">Validated Expert</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#10b981]/50 transition-colors">
                  <h4 className="text-white font-black text-2xl mb-1 tracking-tight">USP/ICH</h4>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">Method Mastery</p>
                </div>
              </div>
            </div>
            <div className="space-y-5">
               {[
                 { text: 'Method Validation Specialist', icon: <CheckCircle2 className="w-5 h-5" /> },
                 { text: 'QC Instrumental Lead', icon: <Microscope className="w-5 h-5" /> },
                 { text: 'FDA Compliance Expert', icon: <ShieldCheck className="w-5 h-5" /> },
                 { text: 'Innovative R&D Methodology', icon: <Binary className="w-5 h-5" /> }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="flex items-center gap-5 p-5 glass rounded-2xl border-l-4 border-l-[#0047AB] hover:translate-x-3 transition-transform cursor-default"
                 >
                   <div className="w-10 h-10 rounded-full bg-[#0047AB]/20 flex items-center justify-center text-[#0047AB] shadow-inner">
                     {item.icon}
                   </div>
                   <span className="font-semibold text-lg">{item.text}</span>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Experience */}
      <SectionWrapper id="experience">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">Professional <span className="text-gradient-cobalt">Milestones</span></h2>
          <div className="w-24 h-1.5 bg-white/10 mx-auto rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-[#0047AB]" />
          </div>
        </div>
        
        <div className="space-y-12 relative max-w-5xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0047AB] via-[#10b981] to-transparent hidden md:block opacity-20" />
          
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`flex flex-col md:flex-row gap-12 items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="flex-1 w-full">
                <div className="glass p-8 rounded-3xl border border-white/5 hover:border-[#0047AB]/50 transition-all group relative overflow-hidden shadow-2xl">
                  {/* Subtle highlight */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0047AB] to-transparent opacity-30" />
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-black text-[#10b981] bg-[#10b981]/10 px-3 py-1.5 rounded-lg border border-[#10b981]/20">
                      {exp.period}
                    </span>
                    {exp.isFDA && (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-tighter">US FDA FACILITY</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#0047AB] transition-colors tracking-tight">{exp.role}</h3>
                  <h4 className="text-lg font-semibold text-[#0047AB]/80 mb-6 flex items-center gap-2">
                    <Award className="w-4 h-4" /> {exp.company}
                  </h4>
                  
                  <ul className="space-y-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-slate-400 flex items-start gap-4 group/li">
                        <div className="w-2 h-2 rounded-full bg-[#10b981]/50 mt-2 shrink-0 group-hover/li:bg-[#10b981] transition-colors" />
                        <span className="text-[15px] leading-relaxed group-hover/li:text-slate-200 transition-colors">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl glass border border-[#0047AB]/40 text-[#0047AB] shrink-0 hidden md:flex shadow-xl">
                <FlaskConical className="w-6 h-6" />
              </div>
              
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Skills Grid */}
      <SectionWrapper id="skills">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-4 tracking-tighter">Laboratory <span className="text-[#10b981]">Toolkit</span></h2>
          <p className="text-slate-500 font-medium">Advanced instrumentation and regulatory frameworks.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Instrumental Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-4 text-white/90">
              <div className="p-2 rounded-lg bg-[#0047AB]/20"><Microscope className="w-6 h-6 text-[#0047AB]" /></div>
              Analytical Instrumentation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TECHNICAL_SKILLS.map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -8, backgroundColor: 'rgba(0, 71, 171, 0.05)' }}
                  className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-5 transition-all cursor-pointer group/skill"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 group-hover/skill:text-[#0047AB] group-hover/skill:bg-[#0047AB]/10 transition-all">
                    {ICON_MAP[skill.icon]}
                  </div>
                  <span className="font-bold text-slate-300 group-hover/skill:text-white transition-colors">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Compliance Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-4 text-white/90">
              <div className="p-2 rounded-lg bg-[#10b981]/20"><ShieldCheck className="w-6 h-6 text-[#10b981]" /></div>
              Regulatory Compliance
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {COMPLIANCE_SKILLS.map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -8, backgroundColor: 'rgba(16, 185, 129, 0.05)' }}
                  className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-5 transition-all cursor-pointer group/skill"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 group-hover/skill:text-[#10b981] group-hover/skill:bg-[#10b981]/10 transition-all">
                    {ICON_MAP[skill.icon]}
                  </div>
                  <span className="font-bold text-slate-300 group-hover/skill:text-white transition-colors">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Education */}
      <SectionWrapper id="education">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4 tracking-tighter">Academic <span className="text-[#0047AB]">Foundation</span></h2>
          <p className="text-slate-500">Research and specialized training in Applied Chemistry.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {EDUCATION.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass p-10 rounded-[3rem] border border-white/5 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0047AB]/10 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform" />
              
              <span className="text-[#10b981] font-black text-2xl mb-4 block">{edu.year}</span>
              <h3 className="text-2xl font-bold mb-4 pr-12 text-white leading-tight">{edu.degree}</h3>
              <p className="text-[#0047AB] font-bold text-lg mb-10 flex items-center gap-2">
                <MapPin className="w-4 h-4 opacity-50" /> {edu.institution}
              </p>
              
              {edu.thesis && (
                <div className="p-8 bg-black/40 rounded-3xl border border-white/10 relative">
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-[#10b981] rounded-full text-[10px] font-black text-white uppercase tracking-widest">THESIS</div>
                  <p className="text-[15px] italic text-slate-300 leading-relaxed font-light">"{edu.thesis}"</p>
                </div>
              )}
              {edu.project && (
                <div className="p-8 bg-black/40 rounded-3xl border border-white/10 relative">
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-[#0047AB] rounded-full text-[10px] font-black text-white uppercase tracking-widest">RESEARCH</div>
                  <p className="text-[15px] italic text-slate-300 leading-relaxed font-light">"{edu.project}"</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" className="pb-32">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-6xl font-black mb-6 tracking-tighter">Get In <span className="text-[#0047AB]">Touch</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Open for technical consultation, research collaborations, or laboratory management inquiries.
              </p>
            </div>
            
            <div className="space-y-5">
              {[
                { label: 'Email Me', value: 'elinacce5013@gmail.com', href: 'mailto:elinacce5013@gmail.com', icon: <Mail className="w-6 h-6" />, color: '#0047AB' },
                { label: 'Call Me', value: '+8801722832056', href: 'tel:+8801722832056', icon: <Phone className="w-6 h-6" />, color: '#10b981' },
                { label: 'Address', value: 'Sector-11, Uttara, Dhaka', href: null, icon: <MapPin className="w-6 h-6" />, color: '#64748b' }
              ].map((item, i) => (
                <motion.a 
                  key={i}
                  href={item.href || '#'}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-6 p-6 glass rounded-[2rem] border border-white/5 hover:border-white/20 transition-all shadow-xl group/contact"
                >
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover/contact:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">{item.label}</p>
                    <p className="font-bold text-lg group-hover/contact:text-white transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass p-10 md:p-14 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
               {/* Decorative formulas */}
              <div className="absolute top-10 right-10 text-[60px] font-black text-white/[0.02] select-none pointer-events-none">H₂O</div>
              <div className="absolute bottom-10 left-10 text-[60px] font-black text-white/[0.02] select-none pointer-events-none">C₆H₁₂O₆</div>

              <form onSubmit={handleContactSubmit} className="space-y-8 relative z-10">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Enter full name"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#0047AB] focus:bg-white/[0.05] transition-all" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="email@example.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#0047AB] focus:bg-white/[0.05] transition-all" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Technical Inquiry</label>
                  <textarea 
                    rows={5}
                    name="message"
                    required
                    placeholder="Describe your request or message..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#0047AB] focus:bg-white/[0.05] transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={contactStatus !== 'idle'}
                  className="w-full py-5 bg-[#0047AB] rounded-2xl font-black text-lg tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-[#0047AB]/80 transition-all disabled:opacity-50 hover:shadow-[0_10px_30px_rgba(0,71,171,0.4)]"
                >
                  {contactStatus === 'idle' && <><Send className="w-5 h-5" /> Execute Request</>}
                  {contactStatus === 'sending' && "Processing..."}
                  {contactStatus === 'sent' && "Message Transmitted Successfully!"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 glass">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-[#0047AB] to-[#10b981]">
                  <FlaskConical className="w-6 h-6 text-white" />
                </div>
                <span className="font-black text-2xl tracking-tighter">
                  Md. Elin <span className="text-[#0047AB]">Hossain</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
                Precision-driven chemical engineering and quality assurance for a safer world.
              </p>
            </div>
            
            <div className="flex items-center space-x-8">
              <a 
                href="https://www.linkedin.com/in/md-elin-hossain-8455a0153/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-[1.25rem] glass border border-white/10 flex items-center justify-center hover:bg-[#0047AB] hover:text-white transition-all shadow-xl hover:-translate-y-2"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 rounded-[1.25rem] glass border border-white/10 flex items-center justify-center hover:bg-[#10b981] hover:text-white transition-all shadow-xl hover:-translate-y-2"
              >
                <FileText className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5">
            <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Md. Elin Hossain. Chemical Engineer.
            </p>
            <div className="flex items-center gap-8 text-[10px] font-black text-slate-600 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Compliance Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
