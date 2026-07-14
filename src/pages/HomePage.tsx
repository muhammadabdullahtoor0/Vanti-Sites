import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { FrequentlyAskedQuestions } from "@/components/home/FrequentlyAskedQuestions";
import { GapSection } from "@/components/home/GapSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { RiskReversalSection } from "@/components/home/RiskReversalSection";
import { TransformationSection } from "@/components/home/TransformationSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main-content">
        <HeroSection />
        <GapSection />
        <TransformationSection />
        <CapabilitiesSection />
        <ProcessSection />
        <RiskReversalSection />
        <FrequentlyAskedQuestions />
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </>
  );
}
