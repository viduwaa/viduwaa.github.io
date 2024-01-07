
import {
    CloudItems,
    DesigningItems,
    TechStackItems,
} from "../../helpers/TechStackItems";
import { ProgrammingItems } from "../../helpers/TechStackItems";
import ScrollAnimate from "../customComponents/ScrollAnimate";


function TechStack({
    name,
    subcontext,
}: {
    name?: string;
    subcontext?: string;
}) {
    return (
        <>
            <div className="">
                {!(name === undefined) ? (
                    <h2 className="text-3xl">{name}</h2>
                ) : (
                    <></>
                )}
                {/* <h2 className="text-3xl">{name}</h2> */}
                {!(subcontext === undefined) && <h3>{subcontext}</h3>}

                <ul className="flex gap-3">
                    {subcontext === undefined
                        ? TechStackItems.map((item, key) => (
                              <ScrollAnimate
                                  index={key}
                                  key={key}
                                  color={item.color}
                              >
                                  {item.name}
                              </ScrollAnimate>
                          ))
                        : subcontext === "Programming"
                        ? ProgrammingItems.map((item, key) => (
                              <ScrollAnimate index={key} key={key}>
                                  <img
                                      src={item.image}
                                      alt={item.name}
                                      className="h-[50px]"
                                  />
                              </ScrollAnimate>
                          ))
                        : subcontext === "Designing"
                        ? DesigningItems.map((item, key) => (
                              <ScrollAnimate
                                  index={key}
                                  key={key}
                                  color={item.color}
                              >
                                  {item.name}
                              </ScrollAnimate>
                          ))
                        : CloudItems.map((item, key) => (
                              <ScrollAnimate index={key} key={key}>
                                  <img
                                      src={item.image}
                                      alt={item.name}
                                      className="h-[50px]"
                                  />
                              </ScrollAnimate>
                          ))}
                </ul>
            </div>
        </>
    );
}

export default TechStack;
