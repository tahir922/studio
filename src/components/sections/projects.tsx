"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/section';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Youtube, Smartphone } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 'floral-guardian',
    title: 'Floral Guardian',
    description: 'Third-person farming and combat adventure game built with Unity.',
    contributions: 'Developed core adventure mechanics, farming systems, and combat AI. Focused on high-fidelity performance and player progression.',
    tech: ['Unity', 'C#', '3D Combat', 'Farming System'],
    platform: 'Android / PC',
    status: 'In Development',
    liveUrl: '',
    githubUrl: '',
    demoUrl: ''
  },
  {
    id: 'traffic-racing',
    title: 'Highway Car Racing: Car Games',
    description: 'A thrilling 3D car racing game set on a busy highway.',
    contributions: 'Led complete game development cycle. Integrated IAP and ad networks. Mobile optimization for low-end devices.',
    tech: ['C#', 'Unity', 'Optimization', 'AdMob'],
    platform: 'Android',
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.frp.highway.car.race.stunts&hl=en',
    githubUrl: '',
    demoUrl: ''
  },
  {
    id: 'train-sim',
    title: 'City Train Games Driver Sim 3D',
    description: 'A realistic train simulator navigating a bustling city.',
    contributions: 'Implemented new game modes and updated existing ones. Managed asset integration and performance tuning.',
    tech: ['Unity', 'C#', 'Simulation', 'Mobile'],
    platform: 'Android',
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.indian.train.driving.simulator&hl=en',
    githubUrl: '',
    demoUrl: ''
  },
  {
    id: 'car-transporter',
    title: 'Car Transporter 3d: Truck Games',
    description: 'Heavy truck driving simulator for transporting cars across challenges.',
    contributions: 'Engineered truck physics and trailer attachment logic. Optimized performance for large city environments.',
    tech: ['Unity', 'C#', 'Vehicle Physics', 'Mobile'],
    platform: 'Android',
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.frp.cartransport.truckdriving.simulator&hl=en',
    githubUrl: '',
    demoUrl: ''
  },
  {
    id: 'police-parking',
    title: 'Police Car Parking School Game',
    description: 'Precision driving and parking simulator with high-stakes law enforcement theme.',
    contributions: 'Developed advanced parking detection systems and responsive steering controls.',
    tech: ['Unity', 'C#', 'Simulation', 'Mobile'],
    platform: 'Android',
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.res.car.parking&hl=en',
    githubUrl: '',
    demoUrl: ''
  },
  {
    id: 'truck-parking-jam',
    title: 'Truck Parking Jam Game: Puzzle',
    description: 'Challenging logistics puzzle game involving truck unblocking.',
    contributions: 'Created the grid-based puzzle logic and dynamic level difficulty scaling.',
    tech: ['Unity', 'C#', 'Puzzle Engine', 'Mobile'],
    platform: 'Android',
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.impp.truck.parking.cargo.driver',
    githubUrl: '',
    demoUrl: ''
  },
  {
    id: 'alphabet-rush',
    title: 'Alphabet Rush',
    description: 'Fast-paced educational runner game for mobile devices.',
    contributions: 'Led the development of character movements and collectable systems during tenure at Bircube.',
    tech: ['Unity', 'C#', 'Runner', 'Mobile'],
    platform: 'Android',
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.bircube.alphabetrush&hl=en',
    githubUrl: '',
    demoUrl: ''
  },
  {
    id: 'gangster-x',
    title: 'Gangster X: Open World Game',
    description: 'Immersive open-world action game with vehicle theft and exploration.',
    contributions: 'Implemented AI traffic systems and character interaction mechanics.',
    tech: ['Unity', 'C#', 'Open World', 'Mobile'],
    platform: 'Android',
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.tom.gangster.openworld.gso.cure',
    githubUrl: '',
    demoUrl: ''
  }
];

type Project = (typeof projects)[0];

const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: (project: Project) => void; }) => {
  const image = PlaceHolderImages.find(p => p.id === project.id) || PlaceHolderImages[0];

  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-card border border-border/50 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 flex flex-col h-full"
      onClick={() => onOpen(project)}
    >
      <div className="relative h-48 w-full">
        <Image
          src={image.imageUrl}
          alt={project.title}
          fill
          data-ai-hint={image.imageHint}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm border-primary/20 text-[10px] py-0">
            {project.platform}
          </Badge>
          <Badge className={`text-[10px] py-0 ${project.status === 'Released' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}`}>
            {project.status}
          </Badge>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold font-headline text-primary group-hover:text-primary/80 transition-colors">{project.title}</h3>
        <p className="text-sm text-foreground/70 mt-2 line-clamp-2 flex-1">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map(t => <Badge key={t} variant="outline" className="text-[10px] border-border/50">{t}</Badge>)}
        </div>
      </div>
      <div className="absolute inset-0 bg-primary/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/50 pointer-events-none">Details</Button>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const image = PlaceHolderImages.find(p => p.id === selectedProject?.id) || PlaceHolderImages[0];

  return (
    <>
      <Section id="projects">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline text-primary">Featured Projects</h2>
          <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">High-quality mobile games and simulations developed with Unity and C#.</p>
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
            <div className="grid md:grid-cols-2 gap-8 mt-4">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-md overflow-hidden border border-border/50">
                  <Image
                    src={image.imageUrl}
                    alt={selectedProject.title}
                    fill
                    data-ai-hint={image.imageHint}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                   <div className="p-3 rounded-lg bg-secondary/20 border border-border/50">
                     <p className="text-foreground/50 text-[10px] uppercase font-bold">Platform</p>
                     <p className="font-semibold text-foreground/90">{selectedProject.platform}</p>
                   </div>
                   <div className="p-3 rounded-lg bg-secondary/20 border border-border/50">
                     <p className="text-foreground/50 text-[10px] uppercase font-bold">Status</p>
                     <p className="font-semibold text-foreground/90">{selectedProject.status}</p>
                   </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-foreground/90">Overview</h4>
                  <p className="text-foreground/80 leading-relaxed">{selectedProject.description}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-foreground/90">Contributions</h4>
                  <p className="text-foreground/70 text-sm italic">{selectedProject.contributions}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 pt-4">
                    <Button asChild size="sm" variant="outline" disabled={!selectedProject.githubUrl}>
                        <Link href={selectedProject.githubUrl || "#"}>
                          <Github className="w-4 h-4 mr-2" /> GitHub
                        </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" disabled={!selectedProject.demoUrl}>
                        <Link href={selectedProject.demoUrl || "#"}>
                          <Youtube className="w-4 h-4 mr-2" /> Demo
                        </Link>
                    </Button>
                    <Button asChild size="sm" className="bg-primary/10 border-primary/50 text-primary hover:bg-primary/20 col-span-2" disabled={!selectedProject.liveUrl}>
                        <Link href={selectedProject.liveUrl || "#"} target="_blank">
                            <Smartphone className="w-4 h-4 mr-2" /> Google Play
                        </Link>
                    </Button>
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
