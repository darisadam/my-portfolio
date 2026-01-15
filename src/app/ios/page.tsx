"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, ExternalLink, Layers, Github } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function IosPage() {
    const projects = [
        {
            title: "FinTrack Mobile",
            tags: ["SwiftUI", "CoreData", "Charts"],
            description: "A personal finance tracker with intricate charts and iCloud sync. Featured in 'New & Noteable'.",
            color: "from-blue-500 to-cyan-500",
        },
        {
            title: "HealthConnect",
            tags: ["HealthKit", "MVVM", "Combine"],
            description: "Integration with Apple Health to visualize daily activity metrics with custom widgets.",
            color: "from-indigo-500 to-purple-500",
        },
        {
            title: "TravelLog",
            tags: ["MapKit", "CoreLocation", "CloudKit"],
            description: "Social travel journal app allowing users to pin locations and share photo memories.",
            color: "from-sky-500 to-blue-600",
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <header className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                        >
                            <ArrowLeft size={20} />
                            Back to Dashboard
                        </Link>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg shadow-blue-500/20 text-white">
                                <Smartphone size={32} />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white">iOS Development</h1>
                        </div>
                        <p className="text-xl text-slate-400 max-w-2xl">
                            Building fluid, accessible, and performant mobile experiences for the Apple ecosystem.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <span className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm font-medium">
                            Swift
                        </span>
                        <span className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm font-medium">
                            SwiftUI
                        </span>
                        <span className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm font-medium">
                            UIKit
                        </span>
                    </div>
                </header>

                {/* Showcase Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <Card key={i} className="group flex flex-col h-full hover:border-blue-500/50 transition-colors">
                            <div className={`h-48 mb-6 rounded-xl bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center`}>
                                <Smartphone size={64} className="text-slate-200/50" />
                            </div>

                            <div className="flex-1 space-y-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                                            <Github size={18} />
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                                            <ExternalLink size={18} />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-slate-400 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
