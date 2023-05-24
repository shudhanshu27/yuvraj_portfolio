import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    biopic,extensionpic,
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
      name: "C++",
      icon: c,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
   
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
      name: "git",
      icon: git,
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
      name: "Bio ",
      description:"I have developed a self-bio web application using ReactJS that showcases my skills and experiences. The app provides links to my resume, GitHub, LinkedIn, and portfolio, allowing users to explore my work in-depth. To connect with me, I have included links to my Twitter, email, WhatsApp, and Instagram. The application has a clean and intuitive design that makes it easy for users to navigate and find the information they need. I have utilized various ReactJS components and libraries to enhance the user experience, such as react-router-dom, react-icons, and react-toastify. The development process involved overcoming various challenges, including responsive design, state management, and debugging, all of which I was able to resolve through my problem-solving skills.",
   tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        }
      ],
      image: biopic,
      projectLink:"https://yuvraj6446.github.io/myBio/",

      source_code_link: "https://github.com/",
    },
    {
      name: "Cricket Score Chrome Extension",
      description:"I have developed a live cricket score Chrome extension using HTML, CSS, JavaScript, and the CricAPI. The extension provides users with real-time updates on the latest cricket scores, including live scores, player stats, and team information. The design is sleek and intuitive, with user-friendly features that make it easy to use. I utilized the CricAPI to fetch data and display it in a readable format within the extension. The development process involved overcoming challenges, such as working with third-party APIs and ensuring that the extension is responsive and performs well on all devices. Through my debugging and troubleshooting skills, I ensured that the extension runs smoothly and is bug-free. Overall, the extension is an excellent resource for cricket fans who want to stay up-to-date with the latest scores and stats.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name :"CricAPI",
          color:"green-text-gradient",
        }
      ],
      image: extensionpic,
      projectLink:"https://github.com/yuvraj6446/chrome_ext",

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
      projectLink:"https://newsappyuv.netlify.app/",
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };