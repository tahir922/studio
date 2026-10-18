"use client";

import { useState, useRef } from 'react';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Download, Linkedin, Send, Loader2, Github, Smartphone, AtSign, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const WEB3FORMS_ACCESS_KEY = "828809d2-8210-4c27-9d07-bcf5f1978ae8";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
          subject: `New portfolio inquiry from ${name}`,
          from_name: "Muhammad Tahir Portfolio",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out! Your message was sent directly to Tahir.",
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Submission Notice",
          description: result.message || "Failed to send message. Please check domain authorization.",
          variant: "destructive",
        });
      }
    } catch (err: any) {
      toast({
        title: "Error",
        description: "Network error occurred. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-secondary/30">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline text-primary">Contact</h2>
            <div className="space-y-1">
               <p className="text-xl font-bold text-foreground">Muhammad Tahir</p>
               <p className="text-foreground/60">Independent Unity Game Developer</p>
               <p className="flex items-center gap-2 text-foreground/60 text-sm">
                 <MapPin className="w-4 h-4 text-primary" /> Pakistan
               </p>
            </div>
            <p className="text-lg text-foreground/80">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:tahir8722@gmail.com" className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20">
                <AtSign className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-foreground/50 uppercase font-bold">Email</p>
                <p className="text-foreground/90 font-medium">tahir8722@gmail.com</p>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild variant="outline" size="sm">
              <Link href="https://github.com/tahir922" target="_blank">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="https://www.linkedin.com/in/muhammad-tahir-807960126/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="https://play.google.com/store/apps/dev?id=5180631627091238474" target="_blank">
                <Smartphone className="mr-2 h-4 w-4" /> Google Play
              </Link>
            </Button>
            <Button asChild variant="secondary" size="sm">
              <a href="https://drive.google.com/uc?export=download&id=1wHOovbU5I4t43jujnGZEq7Z5ZbH0yEmP" target="_blank">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
          </div>
        </div>

        <div className="bg-card p-8 rounded-xl border border-border/50 shadow-sm">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" placeholder="Your Name" required className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message here..." required minLength={10} className="bg-background/50 min-h-[120px]" />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
