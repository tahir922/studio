import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { AtSign, Linkedin, MapPin, CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const specializations = [
    'Mobile Game Development', 'Unity 3D', 'C#', 'Gameplay Programming',
    'Game Optimization', 'UI Systems', 'Firebase Integration',
    'AdMob Integration', 'Addressables', 'Mobile Performance Optimization'
  ];

  return (
    <Section id="about" className="bg-secondary/30">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold font-headline text-primary">About Me</h2>
          <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
            <p>
              Muhammad Tahir is an independent Unity Game Developer based in Pakistan with over 6 years of professional experience in Unity and C#.
            </p>
            <p>
              I specialize in creating high-quality Android games and gameplay systems while focusing on clean architecture, performance, and excellent player experience.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-3 pt-4">
            {specializations.map((item) => (
              <div key={item} className="flex items-center gap-2 text-foreground/70">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-foreground/50 italic border-t border-border/50 pt-6">
            This portfolio website is owned and maintained by Muhammad Tahir.
          </p>
        </div>
        
        <div className="space-y-6 bg-card p-6 rounded-xl border border-border/50 shadow-sm">
            <h3 className="text-xl font-semibold font-headline">Contact Details</h3>
            <div className="space-y-4">
                <a href="mailto:tahir8722@gmail.com" className="flex items-center gap-3 group">
                    <AtSign className="w-5 h-5 text-primary group-hover:animate-pulse" />
                    <span className="group-hover:text-primary transition-colors">tahir8722@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-tahir-807960126/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <Linkedin className="w-5 h-5 text-primary group-hover:animate-pulse" />
                    <span className="group-hover:text-primary transition-colors">LinkedIn Profile</span>
                </a>
                <div className="flex items-center gap-3 text-foreground/80">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Lahore, Pakistan</span>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
