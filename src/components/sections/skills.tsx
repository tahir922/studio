"use client";

import { useRef, useEffect, useState } from 'react';
import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { Code, Smartphone, Palette, Settings, Languages } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

const skillsData = {
  primary: {
    icon: Code,
    title: 'Primary Skills',
    skills: [
      { name: 'Unity3D', level: 95, icon: Icons.unity },
      { name: 'C#', level: 95, icon: Icons.csharp },
      { name: 'OOP', level: 90 },
      { name: 'Design Patterns', level: 85 },
    ],
  },
  mobile: {
    icon: Smartphone,
    title: 'Mobile & Performance',
    skills: [
      { name: 'Game Optimization', level: 90 },
      { name: 'Memory Optimization', level: 85 },
      { name: 'Rendering Optimization', level: 80 },
    ],
  },
  ui: {
    icon: Palette,
    title: 'UI/UX',
    skills: [
      { name: 'DoTween Animations', level: 95 },
      { name: 'Responsive GUI', level: 90 },
    ],
  },
  tools: {
    icon: Settings,
    title: 'Services & Tools',
    skills: [
      { name: 'AdMob & Unity Ads', level: 90 },
      { name: 'Firebase Analytics', level: 80 },
      { name: 'Git/GitHub/SVN', level: 85 },
      { name: 'Asana & Slack', level: 95 },
    ],
  },
  languages: {
    icon: Languages,
    title: 'Languages',
    skills: [
      { name: 'English', level: 85 },
      { name: 'Urdu', level: 100 },
      { name: 'Pashto', level: 100 },
    ],
  },
};

const SkillBar = ({ name, level, icon: Icon }: { name: string; level: number; icon?: React.FC<any> }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={barRef} className="w-full">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
            {Icon && <Icon className="w-4 h-4 text-primary" />}
            <span className="font-medium text-foreground/90 text-sm">{name}</span>
        </div>
        <span className="text-xs font-mono text-primary">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: isInView ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
};


const SkillsSection = () => {
  return (
    <Section id="skills" className="bg-secondary/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline text-primary">Skills & Tech</h2>
        <p className="text-lg text-foreground/80 mt-2">My technical arsenal for building games.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {Object.values(skillsData).map(category => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-xl font-bold font-headline flex items-center gap-3">
              <category.icon className="w-6 h-6 text-accent" />
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map(skill => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
