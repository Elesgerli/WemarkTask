
"use client";

import { useState } from "react";
import "./index.scss";

const FAQSection = ({ data }) => {
    const [activeId, setActiveId] = useState(0);

    const faqData = data?.xschool_faq || [];

    const toggleFAQ = (id) => {
        setActiveId((prev) => (prev === id ? null : id));
    };

    if (!faqData.length) return null;

    return (
        <section className="faq">
            <div className="container faq__container">

                <div className="faq__heading">
                    <h2>
                        {data?.faq_title}
                    </h2>
                </div>

                <div className="faq__list">

                    {faqData.map((item, index) => {
                        const isOpen = activeId === index;

                        return (
                            <div
                                className={`faq__item ${
                                    isOpen ? "faq__item--active" : ""
                                }`}
                                key={index}
                            >
                                <button
                                    className="faq__question"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <span>{item.question}</span>

                                    <span className="faq__icon">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    id={`faq-answer-${index}`}
                                    className="faq__answer"
                                    aria-hidden={!isOpen}
                                >
                                    <div className="faq__answer-inner">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: item.answer || "",
                                            }}
                                        />
                                    </div>
                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default FAQSection;
