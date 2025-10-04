import { CTA } from "./sections/CTA";
import { Conheca } from "./sections/Conheca";
import { EventsCarousel } from "./sections/EventsCarousel";
import { Manifesto } from "./sections/Manifesto";
import { FAQ } from "./sections/FAQ";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { Testimonials } from "./sections/Testimonials";
import { UpcomingEvents } from "./sections/UpcomingEvents";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen text-[color:var(--color-foreground)]">
      <Navbar />
      <main>
        <Hero />
        <Conheca />
        {/* <EventsCarousel />
        <UpcomingEvents />
        <Features /> */}
        <Testimonials />
        <Manifesto />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
