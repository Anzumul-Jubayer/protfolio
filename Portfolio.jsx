import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Download, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ExternalLink, 
  Menu, 
  Sun, 
  Moon,
  CheckCircle,
  Code,
  Server,
  Leaf,
  Fire,
  GraduationCap,
  Certificate,
  UserGraduate,
  Send,
  MapPin
} from 'lucide-react';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  const skills = [
    { name: 'HTML', icon: '🌐', color: 'text-orange-600' },
    { name: 'CSS', icon: '🎨', color: 'text-blue-500' },
    { name: 'JavaScript', icon: '⚡', color: 'text-yellow-400' },
    { name: 'React', icon: '⚛️', color: 'text-cyan-400' },
    { name: 'Tailwind', icon: '💨', color: 'text-cyan-500' },
    { name: 'Node.js', icon: '🟢', color: 'text-green-500' },
    { name: 'Express.js', icon: '🚀', color: 'text-gray-500' },
    { name: 'MongoDB', icon: '🍃', color: 'text-green-600' },
    { name: 'Vercel', icon: '▲', color: 'text-gray-900 dark:text-white' },
    { name: 'Firebase', icon: '🔥', color: 'text-yellow-500' },
    { name: 'VS Code', icon: '💻', color: 'text-blue-500' },
    { name: 'Git', icon: '📝', color: 'text-orange-600' },
    { name: 'GitHub', icon: '🐙', color: 'text-gray-900 dark:text-white' }
  ];

  const projects = [
    {
      title: 'E-Commerce Analytics Dashboard',
      description: 'A comprehensive dashboard for monitoring e-commerce metrics. Features real-time sales tracking, inventory management alerts, and customer behavior analysis using advanced data visualization.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4mYOc8ceWQJrPoaINPS5R9W7SRkEU-r6-1gcgBwWMMSwXXGwwo4DTCkhs4MeI-mcLeqL8myqrXhjcuQFEu5fzy_ljmlhGkTKHxL3FzlLEGyePQNNZtBiSKffWVw1oewYJ2rQ0EzHvQlP_oFV-NIrbvDL5ISGgtKh0NDzgCd6_OKgAOVhiYjO3CFSUC3tpkX7cLh3GhCCCKtjY4McjDRd2ksqIewPwFtzbglbmQh3OlLbUtlSX7PQufTItKPMMyzvG7ImGMk2O3d90',
      tags: ['React', 'Node.js', 'MongoDB', 'D3.js']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool for agile teams. Implemented real-time updates with Socket.io and intuitive drag-and-drop interfaces for kanban boards.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9pJs0RVaqiMNeqGdhi3ODjG-38SvfJxRXu7OnFbb6FUop4MnQoebp8pjUnjbYhBIiS8gyHcuPyn_kDgdFNrwFfI9RPnNTTXEFAU05znMtk8v99h7GdRHX8N2KCwquvn-qU-KvFyUiVB0BhHOj2rLu7LDU7teiVLvmEkYYUvf5yOBuPsiv-yFzaxzPeIGf9aZOqcXcdc99RUosduWHipHz0gPscMzmlpD31T7bqmfTcQbzOUI1iqKYSMN7palIihv1GkNcIGd9m1YB',
      tags: ['MERN', 'Socket.io', 'Redux']
    },
    {
      title: 'Social Media Platform',
      description: 'A full-featured social network clone allowing users to post, comment, and like. Includes advanced authentication, image upload to cloud storage, and responsive design.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOjpVeQavKUYOiRYb1KnWWiS5fMeifuF9XkxNNpUkc4pyTgw-s8ZDg7ws9o2iDY1T052fsHfSudQm1EvaqGxrxqTHtmCkeElo462UjDBcdtQGdR341P3I5U4IrpUTrlq3lxnnkgKO8LWp_JB8mwuEQs9q01Mpo-KUcCcI80JojmGV3TWyUqVcTLSpvaaZfATBaPAPp6lMtqxlfniVf8cl9uPnHlw1GrvgiK11qfFfq0jTdo-1u5UpLwttGoQG1K3CDToXaXt7Diw_Z',
      tags: ['React', 'Firebase', 'Tailwind']
    }
  ];

  const education = [
    {
      title: 'Computer Science',
      institution: 'University of Dhaka',
      period: '2019 - 2023',
      description: 'Comprehensive study of computer science principles, software development lifecycles, and algorithms. Graduated with academic excellence.',
      details: ['Major in Software Engineering', 'Thesis: Web Scalability & Performance'],
      icon: <UserGraduate className="w-4 h-4" />
    },
    {
      title: 'MERN Stack Web Development',
      institution: 'Programming Hero',
      period: '2023',
      description: 'Intensive program focused on modern web technologies including React, Node.js, and MongoDB. Built 10+ full-stack projects during the course.',
      icon: <Code className="w-4 h-4" />
    },
    {
      title: 'AWS Cloud Practitioner',
      institution: 'Amazon Web Services',
      period: '2024',
      description: 'Foundational cloud certification validating overall understanding of the AWS Cloud platform.',
      icon: <Certificate className="w-4 h-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 lg:px-12 flex justify-between items-center backdrop-blur-sm bg-gray-50/80 dark:bg-gray-950/80 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="flex items-center gap-1 font-bold text-2xl tracking-tighter">
          <span className="text-gray-900 dark:text-white">A</span>
          <span className="text-blue-600">J</span>
        </div>
        
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <li><a className="hover:text-blue-600 transition-colors" href="#home">Home</a></li>
          <li><a className="hover:text-blue-600 transition-colors" href="#about">About me</a></li>
          <li><a className="hover:text-blue-600 transition-colors" href="#skills">Skills</a></li>
          <li><a className="hover:text-blue-600 transition-colors" href="#projects">Projects</a></li>
          
          <li><a className="hover:text-blue-600 transition-colors" href="#education">Education</a></li>
          <li><a className="hover:text-blue-600 transition-colors" href="#contact">Contact</a></li>
        </ul>
        
        <a href="#contact" className="hidden md:inline-flex rounded-full bg-blue-600 hover:bg-blue-700" size="sm">
          Let's Talk!
          <Send className="w-4 h-4 ml-2" />
        </a>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </Button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-10 lg:pt-40 lg:pb-0 min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute right-[-10%] bottom-0 w-[80vw] h-[80vw] md:w-[45vw] md:h-[45vw] bg-blue-600/40 dark:bg-blue-600/60 rounded-full blur-3xl -z-10 translate-y-1/4"></div>
        
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-0 items-center relative z-10 h-full">
          <div className="flex flex-col gap-8 lg:pr-10 order-2 lg:order-1 mb-20 lg:mb-0">
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-white text-gray-900 hover:text-blue-600">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-white text-gray-900 hover:text-blue-600">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-white text-gray-900 hover:text-blue-600">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                MERN Stack
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-blue-600">
                Developer
              </h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
              Hi! I'm Anzumul Jubayer, a passionate MERN Stack Developer. Always looking for problems to solve using code or just improving my workflow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button className="rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <div className="md:hidden">
                <Button variant="outline" className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Let's Talk!
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end items-end h-[400px] lg:h-[600px] w-full">
            <img 
              alt="Anzumul Jubayer Portrait" 
              className="relative z-20 h-full object-cover object-top rounded-b-3xl grayscale contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATMbUhJc6sLWcHUQg8KNhzNW-UlGZ4MIZFjtO8p2SpzGYSMryA-2AGgYjymhNIv0JV8JSy3SACdmdYz9BFyBZNdIsr-NtHAaxcdvf-vURQw3dAXHLIeKPH_DhdBx3YwtNNtvpPxBGiwHmiJlPhaMSyiNMfg_nNvXp_SGazuq8nDgIfSX6tCIFMyqorsuURuMFlqSphmKgDIKiKO628Ke68R6EsOgjo83FlBuMWXXKem-xwAuEaLfLbrhWR3tJGMUnILxCoPbobDpjH"
              style={{
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
            />
          </div>
        </div>
        
        <div className="absolute bottom-[-2%] left-0 w-full flex justify-between items-end px-4 lg:px-12 pointer-events-none select-none overflow-hidden pb-4 md:pb-0">
          <div className="text-[15vw] lg:text-[8rem] font-black leading-none text-gray-200 dark:text-white opacity-20 dark:opacity-90 relative z-10">
            Anzumul
          </div>
          <div className="text-[15vw] lg:text-[11rem] font-black leading-none opacity-40 relative z-0 transform -translate-x-10 lg:-translate-x-20"
               style={{
                 WebkitTextStroke: '2px rgba(0, 0, 0, 0.1)',
                 color: 'transparent'
               }}>
            Jubayer
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-700 rounded-3xl transform rotate-6 scale-[0.98] group-hover:rotate-3 transition-transform duration-500 opacity-20"></div>
              <Card className="relative rounded-3xl overflow-hidden shadow-2xl border-0">
                <img 
                  alt="Professional Headshot" 
                  className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR6dSUvi7TpxiWj1FcWT58NJMURnHYGwSrmkfI1wHdvKRed94Ie1ii3hGzejkBvt55YGu_5vZZ_sM8A__S7P-yMiRTozoGnL4GQY7v1dLHKfTkbwkCQH3TGJjnqHnpiSibJiHBSMzx9vJqo72m5-2kWUuzbFmyx4RGP42DpYn5kTERGB8FsPMCQd97Iq_9zEdAW0wdJo8_C9HOb0EyqwgC80U0_G0mPzH2IGyF3L1omcNfgHaybCneH7c4BKQN24mjAXrsLmjSIMxF"
                />
              </Card>
              
              <Card className="absolute -bottom-6 -right-6 p-6 shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600/10 p-3 rounded-full text-blue-600">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">3+</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Years Experience</div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="order-1 lg:order-2">
              <Badge variant="secondary" className="mb-6 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                About Me
              </Badge>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Crafting digital experiences with the <span className="text-blue-600">MERN Stack</span>.
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                I am a passionate Full Stack Developer with a deep love for JavaScript. My journey started with understanding the fundamentals of the web, which naturally evolved into mastering the React ecosystem and server-side logic. I specialize in building robust, scalable web applications while keeping user experience in check.
              </p>
              
              <div className="mb-10">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Core Competencies</h3>
                <ul className="space-y-3">
                  {[
                    'Full-Stack Development (MERN)',
                    'RESTful APIs & GraphQL',
                    'State Management (Redux, Context API)',
                    'Database Optimization (MongoDB)'
                  ].map((competency, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>{competency}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
              My Stack
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Technologies & Skills</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              I specialize in the MERN stack and modern development tools. Here are the technologies I work with to bring ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="group flex flex-col items-center justify-center p-6 hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300">
                <div className={`text-4xl lg:text-5xl ${skill.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{skill.icon}</span>
                </div>
                <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm md:text-base">{skill.name}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16 text-center">
            <Badge variant="secondary" className="mb-4 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
              Portfolio
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              A selection of projects that showcase my skills in solving complex problems through elegant code and system architecture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
                  <CardDescription className="text-sm mb-6 line-clamp-3">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Github className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-white dark:bg-gray-900 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-32">
              <Badge variant="secondary" className="mb-6 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                Education
              </Badge>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Academic Background & <span className="text-blue-600">Certifications</span>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                My academic journey has been driven by a curiosity for how systems work, from the lowest level of hardware to high-level software abstractions. Here is a summary of my formal education.
              </p>
              
              <Card className="hidden lg:block h-64 flex items-center justify-center group">
                <GraduationCap className="w-24 h-24 text-blue-600/10 group-hover:text-blue-600/20 transition-colors duration-500" />
              </Card>
            </div>
            
            <div className="relative space-y-12 pl-6 sm:pl-0">
              {education.map((edu, index) => (
                <div key={index} className="relative group">
                  <div className="hidden sm:flex absolute -left-12 top-2 w-8 h-8 rounded-full bg-blue-600/10 text-blue-600 items-center justify-center ring-4 ring-white dark:ring-gray-900 z-10">
                    {edu.icon}
                  </div>
                  
                  <Card className="p-8 hover:border-blue-600/50 transition-colors duration-300 relative hover:shadow-lg hover:shadow-blue-600/5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <CardTitle className="text-xl">{edu.title}</CardTitle>
                        <p className="text-blue-600 font-medium">{edu.institution}</p>
                      </div>
                      <Badge variant="outline" className="whitespace-nowrap">
                        {edu.period}
                      </Badge>
                    </div>
                    
                    <CardDescription className="text-sm leading-relaxed mb-4">
                      {edu.description}
                    </CardDescription>
                    
                    {edu.details && (
                      <ul className="space-y-2">
                        {edu.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-950 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
              Get in Touch
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Let's Work Together</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Have a project in mind, want to discuss the latest MERN stack technologies, or just want to say hi? I'm Anzumul, and I'm always open to new opportunities and interesting conversations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <Card className="p-8 shadow-xl">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium mb-2 block">Name</Label>
                      <Input id="name" placeholder="John Doe" className="rounded-xl" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-2 block">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="rounded-xl" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium mb-2 block">Subject</Label>
                    <Input id="subject" placeholder="Project Discussion" className="rounded-xl" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium mb-2 block">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project..." 
                      className="rounded-xl h-40 resize-none"
                    />
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/30">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="flex flex-col gap-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="p-6 hover:border-blue-600/50 transition-colors group">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Email Me</h4>
                      <a className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors" href="mailto:anzumul@example.com">
                        anzumul@example.com
                      </a>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 hover:border-blue-600/50 transition-colors group">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">LinkedIn</h4>
                      <a className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors" href="#">
                        @anzumuljubayer
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="flex gap-4 items-center">
                <span className="text-gray-600 dark:text-gray-300 font-medium">Follow me on:</span>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-500 hover:text-white hover:border-blue-500">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-pink-500 hover:text-white hover:border-pink-500">
                    <Instagram className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <Card className="flex-grow h-[300px] lg:h-auto min-h-[300px] overflow-hidden group">
                <div className="relative h-full">
                  <iframe 
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223908687!2d90.27923710646989!3d23.780887456211758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1716382000000!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 pointer-events-none border-4 border-white/20 dark:border-black/20 rounded-lg z-10"></div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 text-center relative z-10">
        <div className="container mx-auto px-6">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2024 Anzumul Jubayer. Built with ❤️ and Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Theme Toggle */}
      <Button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg"
        size="icon"
        variant="outline"
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </Button>
    </div>
  );
};

export default Po