import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { PainSection } from "@/components/sections/pain-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { CaseStudySection } from "@/components/sections/case-study-section";
import { CtaSection } from "@/components/sections/cta-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <PainSection />
      <ServicesSection />
      <ProcessSection />
      <CaseStudySection />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}
