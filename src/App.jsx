import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Smartphone, 
  Gamepad2, 
  ChevronRight, 
  ArrowLeft,
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code2,
  Layers,
  BookOpen,
  Briefcase,
  Sparkles,
  Download
} from 'lucide-react';

/* =============================================================================
  CONTENT DATA CENTER
  Edit this section to change your website's content easily.
  =============================================================================
*/

const DATA = {
  profile: {
    name: "Your Name",
    title: "Software Engineer",
    tagline: "Bridging Mobile Development, Cloud Infrastructure, and Interactive Media.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:email@example.com"
    },
    about: "I am a versatile engineer who doesn't just write code—I build ecosystems. With a background spanning from pixel-perfect iOS apps to resilient Kubernetes clusters, I bring a holistic view to software engineering.",
    experience: [
      {
        role: "Senior DevOps Engineer",
        company: "Tech Corp",
        period: "2023 - Present",
        desc: "Leading infrastructure automation and CI/CD pipelines for mobile teams."
      },
      {
        role: "iOS Developer",
        company: "App Studio",
        period: "2020 - 2023",
        desc: "Developed 5+ App Store featured applications using Swift and SwiftUI."
      }
    ],
    education: [
      {
        degree: "B.S. Computer Science",
        school: "University of Technology",
        year: "2016 - 2020"
      }
    ]
  },
  
  portfolios: {
    ios: {
      id: 'ios',
      title: "iOS Development",
      icon: <Smartphone size={40} />,
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-400",
      bgGradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
      description: "Crafting fluid, user-centric mobile experiences with Swift & SwiftUI.",
      skills: ["Swift", "SwiftUI", "UIKit", "CoreData", "Combine", "XCTest"],
      projects: [
        {
          title: "FinTrack Mobile",
          tags: ["SwiftUI", "CoreData"],
          desc: "A personal finance tracker with intricate charts and iCloud sync.",
          link: "#"
        },
        {
          title: "HealthConnect",
          tags: ["HealthKit", "MVVM"],
          desc: "Integration with Apple Health to visualize daily activity metrics.",
          link: "#"
        }
      ]
    },
    devops: {
      id: 'devops',
      title: "DevOps & Cloud",
      icon: <Terminal size={40} />,
      color: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-400",
      bgGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      description: "Building reliable, scalable, and secure infrastructure as code.",
      skills: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Fastlane"],
      projects: [
        {
          title: "The 'Hybrid' Pipeline",
          tags: ["Fastlane", "GitHub Actions", "S3"],
          desc: "Reduced release time from 2 hours to 15 minutes with zero-touch signing.",
          link: "#"
        },
        {
          title: "Terraform Modules",
          tags: ["Terraform", "AWS", "DynamoDB"],
          desc: "Modular infrastructure with safe state locking and automated drift detection.",
          link: "#"
        }
      ]
    },
    game: {
      id: 'game',
      title: "Game Development",
      icon: <Gamepad2 size={40} />,
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-400",
      bgGradient: "from-purple-500/20 via-pink-500/10 to-transparent",
      description: "Creating immersive interactive worlds and gameplay mechanics.",
      skills: ["Unity", "C#", "Shader Graph", "Blender", "Game Physics"],
      projects: [
        {
          title: "Neon Racer",
          tags: ["Unity", "C#"],
          desc: "A high-speed endless runner with reactive audio visualization.",
          link: "#"
        },
        {
          title: "RPG Inventory System",
          tags: ["C#", "Design Patterns"],
          desc: "A flexible grid-based inventory system supporting stacking and crafting.",
          link: "#"
        }
      ]
    }
  }
};

/* =============================================================================
  COMPONENTS
  =============================================================================
*/

