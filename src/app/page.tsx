'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Code, Brain, Rocket, ChevronDown } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative">
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f6faff] via-[#e9ecf1] to-[#b7dfff] dark:from-[#0c1a26] dark:via-[#1a2a3a] dark:to-[#2a4a6a]"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#45a8e6] to-[#76c5f3] rounded-full opacity-20 blur-xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[#b7dfff] to-[#45a8e6] rounded-full opacity-15 blur-xl"
          animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-br from-[#76c5f3] to-[#b7dfff] rounded-full opacity-25 blur-lg"
          animate={{ y: [0, -15, 0], x: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main Content */}
        <motion.div 
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
          style={{ y, opacity }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#45a8e6] to-[#76c5f3] rounded-3xl shadow-2xl animate-pulse-glow">
              <span className="text-white font-bold text-3xl">F</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">FrostByte</span>
            <br />
            <span className="text-[#0c1a26] dark:text-[#e9ecf1]">Lab</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl lg:text-3xl text-[#0c1a26] dark:text-[#e9ecf1] mb-8 max-w-6xl mx-auto font-light text-pretty"
          >
            Professional freelance software development, AI integrations, and digital product launches.
            <br />
            <span className="text-[#45a8e6] font-medium">Developer-led solutions for modern businesses.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#45a8e6] to-[#76c5f3] text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#76c5f3] to-[#45a8e6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </Link>
            
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-[#45a8e6] text-[#45a8e6] font-semibold rounded-2xl hover:bg-[#45a8e6] hover:text-white transition-all duration-300"
              >
                View Projects
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-[#45a8e6]"
          >
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 bg-white dark:bg-[#0c1a26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">What I Do</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#0c1a26] dark:text-[#e9ecf1] max-w-5xl mx-auto font-light text-pretty">
              Full-stack development with a focus on modern technologies and AI integration
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-[#f6faff] to-[#e9ecf1] dark:from-[#1a2a3a] dark:to-[#2a4a6a] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#45a8e6] to-[#76c5f3] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#45a8e6] to-[#76c5f3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0c1a26] dark:text-[#e9ecf1] mb-4">
                  Web Development
                </h3>
                <p className="text-[#0c1a26] dark:text-[#e9ecf1] mb-6 leading-relaxed">
                  Modern, responsive web applications built with React, Next.js, and the latest technologies.
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-[#45a8e6] hover:text-[#76c5f3] font-medium group/link transition-colors duration-300">
                  Learn more 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

            {/* AI Integration */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-[#f6faff] to-[#e9ecf1] dark:from-[#1a2a3a] dark:to-[#2a4a6a] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#45a8e6] to-[#76c5f3] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#45a8e6] to-[#76c5f3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0c1a26] dark:text-[#e9ecf1] mb-4">
                  AI Integration
                </h3>
                <p className="text-[#0c1a26] dark:text-[#e9ecf1] mb-6 leading-relaxed">
                  Seamless AI and machine learning integration to enhance your applications and workflows.
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-[#45a8e6] hover:text-[#76c5f3] font-medium group/link transition-colors duration-300">
                  Learn more 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

            {/* Digital Products */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-[#f6faff] to-[#e9ecf1] dark:from-[#1a2a3a] dark:to-[#2a4a6a] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#45a8e6] to-[#76c5f3] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#45a8e6] to-[#76c5f3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0c1a26] dark:text-[#e9ecf1] mb-4">
                  Digital Products
                </h3>
                <p className="text-[#0c1a26] dark:text-[#e9ecf1] mb-6 leading-relaxed">
                  End-to-end digital product development from concept to launch and beyond.
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-[#45a8e6] hover:text-[#76c5f3] font-medium group/link transition-colors duration-300">
                  Learn more 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#45a8e6] via-[#76c5f3] to-[#b7dfff] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#45a8e6] via-[#76c5f3] to-[#b7dfff]"></div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 50%, rgba(69, 168, 230, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(118, 197, 243, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(69, 168, 230, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-5xl mx-auto font-light text-pretty">
            Let&apos;s discuss your project and bring your vision to life with modern, scalable solutions.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-white text-[#45a8e6] font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Started Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#f6faff] to-[#e9ecf1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
