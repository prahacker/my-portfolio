"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronRight, Code, Server, Shield, X } from "lucide-react"
import Image from "next/image"
import type React from "react"
import { ThemeProvider } from "@/providers/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY) < 10) {
        ticking = false
        return
      }

      setIsScrolled(scrollY > 50)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const timelineData = {
    education: [
      {
        date: "Aug 2022 – May 2026",
        title: "SRM Institute of Science and Technology, Chennai, TN",
        details: "GPA: 9.66 — SRMJEEE Rank: 183",
        icon: "🎓",
      },
      {
        date: "May 2020 – June 2022",
        title: "Hiranandani Foundation School, Mumbai, MH",
        details: "ISC, Percentage: 73%",
        icon: "🏫",
      },
      {
        date: "April 2007 – April 2020",
        title: "DAV Public School, Thane, MH",
        details: "Percentage: 89%",
        icon: "📚",
      },
    ],
    experience: [
      {
        date: "December 2024 – January 2025",
        title: "Baremetal Automation Intern",
        company: "Tech Mahindra, Bangalore",
        description: "Using ansible and redfish API to automate setup of OS and other systems on HP baremetal servers.",
        icon: "🏦",
      },
      {
        date: "June 2024 – July 2024",
        title: "DevOps Intern",
        company: "ICICI Bank, Mumbai",
        description:
          "Developed CI/CD pipelines using Jenkins for flutter app and also created diagrams for DevOps infrastructure.",
        icon: "🏦",
      },
      {
        date: "June 2023 – July 2023",
        title: "Cyber Security Intern",
        company: "ProgIST, Mumbai",
        description:
          "Conducted security tests on applications including mobile app using various tools like burpsuite in virtual environment.",
        icon: "🔒",
      },
      {
        date: "2019 – 2022",
        title: "Bug Bounty Hunter",
        company: "OpenBugBounty",
        description: "Collaborated with companies to resolve web vulnerabilities, enhancing security.",
        icon: "🐛",
      },
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect - Associate",
        date: "Jan 2025 – Jan 2028",
        icon: "🏗️",
        verificationUrl: "https://aws.amazon.com/verification",
        verificationId: "44a39498180b4ad8a227a557a14f8b9b",
        imageUrl:
          "https://profileimagesfor.s3.ap-south-1.amazonaws.com/Screenshot+2025-02-07+at+1.37.19%E2%80%AFPM.png",
        issueDate: "January 31, 2025",
      },
      {
        name: "AWS Certified Cloud Practitioner",
        date: "May 2024 – May 2027",
        icon: "☁️",
        verificationUrl: "https://aws.amazon.com/verification",
        verificationId: "db76941f2a214be88ffd81f20e42511e",
        imageUrl:
          "https://profileimagesfor.s3.ap-south-1.amazonaws.com/Screenshot+2025-02-07+at+1.35.59%E2%80%AFPM.png",
        issueDate: "May 31, 2024",
      },
      {
        name: "Certified Ethical Hacker",
        date: "Dec 2023 – Dec 2026",
        icon: "🕵️",
        imageUrl: "https://profileimagesfor.s3.ap-south-1.amazonaws.com/Screenshot+2025-02-07+at+1.36.42%E2%80%AFPM.png",
        issueDate: "18 December, 2023",
      },
      {
        name: "Red Hat Certified Specialist in Containers",
        date: "Aug 2024 – Aug 2027",
        icon: "🐳",
        imageUrl: "https://profileimagesfor.s3.ap-south-1.amazonaws.com/Screenshot+2025-02-07+at+1.36.16%E2%80%AFPM.png",
        issueDate: "August 08, 2024",
      },
      {
        name: "Red Hat Certified System Administrator",
        date: "Dec 2023 – Dec 2026",
        icon: "🖥️",
        imageUrl: "https://profileimagesfor.s3.ap-south-1.amazonaws.com/Screenshot+2025-02-07+at+1.36.59%E2%80%AFPM.png",
        issueDate: "01 December, 2023",
      },
    ],
  }

  const projects = [
    {
      name: "Portfolio Tracker",
      description:
        "Developed a ReactJS app to track daily portfolio P&L, integrated with Sensex and Nifty for comparison and holdings split visualisation. Used AWS RDS, NodeJS, ReactJS, Python and JWT.",
      link: "https://github.com/prahacker/PMS-react",
      icon: <Code className="w-10 h-10 text-blue-400" />,
    },
    {
      name: "Directory Crawler",
      description:
        "Created a Python tool to search directories via command line, integrated with AWS S3 for cloud storage.",
      link: "https://github.com/prahacker/crawler",
      icon: <Server className="w-10 h-10 text-green-400" />,
    },
    {
      name: "Jenkins Groovy Scripts",
      description: "Authored Jenkins scripts for Flutter and .NET applications with CD pipeline enhancements.",
      link: "https://github.com/prahacker/groovy-scripts",
      icon: <Shield className="w-10 h-10 text-purple-400" />,
    },
  ]

  const skills = [
    { category: "Languages", items: ["C++", "Python", "SQL", "Node.js"] },
    { category: "DevOps Tools", items: ["Jenkins", "Maven", "Ansible", "AWS", "Podman", "Terraform"] },
    { category: "Technologies", items: ["GitHub", "Linux", "Cloud Computing", "Containers", "Virtualization"] },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Teamwork", "Collaboration", "Time management", "Adaptability"],
    },
  ]

  interface TimelineItemProps {
    item: {
      title?: string
      name?: string
      date: string
      company?: string
      details?: string
      description?: string
      icon: string
      verificationUrl?: string
      verificationId?: string
      imageUrl?: string
      issueDate?: string
    }
    index: number
  }

  const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
    const isEven = index % 2 === 0
    return (
      <div className={`mb-8 flex justify-between items-center w-full ${isEven ? "flex-row-reverse" : "flex-row"}`}>
        <div className={`w-5/12 ${isEven ? "text-right" : "text-left"}`}>
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
            {item.imageUrl && (
              <button
                onClick={() => setSelectedCertificate(item)}
                className="mt-2 text-blue-400 hover:underline cursor-pointer"
              >
                View Certificate
              </button>
            )}
          </motion.div>
        </div>
        <div className="z-20 flex items-center order-1 bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl w-12 h-12 rounded-full">
          <h1 className="mx-auto text-2xl text-white">{item.icon}</h1>
        </div>
        <div className="w-5/12"></div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-gray-900 dark:text-white">
        <motion.header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md" : "bg-transparent"
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <motion.h1
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Prakhar
            </motion.h1>
            <nav className="hidden md:flex space-x-4">
              {["about", "education", "experience", "projects", "certifications", "skills"].map((item) => (
                <motion.button
                  key={item}
                  className={`text-sm font-medium ${
                    activeTab === item
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  }`}
                  onClick={() => setActiveTab(item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
            </nav>
            <div className="flex space-x-2 items-center">
              <ThemeToggle />
              <motion.a
                href="https://github.com/prahacker"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                >
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
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </motion.a>
              <motion.a href="mailto:pbpmdst@gmail.com" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </motion.a>
            </div>
          </div>
        </motion.header>

        <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-500 dark:to-pink-500">
                DevOps Engineer &amp; Cyber Security Enthusiast
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Passionate about building secure and scalable systems
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "about" && (
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <Card className="bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 border-gray-200 dark:border-gray-600">
                        <CardHeader>
                          <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">About Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            I&apos;m a passionate DevOps Engineer and Cyber Security Enthusiast with a strong foundation
                            in cloud technologies and secure system design. My goal is to bridge the gap between
                            development and operations while ensuring robust security measures are in place.
                          </p>
                          <p className="text-gray-600 dark:text-gray-300">
                            With expertise in CI/CD pipelines, cloud infrastructure, and ethical hacking, I strive to
                            create efficient, scalable, and secure solutions for modern software development challenges.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative rounded-lg overflow-hidden shadow-2xl">
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
                    </div>
                  </div>
                )}

                {(activeTab === "education" || activeTab === "experience" || activeTab === "certifications") && (
                  <div className="container mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                      <div
                        className="border-2-2 absolute border-opacity-20 border-gray-300 dark:border-gray-700 h-full border"
                        style={{ left: "50%" }}
                      ></div>
                      {timelineData[activeTab].map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "projects" && (
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                      <div key={index}>
                        <Card className="bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 border-gray-200 dark:border-gray-600 h-full flex flex-col">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-blue-600 dark:text-blue-400">{project.name}</CardTitle>
                              {project.icon}
                            </div>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mt-auto"
                              whileHover={{ x: 5 }}
                            >
                              View Project
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </motion.a>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="grid gap-8 md:grid-cols-2">
                    {skills.map((skillCategory, index) => (
                      <div key={index}>
                        <Card className="bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 border-gray-200 dark:border-gray-600">
                          <CardHeader>
                            <CardTitle className="text-blue-600 dark:text-blue-400">{skillCategory.category}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              {skillCategory.items.map((skill, skillIndex) => (
                                <motion.div key={skillIndex} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Badge
                                    variant="secondary"
                                    className="bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20"
                                  >
                                    {skill}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-[#1b2b3a] p-8 rounded-lg max-w-2xl w-full relative">
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                {selectedCertificate.name}
              </h2>
              <div className="mb-8">
                <Image
                  src={selectedCertificate.imageUrl || "/placeholder.svg"}
                  alt={selectedCertificate.name}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              {selectedCertificate.verificationId && (
                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 mb-4">
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    VALIDATION NUMBER: {selectedCertificate.verificationId}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    VALIDATE AT:{" "}
                    <a
                      href={selectedCertificate.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {selectedCertificate.verificationUrl}
                    </a>
                  </p>
                </div>
              )}
              <div className="text-gray-600 dark:text-gray-300">
                <p>Issue Date: {selectedCertificate.issueDate || "Not specified"}</p>
                <p>Expiration Date: {selectedCertificate.date.split("–")[1].trim()}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  )
}

