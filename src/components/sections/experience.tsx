import { Section } from '@/components/section';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    company: 'Connexus Technologies',
    role: 'Unity Game Developer',
    period: '04/2025 - Present',
    highlights: [
      'Leading development of new mobile game titles from concept to release.',
      'Implementing advanced gameplay mechanics and systems.',
      'Optimizing game performance for next-generation mobile devices.',
    ],
  },
  {
    company: 'Bircube',
    role: 'Unity Game Developer',
    period: '12/2023 - 11/2024',
    highlights: [
      'Worked on game optimization and performance for various titles.',
      'Integrated AdMob & Unity Ads to drive monetization strategies.',
      'Contributed to the development of high-quality 3D assets and environments.',
      'Designed and implemented engaging gameplay loops and UI/UX flows.',
    ],
  },
  {
    company: 'Skippy Apps',
    role: 'Unity Game Developer',
    period: '04/2019 - 07/2023',
    highlights: [
      'Developed and maintained multiple successful mobile games.',
      'Specialized in C# scripting for core gameplay features.',
      'Integrated In-App Purchases (IAP) and various advertising SDKs.',
      'Gained extensive experience in mobile game optimization techniques.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <Section id="experience">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline text-primary">Experience</h2>
        <p className="text-lg text-foreground/80 mt-2">My professional journey as a game developer.</p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-border/50" aria-hidden="true"></div>
        
        {experienceData.map((exp, index) => (
          <div key={exp.company} className="relative mb-12">
            <div className="md:flex items-center md:justify-normal md:gap-x-6">
                <div className="flex-1 md:text-right">
                    <div className={`md:text-right ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`p-6 rounded-lg bg-card border border-border/50 shadow-md ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                        <p className="text-sm text-primary font-semibold">{exp.period}</p>
                        <h3 className="text-xl font-bold font-headline mt-1">{exp.company}</h3>
                        <p className="text-md text-foreground/80 mb-4">{exp.role}</p>
                        <ul className="space-y-2 text-sm text-foreground/70 text-left list-disc pl-4">
                            {exp.highlights.map(highlight => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                      </div>
                    </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background rounded-full border-2 border-primary flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary"/>
                </div>

                <div className="flex-1 hidden md:block">
                </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
