import TechStack from "./TechStack";

function About() {
    return (
        <>
            <section
                className="container min-h-[100vh] m-auto grid grid-cols-1 items-center justify-center sm:grid-col-2 md:grid-cols-3 gap-5"
                id="about"
            >
                <div className="m-auto">
                    <img
                        src="assets\sec2_bg.png"
                        alt=""
                        className="object-cover"
                    />
                </div>
                <div className="p-2 md:col-span-2">
                    <div className="mb-4">
                        <h1 className="text-5xl mb-[10px]">About me</h1>
                        <h3 className="text-2xl">
                            I am currently BICT undergraduate student at
                            Rajarata University of Sri Lanka. constantly
                            learning and improving my skills to become a great
                            coder and designer. Alongside my academic pursuits,
                            I also self study and build and test new & old
                            things.
                        </h3>
                    </div>

                    <TechStack name="My Current Tech Stack" />
                    <h2 className="text-3xl mt-4">Other Proficient Areas</h2>
                    <div className="flex items-start flex-wrap gap-9">
                        <TechStack subcontext="Programming" />
                        <TechStack subcontext="Designing" />
                        <TechStack subcontext="Cloud" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
