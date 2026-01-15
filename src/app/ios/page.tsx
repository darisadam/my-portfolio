"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    Smartphone,
    ExternalLink,
    Github,
    X,
    Layers,
    Cpu,
    Wrench,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Search
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

// --- Types ---
type Project = {
    id: string;
    title: string;
    period: string;
    shortDesc: string;
    fullDesc: string;
    role: string;
    tech: string[];
    links: {
        appStore?: string;
        repo?: string;
    };
    color: string;
    iconUrl?: string;
    screenshots?: string[];
};

// --- Data ---
const SKILLS = {
    languages: ["Swift", "Objective-C", "C++"],
    frameworks: ["SwiftUI", "UIKit", "Combine", "XCTest", "CoreData", "CloudKit"],
    tools: ["Xcode", "Fastlane", "CocoaPods", "SPM", "TestFlight", "Instruments"],
    sdks: ["ARKit", "HealthKit", "MapKit", "CoreML", "Metal", "AVFoundation"]
};

// Helper for generating placeholders
const getIconPlaceholder = (title: string, color: string) =>
    `https://placehold.co/200x200/${color.split('-')[1]}/ffffff?text=${title.charAt(0)}`;

const getScreenshotPlaceholder = (text: string, id: number) =>
    `https://placehold.co/400x800/1e293b/94a3b8?text=${text}+${id}`;

