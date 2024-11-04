/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Sanket",
  logo_name: "sanket.p()",
  nickname: "sanket_01 / picleric",
  full_name: "Sanket Patil",
  subTitle:
    "Full Stack Developer, Machine Learning Enthusiast, and dedicated athlete. I’m always pushing to achieve in tech and on the field as a passionate kabaddi player and sports enthusiast.",
  resumeLink:
    "https://drive.google.com/drive/folders/1ok83gvetc3XwwW6PwoiJzMVENyVZhDSL",
  mail: "mailto:sanketpatil143107@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Sanket-Pandit-Patil",
  linkedin: "https://www.linkedin.com/in/sanket-patil-b23a5b1b1/",
  gmail: "sanketpatil143107@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/hrishi_55",
  instagram: "https://www.instagram.com/sanketpatil728/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and Angular",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Visual Basic",
          fontAwesomeClassname: "simple-icons:dot-net",
          style: {
            color: "#029FCE",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

  ],
};

/* 
const degrees = {
  degrees: [
    {
      title: "Dalhousie University",
      subtitle: "Masters in Applied Computer Science",
      logo_path: "dal.png",
      alt_name: "DAL",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Management & Warehousing",
        "⚡ Learn Advanced Topics in Cloud Computing, Cloud Architecture along with Serverless Computing",
        "⚡ Worked on projects on courses like Mobile Computing and Web Technologies.",
      ],
      website_link: "https://www.dal.ca/",
    },
    {
      title: "SAL Engineering and Technical Institute",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "sal.png",
      alt_name: "SETI",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for ML/DL, Web Development, Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://www.sal.edu.in/",
    },
  ],
};*/

/*const certifications = {
  certifications: [
    {
      title: "AWS Developer Associate",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "AWS Certified Cloud Practioner",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/8b2db191-702d-427c-91aa-0f926be447a6/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "Google Summer of Code 2019",
      subtitle: "Google / Sugar Labs",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffc475",
    },
    {
      title: "Google Code-In Student",
      subtitle: "2014-2017",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#1e70c1",
    },
    {
      title: "Google Summer of Code Mentor",
      subtitle: "2017 / 2018 / 2020",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffbfae",
    },
    {
      title: "Google Code-In Mentor",
      subtitle: "2017 / 2018 / 2019",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#b190b0",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
    {
      title: "Sequence Models",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
      alt_name: "deeplearning.ai",
      color_code: "#E2405F",
    },
    {
      title: "Machine Learning",
      subtitle: "deeplearning.ai",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
      alt_name: "Google",
      color_code: "#7A7A7A",
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Android Developer Nanodegree",
      subtitle: "Part of Google India Scholarship Program",
      logo_path: "100.png",
      certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
      alt_name: "Google",
      color_code: "#C5E2EE",
    },
    {
      title: "InOut 4.0 Winner #2",
      subtitle: "2017",
      logo_path: "ino.png",
      certificate_link: " ",
      alt_name: "InOut",
      color_code: "#fffbf3",
    },
  ],
};*/

