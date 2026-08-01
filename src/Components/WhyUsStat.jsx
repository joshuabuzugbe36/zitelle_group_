import Counter from "./Counter";

const stats = [
  {
    end: 10,
    suffix: "+",
    text: "Trusted by customers for over a decade",
  },
  {
    end: 7,
    suffix: " days",
    text: "Operating seven days a week without compromise or interruption",
  },
  {
    end: 5,
    suffix: "",
    text: "Five divisions serving homes, businesses and industries",
  },
];

const WhyUsStat = () => {
  return (
    <section className="why-us">
      {/* TOP */}
      <div className="why-us__top">
        <h2 className="why-us__title">Built Around What Customers Trust.</h2>

        <p className="why-us__text">
          From edible oils and multipurpose soap to plastic packaging and wood
          importation, our work is built around quality, consistency, and
          dependable supply.
        </p>
      </div>

      {/* STATS */}
      <div className="why-us__stats">
        {stats.map((item, index) => (
          <div className="why-us__card" key={index}>
            <h3>
              <Counter
                end={item.end}
                suffix={item.suffix}
                duration={2000}
                delay={500}
              />
            </h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUsStat;
