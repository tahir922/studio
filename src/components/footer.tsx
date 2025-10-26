import Link from 'next/link';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} Muhammad Tahir. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://www.linkedin.com/in/muhammad-tahir-807960126/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
