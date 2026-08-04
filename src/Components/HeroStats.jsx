import Counter from "./Counter";

const stats = [
  {
    number: 38325,
    suffix: "",
    label: "MTPA De-Oil Cake (DOC)",
  },
  {
    number: 65700,
    suffix: "",
    label: "MTPA De-Oil Cake (PKC)",
  },
  {
    suffix: "-",
    label: "Soap",
  },
];

const HeroStats = () => {
  return (
    <div className="hero-stats">
      <div className="hero-stats__header">Production Capacity</div>

      <div className="hero-stats__track">
        {stats.map((stat, i) => (
          <div className="hero-stats__item" key={i}>
            <span className="hero-stats__number">
              {stat.number ? (
                <Counter
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={4000}
                  delay={1000}
                />
              ) : (
                stat.suffix
              )}
            </span>

            <span className="hero-stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroStats;
