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
    WifiOff,
    GitMerge,
    BarChart3,
    Lock,
    Cpu
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

// --- Data ---

const HIGHLIGHT_PROJECTS = [
    {
        id: "erafone",
        title: "Erafone Mobile",
        badge: "Enterprise Scale",
        desc: "The official e-commerce ecosystem for Erajaya Group. Re-engineered structurally to support massive scale and security.",
        role: "Contract Mobile Developer",
        challenge: "Building a large-scale application that is testable, modular, and secure for millions of users.",
        solution: "Implemented strict MVVM + Clean Architecture with a Multi-Module approach to enforce separation of concerns.",
        tech: ["UIKit", "Combine", "Keychain Services", "Modular Arch"],
        color: "from-blue-600 to-sky-500",
        img: "https://placehold.co/600x400/0f172a/3b82f6?text=Erafone+Architecture"
    },
    {
        id: "sketchly",
        title: "Sketchly",
        badge: "Performance Optimized",
        desc: "A professional photo-to-sketch conversion tool optimized for older devices and low-memory environments.",
        role: "Lead Engineer",
        challenge: "Addressing critical CPU spikes and memory leaks during high-res image processing.",
        solution: "Migrated to Swift Concurrency (Async/Await) and implemented aggressive asset optimization strategies.",
        tech: ["SwiftUI", "Async/Await", "CoreImage", "WebP"],
        color: "from-rose-500 to-pink-500",
        img: "https://placehold.co/600x400/0f172a/ec4899?text=Sketchly+Benchmarks"
    }
];

