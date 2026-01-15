"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Terminal, Server, Cloud, GitBranch, Shield } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function DevOpsPage() {
    const stacks = [
        { name: "Infrastructure as Code", icon: <Cloud size={20} />, items: ["Terraform", "AWS CDK", "Ansible"] },
        { name: "CI/CD", icon: <GitBranch size={20} />, items: ["GitHub Actions", "Jenkins", "ArgoCD"] },
        { name: "Containerization", icon: <Server size={20} />, items: ["Docker", "Kubernetes", "Helm"] },
    ];

    const studios = [
        {
            title: "Zero-Downtime Deployment Pipeline",
            role: "Lead DevOps",
            result: "99.99% Uptime",
            desc: "Architected a blue-green deployment strategy using Kubernetes and ArgoCD, reducing rollback time to <5 seconds.",
            tags: ["K8s", "AWS", "ArgoCD"],
        },
        {
            title: "Automated Compliance Scanning",
            role: "DevSecOps",
            result: "ISO 27001 Compliant",
            desc: "Integrated Trivy and SonarQube into the build pipeline to automatically block vulnerabilities before production.",
            tags: ["Security", "GitHub Actions", "Python"],
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12">
            <div className="max-w-6xl mx-auto space-y-16">
                {/* Header */}
                <header className="space-y-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Dashboard
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg shadow-emerald-500/20 text-white">
                            <Terminal size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white">DevOps & Cloud</h1>
                            <p className="text-emerald-400 font-mono mt-2">{'>>'} init_sequence(infrastructure)</p>
                        </div>
                    </div>
                </header>

                {/* Tech Stack Visual */}
                <div className="grid md:grid-cols-3 gap-6">
                    {stacks.map((stack, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                            <div className="flex items-center gap-3 mb-4 text-emerald-400">
                                {stack.icon}
                                <h3 className="font-semibold text-slate-100">{stack.name}</h3>
                            </div>
                            <ul className="space-y-2">
                                {stack.items.map(item => (
                                    <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Case Studies */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <Shield className="text-emerald-500" />
                        Engineering Case Studies
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {studios.map((study, i) => (
                            <Card key={i} className="border-t-4 border-t-emerald-500">
                                <div className="mb-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                                            CASE STUDY #{i + 1}
                                        </span>
                                        <span className="text-slate-400 text-sm font-semibold">{study.role}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-100">{study.title}</h3>
                                </div>

                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    {study.desc}
                                </p>

                                <div className="flex justify-between items-center border-t border-slate-800 pt-4">
                                    <div className="flex gap-2">
                                        {study.tags.map(tag => (
                                            <span key={tag} className="text-xs text-slate-500">#{tag}</span>
                                        ))}
                                    </div>
                                    <div className="text-emerald-400 font-bold text-sm">
                                        {study.result}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
