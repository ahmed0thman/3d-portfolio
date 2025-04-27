import React, { useEffect, useRef, useState } from "react";

const LazySection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(function () {
    const handleScroll = () => {
      if (sectionRef.current) {
        // const id = setTimeout(function () {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight - 200) {
          //   console.log(rect.top, windowHeight);
          setIsVisible(true);
        }
        // }, 5000);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Run the check on initial load
    handleScroll();

    return () => {
      // Cleanup the scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   useEffect(
  //     function () {
  //       console.log(isVisible);
  //     },
  //     [isVisible]
  //   );
  return (
    <div
      ref={sectionRef}
      className={`lazy-section ${!isVisible && "min-h-60"}`}
    >
      {isVisible && children}
    </div>
  );
};

export default LazySection;
