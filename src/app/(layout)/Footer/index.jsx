
"use client";

import Image from "next/image";
import "./index.scss";
import LanguageSelect from "@/app/(components)/LanguageSelect";

const footerLinks = [
    {
        title: "Sitemap",
        links: [
            { label: "Case Studies", href: "/case-studies" },
            { label: "Services", href: "/services" },
            { label: "About", href: "/about" },
            { label: "Career", href: "/career" },
            { label: "Blog", href: "/blog" },
            { label: "News", href: "/news" },
            { label: "Vacancies", href: "/vacancies" },
        ],
    },
    {
        title: "Follow Us On",
        links: [
            { label: "Instagram", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "YouTube", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "Twitter", href: "#" },
        ],
    },
];

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer">
            <div className="container footer__container">

                {/* MAIN */}
                <div className="footer__main">

                    {/* LINKS */}
                    <div className="footer__links">
                        {footerLinks.map((item) => (
                            <div
                                className="footer__column"
                                key={item.title}
                            >
                                <h4>{item.title}</h4>

                                <ul>
                                    {item.links.map((link) => (
                                        <li key={link.label}>
                                            <a href={link.href}>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* OFFICE */}
                    <div className="footer__info footer__office">
                        <h4>Office</h4>

                        <p>
                            Alibeyov Gardashlari 27,
                            <span>
                                Sabail, Sabah Residence
                            </span>
                        </p>
                    </div>

                    {/* PARTNERSHIPS */}
                    <div className="footer__info footer__partnerships">
                        <h4>For Partnerships</h4>

                        <a href="mailto:partnership@wemark.az">
                            partnership@wemark.az
                        </a>

                        <a href="tel:+994515555555">
                            +994 51 555 55 55
                        </a>
                    </div>

                    {/* DESKTOP BACK TO TOP */}
                    <button
                        className="footer__top"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        type="button"
                    >
                        <Image
                            src="/images/arrow__top.png"
                            alt=""
                            width={48}
                            height={64}
                        />
                    </button>

                </div>

                {/* MOBILE LANGUAGE */}
                <div className="footer__mobile-language">
                    <LanguageSelect variant="mobile" />
                </div>

                {/* DIVIDER */}
                <div className="footer__divider" />

                {/* BRAND */}
                <div className="footer__brand">
                    <Image
                        src="/images/footer__logo.png"
                        alt="Wemark"
                        width={700}
                        height={150}
                        priority
                    />
                </div>
                {/* BOTTOM */}
                <div className="footer__bottom">

                    <div className="footer__legal">
                        <span>
                            COPYRIGHT © 2024 WEMARK
                        </span>

                        <a href="/terms" >
                            TERMS &amp; PRIVACY
                        </a>
                    </div>

                    <LanguageSelect />

                    <button
                        className="footer__mobile-top"
                        onClick={scrollToTop}
                        type="button"
                    >
                        BACK TO TOP
                        <span>↑</span>
                    </button>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
