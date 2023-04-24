import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    youtubeCourses,
    weatherapp,
    newsapp,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    c,
    meta,
    dsa,
    python,sql,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    
    comp,
    github,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "Resume",
    },
  ];
  
  const services = [
    {
      title: "Frontend Devlopment",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: reactjs,
    },
    {
      title: "Competitive Programmer",
      icon: comp,
    },
   
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
   
   
    {
      name: "git",
      icon: git,
    },
   
    {
      name: "C++",
      icon: c,
    },
    {
      name: "github",
      icon:github,
    },
    {
      name: "DSA",
      icon: dsa,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "sql",
      icon: sql,
    },
  ];
  
  const experiences = [
  
  ];
  
  const testimonials = [
  
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-volleyball-award-vector-sport-banner-background-white-ball-gold-winner-trophy-png-image_1876478.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Real Time Weather App",
      description:
        `Developed a mobile weather web app that provides real-time weather information for global
        locations. Implemented a user-friendly interface with intuitive navigation and customizable settings for users to easily access
        and view weather data. Increased user engagement by providing real-time weather updates, leading to longer app usage
        sessions.Implemented responsive design to ensure the app is accessible on various devices, including mobile phones and tablets.
        Tech: HTML, CSS, Javascript
        `,
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "weatherAPI",
          color: "pink-text-gradient",
        },
      ],
      image: weatherapp,
      projectLink:"https://yuvraj6446.github.io/weatherApp/",
      source_code_link: "https://github.com/",
    },


// https://yuvraj6446.github.io/youTubeCourses/
// https://yuvraj6446.github.io/weatherApp/

    {
      name: "Top Youtube Courses ",
      description:
        " Developed a responsive web application using React and Tailwind CSS, which aggregates and organizes top YouTube courses on various professions. The app allows users to like and dislike courses, providing personalized feedback. I implemented hover effects and animations to enhance user experience and utilized React Toasts for course liking and disliking interactions. Overcoming state management challenges, I utilized debugging and troubleshooting skills to ensure the app's functionality and performance...",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "React-Toastify",
          color: "pink-text-gradient",
        },
      ],
      image: youtubeCourses,
      projectLink:"https://yuvraj6446.github.io/youTubeCourses/",

      source_code_link: "https://github.com/",
    },
    {
      name: "News App",
      description:
        `Developed a responsive news website that provides up-to-date news articles, headlines, and multimedia content
        on various topics. Designed an engaging and user-friendly interface that allows users to browse, and read news articles
        seamlessly.Implemented a responsive design using HTML and CSS to ensure the website is accessible on different devices,
        including desktops, tablets, and mobile phones. Implemented functionality to retrieve and display news data from a India
        News API. Tech: HTML, CSS, Tailwind CSS, Javascript. API: India News`,
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: newsapp,
      projectLink:"https://yuvraj6446.github.io/youTubeCourses/",
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };