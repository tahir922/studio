"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/section';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Youtube, Smartphone, Star, DownloadCloud, Play, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

const getYouTubeEmbedUrl = (url?: string) => {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0` : null;
};

const projects = [
  {
    id: 'highway-car-racing',
    title: 'Highway Car Racing: Car Games',
    studio: 'Funright Productions · Google Play',
    downloads: '10M+ downloads',
    rating: '★ 3.8 · 12.9K reviews',
    description: 'An arcade racer where players weave through highway traffic at high speed, shift gears and collect coins along the way.',
    role: 'Planned and built the core game functionality and the overall game design in Unity (C#).',
    builtWith: 'Unity (C#) for Android, with in-game ads and in-app purchases.',
    tech: ['Unity', 'C#', 'Traffic AI', 'Mobile Optimization', 'AdMob', 'IAP'],
    platform: 'Android',
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.frp.highway.car.race.stunts&hl=en',
    githubUrl: '',
    demoUrl: ''
  },
  {
    id: 'city-train-sim',
    title: 'City Train Games Driver Sim 3D',
    studio: 'Funright Productions · Google Play & PC',
    downloads: '10M+ downloads',
    rating: '★ 3.5 · 9.3K reviews',
    description: 'A train driving simulator with city metro and high-speed routes, signals, station stops and a full cab control panel.',
    role: 'Added new game modes and assets, integrated IAP and ads, and optimized performance for mobile.',
    builtWith: 'Unity (C#) for Android & PC, with in-game ads and in-app purchases.',
    tech: ['Unity', 'C#', 'Simulation', 'Mobile Optimization', 'IAP', 'Ads'],
    platform: 'Android / PC',
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.indian.train.driving.simulator&hl=en',
    githubUrl: '',
    demoUrl: ''
  },
  {
    id: 'car-transporter',
    title: 'Car Transporter 3D: Truck Games',
    studio: 'Funright Productions · Google Play',
    downloads: '1M+ downloads',
    rating: '★ 3.5 · 1.7K reviews',
    description: 'Players load cars onto a multi-deck transporter truck and deliver them along mountain and highway roads while watching their fuel.',
    role: 'Engineered truck physics, multi-deck trailer loading mechanics, and optimized rendering for mountain and highway scenes.',
    builtWith: 'Unity (C#) for Android, with in-game ads and in-app purchases.',
    tech: ['Unity', 'C#', 'Vehicle Physics', 'Trailer Mechanics', 'Mobile Optimization'],
    platform: 'Android',
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.frp.cartransport.truckdriving.simulator&hl=en',
    githubUrl: '',
    demoUrl: ''
  },
  {
    id: 'police-parking',
    title: 'Police Car Parking School Game',
    studio: 'RevEngine Studios · Google Play',
    downloads: '500K+ downloads',
    rating: '★ 4.1 · 563 reviews',
    description: 'A parking challenge where players steer police cars through tight courses of cones, barrels and shipping containers.',
    role: 'Planned and implemented all game functionality, including steering mechanics, parking detection, AdMob and Unity Ads integration.',
    builtWith: 'Unity (C#) for Android, with AdMob & Unity Ads.',
    tech: ['Unity', 'C#', 'Parking Physics', 'AdMob', 'Unity Ads'],
    platform: 'Android',
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.res.car.parking&hl=en',
    githubUrl: '',
    demoUrl: 'https://youtu.be/TOyOervSHco'
  },
  {
    id: 'truck-parking-jam',
    title: 'Truck Parking Jam Game: Puzzle',
    studio: 'Imperial Arts · Google Play',
    downloads: '1M+ downloads',
    rating: '★ 3.9 · 3.4K reviews',
    description: 'A truck parking simulator where players guide long trailers and oil tankers into tight spots across city and off-road levels.',
    role: 'Added new game modes and assets, handled IAP and ad integration, optimization and game design.',
    builtWith: 'Unity (C#) for Android, with in-game ads and in-app purchases.',
    tech: ['Unity', 'C#', 'Trailer Physics', 'Level Design', 'IAP', 'Ad Integration'],
    platform: 'Android',
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.impp.truck.parking.cargo.driver',
    githubUrl: '',
    demoUrl: ''
  },
  {
    id: 'city-roamer',
    title: 'City Roamer: Drive & Explore',
    studio: 'Gaming Studio One · Google Play',
    downloads: '5K+ downloads',
    rating: 'Open-world action',
    description: 'An open-world city game where players explore on foot, drive cars and bikes, and spawn vehicles with cheat codes on an in-game phone.',
    role: 'Implemented open-world character movement, driving mechanics, cheat-code phone dialer system, and vehicle spawner.',
    builtWith: 'Unity (C#) for Android, with in-game ads.',
    tech: ['Unity', 'C#', 'Open World', 'Cheat System', 'Vehicle Spawner'],
    platform: 'Android',
    status: 'Released',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.tom.gangster.openworld.gso.cure',
    githubUrl: '',
    demoUrl: ''
  },
  {
    id: 'city-ambulance',
    title: 'City Ambulance Hospital Rescue',
    studio: 'HighQ Games Studios · Google Play',
    downloads: '100K+ downloads',
    rating: '★ 3.4 · 71 reviews',
    description: 'An emergency rescue simulator where players drive an ambulance to accident scenes, load patients and race them to the hospital.',
    role: 'Built emergency siren systems, patient loading and hospital triage mechanics, vehicle handling, and ad/IAP integration.',
    builtWith: 'Unity (C#) for Android, with in-game ads and in-app purchases.',
    tech: ['Unity', 'C#', 'Emergency Simulation', 'AdMob', 'In-App Purchases'],
    platform: 'Android',
    status: 'Released',
    liveUrl: 'https://play.google.com/store/search?q=City+Ambulance+Hospital+Rescue+HighQ+Games+Studios&c=apps',
    githubUrl: '',
    demoUrl: ''
  }
];

type Project = (typeof projects)[0];

const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: (project: Project) => void; }) => {
  const image = PlaceHolderImages.find(p => p.id === project.id) || PlaceHolderImages[0];

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-card border border-border/50 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 flex flex-col h-full"
      onClick={() => onOpen(project)}
    >
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={image.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          data-ai-hint={image.imageHint}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {project.demoUrl && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-black/75 backdrop-blur-sm text-white px-2 py-0.5 rounded-md text-[10px] font-medium shadow-sm">
            <Play className="w-3 h-3 text-red-500 fill-current" /> Video Demo
          </div>
        )}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <Badge variant="secondary" className="bg-background/85 backdrop-blur-sm border-primary/20 text-[10px] py-0 font-medium">
            {project.platform}
          </Badge>
          <Badge className={`text-[10px] py-0 ${project.status === 'Released' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}`}>
            {project.status}
          </Badge>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold font-headline text-primary group-hover:text-primary/80 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-xs text-foreground/60 mt-1 font-medium">
          {project.studio}
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-3">
          <span className="inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20">
            {project.downloads}
          </span>
          <span className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full bg-secondary/80 text-foreground/80 border border-border/40">
            {project.rating}
          </span>
        </div>

        <p className="text-sm text-foreground/75 mt-3 line-clamp-2 flex-1 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map(t => (
            <Badge key={t} variant="outline" className="text-[10px] border-border/50 bg-background/50">
              {t}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="outline" className="text-[10px] border-border/50 text-foreground/50">
              +{project.tech.length - 4}
            </Badge>
          )}
        </div>
      </div>
      <div className="absolute inset-0 bg-primary/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <Button variant="outline" className="bg-background/90 backdrop-blur-sm border-primary/50 text-xs shadow-md">
          View Details
        </Button>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const image = PlaceHolderImages.find(p => p.id === selectedProject?.id) || PlaceHolderImages[0];
  const embedUrl = selectedProject ? getYouTubeEmbedUrl(selectedProject.demoUrl) : null;

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setShowVideo(false);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
    setShowVideo(false);
  };

  return (
    <>
      <Section id="projects">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline text-primary">Featured Projects</h2>
          <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">
            High-quality mobile games and simulations developed with Unity and C#.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(p => <ProjectCard key={p.id} project={p} onOpen={handleOpenProject} />)}
        </div>
      </Section>

      <Dialog open={!!selectedProject} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-3xl bg-card border-border/50">
          <DialogHeader>
            <DialogTitle className="text-2xl font-headline text-primary">{selectedProject?.title}</DialogTitle>
            {selectedProject && (
              <p className="text-sm text-foreground/60 font-medium">{selectedProject.studio}</p>
            )}
          </DialogHeader>
          {selectedProject && (
            <div className="grid md:grid-cols-2 gap-8 mt-2">
              <div className="space-y-4">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-border/50 bg-black shadow-inner">
                  {showVideo && embedUrl ? (
                    <iframe
                      src={embedUrl}
                      title={`${selectedProject.title} Gameplay Video Demo`}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <Image
                        src={image.imageUrl}
                        alt={selectedProject.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        data-ai-hint={image.imageHint}
                        className="object-cover"
                      />
                      {embedUrl && (
                        <button
                          type="button"
                          onClick={() => setShowVideo(true)}
                          className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/55 transition-colors group/play cursor-pointer"
                          aria-label="Play gameplay demo video"
                        >
                          <div className="w-14 h-14 rounded-full bg-red-600 group-hover/play:bg-red-700 text-white flex items-center justify-center shadow-2xl transition-transform group-hover/play:scale-110">
                            <Play className="w-6 h-6 ml-1 fill-white" />
                          </div>
                          <span className="mt-2 text-xs font-semibold text-white drop-shadow bg-black/70 px-3 py-1 rounded-full border border-white/20">
                            Play Gameplay Demo
                          </span>
                        </button>
                      )}
                    </>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="default" className="bg-primary/20 text-primary border-primary/30">
                    {selectedProject.downloads}
                  </Badge>
                  <Badge variant="secondary" className="border-border/50">
                    {selectedProject.rating}
                  </Badge>
                  {embedUrl && (
                    <button
                      type="button"
                      onClick={() => setShowVideo(!showVideo)}
                      className="text-[11px] font-semibold text-red-400 hover:text-red-300 transition-colors ml-auto flex items-center gap-1"
                    >
                      {showVideo ? (
                        <>
                          <ImageIcon className="w-3.5 h-3.5" /> View Screenshot
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" /> Watch Video
                        </>
                      )}
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map(t => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
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
              <div className="space-y-5">
                <div className="space-y-2">
                  <h4 className="font-semibold text-base text-foreground/90">Overview</h4>
                  <p className="text-foreground/80 leading-relaxed text-sm">{selectedProject.description}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-base text-foreground/90">My Role &amp; Contributions</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">{selectedProject.role}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-base text-foreground/90">Tech &amp; Architecture</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed italic">{selectedProject.builtWith}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 pt-3">
                    <Button asChild size="sm" variant="outline" disabled={!selectedProject.githubUrl}>
                        <Link href={selectedProject.githubUrl || "#"}>
                          <Github className="w-4 h-4 mr-2" /> GitHub
                        </Link>
                    </Button>
                    <Button
                        size="sm"
                        variant={showVideo ? "default" : "outline"}
                        disabled={!selectedProject.demoUrl}
                        onClick={() => setShowVideo(!showVideo)}
                        className={showVideo ? "bg-red-600 hover:bg-red-700 text-white" : ""}
                    >
                        <Youtube className="w-4 h-4 mr-2 text-red-500" />
                        {showVideo ? "Screenshot" : "Watch Demo"}
                    </Button>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground col-span-2" disabled={!selectedProject.liveUrl}>
                        <Link href={selectedProject.liveUrl || "#"} target="_blank">
                            <Smartphone className="w-4 h-4 mr-2" /> View on Google Play
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
