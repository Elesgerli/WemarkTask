
import "./index.scss";

const ProgramSection = ({ data }) => {
    const program = data?.programs?.[0];

    if (!program) return null;

    return (
        <section className="program">
            <div className="container program__container">

                <div className="program__heading">
                    <h2>{program.title}</h2>
                </div>

                <div className="program__intro">

                    <div
                        className="program__description"
                        dangerouslySetInnerHTML={{
                            __html: program.description || "",
                        }}
                    />
                </div>

            </div>
        </section>
    );
};

export default ProgramSection;
