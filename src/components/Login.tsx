
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

interface LoginProps {
  onBack: () => void;
}

const Login = ({ onBack }: LoginProps) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a brief loading state
    setTimeout(() => {
      const success = login(password);
      
      if (success) {
        toast({
          title: "Success",
          description: "Welcome to the admin panel!"
        });
      } else {
        toast({
          title: "Error",
          description: "Incorrect password. Please try again.",
          variant: "destructive"
        });
        setPassword('');
      }
      
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-600 rounded-full">
                <Lock className="w-6 h-6 text-white" />
              </div>
            </div>
            <CardTitle className="text-white text-2xl">Admin Access</CardTitle>
            <CardDescription className="text-slate-300">
              Enter the password to access the admin panel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="password" className="text-slate-200">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                  placeholder="Enter admin password"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className="flex gap-4">
                <Button 
                  type="submit" 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? 'Verifying...' : 'Login'}
                </Button>
                <Button 
                  type="button" 
                  onClick={onBack}
                  variant="outline" 
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  disabled={isLoading}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
