import Link from 'next/link';
import { Linkedin, Github, Smartphone, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = 2026;
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const legalItems = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ];

  const socialItems = [
    { label: 'GitHub', href: 'https://github.com/MuhammadTahir', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-tahir-807960126/', icon: Linkedin },
    { label: 'Google Play', href: 'https://play.google.com/store/apps/dev?id=5180631627091238474', icon: Smartphone },
  ];

  return (
    <footer className="bg-background border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="text-2xl font-bold font-headline text-primary">
              Tahir.dev
            </Link>
            <p className="text-foreground/60 max-w-sm leading-relaxed">
              Muhammad Tahir — Independent Unity Game Developer focused on creating high-performance, engaging mobile experiences.
            </p>
            <p className="text-sm font-semibold text-foreground/40 pt-4">
              Pakistan | Independent Developer
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h4 className="font-bold font-headline text-sm uppercase tracking-wider text-foreground/80">Navigation</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-foreground/50 hover:text-primary transition-colors flex items-center gap-2 text-sm group">
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h4 className="font-bold font-headline text-sm uppercase tracking-wider text-foreground/80">Support & Legal</h4>
            <ul className="space-y-2">
              {legalItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-foreground/50 hover:text-primary transition-colors flex items-center gap-2 text-sm group">
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 flex gap-4">
                {socialItems.map((item) => (
                  <Link key={item.label} href={item.href} target="_blank" className="text-foreground/40 hover:text-primary transition-colors" title={item.label}>
                    <item.icon className="w-5 h-5" />
                  </Link>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-foreground/40">
            &copy; {currentYear} Muhammad Tahir. All rights reserved.
          </div>
          <div className="text-xs text-foreground/30 italic">
            Developed with Next.js & Unity Spirit.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