const PROJECTS: Project[] = [
    {
        id: "lunavo",
        title: "Lunavo",
        period: "Dec 2025 - Jan 2026",
        shortDesc: "Next-gen lunar tracking and astrology dashboard.",
        fullDesc: "A premium lifestyle app combining precise lunar cycle tracking with personalized astrological insights. Features diverse home screen widgets and real-time push notifications for key celestial events.",
        role: "Lead iOS Engineer",
        tech: ["SwiftUI", "WidgetKit", "CoreLocation", "UserNotifications"],
        links: { appStore: "#" },
        color: "from-indigo-500 to-purple-500",
        iconUrl: getIconPlaceholder("Lunavo", "from-indigo-500"),
        screenshots: [1, 2, 3].map(i => getScreenshotPlaceholder("Lunavo", i))
    },
    {
        id: "pixpdf",
        title: "PixPDF",
        period: "Nov 2025 - Dec 2025",
        shortDesc: "High-performance PDF scanner and editor.",
        fullDesc: "Advanced document scanning utility leveraging Vision framework for edge detection and perspective correction. Includes PDF annotation and secure local storage.",
        role: "Sole Developer",
        tech: ["UIKit", "Vision", "PDFKit", "CoreImage"],
        links: { repo: "#" },
        color: "from-red-500 to-orange-500",
        iconUrl: getIconPlaceholder("PixPDF", "from-red-500"),
        screenshots: [1, 2, 3].map(i => getScreenshotPlaceholder("PixPDF", i))
    },
    {
        id: "vincam",
        title: "Vincam",
        period: "Oct 2025 - Nov 2025",
        shortDesc: "Retro camera app with live filters.",
        fullDesc: "Photography app simulating vintage film aesthetics. Implemented complex Metal shaders for real-time viewfinder processing and non-destructive editing.",
        role: "iOS Developer",
        tech: ["SwiftUI", "Metal", "AVFoundation", "CoreImage"],
        links: { appStore: "#" },
        color: "from-yellow-500 to-amber-600",
        iconUrl: getIconPlaceholder("Vincam", "from-yellow-500"),
        screenshots: [1, 2, 3].map(i => getScreenshotPlaceholder("Vincam", i))
    },
    {
        id: "sketchly",
        title: "Sketchly",
        period: "Sep 2025 - Oct 2025",
        shortDesc: "Vector illustration tool for iPad.",
        fullDesc: "Professional grade vector drawing tool optimized for Apple Pencil. Supports layers, SVG export, and iCloud synchronization.",
        role: "Developer",
        tech: ["Swift", "PencilKit", "CoreGraphics", "CloudKit"],
        links: { appStore: "#" },
        color: "from-pink-500 to-rose-500",
        iconUrl: getIconPlaceholder("Sketchly", "from-pink-500"),
        screenshots: [1, 2, 3].map(i => getScreenshotPlaceholder("Sketchly", i))
    },
    {
        id: "gallery24",
        title: "Gallery24",
        period: "May 2025",
        shortDesc: "Curated digital art exhibition viewer.",
        fullDesc: "Interactive gallery experience for digital art collections. Optimized image caching and transitioning for infinite scroll performance.",
        role: "UI Engineer",
        tech: ["SwiftUI", "Nuke", "Combine"],
        links: { repo: "#" },
        color: "from-cyan-500 to-blue-500",
        iconUrl: getIconPlaceholder("Gallery24", "from-cyan-500"),
        screenshots: [1, 2, 3].map(i => getScreenshotPlaceholder("Gallery24", i))
    },
    {
        id: "erafone",
        title: "Erafone Mobile",
        period: "June 2025",
        shortDesc: "E-commerce client for electronics retailer.",
        fullDesc: "Official mobile app for Erafone. Handled complex checkout flows, payment gateway integration, and real-time order tracking.",
        role: "Contract mobile Developer",
        tech: ["UIKit", "Programmatic UI", "Moya", "Stripe SDK"],
        links: { appStore: "#" },
        color: "from-sky-500 to-blue-600",
        iconUrl: getIconPlaceholder("Erafone", "from-sky-500"),
        screenshots: [1, 2, 3].map(i => getScreenshotPlaceholder("Erafone", i))
    },
    {
        id: "kgnow",
        title: "KGNow",
        period: "Feb 2025 - Apr 2025",
        shortDesc: "Media streaming and news aggregation platform.",
        fullDesc: "Large scale media app delivering curated news and video content. Focused on HLS video player implementation and offline content caching.",
        role: "iOS Engineer",
        tech: ["Swift", "AVKit", "Realm", "Firebase"],
        links: { appStore: "#" },
        color: "from-blue-600 to-indigo-600",
        iconUrl: getIconPlaceholder("KGNow", "from-blue-600"),
        screenshots: [1, 2, 3].map(i => getScreenshotPlaceholder("KGNow", i))
    },
    {
        id: "indonesiana",
        title: "Indonesiana tvOS",
        period: "Dec 2024 - Jan 2025",
        shortDesc: "Cultural streaming platform for Apple TV.",
        fullDesc: "Native tvOS application for streaming Indonesian cultural content. Designed custom focus-engine navigation and Top Shelf integration.",
        role: "tvOS Specialist",
        tech: ["tvOS", "TVML", "AVFoundation"],
        links: { appStore: "#" },
        color: "from-red-600 to-red-800",
        iconUrl: getIconPlaceholder("Indonesiana", "from-red-600"),
        screenshots: [1, 2, 3].map(i => getScreenshotPlaceholder("Indonesiana", i))
    },
    {
        id: "parrotalk-v2",
        title: "ParroTalk v2",
        period: "Nov 2024 - Dec 2024",
        shortDesc: "Real-time AI translation messenger.",
        fullDesc: "Major rewrite of the popular translation chat app. Introduced on-device machine learning for offline translation and improved WebSocket stability.",
        role: "Lead Engineer",
        tech: ["SwiftUI", "CoreML", "NaturalLanguage", "WebSocket"],
        links: { appStore: "#" },
        color: "from-emerald-500 to-green-600",
        iconUrl: getIconPlaceholder("ParroTalk", "from-emerald-500"),
        screenshots: [1, 2, 3].map(i => getScreenshotPlaceholder("ParroTalkv2", i))
    },
    {
        id: "parrotalk-v1",
        title: "ParroTalk v1",
        period: "Jul 2024 - Aug 2024",
        shortDesc: "MVP of translation chat app.",
        fullDesc: "Initial release of ParroTalk. Established the core chat infrastructure and API integration with third-party translation services.",
        role: "Co-Founder / Dev",
        tech: ["UIKit", "Firebase Firestore", "Alamofire"],
        links: { repo: "#" },
        color: "from-emerald-400 to-teal-500",
        iconUrl: getIconPlaceholder("ParroTalk", "from-emerald-400"),
        screenshots: [1, 2, 3].map(i => getScreenshotPlaceholder("ParroTalkv1", i))
    },
    {
        id: "vocabeez",
        title: "Vocabeez",
        period: "Sep 2024 - Oct 2024",
        shortDesc: "Gamified vocabulary learning for kids.",
        fullDesc: "Educational app featuring interactive quizzes and spaced repetition algorithms. Custom animations and sound effects for engagement.",
        role: "Developer",
        tech: ["SwiftUI", "SpriteKit", "AVAudioEngine"],
        links: { appStore: "#" },
        color: "from-orange-400 to-yellow-500",
        iconUrl: getIconPlaceholder("Vocabeez", "from-orange-400"),
        screenshots: [1, 2, 3].map(i => getScreenshotPlaceholder("Vocabeez", i))
    },
    {
        id: "kalkudam",
        title: "Kalkudam",
        period: "Sep 2024",
        shortDesc: "Construction material calculator utility.",
        fullDesc: "Utility tool for civil engineers to calculate concrete and steel requirements on site. Offline-first architecture.",
        role: "Sole Developer",
        tech: ["SwiftUI", "CoreData", "Combine"],
        links: { repo: "#" },
        color: "from-slate-500 to-slate-700",
        iconUrl: getIconPlaceholder("Kalkudam", "from-slate-500"),
        screenshots: [1, 2, 3].map(i => getScreenshotPlaceholder("Kalkudam", i))
    }
];