const ARCHIVE_PROJECTS = [
    {
        title: "MadaBank",
        desc: "Secure banking capabilities demo.",
        tech: ["UIKit", "Cocoapods", "RxSwift", "Moya", "Alamofire", "SceneKit", "Multi Modular", "Multi Repo"],
        date: "Jan 2026 - Present",
        role: "Contributor",
        color: "from-emerald-500 to-green-600",
        fullDesc: "A banking application prototype focusing on secure transactions and rigorous data protection standards.",
        contribution: "Responsible for slicing UI components based on Figma design and implementing business logic for transaction flows.",
        links: { github: "https://github.com/darisadam", appStore: "https://apple.com" }
    },
    {
        title: "Lunavo",
        desc: "Journaling app for mental wellness.",
        tech: ["SwiftUI", "AVFoundation", "Speech", "SwiftData"],
        date: "Dec 2025 - Present",
        role: "Contributor",
        color: "from-indigo-500 to-purple-500",
        fullDesc: "An intelligent journaling companion leveraging Speech-to-Text for seamless entry capture.",
        contribution: "Responsible for slicing UI components based on Figma design and implementing business logic for audio recording features.",
        links: { github: "https://github.com/darisadam" }
    },
    {
        title: "Pix PDF",
        desc: "High-performance PDF scanner & editor.",
        tech: ["SwiftUI", "PDFKit", "Vision", "RevenueCat"],
        date: "Nov 2025 - Dec 2025",
        role: "Contributor",
        color: "from-red-500 to-orange-500",
        fullDesc: "Optical Character Recognition (OCR) scanner utilizing the Vision framework for text extraction.",
        contribution: "Responsible for slicing UI components based on Figma design and implementing business logic for the PDF rendering engine.",
        links: { github: "https://github.com/darisadam" }
    },
    {
        title: "Vincam",
        desc: "Retro camera filter application.",
        tech: ["SwiftUI", "Kingfisher", "SwiftData", "RevenueCat"],
        date: "Oct 2025 - Nov 2025",
        role: "Contributor",
        color: "from-yellow-500 to-amber-600",
        fullDesc: "Real-time camera filtering with performant image processing pipelines.",
        contribution: "Responsible for slicing UI components based on Figma design and implementing business logic for filter application.",
        links: { github: "https://github.com/darisadam" }
    },
    {
        title: "Sketchly",
        desc: "Sketch camera filter app.",
        tech: ["SwiftUI", "Kingfisher", "SwiftData", "RevenueCat"],
        date: "Sep 2025 - Oct 2025",
        role: "Contributor",
        color: "from-pink-500 to-rose-500",
        fullDesc: "Transforming photos into artistic sketches using GPU-accelerated filters.",
        contribution: "Responsible for slicing UI components based on Figma design and implementing business logic for real-time rendering.",
        links: { github: "https://github.com/darisadam" }
    },
    {
        title: "Erafone",
        desc: "Gadget E-commerce app.",
        tech: ["SwiftUI", "Clean Arch", "Keychain"],
        date: "Jun 2025",
        role: "Contributor",
        color: "from-blue-600 to-sky-600",
        fullDesc: "Massive scale e-commerce application for the Erajaya group.",
        contribution: "Responsible for slicing UI components based on Figma design and implementing business logic for the checkout flow.",
        links: { github: "https://github.com/darisadam" }
    },
    {
        title: "Gallery24",
        desc: "Jewelry E-commerce for Pegadaian.",
        tech: ["SwiftUI", "KMP"],
        date: "May 2025",
        role: "Contributor",
        color: "from-amber-400 to-yellow-600",
        fullDesc: "Cross-platform logic sharing using Kotlin Multiplatform for business rules.",
        contribution: "Responsible for slicing UI components based on Figma design and implementing business logic for product listing.",
        links: { github: "https://github.com/darisadam" }
    },
    {
        title: "KGNow",
        desc: "News app for Kompas Gramedia.",
        tech: ["SwiftUI", "KMP", "Firebase"],
        date: "Feb 2025 - Apr 2025",
        role: "Contributor",
        color: "from-slate-600 to-slate-800",
        fullDesc: "News aggregation platform serving millions of daily active users.",
        contribution: "Responsible for slicing UI components based on Figma design and implementing business logic for news feed caching.",
        links: { github: "https://github.com/darisadam" }
    },
    {
        title: "IndonesianaTV",
        desc: "Cultural streaming service.",
        tech: ["tvOS", "SwiftUI"],
        date: "Dec 2024 - Jan 2025",
        role: "Contributor",
        color: "from-red-700 to-red-900",
        fullDesc: "Dedicated tvOS application for streaming Indonesian cultural documentaries.",
        contribution: "Responsible for slicing UI components based on Figma design and implementing business logic for tvOS focus engine.",
        links: { github: "https://github.com/darisadam" }
    },
    {
        title: "ParroTalk v2",
        desc: "English AI Buddy v2.",
        tech: ["SwiftUI", "AVFoundation", "Speech-to-text", "Text-to-Speech"],
        date: "Nov 2024 - Dec 2024",
        role: "Contributor",
        color: "from-teal-400 to-teal-600",
        fullDesc: "Conversational AI partner for practicing English pronunciation.",
        contribution: "Responsible for slicing UI components based on Figma design and implementing business logic for audio playback.",
        links: { github: "https://github.com/darisadam" }
    },
    {
        title: "ParroTalk v1",
        desc: "English AI Buddy v1.",
        tech: ["SwiftUI", "AVFoundation", "Speech-to-text", "Text-to-Speech"],
        date: "Jul 2024 - Aug 2024",
        role: "Contributor",
        color: "from-teal-600 to-teal-800",
        fullDesc: "The initial prototype for the AI language learning assistant.",
        contribution: "Responsible for slicing UI components based on Figma design and implementing business logic for speech recognition.",
        links: { github: "https://github.com/darisadam" }
    },
    {
        title: "Vocabeez",
        desc: "Gamified vocabulary learning.",
        tech: ["SwiftUI", "SwiftData", "WidgetKit"],
        date: "Sep 2024 - Oct 2024",
        role: "Contributor",
        color: "from-violet-500 to-purple-600",
        fullDesc: "Making learning new words fun with widgets and spaced repetition.",
        contribution: "Responsible for slicing UI components based on Figma design and implementing business logic for widget timeline.",
        links: { github: "https://github.com/darisadam" }
    },
    {
        title: "Kalkudam",
        desc: "iPad Calculator.",
        tech: ["iPadOS", "SwiftUI"],
        date: "Sep 2024",
        role: "Contributor",
        color: "from-orange-400 to-orange-600",
        fullDesc: "Optimized calculator layout specifically designed for the large iPad canvas.",
        contribution: "Responsible for slicing UI components based on Figma design and implementing business logic for calculation engine.",
        links: { github: "https://github.com/darisadam" }
    },
    {
        title: "AdamStore",
        desc: "POS & Stock Management (R&D).",
        tech: ["SwiftUI", "SwiftData"],
        date: "Research Phase",
        role: "Contributor",
        color: "from-cyan-600 to-blue-700",
        fullDesc: "Research project for a Point of Sales system with complex inventory tracking.",
        contribution: "Responsible for slicing UI components based on Figma design and implementing business logic for database schema.",
        links: { github: "https://github.com/darisadam" }
    },
    {
        title: "ParroTalk v3",
        desc: "LLM-powered English Buddy (R&D).",
        tech: ["SwiftUI", "LLM", "Foundation", "SwiftData"],
        date: "Research Phase",
        role: "Contributor",
        color: "from-fuchsia-500 to-pink-600",
        fullDesc: "Exploring on-device LLMs for natural language understanding.",
        contribution: "Responsible for slicing UI components based on Figma design and implementing business logic for LLM inference integration.",
        links: { github: "https://github.com/darisadam" }
    }
];