const Card = ({ children, className = "" }) => (
  <div className={`bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ icon, title }) => (
  <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3 mb-8">
    <span className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg text-white shadow-lg shadow-blue-500/50">
      {icon}
    </span>
    {title}
  </h2>
);

const Dashboard = ({ onNavigate }) => {
  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm">
          <Sparkles size={16} className="animate-spin-slow" />
          Welcome to my digital workspace
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            {DATA.profile.name}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4">
          {DATA.profile.tagline}
        </p>
        
        <p className="text-lg text-slate-400 italic mb-8">
          {DATA.profile.title}
        </p>
        
        <div className="flex justify-center gap-4 mb-8">
          <a 
            href={DATA.profile.social.github} 
            target="_blank" 
            rel="noreferrer" 
            className="group p-4 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1"
          >
            <Github size={24} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href={DATA.profile.social.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="group p-4 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1"
          >
            <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href={DATA.profile.social.email} 
            className="group p-4 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1"
          >
            <Mail size={24} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>

        <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all duration-300 hover:-translate-y-1">
          <Download size={20} />
          Download Resume
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      {/* Navigation Cards (The 3 Portfolios) */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">Explore My Work</h2>
          <p className="text-slate-400">Click on any area to dive deeper into my projects</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {Object.values(DATA.portfolios).map((portfolio) => (
            <button
              key={portfolio.id}
              onClick={() => onNavigate(portfolio.id)}
              className="group text-left relative overflow-hidden"
            >
              <Card className="h-full hover:-translate-y-3 border-2 hover:border-transparent relative">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${portfolio.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Glowing Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${portfolio.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`mb-6 ${portfolio.textColor} group-hover:scale-110 transition-transform duration-300 origin-left`}>
                    {portfolio.icon}
                  </div>
                  
                  <h3 className={`text-2xl font-bold text-slate-100 mb-3 group-hover:bg-gradient-to-r ${portfolio.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {portfolio.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {portfolio.description}
                  </p>
                  
                  <div className={`flex items-center text-sm font-bold ${portfolio.textColor} group-hover:text-white`}>
                    Explore Portfolio 
                    <ChevronRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${portfolio.color} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>
              </Card>
            </button>
          ))}
        </div>
      </section>

      {/* Profile Details */}
      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-8 pb-20">
        
        {/* About & Education */}
        <div className="space-y-8">
          <Card className="group hover:scale-[1.02] transition-transform duration-300">
            <SectionTitle icon={<BookOpen size={20} />} title="About Me" />
            <p className="text-slate-300 leading-relaxed text-lg">
              {DATA.profile.about}
            </p>
            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </Card>

          <Card className="group hover:scale-[1.02] transition-transform duration-300">
            <SectionTitle icon={<BookOpen size={20} />} title="Education" />
            <div className="space-y-6">
              {DATA.profile.education.map((edu, i) => (
                <div key={i} className="pl-6 border-l-2 border-blue-500/50 hover:border-blue-500 transition-colors duration-300">
                  <h4 className="text-lg font-bold text-slate-200">{edu.school}</h4>
                  <p className="text-blue-400 font-semibold">{edu.degree}</p>
                  <p className="text-slate-500 text-sm mt-1">{edu.year}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Experience */}
        <div className="space-y-8">
          <Card className="group hover:scale-[1.02] transition-transform duration-300">
            <SectionTitle icon={<Briefcase size={20} />} title="Work Experience" />
            <div className="space-y-8">
              {DATA.profile.experience.map((job, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-slate-700 hover:border-blue-500 transition-colors duration-300 group/item">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover/item:scale-125 group-hover/item:shadow-lg group-hover/item:shadow-blue-500/50 transition-all duration-300" />
                  <h4 className="text-xl font-bold text-slate-200 group-hover/item:text-blue-400 transition-colors">
                    {job.role}
                  </h4>
                  <p className="text-blue-400 text-sm mb-2 font-semibold">
                    {job.company} • {job.period}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {job.desc}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

      </section>
    </div>
  );
};

const PortfolioLayout = ({ data, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen animate-slideIn">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${data.color} opacity-20 rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br ${data.color} opacity-20 rounded-full blur-3xl animate-pulse delay-1000`}></div>
      </div>

      {/* Header Bar */}
      <div className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-slate-800/50"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </button>
          <div className={`flex items-center gap-3 font-bold bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
            <div className={`p-2 bg-gradient-to-br ${data.color} rounded-lg text-white shadow-lg`}>
              {data.icon}
            </div>
            <span className="hidden sm:inline text-xl">{data.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <div className={`inline-block p-4 mb-6 rounded-2xl bg-gradient-to-br ${data.color} shadow-2xl`}>
            <div className="text-white scale-150">
              {data.icon}
            </div>
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
            {data.title} Portfolio
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">{data.description}</p>
        </header>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center justify-center gap-3">
            <Layers className="text-slate-500" /> 
            Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.skills.map((skill, idx) => (
              <span 
                key={idx} 
                className={`group px-6 py-3 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-transparent rounded-full text-slate-300 hover:text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden`}
              >
                <span className={`absolute inset-0 bg-gradient-to-r ${data.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></span>
                <span className="relative z-10">{skill}</span>
              </span>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <Code2 className="text-slate-500" /> 
            Selected Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.projects.map((project, idx) => (
              <Card key={idx} className="group hover:scale-[1.02] relative overflow-hidden">
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${data.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map(tag => (
                        <span key={tag} className={`text-xs font-mono px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 group-hover:border-transparent group-hover:bg-gradient-to-r ${data.color} group-hover:text-white transition-all duration-300`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      className={`p-2 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-gradient-to-br ${data.color} hover:shadow-lg`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  
                  <h3 className={`text-2xl font-bold text-slate-100 mb-3 group-hover:bg-gradient-to-r ${data.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {project.desc}
                  </p>

                  <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${data.color} rounded-full transition-all duration-500`}></div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 relative overflow-hidden rounded-3xl">
          <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-10`}></div>
          <div className={`absolute inset-0 bg-gradient-to-br ${data.bgGradient}`}></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-slate-100 mb-4">
              Interested in my {data.title} work?
            </h3>
            <p className="text-slate-300 mb-8 text-lg">
              Let's discuss how I can contribute to your next project.
            </p>
            <a 
              href={DATA.profile.social.email}
              className={`group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${data.color} hover:shadow-2xl text-white font-bold rounded-full transition-all duration-300 hover:-translate-y-1`}
            >
              <Mail size={20} /> 
              Contact Me
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

const App = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'ios':
        return <PortfolioLayout data={DATA.portfolios.ios} onBack={() => setCurrentView('dashboard')} />;
      case 'devops':
        return <PortfolioLayout data={DATA.portfolios.devops} onBack={() => setCurrentView('dashboard')} />;
      case 'game':
        return <PortfolioLayout data={DATA.portfolios.game} onBack={() => setCurrentView('dashboard')} />;
      default:
        return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {renderView()}
    </div>
  );
};

export default App;