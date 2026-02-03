import type { Metadata } from "next";
import {
    Cloud,
    ArrowLeft,
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
    ExternalLink,
    Box,
    Clock,
    RefreshCw,
    ShieldAlert,
    Search,
    HardDrive,
    Lightbulb,
    Github
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "DevOps Portfolio | Cloud Architect & SRE",
    description: "Showcasing enterprise-grade DevOps implementations: Cost Optimization, Kubernetes Autoscaling, Mobile CI/CD pipelines, and FinOps strategies.",
    keywords: ["DevOps", "SRE", "Cloud Architect", "AWS", "Kubernetes", "Terraform", "GitOps", "FinOps", "iOS CI/CD"]
};

import Image from "next/image";
import { Card } from "@/components/ui/card";

const PROJECTS = [
    {
        title: "Cloud-Native QR Code Platform",
        subtitle: "DevSecOps Implementation",
        tags: ["AWS EKS", "LocalStack", "Terraform", "ArgoCD", "Prometheus", "Trivy"],
        challenge: "Developing cloud-native applications often incurs high costs due to cloud dependencies, and manual deployments to Kubernetes often lead to configuration drift.",
        solution: "I architected a \"Local-First\" development environment and a GitOps-based delivery pipeline to ensure security, consistency, and zero-cost testing.",
        implementations: [
            { title: "Zero-Cost Infrastructure Testing", desc: "Engineered a local AWS environment using LocalStack and Docker Compose, allowing the team to validate Terraform scripts without touching real AWS credits." },
            { title: "GitOps Delivery Model", desc: "Implemented ArgoCD to synchronize the Kubernetes cluster state with the Git repository, enabling automated self-healing and separating CI from CD." },
            { title: "Security First", desc: "Replaced static AWS keys with IRSA (IAM Roles for Service Accounts) and integrated Trivy to scan container images." }
        ],
        impact: [
            "Reduced development infrastructure costs by 100% during the testing phase.",
            "Achieved zero configuration drift between Staging and Production."
        ],
        image: "/images/devops/devops_fullstack_qrcode.webp",
        repo: "https://github.com/darisadam/devops-qr-code",
        highlight: true
    },
    {
        title: "Madabank - High-Availability Banking",
        subtitle: "Infrastructure Migration",
        tags: ["VPS", "Docker Compose", "Nginx", "Go", "Prometheus", "Grafana", "Loki"],
        challenge: "The initial deployment on AWS ECS was incurring high monthly costs prohibitive for the startup phase, and the team lacked visibility into application-level errors.",
        solution: "I led the migration to a high-performance VPS architecture and built a comprehensive observability suite to monitor not just server health, but business logic.",
        implementations: [
            { title: "Cost-Efficient Migration", desc: "Containerized the Go microservices using Docker Compose and orchestrated them on a VPS with Nginx as a reverse proxy, slashing infrastructure bills by ~60%." },
            { title: "Business-Centric Observability", desc: "Deployed the PLG Stack (Prometheus, Loki, Grafana). Created dashboards monitoring \"Transaction Success Rates\" and \"Fraud Attempts\"." },
            { title: "Intelligent Alerting", desc: "Configured Alertmanager to trigger Slack notifications only for critical anomalies, reducing alert fatigue." }
        ],
        impact: [
            "Significant OPEX reduction while maintaining 99.9% uptime.",
            "Reduced Mean Time to Resolution (MTTR) for bugs by pinpointing logs instantly via Loki."
        ],
        image: "/images/devops/devops_backend_madabank.webp",
        repo: "https://github.com/darisadam/madabank-server",
        highlight: false
    },
    {
        title: "Automated Mobile Release Pipeline",
        subtitle: "iOS CI/CD",
        tags: ["GitHub Actions", "Fastlane", "Xcodegen", "Ruby"],
        challenge: "Manual iOS deployments were prone to human error (wrong provisioning profiles) and took valuable developer time (2+ hours/week) to upload to TestFlight.",
        solution: "I orchestrated a fully automated pipeline that treats mobile releases like server deployments—codified, consistent, and automatic.",
        implementations: [
            { title: "Infrastructure as Code for Project Files", desc: "Utilized Xcodegen to generate .xcodeproj files on the fly, eliminating endless merge conflicts in the project.pbxproj file." },
            { title: "Automated Signing & Delivery", desc: "Configured Fastlane Match to handle code signing certificates securely and automated the upload process to TestFlight." },
            { title: "Strict Quality Gates", desc: "The pipeline automatically rejects any commit that fails SwiftLint or Unit Tests." }
        ],
        impact: [
            "0% Crash Rate in production due to enforced testing gates.",
            "Saved ~20 engineering hours per month by automating the release process."
        ],
        image: "/images/devops/devops_ios_madabank.webp",
        repo: "https://github.com/madabank/madabank-ios",
        highlight: false
    },
    {
        title: "Portfolio Site - Edge Deployment",
        subtitle: "Modern Web Workflow",
        tags: ["Next.js", "Vercel", "GitHub Actions"],
        challenge: "Needed a highly performant, globally available personal website with zero downtime during updates.",
        solution: "Implemented a modern CI/CD workflow leveraging Edge Computing.",
        implementations: [
            { title: "Automated Verification", desc: "GitHub Actions run ESLint and Unit Tests before allowing a merge to the main branch." },
            { title: "Atomic Deployments", desc: "Utilized Vercel for immutable deployments—every commit creates a unique preview URL, and the main branch updates instantly with zero downtime." },
            { title: "DDoS Protection", desc: "Configured edge-level rate limiting to prevent traffic spikes." }
        ],
        impact: [
            "Achieved perfect Lighthouse scores (100/100) and sub-second global load times."
        ],
        image: "/images/devops/devops_frontend_portfolio.webp",
        repo: "https://github.com/darisadam/my-portfolio",
        highlight: false
    }
];

