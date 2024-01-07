import { FaCircle } from "react-icons/fa";
import { ExperienceItems } from "../../helpers/ExperienceItem";

function Experience() {
    return (
        <section
            id="experience"
            className="min-h-[100dvh] flex items-center justify-center"
        >
            <div className="container m-auto">
                <h1 className="text-5xl text-center p-10">My Experience</h1>

                <div className="min-h-fit p-3">
                    <ul className="ml-10">
                        {ExperienceItems.map((item, key) => {
                            return (
                                <li
                                    key={key}
                                    className="flex items-start gap-8 text-3xl w-full mb-5"
                                >
                                    <FaCircle className="mt-1" />
                                    <div className="font-thin flex flex-col items-start">
                                        <h3 className="text-3xl">
                                            {item.time}
                                            <br />
                                            {item.company}
                                        </h3>
                                        <h4 className="font-bold text-4xl ">
                                            {item.post}
                                        </h4>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experience;
