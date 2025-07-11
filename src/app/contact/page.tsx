'use client';

import Navigation from '@/components/layout/Navigation';
import ContactForm from '@/components/ui/ContactForm';
import { 
  motion, 
  staggerContainer, 
  cardHover, 
  textReveal,
  fadeInLeft,
  fadeInRight 
} from '@/lib/motion';
import { Mail, Clock, MessageSquare, ArrowRight } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hello@frostbytelab.com",
      link: "mailto:hello@frostbytelab.com"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/chrisklemz",
      link: "https://linkedin.com/in/chrisklemz"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      value: "Within 24 hours"
    }
  ];

  const services = [
    "Web Development",
    "AI Integration", 
    "Mobile Apps",
    "API Development",
    "Technical Consulting",
    "Digital Products"
  ];

  return (
    <div className="relative">
      <Navigation />

      {/* Hero Section */}
              <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-background via-muted to-border py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            {...textReveal}
            className="text-5xl md:text-6xl font-bold mb-6 gradient-text text-balance"
          >
            Let's Build Something Amazing
          </motion.h1>
          <motion.p
            {...textReveal}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground mb-8 max-w-5xl mx-auto font-light text-pretty"
          >
            Ready to start your next project? Let's discuss how we can bring your vision to life with cutting-edge technology and innovative solutions.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              {...fadeInLeft}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text text-balance">
                Get in Touch
              </h2>
              <p className="text-xl text-foreground mb-8 text-pretty">
                Tell me about your project and I'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              {...fadeInRight}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 text-balance">
                  Contact Information
                </h3>
                <motion.div 
                  {...staggerContainer}
                  className="space-y-6"
                >
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      {...cardHover}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-foreground text-balance">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <motion.a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            {info.value}
                          </motion.a>
                        ) : (
                          <p className="text-foreground text-pretty">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div 
                {...cardHover}
                className="glass rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-4 text-balance">
                  Services I Offer
                </h3>
                <motion.div 
                  {...staggerContainer}
                  className="grid grid-cols-2 gap-2"
                >
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      {...cardHover}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center text-foreground"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-pretty">{service}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div 
                {...cardHover}
                className="glass rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-4 text-balance">
                  What to Expect
                </h3>
                <motion.ul 
                  {...staggerContainer}
                  className="space-y-3 text-foreground"
                >
                  {[
                    "Quick response within 24 hours",
                    "Free initial consultation and project assessment",
                    "Detailed proposal with timeline and pricing",
                    "Ongoing communication throughout development"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      {...cardHover}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                      <span className="text-pretty">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-muted to-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...textReveal}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-foreground text-pretty">
              Common questions about working with FrostByte Lab
            </p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="space-y-6"
          >
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on complexity, but most projects take 4-12 weeks from start to finish. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work with startups and small businesses?",
                answer: "Absolutely! I specialize in working with startups and small businesses, offering flexible solutions that fit your budget and timeline."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I work with modern technologies including React, Next.js, TypeScript, Python, Django, and AI/ML integration. I choose the best tech stack for each project."
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer: "Yes, I offer post-launch support including bug fixes, updates, and maintenance. We can discuss ongoing support options during project planning."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                {...cardHover}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-3 text-balance">
                  {faq.question}
                </h3>
                <p className="text-foreground leading-relaxed text-pretty">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
} 