"use client";

import { useState } from "react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Download, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple validation
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Mock submission for static export
    setTimeout(() => {
      toast({
        title: "Message Received!",
        description:
          "Thank you for your message! For now, please reach out via LinkedIn.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Section id="contact" className="bg-secondary/30">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold font-headline text-primary">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/80">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
          <div className="space-y-4 pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a
                href="https://docs.google.com/document/d/1wHOovbU5I4t43jujnGZEq7Z5ZbH0yEmP/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" /> Download My CV
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a
                href="https://www.linkedin.com/in/muhammad-tahir-807960126/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message here..."
              required
              minLength={10}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            disabled={isSubmitting}
          >
            <Send className="mr-2 h-4 w-4" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default ContactSection;
