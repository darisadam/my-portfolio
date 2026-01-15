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
  Gamepad2
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { AboutSection } from "@/components/sections/AboutSection";

export default function Home() {
  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <Mail size={24} />, href: "mailto:you@example.com", label: "Email" },
  ];

  const portfolios = [
    {
      id: "ios",
      title: "iOS Development",
      icon: <Smartphone size={40} />,
      color: "from-blue-500 to-cyan-500",
      description: "Crafting fluid, user-centric mobile experiences with Swift & SwiftUI.",
      href: "/ios",
    },
    {
      id: "devops",
      title: "DevOps & Cloud",
      icon: <Terminal size={40} />,
      color: "from-emerald-500 to-teal-500",
      description: "Building reliable, scalable, and secure infrastructure as code.",
      href: "/devops",
    },
    {
      id: "game",
      title: "Game Development",
      icon: <Gamepad2 size={40} />,
      color: "from-purple-500 to-pink-500",
      description: "Creating immersive interactive worlds and gameplay mechanics.",
      href: "/game",
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 py-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full space-y-16"
      >
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 text-sm font-medium backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new projects
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Transforming Ideas into <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I'm a versatile engineer bridging the gap between
            <span className="text-slate-200"> mobile development</span>,
            <span className="text-slate-200"> cloud infrastructure</span>, and
            <span className="text-slate-200"> interactive media</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:scale-110 transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-950 font-semibold rounded-full hover:bg-slate-200 transition-colors">
              <Download size={20} />
              Resume
            </button>
          </div>
        </section>



        {/* Navigation Grid */}
        <section className="grid md:grid-cols-3 gap-6">
          {portfolios.map((item, index) => (
            <Link key={item.id} href={item.href} className="block group">
              <Card className="h-full relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10 space-y-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                    {item.icon}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-100 mb-2">{item.title}</h2>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>

                  <div className="flex items-center text-sm font-medium text-slate-300 group-hover:text-white transition-colors pt-2">
                    Explore
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </section>

        {/* About Section */}
        <AboutSection />
      </motion.div>
    </main>
  );
}