const TECH_STACK = [
    { tool: "SwiftUI", role: "Primary UI", reason: "90% of projects. Default for all new apps due to development speed.", icon: <LayoutGrid size={16} /> },
    { tool: "UIKit", role: "Legacy Support", reason: "Used in MadaBank & Erafone for complex imperative requirements.", icon: <Smartphone size={16} /> },
    { tool: "Combine", role: "Reactive", reason: "Backbone of data binding before Observation framework.", icon: <Zap size={16} /> },
    { tool: "RxSwift", role: "Reactive", reason: "Legacy reactive programming used in older enterprise codebases (MadaBank).", icon: <Zap size={16} /> },
    { tool: "SwiftData", role: "Persistence", reason: "Modern replacement for CoreData. Used in Lunavo & Vocabeez.", icon: <Database size={16} /> },
    { tool: "Firebase", role: "BaaS", reason: "Auth, Remote Config, & Crashlytics standard.", icon: <Cloud size={16} /> },
    { tool: "Alamofire", role: "Networking", reason: "Robust networking library used in conjunction with Moya.", icon: <Cloud size={16} /> },
    { tool: "Moya", role: "Abstraction", reason: "Network abstraction layer for type-safe API calls.", icon: <Layers size={16} /> },
    { tool: "AVFoundation", role: "Media & TTS", reason: "Engine for Text-to-Speech synthesis and custom video players.", icon: <Mic size={16} /> },
    { tool: "Speech", role: "Voice (STT)", reason: "Native framework for Speech-to-Text recognition.", icon: <Mic size={16} /> },
    { tool: "Vision", role: "AI/ML (OCR)", reason: "OCR text extraction pipelines (Pix PDF).", icon: <Eye size={16} /> },
    { tool: "Swift Testing", role: "Unit Test", reason: "Modern testing framework for writing expressive tests.", icon: <CheckCircle2 size={16} /> },
    { tool: "XCTest", role: "UI Test", reason: "Standard framework for automated UI interactions.", icon: <CheckCircle2 size={16} /> },
    { tool: "RevenueCat", role: "IAP", reason: "Subscription infrastructure source of truth.", icon: <CreditCard size={16} /> },
    { tool: "Kingfisher", role: "Caching", reason: "Industry standard for async image loading.", icon: <ImageIcon size={16} /> },
    { tool: "SPM", role: "Deps (Modern)", reason: "Preferred dependency manager for packages.", icon: <Box size={16} /> },
    { tool: "CocoaPods", role: "Deps (Legacy)", reason: "Legacy manager required for some older libraries (MadaBank).", icon: <Box size={16} /> },
];

