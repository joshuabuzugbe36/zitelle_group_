import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import HeroStats from "../HeroStats";

const slides = [
  {
    id: 1,
    src: "/zitelle/hero1.jpg",
    alt: "Zitelle Cooking Oil",
    title: (
      <>
        Powering Local Manufacturing{" "}
        <span className="hl-yellow">in Nigeria.</span>
        <br />
        Five Sectors At A Time...
      </>
    ),
    sub: "Across oil, soap, packaging and wood products, Zitelle Group delivers quality products for homes, businesses and industries. ",
    cta: "Explore our Businesses",
    link: "/business",
  },
  {
    id: 2,
    src: "/zitelle/hero2.jpg",
    alt: "Zitelle Soap Manufacturing",
    title: (
      <>
        Built on <span className="hl-yellow">Consistency,</span>
        <br />
        Sustained By <span className="hl-yellow">Trust</span>
      </>
    ),
    sub: "For over a decade, Zitelle has operated with discipline, improving our processes and delivering dependable products customers can rely on.",
    cta: "Who We Are",
    link: "/about",
  },
  {
    id: 3,
    src: "/zitelle/slide3.jpeg",
    alt: "TATA & BOBO Plywood",
    title: (
      <>
        Responsible <span className="hl-yellow">Manufacturing,</span>
        <br />
        Practical Impact
      </>
    ),
    sub: "From production waste to by-products and raw materials, we focus on using resources wisely, and creating value across every division",
    cta: "Our Sustainability Approach",
    link: "/about",
  },
  {
    id: 4,
    src: "/zitelle/IMG_0100.png",
    alt: "Zitelle Packaging Solutions",
    title: (
      <>
        Quality at every <span className="hl-yellow">Stage.</span>
        <br />
        Value in Every Process
      </>
    ),
    sub: "We monitor our processes from sourcing to production and packaging, ensuring consistency across every product we deliver;",
    cta: "Why Choose Us",
    link: "/why_us",
  },
];

/* ── Separate component so React fully unmounts/remounts on key change ── */
const SlideContent = ({ slide }) => {
  return (
    <div className="hero__content-layer">
      <h1 className="hero__title hero__anim-title">{slide.title}</h1>
      <p className="hero__sub hero__anim-sub">{slide.sub}</p>
      <Link to={slide.link} className="hero__btn hero__anim-btn">
        {slide.cta}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      <section className="hero">
        {/* PERMANENT OVERLAY */}
        <div className="hero__overlay" style={{ zIndex: 2 }} />

        {/* IMAGES ONLY — crossfade behind overlay */}
        {slides.map((slide, i) => {
          const isActive = i === current;
          return (
            <div
              key={slide.id}
              style={{
                position: "absolute",
                inset: 0,
                opacity: isActive ? 1 : 0,
                transition: isActive
                  ? "opacity 1.2s ease"
                  : "opacity 0.8s ease",
                zIndex: 1,
              }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading={i === 0 ? "eager" : "lazy"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  transform: isActive ? "scale(1)" : "scale(1.07)",
                  transition: "transform 9s ease",
                }}
              />
            </div>
          );
        })}

        {/* TEXT — key forces full unmount/remount on every slide change */}
        <SlideContent key={current} slide={slides[current]} />

        {/* ARROWS */}
        <button
          className="hero__arrow hero__arrow--prev"
          onClick={prev}
          aria-label="Previous slide"
          style={{ zIndex: 10 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M11 4L6 9l5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className="hero__arrow hero__arrow--next"
          onClick={next}
          aria-label="Next slide"
          style={{ zIndex: 10 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M7 4l5 5-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* DOTS */}
        <div className="hero__dots" style={{ zIndex: 10 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>
      {/* CAPACITY CARD */}
      {/* 
      <div className="hero-stats hero-stats--desktop">
        <HeroStats />
      </div>
      <div className="hero-stats hero-stats--mobile">
        <HeroStats />
      </div> */}
    </>
  );
};

export default Hero;
