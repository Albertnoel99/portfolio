/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Brush, 
  Search, 
  Timer, 
  Inbox, 
  Users, 
  Shield, 
  Edit3, 
  Globe, 
  ArrowRight, 
  Mail, 
  Phone, 
  Circle,
  Home as HomeIcon,
  Briefcase,
  User as UserIcon,
  MessageSquare,
  ArrowUpRight,
  LayoutGrid
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Types ---
type NavSection = "home" | "work" | "about" | "contact";

// --- Navigation Components ---
const Header = ({ activeSection, onNavClick }: { activeSection: NavSection, onNavClick: (s: NavSection) => void }) => (
  <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant">
    <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavClick('home')}>
        <Circle className="w-5 h-5 text-brand-primary fill-brand-primary" />
        <span className="text-lg font-bold tracking-tight text-brand-primary font-serif">ANTONY NEVAL K T</span>
      </div>
      <nav className="hidden md:flex gap-8">
        {(["home", "work", "about", "contact"] as NavSection[]).map((sec) => (
          <button
            key={sec}
            onClick={() => onNavClick(sec)}
            className={`font-label-caps transition-colors relative py-1 ${
              activeSection === sec ? "text-brand-primary" : "text-on-surface-variant hover:text-brand-primary"
            }`}
          >
            {sec}
            {activeSection === sec && (
              <motion.div 
                layoutId="activeNav" 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary" 
              />
            )}
          </button>
        ))}
      </nav>
      <button 
        onClick={() => onNavClick('contact')}
        className="bg-brand-primary text-white px-6 py-2 font-label-caps rounded-lg hover:opacity-90 transition-all active:scale-95 shadow-sm"
      >
        HIRE ME
      </button>
    </div>
  </header>
);

const BottomNav = ({ activeSection, onNavClick }: { activeSection: NavSection, onNavClick: (s: NavSection) => void }) => (
  <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface/95 border-t border-outline-variant flex justify-around items-center px-4 h-16 backdrop-blur-md pb-safe">
    <button onClick={() => onNavClick('home')} className={`flex flex-col items-center gap-1 ${activeSection === 'home' ? 'text-brand-primary' : 'text-on-surface-variant'}`}>
      <HomeIcon className="w-5 h-5" />
      <span className="text-[10px] font-label-caps">Home</span>
    </button>
    <button onClick={() => onNavClick('work')} className={`flex flex-col items-center gap-1 ${activeSection === 'work' ? 'text-brand-primary' : 'text-on-surface-variant'}`}>
      <Briefcase className="w-5 h-5" />
      <span className="text-[10px] font-label-caps">Work</span>
    </button>
    <button onClick={() => onNavClick('about')} className={`flex flex-col items-center gap-1 ${activeSection === 'about' ? 'text-brand-primary' : 'text-on-surface-variant'}`}>
      <UserIcon className="w-5 h-5" />
      <span className="text-[10px] font-label-caps">About</span>
    </button>
    <button onClick={() => onNavClick('contact')} className={`flex flex-col items-center gap-1 ${activeSection === 'contact' ? 'text-brand-primary' : 'text-on-surface-variant'}`}>
      <MessageSquare className="w-5 h-5" />
      <span className="text-[10px] font-label-caps">Contact</span>
    </button>
  </nav>
);

