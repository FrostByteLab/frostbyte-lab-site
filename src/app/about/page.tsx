'use client';

import Navigation from '@/components/layout/Navigation';
import { 
  motion, 
  staggerContainer, 
  cardHover, 
  textReveal,
  fadeInLeft
} from '@/lib/motion';
import { Code, Brain, Smartphone, Rocket, Server, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Python & Django", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "AI/ML Integration", level: 75 },
    { name: "Mobile Development", level: 70 }
  ];

  const experience = [
    {
      title: "Full-Stack Developer",
      company: "FrostByte Lab",
      period: "2023 - Present",
      description: "Building modern web applications and AI-powered solutions for clients across various industries."
    },
    {
      title: "Software Engineer",
      company: "Tech Startup",
      period: "2021 - 2023",
      description: "Developed scalable web applications and mobile apps using React, Node.js, and cloud technologies."
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2020 - 2021",
      description: "Created responsive user interfaces and interactive web experiences for enterprise clients."
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive web applications",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "AI Integration",
      description: "Seamless AI and ML solutions",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile development",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Digital Products",
      description: "End-to-end product development",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "API Development",
      description: "Robust and scalable APIs",
      icon: <Server className="w-6 h-6" />
    },
    {
      title: "Consulting",
      description: "Technical guidance and strategy",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

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
            About FrostByte Lab
          </motion.h1>
          <motion.p
            {...textReveal}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#0c1a26] dark:text-[#e9ecf1] mb-8 max-w-5xl mx-auto font-light text-pretty"
          >
            A software development studio focused on building modern, AI-powered applications that solve real-world problems
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
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white dark:bg-[#0c1a26]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...textReveal}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text text-balance">
              Our Mission
            </h2>
            <p className="text-xl text-[#0c1a26] dark:text-[#e9ecf1] leading-relaxed text-pretty">
              At FrostByte Lab, we believe in the power of technology to transform businesses and enhance human experiences. 
              We specialize in creating innovative software solutions that combine cutting-edge AI capabilities with elegant, 
              user-friendly design.
            </p>
          </motion.div>

          <motion.div
            {...fadeInLeft}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#0c1a26] dark:text-[#e9ecf1] mb-4 text-balance">
                What We Do
              </h3>
              <p className="text-[#0c1a26] dark:text-[#e9ecf1] mb-6 leading-relaxed text-pretty">
                We build modern web applications, mobile apps, and AI-powered solutions that help businesses 
                streamline operations, engage customers, and drive growth. Our approach combines technical 
                expertise with creative problem-solving.
              </p>
              <motion.ul 
                {...staggerContainer}
                className="space-y-3"
              >
                {[
                  "Full-stack web development",
                  "AI and machine learning integration",
                  "Mobile app development",
                  "Technical consulting"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    {...cardHover}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-[#0c1a26] dark:text-[#e9ecf1]"
                  >
                    <CheckCircle className="w-5 h-5 mr-3 text-[#45a8e6] flex-shrink-0" />
                    <span className="text-pretty">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0c1a26] dark:text-[#e9ecf1] mb-4 text-balance">
                Our Approach
              </h3>
              <p className="text-[#0c1a26] dark:text-[#e9ecf1] mb-6 leading-relaxed text-pretty">
                We believe in collaborative development, transparent communication, and delivering solutions 
                that exceed expectations. Every project starts with understanding your unique needs and 
                ends with a product that drives real results.
              </p>
              <motion.ul 
                {...staggerContainer}
                className="space-y-3"
              >
                {[
                  "Agile development methodology",
                  "Regular progress updates",
                  "Quality assurance testing",
                  "Post-launch support"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    {...cardHover}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-[#0c1a26] dark:text-[#e9ecf1]"
                  >
                    <CheckCircle className="w-5 h-5 mr-3 text-[#45a8e6] flex-shrink-0" />
                    <span className="text-pretty">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gradient-to-br from-[#f6faff] to-[#b7dfff] dark:from-[#1a2a3a] dark:to-[#2a4a6a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...textReveal}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-balance">
              Technical Expertise
            </h2>
            <p className="text-xl text-[#0c1a26] dark:text-[#e9ecf1] text-pretty">
              Core technologies and frameworks we specialize in
            </p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                {...cardHover}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-[#0c1a26] dark:text-[#e9ecf1] text-balance">
                    {skill.name}
                  </span>
                  <span className="text-sm text-[#45a8e6] font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-[#e9ecf1] dark:bg-[#1a2a3a] rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-gradient-to-r from-[#45a8e6] to-[#76c5f3] h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-white dark:bg-[#0c1a26]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...textReveal}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-balance">
              Experience
            </h2>
            <p className="text-xl text-[#0c1a26] dark:text-[#e9ecf1] text-pretty">
              Professional journey and expertise
            </p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="space-y-8"
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                {...cardHover}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0c1a26] dark:text-[#e9ecf1] text-balance">
                      {exp.title}
                    </h3>
                    <p className="text-[#45a8e6] font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-[#0c1a26] dark:text-[#e9ecf1] mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[#0c1a26] dark:text-[#e9ecf1] leading-relaxed text-pretty">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-br from-[#f6faff] to-[#b7dfff] dark:from-[#1a2a3a] dark:to-[#2a4a6a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...textReveal}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-balance">
              What We Offer
            </h2>
            <p className="text-xl text-[#0c1a26] dark:text-[#e9ecf1] text-pretty">
              Comprehensive software development services
            </p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...cardHover}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-[#45a8e6] to-[#76c5f3] rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-white">
                    {service.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-[#0c1a26] dark:text-[#e9ecf1] mb-2 text-balance">
                  {service.title}
                </h3>
                <p className="text-[#0c1a26] dark:text-[#e9ecf1] text-pretty">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            {...textReveal}
            className="text-center mt-16"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#45a8e6] to-[#76c5f3] text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45a8e6] focus-visible:ring-offset-2"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 