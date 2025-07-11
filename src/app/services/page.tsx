'use client';

import Navigation from '@/components/layout/Navigation';
import { 
  motion, 
  staggerContainer, 
  cardHover, 
  textReveal
} from '@/lib/motion';
import { Code, Brain, Smartphone, Rocket, Server, BookOpen, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with the latest technologies",
      icon: <Code className="w-8 h-8" />,
      features: [
        "React & Next.js applications",
        "TypeScript for type safety",
        "Responsive design with Tailwind CSS",
        "SEO optimization",
        "Performance optimization",
        "Cross-browser compatibility"
      ],
      color: "from-[#45a8e6] to-[#76c5f3]"
    },
    {
      title: "AI Integration",
      description: "Seamless AI and machine learning integration to enhance your applications",
      icon: <Brain className="w-8 h-8" />,
      features: [
        "OpenAI API integration",
        "Custom AI chatbots",
        "Natural language processing",
        "Machine learning models",
        "Data analysis & insights",
        "Automated workflows"
      ],
      color: "from-[#45a8e6] to-[#b7dfff]"
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        "React Native applications",
        "Native iOS development",
        "Native Android development",
        "App Store optimization",
        "Push notifications",
        "Offline functionality"
      ],
      color: "from-[#76c5f3] to-[#b7dfff]"
    },
    {
      title: "Digital Products",
      description: "End-to-end digital product development from concept to launch",
      icon: <Rocket className="w-8 h-8" />,
      features: [
        "Product strategy & planning",
        "User experience design",
        "MVP development",
        "Launch & deployment",
        "Post-launch support",
        "Growth optimization"
      ],
      color: "from-[#45a8e6] to-[#e9ecf1]"
    },
    {
      title: "API Development",
      description: "Robust and scalable APIs to power your applications and integrations",
      icon: <Server className="w-8 h-8" />,
      features: [
        "RESTful API design",
        "GraphQL APIs",
        "Authentication & authorization",
        "Rate limiting & caching",
        "API documentation",
        "Testing & monitoring"
      ],
      color: "from-[#45a8e6] to-[#76c5f3]"
    },
    {
      title: "Consulting",
      description: "Technical consulting to help you make informed decisions about your technology stack",
      icon: <BookOpen className="w-8 h-8" />,
      features: [
        "Technology stack review",
        "Architecture planning",
        "Performance optimization",
        "Security audits",
        "Code reviews",
        "Team training"
      ],
      color: "from-[#b7dfff] to-[#45a8e6]"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your goals, requirements, and vision for the project"
    },
    {
      step: "02",
      title: "Planning",
      description: "Defining the roadmap, deliverables, and timeline"
    },
    {
      step: "03",
      title: "Development",
      description: "Building, testing, and iterating on your solution"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploying, monitoring, and supporting your product"
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
            Services
          </motion.h1>
          <motion.p
            {...textReveal}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#0c1a26] dark:text-[#e9ecf1] mb-8 max-w-5xl mx-auto font-light text-pretty"
          >
            Comprehensive software development solutions tailored to your business needs
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
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-[#0c1a26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...cardHover}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br ${service.color} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              >
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#0c1a26] dark:text-[#e9ecf1] mb-4 text-balance">
                    {service.title}
                  </h3>
                  <p className="text-[#0c1a26] dark:text-[#e9ecf1] mb-6 leading-relaxed text-pretty">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-[#0c1a26] dark:text-[#e9ecf1]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-[#45a8e6] flex-shrink-0" />
                        <span className="text-pretty">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-[#f6faff] to-[#b7dfff] dark:from-[#1a2a3a] dark:to-[#2a4a6a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...textReveal}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-balance">
              My Process
            </h2>
            <p className="text-xl text-[#0c1a26] dark:text-[#e9ecf1] text-pretty">
              A proven methodology for delivering exceptional results
            </p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                {...cardHover}
                transition={{ delay: idx * 0.1 }}
                className="glass rounded-2xl p-8 text-center shadow-xl"
              >
                <motion.div 
                  className="text-3xl font-bold text-[#45a8e6] mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.step}
                </motion.div>
                <div className="text-xl font-semibold text-[#0c1a26] dark:text-[#e9ecf1] mb-2 text-balance">
                  {step.title}
                </div>
                <div className="text-[#0c1a26] dark:text-[#e9ecf1] text-base text-pretty">
                  {step.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
} 