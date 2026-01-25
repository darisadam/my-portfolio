"use client";

import { Briefcase, GraduationCap, Users, Star, ArrowUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AboutSection() {
    const experiences = [
        {
            company: "Djavaweb",
            role: "iOS Developer",
            period: "Sep 2025 - Present",
        },
        {
            company: "Nusantara Beta Studio",
            role: "iOS Developer",
            period: "Nov 2024 - Jun 2025",
        },
        {
            company: "Apple Developer Academy @ Infinite Learning",
            role: "App Developer",
            period: "Feb 2024 - Dec 2024",
        }
    ];

    const education = [
        {
            school: "Apple Developer Academy",
            degree: "Tech Learner",
            period: "Dec 2024",
        },
        {
            school: "Universitas Pendidikan Indonesia",
            degree: "B.Ed. in Economics",
            period: "Jul 2025",
        }
    ];

    const leadership = [
        { role: "Chairman", org: "DPM KEMA FPEB" },
        { role: "Chairman", org: "HMPE UPI" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section id="about" className="max-w-6xl w-full mx-auto py-10 space-y-8">
            <div className="flex items-center gap-4 mb-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
                <h2 className="text-2xl font-bold text-slate-200">The Profile</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                {/* 1. The Narrative (Bio) - Large Box */}
                <Card className="col-span-1 md:col-span-2 md:row-span-2 p-8 bg-slate-900/50 border-slate-800 flex flex-col justify-between">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-yellow-400 mb-2">
                            <Star size={20} fill="currentColor" />
                            <span className="text-xs font-bold uppercase tracking-wider">The Story</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white leading-tight">
                            Efficiency-Obsessed <br />
                            <span className="text-slate-500">Engineer.</span>
                        </h3>
                        <div className="space-y-4 text-slate-400 leading-relaxed">
                            <p>
                                I view code through the lens of <span className="text-emerald-400">Economics</span>. Resources (CPU, Memory, Time) are scarce capital. My job is to allocate them strictly where they generate the most value for the user.
                            </p>
                            <p>
                                From building <b>offline-first iOS apps</b> to designing <b>cost-optimized serverless architectures</b>, I bridge the gap between robust engineering and business viability.
                            </p>
                        </div>
                    </div>
                </Card>

                {/* 2. Professional Experience - Wide Box */}
                <Card className="col-span-1 md:col-span-2 p-6 bg-slate-900/50 border-slate-800">
                    <div className="flex items-center gap-2 mb-6">
                        <Briefcase className="text-emerald-400" size={20} />
                        <h3 className="font-bold text-slate-200">Experience</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {experiences.map((exp, i) => (
                            <div key={i} className="space-y-1">
                                <h4 className="font-bold text-white text-sm">{exp.role}</h4>
                                <div className="text-emerald-400 text-xs font-semibold">{exp.company}</div>
                                <div className="text-slate-500 text-xs font-mono">{exp.period}</div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* 3. Education - Compact */}
                <Card className="col-span-1 p-6 bg-slate-900/50 border-slate-800">
                    <div className="flex items-center gap-2 mb-4">
                        <GraduationCap className="text-blue-400" size={20} />
                        <h3 className="font-bold text-slate-200">Education</h3>
                    </div>
                    <div className="space-y-4">
                        {education.map((edu, i) => (
                            <div key={i}>
                                <div className="text-white text-sm font-bold">{edu.degree}</div>
                                <div className="text-slate-500 text-xs">{edu.school}</div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* 4. Leadership - Compact */}
                <Card className="col-span-1 p-6 bg-slate-900/50 border-slate-800">
                    <div className="flex items-center gap-2 mb-4">
                        <Users className="text-indigo-400" size={20} />
                        <h3 className="font-bold text-slate-200">Leadership</h3>
                    </div>
                    <div className="space-y-4">
                        {leadership.map((item, i) => (
                            <div key={i}>
                                <div className="text-white text-sm font-bold">{item.role}</div>
                                <div className="text-slate-500 text-xs">{item.org}</div>
                            </div>
                        ))}
                    </div>
                </Card>

            </div>

            {/* Footer Button */}
            <div className="flex justify-center pt-8">
                <button
                    onClick={scrollToTop}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all group"
                >
                    <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    Back to Top
                </button>
            </div>
        </section>
    );
}
