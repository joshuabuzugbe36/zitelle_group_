const features = [
  {
    number: "01",
    title: "Integrated Manufacturing ",
    text: "Our divisions are connected in ways that create stronger control and better consistency. We produce oil used within our soap manufacturing, and our plastic division manufactures jerrycans from scratch for both Zitelle Oil and external customers.",

    image: "/zitelle/integrated.jpeg",
  },

  {
    number: "02",
    title: "Quality at Every Stage ",
    text: "Quality is built into our process, not added at the end. Our teams monitor production, carry out checks, and maintain documentation to support consistency and customer confidence.",

    image: "/zitelle/quality_why_us.jpeg",
  },

  {
    number: "03",
    title: "Reliable Supply",
    text: "We understand that customers need more than good products – they need products they can access consistently. Our manufacturing and distribution approach is designed to support dependable supply for retailers, wholesalers, distributors and commercial buyers.",

    image: "/zitelle/DJI_0036.png",
  },
  {
    number: "04",
    title: "Commitment to Local Manufacturing",
    text: "Zitelle Group is proud to contribute to Nigerian manufacturing. By producing essential goods locally, we support enterprise, strengthen the supply chain and contribute to the growth of industries that serve everyday life. ",

    image: "/zitelle/commitment_why.jpeg",
  },
];

const WhyStandards = () => {
  return (
    <section className="why-standards">
      {features.map((item, index) => (
        <div
          key={index}
          className={`why-standards__row ${
            index % 2 !== 0 ? "why-standards__row--reverse" : ""
          }`}
        >
          {/* IMAGE */}

          <div className="why-standards__image-wrap">
            <img
              src={item.image}
              alt={item.title}
              className="why-standards__image"
            />
          </div>

          {/* CONTENT */}

          <div className="why-standards__content">
            <span className="why-standards__number">{item.number}</span>

            <h2 className="why-standards__title">{item.title}</h2>

            <p className="why-standards__text">{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhyStandards;
