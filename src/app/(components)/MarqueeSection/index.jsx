
import "./index.scss";

const MarqueeSection = ({ data }) => {
    const marqueeData = data?.text_slider
        ? [
            data.text_slider.xline1,
            data.text_slider.xline2,
            data.text_slider.xline3,
        ].filter(Boolean)
        : [];

    if (!marqueeData.length) return null;

    return (
        <section className="marquee">

            <div className="marquee__row">
                <div className="marquee__track marquee__track--left">
                    {[...marqueeData, ...marqueeData].map((item, index) => (
                        <div
                            className="marquee__item"
                            key={`top-${index}`}
                        >
                            <span>{item}</span>
                            <span className="marquee__star">*</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="marquee__row">
                <div className="marquee__track marquee__track--right">
                    {[...marqueeData, ...marqueeData].map((item, index) => (
                        <div
                            className="marquee__item"
                            key={`bottom-${index}`}
                        >
                            <span>{item}</span>
                            <span className="marquee__star">*</span>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default MarqueeSection;
