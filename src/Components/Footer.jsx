import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter, // ✅ updated
  FaYoutube,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";

import logo from "/images/logo2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* ───────── BRAND ───────── */}

        <div className="footer__brand">
          <img src={logo} alt="Zitelle Group" />

          <p className="footer__description">
            Responsible manufacturing isn't just a promise — it's every decision
            we make, from raw materials to final product.
          </p>

          {/* ───────── SOCIALS ───────── */}

          <div className="footer__socials">
            <a
              href="hhttps://www.facebook.com/profile.php?id=61576667904221"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/zitellegroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* ───────── LINKS ───────── */}

        <div className="footer__links">
          <h3>Links</h3>

          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/why_us">Why us</Link>
            </li>
            <li>
              <Link to="/services/plywood">Our Businesses</Link>
            </li>

            <li>
              <Link to="/career/apply">Career Opportunities</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* ───────── SERVICES ───────── */}

        <div className="footer__services">
          <h3>Our Businesses</h3>

          <ul>
            <li>
              <Link to="/services/cooking-oil">Oil</Link>
            </li>
            <li>
              <Link to="/services/soap">Soap</Link>
            </li>
            <li>
              <Link to="/services/plywood">Plywood</Link>
            </li>

            <li>
              <Link to="/services/packaging">Packaging</Link>
            </li>
            <li>
              <Link to="/services/pk">De-Oil Cake</Link>
            </li>
          </ul>
        </div>
        {/* ───────── CONTACT ───────── */}

        <div className="footer__contact">
          <h3>Contact Us</h3>

          <div className="footer__contact-item">
            <FaMapMarkerAlt />

            <span>
              <strong>Anambra:</strong> Amansea, By Ebenebe Road, Awka North,
              Anambra State.
            </span>
          </div>

          <div className="footer__contact-item">
            <FaMapMarkerAlt />

            <span>
              <strong>Lagos:</strong> 43 Ladipo Street, Off Chicken George
              Roundabout, Mushin, Lagos.
            </span>
          </div>

          <div className="footer__contact-item">
            <HiMail />

            <span>info@zitellegroup.com</span>
          </div>

          <div className="footer__contact-item">
            <HiPhone />

            <span>
              +234 907 774 3915 <br />
              +234 814 111 9254
            </span>
          </div>
        </div>
      </div>

      {/* ───────── BOTTOM ───────── */}

      <div className="footer__bottom">
        © 2026 Zitelle Group, Nigeria. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
