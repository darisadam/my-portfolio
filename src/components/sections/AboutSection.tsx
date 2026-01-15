"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AboutSection() {
    const experiences = [
        {
            company: "Djavaweb",
            role: "Software Engineer", // Assumed role based on context, user didn't specify exact title for this one but implied dev work
            period: "Sep 2025 - Present",
            description: "Contributing to web development projects and delivering scalable solutions."
        },
        {
            company: "Nusantara Beta Studio",
            role: "Mobile Developer", // Assumed/common for NBS
            period: "Nov 2024 - Jun 2025",
            description: "Developed and maintained iOS applications."
        }
    ];

    const education = [
        {
            school: "Universitas Pendidikan Indonesia",
            degree: "B.Ed. in Economics",
            period: "Sep 2020 - Jul 2025",
            details: "GPA: 3.71/4.00. Demonstrated strong analytical skills and leadership through student organizations."
        },
        {
            school: "Apple Developer Academy @ Infinite Learning",
            degree: "iOS Development Cohort",
            period: "Mar 2024 - Dec 2024",
            details: "Intensive 10-month program. Developed 10+ iOS apps using SwiftUI and UIKit. Collaborated in cross-functional teams."
        }
    ];

    const leadership = [
        {
            org: "DPM KEMA FPEB UPI",
            role: "Chairman",
            period: "Aug 2023 - May 2024"
        },
        {
            org: "HMPE UPI",
            role: "Chairman",
            period: "Jan 2022 - Jan 2023"
        },
        {
            org: "KOPMA Bumi Siliwangi UPI",
            role: "Secretary",
            period: "Mar 2022 - Feb 2023"
        }
    ];

    return (
        <section className="max-w-4xl w-full mx-auto space-y-12">
            {/* Bio */}
            <div className="space-y-4 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-3">
                    <Star className="text-yellow-400" />
                    About Me
                </h2>
                <p className="text-slate-400 leading-relaxed text-lg">
                    I am a versatile software engineer with a unique background in <span className="text-slate-200">Economics</span> and <span className="text-slate-200">iOS Development</span>.
                    After graduating from the <span className="text-blue-400">Apple Developer Academy</span> and building over 10 apps,
                    I expanded my expertise into DevOps and Cloud Infrastructure.
                    Currently, I am focused on bridging the gap between stable infrastructure and interactive media, with a future ambition in <span className="text-purple-400">Game Development</span>.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Experience Column */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-200 flex items-center gap-2">
                        <Briefcase className="text-emerald-400" size={20} />
                        Professional Experience
                    </h3>
                    <div className="space-y-4">
                        {experiences.map((exp, i) => (
                            <Card key={i} className="p-5 border-l-4 border-l-emerald-500 hover:border-l-emerald-400">
                                <h4 className="font-bold text-slate-100">{exp.role}</h4>
                                <p className="text-emerald-400 text-sm mb-2">{exp.company} • {exp.period}</p>
                                <p className="text-slate-400 text-sm">{exp.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-200 flex items-center gap-2">
                        <GraduationCap className="text-blue-400" size={20} />
                        Education
                    </h3>
                    <div className="space-y-4">
                        {education.map((edu, i) => (
                            <Card key={i} className="p-5 border-l-4 border-l-blue-500 hover:border-l-blue-400">
                                <h4 className="font-bold text-slate-100">{edu.school}</h4>
                                <p className="text-blue-400 text-sm mb-2">{edu.degree}</p>
                                <p className="text-slate-500 text-xs mb-2 font-mono">{edu.period}</p>
                                <p className="text-slate-400 text-sm">{edu.details}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Leadership Section */}
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-200 flex items-center gap-2">
                    <Users className="text-indigo-400" size={20} />
                    Leadership & Organization
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                    {leadership.map((item, i) => (
                        <div key={i} className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                            <h4 className="font-bold text-slate-200 text-sm mb-1">{item.role}</h4>
                            <p className="text-indigo-400 text-xs font-semibold mb-1">{item.org}</p>
                            <p className="text-slate-500 text-xs">{item.period}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
