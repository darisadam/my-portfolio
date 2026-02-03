"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    Smartphone,
    ExternalLink,
    Github,
    Layers,
    Code2,
    X,
    Calendar,
    User,
    CheckCircle2,
    Terminal,
    Database,
    Cloud,
    Zap,
    Image as ImageIcon,
    FileText,
    Mic,
    Eye,
    CreditCard,
    LayoutGrid,
    Box,
    GitMerge,
    TestTube,
    Cpu,
    Globe,
    Server
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

// --- Data ---

const PROJECTS = [
    {
        title: "Kalkudam v2",
        desc: "Advanced iPad Calculator.",
        fullDesc: "A sophisticated arithmetic calculator tailored for the iPad's expansive display, featuring history tracking and scientific functions.",
        tech: ["iPadOS", "SwiftUI"],
        date: "Feb 2026 (Research Phase)",
        role: "Solo Developer",
        contribution: "Conducted user research to identify pain points in existing calculator apps. Managed the entire product lifecycle from UI/UX design in Figma to App Store publication.",
        links: { appStore: "https://apps.apple.com/id/app/kalkudam/id6670356435" },
        color: "from-orange-400 to-orange-600"
    },
    {
        title: "MadaPOS",
        desc: "POS & Stock Management System.",
        fullDesc: "A comprehensive Point of Sale solution designed to streamline retail operations, including real-time stock management and automated financial reporting.",
        tech: ["SwiftUI", "SwiftData"],
        date: "Feb 2026 (Research Phase)",
        role: "Solo Developer",
        contribution: "Engineered the core database schema for complex inventory tracking. Designed an intuitive dashboard for store managers to visualize sales data.",
        links: { appStore: "https://apps.apple.com/id/app/kalkudam/id6670356435" },
        color: "from-cyan-600 to-blue-700"
    },
    {
        title: "ParroTalk v3",
        desc: "LLM-powered English Buddy.",
        fullDesc: "An AI-driven language learning assistant that leverages Large Language Models (LLMs) to provide natural, context-aware English conversation practice.",
        tech: ["SwiftUI", "LLM", "Foundation", "SwiftData"],
        date: "Feb 2026 (Research Phase)",
        role: "Project Lead",
        contribution: "Initiated the project vision and business concept. Led the iOS team in integrating on-device LLM inference for low-latency responses.",
        links: { appStore: "https://apps.apple.com/id/app/parrotalk/id6670471194" },
        color: "from-fuchsia-500 to-pink-600"
    },
    {
        title: "MadaBank",
        desc: "Secure Banking Capabilities Demo.",
        fullDesc: "A robust banking application prototype demonstrating enterprise-grade security, multi-module architecture, and safe networking practices.",
        tech: ["UIKit", "Cocoapods", "RxSwift", "Moya", "Alamofire", "SceneKit", "Multi Modular", "Multi Repo"],
        date: "Jan 2026 - Present",
        role: "Fullstack iOS Developer",
        contribution: "Implemented a modular architecture to separate concerns. Developed the secure networking layer to handle sensitive financial transactions effectively.",
        links: { github: "https://github.com/madabank/madabank-ios" },
        color: "from-emerald-500 to-green-600"
    },
    {
        title: "Lunavo",
        desc: "Mental Wellness Journaling.",
        fullDesc: "An intelligent journaling companion focused on mental wellness, featuring audio recording, sentiment analysis, and biometric security.",
        tech: ["SwiftUI", "AVFoundation", "Speech", "SwiftData"],
        date: "Dec 2025 - Present",
        role: "Project Manager & Engineer",
        contribution: "Managed the repository and set up CI/CD pipelines. Implemented secure biometric authentication and the audio journaling feature using AVFoundation.",
        links: { appStore: "https://apps.apple.com/id/app/photo-to-pdf-pixpdf/id6754635698" },
        color: "from-indigo-500 to-purple-500"
    },
    {
        title: "Pix PDF",
        desc: "High-Performance PDF Scanner.",
        fullDesc: "A powerful PDF utility app allowing users to scan documents, edit PDF files, and extract text using Optical Character Recognition (OCR).",
        tech: ["SwiftUI", "PDFKit", "Vision", "RevenueCat"],
        date: "Nov 2025 - Dec 2025",
        role: "Solo Developer",
        contribution: "Built the custom PDF rendering engine and integrated the Vision framework for accurate text extraction from scanned images.",
        links: { appStore: "https://apps.apple.com/id/app/photo-to-pdf-pixpdf/id6754635698" },
        color: "from-red-500 to-orange-500"
    },
    {
        title: "Vincam",
        desc: "Retro Camera Filter App.",
        fullDesc: "A photography app that transforms modern digital photos into vintage-style masterpieces using custom-built image filters.",
        tech: ["SwiftUI", "Kingfisher", "SwiftData", "RevenueCat"],
        date: "Oct 2025 - Nov 2025",
        role: "Solo Developer",
        contribution: "Optimized the real-time filter pipeline to run smoothly on older devices. Designed the retro-themed user interface.",
        links: { appStore: "https://apps.apple.com/id/app/vintage-camera-vincam/id6754418590" },
        color: "from-yellow-500 to-amber-600"
    },
    {
        title: "Sketchly",
        desc: "Artistic Sketch Camera.",
        fullDesc: "A creative tool that converts camera feed and photos into realistic pencil sketches in real-time.",
        tech: ["SwiftUI", "Kingfisher", "SwiftData", "RevenueCat"],
        date: "Sep 2025 - Oct 2025",
        role: "Solo Developer",
        contribution: "Developed custom Metal shaders to achieve the sketch effect. Implemented aggressive memory management to prevent crashes during high-res processing.",
        links: { appStore: "https://apps.apple.com/id/app/photo-to-sketch-sketchly/id6753066357" },
        color: "from-pink-500 to-rose-500"
    },
    {
        title: "Erafone",
        desc: "Gadget E-commerce App.",
        fullDesc: "The specific mobile application for Erafone, facilitating gadget sales and accessory shopping for a massive user base.",
        tech: ["SwiftUI", "Clean Arch", "Keychain"],
        date: "Jun 2025",
        role: "Contract Developer",
        contribution: "Developed reusable UI components for the design system. Implemented the dynamic dashboard feature to showcase promotions and products.",
        links: { appStore: "https://apps.apple.com/id/app/erafone/id6749214274" },
        color: "from-blue-600 to-sky-600"
    },
    {
        title: "Gallery24",
        desc: "Jewelry E-commerce.",
        fullDesc: "A specialized e-commerce platform for Pegadaian, allowing users to browse and purchase gold and jewelry securely.",
        tech: ["SwiftUI", "KMP"],
        date: "May 2025",
        role: "Contract Developer",
        contribution: "Created a library of reusable UI components to ensure design consistency across the application. Optimized the product listing views.",
        links: {},
        color: "from-amber-400 to-yellow-600"
    },
    {
        title: "KGNow",
        desc: "Video News Platform.",
        fullDesc: "A media streaming app for Kompas Gramedia, delivering the latest video news and live broadcasts to millions of users.",
        tech: ["SwiftUI", "KMP", "Firebase"],
        date: "Feb 2025 - Apr 2025",
        role: "Feature Developer",
        contribution: "Implemented critical features including User Profile, Settings, and Live Streaming. Resolved complex UI bugs to improve app stability.",
        links: { appStore: "https://apps.apple.com/id/app/kgnow-nonton-sekarang/id6742543374" },
        color: "from-slate-600 to-slate-800"
    },
    {
        title: "IndonesianaTV",
        desc: "Cultural Streaming Service.",
        fullDesc: "A dedicated video on-demand platform for the Ministry of Culture, showcasing Indonesian cultural heritage series and documentaries.",
        tech: ["tvOS", "SwiftUI"],
        date: "Dec 2024 - Jan 2025",
        role: "UI/UX Engineer",
        contribution: "Focused on polishing the user interface and fixing critical visual bugs to ensure a premium viewing experience conformant with ministry standards.",
        links: { appStore: "https://apps.apple.com/id/app/indonesianatv/id6535689609" },
        color: "from-red-700 to-red-900"
    },
    {
        title: "ParroTalk v2",
        desc: "English AI Buddy v2.",
        fullDesc: "The second iteration of the AI speaking partner, introducing advanced features like topic selection and improved voice recognition.",
        tech: ["SwiftUI", "AVFoundation", "Speech-to-text", "Text-to-Speech"],
        date: "Nov 2024 - Dec 2024",
        role: "iOS Team Lead",
        contribution: "Managed the API service layer integration. Implemented the dashboard and topic picker features. Led the release process to the App Store.",
        links: { appStore: "https://apps.apple.com/id/app/parrotalk/id6670471194" },
        color: "from-teal-400 to-teal-600"
    },
    {
        title: "Vocabeez",
        desc: "Gamified Vocabulary Learning.",
        fullDesc: "An educational app designed to make learning English vocabulary engaging through context-based examples and gamification.",
        tech: ["SwiftUI", "SwiftData", "WidgetKit"],
        date: "Sep 2024 - Oct 2024",
        role: "iOS Team Lead",
        contribution: "Research user learning patterns. Managed the iOS development team. Implemented the Daily Streak logic and the interactive Quiz feature.",
        links: { testFlight: "https://apps.apple.com/id/app/parrotalk/id6670471194" },
        color: "from-violet-500 to-purple-600"
    },
    {
        title: "Kalkudam",
        desc: "Simple iPad Calculator.",
        fullDesc: "The initial version of the iPad calculator, focusing on simplicity and essential arithmetic functions for tablet users.",
        tech: ["iPadOS", "SwiftUI"],
        date: "Sep 2024",
        role: "Solo Developer",
        contribution: "Designed and developed the complete application from scratch. Successfully navigated the App Store review process for the first release.",
        links: { appStore: "https://apps.apple.com/id/app/kalkudam/id6670356435" },
        color: "from-orange-400 to-orange-600"
    },
    {
        title: "ParroTalk v1",
        desc: "English AI Buddy v1.",
        fullDesc: "The MVP version of the AI language tutor, establishing the core concept of conversing with a virtual parrot.",
        tech: ["SwiftUI", "AVFoundation", "Speech-to-text", "Text-to-Speech"],
        date: "Jul 2024 - Aug 2024",
        role: "iOS Team Lead",
        contribution: "Conducted initial user needs research. Implemented the Onboarding flow and the primary Speech-to-Text conversational loop.",
        links: { appStore: "https://apps.apple.com/id/app/parrotalk/id6670471194" },
        color: "from-teal-600 to-teal-800"
    }
];

