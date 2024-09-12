"use client";

import { useState, useEffect, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronRight, Code, Server, Shield, Menu, X } from "lucide-react"
import Image from 'next/image'
import Head from 'next/head'

interface TimelineItemType {
  date: string;
  title?: string;
  name?: string;
  details?: string;
  company?: string;
  description?: string;
  icon: string;
  image?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg p-6 max-w-3xl w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<TimelineItemType | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const timelineData: { education: TimelineItemType[], experience: TimelineItemType[], certifications: TimelineItemType[] } = {
    education: [
      { date: "Aug 2022 – May 2026", title: "SRM Institute of Science and Technology, Chennai, TN", details: "GPA: 9.66 — SRMJEEE Rank: 183", icon: "🎓" },
      { date: "May 2020 – June 2022", title: "Hiranandani Foundation School, Mumbai, MH", details: "ISC, Percentage: 73%", icon: "🏫" },
      { date: "April 2007 – April 2020", title: "DAV Public School, Thane, MH", details: "Percentage: 89%", icon: "📚" },
    ],
    experience: [
      { date: "June 2024 – July 2024", title: "DevOps Intern", company: "ICICI Bank, Mumbai", description: "Developed CI/CD pipelines using Jenkins for flutter app and also created diagrams for DevOps infrastructure.", icon: "🏦" },
      { date: "June 2023 – July 2023", title: "Cyber Security Intern", company: "ProgIST, Mumbai", description: "Conducted security tests on applications including mobile app using various tools like burpsuite in virtual environment.", icon: "🔒" },
      { date: "2019 – 2022", title: "Bug Bounty Hunter", company: "OpenBugBounty", description: "Collaborated with companies to resolve web vulnerabilities, enhancing security.", icon: "🐛" },
    ],
    certifications: [
      { date: "May 2024 – May 2027", name: "AWS Certified Cloud Practitioner", icon: "☁️", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-09-12%20at%205.59.07%E2%80%AFPM-BOzqtDPZp93RXGni3e1QnvSaSVUm0w.png" },
      { date: "Aug 2024 – Aug 2027", name: "Red Hat Certified Specialist in Containers", icon: "🐳", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-09-12%20at%205.58.41%E2%80%AFPM-jExoB6jgW8oyjf6xYBjlOV09MYPkgM.png" },
      { date: "Dec 2023 – Dec 2026", name: "Certified Ethical Hacker", icon: "🕵️", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-09-12%20at%205.58.54%E2%80%AFPM-BthWDU0WQL3l3TQNFO9OD3pN4OdVBq.png" },
      { date: "Dec 2023 – Dec 2026", name: "Red Hat Certified System Administrator", icon: "🖥️", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-09-12%20at%205.58.27%E2%80%AFPM-ffHZqmm5jERV3UtA87YlX1lwoQ0P6k.png" },
    ],
  }

  const projects = [
    { name: "Portfolio Tracker", description: "Developed a ReactJS app to track daily portfolio P&L, integrated with Sensex and Nifty for comparison and holdings split visualisation. Used AWS RDS, NodeJS, ReactJS, Python and JWT.", link: "https://github.com/prahacker/PMS-react", icon: <Code className="w-10 h-10 text-blue-400" /> },
    { name: "Directory Crawler", description: "Created a Python tool to search directories via command line, integrated with AWS S3 for cloud storage.", link: "https://github.com/prahacker/crawler", icon: <Server className="w-10 h-10 text-green-400" /> },
    { name: "Jenkins Groovy Scripts", description: "Authored Jenkins scripts for Flutter and .NET applications with CD pipeline enhancements.", link: "https://github.com/prahacker/groovy-scripts", icon: <Shield className="w-10 h-10 text-purple-400" /> },
  ]

  const skills = [
    { category: "Languages", items: ["C++", "Python", "SQL", "Node.js"] },
    { category: "DevOps Tools", items: ["Jenkins", "Maven", "Ansible", "AWS", "Podman", "Terraform"] },
    { category: "Technologies", items: ["GitHub", "Linux", "Cloud Computing", "Containers", "Virtualization"] },
    { category: "Soft Skills", items: ["Problem Solving", "Teamwork", "Collaboration", "Time management", "Adaptability"] },
  ]

  const TimelineItem: React.FC<{ item: TimelineItemType; index: number }> = ({ item, index }) => {
    const isEven = index % 2 === 0
    return (
      <motion.div
        className={`mb-8 flex justify-between items-center w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
          <motion.div
            className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-xl p-6"
            whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(66, 153, 225, 0.5)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="mb-3 font-bold text-white text-xl">{item.title || item.name}</h3>
            <p className="text-sm leading-snug tracking-wide text-blue-200 text-opacity-100">{item.date}</p>
            {item.company && <p className="text-blue-400">{item.company}</p>}
            {item.details && <p className="text-gray-300 mt-2">{item.details}</p>}
            {item.description && <p className="text-gray-300 mt-2">{item.description}</p>}
            {item.image && (
              <Button
                variant="ghost"
                className="mt-4 text-blue-400 hover:text-blue-300"
                onClick={() => setSelectedCertificate(item)}
              >
                View Certificate
              </Button>
            )}
          </motion.div>
        </div>
        <div className="z-20 flex items-center order-1 bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl w-12 h-12 rounded-full my-4 md:my-0">
          <h1 className="mx-auto text-2xl text-white">{item.icon}</h1>
        </div>
        <div className="w-full md:w-5/12 hidden md:block"></div>
      </motion.div>
    )
  }

  return (
    <>
      <Head>
        <title>Prakhar | DevOps Wizard &#x1F9D9;&#x200D;&#x2642;&#xFE0F;</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
        <motion.header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <motion.h1
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Prakhar
            </motion.h1>
            <nav className="hidden md:flex space-x-4">
              {['about', 'education', 'experience', 'projects', 'certifications', 'skills'].map((item) => (
                <motion.button
                  key={item}
                  className={`text-sm font-medium ${activeTab === item ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
                  onClick={() => setActiveTab(item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
            </nav>
            <div className="flex space-x-2">
              <motion.a
                href="https://github.com/prahacker"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="outline" size="icon" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/prakhar-tripathi-1ba3651a7/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="outline" size="icon" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </motion.a>
              <motion.a
                href="mailto:pbpmdst@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="outline" size="icon" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </motion.a>
              <motion.button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="h-6 w-6 text-gray-300" />
              </motion.button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-gray-900 py-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {['about', 'education', 'experience', 'projects', 'certifications', 'skills'].map((item) => (
                <motion.button
                  key={item}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium ${activeTab === item ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
                  onClick={() => {
                    setActiveTab(item)
                    setIsMobileMenuOpen(false)
                  }}
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
            </motion.div>
          )}
        </motion.header>

        <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">DevOps Engineer &amp; Cyber Security Enthusiast</h2>
              <p className="text-xl text-gray-400">Passionate about building secure and scalable systems</p>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'about' && (
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600">
                        <CardHeader>
                          <CardTitle className="text-2xl text-blue-400">About Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 mb-4">
                            I&#39;m a passionate DevOps Engineer and Cyber Security Enthusiast with a strong foundation in cloud technologies and secure system design. My goal is to bridge the gap between development and operations while ensuring robust security measures are in place.
                          </p>
                          <p className="text-gray-300">
                            With expertise in CI/CD pipelines, cloud infrastructure, and ethical hacking, I strive to create efficient, scalable, and secure solutions for modern software development challenges.
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                    <motion.div
                      className="relative rounded-lg overflow-hidden shadow-2xl"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-09-11-19-10-23-P0TTCf3n3cxvMb1BR306HSbsMGYCcq.jpg"
                        alt="Prakhar at a festive event"
                        width={600}
                        height={800}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl font-bold mb-2">Embracing Culture and Technology</h3>
                        <p className="text-sm">Balancing traditional values with cutting-edge tech solutions</p>
                      </div>
                    </motion.div>
                  </div>
                )}

                {(activeTab === 'education' || activeTab === 'experience' || activeTab === 'certifications') && (
                  <div className="container mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                      <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2 hidden md:block"></div>
                      {timelineData[activeTab].map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600 h-full flex flex-col">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-blue-400">{project.name}</CardTitle>
                              {project.icon}
                            </div>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:underline inline-flex items-center mt-auto"
                              whileHover={{ x: 5 }}
                            >
                              View Project
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </motion.a>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="grid gap-8 md:grid-cols-2">
                    {skills.map((skillCategory, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600">
                          <CardHeader>
                            <CardTitle className="text-blue-400">{skillCategory.category}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              {skillCategory.items.map((skill, skillIndex) => (
                                <motion.div
                                  key={skillIndex}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                    {skill}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      <Modal isOpen={!!selectedCertificate} onClose={() => setSelectedCertificate(null)}>
        {selectedCertificate && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{selectedCertificate.name}</h2>
            {selectedCertificate.image ? (
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.name || "Certificate"}
                width={800}
                height={600}
                className="mx-auto"
              />
            ) : (
              <p>No image available for this certificate</p>
            )}
          </div>
        )}
      </Modal>
    </>
  )
}
