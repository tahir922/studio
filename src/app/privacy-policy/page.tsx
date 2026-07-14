import Header from '@/components/header';
import Footer from '@/components/footer';
import { BackgroundParticles } from '@/components/background-particles';

export default function PrivacyPolicyPage() {
  const currentYear = 2026;
  
  return (
    <div className="relative flex min-h-dvh w-full flex-col bg-background text-foreground">
      <BackgroundParticles className="fixed inset-0 -z-10" />
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-16 md:py-24 max-w-4xl">
        <div className="space-y-8 animate-slide-up-fade">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Privacy Policy</h1>
            <p className="text-foreground/60 italic">Effective Date: {currentYear}</p>
          </div>

          <section className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              This website is owned and operated by Muhammad Tahir. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">Information We Collect</h2>
              <p>
                We only collect information that you voluntarily submit through our contact form. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email Address</li>
                <li>Message Content</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">How Information is Used</h2>
              <p>
                The information collected is used solely for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your direct inquiries.</li>
                <li>To improve our services and communication.</li>
                <li>For professional correspondence regarding potential collaborations or projects.</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">Cookies</h2>
              <p>
                This website may use cookies to analyze web traffic and provide a better browsing experience. Cookies are small files stored on your device that help us understand user behavior.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">Third-Party Services</h2>
              <p>
                We may use third-party services to enhance our website functionality:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Analytics (for traffic insights)</li>
                <li>Firebase (for hosting and analytics)</li>
                <li>Google Fonts (for typography)</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">Security</h2>
              <p>
                We take reasonable and appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold font-headline text-foreground">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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
