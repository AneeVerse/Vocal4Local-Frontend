import TopCampaignList from "@/components/home/TopCampaignList";
import HeroSection from "@/components/home/Hero";
import RegisteredNGOs from "@/components/home/RegisteredNGOs";
import StatsSection from "@/components/home/StatsSection";
import WhatWeDo from "@/components/home/WhatWeDo";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import CampaignList from "@/components/home/CampaignList";
import ShortVideo from "@/components/home/ShortVideo";
import BlogComponent from "@/components/home/BlogComponent";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <div>
      <Layout>
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsSection/>
        <TopCampaignList/>
        <RegisteredNGOs/>
        <WhatWeDo/>
        <CampaignList/>
        <ShortVideo/>
        <BlogComponent/>
        <ContactForm/>
        </div>
      </Layout>
    </div>
  );
}
