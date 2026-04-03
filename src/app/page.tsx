import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import CTASection from "@/components/CTASection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AC Repair & Service in Faridabad & NCR | Expert Technicians",
  description:
    "Professional AC repair, installation & maintenance in Faridabad. Same-day service, certified technicians, 24/7 availability. Call now!",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      {/* <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Pricing />
      <Blog />
      <Contact /> */}
    </>
  );
}
