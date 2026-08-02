import PageHero from "../Components/AboutComponents/PageHero.jsx";
import AboutIntro from "../Components/AboutComponents/AboutIntro.jsx";
import WhyChooseUs from "../Components/HomeComponents/WhyChooseUs.jsx";
import TeamSection from "../Components/AboutComponents/TeamSection.jsx";
import AboutCommit from "../Components/AboutComponents/AboutCommit.jsx";
import MissionVision from "../Components/AboutComponents/MissionVision.jsx";

const aboutSections = [
  {
    id: 1,

    // label: "Who We Are",

    title: "Who We Are",

    text: ` Zitelle Group is a diversified Nigerian manufacturing group dedicated to producing essential products that support homes, businesses, and industries.`,

    extra: `With operations spanning edible oils, multipurpose soap, plastic packaging, and wood products, we have built an integrated ecosystem of manufacturing businesses united by a common commitment to quality, reliability, and innovation.  `,

    image: "/zitelle/about_hero_background.jpeg",
  },
  {
    id: 2,

    // label: "Who We Are",

    title: "Our Journey",

    text: `For over a decade, we have remained steadfast in our pursuit of operational excellence – working with discipline, consistency, and a continuous drive to improve our processes and products. `,
    extra: `Our journey has been shaped by resilience, adaptability, and a deep understanding of the vital role manufacturing plays in everyday life and economic growth. `,

    image: "/zitelle/DJI_0074.jpeg",
  },

  {
    id: 3,

    // label: "Who We Are",

    title: "What We Produce",

    text: `At Zitelle Group, we create products that meet practical needs across diverse markets: from edible oils used in homes, food production, and commercial kitchens; to soaps for bathing, laundry, and industrial cleaning; to durable plastic packaging solutions that preserve and transport liquid products; and wood products that serve construction, furniture, and commercial applications.`,
    extra: ``,

    image: "/zitelle/new 1.png",
  },
  {
    id: 4,

    // label: "Who We Are",

    title: "Our Commitment",

    text: `Beyond manufacturing, we are committed to building trust through dependable service, creating value for our customers, and contributing to Nigeria’s industrial development. Every product we make reflects our belief in consistency, functionality, and long-term impact.
`,
    extra: ``,

    image: "/zitelle/commitment_about.png",
  },
  {
    id: 5,

    // label: "Who We Are",

    title: "Everyday Impact",

    text: `At the heart of Zitelle Group is a simple mission: to manufacture essential products that improve daily living while driving sustainable growth for the communities and industries we serve.
`,
    extra: `From the oil used in homes and businesses, to the soap used for bathing, laundry and cleaning, to the jerrycans that package and protect liquid products, and the wood products that support construction, furniture, and commercial use – Zitelle Group serves practical needs across multiple parts of the market.`,

    image: "/zitelle/impact_about.jpeg",
  },
  {
    id: 6,

    // label: "Our Standard",

    title: "Our Standard",

    text: `At Zitelle, consistency is part of our identity. Operating seven days a week for over a decade has taught us that quality is not achieved by chance. It is built through routine, monitoring, training, process improvement, and commitment.
          Across our divisions, we continue to refine how we work – from raw material handling and production to packaging, quality control, logistics, and customer service.
          
          Our goal is not only to manufacture products, but to keep improving the systems behind those products.`,

    extra: `We believe that every product carrying the Zitelle name should reflect care, reliability and usefulness. Whether a customer is buying oil for household use, soap for daily washing, jerrycans for commercial packaging, or wood products for business needs, they should feel confident in the standard behind the product. `,

    image: "/zitelle/standard_about.jpeg",
  },
];

const About = () => {
  return (
    <>
      <PageHero
        title="About Zitelle Group"
        highlight=""
        image="/zitelle/about_hero.jpeg"
        breadcrumb={
          <>
            {/* <span className="page-hero__crumb">Home /</span>

            <span className="page-hero__crumb--active">About</span> */}
          </>
        }
      />

      <AboutIntro sections={aboutSections} />
      <MissionVision />

      {/* <WhyChooseUs /> */}

      <TeamSection />
      <AboutCommit />
    </>
  );
};

export default About;
