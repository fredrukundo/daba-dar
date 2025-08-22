'use client';
import React from 'react';
import HeroSection from '@/components/UIs/HeroSection/HeroSection';
import IntroSection from '@/components/UIs/IntroSection/IntroSection';
import StatsSection from '@/components/UIs/StatSection/statsSection';
import FeatureSection from '@/components/UIs/FeatureSection/FeatureSection';
import JoinSection from '@/components/UIs/JoinSection/JoinSection';
import FeaturedPartner from '@/components/UIs/FeaturedPartner/FeaturedPartner';
import InvestInUs from '@/components/UIs/Invest/InvestInUs';
import ReportsSection from '@/components/UIs/Report/ReportSection';
import ContactFormSection from '@/components/UIs/ContactUs/ContactUs';
import SFooterSection from '@/components/UIs/SemFoorter/SemiFooter';
import LegalFooter from '@/components/UIs/LegalFooter/LegalFooter';
import BeforeAfterSection from '@/components/UIs/BeforeAfterSection/Before_After';


const Homepage = () => {
    return (
        <div>
            
            { /*<HeroSection /> */}
            <BeforeAfterSection />
           {/*} <IntroSection />
            <StatsSection />
            <FeatureSection />
            <JoinSection />
            <FeaturedPartner />
            <InvestInUs />
            <ReportsSection />
            <ContactFormSection />
            <SFooterSection />
            <LegalFooter /> */}
        </div>
    );
};
export default Homepage;