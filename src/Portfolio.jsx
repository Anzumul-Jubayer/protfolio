import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  GraduationCap,
  Award,
  User,
  Send,
  X,
  ArrowRight,
  Phone,
  MessageCircle,
  ChevronUp
} from 'lucide-react';

// Import technology icons from react-icons
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub,
  FaCode
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiVercel, 
  SiFirebase,
  SiNextdotjs
} from 'react-icons/si';

// Import hero image
import heroImage from '@/assets/hero.png';
import aboutImage from '@/assets/about.png';
import styleHubImage from '@/assets/style-Hub.png';
import ecoImage from '@/assets/eco.png';
import chefImage from '@/assets/chef.png';
import resumePdf from '@/assets/Resume.pdf';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // About section refs
  const aboutRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutBadgeRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const aboutDescriptionRef = useRef(null);
  const aboutCompetenciesRef = useRef(null);
  const aboutButtonRef = useRef(null);
  
  // Skills section refs
  const skillsRef = useRef(null);
  const skillsBadgeRef = useRef(null);
  const skillsTitleRef = useRef(null);
  const skillsDescriptionRef = useRef(null);
  const skillCardsRef = useRef([]);
  
  // Projects section refs
  const projectsRef = useRef(null);
  const projectsBadgeRef = useRef(null);
  const projectsTitleRef = useRef(null);
  const projectsDescriptionRef = useRef(null);
  const projectCardsRef = useRef([]);
  const projectsButtonRef = useRef(null);
  
  // Typewriter animation state
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Back to top button visibility handler
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);

    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // About section animations
    const initAboutAnimations = () => {
      if (aboutRef.current) {
        // Set initial states
        gsap.set(aboutImageRef.current, { x: -100, opacity: 0 });
        gsap.set(aboutBadgeRef.current, { y: 30, opacity: 0 });
        gsap.set(aboutTitleRef.current, { y: 50, opacity: 0 });
        gsap.set(aboutDescriptionRef.current, { y: 30, opacity: 0 });
        gsap.set(aboutCompetenciesRef.current, { y: 30, opacity: 0 });
        gsap.set(aboutButtonRef.current, { y: 30, opacity: 0 });

        // Create timeline with ScrollTrigger
        const aboutTl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        aboutTl
          .to(aboutImageRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
          })
          .to(aboutBadgeRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.6")
          .to(aboutTitleRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
          }, "-=0.4")
          .to(aboutDescriptionRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.4")
          .to(aboutCompetenciesRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.3")
          .to(aboutButtonRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.2");
      }
    };

    // Skills section continuous animations
    const initSkillsAnimations = () => {
      if (skillsRef.current) {
        // Initial entrance animations with ScrollTrigger
        gsap.set(skillsBadgeRef.current, { y: 30, opacity: 0 });
        gsap.set(skillsTitleRef.current, { y: 50, opacity: 0 });
        gsap.set(skillsDescriptionRef.current, { y: 30, opacity: 0 });
        gsap.set(skillCardsRef.current, { y: 50, opacity: 0, scale: 0.8 });

        // Entrance timeline
        const skillsEntranceTl = gsap.timeline({
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        skillsEntranceTl
          .to(skillsBadgeRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          })
          .to(skillsTitleRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
          }, "-=0.4")
          .to(skillsDescriptionRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.4")
          .to(skillCardsRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)"
          }, "-=0.3");

        // Continuous floating animations for skill cards
        skillCardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.to(card, {
              y: -10,
              duration: 2 + (index * 0.2),
              repeat: -1,
              yoyo: true,
              ease: "power2.inOut",
              delay: index * 0.3
            });

            // Continuous rotation for icons
            const icon = card.querySelector('.skill-icon');
            if (icon) {
              gsap.to(icon, {
                rotation: 360,
                duration: 8 + (index * 0.5),
                repeat: -1,
                ease: "none",
                delay: index * 0.2
              });
            }

            // Continuous scale pulse
            gsap.to(card, {
              scale: 1.05,
              duration: 3 + (index * 0.3),
              repeat: -1,
              yoyo: true,
              ease: "power2.inOut",
              delay: index * 0.4
            });
          }
        });
      }
    };

    // Projects section animations
    const initProjectsAnimations = () => {
      if (projectsRef.current) {
        // Set initial states
        gsap.set(projectsBadgeRef.current, { y: 30, opacity: 0 });
        gsap.set(projectsTitleRef.current, { y: 50, opacity: 0 });
        gsap.set(projectsDescriptionRef.current, { y: 30, opacity: 0 });
        gsap.set(projectCardsRef.current, { y: 80, opacity: 0, rotationY: 15 });
        gsap.set(projectsButtonRef.current, { y: 30, opacity: 0 });

        // Create timeline with ScrollTrigger
        const projectsTl = gsap.timeline({
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        projectsTl
          .to(projectsBadgeRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          })
          .to(projectsTitleRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
          }, "-=0.4")
          .to(projectsDescriptionRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.4")
          .to(projectCardsRef.current, {
            y: 0,
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
          }, "-=0.3")
          .to(projectsButtonRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.4");

        // Add hover animations for project cards
        projectCardsRef.current.forEach((card, index) => {
          if (card) {
            card.addEventListener('mouseenter', () => {
              gsap.to(card, {
                y: -10,
                scale: 1.02,
                rotationY: 5,
                duration: 0.4,
                ease: "power2.out"
              });
            });

            card.addEventListener('mouseleave', () => {
              gsap.to(card, {
                y: 0,
                scale: 1,
                rotationY: 0,
                duration: 0.4,
                ease: "power2.out"
              });
            });
          }
        });
      }
    };

    // Hide loading screen after 2.5 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Start typewriter animation after loading
    const typewriterTimer = setTimeout(() => {
      startTypewriterAnimation();
    }, 3000);

    // Initialize about animations after loading
    const aboutAnimationTimer = setTimeout(() => {
      initAboutAnimations();
    }, 3500);

    // Initialize skills animations after loading
    const skillsAnimationTimer = setTimeout(() => {
      initSkillsAnimations();
    }, 4000);

    // Initialize projects animations after loading
    const projectsAnimationTimer = setTimeout(() => {
      initProjectsAnimations();
    }, 4500);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loadingTimer);
      clearTimeout(typewriterTimer);
      clearTimeout(aboutAnimationTimer);
      clearTimeout(skillsAnimationTimer);
      clearTimeout(projectsAnimationTimer);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  // Continuous typewriter animation function
  const startTypewriterAnimation = () => {
    const texts = ['MERN Stack', 'Full Stack'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;
    
    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        setTypewriterText(currentText.substring(0, charIndex - 1));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(type, 500);
          return;
        }
        
        setTimeout(type, deleteSpeed);
      } else {
        setTypewriterText(currentText.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(type, pauseTime);
          return;
        }
        
        setTimeout(type, typeSpeed);
      }
    };
    
    type();
  };

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const downloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Anzumul_Jubayer_Resume.pdf'; // Custom filename for download
    link.target = '_blank'; // Open in new tab as fallback
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setShowProjectDetails(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeProjectDetails = () => {
    setShowProjectDetails(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const skills = [
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-600' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900 dark:text-white' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'Vercel', icon: SiVercel, color: 'text-gray-900 dark:text-white' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
    { name: 'VS Code', icon: FaCode, color: 'text-blue-500' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'GitHub', icon: FaGithub, color: 'text-gray-900 dark:text-white' }
  ];

  const projects = [
    {
      id: 1,
      title: 'StyleHub - Modern E-commerce Platform',
      description: 'A full-stack e-commerce clothing store built with Next.js 15, featuring modern UI/UX, MongoDB integration, and hybrid authentication system. The platform supports both regular users and administrators with role-based access control, product management, and an intuitive shopping experience.',
      image: styleHubImage,
      tags: ['Next.js', 'MongoDB', 'NextAuth.js', 'Tailwind CSS'],
      techStack: ['Next.js 15', 'React 18', 'Tailwind CSS', 'MongoDB', 'NextAuth.js', 'Framer Motion', 'Lucide React', 'React Hot Toast', 'Vercel'],
      liveLink: 'https://stylehub-plmi.vercel.app',
      githubLink: 'https://github.com/Anzumul-Jubayer/stylehub',
      challenges: [
        'Implementing hybrid authentication system with NextAuth.js and custom demo fallback',
        'Building role-based access control for admin and user permissions',
        'Creating responsive design with mobile-first approach and adaptive layouts',
        'Managing MongoDB integration with Next.js API routes for product management'
      ],
      improvements: [
        'Add shopping cart functionality with persistent state',
        'Implement payment gateway integration (Stripe/PayPal)',
        'Create order tracking and history for users',
        'Add product search and advanced filtering options'
      ]
    },
    {
      id: 2,
      title: 'EcoTrack - Community Sustainability Platform',
      description: 'EcoTrack is a community-based platform designed to help people take part in eco-friendly activities together. Users can track their eco-challenges, join local green events, view personal environmental impact, and stay motivated toward sustainable living.',
      image: ecoImage,
      tags: ['React', 'Node.js', 'MongoDB', 'Firebase'],
      techStack: ['React.js', 'Tailwind CSS', 'DaisyUI', 'React Router', 'Swiper.js', 'AOS Animation', 'react-hot-toast', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Authentication'],
      liveLink: 'https://eco-track-a10.netlify.app/',
      githubLink: 'https://github.com/Anzumul-Jubayer/eco-track-client',
      challenges: [
        'Implementing real-time tracking of user eco-challenges and progress',
        'Creating an engaging community system for local green events',
        'Designing intuitive data visualizations for environmental impact metrics',
        'Integrating Firebase Authentication with custom user profiles and progress tracking'
      ],
      improvements: [
        'Add gamification features with badges and leaderboards',
        'Implement push notifications for event reminders and challenge updates',
        'Create carbon footprint calculator with detailed analytics',
        'Add social sharing features for achievements and milestones'
      ]
    },
    {
      id: 3,
      title: 'Local Chef Bazaar - Food Ordering Platform',
      description: 'Local Chef Bazaar is a food ordering platform where local chefs can sell homemade meals and users can easily order food online. It connects users and chefs in a simple and friendly way.',
      image: chefImage,
      tags: ['React', 'Node.js', 'MongoDB', 'Framer Motion'],
      techStack: ['React.js', 'React Router', 'Tailwind CSS', 'Framer Motion', 'Firebase Authentication', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://local-chef-bazar-a-11.netlify.app/',
      githubLink: 'https://github.com/Anzumul-Jubayer/local-chef-bazaar-client',
      challenges: [
        'Creating a dual-interface system for both chefs and customers',
        'Implementing real-time order tracking and status updates',
        'Designing an intuitive menu management system for local chefs',
        'Building a secure payment integration and order management workflow'
      ],
      improvements: [
        'Add real-time chat system between customers and chefs',
        'Implement GPS-based delivery tracking and estimated arrival times',
        'Create a rating and review system for chefs and meals',
        'Add advanced search and filtering options for cuisines and dietary preferences'
      ]
    }
  ];

  const education = [
    {
      title: 'Computer Science',
      institution: 'Daffodil International University',
      period: '2020 - 2024',
      description: 'Completed a comprehensive study of computer science principles, software development lifecycles, and algorithms, graduating with strong academic performance.',
      icon: <User className="w-4 h-4" />
    },
    {
      title: 'MERN Stack Web Development',
      institution: 'Programming Hero',
      period: '2025',
      description: 'Intensive program focused on modern web technologies including React, Node.js, and MongoDB. Built 10+ full-stack projects during the course.',
      icon: <Code className="w-4 h-4" />
    }
  ];

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-gray-50 dark:bg-gray-950 flex items-center justify-center transition-colors duration-300">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-blue-600/30 border-t-blue-600 rounded-full animate-spin mx-auto mb-6"></div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-pulse">
              Welcome to
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-blue-600 tracking-tight">
              Jubayer's Portfolio
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-blue-600/60 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-600/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-600/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Portfolio Content */}
      <div className={`min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 ${isLoading ? 'overflow-hidden' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 py-3 sm:py-4 md:py-6 px-4 sm:px-6 lg:px-12 flex justify-between items-center backdrop-blur-sm bg-gray-50/80 dark:bg-gray-950/80 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="flex items-center gap-1 font-bold text-xl sm:text-2xl tracking-tighter">
          <span className="text-gray-900 dark:text-white">A</span>
          <span className="text-blue-600">J</span>
        </div>
        
        <ul className="hidden lg:flex gap-6 xl:gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <li><button className="hover:text-blue-600 transition-colors" onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button className="hover:text-blue-600 transition-colors" onClick={() => scrollToSection('about')}>About me</button></li>
          <li><button className="hover:text-blue-600 transition-colors" onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button className="hover:text-blue-600 transition-colors" onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button className="hover:text-blue-600 transition-colors" onClick={() => scrollToSection('education')}>Education</button></li>
          <li><button className="hover:text-blue-600 transition-colors" onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
        
        <Button 
          className="hidden lg:inline-flex rounded-full bg-blue-600 hover:bg-blue-700" 
          size="sm"
          onClick={scrollToContact}
        >
          Let's Talk!
          <Send className="w-4 h-4 ml-2" />
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)}></div>
          <div className="fixed top-0 right-0 h-full w-64 sm:w-80 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300">
            <div className="flex flex-col p-6 pt-20 space-y-6">
              <button 
                className="text-left text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors" 
                onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }}
              >
                Home
              </button>
              <button 
                className="text-left text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors" 
                onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }}
              >
                About me
              </button>
              <button 
                className="text-left text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors" 
                onClick={() => { scrollToSection('skills'); setIsMenuOpen(false); }}
              >
                Skills
              </button>
              <button 
                className="text-left text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors" 
                onClick={() => { scrollToSection('projects'); setIsMenuOpen(false); }}
              >
                Projects
              </button>
              <button 
                className="text-left text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors" 
                onClick={() => { scrollToSection('education'); setIsMenuOpen(false); }}
              >
                Education
              </button>
              <button 
                className="text-left text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors" 
                onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}
              >
                Contact
              </button>
              <Button 
                className="mt-4 rounded-full bg-blue-600 hover:bg-blue-700 w-full" 
                onClick={() => { scrollToContact(); setIsMenuOpen(false); }}
              >
                Let's Talk!
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-8 sm:pb-10 lg:pb-0 min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute right-[-20%] sm:right-[-15%] md:right-[-10%] bottom-0 w-[100vw] h-[100vw] sm:w-[80vw] sm:h-[80vw] md:w-[45vw] md:h-[45vw] bg-blue-600/40 dark:bg-blue-600/60 rounded-full blur-3xl -z-10 translate-y-1/4"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-0 items-center relative z-10 h-full">
          <div className="flex flex-col gap-6 sm:gap-8 lg:pr-10 order-2 lg:order-1 mb-12 sm:mb-16 lg:mb-0">
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                variant="outline" 
                size="icon" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-white text-gray-900 hover:text-blue-600"
                onClick={() => window.open('https://www.linkedin.com/in/anzumul-jubayer23', '_blank')}
              >
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-white text-gray-900 hover:text-blue-600"
                onClick={() => window.open('https://github.com/Anzumul-Jubayer', '_blank')}
              >
                <Github className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-white text-gray-900 hover:text-blue-600"
                onClick={() => window.open('mailto:anzumuljubayer222@gmail.com')}
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
            
            <div className="space-y-2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                {typewriterText}
                {showCursor && <span className="animate-pulse">|</span>}
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">
                Developer
              </h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              Hi, I'm Anzumul Jubayer, a passionate MERN Stack Developer with a strong interest in building scalable, user-focused web applications. I enjoy solving real-world problems through clean code and continuously improving my development workflow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 items-center lg:items-start">
              <Button 
                className="w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 px-6 sm:px-8"
                onClick={downloadCV}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <div className="lg:hidden">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto rounded-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8"
                  onClick={scrollToContact}
                >
                  Let's Talk!
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end items-end h-[300px] sm:h-[400px] lg:h-[600px] w-full">
            <img 
              alt="Anzumul Jubayer Portrait" 
              className="relative z-20 h-full w-auto max-w-full object-cover object-center rounded-full grayscale contrast-125"
              src={heroImage}
            />
          </div>
        </div>
        
        <div className="absolute bottom-[-2%] left-0 w-full flex justify-between items-end px-2 sm:px-4 lg:px-12 pointer-events-none select-none overflow-hidden pb-2 sm:pb-4 md:pb-0">
          <div className="text-[10vw] sm:text-[12vw] lg:text-[8rem] font-black leading-none text-gray-200 dark:text-white opacity-20 dark:opacity-90 relative z-10">
            Anzumul
          </div>
          <div 
            className="text-[10vw] sm:text-[12vw] lg:text-[8rem] font-black leading-none opacity-40 relative z-0 transform -translate-x-6 sm:-translate-x-10 lg:-translate-x-20"
            style={{
              WebkitTextStroke: '2px rgba(0, 0, 0, 0.1)',
              color: 'transparent'
            }}
          >
            Jubayer
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div ref={aboutImageRef} className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl transform rotate-6 scale-[0.98] group-hover:rotate-3 transition-transform duration-500 opacity-20"></div>
              <Card className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-0">
                <img 
                  alt="Professional Headshot" 
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  src={aboutImage}
                />
              </Card>
            </div>
            
            <div className="order-1 lg:order-2 text-center lg:text-left">
            <div ref={aboutBadgeRef}>
              <Badge variant="secondary" className="mb-4 sm:mb-6 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                About Me
              </Badge>
            </div>
              
              <h2 ref={aboutTitleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Building modern, user-friendly web experiences with the <span className="text-blue-600">MERN Stack</span>.
              </h2>
              
              <p ref={aboutDescriptionRef} className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                I am a passionate Full Stack Developer with a deep love for JavaScript. My journey started with understanding the fundamentals of the web, which naturally evolved into mastering the React ecosystem and server-side logic. I specialize in building robust, scalable web applications while keeping user experience in check.
              </p>
              
              <div ref={aboutCompetenciesRef} className="mb-8 sm:mb-10">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Core Competencies</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    'Full-Stack Development (MERN)',
                    'State Management',
                    'Database Optimization (MongoDB)'
                  ].map((competency, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                      <span>{competency}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div ref={aboutButtonRef}>
                <Button 
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full sm:w-auto"
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div ref={skillsBadgeRef}>
              <Badge variant="secondary" className="mb-3 sm:mb-4 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                My Stack
              </Badge>
            </div>
            <h2 ref={skillsTitleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Technologies & Skills</h2>
            <p ref={skillsDescriptionRef} className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg">
              I specialize in the MERN stack and modern development tools. Here are the technologies I work with to bring ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Card 
                  key={index} 
                  ref={el => skillCardsRef.current[index] = el}
                  className="group flex flex-col items-center justify-center p-4 sm:p-6 hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300"
                >
                  <div className={`skill-icon text-2xl sm:text-3xl lg:text-4xl xl:text-5xl ${skill.color} mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm md:text-base text-center">{skill.name}</span>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-950 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 sm:mb-16 text-center">
            <div ref={projectsBadgeRef}>
              <Badge variant="secondary" className="mb-3 sm:mb-4 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                Portfolio
              </Badge>
            </div>
            <h2 ref={projectsTitleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Featured Projects</h2>
            <p ref={projectsDescriptionRef} className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              A selection of projects that showcase my skills in solving complex problems through elegant code and system architecture.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                ref={el => projectCardsRef.current[index] = el}
                className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 sm:h-56 overflow-hidden relative">
                  <img 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    src={project.image}
                  />
                </div>
                
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <CardTitle className="text-lg sm:text-xl mb-2 sm:mb-3">{project.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-3">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    onClick={() => openProjectDetails(project)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    size="sm"
                  >
                    View More Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div ref={projectsButtonRef} className="mt-12 sm:mt-16 text-center">
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full sm:w-auto"
              onClick={() => window.open('https://github.com/Anzumul-Jubayer?tab=repositories', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <Badge variant="secondary" className="mb-4 sm:mb-6 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                Education
              </Badge>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight text-center lg:text-left">
                Academic Background & <span className="text-blue-600">Certifications</span>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 text-center lg:text-left">
                My academic journey has been shaped by a deep curiosity about how systems work—from foundational concepts to high-level software abstractions. Below is a summary of my formal education.
              </p>
              
              <Card className="hidden lg:block h-48 sm:h-64 flex items-center justify-center group">
                <GraduationCap className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-blue-600/10 group-hover:text-blue-600/20 transition-colors duration-500" />
              </Card>
            </div>
            
            <div className="relative space-y-8 sm:space-y-12 pl-4 sm:pl-6 lg:pl-0">
              {education.map((edu, index) => (
                <div key={index} className="relative group">
                  <div className="hidden sm:flex absolute -left-8 sm:-left-12 top-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-600/10 text-blue-600 items-center justify-center ring-4 ring-white dark:ring-gray-900 z-10">
                    {edu.icon}
                  </div>
                  
                  <Card className="p-4 sm:p-6 lg:p-8 hover:border-blue-600/50 transition-colors duration-300 relative hover:shadow-lg hover:shadow-blue-600/5">
                    <div className="flex flex-col gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                        <div>
                          <CardTitle className="text-lg sm:text-xl">{edu.title}</CardTitle>
                          <p className="text-blue-600 font-medium text-sm sm:text-base">{edu.institution}</p>
                        </div>
                        <Badge variant="outline" className="whitespace-nowrap text-xs sm:text-sm w-fit">
                          {edu.period}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardDescription className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      {edu.description}
                    </CardDescription>
                    
                    {edu.details && (
                      <ul className="space-y-1 sm:space-y-2">
                        {edu.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mt-0.5 flex-shrink-0" />
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
      <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-950 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge variant="secondary" className="mb-3 sm:mb-4 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
              Get in Touch
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Let's Work Together</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg">
              Have a project in mind, want to discuss the latest MERN stack technologies, or just want to say hi? I'm Anzumul, and I'm always open to new opportunities and interesting conversations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <Card className="p-4 sm:p-6 lg:p-8 shadow-xl order-2 lg:order-1">
              <CardHeader className="px-0 pt-0 pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
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
                      className="rounded-xl h-32 sm:h-40 resize-none"
                    />
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/30">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="flex flex-col gap-6 sm:gap-8 order-1 lg:order-2">
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
                <Card className="p-4 sm:p-6 hover:border-blue-600/50 transition-colors group">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center text-lg sm:text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Email Me</h4>
                      <a className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors break-all" href="mailto:anzumuljubayer222@gmail.com">
                        anzumuljubayer222@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 sm:p-6 hover:border-blue-600/50 transition-colors group">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center text-lg sm:text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Phone</h4>
                      <a className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors" href="tel:+8801716346046">
                        01716346046
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 sm:p-6 hover:border-blue-600/50 transition-colors group">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600/10 text-green-600 rounded-full flex items-center justify-center text-lg sm:text-xl group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">WhatsApp</h4>
                      <a className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white hover:text-green-600 transition-colors" href="https://wa.me/8801716346046" target="_blank" rel="noopener noreferrer">
                        01716346046
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <span className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base">Follow me on:</span>
                <div className="flex gap-2 sm:gap-3">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900"
                    onClick={() => window.open('https://github.com/Anzumul-Jubayer', '_blank')}
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600"
                    onClick={() => window.open('https://www.linkedin.com/in/anzumul-jubayer23', '_blank')}
                  >
                    <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>
              
              <Card className="flex-grow h-[250px] sm:h-[300px] lg:h-auto lg:min-h-[300px] overflow-hidden group">
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
      <footer className="bg-gray-900 dark:bg-gray-950 text-white relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Main Footer Content */}
          <div className="py-12 sm:py-16 grid md:grid-cols-4 gap-8 sm:gap-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1 font-bold text-2xl tracking-tighter">
                  <span className="text-white">A</span>
                  <span className="text-blue-400">J</span>
                </div>
                <span className="text-lg font-semibold">Anzumul Jubayer</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                MERN Stack Developer passionate about building scalable, user-focused web applications. 
                Always looking to solve real-world problems through clean code.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
                  onClick={() => window.open('https://www.linkedin.com/in/anzumul-jubayer23', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
                  onClick={() => window.open('https://github.com/Anzumul-Jubayer', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
                  onClick={() => window.open('mailto:anzumuljubayer222@gmail.com')}
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('skills')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('education')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Education
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-white mb-4">Get in Touch</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a 
                    href="mailto:anzumuljubayer222@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors text-sm break-all"
                  >
                    anzumuljubayer222@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a 
                    href="tel:+8801716346046"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    01716346046
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <a 
                    href="https://wa.me/8801716346046"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="py-6 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2026 Anzumul Jubayer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Project Details Modal */}
      {showProjectDetails && selectedProject && (
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <Button
              onClick={closeProjectDetails}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800"
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Project Image */}
            <div className="h-64 sm:h-80 overflow-hidden rounded-t-2xl relative">
              <img 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                src={selectedProject.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">{selectedProject.title}</h1>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Technology Stack */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technology Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {selectedProject.techStack.map((tech, index) => (
                    <div key={index} className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Links</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open(selectedProject.liveLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-gray-300 dark:border-gray-600"
                    onClick={() => window.open(selectedProject.githubLink, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </Button>
                </div>
              </div>

              {/* Challenges */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Development Challenges</h2>
                <ul className="space-y-3">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Improvements */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Future Improvements</h2>
                <ul className="space-y-3">
                  {selectedProject.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Theme Toggle */}
      <Button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 rounded-full shadow-lg w-10 h-10 sm:w-12 sm:h-12"
        size="icon"
        variant="outline"
      >
        {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
      </Button>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-16 sm:bottom-6 sm:right-20 z-50 rounded-full shadow-lg w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white border-0 transition-all duration-300 transform hover:scale-110"
          size="icon"
        >
          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      )}
      </div>
    </>
  );
};

export default Portfolio;