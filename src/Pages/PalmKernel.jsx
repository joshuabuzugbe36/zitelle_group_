import React from "react";
import PageHero from "../Components/AboutComponents/PageHero";
import ProductHero from "../Components/ProductComp/ProductHero";
import WhyPk from "../Components/ProductComp/WhyPk";
import PKCApplications from "../Components/ProductComp/Pkcapplications";
import PKCCapacity from "../Components/ProductComp/PKCCapacity";

const PalmKernel = () => {
  return (
    <>
      <PageHero title="De-Oil Cake" highlight="" image="/zitelle/pk_bg.jpeg" />
      <ProductHero
        label="About"
        title="Pure Oil. Zero Waste."
        text="De-Oil Cake is a valuable by-product of our palm kernel oil production process. At Zitelle Group, we ensure that every stage of production is handled with care, allowing us to create value from raw materials beyond oil extraction."
        image="/zitelle/pk6.png"
        primaryText="Request A Quote"
        primaryLink="/contact"
        secondaryText="Speak To Sales"
        secondaryLink="/contact"
      />
      <WhyPk />
      <PKCCapacity />
      <PKCApplications />
    </>
  );
};

export default PalmKernel;
