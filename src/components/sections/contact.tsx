"use client";

import { useFormStatus } from 'react-dom';
import { useActionState, useEffect } from 'react';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Download, Linkedin, Send, Loader2, Github, Smartphone, AtSign, MapPin } from 'lucide-react';
import { submitContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={pending}>
      {pending ? (
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
  );
}

const ContactSection = () => {
  const initialState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.success) {
        toast({
          title: "Message Sent!",
          description: state.message,
        });
      } else if (state.message) {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
  }, [state, toast]);

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
              <Link href="https://github.com/MuhammadTahir" target="_blank">
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
          <form action={dispatch} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" placeholder="Your Name" required className="bg-background/50" />
              {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="bg-background/50" />
              {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message here..." required minLength={10} className="bg-background/50 min-h-[120px]" />
              {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
