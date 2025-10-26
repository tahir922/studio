import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experience';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/footer';
import { BackgroundParticles } from '@/components/background-particles';

export default function Home() {
  return (
    <div className="relative flex min-h-dvh w-full flex-col bg-background text-foreground">
      <BackgroundParticles className="fixed inset-0 -z-10" />
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
