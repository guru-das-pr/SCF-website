import React from 'react';
import TeamCarousel from '@/components/TeamCarousal';
import Image from 'next/image';
import { FaKey, FaHandshake, FaTrophy, FaCheck, FaLaptopCode, FaArrowRight } from 'react-icons/fa';
import InfoCard from '@/components/About/InfoCard';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import OurStory from '@/components/About/OurStory';
import Head from 'next/head';
import WaveComponent from '@/components/ui/WaveComponent';
import { IntroSection } from '@/components/About/IntroSection';
import CustomeButton from '@/components/ui/CustomeButton';


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
};

// Metadata
export const metadata = {

  title: {
    default: 'About Us | SCF Strategies',
    template: '%s | SCF Strategies',
  },
  description: 'SCF Strategies: Unlocking the full potential of Supply Chain Finance with expertise, advanced technology, and a proven track record. Learn more about our journey and why industry leaders trust us.',
  keywords: [
    'Supply Chain Finance',
    'SCF Strategies',
    'SCF Consulting',
    'Supply Chain Finance Expertise',
    'SCF Solutions',
    'Industry Leaders',
    'Global Clients'
  ],
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple.ico',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
  },

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.scfstrategies.com/about-us',
    siteName: 'SCF Strategies',
    title: 'About Us | SCF Strategies',
    description: 'Discover how SCF Strategies unlocks the full potential of Supply Chain Finance with expert consulting and advanced solutions. Learn about our expertise and core values.',
    images: [
      {
        url: '/images/team-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'SCF Strategies About Us Banner',
      }
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | SCF Strategies',
    description: 'Unlock the potential of your Supply Chain Finance programs with SCF Strategies. Learn about our expertise, core values, and why industry leaders choose us.',
    images: ['/images/team-image.jpeg'],
  },

  // Alternate Pages
  alternates: {
    canonical: 'https://www.scfstrategies.com/about-us',
  },

  // Social Media Links
  socialLinks: {
    facebook: 'https://www.facebook.com/profile.php?id=100063586296486',
    instagram: 'https://www.instagram.com/SCFStrategies',
    linkedin: 'https://www.linkedin.com/company/scfstrategies',
    youtube: 'https://www.youtube.com/user/SCFStrategies',
    googleMyBusiness: 'https://www.google.com/business/SCFStrategies',
  },

  // Schema Markup
  schemaMarkup: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SCF Strategies',
    url: 'https://www.scfstrategies.com',
    logo: 'https://www.scfstrategies.com/images/logo.png',
    sameAs: [
      'https://www.facebook.com/SCFStrategies',
      'https://www.instagram.com/SCFStrategies',
      'https://www.linkedin.com/company/scfstrategies',
      'https://www.youtube.com/user/SCFStrategies',
      'https://www.google.com/business/SCFStrategies',
    ],
  },

  // Other metadata
  category: 'business',
  classification: 'Financial Services',
};


export default function About() {
  return (
    <>

      <AuroraBackgroundDemo title={'About Us'} description={'Know more about our mission, values and team.'} link={'Learn More'} />
      <div className="bg-primary mx-auto py-12">
        <IntroSection />

        {/* Our Story Section */}
        <OurStory />

        {/* Expertise Section */}
        <div className="mt-8  text-black py-8 px-4 md:px-8 rounded-lg ">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold">Our Expertise</h2>
            </div>
            <p className="text-center text-lg mb-12">
              With over 100 globally recognized SCF and Reverse Factoring programs, SCF Strategies is your trusted partner for unparalleled expertise and results.<br/>
              Our team&apos;s in-depth knowledge and innovative approach set us apart as leaders in the field.
            </p>
            <InfoCard />

            <div className="mt-12 text-center relative z-10">
              <CustomeButton title={'Learn More About Our Journey'} link={'/contact-us'} />
            </div>
          </div>
        </div>
        <WaveComponent />
      </div>
    </>
  );
}
