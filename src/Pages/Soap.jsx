import React from "react";
import PageHero from "../Components/AboutComponents/PageHero.jsx";
import ProductHero from "../Components/ProductComp/ProductHero";
import ProductGrid from "../Components/ProductComp/ProductGrid.jsx";
import WhoWeServe from "../Components/ProductComp/WhoWeServe.jsx";
import ChooseSoap from "../Components/ProductComp/ChooseSoap.jsx";

import { Home, ShoppingCart, Building2, Store, Warehouse } from "lucide-react";

const Soap = () => {
  return (
    <>
      <PageHero
        title="Soap"
        highlight="Manufacturing"
        image="/zitelle/soap4.jpg"
        // breadcrumb={
        //   <>
        //     <span className="page-hero__crumb">Home /</span>

        //     <span className="page-hero__crumb--active">Soap Manufacturing</span>
        //   </>
        // }
      />

      <ProductHero
        label=""
        title="Feel The Difference With Every Wash"
        text="Made through a controlled production process using carefully selected oil-based raw materials, our soap is designed to support cleanliness, affordability. From production to packaging, each batch is monitored to help ensure reliable performance and customer satisfaction"
        image="/zitelle/IMG_8335.jpeg"
        primaryText="Request A Quote"
        primaryLink="/contact"
        secondaryText="Speak To Sales"
        secondaryLink="/contact"
      />

      <ProductGrid
        label=""
        title="Our Soap Line"
        products={[
          {
            id: 1,
            category: "Long Bar Soap",
            name: "Lemon Fresh",

            image: "/zitelle/soap10.jpeg",
            link: "/contact",
          },

          {
            id: 2,
            category: "Short Bar Soap",
            name: "Lavender",

            image: "/zitelle/soap11.jpeg",
            link: "/contact",
          },

          {
            id: 3,
            category: "Short Bar Soap",
            name: "Original Fresh",

            image: "/zitelle/soap12.jpeg",
            link: "/contact",
          },

          {
            id: 4,
            category: "Short Bar Soap",
            name: "Sunlight Fresh",
            image: "/zitelle/soap13.jpeg",
            link: "/contact",
          },
          {
            id: 5,
            category: "Short Bar Soap",
            name: " Menthol Cool",
            image: "/zitelle/soap14.jpeg",
            link: "/contact",
          },
        ]}
      />
      <ChooseSoap />
    </>
  );
};

export default Soap;
