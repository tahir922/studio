import Header from '@/components/header';
import Footer from '@/components/footer';
import { BackgroundParticles } from '@/components/background-particles';

export default function TermsOfServicePage() {
  return (
    <div className="relative flex min-h-dvh w-full flex-col bg-background text-foreground">
      <BackgroundParticles className="fixed inset-0 -z-10" />
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-16 md:py-24 max-w-4xl">
        <div className="space-y-8 animate-slide-up-fade">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Terms of Service</h1>
            <p className="text-foreground/60">Last Updated: 2026</p>
          </div>

          <section className="space-y-6 text-foreground/80 leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">1. Website Usage</h2>
              <p>
                By accessing this website, you agree to use it only for lawful purposes. You are prohibited from using this site in any way that could damage, disable, or impair the site or interfere with any other party's use.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">2. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and code, is the property of Muhammad Tahir and is protected by international copyright and intellectual property laws. Reproduction or distribution of any content without prior written consent is strictly prohibited.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">3. Disclaimer</h2>
              <p>
                The information provided on this website is for general informational purposes only. While I strive for accuracy, I make no warranties about the completeness or reliability of the information. Any action you take based on the website's content is at your own risk.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">4. External Links</h2>
              <p>
                This website contains links to third-party sites (e.g., Google Play, LinkedIn, GitHub). I do not control or endorse the content of these sites and am not responsible for their availability or privacy practices.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">5. Limitation of Liability</h2>
              <p>
                Under no circumstances shall Muhammad Tahir be liable for any direct, indirect, incidental, or consequential damages arising out of your use of this website.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-border/50">
              <h2 className="text-2xl font-bold font-headline text-foreground">Contact Information</h2>
              <p>
                For questions regarding these Terms of Service, please reach out via email:
              </p>
              <p className="font-bold text-primary">tahir8722@gmail.com</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
