import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="container-wide flex items-center justify-between text-sm">
        <a 
          href="mailto:info@energique.com" 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Mail className="w-4 h-4" />
          <span>info@energique.com</span>
        </a>
        
        <nav className="flex items-center gap-6">
          <Link 
            to="/contact" 
            className="hover:opacity-80 transition-opacity"
          >
            Contact
          </Link>
          <Link 
            to="/news" 
            className="hover:opacity-80 transition-opacity"
          >
            News
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;
