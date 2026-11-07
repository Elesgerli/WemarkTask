
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./index.scss";

import { navLinks } from "@/constant/constant";
import logo from "@/../public/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="header">
        <div className="header__inside container">

          <Link
            href="/"
            className="header__logo"
            onClick={closeMenu}
          >
            <Image
              src={logo}
              alt="Wemark"
              width={120}
              height={22}
              priority
            />
          </Link>

          <nav className="header__nav">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="header__link"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="header__contact"
          >
            Let's Talk
          </Link>

          <button
            type="button"
            className={`header__hamburger ${
              isOpen ? "header__hamburger--active" : ""
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <div
        className={`header__overlay ${
          isOpen ? "header__overlay--active" : ""
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <aside
        id="mobile-menu"
        className={`header__drawer ${
          isOpen ? "header__drawer--active" : ""
        }`}
        aria-hidden={!isOpen}
      >
        <div className="header__drawer-top">

          <Link
            href="/"
            className="header__drawer-logo"
            onClick={closeMenu}
          >
            <Image
              src={logo}
              alt="Wemark"
              width={100}
              height={30}
            />
          </Link>

          <button
            type="button"
            className="header__close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <span />
            <span />
          </button>
        </div>

        <nav className="header__mobile-nav">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="header__mobile-link"
              onClick={closeMenu}
              style={{ "--index": index }}
            >
              <span>{link.name}</span>
              <span className="header__arrow">↗</span>
            </Link>
          ))}
        </nav>

        <div className="header__drawer-bottom">
          <span className="header__drawer-label">
            HAVE A PROJECT IN MIND?
          </span>

          <Link
            href="#contact"
            className="header__drawer-contact"
            onClick={closeMenu}
          >
            Let's Talk
            <span>↗</span>
          </Link>

          <div className="header__drawer-footer">
            <span>© Wemark</span>
            <span>Creative Digital Agency</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
