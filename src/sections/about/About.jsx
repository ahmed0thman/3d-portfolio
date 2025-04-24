import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import Button from "../../components/Button";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const globeRef = useRef();
  const aboutRef = useRef();
  const grid1Ref = useRef();
  const grid2Ref = useRef();
  const grid3Ref = useRef();
  const grid4Ref = useRef();
  const grid5Ref = useRef();
  const [hasCopied, setHasCopied] = useState(false);

  useGSAP(() => {
    const grids = [
      grid1Ref.current,
      grid2Ref.current,
      grid3Ref.current,
      grid4Ref.current,
      grid5Ref.current,
    ];

    grids.forEach((grid, index) => {
      gsap.fromTo(
        grid,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: (index + 1) * 0.5,
          scrollTrigger: {
            trigger: grid,
            start: "top bottom-=150",
          },
        }
      );
    });

    gsap.fromTo(aboutRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      // Set initial zoom and focus on Cairo, Egypt
      globeRef.current.pointOfView(
        { lat: 30.0444, lng: 31.2357, altitude: 1.8 }, // Decrease altitude for closer zoom
        1000 // Animation duration in milliseconds
      );
    }
  }, []);

  function handleCopy() {
    navigator.clipboard.writeText("ahmedothman.code@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 5000);
  }

  function handleMouseMove(e) {
    const container = e.currentTarget;
    const cards = Array.from(
      container.querySelectorAll("div:has(.grid-container)")
    );
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  }
  return (
    <section id="about" className="c-space my-20">
      <div
        ref={aboutRef}
        id="about"
        className="grid lg:grid-cols-3 xl:grid-rows-13 md:grid-cols-2 grid-cols-1 gap-5 h-full"
        onMouseMove={handleMouseMove}
      >
        <div ref={grid1Ref} className="col-span-1 lg:row-span-7 order-1">
          <div className="grid-container">
            <img
              src="/imgs/grid-me.png"
              alt="Ahmed Othman"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Ahmed Othman</p>
              <p className="grid-subtext">
                With over 5 years of experience in web development, I specialize
                in Frontend development. I am passionate about creating
                user-friendly and efficient web applications that meet the needs
                of users and businesses alike. I have a strong background in
                JavaScript, React, and other modern web technologies.
              </p>
            </div>
          </div>
        </div>

        <div ref={grid2Ref} className="col-span-1 lg:row-span-7 order-2">
          <div className="grid-container">
            <img
              src="/imgs/grid-student.png"
              alt="Graduate"
              className="w-full sm:w-[276px] h-fit object-contain mx-auto"
            />
            <div className="flex flex-col">
              <p className="grid-headtext capitalize">
                Cairo University
                <p className="text-white-700 text-sm font-light italic">
                  2021 - present
                </p>
              </p>
              <p className="grid-subtext mb-3">
                Master student at Cairo University, Faculty of Computer Science.
              </p>
              <p className="grid-headtext capitalize">
                M.E.T Academy
                <p className="text-white-700 text-sm font-light italic">
                  2017 - 2021
                </p>
              </p>
              <p className="grid-subtext">
                Bachelor of Computer Science from M.E.T Academy, Masnoura,
                Egypt.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={grid3Ref}
          className="col-span-1  lg:col-span-1 lg:row-span-10 order-3"
        >
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={336}
                width={336}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 30.0444,
                    lng: 31.2357, // Longitude for Cairo, Egypt
                    text: "I am Here",
                  },
                ]}
                labelSize={6}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones.
              </p>
              <p className="grid-subtext">
                I am based in Mansoura, Egypt, and I am available for remote
                work opportunities. I am open to collaborating with teams and
                individuals from different parts of the world. I'm flexible with
                schedules and can adapt to different time zones to ensure
                seamless collaboration.
              </p>
              <Button name="Contact Me" isBeam className="w-full mt-8" />
            </div>
          </div>
        </div>

        <div
          ref={grid4Ref}
          className="md:col-span-2 lg:row-span-6 order-4 sm:order-last lg:order-4"
        >
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="work"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Web Development</p>
              <p className="grid-subtext">
                I am passionate about web development and enjoy creating
                user-friendly and efficient web applications. Love solving
                complex problems and finding innovative solutions. I am always
                eager to learn new technologies and improve my skills.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={grid5Ref}
          className="col-span-1  lg:col-span-1 lg:row-span-3 order-last sm:order-4 lg:order-last"
        >
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt=""
              className="w-full h-full object-cover xl:object-cover sm:object-top"
            />
            <div className="space-y-4 mt-auto">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "assets/copy.svg"}
                  alt="copy email"
                />
                <p className="xl:text-xl lg:text-base md:text-base font-medium text-gray_gradient text-white">
                  {hasCopied ? "Email Copied!" : "ahmedothman.code@gmail.com"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
