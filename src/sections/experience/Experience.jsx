import React from "react";
import TitleHeader from "../../components/TitleHeader";
import { expCards } from "../../consts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(function () {
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top 80%",
        end: "70% center",
        scrub: true,
        onUpdate: function (self) {
          gsap.set(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((item) => {
      gsap.from(item, {
        x: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
        },
      });
    });
    ScrollTrigger.refresh();
  }, []);
  return (
    <section
      id="experience"
      className="w-full md:mt-20 mt-10 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="professional work experinece"
          subtitle="my career overview"
          icon="💼"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title}>
                <div>
                  <div className="timeline-wrapper ">
                    <div className="timeline" />
                    <div className="gradient-line w-1 h-full"></div>
                  </div>
                  <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                    <div className="timeline-logo">
                      <img src={card.logoPath} alt="logo" />
                    </div>
                    <div className="work-canvas px-8 py-5 flex-grow">
                      <h1 className="font-semibold text-2xl text-white-800">
                        {card.title}
                      </h1>
                      <p className="my-3 text-slate-100 flex gap-2 items-center">
                        <img src="/icons/calender.svg" /> {card.date}
                      </p>
                      <p className="text-[#839cb5] italic">Resposibilities</p>
                      <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white">
                        {card.responsibilities.map((item) => (
                          <li key={item} className="text-lg">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
