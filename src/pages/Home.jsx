import React from "react";
import SiteNavbar from "@/components/site/SiteNavbar";
import Hero from "@/components/site/Hero";
import AboutSection from "@/components/site/AboutSection";
import ThemeSection from "@/components/site/ThemeSection";
import WhyAttendSection from "@/components/site/WhyAttendSection";
import ExperienceCardsSection from "@/components/site/ExperienceCardsSection";
import ProgramSection from "@/components/site/ProgramSection";
import FeaturedSpeakers from "@/components/site/FeaturedSpeakers";
import AIinaction from "@/components/site/AIinaction";
import ExhibitsSection from "@/components/site/ExhibitsSection";
import FloorPlanSection from "@/components/site/FloorPlanSection";
import RegistrationSection from "@/components/site/RegistrationSection";
import CounterParticipant from "@/components/site/CounterParticipant";
import SiteFooter from "@/components/site/SiteFooter";
import Whoshouldattend from "@/components/site/Whoshouldattend";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#002855] antialiased">
      <SiteNavbar />
      <Hero />
      <CounterParticipant />
      <AboutSection />
      {/*<ThemeSection /> */}
     {/*<WhyAttendSection /> */}
      <ExperienceCardsSection />
      <ProgramSection />
      <FeaturedSpeakers />
     {/* <AIinaction />*/}
      {/*<ExhibitsSection />*/}
      <FloorPlanSection />
      <Whoshouldattend />
      <RegistrationSection />
      <SiteFooter />
    </div>
  );
}
