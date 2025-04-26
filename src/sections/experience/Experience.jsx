import React, { Suspense } from "react";
import TitleHeader from "../../components/TitleHeader";
import { expCards } from "../../consts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../../components/CanvasLoader";
import Developer from "./Developer";
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(function () {
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      duration: 1,
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

    // gsap.utils.toArray(".expText").forEach((item) => {
    //   console.log(item);
    gsap.from(".expText", {
      x: 0,
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".expText",
        start: "top 80%",
      },
    });
    // });
    ScrollTrigger.refresh();
  }, []);
  return (
    <section
      id="experience"
      className="w-full md:mt-20 mt-10 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 -ms-1">
        <TitleHeader
          title="professional work experinece"
          subtitle="my career overview"
          icon="💼"
        />

        <div className="mt-32 relative flex gap-2">
          <div className="avatar hidden">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-1.25} scale={2} />
              </Suspense>
            </Canvas>
          </div>
          <div className="relative flex-grow h-fit z-50 xl:space-y-8 space-y-3">
            {expCards.map((card) => (
              <div key={card.title}>
                <div className="timeline-wrapper ">
                  <div className="timeline" />
                  <div className="gradient-line w-1 h-full"></div>
                </div>
                <div className="expText flex xl:gap-12 md:gap-18 gap-5 relative z-20">
                  <div className="timeline-logo">
                    <img src={card.logoPath} alt="logo" />
                  </div>
                  <div className=" md:work-canvas px-8 py-5 flex-grow">
                    <h1 className="font-semibold text-2xl text-white-800">
                      {card.title}
                    </h1>
                    <p className="my-3 text-slate-100 flex gap-2 items-center">
                      <img src="/icons/calender.svg" /> {card.date}
                    </p>
                    <p className="text-[#839cb5] italic">Resposibilities</p>
                    <ul className="list-disc ms-5 mt-5 flex flex-col gap-2 text-white">
                      {card.responsibilities.map((item) => (
                        <li key={item} className="text-lg">
                          {item}
                        </li>
                      ))}
                    </ul>
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
