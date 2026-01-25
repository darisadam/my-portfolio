"use client";

import { motion } from "framer-motion";
import {
    ArrowLeft,
    Gamepad2,
    Cpu,
    Zap,
    Move,
    Mountain,
    Battery,
    Sun,
    Coins,
    TrendingUp,
    ScrollText,
    Codesandbox,
    Rocket
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function GamePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-8 font-sans selection:bg-purple-500/30">
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

                {/* 1. Hero: The Philosophy */}
                <section className="space-y-8">
                    <div className="space-y-4 max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">
                            <Gamepad2 size={12} />
                            Creative Technologist
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                            Engineering Fun: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                Where Logic Meets Imagination
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                            A sandbox for testing <span className="text-slate-200">hardware limits</span>, <span className="text-slate-200">complex algorithms</span>, and <span className="text-slate-200">digital economies</span>.
                            This is where I refresh my mind from Enterprise iOS by building experimental interactive systems.
                        </p>
                    </div>
                </section>

                {/* 2. Featured Experiment: Astrodam Adventure */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-slate-100">Featured Experiment</h2>
                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden">
                        {/* Visual / Media Side */}
                        <div className="relative h-full min-h-[300px] bg-gradient-to-br from-indigo-900/40 to-purple-900/40 flex items-center justify-center p-8 group">
                            <div className="absolute inset-0 bg-[url('https://placehold.co/800x800/1e1b4b/4c1d95?text=Astrodam+Gameplay')] bg-cover bg-center opacity-50 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"></div>

                            {/* Floating Sensors Visualization */}
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="p-4 bg-slate-950/80 backdrop-blur border border-white/10 rounded-2xl flex flex-col items-center gap-2"
                                >
                                    <Move className="text-cyan-400" size={24} />
                                    <span className="text-xs font-mono text-slate-300">Pedometer</span>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    className="p-4 bg-slate-950/80 backdrop-blur border border-white/10 rounded-2xl flex flex-col items-center gap-2"
                                >
                                    <Mountain className="text-emerald-400" size={24} />
                                    <span className="text-xs font-mono text-slate-300">Altimeter</span>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity }}
                                    className="p-4 bg-slate-950/80 backdrop-blur border border-white/10 rounded-2xl flex flex-col items-center gap-2"
                                >
                                    <Battery className="text-green-400" size={24} />
                                    <span className="text-xs font-mono text-slate-300">Battery</span>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 4.5, repeat: Infinity }}
                                    className="p-4 bg-slate-950/80 backdrop-blur border border-white/10 rounded-2xl flex flex-col items-center gap-2"
                                >
                                    <Sun className="text-yellow-400" size={24} />
                                    <span className="text-xs font-mono text-slate-300">Lux</span>
                                </motion.div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-8 space-y-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="text-purple-400 font-bold text-sm mb-1 uppercase tracking-wider">Available on TestFlight</div>
                                    <h3 className="text-3xl font-bold text-white">Astrodam Adventure</h3>
                                </div>
                                <Cpu size={32} className="text-slate-600" />
                            </div>

                            <p className="text-slate-300 leading-relaxed text-lg">
                                A <span className="text-white font-semibold">Physical-First Mobile Game</span> where your real-world movements control the digital world.
                                Built with a hybrid architecture combining <b>SwiftUI</b> for UI overlays and <b>SpriteKit</b> for the physics engine.
                            </p>

                            <div className="space-y-3">
                                <h4 className="text-sm font-bold text-slate-500 uppercase">Technical Highlights</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-slate-400 text-sm">
                                        <Zap size={16} className="mt-1 text-yellow-400 shrink-0" />
                                        <span><b>Sensor Fusion:</b> CoreMotion & CoreLocation drive gameplay mechanics.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-400 text-sm">
                                        <Sun size={16} className="mt-1 text-orange-400 shrink-0" />
                                        <span><b>Environmental Input:</b> Screen brightness and battery level affect in-game visibility and difficulty.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4 border-t border-slate-800">
                                <p className="text-xs text-slate-500">
                                    <span className="text-purple-400 font-bold">Roadmap:</span> Porting to Unity for cross-platform hardware access.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Concept: Roblox Economics */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-slate-100">Concept in Development</h2>
                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    <Card className="bg-slate-900 border-slate-800 p-8 grid md:grid-cols-12 gap-8">
                        <div className="md:col-span-8 space-y-6">
                            <div className="flex items-center gap-3">
                                <Codesandbox className="text-pink-500" size={28} />
                                <h3 className="text-2xl font-bold text-white">Project: Garden Economy Sim</h3>
                            </div>

                            <div className="flex gap-2">
                                <span className="px-3 py-1 rounded bg-slate-800 text-slate-400 text-xs font-mono border border-slate-700">Platform: Roblox (Luau)</span>
                                <span className="px-3 py-1 rounded bg-pink-900/20 text-pink-400 text-xs font-mono border border-pink-500/20">Phase: Prototyping</span>
                            </div>

                            <p className="text-slate-400 leading-relaxed">
                                Applying my <span className="text-white">Economics background</span> to Game System Design.
                                Most games suffer from hyper-inflation. This project implements a <b>Dynamic Currency Model</b> where item prices and rewards float based on the Total Money Supply (TMS) and User Level.
                            </p>

                            <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                                <div className="flex items-center gap-2 mb-2">
                                    <TrendingUp size={16} className="text-emerald-400" />
                                    <span className="font-bold text-slate-200 text-sm">The &quot;FinOps&quot; Angle</span>
                                </div>
                                <p className="text-xs text-slate-500">
                                    Designing algorithms that automatically balance &quot;Cost of Living&quot; vs &quot;Income Potential&quot; to prevent market saturation in a multiplayer environment.
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-4 flex flex-col justify-center space-y-4 border-l border-slate-800 pl-8">
                            <h4 className="font-bold text-slate-500 text-sm uppercase">Current Deliverables</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-slate-300 text-sm">
                                    <ScrollText size={18} className="text-pink-400" />
                                    <span>Game Design Doc (GDD)</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300 text-sm">
                                    <Coins size={18} className="text-yellow-400" />
                                    <span>Economic Flowcharts</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300 text-sm">
                                    <Codesandbox size={18} className="text-blue-400" />
                                    <span>Mechanic Prototypes</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* 4. The Why & 5. Learning Path */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* The Why */}
                    <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 space-y-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <Cpu className="text-purple-400" /> Why I Make Games?
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            Game Development is my <b>&quot;Brain Gym&quot;</b>. It allows me to test complex algorithms and state management in a high-frequency rendering environment.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            Understanding how to optimize a game loop (60 FPS) directly translates to writing more efficient, non-blocking code for <span className="text-emerald-400">Enterprise iOS Applications</span>.
                        </p>
                    </div>

                    {/* The Lab */}
                    <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 space-y-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <Rocket className="text-pink-400" /> The Lab (Roadmap)
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between group">
                                <span className="text-slate-300">Unity (C#)</span>
                                <span className="text-xs text-slate-500 px-2 py-1 bg-slate-900 rounded border border-slate-800">Cross-Platform</span>
                            </div>
                            <div className="flex items-center justify-between group">
                                <span className="text-slate-300">Roblox Studio (Luau)</span>
                                <span className="text-xs text-slate-500 px-2 py-1 bg-slate-900 rounded border border-slate-800">Networking Logic</span>
                            </div>
                            <div className="flex items-center justify-between group">
                                <span className="text-slate-300">Multi-peer Connectivity</span>
                                <span className="text-xs text-slate-500 px-2 py-1 bg-slate-900 rounded border border-slate-800">Real-time P2P</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
