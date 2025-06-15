import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Award, GraduationCap, Lightbulb, Code, Settings, LogOut, Star, Sparkles } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import AdminPanel from '@/components/AdminPanel';
import Login from '@/components/Login';

const Index = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isAuthenticated, logout } = useAuth();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const fullName = "Anumaan Whig";

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullName[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullName]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "AI-Powered YouTube Learning Assistant",
      description: "Chrome extension that tracks progress, auto-pauses for quizzes, summaries, and note-taking using LLMs like Gemini and custom NLP",
      technologies: ["AI/ML", "Chrome Extension", "Gemini", "NLP", "JavaScript"],
      type: "EdTech",
      status: "Completed"
    },
    {
      id: 2,
      title: "TrizzaOne - Food Waste Reduction",
      description: "AI + IoT solution to reduce restaurant food waste with real-time diagnostics and sustainability dashboards. 2nd place at Nagarro Hackathon",
      technologies: ["AI", "IoT", "Sustainability", "Dashboard", "React"],
      type: "Sustainability",
      status: "Award Winner"
    },
    {
      id: 3,
      title: "Deepfake Detector",
      description: "Advanced machine learning system to detect deepfake videos and images using computer vision and neural networks",
      technologies: ["Machine Learning", "Computer Vision", "Python", "Neural Networks", "OpenCV"],
      type: "AI/Security",
      status: "Completed"
    }
  ]);

  const [researchPapers, setResearchPapers] = useState([
    {
      id: 1,
      title: "Harnessing Data Engineering for Optimizing Blue-Green Infrastructure: Building Resilient and Sustainable Urban Ecosystems",
      description: "Integrating Blue-Green Infrastructure Into Urban Development",
      authors: "DR Seelam, MD Kidiyur, P Whig, A Whig",
      publication: "Integrating Blue-Green Infrastructure Into Urban Development",
      year: "2025",
      status: "Published",
      citedBy: 17
    },
    {
      id: 2,
      title: "Leveraging AI for Sustainable Drug Commercialization and Advanced Therapy Management in TVET Innovations in Cell and Gene Therapy and Patient Support",
      description: "Integrating AI and Sustainability in Technical and Vocational Education",
      authors: "PR Guttha, A Whig, P Whig",
      publication: "Integrating AI and Sustainability in Technical and Vocational Education",
      year: "2025",
      status: "Published",
      citedBy: 5
    },
    {
      id: 3,
      title: "Machine Learning for Environmental Sustainability in the Corporate World",
      description: "Driving Business Success Through Eco-Friendly Strategies",
      authors: "R Gera, S Banerjee, DV Saratchandran, S Arora, A Whig",
      publication: "Driving Business Success Through Eco-Friendly Strategies",
      year: "2025",
      status: "Published",
      citedBy: 5
    },
    {
      id: 4,
      title: "Sustainability: Innovations and Impacts",
      description: "Exploring the Impact of Extended Reality (XR) Technologies on Promoting Environmental Sustainability",
      authors: "A Whig, P Whig, SK Gupta",
      publication: "Exploring the Impact of Extended Reality (XR) Technologies",
      year: "2025",
      status: "Published",
      citedBy: null
    },
    {
      id: 5,
      title: "Harnessing XR Technologies and Deep Learning for Environmental Sustainability: Innovations and Impacts",
      description: "Exploring the Impact of Extended Reality (XR) Technologies on Promoting Environmental Sustainability",
      authors: "A Whig, P Whig, SK Gupta",
      publication: "Exploring the Impact of Extended Reality (XR) Technologies",
      year: "2025",
      status: "Published",
      citedBy: null
    },
    {
      id: 6,
      title: "Sustainable Innovation in Healthcare: The Role of Large Language Models",
      description: "AI-Enabled Sustainable Innovations in Education and Business",
      authors: "A Upadhyaya, MK Mishra, S Nandal, A Whig, P Whig",
      publication: "AI-Enabled Sustainable Innovations in Education and Business",
      year: "2025",
      status: "Published",
      citedBy: null
    },
    {
      id: 7,
      title: "AI-driven energy optimization: integrating smart meters, controllers, and cloud analytics for efficient urban infrastructure management",
      description: "Smart Cities integration for energy optimization using AI and IoT technologies",
      authors: "P Whig, SS Balantrapu, A Whig, N Alam, RS Shinde, PK Dutta",
      publication: "8th IET Smart Cities Symposium (SCS 2024)",
      year: "2024",
      status: "Published",
      citedBy: null
    }
  ]);

  const skills = [
    "Artificial Intelligence", "Machine Learning", "Deep Learning", 
    "Natural Language Processing", "Internet of Things", "Cloud Computing",
    "Extended Reality", "Blockchain", "Python", "JavaScript", "React",
    "Chrome Extensions", "Research", "Innovation", "Computer Vision"
  ];

  const achievements = [
    "School Topper",
    "Olympiad Gold Medalist", 
    "2nd Place - Nagarro Hackathon",
    "Published Research Contributor",
    "Threws Research Member"
  ];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating particles component
  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );

  // Fixed animation variants with proper TypeScript types
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      y: -10,
      rotateX: 5,
      rotateY: 5,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const handleAdminClick = () => {
    if (isAuthenticated) {
      setShowAdmin(true);
    } else {
      setShowLogin(true);
    }
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    setShowAdmin(true);
  };

  const handleLogout = () => {
    logout();
    setShowAdmin(false);
  };

  // Show login screen
  if (showLogin) {
    return <Login onBack={() => setShowLogin(false)} />;
  }

  // Show admin panel if authenticated and admin is requested
  if (showAdmin && isAuthenticated) {
    return (
      <AdminPanel 
        projects={projects} 
        setProjects={setProjects}
        onClose={() => setShowAdmin(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <FloatingParticles />
      
      {/* Animated background gradient */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-teal-600/10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Cursor follower */}
      <motion.div
        className="fixed w-6 h-6 bg-blue-400/20 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Admin Buttons */}
      <motion.div
        className="fixed top-4 right-4 z-50 flex gap-2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <AnimatePresence>
          {isAuthenticated && (
            <motion.button
              onClick={handleLogout}
              className="p-2 sm:p-3 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-colors backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              exit={{ scale: 0, opacity: 0 }}
              title="Logout"
            >
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          )}
        </AnimatePresence>
        <motion.button
          onClick={handleAdminClick}
          className="p-2 sm:p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors backdrop-blur-sm"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          title={isAuthenticated ? "Admin Panel" : "Login to Admin"}
        >
          <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
        style={{ y, opacity, scale }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
              className="mb-6"
            >
              <Sparkles className="w-12 h-12 mx-auto text-blue-400 animate-pulse" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 relative"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 15,
                }}
                transition={{ duration: 0.3 }}
              >
                {displayText}
                <motion.span
                  className="animate-pulse"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </motion.span>
              
              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Star className="w-full h-full text-yellow-400 opacity-70" />
              </motion.div>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-6 sm:mb-8 px-2"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              Computer Science & Engineering Student | AI Researcher | Innovation Enthusiast
            </motion.p>
            
            <motion.p 
              className="text-base sm:text-lg text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-2"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Passionate about AI-driven solutions for sustainability, EdTech innovations, and cutting-edge research at Delhi Technological University
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { icon: Mail, text: "Contact Me", onClick: () => window.open('mailto:contact@example.com'), primary: true },
                { icon: Github, text: "GitHub", onClick: () => window.open('https://github.com/TheAnumaan', '_blank'), primary: false },
                { icon: Linkedin, text: "LinkedIn", onClick: () => window.open('https://www.linkedin.com/in/anumaan-whig-41556b323/', '_blank'), primary: false }
              ].map((button, index) => (
                <motion.div key={index} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    className={`${button.primary 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600' 
                      : 'bg-slate-800/50 hover:bg-slate-700/50 text-blue-400 border-blue-400 hover:text-white hover:border-white border'}
                    px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base backdrop-blur-sm transition-all duration-300`}
                    variant={button.primary ? "default" : "outline"}
                    onClick={button.onClick}
                  >
                    <button.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    {button.text}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              About Me
            </motion.span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Education & Background",
                content: [
                  "Currently pursuing Computer Science & Engineering at Delhi Technological University (formerly DCE), one of India's premier technical institutions.",
                  "Active member and research contributor at Threws – The Research World, collaborating on cutting-edge research in AI, IoT, and sustainability."
                ]
              },
              {
                icon: Award,
                title: "Achievements",
                content: achievements
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                style={{ perspective: "1000px" }}
              >
                <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg h-full relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-white flex items-center gap-2 text-lg sm:text-xl">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                      </motion.div>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-300 text-sm sm:text-base relative z-10">
                    {Array.isArray(item.content) ? (
                      item.title === "Achievements" ? (
                        <div className="flex flex-wrap gap-2">
                          {item.content.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              whileHover={{ scale: 1.05, y: -2 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Badge className="bg-teal-900/30 text-teal-300 border-teal-700 text-xs sm:text-sm">
                                {achievement}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        item.content.map((paragraph, pIndex) => (
                          <motion.p 
                            key={pIndex} 
                            className={pIndex > 0 ? "mt-4" : ""}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: pIndex * 0.2 }}
                          >
                            {paragraph}
                          </motion.p>
                        ))
                      )
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Projects
            </motion.span>
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ perspective: "1000px" }}
              >
                <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg h-full relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <CardHeader className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <CardTitle className="text-white text-base sm:text-lg leading-tight">{project.title}</CardTitle>
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Badge className="bg-blue-900/30 text-blue-300 border-blue-700 text-xs w-fit">
                          {project.type}
                        </Badge>
                      </motion.div>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Badge className="w-fit bg-green-900/30 text-green-300 border-green-700 text-xs">
                        {project.status}
                      </Badge>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-slate-300 mb-4 text-sm sm:text-base">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Research Publications
            </motion.span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {researchPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ perspective: "1000px" }}
              >
                <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg h-full relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <CardHeader className="relative z-10">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <CardTitle className="text-white text-sm sm:text-base lg:text-lg leading-tight flex-1">{paper.title}</CardTitle>
                        <div className="flex flex-row sm:flex-col gap-2">
                          <motion.div whileHover={{ scale: 1.1 }}>
                            <Badge className="bg-purple-900/30 text-purple-300 border-purple-700 text-xs w-fit">
                              {paper.year}
                            </Badge>
                          </motion.div>
                          {paper.citedBy && (
                            <motion.div whileHover={{ scale: 1.1 }}>
                              <Badge className="bg-orange-900/30 text-orange-300 border-orange-700 text-xs w-fit">
                                Cited: {paper.citedBy}
                              </Badge>
                            </motion.div>
                          )}
                        </div>
                      </div>
                      <CardDescription className="text-slate-400 text-xs sm:text-sm">
                        {paper.authors}
                      </CardDescription>
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Badge className="w-fit bg-amber-900/30 text-amber-300 border-amber-700 text-xs">
                          {paper.status}
                        </Badge>
                      </motion.div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-slate-300 mb-4 text-sm sm:text-base">
                      {paper.description}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-400 flex-1">
                        {paper.publication}
                      </Badge>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 w-fit">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base backdrop-blur-sm"
                onClick={() => window.open('https://scholar.google.com/citations?hl=en&user=-HqYBtEAAAAJ&view_op=list_works', '_blank')}
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                View All Publications
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Skills & Technologies
            </motion.span>
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap gap-3 sm:gap-4 justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  rotateZ: Math.random() * 10 - 5,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
              >
                <Badge className="bg-slate-800/50 text-slate-200 border-slate-600 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm hover:bg-blue-900/30 hover:text-blue-300 hover:border-blue-700 transition-all duration-300 backdrop-blur-sm cursor-pointer">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Get In Touch
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg text-slate-300 mb-8 sm:mb-12 px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Interested in collaboration, research opportunities, or just want to connect? 
            I'm always open to discussing innovative projects and ideas.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Mail, text: "Email", onClick: () => window.open('mailto:contact@example.com'), color: "bg-blue-600 hover:bg-blue-700 text-white" },
              { icon: Linkedin, text: "LinkedIn", onClick: () => window.open('https://www.linkedin.com/in/anumaan-whig-41556b323/', '_blank'), color: "bg-slate-700 hover:bg-slate-600 text-white" },
              { icon: Github, text: "GitHub", onClick: () => window.open('https://github.com/TheAnumaan', '_blank'), color: "bg-slate-700 hover:bg-slate-600 text-white" },
              { icon: MapPin, text: "Delhi, India", color: "border-slate-600 text-slate-300 hover:bg-slate-700 bg-slate-800/50", variant: "outline" }
            ].map((button, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className={`${button.color} px-5 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base backdrop-blur-sm transition-all duration-300`}
                  variant={button.variant as any || "default"}
                  onClick={button.onClick}
                >
                  <button.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  {button.text}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50 backdrop-blur-sm relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.p 
            className="text-slate-400 text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
          >
            © 2024 Anumaan Whig. Built with passion for innovation and sustainability.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
