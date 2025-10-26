"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

const useTypewriter = (text: string, speed = 50, startDelay = 500) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const startTimeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(typingInterval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay]);

  return { displayText, isTyping };
};

const HeroSection = () => {
  const { displayText: headline, isTyping: isHeadlineTyping } = useTypewriter("Muhammad Tahir", 70);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = el;
      const x = (clientX / offsetWidth - 0.5) * 2;
      const y = (clientY / offsetHeight - 0.5) * 2;
      
      el.style.setProperty('--parallax-x', `${x * -5}px`);
      el.style.setProperty('--parallax-y', `${y * -5}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleViewProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full h-[80dvh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        ref={heroRef}
        className="absolute inset-0 bg-grid transition-transform duration-500 ease-out"
        style={{
          '--parallax-x': '0px',
          '--parallax-y': '0px',
          transform: 'translate(var(--parallax-x), var(--parallax-y))',
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(to right, hsl(var(--border) / 0.5) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.5) 1px, transparent 1px)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 text-center px-4 animate-slide-up-fade">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          <span className="text-primary">{headline}</span>
          <span className={cn("ml-1 transition-opacity duration-300", isHeadlineTyping ? "opacity-100" : "opacity-0")}>_</span>
          <br />
          <span className="text-foreground">Unity Game Developer</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-foreground/80 mb-2">
          C# | Gameplay &amp; Systems | Mobile Game Optimization
        </p>
        <p className="max-w-2xl mx-auto text-base text-foreground/60 mb-8">
          Experienced game developer specialising in C# scripting, gameplay mechanics, mobile optimisation and UI using DoTween.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
            <a href="#projects" onClick={handleViewProjectsClick}>
              <Eye className="mr-2 h-5 w-5 group-hover:animate-pulse" /> View Projects
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="group border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <a href="https://drive.google.com/uc?export=download&id=1wHOovbU5I4t43jujnGZEq7Z5ZbH0yEmP" target="_blank" rel="noopener noreferrer">
               <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" /> Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
