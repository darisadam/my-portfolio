import React, { useState } from 'react';
import { 
  Terminal, 
  Server, 
  Cloud, 
  ShieldCheck, 
  Code, 
  GitBranch, 
  AlertTriangle, 
  CheckCircle, 
  Smartphone, 
  Cpu, 
  Globe, 
  ChevronDown, 
  ChevronUp,
  ExternalLink,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [openIncident, setOpenIncident] = useState(null);

  const toggleIncident = (index) => {
    setOpenIncident(openIncident === index ? null : index);
  };

  const navItems = [
    { id: 'about', label: 'Tentang Saya' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'projects', label: 'Proyek Utama' },
    { id: 'incidents', label: 'Problem Solving' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 font-bold text-xl text-blue-400">
            <Terminal size={24} />
            <span>DevOps<span className="text-slate-100">Engineer</span></span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="px-4 py-2 text-sm font-bold bg-blue-600 hover:bg-blue-500 rounded-lg transition-all">
            Hubungi Saya
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-300 text-sm font-mono">
            iOS Developer ➔ DevOps Engineer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-blue-100 to-slate-400 bg-clip-text text-transparent">
            Bridging Mobile Development & Cloud Infrastructure
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Membangun infrastruktur yang reliabel, aman, dan terukur. Menggabungkan ketelitian pengembangan iOS dengan kekuatan otomasi Cloud-Native.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center space-x-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors">
              <Github size={20} />
              <span>Lihat GitHub</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-3 border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 rounded-lg transition-all">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-10 h-1 bg-blue-500 mr-4"></span>
              Filosofi Rekayasa
            </h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Sebagai mantan iOS Developer, saya memahami rasa frustrasi ketika *build* gagal atau deployment memakan waktu berjam-jam. Transisi saya ke DevOps didorong oleh keinginan untuk memecahkan masalah sistemik tersebut.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Saya tidak hanya melihat infrastruktur sebagai server, tetapi sebagai produk yang harus dikelola dengan prinsip <em>"Everything as Code"</em>. Keunggulan saya terletak pada kemampuan menjembatani kesenjangan antara tim mobile dan tim operasi infrastruktur backend.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-700">
                <Smartphone className="text-blue-400 mb-2" />
                <h3 className="font-bold">Mobile First Context</h3>
                <p className="text-xs text-slate-400">Paham nuansa Xcode, Signing, & Provisioning.</p>
              </div>
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-700">
                <Cloud className="text-blue-400 mb-2" />
                <h3 className="font-bold">Cloud Native Action</h3>
                <p className="text-xs text-slate-400">Implementasi IaC, Containerization & CI/CD.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20"></div>
            <div className="relative bg-slate-900 border border-slate-700 p-6 rounded-xl font-mono text-sm shadow-2xl">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-slate-400"># Transitioning skills...</p>
              <p className="text-purple-400">class <span className="text-yellow-300">Engineer</span> <span className="text-slate-100">{`{`}</span></p>
              <div className="pl-4">
                <p className="text-blue-400">current_role: <span className="text-green-300">"DevOps Engineer"</span></p>
                <p className="text-blue-400">background: <span className="text-green-300">"iOS Specialist"</span></p>
                <p className="text-blue-400">mission: <span className="text-green-300">"Automate Everything"</span></p>
                <p className="text-blue-400">stack: <span className="text-yellow-300">[</span></p>
                <div className="pl-4 text-green-300">
                  "AWS", "Terraform", "Kubernetes",<br/>
                  "Fastlane", "GitHub Actions"<br/>
                </div>
                <p className="text-yellow-300">]</p>
              </div>
              <p className="text-slate-100">{`}`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Peta Kompetensi Teknis</h2>
            <p className="text-slate-400">Kombinasi alat industri standar dan spesialisasi mobile.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Cloud Platform", 
                icon: <Cloud className="w-6 h-6" />, 
                skills: ["AWS (Primary)", "Alibaba Cloud (Secondary)", "EC2/ECS", "S3 & RDS"] 
              },
              { 
                title: "CI/CD & Mobile Ops", 
                icon: <GitBranch className="w-6 h-6" />, 
                skills: ["GitHub Actions", "Fastlane (Ruby)", "Jenkins", "TestFlight Automation"] 
              },
              { 
                title: "Container & Orchestration", 
                icon: <Server className="w-6 h-6" />, 
                skills: ["Docker", "Kubernetes (K8s)", "Helm Charts", "Container Registry"] 
              },
              { 
                title: "Infrastructure as Code", 
                icon: <Code className="w-6 h-6" />, 
                skills: ["Terraform", "Ansible", "HCL Modules", "State Management"] 
              },
              { 
                title: "Observability", 
                icon: <Cpu className="w-6 h-6" />, 
                skills: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch"] 
              },
              { 
                title: "Security (DevSecOps)", 
                icon: <ShieldCheck className="w-6 h-6" />, 
                skills: ["Fastlane Match", "SSL/TLS", "IAM Policies", "Secret Manager"] 
              }
            ].map((category, idx) => (
              <div key={idx} className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800 transition-colors border border-slate-700/50 hover:border-blue-500/50 group">
                <div className="flex items-center mb-4 text-blue-400 group-hover:text-blue-300">
                  {category.icon}
                  <h3 className="ml-3 font-bold text-lg text-slate-100">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center text-slate-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="space-y-16">
            
            {/* Project 1 */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 flex flex-col lg:flex-row">
              <div className="p-8 lg:w-2/3">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">Completed</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full">Killer Feature</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">The "Hybrid" Pipeline: Mobile CI/CD Automation</h3>
                <p className="text-slate-300 mb-6">
                  Membangun pipeline CI/CD lengkap untuk aplikasi iOS menggunakan GitHub Actions dan Fastlane. Mengatasi masalah klasik manajemen sertifikat dengan Fastlane Match dan penyimpanan terenkripsi di S3.
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-slate-400 uppercase mb-2">Key Tech</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Fastlane', 'GitHub Actions', 'Ruby', 'S3', 'TestFlight'].map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-900 border border-slate-600 rounded text-xs text-slate-300">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <p className="text-sm text-slate-400">Mengurangi waktu rilis dari 2 jam (manual) menjadi 15 menit (otomatis).</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <p className="text-sm text-slate-400">Zero-touch certificate management untuk tim developer.</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 lg:w-1/3 p-8 border-t lg:border-t-0 lg:border-l border-slate-700 flex flex-col justify-center items-center">
                <div className="text-center">
                  <GitBranch size={48} className="text-slate-600 mx-auto mb-4" />
                  <h4 className="font-bold text-slate-300 mb-2">Architecture Highlight</h4>
                  <p className="text-xs text-slate-500 mb-6">Push ➔ Actions ➔ Fastlane Match ➔ Build & Sign ➔ TestFlight</p>
                  <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center justify-center mx-auto">
                    Lihat Repository <ExternalLink size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 flex flex-col lg:flex-row">
              <div className="p-8 lg:w-2/3 order-2 lg:order-1">
                <div className="flex items-center space-x-3 mb-4">
                   <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-full">Infrastructure as Code</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Cloud-Native Web Infrastructure (AWS/Alibaba)</h3>
                <p className="text-slate-300 mb-6">
                  Perancangan infrastruktur modular menggunakan Terraform. Mengimplementasikan VPC, Auto Scaling Group, dan Load Balancer. Fokus pada <em>State Management</em> yang aman menggunakan DynamoDB locking untuk mencegah konflik tim.
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-slate-400 uppercase mb-2">Key Tech</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Terraform', 'AWS', 'Docker', 'ECS', 'VPC'].map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-900 border border-slate-600 rounded text-xs text-slate-300">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <p className="text-sm text-slate-400">Implementasi modul Terraform yang <em>reusable</em> (Network, Compute, DB).</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <p className="text-sm text-slate-400">Keamanan jaringan via Security Groups yang ketat.</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 lg:w-1/3 p-8 border-b lg:border-b-0 lg:border-r border-slate-700 flex flex-col justify-center items-center order-1 lg:order-2">
                 <div className="text-center">
                  <Cloud size={48} className="text-slate-600 mx-auto mb-4" />
                  <h4 className="font-bold text-slate-300 mb-2">Architecture Highlight</h4>
                  <p className="text-xs text-slate-500 mb-6">Terraform State di S3 + DynamoDB Lock</p>
                  <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center justify-center mx-auto">
                    Lihat Repository <ExternalLink size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Incident Logs / Problem Solving Section */}
      <section id="incidents" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <AlertTriangle className="mr-3 text-yellow-500" />
              Incident Logs (Problem Solving)
            </h2>
            <p className="text-slate-400">
              Dokumentasi nyata penyelesaian masalah menggunakan metode STAR (Situation, Task, Action, Result).
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Misteri 'Connection Refused' pada Docker Container",
                tags: ["Docker", "Networking"],
                content: {
                  s: "Saat deployment microservices, frontend container gagal menghubungi backend API di localhost:8080.",
                  t: "Mengidentifikasi penyebab kegagalan komunikasi antar-container.",
                  a: "Investigasi mengungkap bahwa 'localhost' di dalam container merujuk ke container itu sendiri. Solusi: Menggunakan nama service Docker (http://backend-api:8080) yang di-resolve oleh Docker DNS internal.",
                  r: "Komunikasi pulih. Mengimplementasikan ENV VAR untuk URL agar dinamis di tiap environment."
                }
              },
              {
                title: "Terraform State Lock ('Deadlock' Infrastruktur)",
                tags: ["Terraform", "CI/CD"],
                content: {
                  s: "Pipeline CI/CD gagal dengan error 'Error acquiring the state lock' karena proses sebelumnya dibatalkan paksa.",
                  t: "Membuka kunci state file tanpa merusak data infrastruktur (corrupt state).",
                  a: "Analisis tabel DynamoDB Lock. Menggunakan perintah `terraform force-unlock <ID>` setelah verifikasi tim. Menambahkan timeout pada CI job untuk pencegahan.",
                  r: "Pipeline kembali normal dan tim diedukasi mengenai bahaya SIGKILL pada proses Terraform."
                }
              },
              {
                title: "Kubernetes CrashLoopBackOff (OOMKilled)",
                tags: ["Kubernetes", "Java"],
                content: {
                  s: "Pod aplikasi terus menerus restart setelah deployment baru.",
                  t: "Mendiagnosa akar masalah startup failure pada cluster.",
                  a: "Cek `kubectl describe pod` menemukan exit code 137 (OOMKilled). Limit memori di YAML terlalu kecil untuk heap Java app. Action: Menaikkan resource limits dan tuning Liveness Probe.",
                  r: "Pod mencapai status Stable/Running."
                }
              },
              {
                title: "Code Signing 'Nightmare' pada CI/CD (iOS Specialization)",
                tags: ["Fastlane", "iOS", "Security"],
                content: {
                  s: "Build gagal di GitHub Actions karena runner (mesin virtual) tidak memiliki sertifikat distribusi di Keychain.",
                  t: "Otomasi instalasi sertifikat secara aman tanpa commit file .p12 ke repo.",
                  a: "Implementasi Fastlane Match dengan repo privat terenkripsi. Menambahkan step decrypt pada pipeline CI hanya saat build berjalan.",
                  r: "Build sukses 100% di cloud runner yang bersih (ephemeral) tanpa intervensi manual."
                }
              }
            ].map((incident, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleIncident(idx)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-slate-800 transition-colors text-left"
                >
                  <div>
                    <h3 className="font-bold text-slate-200">{incident.title}</h3>
                    <div className="flex gap-2 mt-2">
                      {incident.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 bg-slate-800 text-slate-400 rounded border border-slate-700">{tag}</span>
                      ))}
                    </div>
                  </div>
                  {openIncident === idx ? <ChevronUp className="text-blue-400" /> : <ChevronDown className="text-slate-500" />}
                </button>
                
                {openIncident === idx && (
                  <div className="px-6 py-6 bg-slate-900/50 border-t border-slate-700 grid md:grid-cols-2 gap-6 animate-fadeIn">
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-yellow-500 uppercase tracking-wider">Situation</span>
                        <p className="text-sm text-slate-300 mt-1">{incident.content.s}</p>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">Task</span>
                        <p className="text-sm text-slate-300 mt-1">{incident.content.t}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-green-500 uppercase tracking-wider">Action</span>
                        <p className="text-sm text-slate-300 mt-1">{incident.content.a}</p>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-purple-500 uppercase tracking-wider">Result</span>
                        <p className="text-sm text-slate-300 mt-1">{incident.content.r}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 py-12 px-6 border-t border-slate-800">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Siap Berkolaborasi?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Saya siap membawa pengalaman mobile dan skill DevOps saya untuk meningkatkan efisiensi tim engineering Anda.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="flex items-center text-slate-300 hover:text-white transition-colors">
              <Mail className="mr-2 h-5 w-5" /> email@example.com
            </a>
            <a href="#" className="flex items-center text-slate-300 hover:text-white transition-colors">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn Profile
            </a>
            <a href="#" className="flex items-center text-slate-300 hover:text-white transition-colors">
              <Github className="mr-2 h-5 w-5" /> GitHub Profile
            </a>
          </div>
          <div className="text-slate-600 text-sm">
            &copy; 2026 Mobile DevOps Specialist Portfolio. Built with React & Tailwind.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;