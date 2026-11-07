
"use client";

import "./index.scss";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const AboutSection = ({ data }) => {
    const aboutImages = data?.about_images || [];
    const [firstTitle, secondTitle] = (data?.about_title || "About\nxSchool")
        .split(/\r?\n/);
    return (
        <section className="about" id="about">
            <div className="container about__container">

                <div className="about__content">

                    <div className="about__heading">
                        <h2>
                            {firstTitle?.toUpperCase()}
                            <p>
                                <span>{secondTitle?.charAt(0)}</span>
                                {secondTitle?.slice(1).toUpperCase()}
                            </p>
                        </h2>

                        <a href="#" className="about__link">
                            Go to xSchool
                        </a>
                    </div>

                    <p className="about__description">
                        {data?.about_description}
                    </p>

                </div>

            </div>

            <div className="about__slider">

                {aboutImages.length > 0 && (
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1.65}
                        centeredSlides={true}
                        spaceBetween={24}
                        loop={aboutImages.length > 2}
                        speed={900}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.25,
                                spaceBetween: 12,
                            },
                            480: {
                                slidesPerView: 1.25,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 1.5,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 1.65,
                                spaceBetween: 24,
                            },
                        }}
                        className="about__swiper"
                    >
                        {aboutImages.map((image, index) => (
                            <SwiperSlide key={image.image || index}>
                                <div className="about__slide">
                                    <Image
                                        src={image.image}
                                        alt={`xSchool about image ${index + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 90vw, 65vw"
                                        priority={index === 0}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

            </div>
        </section>
    );
};

export default AboutSection;
