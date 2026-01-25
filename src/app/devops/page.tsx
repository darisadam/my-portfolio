"use client";


import {
    ArrowLeft,
    Cloud,
    Server,
    Database,
    Zap,
    GitBranch,
    Shield,
    Terminal,
    ArrowRight,
    Lock,
    Cpu,
    TrendingDown,
    Globe,
    CheckCircle2,
    ExternalLink
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const BADGES = [
    {
        title: "DevOps Workflows",
        icon: <GitBranch className="text-emerald-400" size={24} />,
        url: "https://www.credly.com/badges/78f106b2-2da4-4c22-af02-e2b35d2fe94a",
        desc: "CI/CD Implementation"
    },
    {
        title: "Cost Optimization",
        icon: <TrendingDown className="text-blue-400" size={24} />,
        url: "https://www.credly.com/badges/16629505-c7c7-437c-8a3d-1490d59537eb",
        desc: "GKE & Cloud Run FinOps"
    },
    {
        title: "Terraform IaC",
        icon: <Terminal className="text-purple-400" size={24} />,
        url: "https://www.credly.com/badges/9dedb5e4-0d6c-4202-8c82-8f5834442530",
        desc: "Infrastructure as Code"
    },
    {
        title: "Cloud Network Security",
        icon: <Shield className="text-red-400" size={24} />,
        url: "https://www.credly.com/earner/earned/badge/ffe45b9f-6734-49e3-af87-fbebade69954",
        desc: "VPC & Firewall Rules"
    },
    {
        title: "Cloud Operations",
        icon: <Globe className="text-amber-400" size={24} />,
        url: "https://www.credly.com/badges/0f495d16-3170-4095-a4ba-99ab6235482b",
        desc: "Monitoring & Logging"
    }
];

const CERTS = [
    { title: "Google Cloud Associate Engineer", provider: "Google Cloud", status: "In Progress" },
    { title: "AWS Solutions Architect Assoc", provider: "AWS", status: "Planned" },
    { title: "Professional DevOps Engineer", provider: "Google Cloud", status: "Planned" }
];

export default function DevOpsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-8 font-sans selection:bg-emerald-500/30">
            <div className="max-w-6xl mx-auto space-y-24">

                {/* Header */}
                <nav>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft size={20} />
                        Back to Dashboard
                    </Link>
                </nav>

                {/* 1. Hero: Cloud Philosophy */}
                <section className="space-y-8">
                    <div className="space-y-4 max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                            <Cloud size={12} />
                            Senior Cloud Architect
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                            Cost-Aware & Scalable <br />
                            <span className="text-emerald-500">Cloud Infrastructure</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                            <span className="text-slate-200">The Bridge between Code & Cloud.</span> I design systems that scale automatically with traffic but remain cost-efficient during downtime.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-medium">
                            <Server className="text-emerald-400" size={20} />
                            Scalable Systems
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-medium">
                            <TrendingDown className="text-blue-400" size={20} />
                            FinOps Mindset
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-medium">
                            <Terminal className="text-purple-400" size={20} />
                            Terraform Expert
                        </div>
                    </div>
                </section>

                {/* 2. Architecture Deep Dive: Image Processing Platform */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-slate-100">Architecture Deep Dive</h2>
                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    <Card className="bg-slate-900/50 border-slate-800 p-8 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Cloud size={200} />
                        </div>

                        <div className="relative z-10 space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white">Event-Driven Image Processing Platform</h3>
                                <p className="text-slate-400 max-w-2xl">
                                    A decoupled architecture designed for high-concurrency uploads. Uses Pub/Sub to buffer traffic spikes, ensuring the processing layer (Cloud Functions) never gets overwhelmed.
                                </p>
                            </div>

                            {/* Visual Flowchart */}
                            <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-sm py-8 overflow-x-auto">
                                <div className="flex flex-col items-center gap-3 shrink-0">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 text-slate-400">
                                        <ArrowRight size={24} />
                                    </div>
                                    <span className="font-mono text-slate-500">Ingest</span>
                                </div>

                                <ArrowRight className="text-slate-600 hidden md:block" />
                                <div className="md:hidden text-slate-600">↓</div>

                                <div className="flex flex-col items-center gap-3 shrink-0">
                                    <div className="w-20 h-20 rounded-2xl bg-blue-900/20 flex items-center justify-center border border-blue-500/30 text-blue-400 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
                                        <Database size={32} />
                                    </div>
                                    <span className="font-bold text-blue-400">Cloud Bucket</span>
                                </div>

                                <div className="h-0.5 w-12 bg-slate-700 hidden md:block relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 bg-slate-950 px-1">event</div>
                                </div>
                                <div className="md:hidden text-slate-600">↓</div>

                                <div className="flex flex-col items-center gap-3 shrink-0">
                                    <div className="w-20 h-20 rounded-2xl bg-purple-900/20 flex items-center justify-center border border-purple-500/30 text-purple-400 shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)]">
                                        <Zap size={32} />
                                    </div>
                                    <span className="font-bold text-purple-400">Pub/Sub</span>
                                </div>

                                <ArrowRight className="text-slate-600 hidden md:block" />
                                <div className="md:hidden text-slate-600">↓</div>

                                <div className="flex flex-col items-center gap-3 shrink-0">
                                    <div className="w-20 h-20 rounded-2xl bg-emerald-900/20 flex items-center justify-center border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]">
                                        <Cpu size={32} />
                                    </div>
                                    <span className="font-bold text-emerald-400">Cloud Run</span>
                                </div>

                                <ArrowRight className="text-slate-600 hidden md:block" />
                                <div className="md:hidden text-slate-600">↓</div>

                                <div className="flex flex-col items-center gap-3 shrink-0">
                                    <div className="w-20 h-20 rounded-2xl bg-amber-900/20 flex items-center justify-center border border-amber-500/30 text-amber-400 shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)]">
                                        <Globe size={32} />
                                    </div>
                                    <span className="font-bold text-amber-400">Cloud CDN</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* 3. Mobile DevOps Pipeline */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-slate-100">Mobile DevOps Pipeline</h2>
                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold text-white">
                                    Reducing Deployment Time by <span className="text-emerald-400">66%</span>
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Eliminated the 45-minute manual release process defined by human error.
                                    By implementing an automated Fastlane pipeline managed via GitHub Actions, we achieved reliable, signed builds in under 15 minutes.
                                </p>
                            </div>

                            <ul className="space-y-3 pt-2">
                                <li className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="text-emerald-500" size={18} />
                                    <span>Automated Unit Testing & SwiftLint Gatekeeping</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="text-emerald-500" size={18} />
                                    <span>Managed Certificates & Provisioning Profiles</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="text-emerald-500" size={18} />
                                    <span>Zero-Touch TestFlight Uploads</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative">
                            {/* Metric Card */}
                            <div className="absolute -top-4 -right-4 bg-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-lg shadow-lg rotate-3">
                                45m ➔ 15m
                            </div>
                            <div className="font-mono text-sm space-y-4 text-slate-400">
                                <div className="flex items-center gap-2">
                                    <GitBranch size={16} />
                                    <span className="text-purple-400">PR Merged (main)</span>
                                </div>
                                <div className="pl-2 border-l border-slate-700 ml-2 space-y-4 py-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                                        <span>Running Tests (xcodebuild test)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                                        <span>Building Archive (fastlane gym)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-emerald-400">
                                        <CheckCircle2 size={14} />
                                        <span>Uploaded to TestFlight</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Infrastructure as Code */}
                <section className="p-8 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 text-center space-y-6">
                    <div className="mx-auto w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center border border-indigo-500/30 text-indigo-400">
                        <Terminal size={32} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Reproducible Infrastructure with Terraform</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        I don&apos;t do &quot;ClickOps&quot;. Every piece of infrastructure—from VPC networks to Database instances—is defined as code. This ensures consistency across staging and production environments and enables rapid disaster recovery.
                    </p>
                    <div className="flex justify-center gap-4">
                        <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm">Modules</span>
                        <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm">State Locking</span>
                        <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm">Multi-Cloud</span>
                    </div>
                </section>

                {/* 5. Verified Expertise (Badge Vault) */}
                <section className="space-y-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <h2 className="text-2xl font-bold text-slate-100">Verified Skills</h2>
                            <div className="h-px w-12 bg-slate-800"></div>
                        </div>
                        <a href="https://www.credly.com/users/adam-daris-ryadhi/badges" target="_blank" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">
                            See all badges <ExternalLink size={12} />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {BADGES.map((badge, i) => (
                            <a
                                key={i}
                                href={badge.url}
                                target="_blank"
                                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:-translate-y-1 transition-all group text-center space-y-3"
                            >
                                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-slate-950 rounded-lg group-hover:scale-110 transition-transform">
                                    {badge.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-200 text-sm line-clamp-1">{badge.title}</h4>
                                    <p className="text-xs text-slate-500 mt-1">{badge.desc}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Certifications (Pending) */}
                    <div className="grid md:grid-cols-3 gap-6 pt-6">
                        {CERTS.map((cert, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/20 opacity-60">
                                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-600">
                                    <Lock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-300 text-sm">{cert.title}</h4>
                                    <div className="flex items-center justify-between mt-1">
                                        <span className="text-xs text-slate-500">{cert.provider}</span>
                                        <span className="text-[10px] uppercase tracking-wider font-bold bg-slate-800 px-2 py-0.5 rounded text-slate-500">{cert.status}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. FinOps Case Study */}
                <section className="p-8 rounded-2xl border border-slate-800 bg-slate-900/30 space-y-4">
                    <h3 className="text-sm font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-2">
                        <TrendingDown size={14} /> Architectural Decision Making
                    </h3>
                    <h2 className="text-2xl font-bold text-white">Why Cloud Run over Compute Engine?</h2>
                    <p className="text-slate-400 leading-relaxed max-w-4xl">
                        For the Image Processing Platform, traffic patterns were highly spiky (users uploading in bursts). Provisioning a fixed <b>Compute Engine</b> instance meant paying for idle CPU time 20 hours a day.
                        By switching to <b>Cloud Run</b>, we leveraged the &quot;Scale to Zero&quot; capability. We only pay when code is legally executing. This architectural shift resulted in a <b>40% cost reduction</b> compared to the initial VM-based prototype, demonstrating that good engineering is also good economics.
                    </p>
                </section>

            </div>
        </div>
    );
}