export default function IosPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProject?.screenshots) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProject.screenshots!.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProject?.screenshots) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.screenshots!.length - 1 : prev - 1
            );
        }
    };

    // Reset carousel when project changes
    const openProject = (project: Project) => {
        setCurrentImageIndex(0);
        setSelectedProject(project);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 pb-24 font-sans">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Header */}
                <header className="space-y-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Dashboard
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg shadow-blue-500/20 text-white">
                                <Smartphone size={40} />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">iOS Engineering</h1>
                                <p className="text-blue-400 font-medium mt-1">Crafting Premium Apple Experiences</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Skills Dashboard */}
                <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                    <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                        <Layers size={20} className="text-blue-400" />
                        Technical Arsenal
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                <Cpu size={14} /> Languages
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.languages.map(s => (
                                    <span key={s} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 text-sm border border-slate-700 hover:border-blue-500/50 transition-colors cursor-default">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                <Smartphone size={14} /> Frameworks
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.frameworks.map(s => (
                                    <span key={s} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 text-sm border border-slate-700 hover:border-blue-500/50 transition-colors cursor-default">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                <Wrench size={14} /> Tools
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.tools.map(s => (
                                    <span key={s} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 text-sm border border-slate-700 hover:border-blue-500/50 transition-colors cursor-default">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                <Layers size={14} /> SDKs
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.sdks.map(s => (
                                    <span key={s} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 text-sm border border-slate-700 hover:border-blue-500/50 transition-colors cursor-default">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-white">Selected Works</h2>
                        <span className="text-slate-500 text-sm font-medium">{PROJECTS.length} Projects Shipped</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {PROJECTS.map((project) => (
                            <Card
                                key={project.id}
                                onClick={() => openProject(project)}
                                className="group cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 border-slate-800 bg-slate-900/50"
                            >
                                {/* Header Color Band */}
                                <div className={`h-3 w-full bg-gradient-to-r ${project.color}`} />

                                <div className="p-6 space-y-4">
                                    <div className="flex gap-4">
                                        {project.iconUrl && (
                                            <img src={project.iconUrl} alt={project.title} className="w-12 h-12 rounded-xl object-cover shadow-lg" />
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors truncate">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs text-slate-500 font-mono">{project.period}</p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed h-10">
                                        {project.shortDesc}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {project.tech.slice(0, 3).map(t => (
                                            <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-400">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="text-[10px] px-2 py-1 text-slate-500">+{project.tech.length - 3}</span>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Detail Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-2xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
                            >
                                {/* Modal Header */}
                                <div className={`flex-shrink-0 h-32 bg-gradient-to-r ${selectedProject.color} flex items-end p-8 relative`}>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors z-20"
                                    >
                                        <X size={20} />
                                    </button>

                                    <div className="relative z-10 flex items-center gap-6">
                                        {selectedProject.iconUrl && (
                                            <img
                                                src={selectedProject.iconUrl}
                                                alt={selectedProject.title}
                                                className="w-20 h-20 rounded-2xl shadow-2xl border-4 border-white/10 bg-slate-900"
                                            />
                                        )}
                                        <div>
                                            <h2 className="text-4xl font-bold text-white mb-1">{selectedProject.title}</h2>
                                            <p className="text-white/80 font-medium">{selectedProject.role}</p>
                                        </div>
                                    </div>
                                    {/* Decorative Circle */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                </div>

                                <div className="flex-1 overflow-y-auto p-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Left Column: Carousel & Meta */}
                                        <div className="space-y-6">
                                            {/* Screenshots Carousel */}
                                            {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                                                <div className="relative aspect-[1/2] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 group">
                                                    <motion.img
                                                        key={currentImageIndex}
                                                        src={selectedProject.screenshots[currentImageIndex]}
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="w-full h-full object-cover"
                                                        alt="App Screenshot"
                                                    />

                                                    {selectedProject.screenshots.length > 1 && (
                                                        <>
                                                            <button
                                                                onClick={prevImage}
                                                                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                                                            >
                                                                <ChevronLeft size={20} />
                                                            </button>
                                                            <button
                                                                onClick={nextImage}
                                                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                                                            >
                                                                <ChevronRight size={20} />
                                                            </button>

                                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                                {selectedProject.screenshots.map((_, idx) => (
                                                                    <div
                                                                        key={idx}
                                                                        className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Column: Details */}
                                        <div className="space-y-8">
                                            <div className="flex flex-wrap gap-4 text-sm text-slate-400 border-b border-slate-800 pb-6">
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={16} className="text-slate-500" />
                                                    {selectedProject.period}
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">About Project</h3>
                                                <p className="text-slate-400 leading-relaxed text-lg">
                                                    {selectedProject.fullDesc}
                                                </p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Key Technologies</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedProject.tech.map(t => (
                                                        <span key={t} className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-sm">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4 pt-4 border-t border-slate-800">
                                                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Links</h3>
                                                <div className="space-y-3">
                                                    {selectedProject.links.appStore && (
                                                        <a href={selectedProject.links.appStore} className="flex items-center gap-3 p-3 rounded-xl bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all font-medium border border-blue-600/20">
                                                            <Smartphone size={18} />
                                                            View on App Store
                                                            <ExternalLink size={14} className="ml-auto opacity-50" />
                                                        </a>
                                                    )}
                                                    {selectedProject.links.repo && (
                                                        <a href={selectedProject.links.repo} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all font-medium border border-slate-700">
                                                            <Github size={18} />
                                                            View Repository
                                                            <ExternalLink size={14} className="ml-auto opacity-50" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
