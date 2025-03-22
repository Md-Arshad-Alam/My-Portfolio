import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";
// import Bank from "../../../public/AM-Bank-The-Best-Banking-Services.svg"
// import Atm from "../../../public/ATM-Automated-Teller-Machine.svg"
  // import Bank from "../../../public/AM-Bank-The-Best-Banking-Services.svg"
  // import Bank from "../../../public/AM-Bank-The-Best-Banking-Services.svg"
  // import Bank from "../../../public/AM-Bank-The-Best-Banking-Services.svg"
  // import Bank from "../../../public/AM-Bank-The-Best-Banking-Services.svg"
  // import Bank from "../../../public/AM-Bank-The-Best-Banking-Services.svg"

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Bank Webapp Banking System Clone",
      liveLink: "https://ambankservices.netlify.app/login",
      about:
        "Developed account creation feature with validation for existing email and phone numbers, enhancing user registration process , - Implemented secure login functionality to provide authorized access to user accounts , Integrated UPI and phone number integration for seamless money transfer experience, Created secure ATM PIN setting and resetting functionality, enhancing account security measures, Developed transaction history view feature to enable users to track their financial activities easily, - Implemented user chat feature to provide real-time status updates for received and sent transactions ,- Designed and developed transaction receipt feature to provide users with detailed information about their transactions  , Designed and developed forgot password feature, ensuring seamless account recovery process",
        
      stack: ["React.js", "React Router", "Javascript", "tailwindcss"],
      img: "",
      alt :"/AM-Bank-The-Best-Banking-Services.png"
    },
    {
      title: "Calvino ",
      liveLink: "https://transcendent-flan-3e9b7f.netlify.app/",
      about:
        " Create a responsive Calvino website ",
        
      stack: ["React.js", "React Router", "Javascript", "tailwindcss"],
      img: "/SEO-Template.png",
    },
    {
      title: "Book Store",
      liveLink: "https://sparkly-frangipane-c86b29.netlify.app/",
      about:
        " Build a fully responsive online book store where users can: Browse and search for books. Add books to the cart and checkout. Manage orders and view purchase history. ",
        
      stack: ["React.js", "React Router", "Javascript", "tailwindcss"],
      img: "/Booke.png",
    },
    {
      title: "ATM Functionality",
      liveLink: "https://incredible-strudel-3250b4.netlify.app/",
      about:
        " Build a responsive ATM simulation where users can:, Check account balance. Deposit and withdraw money. Change PIN securely. transaction history.",
        
      stack: ["React.js", "React Router", "Javascript", "tailwindcss"],
      img: "/ATM-Automated-Teller-Machine.png",
      },
    {
      title: "Weather App",
      liveLink: "https://golden-brigadeiros-9b84b2.netlify.app/",
      about:
        " Create a responsive weather application where users can: Search for current weather in any city. View real-time weather conditions.Check 5-day weather forecast.",
        
      stack: ["React.js", "React Router", "Javascript", "tailwindcss"],
      img: "/Weather-App.png",
    },
    {
      title: "CRUD with API   ⚡️📚",
      liveLink: "https://crud-in-redux-ruddy.vercel.app/",
      gitLink:"https://github.com/Md-Arshad-Alam/CrudInRedux",
      about:
        " Build a CRUD (Create, Read, Update, Delete) application using: React for frontend UI. Redux Toolkit for state management. REST API for backend interaction.",
        
      stack: ["React.js", "Redux Toolkit","Api" ,"Javascript", "tailwindcss"],
      img: "/Vite-React-crud.png",
    },
    {
      title: "Musify - Music Streaming  🎵",
      gitLink: "https://github.com/Md-Arshad-Alam/musicfy-clone",
      liveLink: "https://musicfy-clone.vercel.app/",
      about:
        "Create a responsive music streaming web application where users can   Browse songs and playlists Play, pause, and skip tracks. Manage and save their playlists. Search for songs and artists.",
      stack: ["React.js", "React Router", "Javascript", "tailwindcss"],
      img: "/MusicFy-Clone.png",
    },
    {
      title: "Drag and Drop",
      gitLink: "https://github.com/Md-Arshad-Alam/web-dragdrop",
      liveLink: "https://web-dragdrop.vercel.app/",
      about:
        "Create a responsive drag-and-drop application where users can: Drag items between lists or containers. Reorder or sort items dynamically. Save updated order or state.",
      stack: ["React.js", "React Router", "Javascript", "tailwindcss"],
      img: "/web-dragdrop-vercel-app.png",
    },
    {
      title: "Quiz App",
      gitLink: "https://github.com/Md-Arshad-Alam/QuizApp",
      liveLink: "https://quiz-app-rust-six.vercel.app/",
      about:
        "Create a responsive quiz application where users can: Attempt multiple-choice quizzes. Track scores in real-time. View correct answers and explanations. Restart or retake quizzes.",
      stack: ["React.js", "React Router", "Javascript", "tailwindcss"],
      img: "/Quiz-App.png",
    },
    {
      title: "Shorts Video",
      gitLink: "https://github.com/Md-Arshad-Alam/short-video",
      liveLink: "https://short-video-nine.vercel.app/",
      about:
        "Create a responsive short video streaming platform where users can: Browse and watch short videos. Like, comment, and share videos. Upload and manage their own content",
      stack: ["React.js", "React Router", "Javascript", "tailwindcss"],
      img: "/Shorts-App.png",
    },
    {
      title: "Web Service",
      liveLink: "https://responsive-web-service-website.vercel.app/",
      about:
        "Develop a responsive and dynamic website service that: Provides user-friendly interfaces. Handles user interactions and data management. Integrates secure backend API for business logic.",
      stack: ["Html","Css", "Javascript", "tailwindcss"],
      img: "/Web-Service-03-22-2025_01_29_PM.png",
    },
    ,
    {
      title: "Postcraft-Next.js",
      gitLink: "https://github.com/Md-Arshad-Alam/short-video",
      liveLink: " https://postcraft-nextjs-tests-projects-53e4a3fb.vercel.app/",
      about:
        "Create a responsive short video streaming platform where users can: Browse and watch short videos. Like, comment, and share videos. Upload and manage their own content",
      stack: ["Nextjs",  "Javascript", "tailwindcss"],
      img: "/Create-Next-App.png",
    },
    {
      title: "Shortly",
      gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "https://lnk-shortener.netlify.app/",
      about:
        "A link shortener for a fictional company that effectively shortens links and stores them. No matter how many links you shorten, you can revisit the site anytime to view and manage your previously shortened links.",
      stack: ["next.js", "framer motion", "tailwindcss"],
      img: "/shortly.svg",
    },
    {
      title: "Where in the world",

      liveLink: "https://where-in-the-world-ade.netlify.app/",
      about:
        "A fun tool for checking information about any country in the world such as the country’s native name, currency, population,  border countries etc. It features dynamic routing for each country and theme switch.",
      stack: ["react", "react-router", "javascript", "tailwindcss"],
      img: "/witw.svg",
    },

    {
      title: "Multi-step form",

      liveLink: "https://ade-loremgaming.netlify.app/",
      about:
        "This site features a clean, user-friendly multi-step form for subscribing to a gaming service. Users input personal info, select a plan (monthly or yearly), choose add-ons (online service, larger storage, customizable profile), and review the summary before confirming.",
      stack: ["html", "sass", "javascript", "ms clarity"],
      img: "/multistep.svg",
    },
    // {
    //   title: "Shorts Video",
    //   gitLink: "https://github.com/Md-Arshad-Alam/short-video",
    //   liveLink: "https://short-video-nine.vercel.app/",
    //   about:
    //     "This site features a Shorts Video like Tiktok and other Social ,Media",
    //   stack: ["html", "sass", "javascript", "ms clarity"],
    //   img: "",
    // }
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
