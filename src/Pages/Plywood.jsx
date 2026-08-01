import React from "react";
import PageHero from "../Components/AboutComponents/PageHero.jsx";
import ProductHero from "../Components/ProductComp/ProductHero";
import ProductGrid from "../Components/ProductComp/ProductGrid.jsx";
import { Sofa, Paintbrush, Building2, Hammer, Warehouse } from "lucide-react";
import WhoWeServe from "../Components/ProductComp/WhoWeServe.jsx";
import Tata from "../Components/Plywood/Tata.jsx";
import FAQSection from "../Components/Plywood/FAQSection..jsx";
import QuoteForm from "../Components/Plywood/QuoteForm.jsx";
import PlyWoodPage from "../Components/Plywood/PlyWoodPage.jsx";

const Plywood = () => {
  return (
    <>
      <PageHero
        title="PlyWood"
        highlight=""
        image="/zitelle/commercial.png"
        // breadcrumb={
        //   <>
        //     <span className="page-hero__crumb">Home /</span>

        //     <span className="page-hero__crumb--active">Tata & Bobo</span>
        //   </>
        // }
      />
      <ProductHero
        label="About"
        title="Quality Plywood. Dependable Stock."
        text="TATA & BOBO is Zitelle Group's plywood business, supplying a wide range of plywood and board products for furniture making, interior finishing, and construction focused on providing customers quality, dependable stock, smooth order execution and competitive pricing."
        image="/zitelle/plywood_hero.png"
        primaryText="Request A Quote"
        primaryLink="/contact"
        secondaryText="Speak To Sales"
        secondaryLink="/contact"
      />
      <Tata />
      <QuoteForm />

      <WhoWeServe
        label="Who We Serve"
        title="Built For The People Who Build"
        image="/zitelle/DBL_0511.png"
        items={[
          {
            icon: <Sofa size={20} />,
            text: "Furniture makers and carpentry workshops",
          },

          {
            icon: <Paintbrush size={20} />,
            text: "Interior designers and fit-out teams",
          },

          {
            icon: <Building2 size={20} />,
            text: "Construction contractors",
          },

          {
            icon: <Hammer size={20} />,
            text: "Door manufacturers and installers ",
          },

          {
            icon: <Warehouse size={20} />,
            text: "Building materials retailers and distributors",
          },
          {
            icon: <Building2 size={20} />,
            text: "Project-based buyers (commercial and residential) ",
          },
        ]}
      />
      <FAQSection />
    </>
  );
};

export default Plywood;
