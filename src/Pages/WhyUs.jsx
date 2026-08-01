import React from "react";
import PageHero from "../Components/AboutComponents/PageHero";
import WhyUsStat from "../Components/WhyUsStat";
import AboutIntro from "../Components/AboutComponents/AboutIntro";
import WhyStandards from "../Components/WhyStandards";
import DarkReusableSection from "../Components/DarkReusableSection";

const whySections = [
  {
    id: 1,

    // label: "Why Us",

    title: "Why Choose Zitelle Group",

    text: `At Zitelle Group, we are driven by one standard across every division, to deliver products customers can trust. From edible oils and multipurpose soap to plastic packaging and wood importation, our work is built around quality, consistency, and dependable supply.
`,

    extra: `For over a decade, we have operated with discipline and resilience, working seven days a week to improve our processes, strengthen our products, and serve homes, businesses, and industries with reliability. `,

    image: "/zitelle/why_us_bg.jpeg",
  },
];

const WhyUs = () => {
  return (
    <>
      <PageHero
        title="Why Us"
        highlight=""
        image="/zitelle/why_us_new.jpeg"
        // breadcrumb={
        //   <>
        //     <span className="page-hero__crumb">Home /</span>

        //     <span className="page-hero__crumb--active">Why Us</span>
        //   </>
        // }
      />
      <WhyUsStat />
      <AboutIntro sections={whySections} />
      <WhyStandards />
      {/* <DarkReusableSection
        label="Get In Touch"
        title="Ready to Work With Zitelle?"
        text="Zitelle provides reliable manufacturing and distribution support for retailers, wholesalers, and commercial partners. Our systems are built to ensure consistent supply, quality production, and timely delivery across all product lines. We focus on building long-term partnerships through trust, efficiency, and scalable operations."
        buttonLink="/contact"
        buttonText="Contact Us"
        image="/zitelle/machine4.jpg"
      /> */}
    </>
  );
};

export default WhyUs;
