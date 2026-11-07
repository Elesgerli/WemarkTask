
"use client";

import {
    Fragment,
    useState,
    useRef,
    useEffect,
} from "react";

import Image from "next/image";

const languages = [
    {
        label: "AZƏRBAYCAN DİLİ",
        value: "az",
    },
    {
        label: "ENGLISH",
        value: "en",
    },
];

const LanguageSelect = ({ variant = "default" }) => {
    const [language, setLanguage] = useState("az");
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);

    const selectedLanguage = languages.find(
        (item) => item.value === language
    );

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    if (variant === "mobile") {
        return (
            <div className="footer__language footer__language--mobile">

                <Image
                    src="/images/globe__icon.png"
                    alt="Language"
                    width={18}
                    height={18}
                />

                <div className="footer__mobile-languages">

                    {languages.map((item, index) => (
                        <Fragment key={item.value}>

                            {index !== 0 && (
                                <span className="footer__language-separator">
                                    |
                                </span>
                            )}

                            <button
                                type="button"
                                className={
                                    language === item.value
                                        ? "active"
                                        : ""
                                }
                                onClick={() => {
                                    setLanguage(item.value);
                                }}
                            >
                                {item.label}
                            </button>

                        </Fragment>
                    ))}

                </div>
            </div>
        );
    }
    return (
        <div
            className="footer__language"
            ref={dropdownRef}
        >

            <Image
                src="/images/globe__icon.png"
                alt="Language"
                width={18}
                height={18}
                className="footer__globe"
            />

            <div className="footer__language_dropdown">

                <button
                    type="button"
                    className="footer__language_current"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                >
                    <span>
                        {selectedLanguage.label}
                    </span>

                </button>

                <div
                    className={`footer__language_options ${isOpen ? "active" : ""
                        }`}
                    role="listbox"
                >

                    {languages.map((item) => (
                        <button
                            type="button"
                            role="option"
                            aria-selected={
                                language === item.value
                            }
                            key={item.value}
                            className={`footer__language_option ${language === item.value
                                    ? "selected"
                                    : ""
                                }`}
                            onClick={() => {
                                setLanguage(item.value);
                                setIsOpen(false);
                            }}
                        >
                            {item.label}
                        </button>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default LanguageSelect;
