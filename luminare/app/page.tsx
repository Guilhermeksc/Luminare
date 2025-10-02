import { CTA } from "./sections/CTA";
import { Conheca } from "./sections/Conheca";
import { EventsCarousel } from "./sections/EventsCarousel";
import { FAQ } from "./sections/FAQ";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { Testimonials } from "./sections/Testimonials";
import { UpcomingEvents } from "./sections/UpcomingEvents";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      <Navbar />
      <main>
        <Hero />
        <Conheca />
        <EventsCarousel />
        <UpcomingEvents />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
