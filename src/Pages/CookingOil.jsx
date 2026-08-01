import React from "react";
import PageHero from "../Components/AboutComponents/PageHero.jsx";
import ProductHero from "../Components/ProductComp/ProductHero";
import ProductGrid from "../Components/ProductComp/ProductGrid.jsx";
import WhoWeServe from "../Components/ProductComp/WhoWeServe.jsx";
import OilFeatures from "../Components/ProductComp/OilFeatures.jsx";

import { Sparkle, Droplets, Store, Factory, Package } from "lucide-react";

const CookingOil = () => {
  return (
    <>
      <PageHero
        title="Refined Edible"
        highlight="Oil"
        image="/zitelle/oil_page.jpeg"
        // breadcrumb={
        //   <>
        //     <span className="page-hero__crumb">Home /</span>

        //     <span className="page-hero__crumb--active">Cooking Oil</span>
        //   </>
        // }
      />

      <ProductHero
        label=""
        title="Palm Kernel Refined Oil"
        text="Our refined palm Kernel Oil is processed to meet the needs of businesses that require a reliable, versatile, and consistent oil for manufacturing and commercial use. With its clean appearance, stable quality, and wide range of applications, it supports industries such as soap production, food processing, cosmetics, and other industrial formulations."
        image="/zitelle/oilinfo.jpeg"
        primaryText="Request A Quote"
        primaryLink="/contact"
        secondaryText="Speak To Sales"
        secondaryLink="/contact"
      />

      <ProductGrid
        label=""
        title="Our Oil Product"
        products={[
          {
            id: 1,
            category: "",
            name: "4 Litres",
            description: "",
            image: "/zitelle/10litres_oil.jpeg",
            link: "/contact",
          },

          {
            id: 2,
            category: "",
            name: "10 Litres",
            description: "",
            image: "/zitelle/10litres.jpeg",
            link: "/contact",
          },

          {
            id: 3,
            category: "",
            name: "18 Litres",
            description: "",
            image: "/zitelle/IMG_7897.png",
            link: "/contact",
          },

          {
            id: 4,
            category: "",
            name: "25 Litres",
            description: "",
            image: "/zitelle/IMG_7939.png",
            link: "/contact",
          },
        ]}
      />
      <OilFeatures />

      <WhoWeServe
        label="Who We Serve"
        title="Supplying Kitchens And Businesses"
        image="/zitelle/DJI_0036.png"
        items={[
          {
            icon: <Package size={20} />,
            text: "Soap Manufacturers",
          },

          {
            icon: <Sparkle size={20} />,
            text: "Cosmetics & Personal Care Brands",
          },

          {
            icon: <Droplets size={20} />,
            text: "Detergent Manufacturers",
          },

          {
            icon: <Factory size={20} />,
            text: "Industrial Processors",
          },
        ]}
      />
    </>
  );
};

export default CookingOil;