const MINDSET_POINTS = [
    {
        question: "Why LocalStack over AWS for Dev?",
        answer: "To eliminate billing anxiety and enable offline development. It allows engineers to fail fast and iterate without waiting for cloud provisioning."
    },
    {
        question: "Why VPS over ECS?",
        answer: "At our scale, the management overhead of ECS outweighed the benefits. Docker Compose provided sufficient orchestration at 40% of the cost."
    },
    {
        question: "Why Fastlane?",
        answer: "Because relying on Xcode's \"Archive\" button is not reproducible. CI/CD requires CLI tools, not GUI interactions, to ensure consistent builds every time."
    }
];

const CASE_STUDIES = [
    {
        title: "Cost Optimization for Low-Frequency Tasks",
        scenario: "A client needs a script that generates a PDF report once every day at 8:00 AM.",
        problem: "Traditional Approach: Spinning up a dedicated EC2 instance (VM) running 24/7 with a cron job.",
        solution: "Utilize Serverless Functions (AWS Lambda / Google Cloud Functions) triggered by a Cloud Scheduler/EventBridge.",
        rationale: "An EC2 instance incurs costs for idle time (23 hours/day). Serverless functions use a \"Pay-as-you-go\" model, costing near zero since it only runs for seconds daily.",
        icon: <TrendingDown className="text-emerald-400" size={24} />
    },
    {
        title: "Handling Flash Sale Traffic",
        scenario: "An e-commerce app expects a 100x spike in traffic during a \"Harbolnas\" (Double Date) flash sale.",
        problem: "A fixed number of servers will either crash under load or waste money if over-provisioned beforehand.",
        solution: "Implement Horizontal Pod Autoscaling (HPA) on Kubernetes combined with Cluster Autoscaler. Additionally, offload static assets to a CDN (Cloudflare/CloudFront).",
        rationale: "HPA automatically adds replicas based on CPU/Memory usage, while the CDN reduces the load on the origin server by caching content at the edge.",
        icon: <Zap className="text-blue-400" size={24} />
    },
    {
        title: "Solving \"It Works on My Machine\"",
        scenario: "Developers complain that code runs perfectly on their MacBook but crashes on the Staging server due to different library versions.",
        problem: null,
        solution: "Implement Containerization (Docker) for development and production environments, ensuring parity. Use Infrastructure as Code (Terraform) to provision identical infrastructure.",
        rationale: "Docker ensures the application runtime (OS, dependencies) is immutable and identical across all environments, eliminating environment drift.",
        icon: <Box className="text-purple-400" size={24} />
    },
    {
        title: "Managing Secrets & Credentials Securely",
        scenario: "A developer accidentally commits a .env file containing AWS Access Keys and Database Passwords to a public GitHub repository.",
        problem: null,
        solution: "Remove secrets from Git immediately. Implement a centralized Secret Manager (AWS Secrets Manager / HashiCorp Vault). Inject secrets into containers only at runtime via environment variables.",
        rationale: "Hardcoded secrets are a massive security risk. Centralized management allows for rotation, audit logging, and granular access control.",
        icon: <Lock className="text-red-400" size={24} />
    },
    {
        title: "Reducing Slow CI/CD Build Times",
        scenario: "The deployment pipeline takes 45 minutes to finish, causing developers to wait too long to see their changes.",
        problem: null,
        solution: "Implement Dependency Caching (e.g., caching node_modules) and utilize Docker Layer Caching. Parallelize independent test jobs.",
        rationale: "Most build time is wasted re-downloading dependencies. Caching and parallelism can often reduce build time from 45 mins to under 10 mins.",
        icon: <Clock className="text-amber-400" size={24} />
    },
    {
        title: "Database Performance for Read-Heavy Apps",
        scenario: "A news portal application is slow because thousands of users are reading articles simultaneously, putting high load on the database.",
        problem: null,
        solution: "Implement Read Replicas for the database. Direct all \"Read\" (GET) queries to the replicas and only \"Write\" (POST/PUT) queries to the Primary DB. Add a Redis layer for caching.",
        rationale: "Separating Read and Write concerns prevents the primary database from being overwhelmed, while Redis serves data from memory (microseconds latency).",
        icon: <Database className="text-cyan-400" size={24} />
    },
    {
        title: "Zero-Downtime Deployment",
        scenario: "Users experience errors or \"Service Unavailable\" pages every time the team deploys a new version of the backend.",
        problem: null,
        solution: "Adopt Blue/Green Deployment or Rolling Updates with Kubernetes.",
        rationale: "In Blue/Green, the new version (Green) is deployed alongside the old (Blue). Traffic is switched only after Green is healthy. If issues arise, switching back to Blue is instant.",
        icon: <RefreshCw className="text-green-400" size={24} />
    },
    {
        title: "Disaster Recovery & High Availability",
        scenario: "The main data center in Jakarta (Region A) goes down due to a flood. The entire banking app goes offline.",
        problem: null,
        solution: "Architect a Multi-AZ (Availability Zone) setup where resources are spread across physically separate data centers. For critical data, enable Cross-Region Replication.",
        rationale: "If one Zone fails, the Load Balancer automatically redirects traffic to the healthy instances in another Zone, ensuring business continuity.",
        icon: <ShieldAlert className="text-orange-400" size={24} />
    },
    {
        title: "Debugging in Microservices (Observability)",
        scenario: "A user transaction fails, but the error spans across 5 different microservices, making it impossible to find the root cause by looking at individual server logs.",
        problem: null,
        solution: "Implement Distributed Tracing (Jaeger / OpenTelemetry) and Centralized Logging (ELK Stack / Loki). Assign a unique TraceID to every request.",
        rationale: "A TraceID allows engineers to visualize the entire journey of a request across all services to pinpoint exactly where the latency or error occurred.",
        icon: <Search className="text-violet-400" size={24} />
    },
    {
        title: "Storage Optimization",
        scenario: "An app allows users to upload profile photos. Storing them on the web server's disk (Block Storage) is becoming expensive and hard to backup.",
        problem: null,
        solution: "Offload static files to Object Storage (AWS S3 / GCS). Implement Lifecycle Policies to move old, rarely accessed logs/files to cheaper storage classes (e.g., S3 Glacier).",
        rationale: "Object storage is infinitely scalable and much cheaper than Block Storage (EBS) for unstructured data. Lifecycle policies automate cost savings for \"cold\" data.",
        icon: <HardDrive className="text-pink-400" size={24} />
    }
];

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
                            Ops & Infrastructure Engineer
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

                {/* 2. Featured Projects */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-slate-100">Featured In-Depth Projects</h2>
                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    <div className="grid gap-20">
                        {PROJECTS.map((project, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12`}>
                                {/* Image Side */}
                                <div className="flex-1 w-full space-y-6">
                                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag, i) => (
                                                    <span key={i} className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded bg-slate-900/80 border border-slate-700 text-slate-300 backdrop-blur-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Github Link */}
                                    <div className="flex justify-start">
                                        <a href={project.repo} target="_blank" className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-emerald-500 pb-0.5">
                                            <Github size={16} />
                                            View Source Logic on GitHub
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>

                                {/* Text Side */}
                                <div className="flex-1 space-y-6">
                                    <div className="space-y-2">
                                        {project.highlight && (
                                            <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                                                Enterprise Standard
                                            </span>
                                        )}
                                        <h3 className="text-3xl font-bold text-white leading-tight">
                                            {project.title} <span className="text-slate-500 block text-lg font-normal mt-1">{project.subtitle}</span>
                                        </h3>
                                    </div>

                                    <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                                        <div>
                                            <strong className="text-slate-200 block mb-1">The Challenge:</strong>
                                            {project.challenge}
                                        </div>
                                        <div>
                                            <strong className="text-emerald-400 block mb-1">The Solution:</strong>
                                            {project.solution}
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-2">
                                        {project.implementations.map((impl, i) => (
                                            <div key={i} className="flex gap-3 text-sm">
                                                <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                                                <p className="text-slate-300">
                                                    <strong className="text-white">{impl.title}:</strong> {impl.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-4 bg-emerald-950/20 border border-emerald-900/50 rounded-lg">
                                        <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <TrendingDown size={14} /> Impact
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.impact.map((item, i) => (
                                                <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                                                    <CheckCircle2 size={14} className="text-emerald-600/70" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Mindset: How I Think */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                            <Lightbulb size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-100">How I Think: Architectural Decisions</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {MINDSET_POINTS.map((point, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
                                <h4 className="font-bold text-white text-lg">{point.question}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-emerald-500/50 pl-4">
                                    {point.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Infrastructure as Code (Kept for continuity) */}
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
                </section>

                {/* 6. DevOps Case Studies & Architectural Decisions */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-slate-100">Additional Case Studies</h2>
                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {CASE_STUDIES.map((study, i) => (
                            <Card key={i} className="bg-slate-900/50 border-slate-800 p-6 space-y-4 hover:bg-slate-900/80 transition-all group">
                                <div className="flex items-start justify-between">
                                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors">
                                        {study.icon}
                                    </div>
                                    <span className="text-xs font-mono text-slate-500">Case Study #{i + 1}</span>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                                        {study.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 italic border-l-2 border-slate-700 pl-3">
                                        "{study.scenario}"
                                    </p>
                                </div>

                                <div className="space-y-4 pt-4 text-sm">
                                    {study.problem && (
                                        <div>
                                            <span className="block text-xs font-bold text-red-400 uppercase tracking-wide mb-1">The Problem</span>
                                            <p className="text-slate-300">{study.problem}</p>
                                        </div>
                                    )}

                                    <div>
                                        <span className="block text-xs font-bold text-emerald-400 uppercase tracking-wide mb-1">DevOps Solution</span>
                                        <p className="text-slate-300">{study.solution}</p>
                                    </div>

                                    <div className="pt-4 border-t border-slate-800/50">
                                        <span className="block text-xs font-bold text-blue-400 uppercase tracking-wide mb-1">Architecture Rationale</span>
                                        <p className="text-slate-400">{study.rationale}</p>
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