// Experience Page
/*const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "IT Developer",
          company: "Canada Revenue Agency",
          company_url: "https://www.canada.ca/en/revenue-agency.html",
          logo_path: "cra.png",
          duration: "May 2023 - Ongoing",
          location: "Halifax, Nova Scotia",
          description:
            "Canada Revenue Agency (CRA) administers tax laws for the Government of Canada and for most provinces and territories, and administers various social and economic benefit and incentive programs delivered through the tax system.",
          color: "#f10000",
        },
        {
          title: "Full Stack Developer",
          company: "Quicko",
          company_url: "https://quicko.com/",
          logo_path: "quicko.jpg",
          duration: "June 2021 - October 2021",
          location: "Ahmedabad",
          description:
            "Quicko is an online tax planning, preparation & filing platform for individuals & businesses.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Google Summer of Code",
          company: "Sugar Labs",
          company_url: "https://sugarlabs.org/",
          logo_path: "google_logo.png",
          duration: "May 2019 - Aug 2019",
          location: "Work From Home",
          description:
            "I worked on the Dashboard project which helps users track their activities while using Sugar OS. I also worked on making a Tamagotchi-like widget for Sugar's Home Screen",
          color: "#ee3c26",
        },
        {
          title: "Android App Developer Intern",
          company: "IAS4Sure",
          company_url: " ",
          logo_path: "buld.jpg",
          duration: "December 2019 - February 2020",
          location: "Work From Home",
          description:
            "Internship task was to make a native Android application. ",
          color: "#0071C5",
        },
        {
          title: "Web Developer",
          company: "Wrighter Writing Solutions",
          company_url: " ",
          logo_path: "wrighter.jpg",
          duration: "August 2020",
          location: "",
          description: "Develop a website using PHP and jQuery.",
          color: "#56A4D3",
        },
        {
          title: "Front-End Developer",
          company: "VJ TechServe",
          company_url: " ",
          logo_path: "vjt.png",
          duration: "September 2020",
          location: "",
          description: "Develop a portfolio website using ReactJS",
          color: "#800000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Summer of Code Mentor",
          company: "Sugar Labs / GSoC",
          company_url: "https://sugarlabs.org/",
          logo_path: "google_logo.png",
          duration: "Summer of 2017 / 18 / 20",
          location: " ",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
        {
          title: "Google Code-In Mentor",
          company: "Sugar Labs / GSoC",
          company_url: "https://sugarlabs.org/",
          logo_path: "google_logo.png",
          duration: "Winter of 2017 / 18 / 19",
          location: " ",
          description:
            "Day to day resposibilites of this mentorship was to help out children aged 13-17 get started with programming and open-source, review their work and approve them.",
          color: "#D83B01",
        },
        {
          title: "Board Member at Codeuino",
          company: " ",
          company_url: " ",
          logo_path: "codeuino.jpg",
          duration: "2018 - 2019",
          location: " ",
          description: "Previous Board during early days of Codeuino",
          color: "#D83B01",
        },
        {
          title: "BluWings Club",
          company: " ",
          company_url: " ",
          logo_path: "b.png",
          duration: "2018 - On Going",
          location: " ",
          description:
            "Co-Founder and President of the programming club called BluWings. Have organized several workshops which introduced programming and related tools to freshers.",
          color: "#D83B01",
        },
      ],
    },
  ],
};
*/

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create MERN Stack And Machine Learning Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sanket.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Sports",
    subtitle:
      "My sports journey is full of such moments, and here, I’ve captured some highlights that mean a lot to me. From intense matches to unforgettable wins, this section holds the stories behind my achievements, along with photos and videos that bring these memories to life",
    link: "https://drive.google.com/drive/folders/1ifRRGMaoAJ4pUZXWd2HysusC8QMU6v6s?dmr=1&ec=wgc-drive-hero-goto",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [

    {
      name: "Weather_App",
      url: "https://github.com/Sanket-Pandit-Patil/Weather_App",
      description: "Developed a web application that provides users with real-time weather updates and forecasts.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    
    {
      name: "Portfolio",
      url: "",
      description: " A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },

    {
      name: "Food-Delivery-WebSite",
      url: "https://github.com/Sanket-Pandit-Patil/Food-Delivery-Web-Site",
      description: " A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",

        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },


    {
      name: "Calories_Burn_Predication",
      url: "https://github.com/Sanket-Pandit-Patil/Calories-Burn-Predication- ",
      description:
        "The goal is to predict calories burned during exercise or daily activities based on physiological metrics",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    
    {
      name: "YouTube-Video-Summarization",
      url: "https://github.com/Sanket-Pandit-Patil/YouTube-Video-Summarization",
      description:
        "Users can input a YouTube video URL or upload a local video file to generate a summarized version of the transcript.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        
      ],
    },

    {
      name: "Cab Security System",
      url: " ",
      description:
        "Driver drowsiness detection, profanity detection, violence detection, SMS alerts, cab driver tracking.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
   
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  projectsHeader,
  contactPageData,
  projects,
};
