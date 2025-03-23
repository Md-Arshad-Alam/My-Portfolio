"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "",
    jobTitle: "Frontend Developer",
    company: "TimD",
    jobType: "Internship",
    duration: "Dec 2024 - feb 2025",
    stuffIDid: [
  "Developed a dynamic and responsive website fromscratch using React.js.",
  "Integrated with various data sources and APIs to fetch and display real-time content enhancing the website's functionality",
  "Implememnted Redux Toolkit and Thunk Middleware for Statemanagement and asynchronous Api call.",
  " Worked effectively in fast-paced environments",
  " Passionate aboutlearning and committed to continual improvement.",
  "Technologies Used: React.js , Javascript, Html5, Css3 ,",
  "Tailwind , Sass, Redux-Toolkit, Thunk,Axios, Github",
  "Skills: HTML5 · Css3 · Tailwind CSS · JavaScript · JavaScript Libraries · React.js · React Hooks · Redux Toolkit · Next.js · GitHub"
    ],
  },
  
  // {
  //   companyImg: "/nnpc.svg",
  //   jobTitle: "Intern",
  //   company: "NNPC",
  //   jobType: "Internship",
  //   duration: "July 2023 - Sept. 2023",
  //   stuffIDid: [
  //     "Came up with cross functional login & sign up page designs that are now integral parts of the tools used within the company.",
  //     "Led a team of fellow interns to design various templates and UI components common in internal applications such as dashboards, notification tabs, multi-step forms, tables with pagination etc. while making very impactful contributions.",
  //     "I also helped interns grasp the basics of design enabling them to make meaningful contributions.",
  //   ],
  // },
];
const Education=[

]

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
      <Title>Education</Title>
    </div>
  );
}
