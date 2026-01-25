"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronRight,
  Smartphone,
  Terminal,
  Gamepad2,
  TrendingDown,
  Zap,
  Box,
  Users,
  Building,
  Radio,
  FileText
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { AboutSection } from "@/components/sections/AboutSection";


export default function Home() {
  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com/darisadam", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/damdaris/", label: "LinkedIn" },
    { icon: <Mail size={24} />, href: "mailto:darisadam.office@gmail.com", label: "Email" },
  ];

  const highlights = [
    {
      value: "90%",
      label: "App Size Reduction",
      desc: "<10MB Native Apps",
      icon: <Box className="text-blue-400" size={24} />,
      color: "bg-blue-500/10 border-blue-500/20"
    },
    {
      value: "70%",
      label: "Resource Savings",
      desc: "Optimized CPU/Memory",
      icon: <TrendingDown className="text-emerald-400" size={24} />,
      color: "bg-emerald-500/10 border-emerald-500/20"
    },
    {
      value: "0",
      label: "Dependencies",
      desc: "Native-First Arch",
      icon: <Zap className="text-yellow-400" size={24} />,
      color: "bg-yellow-500/10 border-yellow-500/20"
    }
  ];

  const portfolios = [
    {
      id: "ios",
      title: "iOS Development",
      subtitle: "Native Performance & Clean Architecture",
      icon: <Smartphone size={32} />,
      color: "from-blue-600 to-cyan-500",
      description: "Building lightweight, fluid apps that users love and businesses trust. Focus on long-term maintainability.",
      tags: ["SwiftUI", "Core Data", "XCTest"],
      href: "/ios",
    },
    {
      id: "devops",
      title: "DevOps & Cloud",
      subtitle: "Cost-Efficiency & Automation",
      icon: <Terminal size={32} />,
      color: "from-emerald-600 to-teal-500",
      description: "Automating workflows with GitHub Actions & Fastlane to reduce deployment costs and errors. 100+ Cloud Skills.",
      tags: ["GCP", "CI/CD", "Docker"],
      href: "/devops",
    },
    {
      id: "game",
      title: "Game Development",
      subtitle: "Creative Hardware Utilization",
      icon: <Gamepad2 size={32} />,
      color: "from-purple-600 to-pink-500",
      description: "Pushing iPhone sensors and SwiftUI framework limits to create immersive interactive experiences.",
      tags: ["SpriteKit", "Sensors", "Physics"],
      href: "/game",
    },
  ];

  const leadershipStories = [
    {
      title: "National Network Builder",
      role: "Chairman @ HMPE & IMAPESI",
      desc: "United economic students nationwide, building a resilient professional network across Indonesia.",
      icon: <Users className="text-blue-400" size={20} />
    },
    {
      title: "Legislative Bridge",
      role: "Audiences with DPRD West Java",
      desc: "Facilitated high-level dialogues between students and government, driving policy awareness.",
      icon: <Building className="text-indigo-400" size={20} />
    },
    {
      title: "Crisis Management",
      role: "Pandemic Transition Lead",
      desc: "Successfully guided organizational operations from remote-only back to full onsite productivity.",
      icon: <Radio className="text-rose-400" size={20} />
    },
    {
      title: "Operational Excellence",
      role: "Secretary @ KOPMA",
      desc: "Secured legal compliance and managed assets to ensure business continuity and growth.",
      icon: <FileText className="text-emerald-400" size={20} />
    }
  ];

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-start p-4 py-20 bg-slate-950">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full space-y-24"
      >
        {/* 1. Hero Section: The Hook */}
        <section className="text-center space-y-8 pt-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 text-sm font-medium backdrop-blur-sm shadow-lg"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Innovating & Building Future Solutions
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Business-Minded <br />
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                iOS Engineer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Solving business problems with long-term digital solutions.
              <br className="hidden md:block" />
              I optimize resources <span className="text-slate-500 text-base">(CPU / Memory / Cost)</span> to deliver high-performance native experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 flex-wrap">
            <button
              onClick={() => {
                document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]"
            >
              View My Projects
            </button>

            <button
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 rounded-full bg-slate-900/50 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors font-semibold"
            >
              About Me
            </button>

            <div className="w-full sm:w-auto flex gap-4 justify-center">
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 text-white font-medium rounded-full hover:bg-slate-800 transition-colors text-sm">
                <Download size={16} />
                Resume
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 text-white font-medium rounded-full hover:bg-slate-800 transition-colors text-sm">
                <Download size={16} />
                Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* 2. Efficiency Highlights: Quantifiable Impact */}
        <section className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 rounded-2xl border backdrop-blur-sm ${item.color} border-slate-800/50`}
            >
              <div className="flex items-center justify-between mb-4">
                {item.icon}
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{item.label}</span>
              </div>
              <div className="text-4xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-slate-400">{item.desc}</div>
            </motion.div>
          ))}
        </section>

        {/* 3. Domain Expertise: Portfolio Navigation */}
        <section id="expertise" className="space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
            <h2 className="text-2xl font-bold text-slate-200">Domain Expertise</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolios.map((item) => (
              <Link key={item.id} href={item.href} className="block group h-full">
                <Card className="h-full relative overflow-hidden border-slate-800 bg-slate-900/50 group-hover:-translate-y-2 transition-transform duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-50" />

                  <div className="p-6 relative z-10 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400 mb-4 font-medium">{item.subtitle}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{item.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-sm font-bold text-slate-300 group-hover:text-white transition-colors mt-auto">
                      Explore Projects
                      <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. Leadership & Impact: Beyond Code */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
            <h2 className="text-2xl font-bold text-slate-200">Leadership & Impact</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {leadershipStories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:bg-slate-900/50 transition-colors"
              >
                <div className="shrink-0 mt-1">{story.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-100">{story.title}</h4>
                  <p className="text-slate-500 text-xs font-mono uppercase mb-2">{story.role}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{story.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Detailed Resume: Experience, Education, & Org */}
        <AboutSection />

        {/* Footer / Socials */}
        <section className="text-center py-10 space-y-6">
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Adam D Ryadhi. Built with efficiency in mind.
          </p>
        </section>

      </motion.div>
    </main>
  );
}
