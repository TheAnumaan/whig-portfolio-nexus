
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Plus, Edit, Trash2, Save, ArrowLeft } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  type: string;
  status: string;
}

interface AdminPanelProps {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  onClose: () => void;
}

const AdminPanel = ({ projects, setProjects, onClose }: AdminPanelProps) => {
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    type: '',
    status: ''
  });

  const projectTypes = ['EdTech', 'Sustainability', 'Research', 'AI/ML', 'IoT', 'Web Development'];
  const statusOptions = ['Completed', 'In Progress', 'Award Winner', 'Published', 'Planning'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.type || !formData.status) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const techArray = formData.technologies.split(',').map(tech => tech.trim()).filter(tech => tech);
    
    if (editingProject) {
      // Update existing project
      const updatedProjects = projects.map(project => 
        project.id === editingProject.id 
          ? {
              ...project,
              title: formData.title,
              description: formData.description,
              technologies: techArray,
              type: formData.type,
              status: formData.status
            }
          : project
      );
      setProjects(updatedProjects);
      toast({
        title: "Success",
        description: "Project updated successfully!"
      });
    } else {
      // Add new project
      const newProject: Project = {
        id: Math.max(...projects.map(p => p.id), 0) + 1,
        title: formData.title,
        description: formData.description,
        technologies: techArray,
        type: formData.type,
        status: formData.status
      };
      setProjects([...projects, newProject]);
      toast({
        title: "Success",
        description: "Project added successfully!"
      });
    }

    // Reset form
    setFormData({ title: '', description: '', technologies: '', type: '', status: '' });
    setIsAddingProject(false);
    setEditingProject(null);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(', '),
      type: project.type,
      status: project.status
    });
    setIsAddingProject(true);
  };

  const handleDelete = (projectId: number) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== projectId));
      toast({
        title: "Success",
        description: "Project deleted successfully!"
      });
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', technologies: '', type: '', status: '' });
    setIsAddingProject(false);
    setEditingProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <Button 
              onClick={onClose}
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
            <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
          </div>
          <Button 
            onClick={() => setIsAddingProject(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Project
          </Button>
        </motion.div>

        {/* Add/Edit Project Form */}
        {isAddingProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-8 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                  <Button 
                    onClick={resetForm}
                    variant="ghost" 
                    size="sm"
                    className="text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title" className="text-slate-200">Project Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="Enter project title"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="type" className="text-slate-200">Project Type *</Label>
                      <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          {projectTypes.map(type => (
                            <SelectItem key={type} value={type} className="text-white hover:bg-slate-600">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="status" className="text-slate-200">Status *</Label>
                      <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          {statusOptions.map(status => (
                            <SelectItem key={status} value={status} className="text-white hover:bg-slate-600">
                              {status}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="technologies" className="text-slate-200">Technologies</Label>
                      <Input
                        id="technologies"
                        value={formData.technologies}
                        onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="React, Node.js, AI (comma-separated)"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-slate-200">Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white min-h-[100px]"
                      placeholder="Describe your project..."
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Save className="w-4 h-4 mr-2" />
                      {editingProject ? 'Update Project' : 'Add Project'}
                    </Button>
                    <Button type="button" onClick={resetForm} variant="outline" className="border-slate-600 text-slate-300">
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Projects List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Manage Projects ({projects.length})</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg mb-2">{project.title}</CardTitle>
                        <div className="flex gap-2 mb-2">
                          <Badge className="bg-blue-900/30 text-blue-300 border-blue-700">
                            {project.type}
                          </Badge>
                          <Badge className="bg-green-900/30 text-green-300 border-green-700">
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          onClick={() => handleEdit(project)}
                          size="sm" 
                          variant="outline"
                          className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          onClick={() => handleDelete(project.id)}
                          size="sm" 
                          variant="outline"
                          className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
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

          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">No projects added yet.</p>
              <Button 
                onClick={() => setIsAddingProject(true)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Project
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel;