export default function IosPage() {
    const [selectedRepo, setSelectedRepo] = useState<typeof ARCHIVE_PROJECTS[0] | null>(null);

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
                            Lead Mobile Engineer
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                            Scalable & High-Performance <br />
                            <span className="text-blue-500">iOS Engineering</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                            <span className="text-slate-200">Native-First. Zero-Crash Policy.</span> My applications are architected to be efficient with resources (CPU/Memory) and resilient in production.
                        </p>
                    </div>

                    {/* Stats Bar */}
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

                {/* 2. Featured: Highlight Projects */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-slate-100">Featured Case Studies</h2>
                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    <div className="space-y-16">
                        {HIGHLIGHT_PROJECTS.map((project, i) => (
                            <div key={i} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                                {/* Visual Side */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group md:${i % 2 === 1 ? 'order-2' : ''}`}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 backdrop-blur text-xs font-bold text-white rounded border border-white/10">
                                        {project.badge}
                                    </div>
                                </motion.div>

                                {/* Content Side */}
                                <div className={`space-y-6 md:${i % 2 === 1 ? 'order-1' : ''}`}>
                                    <div className="space-y-2">
                                        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                                        <p className="text-blue-400 font-mono text-sm">{project.role}</p>
                                    </div>
                                    <p className="text-slate-400 leading-relaxed text-lg">{project.desc}</p>
                                    <div className="space-y-4 p-5 bg-slate-900/50 rounded-xl border border-slate-800">
                                        <div className="space-y-1">
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">The Challenge</span>
                                            <p className="text-sm text-slate-300">{project.challenge}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">The Solution</span>
                                            <p className="text-sm text-slate-300">{project.solution}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded border border-slate-700 font-mono">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Project Archive */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-slate-100">Other Explorations</h2>
                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {ARCHIVE_PROJECTS.map((project, i) => (
                            <Card
                                key={i}
                                className="group hover:-translate-y-1 bg-slate-900/40 border-slate-800 cursor-pointer overflow-hidden relative"
                                onClick={() => setSelectedRepo(project)}
                            >
                                <div className={`h-1 w-full bg-gradient-to-r ${project.color} opacity-50`} />
                                <div className="p-5 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                        <ExternalLink size={16} className="text-slate-600 group-hover:text-slate-400" />
                                    </div>
                                    <p className="text-xs font-mono text-slate-500">{project.date}</p>
                                    <p className="text-sm text-slate-500 line-clamp-2">{project.desc}</p>
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {project.tech.slice(0, 3).map(t => (
                                            <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && <span className="text-[10px] text-slate-600">+{project.tech.length - 3}</span>}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* 5. Expanded Tech Stack */}
                <section className="space-y-8 pb-10">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-slate-100">Core Stack & Rationale</h2>
                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {TECH_STACK.map((item, i) => (
                            <Card key={i} className="p-4 bg-slate-900/50 border-slate-800 flex flex-col gap-2 hover:bg-slate-900 transition-colors">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 font-bold text-slate-200">
                                        <span className="text-blue-400">{item.icon}</span>
                                        {item.tool}
                                    </div>
                                    <span className="text-xs px-2 py-0.5 bg-slate-800 rounded text-slate-400 border border-slate-700">{item.role}</span>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {item.reason}
                                </p>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>

            {/* SIDE-BY-SIDE DETAIL MODAL */}
            <AnimatePresence>
                {selectedRepo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedRepo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative grid md:grid-cols-5 h-[80vh] md:h-auto overflow-y-auto md:overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedRepo(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white z-20 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Left: Image Side (2 cols) */}
                            <div className={`md:col-span-2 h-64 md:h-full bg-gradient-to-br ${selectedRepo.color} relative flex items-center justify-center p-8`}>
                                <div className="absolute inset-0 bg-black/10"></div>
                                {/* Placeholder for Screenshot */}
                                <div className="relative z-10 w-3/4 aspect-[9/19] bg-slate-900 rounded-2xl shadow-2xl border-4 border-slate-800 flex items-center justify-center">
                                    <Smartphone size={48} className="text-slate-700" />
                                </div>
                            </div>

                            {/* Right: Content Side (3 cols) */}
                            <div className="md:col-span-3 p-8 overflow-y-auto max-h-[60vh] md:max-h-[80vh]">
                                <div className="space-y-6">
                                    {/* Header */}
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">{selectedRepo.title}</h3>
                                        <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
                                            <Calendar size={14} />
                                            {selectedRepo.date}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                                            <FileText size={12} /> Description
                                        </h4>
                                        <p className="text-slate-300 leading-relaxed text-sm">
                                            {selectedRepo.fullDesc}
                                        </p>
                                    </div>

                                    {/* My Contribution */}
                                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                                        <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                                            <CheckCircle2 size={12} /> My Contribution
                                        </h4>
                                        <p className="text-slate-300 leading-relaxed text-sm italic">
                                            &quot;{selectedRepo.contribution}&quot;
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                                            <Terminal size={12} /> Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedRepo.tech.map(t => (
                                                <span key={t} className="px-2.5 py-1 bg-slate-900 text-slate-300 text-xs rounded border border-slate-700 font-mono">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4 pt-4 border-t border-slate-800">
                                        {selectedRepo.links.github && (
                                            <a
                                                href={selectedRepo.links.github}
                                                target="_blank"
                                                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                                            >
                                                <Github size={16} /> Source Code
                                            </a>
                                        )}
                                        {selectedRepo.links.appStore && (
                                            <a
                                                href={selectedRepo.links.appStore}
                                                target="_blank"
                                                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                            >
                                                <ExternalLink size={16} /> App Store
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
