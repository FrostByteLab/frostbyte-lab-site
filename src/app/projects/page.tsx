'use client';

import Navigation from '@/components/layout/Navigation';
import { 
  motion, 
  staggerContainer, 
  cardHover, 
  textReveal
} from '@/lib/motion';
import { Code, Brain, Smartphone, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Newsletter Automation Platform",
      subtitle: "In Progress",
      description: "This in-development platform uses AI to auto-generate and publish daily content across multiple niche websites. Built with Django, Next.js, n8n, and GPT-4.",
      image: "/api/placeholder/600/400",
      technologies: ["Django", "Next.js", "n8n", "GPT-4", "AI Automation"],
      category: "AI Platform",
      link: "#",
      featured: true,
      status: "in-progress",
      external: false,
      icon: <Brain className="w-12 h-12" />
    },
    {
      title: "Personal Portfolio & Engineering Blog",
      subtitle: "Internal Project",
      description: "Built with React and Tailwind, this site showcases the developer behind FrostByte Lab — featuring project highlights, technical writing, and resume access.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Tailwind CSS", "Portfolio", "Blog"],
      category: "Personal Site",
      link: "https://chrisklemz.dev",
      featured: true,
      status: "live",
      external: true,
      icon: <Code className="w-12 h-12" />
    },
    {
      title: "AI-Powered Virtual Pet App",
      subtitle: "Coming Soon",
      description: "A mobile app featuring a customizable AI chatbot pet that lives on your phone's home screen. Designed for fun, interactivity, and monetizable upgrades.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "AI Chatbot", "Mobile App", "Monetization"],
      category: "Mobile App",
      link: "#",
      featured: false,
      status: "coming-soon",
      external: false,
      icon: <Smartphone className="w-12 h-12" />
    },
    {
      title: "Sustainable Living Storefront",
      subtitle: "Planning",
      description: "This ecommerce microsite will feature eco-friendly products and AI-generated content that guides conscious consumer choices. Focused on simplicity and purpose.",
      image: "/api/placeholder/600/400",
      technologies: ["Ecommerce", "AI Content", "Sustainability", "Microsite"],
      category: "Ecommerce",
      link: "#",
      featured: false,
      status: "planning",
      external: false,
      icon: <Leaf className="w-12 h-12" />
    }
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      'in-progress': {
        text: 'In Progress',
        classes: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
      },
      'live': {
        text: 'Live',
        classes: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
      },
      'coming-soon': {
        text: 'Coming Soon',
        classes: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
      },
      'planning': {
        text: 'Planning',
        classes: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
      }
    };
    
    const badge = badges[status as keyof typeof badges];
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badge.classes}`}>
        {badge.text}
      </span>
    );
  };

  return (
    <div className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-[#f6faff] via-[#e9ecf1] to-[#b7dfff] dark:from-[#0c1a26] dark:via-[#1a2a3a] dark:to-[#2a4a6a] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            {...textReveal}
            className="text-5xl md:text-6xl font-bold mb-6 gradient-text text-balance"
          >
            What We're Building at FrostByte Lab
          </motion.h1>
          <motion.p
            {...textReveal}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#0c1a26] dark:text-[#e9ecf1] mb-8 max-w-5xl mx-auto font-light text-pretty"
          >
            These are early-stage tools, platforms, and experiments currently being developed at FrostByte Lab. More projects are coming soon.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#45a8e6] to-[#76c5f3] text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45a8e6] focus-visible:ring-offset-2"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white dark:bg-[#0c1a26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...textReveal}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-balance">
              Current Projects
            </h2>
            <p className="text-xl text-[#0c1a26] dark:text-[#e9ecf1] text-pretty">
              Active development and live platforms
            </p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={index}
                {...cardHover}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#f6faff] to-[#b7dfff] dark:from-[#1a2a3a] dark:to-[#2a4a6a] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-transparent"
              >
                <motion.div 
                  className="aspect-video flex items-center justify-center bg-white/10 dark:bg-[#0c1a26]/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-[#45a8e6] text-center">
                    {project.icon}
                    <p className="text-sm opacity-75 mt-2">Project Preview</p>
                  </div>
                </motion.div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-[#45a8e6]">
                      {project.category}
                    </span>
                    {getStatusBadge(project.status)}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0c1a26] dark:text-[#e9ecf1] mb-2 text-balance">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-[#45a8e6] mb-4">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="text-[#0c1a26] dark:text-[#e9ecf1] mb-6 text-pretty">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-[#e9ecf1] dark:bg-[#1a2a3a] text-[#0c1a26] dark:text-[#e9ecf1] text-sm rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  {project.external ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#45a8e6] hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45a8e6] focus-visible:ring-offset-2 rounded"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Visit Project →
                    </motion.a>
                  ) : (
                    <span className="inline-flex items-center text-[#b7dfff] font-medium">
                      {project.status === 'in-progress' ? 'In Development' : 'Coming Soon'}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-24 bg-gradient-to-br from-[#f6faff] to-[#b7dfff] dark:from-[#1a2a3a] dark:to-[#2a4a6a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...textReveal}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-balance">
              All Projects
            </h2>
            <p className="text-xl text-[#0c1a26] dark:text-[#e9ecf1] text-pretty">
              Complete portfolio of current and upcoming projects
            </p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                {...cardHover}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-[#0c1a26] rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#e9ecf1] dark:border-[#1a2a3a]"
              >
                <motion.div 
                  className="aspect-video flex items-center justify-center bg-gradient-to-br from-[#f6faff] to-[#b7dfff] dark:from-[#1a2a3a] dark:to-[#2a4a6a]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-[#45a8e6] text-center">
                    {project.icon}
                    <p className="text-xs opacity-75 mt-2">Project Preview</p>
                  </div>
                </motion.div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-[#45a8e6]">
                      {project.category}
                    </span>
                    {getStatusBadge(project.status)}
                  </div>
                  <h3 className="text-xl font-bold text-[#0c1a26] dark:text-[#e9ecf1] mb-2 text-balance">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-[#45a8e6] mb-3">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="text-[#0c1a26] dark:text-[#e9ecf1] mb-4 text-sm text-pretty">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-[#e9ecf1] dark:bg-[#1a2a3a] text-[#0c1a26] dark:text-[#e9ecf1] text-xs rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-[#e9ecf1] dark:bg-[#1a2a3a] text-[#0c1a26] dark:text-[#e9ecf1] text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  {project.external ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#45a8e6] hover:underline font-medium text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45a8e6] focus-visible:ring-offset-2 rounded"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      Visit Project →
                    </motion.a>
                  ) : (
                    <span className="inline-flex items-center text-[#b7dfff] font-medium text-sm">
                      {project.status === 'in-progress' ? 'In Development' : 'Coming Soon'}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
} 