// --- Section Views ---
const HomeView = ({ onNavClick }: { onNavClick: (s: NavSection) => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="space-y-32"
  >
    {/* Hero */}
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="max-w-2xl space-y-6">
        <span className="font-label-caps text-brand-secondary">Personal Web Services</span>
        <h1 className="text-5xl md:text-7xl text-brand-primary">Building Websites That Work for Your Business</h1>
        <p className="text-xl text-on-surface-variant leading-relaxed">
          I help small business owners and professionals build a clear, welcoming presence online. Together, we find your unique voice in the digital community.
        </p>
        <button 
          onClick={() => onNavClick('work')}
          className="group flex items-center gap-3 font-label-caps text-brand-primary hover:gap-5 transition-all"
        >
          View Portfolio <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="w-full md:w-1/3 aspect-[4/5] bg-surface-high rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" 
          alt="Clean workspace" 
          className="w-full h-full object-cover grayscale opacity-90"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>

    {/* Methodology */}
    <section className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <span className="font-label-caps text-brand-secondary">My Approach</span>
          <h2 className="text-4xl text-brand-primary">How I Help Your Site Grow</h2>
        </div>
        <p className="text-on-surface-variant max-w-md italic font-light text-lg">
          A personal, step-by-step process to ensure your website is welcoming, easy to find, and simple to use.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Search, title: "Search Visibility", desc: "Crafting technical foundations so search engines can find and trust your content easily." },
          { icon: Timer, title: "Speed & Performance", desc: "Optimizing every asset to ensure your visitors have a snappy, responsive experience on any device." },
          { icon: Inbox, title: "Content Clarity", desc: "Organizing information architecturally to guide customers exactly where they need to go." },
        ].map((item, i) => (
          <div key={i} className="p-8 bg-surface-low border border-outline-variant rounded-xl whisper-shadow space-y-6 group hover:border-brand-secondary transition-colors">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-outline-variant group-hover:bg-brand-secondary transition-colors">
              <item.icon className="w-6 h-6 text-brand-primary group-hover:text-white" />
            </div>
            <h3 className="text-2xl">{item.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Tech Banner */}
    <section className="bg-brand-primary text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <span className="font-label-caps text-surface-highest opacity-60">Quality Craftsmanship</span>
          <h2 className="text-4xl text-white">Modern Tools for Lasting Results</h2>
          <p className="text-lg opacity-80 leading-relaxed max-w-lg">
            I use professional-grade technologies that ensure your site is secure, fast, and future-proof. No generic shortcuts—just clean code and thoughtful design.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Shield className="w-6 h-6 text-brand-secondary" />
              <span className="font-medium">Bank-level Security Integrations</span>
            </div>
            <div className="flex items-center gap-4">
              <Edit3 className="w-6 h-6 text-brand-secondary" />
              <span className="font-medium">Easy-to-use CMS Options</span>
            </div>
            <div className="flex items-center gap-4">
              <Globe className="w-6 h-6 text-brand-secondary" />
              <span className="font-medium">Global CDN Delivery</span>
            </div>
          </div>
        </div>
        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-sm -rotate-3" />
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
            alt="Dashboard design" 
            className="rounded-3xl shadow-2xl relative z-10 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  </motion.div>
);

const WorkView = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="max-w-7xl mx-auto px-6 space-y-16"
  >
    <div className="max-w-3xl space-y-4">
      <span className="font-label-caps text-brand-secondary">Selected Portfolio</span>
      <h1 className="text-5xl text-brand-primary uppercase">Crafting Digital Experiences</h1>
      <p className="text-xl text-on-surface-variant">A collection of collaborations focused on structural integrity and long-term results.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { 
          title: "Partnership Portal", 
          cat: "Financial Infrastructure", 
          desc: "Comprehensive documentation and portal development for a global fintech.",
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        },
        { 
          title: "Cyber Shield Audit", 
          cat: "Security SaaS", 
          desc: "Visual identity and platform auditing for a leading cyber security firm.",
          img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
        },
        { 
          title: "Vector Strategy", 
          cat: "Marketing & Data", 
          desc: "Interactive data visualizations and strategy hub for market researchers.",
          img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
        },
        { 
          title: "Reactive Dashboards", 
          cat: "Internal Tooling", 
          desc: "Custom-built real-time monitoring tools for large scale logistics ops.",
          img: "https://images.unsplash.com/photo-1558223594-e362143ae74c?auto=format&fit=crop&q=80&w=800"
        },
      ].map((p, i) => (
        <div key={i} className="group cursor-pointer">
          <div className="aspect-[16/10] bg-surface-high rounded-xl overflow-hidden mb-6">
            <img 
              src={p.img} 
              alt={p.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <span className="font-label-caps text-brand-secondary">{p.cat}</span>
              <h3 className="text-2xl text-brand-primary">{p.title}</h3>
              <p className="text-on-surface-variant">{p.desc}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const AboutView = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
  >
    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
      <img 
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
        alt="Antony Neval" 
        className="w-full h-full object-cover grayscale contrast-125"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
      <div className="absolute bottom-6 left-6 p-6 bg-brand-secondary/90 backdrop-blur-md text-white rounded-xl">
        <span className="font-label-caps">Established Kochi, 2018</span>
      </div>
    </div>
    <div className="space-y-8">
      <span className="font-label-caps text-brand-secondary">My Story</span>
      <h1 className="text-6xl text-brand-primary">Thoughtful Design from Kochi.</h1>
      <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
        <p>I'm Antony, a web designer and technical advisor dedicated to creating digital experiences that feel human and grounded.</p>
        <p>Starting in the vibrant streets of Ernakulam, I saw how digital platforms could empower local businesses. I wanted to be the bridge that made professional, high-standard websites accessible to everyone.</p>
        <p>My work is a blend of visual clarity and technical robustness. I don't just build sites that look "cool"—I build them to solve problems and last for years.</p>
      </div>
      <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant">
        <div>
          <h4 className="font-serif text-brand-primary text-xl mb-2">Expertise</h4>
          <ul className="text-on-surface-variant space-y-1">
            <li>SEO Strategy</li>
            <li>React Architecture</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-brand-primary text-xl mb-2">Philosophy</h4>
          <ul className="text-on-surface-variant space-y-1" >
            <li>Human-First</li>
            <li>Structural Clarity</li>
            <li>Long-Term Purity</li>
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);

const ContactView = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16"
  >
    <div className="space-y-12">
      <div className="space-y-4">
        <span className="font-label-caps text-brand-secondary">Get In Touch</span>
        <h1 className="text-6xl text-brand-primary underline decoration-brand-secondary/20 hover:decoration-brand-secondary transition-all">Let's talk about your project.</h1>
      </div>
      <div className="space-y-8">
        <a href="mailto:hello@neval.tech" className="flex items-center gap-6 group">
          <div className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
            <Mail className="w-6 h-6 text-on-surface group-hover:text-white" />
          </div>
          <div>
            <span className="font-label-caps text-outline">Email Me</span>
            <p className="text-2xl text-brand-primary">hello@neval.tech</p>
          </div>
        </a>
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center">
            <Phone className="w-6 h-6 text-on-surface" />
          </div>
          <div>
            <span className="font-label-caps text-outline">Call Center</span>
            <p className="text-2xl text-brand-primary">Remote, Worldwide</p>
          </div>
        </div>
      </div>
    </div>
    
    <form className="bg-surface-low border border-outline-variant p-10 rounded-2xl whisper-shadow space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="font-label-caps text-on-surface-variant">Your Name</label>
          <input type="text" className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-brand-primary outline-none" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label className="font-label-caps text-on-surface-variant">Email</label>
          <input type="email" className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-brand-primary outline-none" placeholder="john@example.com" />
        </div>
      </div>
      <div className="space-y-2">
          <label className="font-label-caps text-on-surface-variant">Project Goals</label>
          <div className="flex flex-wrap gap-3">
            {["Web Design", "SEO Audit", "Consulting", "Full Build"].map((goal) => (
              <button key={goal} type="button" className="px-4 py-2 border border-outline-variant rounded-full text-sm hover:bg-brand-primary hover:text-white transition-all">
                {goal}
              </button>
            ))}
          </div>
      </div>
      <div className="space-y-2">
        <label className="font-label-caps text-on-surface-variant">Message</label>
        <textarea rows={4} className="w-full bg-transparent border border-outline-variant p-4 focus:border-brand-primary outline-none rounded-xl" placeholder="Tell me a bit about your business..." />
      </div>
      <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-label-caps hover:opacity-90 active:scale-[0.98] transition-all">
        Send Message
      </button>
    </form>
  </motion.div>
);

const Footer = () => (
  <footer className="border-t border-outline-variant py-20 pb-28 md:pb-20 mt-32 bg-surface-low">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="space-y-4">
        <span className="text-2xl font-bold font-serif text-brand-primary">ANTONY NEVAL K T</span>
        <p className="text-on-surface-variant max-w-xs">Building resilient digital foundations for the professionals of tomorrow.</p>
        <p className="font-label-caps text-[10px] text-outline">© 2024 Antony Neval | All Rights Reserved</p>
      </div>
      <div className="grid grid-cols-2 gap-16 md:gap-32">
        <div className="space-y-4">
          <h4 className="font-label-caps text-brand-primary">Services</h4>
          <ul className="text-on-surface-variant space-y-2 text-sm">
            <li>SEO Strategy</li>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Digital Consulting</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-caps text-brand-primary">Social</h4>
          <ul className="text-on-surface-variant space-y-2 text-sm">
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Dribbble</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} onNavClick={setActiveSection} />
      
      <main className="pt-32">
        <AnimatePresence mode="wait">
          {activeSection === "home" && <HomeView key="home" onNavClick={setActiveSection} />}
          {activeSection === "work" && <WorkView key="work" />}
          {activeSection === "about" && <AboutView key="about" />}
          {activeSection === "contact" && <ContactView key="contact" />}
        </AnimatePresence>
      </main>

      <Footer />
      <BottomNav activeSection={activeSection} onNavClick={setActiveSection} />
    </div>
  );
}

