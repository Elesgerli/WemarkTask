
import "./index.scss";

const HeroSection = ({ data }) => {
    const titleLines = (data?.banner_title || "")
        .split(/\r?\n/)
        .filter(Boolean);

    return (
        <section
            className="hero"
            style={{
                backgroundImage: data?.banner_image
                    ? `url(${data.banner_image})`
                    : "none",
            }}
        >
            <div className="hero__overlay"></div>

            <h1 className="hero__title hero__title--desktop">
                {titleLines.map((line, index) => (
                    <span key={index}>{line}</span>
                ))}
            </h1>

            <h1 className="hero__title hero__title--mobile">
                {titleLines.map((line, index) => (
                    <span key={index}>{line}</span>
                ))}
            </h1>

        </section>
    );
};

export default HeroSection;
