import React from "react";

const teamMembers = [
  {
    name: "Dominic Okechukwu-Anolue",
    role: "Chairman",
    image: "/zitelle/chairman.jpeg",
  },
  {
    name: "Frances Okechukwu-Anolue",
    role: "Director of Operations",
    image: "/zitelle/Frances Okechukwu-Anolue.jpeg",
  },
  {
    name: "James Monweya",
    role: "Chief Financial Controller",
    image: "/zitelle/James Monweya.jpeg",
  },
  {
    name: "Stella Akunyiba ",
    role: "General Manager AWKA",
    image: "/zitelle/Stella Akunyiba.jpeg",
  },
  // {
  //   name: "Ngozi Oluchime ",
  //   role: "General Manager LAGOS",
  //   image:
  //     "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
  // },
  {
    name: "Sonia Enumah",
    role: "General Manager LAGOS",
    image: "/zitelle/Sonia Enumah.jpeg",
  },
  {
    name: "Nonso Oyeoka",
    role: "Head of Audit & Internal Control",
    image: "/zitelle/Nonso Oyeoka.jpeg",
  },
  {
    name: "Emmanuel Edobor",
    role: "Financial Controller AWKA",
    image: "/zitelle/Emmanuel Edobor.jpeg",
  },

  {
    name: "Kenneth Anuforo",
    role: "Head of Human Resource",
    image: "/zitelle/Kenneth Anuforo.jpeg",
  },
  {
    name: "Uche Onuorah",
    role: "Head of Sales & Marketing AWKA",
    image: "/zitelle/Uche Onuorah.jpeg",
  },
  {
    name: "Ebuka Dontaus Obinwa",
    role: "Head of Sales & Marketing LAGOS",
    image: "/zitelle/Ebuka Dontaus Obinwa.jpeg",
  },
  {
    name: "Romanus Idiemerio",
    role: "Senior Accountant",
    image: "/zitelle/Romanus Idiemerio.jpg",
  },
];

// Splits the role onto a new line before AWKA / LAGOS
const formatRole = (role) => {
  const locations = ["AWKA", "LAGOS"];
  const match = locations.find((loc) => role.endsWith(loc));

  if (!match) return role;

  const prefix = role.slice(0, role.length - match.length).trim();

  return (
    <>
      {prefix}
      <br />
      {match}
    </>
  );
};

const TeamSection = () => {
  return (
    <section className="team">
      {/* HEADER */}
      <div className="team__top">
        <div className="business-pg__label">
          <div className="business-pg__label-line" />
          <span>Our Executive Team</span>
          <div className="business-pg__label-line" />
        </div>
      </div>

      {/* GRID */}
      <div className="team__wrapper">
        <div className="team__slider">
          {teamMembers.map((member, index) => (
            <div className="team__card" key={index}>
              {/* IMAGE */}
              <div className="team__image-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team__image"
                />

                {/* GOLD PROFILE CARD */}
                <div className="team__profile">
                  <h3>{formatRole(member.role)}</h3>
                  <p>{member.name}</p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="team__body">
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