const TECH_STACK = [
    { tool: "SwiftUI", role: "Primary UI", reason: "90% of projects. Default for all new apps due to development speed.", icon: <LayoutGrid size={16} /> },
    { tool: "UIKit", role: "Legacy Support", reason: "Used in MadaBank & Erafone for complex imperative requirements.", icon: <Smartphone size={16} /> },
    { tool: "Combine", role: "Reactive", reason: "Backbone of data binding before Observation framework.", icon: <Zap size={16} /> },
    { tool: "RxSwift", role: "Reactive (Legacy)", reason: "Legacy reactive programming used in older enterprise codebases (MadaBank).", icon: <Zap size={16} /> },
    { tool: "SwiftData", role: "Persistence", reason: "Modern replacement for CoreData. Used in Lunavo & Vocabeez.", icon: <Database size={16} /> },
    // Re-added CloudKit/CoreData if needed, but SwiftData is present.
    { tool: "Firebase", role: "BaaS", reason: "Auth, Remote Config, & Crashlytics standard.", icon: <Cloud size={16} /> },
    { tool: "Alamofire", role: "Networking", reason: "Robust networking library used in MadaBank.", icon: <Cloud size={16} /> },
    { tool: "Moya", role: "Network Abstraction", reason: "Type-safe networking layer used in MadaBank.", icon: <Layers size={16} /> },
    { tool: "KMP", role: "Multiplatform", reason: "Kotlin Multiplatform used in Gallery24 & KGNow for shared logic.", icon: <Code2 size={16} /> },
    { tool: "AVFoundation", role: "Media & TTS", reason: "Engine for Text-to-Speech (ParroTalk) and video (IndonesianaTV).", icon: <Mic size={16} /> },
    { tool: "Speech", role: "Voice (STT)", reason: "Native speech recognition for ParroTalk.", icon: <Mic size={16} /> },
    { tool: "Vision", role: "AI/ML (OCR)", reason: "OCR text extraction pipelines (Pix PDF).", icon: <Eye size={16} /> },
    { tool: "CoreML/LLM", role: "AI Inference", reason: "On-device AI integration for ParroTalk v3.", icon: <Cpu size={16} /> },
    { tool: "RevenueCat", role: "IAP", reason: "Subscription infrastructure for Pix PDF & Vincam.", icon: <CreditCard size={16} /> },
    { tool: "Kingfisher", role: "Image Caching", reason: "Async image loading for Vincam & Sketchly.", icon: <ImageIcon size={16} /> },
    { tool: "CocoaPods", role: "Deps (Legacy)", reason: "Dependency manager for MadaBank.", icon: <Box size={16} /> },
    { tool: "WidgetKit", role: "Widgets", reason: "Home screen widgets for Vocabeez.", icon: <LayoutGrid size={16} /> },
    { tool: "XCTest", role: "Testing", reason: "Standard framework for automated unit and UI tests.", icon: <CheckCircle2 size={16} /> },
];

