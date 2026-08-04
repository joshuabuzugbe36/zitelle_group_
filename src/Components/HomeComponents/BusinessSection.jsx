import React from "react";
import VerticalTextSlider from "../VerticalTextSlider";
import { Link } from "react-router-dom";

const BusinessSection = () => {
  const businesses = [
    {
      title: "Edible Oil Refinery",
      description:
        "Our refined palm Kernel Oil is processed to meet the needs of businesses that require a reliable, versatile, and consistent oil for manufacturing and commercial use.",
      image: "/zitelle/oil_bg.jpeg",
      link: "/services/cooking-oil",
    },
    {
      title: "Soap Manufacturing",
      description:
        "Zitelle Soap is a versatile multipurpose washing soap produced for laundry, household cleaning, and everyday washing needs. Made using oil produced within Zitelle Group, our soap reflects the strength of our integrated manufacturing process and our commitment to quality, consistency, and practical value.",
      image: "/zitelle/soap_bg.jpeg",
      link: "/services/soap",
    },

    {
      title: "Packaging",
      description:
        "Our plastic jerry cans are manufactured in-house from raw materials to finished containers, giving us greater control over strength, consistency, and quality.",
      image: "/zitelle/packaging_bg.jpeg",
      link: "/services/packaging",
    },

    {
      title: "Plywood",
      description:
        "Our plywood is responsibly sourced and imported from China. We work with consistent specifications and clear order handling to support customers who need dependable availability and predictable supply.  ",
      image: "/zitelle/plywood_home.jpeg",
      link: "/services/plywood",
    },

    {
      title: "De-Oil Cake",
      description:
        "De-Oil Cake is a valuable by-product of our palm kernel oil production process. At Zitelle Group, we process and supply DOC for agricultural and commercial use, particularly as a feed ingredient for cattle and livestock.",
      image: "/zitelle/pk_bg.jpeg",
      link: "/services/pk",
    },
  ];

  return (
    <section className="business">
      <div className="business-pg__top">
        <div className="business-pg__label">
          <div className="business-pg__label-line" />
          <span>Our Businesses</span>
          <div className="business-pg__label-line" />
        </div>
        <h2 className="business-pg__heading">
          Five industries. One Standard.
          <br />
          Built on reliability, quality assurance, and the
          <br />
          capacity to deliver at scale.
        </h2>
        {/* <p className="business-pg__subtext">
          We operate across essential sectors that support everyday life,
          strengthen commercial activity, and contribute to industrial growth.
          Across our businesses, we are united by a commitment to quality,
          reliability, and long-term value.
        </p> */}
      </div>
      {/* <div className="business-section__top">
        <div className="business-section__heading">
         
          <span className="business-section__static">Our Businesses</span>
          <VerticalTextSlider
            staticText=""
            words={["Soap", "Cooking Oil", "Plywood", "Plastic"]}
          />
        </div>
        <div className="business-pg__label">
          <div className="business-pg__label-line" />
          <span>Our Businesses</span>
          <div className="business-pg__label-line" />
        </div>
        <p className="business-section__text">
          Four industries. One standard. We manufacture and supply essential
          products that serve homes, retailers, and businesses across Nigeria.
          Built on reliability, quality assurance, and the capacity to deliver
          at scale.
        </p>
      </div> */}

      <div className="business-pg__grid">
        {businesses.map((item, index) => (
          <div className="business__card" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="business__image"
            />
            <div className="business__overlay">
              <div className="business__overlay-content">
                <h3>{item.title}</h3>
                <div className="business__divider" />
                <div className="business__desc">
                  <div>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
              {item.link ? (
                <Link to={item.link} className="business__read-more">
                  <span>READ MORE</span>
                  <span>→</span>
                </Link>
              ) : (
                <div className="business__read-more business__read-more--empty" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessSection;
