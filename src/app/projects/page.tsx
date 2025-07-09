import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

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
      external: false
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
      external: true
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
      external: false
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
      external: false
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
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What We're Building at FrostByte Lab
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            These are early-stage tools, platforms, and experiments currently being developed at FrostByte Lab. More projects are coming soon.
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
              Current Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Active development and live platforms
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
                    <p className="text-sm opacity-75">Project Preview</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                    {getStatusBadge(project.status)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {project.subtitle}
                    </p>
                  )}
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
                  {project.external ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      Visit Project →
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-gray-500 dark:text-gray-400 font-medium">
                      {project.status === 'in-progress' ? 'In Development' : 'Coming Soon'}
                    </span>
                  )}
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
              Complete portfolio of current and upcoming projects
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
                    {getStatusBadge(project.status)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {project.subtitle}
                    </p>
                  )}
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
                  {project.external ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >
                      Visit Project →
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-gray-500 dark:text-gray-400 text-sm font-medium">
                      {project.status === 'in-progress' ? 'In Development' : 'Coming Soon'}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What's Next
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              More innovative projects are in the pipeline
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We're constantly experimenting with new technologies and building innovative solutions. 
              Stay tuned for more AI-powered tools, mobile apps, and digital products.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Something Together?
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