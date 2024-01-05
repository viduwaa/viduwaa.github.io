import {
    CloudItems,
    DesigningItems,
    TechStackItems,
} from "../helpers/TechStackItems";
import { ProgrammingItems } from "../helpers/TechStackItems";

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
                {!(name === undefined) ? <h2 className="text-3xl">{name}</h2> : <></>}
                {/* <h2 className="text-3xl">{name}</h2> */}
                {!(subcontext === undefined) ? <h3>{subcontext}</h3>  :  <></> }
                <ul className="flex gap-3 py-2">
                    {subcontext === undefined
                        ? TechStackItems.map((item, key) => {
                              return (
                                  <li key={key} style={{ color: item.color }}>
                                      {item.name}
                                  </li>
                              );
                          })
                        : subcontext == "Programming"
                        ? ProgrammingItems.map((item, key) => {
                              return (
                                  <li key={key}>
                                      <img
                                          src={item.image}
                                          alt={item.name}
                                          className="h-[50px]"
                                      />
                                  </li>
                              );
                          })
                        : subcontext == "Designing"
                        ? DesigningItems.map((item, key) => {
                              return (
                                  <li key={key} style={{ color: item.color }}>
                                      {item.name}
                                  </li>
                              );
                          })
                        : CloudItems.map((item, key) => {
                              return (
                                  <li key={key}>
                                      <img
                                          src={item.image}
                                          alt={item.name}
                                          className="h-[50px]"
                                      />
                                  </li>
                              );
                          })}
                </ul>
            </div>
        </>
    );
}

export default TechStack;
