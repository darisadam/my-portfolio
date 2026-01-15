"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Gamepad2, Play, Code2, Cpu } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function GamePage() {
    const prototypes = [
        {
            title: "Procedural Dungeon Gen",
            tech: "Unity / C#",
            focus: "Algorithms",
            desc: "Implemented a custom implementation of Binary Space Partitioning (BSP) to generate infinite distinct dungeon layouts at runtime.",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Custom Physics Engine",
            tech: "C++ / OpenGL",
            focus: "Engine Dev",
            desc: "Built a 2D rigid body physics engine from scratch dealing with collision detection, impulse resolution, and friction.",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Neon Shader Pack",
            tech: "HLSL / Shader Graph",
            focus: "Technical Art",
            desc: "A collection of performant, retro-wave inspired shaders optimized for mobile devices.",
            color: "from-cyan-500 to-blue-500"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <header className="relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
                    >
                        <ArrowLeft size={20} />
                        Back to Dashboard
                    </Link>

                    <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
                            <div className="p-4 bg-slate-950 rounded-2xl shadow-xl">
                                <Gamepad2 size={48} className="text-purple-400" />
                            </div>
                            <div className="text-center md:text-left">
                                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider italic">
                                    Game Dev <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Labs</span>
                                </h1>
                                <p className="text-purple-200/80 mt-2 text-lg">Experiments in Gameplay, Graphics, and Engine Architecture</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Prototypes Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {prototypes.map((proto, i) => (
                        <Card key={i} className="group hover:-translate-y-2 transition-transform duration-300">
                            <div className={`h-2 bg-gradient-to-r ${proto.color} w-12 mb-4 rounded-full group-hover:w-full transition-all duration-500`}></div>

                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-slate-100">{proto.title}</h3>
                                <Code2 size={20} className="text-slate-500 group-hover:text-white transition-colors" />
                            </div>

                            <p className="text-slate-400 text-sm mb-6 min-h-[80px]">
                                {proto.desc}
                            </p>

                            <div className="flex items-center justify-between text-xs font-mono border-t border-slate-800 pt-4">
                                <span className="text-purple-400">{proto.tech}</span>
                                <span className="text-slate-500">{proto.focus}</span>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Callout */}
                <div className="text-center py-12">
                    <p className="text-slate-500 mb-4">Want to play the builds?</p>
                    <button className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all shadow-lg shadow-purple-900/50 hover:shadow-purple-700/50">
                        <Play size={20} fill="currentColor" />
                        Visit itch.io Profile
                    </button>
                </div>
            </div>
        </div>
    );
}
