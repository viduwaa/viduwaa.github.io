import { createContext, useState } from "react";
import { scroller } from "react-scroll";

export const SiteContext = createContext<any>(null);

export const SiteProvider = ({ children }: { children: JSX.Element }) => {
  const [delay, setDelay] = useState<{ [key: string]: number }>({});

  const updateDelay = (key: string, newDelay: number) => {
    setDelay((prevDelays) => ({
      ...prevDelays,
      [key]: newDelay,
    }));
  };

  const getDelay = (key: string) => {
    return delay[key] || 1.8; // Default delay value if not set
  };

  const fadeinAnimations = (key: string) => {
    return {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          delay: getDelay(key),
        },
      },
    };
  };

  const fadeinAnimationstoUp = {
    initial: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 ,
      },
    },
  };

  const scrollToSection = (sectionId: string) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <SiteContext.Provider
      value={{
        fadeinAnimations,
        fadeinAnimationstoUp,
        scrollToSection,
        updateDelay,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
