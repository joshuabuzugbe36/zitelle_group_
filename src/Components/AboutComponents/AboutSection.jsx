import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TypingText from "../TypingText";
import HeroStats from "../HeroStats";
import Counter from "../Counter";

const AboutSection = () => {
  const images = ["/zitelle/who_we_are.jpeg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(slider);
  }, [images.length]);
  return (
    <section className="about-section">
      {/* LEFT CONTENT */}

      <div className="about-section__content">
        <div className="section-label">
          <span>WHO WE ARE</span>
          <div className="section-line" />
        </div>

        <h2 className="about__title">
          DRIVING GROWTH ACROSS INDUSTRIES, COMMUNITIES AND EVERYDAY LIFE.
        </h2>

        <p className="about-section__text">
          Zitelle Group is a Nigerian manufacturing group with a growing
          presence across essential industries. For over a decade, we have built
          our business through disciplined production, continuous improvement,
          and a commitment to quality across edible oils, multipurpose soap,
          plastic packaging, and wood products.
        </p>

        <p className="about-section__text">
          Our integrated operations allow us to create value beyond
          manufacturing—supporting households, businesses, distributors, local
          enterprise, and the communities we serve.
        </p>

        <div className="about-section__capacity">
          <div className="about-section__capacity-title">
            Production Capacity
          </div>

          <div className="about-section__capacity-row">
            <span>PKO</span>

            <strong>
              <Counter end={40000} duration={6000} delay={1200} /> MTPA
            </strong>
          </div>

          <div className="about-section__capacity-row">
            <span>DOC</span>

            <strong>
              <Counter end={70000} duration={4000} delay={1400} /> MTPA
            </strong>
          </div>

          <div className="about-section__capacity-row">
            <span>SOAP</span>

            <strong>
              <Counter end={1000000} duration={4000} delay={1400} /> Cartons
            </strong>
          </div>
        </div>

        <button className="about-section__btn">
          <Link to="/about">
            Learn More <span>→</span>
          </Link>
        </button>
      </div>

      {/* RIGHT IMAGE */}

      <div className="about-section__image-wrapper">
        <img
          src="/zitelle/DJI_0093.jpeg"
          alt="About Zitelle Group"
          className="about-section__image"
        />
      </div>
    </section>
  );
};

export default AboutSection;