export default function IosPage() {
    const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-8 font-sans selection:bg-blue-500/30">
            <div className="max-w-6xl mx-auto space-y-24">

                {/* Header / Nav */}
                <nav>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft size={20} />
                        Back to Dashboard
                    </Link>
                </nav>

                {/* 1. Hero Section */}
                <section className="space-y-8">
                    <div className="space-y-4 max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                            <Code2 size={12} />
                            iOS Product Engineer
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                            Scalable & High-Performance <br />
                            <span className="text-blue-500">iOS Engineering</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                            <span className="text-slate-200">Native-First. Zero-Crash Policy.</span> I build applications that are architected to be efficient, resilient, and user-centric.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                        {[
                            { icon: <Smartphone size={20} />, label: "Native SwiftUI Expert" },
                            { icon: <Layers size={20} />, label: "Clean Architecture" },
                            { icon: <GitMerge size={20} />, label: "CI/CD Automated" },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-medium whitespace-nowrap">
                                <span className="text-blue-400">{stat.icon}</span>
                                {stat.label}
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. Project Archive (All Projects) */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-slate-100">The App Chronicles</h2>
                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PROJECTS.map((project, i) => (
                            <Card
                                key={i}
                                className="group hover:-translate-y-1 bg-slate-900/40 border-slate-800 cursor-pointer overflow-hidden relative flex flex-col h-full"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className={`h-1 w-full bg-gradient-to-r ${project.color} opacity-70`} />
                                <div className="p-5 flex flex-col gap-4 h-full">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-slate-200 text-lg group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                            <p className="text-xs font-mono text-slate-500 mt-1">{project.date}</p>
                                        </div>
                                        {/* Icon for quick link availability */}
                                        <div className="flex gap-1">
                                            {project.links.github && <Github size={14} className="text-slate-600" />}
                                            {(project.links.appStore || project.links.testFlight) && <ExternalLink size={14} className="text-slate-600" />}
                                        </div>
                                    </div>

                                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                                        {project.desc}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-slate-800/50">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech.slice(0, 4).map(t => (
                                                <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-950 text-slate-500 border border-slate-800 font-mono">
                                                    {t}
                                                </span>
                                            ))}
                                            {project.tech.length > 4 && <span className="text-[10px] text-slate-600 self-center">+{project.tech.length - 4}</span>}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* 3. Tech Stack */}
                <section className="space-y-8 pb-10">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-slate-100">Core Stack</h2>
                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {TECH_STACK.map((item, i) => (
                            <Card key={i} className="p-4 bg-slate-900/50 border-slate-800 flex flex-col gap-2 hover:bg-slate-900 transition-colors">
                                <div className="flex items-center gap-2 font-bold text-slate-200">
                                    <span className="text-blue-400">{item.icon}</span>
                                    {item.tool}
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    {item.reason}
                                </p>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>

            {/* DETAIL MODAL */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative grid md:grid-cols-5 max-h-[90vh] md:max-h-[85vh] flex-col md:flex-row"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white z-20 transition-colors backdrop-blur-md"
                            >
                                <X size={20} />
                            </button>

                            <div className={`md:col-span-2 h-64 md:h-full bg-gradient-to-br ${selectedProject.color} relative flex items-center justify-center p-8`}>
                                <div className="absolute inset-0 bg-slate-950/20"></div>
                                {/* Placeholder for Screenshot */}
                                <div className="relative z-10 w-3/4 aspect-[9/19] bg-slate-900 rounded-2xl shadow-2xl border-4 border-slate-800 flex items-center justify-center">
                                    <Smartphone size={48} className="text-slate-700" />
                                </div>
                            </div>

                            {/* Right: Content Side (3 cols) */}
                            <div className="md:col-span-3 p-6 md:p-8 overflow-y-auto bg-slate-950">
                                <div className="space-y-8">
                                    {/* Header */}
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                                            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-wider border border-slate-700">
                                                {selectedProject.role}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
                                            <Calendar size={14} />
                                            {selectedProject.date}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                                            <FileText size={12} /> Overview
                                        </h4>
                                        <p className="text-slate-300 leading-relaxed text-sm">
                                            {selectedProject.fullDesc}
                                        </p>
                                    </div>

                                    {/* My Contribution */}
                                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                                        <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                                            <CheckCircle2 size={12} /> Key Contributions
                                        </h4>
                                        <p className="text-slate-300 leading-relaxed text-sm">
                                            {selectedProject.contribution}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                                            <Terminal size={12} /> Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map(t => (
                                                <span key={t} className="px-2.5 py-1 bg-slate-900 text-slate-300 text-xs rounded border border-slate-700 font-mono hover:border-slate-500 transition-colors cursor-default">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-800">
                                        {selectedProject.links.appStore && (
                                            <a
                                                href={selectedProject.links.appStore}
                                                target="_blank"
                                                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/20"
                                            >
                                                <ExternalLink size={16} /> App Store
                                            </a>
                                        )}
                                        {selectedProject.links.testFlight && (
                                            <a
                                                href={selectedProject.links.testFlight}
                                                target="_blank"
                                                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-sm font-bold rounded-xl transition-all"
                                            >
                                                <TestTube size={16} /> TestFlight
                                            </a>
                                        )}
                                        {selectedProject.links.github && (
                                            <a
                                                href={selectedProject.links.github}
                                                target="_blank"
                                                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-sm font-bold rounded-xl transition-all"
                                            >
                                                <Github size={16} /> Source Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
