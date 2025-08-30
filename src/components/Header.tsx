import { Button } from "@/components/ui/button";
import { Calendar, Upload, Trophy } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo & School Info */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-golden rounded-lg shadow-golden group-hover:shadow-lg transition-all duration-300">
              <Trophy className="h-8 w-8 text-secondary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Heritage Academy</h1>
              <p className="text-sm text-muted-foreground">Celebrating 75 Years of Excellence</p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button 
                variant={location.pathname === "/" ? "default" : "ghost"}
                className="flex items-center space-x-2"
              >
                <Calendar className="h-4 w-4" />
                <span>Events</span>
              </Button>
            </Link>
            
            <Link to="/admin">
              <Button 
                variant={location.pathname === "/admin" ? "secondary" : "outline"}
                className="flex items-center space-x-2"
              >
                <Upload className="h-4 w-4" />
                <span>Post Event</span>
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;