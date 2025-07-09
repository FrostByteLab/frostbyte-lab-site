import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with Next.js, featuring AI-powered product recommendations and seamless payment integration.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Stripe", "OpenAI", "Tailwind CSS"],
      category: "Web Development",
      link: "#",
      featured: true
    },
    {
      title: "AI Chatbot Assistant",
      description: "Custom AI chatbot integrated with business knowledge base, providing instant customer support and lead qualification.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "OpenAI API", "Node.js", "MongoDB", "WebSocket"],
      category: "AI Integration",
      link: "#",
      featured: true
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with personalized workout plans and progress analytics.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "Redux", "HealthKit", "Google Fit"],
      category: "App Development",
      link: "#",
      featured: false
    },
    {
      title: "Real Estate Dashboard",
      description: "Comprehensive real estate management dashboard with property listings, analytics, and client management.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "AWS"],
      category: "Web Development",
      link: "#",
      featured: false
    },
    {
      title: "SaaS Analytics Platform",
      description: "Business intelligence platform providing real-time analytics and insights for SaaS companies.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Python", "TensorFlow", "Redis", "Docker"],
      category: "Digital Products",
      link: "#",
      featured: false
    },
    {
      title: "API Gateway Service",
      description: "Scalable API gateway with authentication, rate limiting, and monitoring for microservices architecture.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "Express", "Redis", "JWT", "Prometheus"],
      category: "API Development",
      link: "#",
      featured: false
    }
  ];

  const categories = ["All", "Web Development", "AI Integration", "App Development", "Digital Products", "API Development"];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Showcasing innovative solutions and successful client projects
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Highlighting some of my most impactful work
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-200">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm opacity-75">Project Screenshot</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    View Project Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              All Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A comprehensive portfolio of my work across different technologies and industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700">
                <div className="aspect-video bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs opacity-75">Project Preview</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Detailed insights into project challenges, solutions, and outcomes
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                E-Commerce Platform Transformation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Legacy system with poor performance and limited scalability
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Modern Next.js platform with AI recommendations and optimized UX
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    300% increase in conversion rate, 50% faster load times
                  </p>
                </div>
              </div>
              <Link
                href="#"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Read Full Case Study →
              </Link>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                AI-Powered Customer Support
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    High support ticket volume overwhelming customer service team
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Custom AI chatbot with business knowledge integration
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    70% reduction in support tickets, 24/7 customer assistance
                  </p>
                </div>
              </div>
              <Link
                href="#"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Read Full Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create something amazing together. Get in touch to discuss your project requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </MainLayout>
  );
} 