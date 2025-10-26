import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { AtSign, Linkedin, MapPin } from 'lucide-react';

const AboutSection = () => {
  return (
    <Section id="about" className="bg-secondary/30">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold font-headline text-primary">About Me</h2>
          <p className="text-lg text-foreground/80">
            A passionate Unity Game Developer with over 5 years of experience, specializing in C# scripting, gameplay mechanics, and mobile game optimization. I thrive on creating engaging and high-performance gaming experiences. Currently contributing my skills at Connexus Technologies.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Connexus Technologies (Present)</Badge>
            <Badge variant="secondary">Bircube (2023-2024)</Badge>
            <Badge variant="secondary">Skippy Apps (2019-2023)</Badge>
          </div>
        </div>
        <div className="space-y-4 text-foreground/90">
            <h3 className="text-xl font-semibold font-headline">Contact Details</h3>
            <a href="mailto:tahir8722@gmail.com" className="flex items-center gap-3 group">
                <AtSign className="w-5 h-5 text-primary group-hover:animate-pulse" />
                <span className="group-hover:text-primary transition-colors">tahir8722@gmail.com</span>
            </a>
             <a href="https://www.linkedin.com/in/muhammad-tahir-807960126/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <Linkedin className="w-5 h-5 text-primary group-hover:animate-pulse" />
                <span className="group-hover:text-primary transition-colors">LinkedIn Profile</span>
            </a>
             <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Lahore, Pakistan</span>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
