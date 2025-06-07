import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Users, 
  Trophy, 
  Download, 
  ChevronDown,
  Heart,
  Shield,
  Bot,
  Building,
  Menu,
  X,
  ArrowUp,
  Moon,
  Sun,
  Sparkles,
  Star
} from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowBackToTop(scrollPosition > 500);
      setIsScrolled(scrollPosition > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'themes', 'eligibility', 'guidelines', 'evaluation', 'faq', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'themes', label: 'Themes' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'guidelines', label: 'Guidelines' },
    { id: 'evaluation', label: 'Awards' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const themes = [
    {
      title: "Health Care",
      icon: Heart,
      description: "Smart diagnostics, telemedicine, wearable devices, predictive health analytics",
      gradient: "from-red-400 via-pink-400 to-rose-500",
      bgGradient: "from-red-50 via-pink-50 to-rose-50"
    },
    {
      title: "Smart Cities",
      icon: Building,
      description: "Intelligent traffic management, pollution control, waste management, public safety",
      gradient: "from-blue-400 via-cyan-400 to-sky-500",
      bgGradient: "from-blue-50 via-cyan-50 to-sky-50"
    },
    {
      title: "Cyber Security",
      icon: Shield,
      description: "Data protection, secure authentication, threat detection, privacy-preserving tools",
      gradient: "from-purple-400 via-violet-400 to-indigo-500",
      bgGradient: "from-purple-50 via-violet-50 to-indigo-50"
    },
    {
      title: "AI with Robotics",
      icon: Bot,
      description: "Industrial automation, intelligent assistants, agricultural robots, computer vision",
      gradient: "from-green-400 via-emerald-400 to-teal-500",
      bgGradient: "from-green-50 via-emerald-50 to-teal-50"
    }
  ];

  const timeline = [
    {
      phase: "Phase I - Registration & Abstract Submission",
      startDate: "1 July 2025",
      endDate: "31 August 2025",
      description: "Register your team and submit your 300-word abstract"
    },
    {
      phase: "Phase II - Online Shortlisting",
      startDate: "1 September 2025",
      endDate: "20 September 2025",
      description: "Review and announcement of shortlisted teams"
    },
    {
      phase: "Phase III - Main Hackathon (36-Hour Sprint)",
      startDate: "5 October 2025 10:00 AM",
      endDate: "6 October 2025 10:00 PM",
      description: "Code, build, and create at RKGI Campus"
    },
    {
      phase: "Phase IV - Final Presentation & Awards",
      startDate: "7 October 2025 10:00 AM",
      endDate: "12:00 PM",
      description: "Present your prototype and receive feedback"
    }
  ];

  const faqs = [
    {
      question: "Can I register as an individual?",
      answer: "No. Teams of 2-4 members only. Individual entries are not allowed."
    },
    {
      question: "What if my team misses the hackathon start time?",
      answer: "All members must check in by 9:30 AM on 5 October 2025. Late entries will not be allowed."
    },
    {
      question: "Is travel/food provided?",
      answer: "Light refreshments and Wi-Fi will be provided. Travel accommodation is the participant's responsibility."
    },
    {
      question: "Can I pivot my idea after shortlisting?",
      answer: "Minor changes are allowed, but the core theme should remain the same."
    },
    {
      question: "How do we submit source code?",
      answer: "Shortlisted teams must push code to a GitHub repo and share private link with organizers. Details will be emailed post-shortlisting."
    },
    {
      question: "Who are the judges?",
      answer: "Experts from academia and leading tech companies in Delhi-NCR. Names will be announced on 15 September 2025."
    }
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            right: '10%',
            top: '60%'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            left: '60%',
            bottom: '20%'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-2xl border-b border-border/30 shadow-2xl shadow-primary/5' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Both Logos - Left Side */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 transition-all duration-700 hover:scale-110 opacity-90 hover:opacity-100 group">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/e87592ac-ff74-419b-8bbc-032d223afbd1.png" 
                    alt="RKGI Logo" 
                    className="h-12 w-12 transition-all duration-700 filter drop-shadow-lg group-hover:drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                </div>
                <div className="text-2xl font-bold text-muted-foreground/50 transition-all duration-700 group-hover:text-primary/70 group-hover:scale-110">×</div>
                <div className="relative">
                  <img 
                    src="/lovable-uploads/09478c44-a106-4301-bedd-bacdcd7c8912.png" 
                    alt="Next Gen Hack 2025" 
                    className="h-14 w-auto transition-all duration-700 filter drop-shadow-lg group-hover:drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation - Right Side */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-3 text-sm font-medium transition-all duration-700 hover:text-primary group transform hover:scale-105 rounded-xl hover:bg-muted/20 backdrop-blur-sm ${
                    activeSection === item.id ? 'text-primary bg-muted/30' : 'text-muted-foreground'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 transition-all duration-700 group-hover:w-3/4 rounded-full ${
                    activeSection === item.id ? 'w-3/4' : ''
                  }`}></span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-sm -z-10"></div>
                  )}
                </button>
              ))}
              
              {/* Separator */}
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-border/50 to-transparent mx-4"></div>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-xl hover:bg-muted/30 transition-all duration-500 hover:scale-110 group mr-4 relative backdrop-blur-sm"
                title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                <div className="relative w-5 h-5">
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 text-yellow-500 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 absolute inset-0 drop-shadow-lg" />
                  ) : (
                    <Moon className="w-5 h-5 text-blue-500 transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110 absolute inset-0 drop-shadow-lg" />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm -z-10"></div>
              </button>
              
              {/* Register Button */}
              <Button 
                onClick={() => window.open('https://devfolio.co/submissions/next-gen-hack-2025', '_blank')}
                className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 transform rounded-xl px-8 py-3 text-sm font-semibold group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Register Now
                  <Sparkles className="w-5 h-5 ml-2 group-hover:animate-pulse" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-xl hover:bg-muted/30 transition-all duration-500 backdrop-blur-sm"
                title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-500" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 rounded-xl hover:bg-muted/30 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-700 ${
                    isMenuOpen ? 'rotate-45 top-3' : ''
                  }`}></span>
                  <span className={`absolute top-2 left-0 w-full h-0.5 bg-current transition-all duration-700 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}></span>
                  <span className={`absolute top-4 left-0 w-full h-0.5 bg-current transition-all duration-700 ${
                    isMenuOpen ? '-rotate-45 top-3' : ''
                  }`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-border/30 bg-background/90 backdrop-blur-2xl rounded-b-2xl shadow-2xl">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {/* Mobile Logos */}
                <div className="flex justify-center items-center space-x-3 py-6">
                  <img 
                    src="/lovable-uploads/e87592ac-ff74-419b-8bbc-032d223afbd1.png" 
                    alt="RKGI Logo" 
                    className="h-10 w-10 drop-shadow-lg"
                  />
                  <div className="text-xl font-bold text-muted-foreground/50">×</div>
                  <img 
                    src="/lovable-uploads/09478c44-a106-4301-bedd-bacdcd7c8912.png" 
                    alt="Next Gen Hack 2025" 
                    className="h-12 w-auto drop-shadow-lg"
                  />
                </div>
                
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-6 py-4 text-base font-medium transition-all duration-700 w-full text-left hover:bg-muted/30 rounded-xl transform hover:translate-x-2 hover:shadow-lg backdrop-blur-sm ${
                      activeSection === item.id ? 'text-primary bg-muted/30 shadow-lg' : 'text-muted-foreground hover:text-primary'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  onClick={() => window.open('https://devfolio.co/submissions/next-gen-hack-2025', '_blank')}
                  className="w-full mt-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 shadow-2xl hover:shadow-3xl transition-all duration-700 rounded-xl py-4 text-base font-semibold"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-purple-600/10 transition-all duration-1000"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30 animate-pulse`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i * 0.5}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge className="mb-8 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white border-0 animate-fade-in hover:scale-105 transition-all duration-500 shadow-2xl backdrop-blur-sm px-6 py-2 text-sm font-semibold">
              <Star className="w-4 h-4 mr-2" />
              National Level Hackathon
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in leading-tight">
              Next Gen Hack 2025
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-in transition-colors duration-500 leading-relaxed">
              Code the Future: A 36-hour national-level hackathon on Health Care, Smart Cities, Cyber Security, and AI+Robotics
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in mb-16">
              <Button 
                size="lg"
                onClick={() => window.open('https://devfolio.co/submissions/next-gen-hack-2025', '_blank')}
                className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-lg px-10 py-4 hover:scale-105 transition-all duration-700 shadow-2xl hover:shadow-3xl rounded-xl font-semibold group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Register Now
                  <Sparkles className="w-5 h-5 ml-2 group-hover:animate-pulse" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="text-lg px-10 py-4 hover:scale-105 transition-all duration-700 border-2 hover:border-primary/50 hover:bg-muted/30 backdrop-blur-sm rounded-xl font-semibold hover:shadow-xl"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "300+", label: "Participants", gradient: "from-blue-500 to-cyan-500" },
                { value: "36", label: "Hours", gradient: "from-purple-500 to-pink-500" },
                { value: "4", label: "Themes", gradient: "from-green-500 to-emerald-500" },
                { value: "₹65K", label: "Prize Pool", gradient: "from-orange-500 to-red-500" }
              ].map((stat, index) => (
                <div key={index} className="text-center transform hover:scale-110 transition-all duration-700 group" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-all duration-500`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  <div className={`w-8 h-1 bg-gradient-to-r ${stat.gradient} mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={28} className="text-muted-foreground hover:text-primary transition-colors duration-500" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/20 transition-colors duration-500 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Next Gen Hack 2025
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 mx-auto mb-8 transition-all duration-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed transition-colors duration-500">
                Next Gen Hack 2025 is a national-level, 36-hour hackathon hosted by Raj Kumar Goel Institute of Technology, Ghaziabad. 
                Inspired by national initiatives such as Digital India, National Health Mission, Cyber Surakshit Bharat, and Make in India, 
                this event empowers students (16–25 years old) to solve real-world problems in four key domains.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed transition-colors duration-500">
                Over 300+ participants from across India will collaborate in interdisciplinary teams to brainstorm, build, and demo working prototypes. 
                Our mission is to bridge the gap between academia and industry by identifying cutting-edge solutions and offering incubation opportunities to top teams.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {["Digital India", "National Health Mission", "Cyber Surakshit Bharat", "Make in India"].map((badge, index) => (
                  <Badge key={index} variant="secondary" className="hover:scale-105 transition-all duration-500 px-4 py-2 text-sm font-medium bg-gradient-to-r from-muted to-muted/50 hover:from-primary/10 hover:to-primary/5 border border-border/50 hover:border-primary/30 backdrop-blur-sm">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="aspect-square bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-3xl p-12 flex items-center justify-center hover:scale-105 transition-all duration-700 backdrop-blur-sm border border-border/20 shadow-2xl hover:shadow-3xl group">
                <div className="text-center">
                  <div className="text-7xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent mb-6 group-hover:scale-110 transition-all duration-500">
                    NGH
                  </div>
                  <div className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-500">2025</div>
                  <div className="text-muted-foreground font-medium">October 5-7</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="py-24 transition-colors duration-500 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Themes & Challenges
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in transition-colors duration-500 leading-relaxed">
              Choose one theme that resonates with your team's vision and create innovative solutions for tomorrow's challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {themes.map((theme, index) => (
              <Card key={index} className={`group hover:scale-105 transition-all duration-700 hover:shadow-2xl border-0 bg-gradient-to-br ${theme.bgGradient} dark:from-background dark:to-muted/30 animate-fade-in backdrop-blur-sm overflow-hidden relative`} style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-10 relative z-10">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${theme.gradient} p-4 mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl`}>
                    <theme.icon className="w-full h-full text-white drop-shadow-lg" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-500">
                    {theme.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed transition-colors duration-500">
                    {theme.description}
                  </p>
                </CardContent>
                <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} opacity-0 group-hover:opacity-5 transition-all duration-700 blur-2xl`}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Timeline Section */}
      <section id="eligibility" className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Eligibility & Timeline
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-500 via-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eligibility */}
            <Card className="border-0 bg-gradient-to-br from-blue-50/50 via-background to-cyan-50/50 dark:from-background dark:to-blue-950/20 shadow-2xl hover:shadow-3xl transition-all duration-700 backdrop-blur-sm">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <Users className="w-7 h-7 mr-4 text-blue-500 drop-shadow-lg" />
                  Who Can Participate?
                </h3>
                
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></div>
                    <span className="leading-relaxed">Undergraduate & postgraduate full-time students (any engineering, computer applications, or allied sciences)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></div>
                    <span className="leading-relaxed">Aged 16–25 years as of 30 August 2025</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></div>
                    <span className="leading-relaxed">Team size: 2–4 members (interdisciplinary teams encouraged)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></div>
                    <span className="leading-relaxed">Individual entries not allowed</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></div>
                    <span className="leading-relaxed">Must register with a unique team name & submit an abstract (≤300 words)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></div>
                    <span className="leading-relaxed">Optional: One faculty mentor per team</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="border-0 bg-gradient-to-br from-cyan-50/50 via-background to-green-50/50 dark:from-background dark:to-cyan-950/20 shadow-2xl hover:shadow-3xl transition-all duration-700 backdrop-blur-sm">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <Calendar className="w-7 h-7 mr-4 text-cyan-500 drop-shadow-lg" />
                  Key Dates & Phases
                </h3>
                
                <div className="space-y-8">
                  {timeline.map((phase, index) => (
                    <div key={index} className="relative group">
                      {index < timeline.length - 1 && (
                        <div className="absolute left-4 top-10 w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full shadow-lg"></div>
                      )}
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0 mt-1 shadow-2xl group-hover:scale-110 transition-all duration-500"></div>
                        <div className="ml-6">
                          <h4 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors duration-500">{phase.phase}</h4>
                          <p className="text-xs text-muted-foreground mb-2 font-medium">
                            {phase.startDate} {phase.endDate && `- ${phase.endDate}`}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              How to Participate
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Guidelines */}
            <div>
              <h3 className="text-3xl font-bold mb-12 text-center lg:text-left">Guidelines</h3>
              
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Choose a Theme & Form Your Team",
                    description: "Pick only one theme; interdisciplinary teams encouraged.",
                    gradient: "from-red-500 to-pink-500"
                  },
                  {
                    step: "2",
                    title: "Prepare Your Abstract (≤300 words)",
                    description: "Abstract must clearly state: problem statement, proposed solution, key features, expected impact.",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    step: "3",
                    title: "Register Online",
                    description: "Click 'Register Now' (redirects to Devfolio). Fill in team details, short abstract, team member info.",
                    gradient: "from-purple-500 to-indigo-500"
                  },
                  {
                    step: "4",
                    title: "Shortlisting",
                    description: "Wait for email notification (shortlisted teams will move to Phase III).",
                    gradient: "from-green-500 to-emerald-500"
                  },
                  {
                    step: "5",
                    title: "Hackathon Day",
                    description: "Bring your own laptop; internet & power outlets provided. Work for 36 hours, then submit code + demonstration.",
                    gradient: "from-orange-500 to-yellow-500"
                  },
                  {
                    step: "6",
                    title: "Final Presentation",
                    description: "Shortlisted prototypes present to the jury (10 minutes each, plus Q&A).",
                    gradient: "from-teal-500 to-cyan-500"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-all duration-500 shadow-2xl`}>
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-lg group-hover:text-primary transition-colors duration-500">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Abstract Template */}
            <Card className="border-0 bg-gradient-to-br from-orange-50/50 via-background to-red-50/50 dark:from-background dark:to-orange-950/20 h-fit shadow-2xl hover:shadow-3xl transition-all duration-700 backdrop-blur-sm">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <Download className="w-7 h-7 mr-4 text-orange-500 drop-shadow-lg" />
                  Abstract Template
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Use this template to structure your abstract—name, theme, problem statement, proposed solution, tools/technologies, potential impact.
                </p>
                
                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 rounded-xl py-6 text-base font-semibold group relative overflow-hidden"
                  onClick={() => window.open('/assets/NGH_Abstract_Template.pdf', '_blank')}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-3" />
                    Download Abstract Template (PDF)
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                </Button>
                
                <div className="mt-6 p-6 bg-background/50 rounded-2xl border border-border/50 backdrop-blur-sm shadow-inner">
                  <h4 className="font-semibold text-sm mb-4 text-primary">Template includes:</h4>
                  <ul className="text-xs text-muted-foreground space-y-2">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                      Team details and member information
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                      Problem statement (max 50 words)
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></div>
                      Proposed solution (max 150 words)
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                      Technology stack (max 50 words)
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      Expected impact (max 50 words)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Evaluation & Awards Section */}
      <section id="evaluation" className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Evaluation & Awards
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Evaluation Criteria */}
            <Card className="border-0 bg-gradient-to-br from-purple-50/50 via-background to-indigo-50/50 dark:from-background dark:to-purple-950/20 shadow-2xl hover:shadow-3xl transition-all duration-700 backdrop-blur-sm">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold mb-12">Evaluation Criteria</h3>
                
                <div className="space-y-8">
                  {[
                    { criterion: "Innovation & Creativity", percentage: 20, color: "bg-gradient-to-r from-red-500 to-pink-500" },
                    { criterion: "Technical Feasibility", percentage: 25, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
                    { criterion: "Social & Economic Impact", percentage: 20, color: "bg-gradient-to-r from-green-500 to-emerald-500" },
                    { criterion: "Presentation & Communication", percentage: 15, color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
                    { criterion: "Prototype Functionality", percentage: 20, color: "bg-gradient-to-r from-purple-500 to-indigo-500" }
                  ].map((item, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-sm group-hover:text-primary transition-colors duration-500">{item.criterion}</span>
                        <span className="text-sm font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden shadow-inner">
                        <div 
                          className={`h-3 rounded-full ${item.color} transition-all duration-1000 ease-out shadow-lg`} 
                          style={{ width: `${item.percentage * 4}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Awards */}
            <Card className="border-0 bg-gradient-to-br from-yellow-50/50 via-background to-orange-50/50 dark:from-background dark:to-yellow-950/20 shadow-2xl hover:shadow-3xl transition-all duration-700 backdrop-blur-sm">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold mb-12 flex items-center">
                  <Trophy className="w-7 h-7 mr-4 text-yellow-500 drop-shadow-lg" />
                  Awards & Recognition
                </h3>
                
                <div className="space-y-6">
                  {[
                    { position: "Winner Team", prize: "₹30,000", color: "from-yellow-500 via-orange-500 to-amber-500", icon: "🥇", shadow: "shadow-yellow-500/50" },
                    { position: "First Runner-Up", prize: "₹20,000", color: "from-gray-400 via-gray-500 to-slate-600", icon: "🥈", shadow: "shadow-gray-500/50" },
                    { position: "Second Runner-Up", prize: "₹15,000", color: "from-amber-600 via-orange-600 to-yellow-700", icon: "🥉", shadow: "shadow-amber-500/50" }
                  ].map((award, index) => (
                    <div key={index} className={`p-6 rounded-2xl bg-gradient-to-r ${award.color} text-white shadow-2xl ${award.shadow} hover:scale-105 transition-all duration-500 group`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-3xl mr-4 group-hover:scale-110 transition-all duration-500">{award.icon}</span>
                          <div>
                            <div className="font-bold text-lg">{award.position}</div>
                            <div className="text-sm opacity-90">+ Certificates</div>
                          </div>
                        </div>
                        <div className="text-2xl font-bold group-hover:scale-110 transition-all duration-500">{award.prize}</div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="p-6 bg-background/80 rounded-2xl border border-border/50 backdrop-blur-sm shadow-lg">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>All participants:</strong> Certificate of Participation
                    </p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      Top 3 teams will also receive invitation to an incubation program for real-world deployment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 bg-gradient-to-r from-background via-muted/10 to-background hover:from-muted/20 hover:to-muted/20 transition-all duration-700 hover:shadow-xl backdrop-blur-sm">
                <CardContent className="p-8">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none group-hover:text-primary transition-colors duration-500">
                      <h3 className="font-semibold text-lg pr-6">{faq.question}</h3>
                      <ChevronDown className="w-6 h-6 text-muted-foreground group-open:rotate-180 transition-all duration-500 group-hover:text-primary flex-shrink-0" />
                    </summary>
                    <Separator className="my-6 bg-gradient-to-r from-transparent via-border to-transparent" />
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 bg-gradient-to-br from-blue-50/50 via-background to-cyan-50/50 dark:from-background dark:to-blue-950/20 hover:scale-105 transition-all duration-700 shadow-2xl hover:shadow-3xl backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Users className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                <h3 className="font-bold mb-3 text-lg">Event Coordinator</h3>
                <p className="text-sm text-muted-foreground mb-3 font-medium">Prof. Neha Sharma</p>
                <p className="text-sm text-primary font-medium">neha.sharma@rkgi.edu.in</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-cyan-50/50 via-background to-indigo-50/50 dark:from-background dark:to-cyan-950/20 hover:scale-105 transition-all duration-700 shadow-2xl hover:shadow-3xl backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Shield className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                <h3 className="font-bold mb-3 text-lg">Technical Queries</h3>
                <p className="text-sm text-muted-foreground mb-3 font-medium">IT Cell, RKGI</p>
                <p className="text-sm text-primary font-medium">techsupport@rkgi.edu.in</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-indigo-50/50 via-background to-purple-50/50 dark:from-background dark:to-indigo-950/20 hover:scale-105 transition-all duration-700 shadow-2xl hover:shadow-3xl backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Calendar className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                <h3 className="font-bold mb-3 text-lg">General Info</h3>
                <p className="text-sm text-muted-foreground mb-3 font-medium">Call Us</p>
                <p className="text-sm text-primary font-medium">+91 98765 43210</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-6 mb-8 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/36e9cbd1-a0c7-40ec-8f86-06e91283b8dd.png" 
                  alt="RKGI Logo" 
                  className="h-16 w-16 drop-shadow-xl group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-500">
                  Raj Kumar Goel Institute of Technology
                </div>
                <div className="text-sm text-muted-foreground font-medium">Ghaziabad</div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2025 Next Gen Hack | Raj Kumar Goel Institute of Technology, Ghaziabad
            </p>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-110 z-40 animate-fade-in group backdrop-blur-sm border border-white/20"
        >
          <ArrowUp className="w-6 h-6 mx-auto group-hover:scale-110 transition-all duration-500" />
        </button>
      )}
    </div>
  );
};

export default Index;
