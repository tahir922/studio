"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Download, Linkedin, Send, Loader2 } from 'lucide-react';
import { submitContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={pending}>
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
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Message Sent!",
          description: state.message,
        });
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <Section id="contact" className="bg-secondary/30">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold font-headline text-primary">Get In Touch</h2>
          <p className="text-lg text-foreground/80">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
          <div className="space-y-4 pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="/muhammad_tahir_cv.pdf" download>
                <Download className="mr-2 h-5 w-5" /> Download My CV
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="https://www.linkedin.com/in/muhammad-tahir-gamedev/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>

        <form action={dispatch} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text" placeholder="Your Name" required />
            {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
            {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Your message here..." required minLength={10} />
            {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
          </div>
          <SubmitButton />
        </form>
      </div>
    </Section>
  );
};

export default ContactSection;
