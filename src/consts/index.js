export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 4,
    name: "Skills",
    href: "#skills",
  },
  {
    id: 5,
    name: "Work",
    href: "#work",
  },
  {
    id: 6,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "GlazePizza - Online Ordering",
    desc: "A streamlined online ordering platform built for GlazePizza restaurant, designed to offer a fast, mobile-first experience. Customers can easily browse the menu, enter their name, and confirm their location and contact details to place an order—without the need to sign in.",
    subdesc:
      "GlazePizza simplifies the ordering process using React, React Router, Tailwind CSS, Redux, Thunks, and the browser’s Geolocation API. With efficient data loading and navigation, it reduces phone calls, minimizes order errors, and speeds up service, improving both customer satisfaction and staff efficiency.",
    href: "https://glazepizza.netlify.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
      themeColor1: "#AA3C304D",
      themeColor2: "#f8775abb",
      themeColor3: "#36201D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 4,
        name: "Redux",
        path: "/assets/redux.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },

  {
    title: "Sally Academy (In Progress)",
    desc: "Sally Academy is a modern, mobile-first learning platform currently in development, aimed at providing students with accessible education through streamlined course delivery and skill certification. Key features include course browsing, enrollment, video lessons, progress tracking, and certificates.",
    subdesc:
      "BI’m contributing to the frontend using Vanilla JavaScript, Bootstrap, and Motion to build a responsive and user-friendly interface. The project is actively evolving to ensure an engaging and efficient learning experience.",
    href: "https://sallyacademy.netlify.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/sally.svg",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
      themeColor1: "#2F6DB585",
      themeColor2: "#13204F",
      themeColor3: "#17293E",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "assets/js.svg",
      },
      {
        id: 2,
        name: "Bootstrap",
        path: "/assets/bootstrap.svg",
      },

      {
        id: 3,
        name: "Framer Motion",
        path: "/icons/framer.png",
      },
    ],
  },

  {
    title: "TheWildRoom - Luxury Room Service",
    desc: "The Wild Room customer website delivers a luxurious, mobile-first experience for hotel guests, making it effortless to browse rooms, view availability, and manage their reservations. With a seamless Google sign-up process and a dedicated guest area, it ensures a smooth end-to-end booking journey.",
    subdesc:
      "Built using Next.js App Router, React Server Components, Server Actions, and NextAuth for authentication, this modern platform reduces manual bookings, streamlines the reservation process, and enhances the overall guest experience.",
    href: "https://the-wild-room.netlify.app/",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
      themeColor1: "#2F67B64D",
      themeColor2: "#0E1F38",
      themeColor3: "#0E2D58",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/next-white.svg",
      },
      {
        id: 2,
        name: "nextAuth",
        path: "assets/nextAuth.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
  {
    title: "KayanCare - Health Management System",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "With a focus on efficiency, KayanCare integrantes complex forms and SMS notifications, by using React.js, React Query and Redux that enhance operational workflows.",
    href: "https://kayan-portal.netlify.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
      themeColor1: "#60F5A150",
      themeColor2: "#aadbc230",
      themeColor3: "#4bc78350",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "ReactQuery",
        path: "assets/react-query.svg",
      },
      {
        id: 4,
        name: "Redux Toolkit",
        path: "/assets/redux.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.04 : isMobile ? 0.05 : 0.065,
    deskPosition: isSmall
      ? [0.5, -3.5, 0]
      : isMobile
      ? [0.5, -4, 0]
      : [0.25, -6.5, 0],
    cubePosition: isSmall
      ? [2.3, -6, 0]
      : isMobile
      ? [3.5, -6, 0]
      : isTablet
      ? [5.5, -6, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [2.5, 2.5, 0]
      : isMobile
      ? [3.4, 4, 0]
      : isTablet
      ? [5.5, 3, 0]
      : [9, 4, 0],
    ringPosition: isSmall
      ? [-3, 2.5, 0]
      : isMobile
      ? [-4, 3, 0]
      : isTablet
      ? [-6.5, 3, 0]
      : [-8.5, 3, 0],
    targetPosition: isSmall
      ? [-3.8, -10, -10]
      : isMobile
      ? [-6, -10, -10]
      : isTablet
      ? [-8, -11, -10]
      : [-12, -11, -10],
  };
};

export const expCards = [
  {
    company: "Deltana IT",
    color: "#6d45ce",
    imgPath: "/imgs/deltana.png",
    logoPath: "/imgs/deltana.png",
    title: "Frontend Developer",
    date: "January 2022 - Present",
    responsibilities: [
      "Developed responsive, high-performance web applications using React.js and Vanilla JavaScript.",
      "Optimized rendering and bundle size, reducing Largest Contentful Paint (LCP) by 30%.",
      "Used profiling tools (React Profiler, Chrome DevTools) to identify and eliminate performance bottlenecks, improving rendering efficiency by 25%",
    ],
  },
  {
    company: "Soft Zone",
    color: "#fd5c79",
    imgPath: "/imgs/softzone.png",
    logoPath: "/imgs/softzone.png",
    title: "Frontend Developer",
    date: "April 2023 - May 2024",
    responsibilities: [
      "Developed responsive and high-performance web applications, ensuring seamless user experiences across a variety of platforms.",
      "Collaborated with cross-functional teams to analyze business requirements and design user-centric solutions, contributing to the architecture and implementation of multiple web applications. ",
      "Focused on performance optimization by reducing load times, improving rendering efficiency, and enhancing the user interface for better interactivity.",
    ],
  },
  {
    company: "Freelancer",
    color: "#52aeff",
    imgPath: "/imgs/programmer.png",
    logoPath: "/imgs/programmer.png",
    title: "Frontend Developer",
    date: "March 2019 - present",
    responsibilities: [
      "As a self-employed Freelance Software Developer, I provided tailored software solutions to a diverse client, contributing to the successful realization of various projects.",
      "My responsibilities and accomplishments included analyzing business requirements to efficiently design and plan scalable, reliable, and high-available software.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

export const words = [
  { text: "ideas", imgPath: "/imgs/ideas.svg" },
  { text: "Concepts", imgPath: "/imgs/concepts.svg" },
  { text: "desings", imgPath: "/imgs/designs.svg" },
  { text: "code", imgPath: "/imgs/code.svg" },
  { text: "ideas", imgPath: "/imgs/ideas.svg" },
  { text: "Concepts", imgPath: "/imgs/concepts.svg" },
  { text: "desings", imgPath: "/imgs/designs.svg" },
  { text: "code", imgPath: "/imgs/code.svg" },
];

export const abilities = [
  {
    imgPath: "/imgs/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
    themeColor: "#fee6a8",
  },
  {
    imgPath: "/imgs/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
    themeColor: "#7efecc",
  },
  {
    imgPath: "/imgs/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    themeColor: "#f587ff",
  },
];

export const techStackIcons = [
  {
    name: "React.js",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 0.8,
    rotation: [0.1, 0.5, 0],
  },
  {
    name: "React Query",
    modelPath: "/models/query.glb",
    scale: 1.5,
    rotation: [-0.2, -0.64, 0],
  },
  {
    name: "Redux",
    modelPath: "/models/redux.glb",
    scale: 2,
    rotation: [0, 0, 0],
  },
  {
    name: "Tailwind CSS",
    modelPath: "/models/tailwind.glb",
    scale: 2.3,
    rotation: [2.8, 2.95, 2.75],
  },
  {
    name: "Three.js",
    modelPath: "/models/threejs.glb",
    scale: 0.04,
    rotation: [2.35, -2.65, 1.35],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -2.8, 0],
  },
];

export const techStackImages = [
  {
    name: "React.js",
    modelPath: "/icons/react.svg",
  },
  {
    name: "React Query",
    modelPath: "/icons/react-query.svg",
  },
  {
    name: "Redux",
    modelPath: "/icons/redux.svg",
  },
  {
    name: "Tailwind CSS",
    modelPath: "/icons/tailwind.svg",
  },
  // {
  //   name: "Three.js",
  //   modelPath: "/icons/threejs.png",
  // },
  {
    name: "Motion",
    modelPath: "/icons/framer.svg",
  },
  {
    name: "Git",
    modelPath: "/icons/git.png",
  },
];
