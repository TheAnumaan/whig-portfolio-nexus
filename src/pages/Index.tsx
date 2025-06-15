import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Award, GraduationCap, Lightbulb, Code, Settings, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import AdminPanel from '@/components/AdminPanel';
import Login from '@/components/Login';

const Index = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { isAuthenticated, logout } = useAuth();
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Admin Button */}
      <motion.div
        className="fixed top-4 right-4 z-50 flex gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isAuthenticated && (
          <motion.button
            onClick={handleLogout}
            className="p-3 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </motion.button>
        )}
        <motion.button
          onClick={handleAdminClick}
          className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={isAuthenticated ? "Admin Panel" : "Login to Admin"}
        >
          <Settings className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Anumaan <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Whig</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Computer Science & Engineering Student | AI Researcher | Innovation Enthusiast
            </motion.p>
            
            <motion.p 
              className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Passionate about AI-driven solutions for sustainability, EdTech innovations, and cutting-edge research at Delhi Technological University
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full"
                onClick={() => window.open('https://github.com/TheAnumaan', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full"
                onClick={() => window.open('https://www.linkedin.com/in/anumaan-whig-41556b323/', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                    Education & Background
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p className="mb-4">
                    Currently pursuing Computer Science & Engineering at Delhi Technological University (formerly DCE), 
                    one of India's premier technical institutions.
                  </p>
                  <p>
                    Active member and research contributor at Threws – The Research World, collaborating on 
                    cutting-edge research in AI, IoT, and sustainability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-teal-400" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <Badge key={index} className="bg-teal-900/30 text-teal-300 border-teal-700">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                      <Badge className="bg-blue-900/30 text-blue-300 border-blue-700">
                        {project.type}
                      </Badge>
                    </div>
                    <Badge className="w-fit bg-green-900/30 text-green-300 border-green-700">
                      {project.status}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs border-slate-600 text-slate-400">
                          {tech}
                        </Badge>
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Research Publications
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {researchPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-white text-lg leading-tight">{paper.title}</CardTitle>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-purple-900/30 text-purple-300 border-purple-700">
                          {paper.year}
                        </Badge>
                        {paper.citedBy && (
                          <Badge className="bg-orange-900/30 text-orange-300 border-orange-700 text-xs">
                            Cited: {paper.citedBy}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-slate-400 text-sm">
                      {paper.authors}
                    </CardDescription>
                    <Badge className="w-fit bg-amber-900/30 text-amber-300 border-amber-700">
                      {paper.status}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 mb-4">
                      {paper.description}
                    </CardDescription>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                        {paper.publication}
                      </Badge>
                      <Button size="sm" variant="outline" className="ml-auto border-slate-600 text-slate-300 hover:bg-slate-700">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full"
              onClick={() => window.open('https://scholar.google.com/citations?hl=en&user=-HqYBtEAAAAJ&view_op=list_works', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Publications
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge className="bg-slate-800/50 text-slate-200 border-slate-600 px-4 py-2 text-sm hover:bg-blue-900/30 hover:text-blue-300 hover:border-blue-700 transition-all duration-300">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            className="text-lg text-slate-300 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Interested in collaboration, research opportunities, or just want to connect? 
            I'm always open to discussing innovative projects and ideas.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button 
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-full"
              onClick={() => window.open('https://www.linkedin.com/in/anumaan-whig-41556b323/', '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button 
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-full"
              onClick={() => window.open('https://github.com/TheAnumaan', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 px-6 py-3 rounded-full">
              <MapPin className="w-4 h-4 mr-2" />
              Delhi, India
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Anumaan Whig. Built with passion for innovation and sustainability.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
