
"use client";

import "./index.scss";
import Image from "next/image";

const FounderSection = ({ data }) => {
    const founder = data?.founders?.[0];

    if (!founder) return null;

    return (
        <section className="founder">
            <div className="container founder__container">

                <div className="founder__heading">
                    <h2>FOUNDER</h2>
                </div>

                <div className="founder__content">

                    <div className="founder__image">
                        <Image
                            src={founder.image}
                            alt={founder.name || "Founder"}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />

                        <div className="founder__image-label">
                            <strong>{founder.name}</strong>
                            <span>- {founder.position}</span>
                        </div>
                    </div>

                    <div className="founder__message">

                        <h3>
                            {founder.title}
                        </h3>

                        <p>
                            {founder.description
                                ?.split(/\r?\n\r?\n/)
                                .map((paragraph, index) => (
                                    <span key={index}>
                                        {paragraph}
                                        <br /><br />
                                    </span>
                                ))}
                        </p>

               

                    </div>

                </div>

            </div>
        </section>
    );
};

export default FounderSection;
