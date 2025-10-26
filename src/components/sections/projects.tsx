"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/section';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Youtube } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 'traffic-racing',
    title: 'Highway Car Racing: Car Games',
    description: 'A thrilling 3D car racing game set on a busy highway.',
    contributions: 'Led complete game development cycle, from planning to implementation. Integrated IAP and various ad networks, and performed extensive mobile optimization for smooth gameplay on a wide range of devices.',
    tech: ['C#', 'Unity', 'Mobile', 'Optimization', 'IAP', 'AdMob'],
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.frp.highway.car.race.stunts',
  },
  {
    id: 'train-sim',
    title: 'City Train Games Driver Sim 3D',
    description: 'A realistic train simulator navigating a bustling city.',
    contributions: 'Implemented new game modes and updated existing ones. Managed asset integration, IAP & ad services, and enhanced game design and performance.',
    tech: ['Unity', 'C#', 'Game Design', 'IAP', 'Ads'],
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.indian.train.driving.simulator',
  },
  {
    id: 'car-transporter',
    title: 'Car Transporter 3d:Truck Games',
    description: 'A challenging game about transporting cars with a heavy truck.',
    contributions: 'Developed core game modes and mechanics. Integrated IAP and advertising solutions, and focused on performance tuning for mobile platforms.',
    tech: ['C#', 'Unity', 'Mobile', 'Optimization', 'IAP'],
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.frp.cartransport.truckdriving.simulator',
  },
  {
    id: 'police-parking',
    title: 'Police Car Parking School Game',
    description: 'A simulation game for learning to park police cars.',
    contributions: 'Responsible for full-cycle game development. Implemented AdMob & Unity Ads for monetization and ensured a polished user experience.',
    tech: ['Unity', 'C#', 'AdMob', 'Unity Ads', 'Mobile'],
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.res.car.parking',
  },
  {
    id: 'truck-parking-puzzle',
    title: 'Truck parking Jam Game: Puzzle',
    description: 'A challenging puzzle game where you manage a crowded parking lot.',
    contributions: 'Designed and developed the core puzzle mechanics and level progression system. Implemented UI/UX, and integrated monetization features like ads.',
    tech: ['Unity', 'C#', 'Puzzle Design', 'Mobile'],
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.impp.truck.parking.cargo.driver',
  },
];

type Project = (typeof projects)[0];

const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: (project: Project) => void; }) => {
  const image = PlaceHolderImages.find(p => p.id === project.id);

  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-card border border-border/50 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2"
      onClick={() => onOpen(project)}
    >
      {image && (
        <Image
          src={image.imageUrl}
          alt={project.title}
          width={600}
          height={400}
          data-ai-hint={image.imageHint}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold font-headline text-primary">{project.title}</h3>
        <p className="text-sm text-foreground/80 mt-1 h-10">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
        </div>
      </div>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white font-bold text-lg">View Details</span>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const image = PlaceHolderImages.find(p => p.id === selectedProject?.id);

  return (
    <>
      <Section id="projects">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline text-primary">Projects</h2>
          <p className="text-lg text-foreground/80 mt-2">A selection of games I've worked on.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(p => <ProjectCard key={p.id} project={p} onOpen={setSelectedProject} />)}
        </div>
      </Section>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-card border-border/50">
          <DialogHeader>
            <DialogTitle className="text-2xl font-headline text-primary">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={selectedProject.title}
                    width={600}
                    height={400}
                    data-ai-hint={image.imageHint}
                    className="rounded-md object-cover"
                  />
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.tech.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-foreground/90">Contributions</h4>
                <p className="text-foreground/80">{selectedProject.contributions}</p>
                 <Badge className={selectedProject.status === 'Released' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}>
                    {selectedProject.status}
                </Badge>
                <div className="flex gap-2 pt-4">
                    <Button variant="outline" disabled><Github className="w-4 h-4 mr-2" />Source</Button>
                    <Button variant="outline" disabled><Youtube className="w-4 h-4 mr-2" />Demo</Button>
                    {selectedProject.liveUrl && (
                        <Button asChild className="bg-primary/10 border-primary/50 text-primary hover:bg-primary/20">
                            <Link href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />Live
                            </Link>
                        </Button>
                    )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectsSection;
