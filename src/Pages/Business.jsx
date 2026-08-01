import React from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../Components/AboutComponents/PageHero";

const businesses = [
  {
    title: "Edible Oil Refinery",
    categories: "Edible Oil",
    description:
      "Our refined palm Kernel Oil is processed to meet the needs of businesses that require a reliable, versatile, and consistent oil for manufacturing and commercial use. ",
    image: "/zitelle/oil_bg.jpeg",
    path: "/services/cooking-oil",
  },
  {
    title: "Soap Manufacturing",
    categories: "Household",
    description:
      "Zitelle Soap is a versatile multipurpose washing soap produced for laundry, household cleaning, and everyday washing needs. Made using oil produced within Zitelle Group, our soap reflects the strength of our integrated manufacturing process and our commitment to quality, consistency, and practical value",
    image: "/zitelle/soap_bg.jpeg",
    path: "/services/soap",
  },
  {
    title: "Packaging",
    categories: "Commercial",
    description:
      "Our plastic jerry cans are manufactured in-house from raw materials to finished containers, giving us greater control over strength, consistency, and quality. ",
    image: "/zitelle/packaging_bg.jpeg",
    path: "/services/packaging",
  },
  {
    title: "Plywood",
    categories: "Construction",
    description:
      "TATA & BOBO is Zitelle Group’s plywood business, supplying  a wide range of plywood and board products for furniture making, interior finishing, and construction – focused on providing customers quality, dependable stock, smooth order execution and competitive pricing.",
    image: "/zitelle/DBL_0511.png",
    path: "/services/plywood",
  },
  {
    title: "Palm Kernel Cake",
    categories: "Edible Oil",
    description:
      "Palm Kernel Cake is a valuable by-product of our palm kernel oil production process. At Zitelle Group, we process and supply PKC for agricultural and commercial use, particularly as a feed ingredient for cattle and livestock.",
    image: "/zitelle/pk_bg.jpeg",
    path: "/services/pk",
  },
];

const Business = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        title="Our Businesses"
        highlight=""
        image="/zitelle/business_hero.jpeg"
        // breadcrumb={
        //   <>
        //     <span className="page-hero__crumb">Home /</span>
        //     <span className="page-hero__crumb--active">Business</span>
        //   </>
        // }
      />

      <section className="business-pg">
        {/* ── TOP ── */}
        <div className="business-pg__top">
          <div className="business-pg__label">
            <div className="business-pg__label-line" />
            <span>Our Businesses</span>
            <div className="business-pg__label-line" />
          </div>
          <h2 className="business-pg__heading">
            One group. Multiple industries.
            <br />
            One standard for quality,
            <br />
            consistency and delivery.
          </h2>
          <p className="business-pg__subtext">
            We operate across essential sectors that support everyday life,
            strengthen commercial activity, and contribute to industrial growth.
            Across our businesses, we are united by a commitment to quality,
            reliability, and long-term value.
          </p>
        </div>

        {/* ── GRID ── */}
        <div className="business-pg__grid">
          {businesses.map((item, index) => (
            <div className="business-pg__card" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="business-pg__image"
              />

              <div className="business-pg__overlay">
                <div className="business-pg__overlay-content">
                  <span className="business-pg__categories">
                    {item.categories}
                  </span>
                  <h3>{item.title}</h3>
                  <div className="business-pg__divider" />
                  <p>{item.description}</p>
                </div>

                {item.path && (
                  <div className="business-pg__arrow-wrap">
                    <div
                      className="business-pg__arrow-btn"
                      onClick={() => navigate(item.path)}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M4 11h14M12 5l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Business;
