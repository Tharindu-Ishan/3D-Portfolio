import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    pos,
    chat,
    player,
    editor,
    google,
    ndb,
    game,
    ijse,
    uom,
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
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Front End Developer",
      icon: backend,
    },
    {
      title: "Back End Developer",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Trainee Software Engineer",
      company_name: "IJSE-Institute of Software Engineering.(Panadura)",
      icon: ijse,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "Practical application of knowledge is crucial in software engineering. Training programs often include hands-on projects to allow students to apply their skills and gain real-world experience. This might involve developing software applications individually or in teams.",
        "Training programs usually involve classroom or online sessions led by experienced instructors. These sessions can include lectures, discussions, and demonstrations to explain theoretical concepts and provide practical insights.",
        "To reinforce learning, students may be given practical exercises and assignments. These tasks help them practice what they've learned and identify areas that may need further attention.",
        "Collaboration is a key aspect of software engineering. Training programs often encourage teamwork through group projects, fostering communication and collaboration skills among students.",
        "Institutes like IJSE typically aim to provide industry-relevant education. The curriculum may be updated to align with current industry trends and technologies, ensuring that students are well-prepared for the workforce.",
      ],
    },
    {
      title: "Trainee Full Stack Developer Program",
      company_name: "University of Moratuwa",
      icon: uom,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - June 2023",
      points: [
        "I have successfully completed the Web Design for Beginners course of the Trainee - Full Stack Developer program conducted by the Department of Computer Science & Engineering, Faculty of Engineering, University of Moratuwa.I am especially thankful to the academic staff of the University of Moratuwa, DP Education, and IT professionals for providing a great opportunity.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Senior Lecturer Institute of Software Engineering. No.223A 1/2, Galle Road, Panadura. Tel:+94772252985 Email:prasad@ijse.lk",
      name: "Mr.Prasad Waduge",
      designation: "CEO",
      company: "IJSE",
      
      image: "https://dulanga.com/assets/img/Guys/Prasad.png",
    },
    {
      testimonial:
        "Senior Lecturer Institute of Software Engineering.",
      name: "D.M.Ranjith Suranga",
      designation: "Senior Lecturer",
      company: "IJSE",
      image: "https://avatars.githubusercontent.com/u/19379846?v=4",
    },
    {
      testimonial:
        "Final Year Project Supervisor. Tel:+94112650301 Email:saliya.jg@gmail.com",
      name: "Dr.Saliya Jayasekara",
      designation: "Senior Lecturer",
      company: "University of Moratuwa",
      image: "https://asiacleanenergyforum.adb.org/wp-content/uploads/2023/06/Saliya.jpeg",
    },
  ];
  
  const projects = [
    {
      name: "Smart POS System",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "javaFX",
          color: "blue-text-gradient",
        },
        {
          name: "mySQL",
          color: "green-text-gradient",
        },
        {
          name: "jasperReport",
          color: "pink-text-gradient",
        },
      ],
      image: pos,
      source_code_link: "https://github.com/Tharindu-Ishan",
    },
    // {
    //   name: "Chat Application",
    //   description:
    //     "Made Chat application during the traning session to enhance the knowledge of client server architechture.",
    //   tags: [
    //     {
    //       name: "css",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Java",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "sceneBuilder",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: chat,
    //   source_code_link: "https://github.com/Tharindu-Ishan",
    // },
    {
      name: "Media Player",
      description:
        "Made simple media player to play music. All the functionalities have been implemented as it is and the appearance is implemented according to my desires.",
      tags: [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "javaFX",
          color: "pink-text-gradient",
        },
      ],
      image: player,
      source_code_link: "https://github.com/Tharindu-Ishan",
    },
    // {
    //   name: "Text Editor",
    //   description:
    //     "I have developed the personal text editor as an individual project during my training session. All the functionalities have been implemented as it is and the appearance is implemented according to my desires.",
    //   tags: [
    //     {
    //       name: "css",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "java",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "javaFX",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: editor,
    //   source_code_link: "https://github.com/Tharindu-Ishan",
    // },
    {
      name: "Google Website Clone",
      description:
        "The Google Design Clone project is a static website built with HTML and CSS. It closely resembles the look and feel of the Google search page, including the logo, search bar, buttons, and overall styling.",
      tags: [
        {
          name: "html5",
          color: "blue-text-gradient",
        },
        {
          name: "css3",
          color: "green-text-gradient",
        },
        
      ],
      image: google,
      source_code_link: "https://github.com/Tharindu-Ishan",
    },
    {
      name: "NDB Bank Website Clone",
      description:
        "The NDB Bank Design Clone project is a static website built with HTML and CSS. It closely resembles the look and feel of the NDB Bank search page, including the logo, search bar, buttons, and overall styling.",
      tags: [
        {
          name: "html5",
          color: "blue-text-gradient",
        },
        {
          name: "css3",
          color: "green-text-gradient",
        },
        
      ],
      image: ndb,
      source_code_link: "https://github.com/Tharindu-Ishan",
    },
    {
      name: "Mini Game",
      description:
        "The purpose ofthis project was to learn JavaScript and learn about Event handling using keyboard keys.",
      tags: [
        {
          name: "html5",
          color: "blue-text-gradient",
        },
        {
          name: "css3",
          color: "green-text-gradient",
        },
        {
          name: "javaScript",
          color: "pink-text-gradient",
        },
      ],
      image: game,
      source_code_link: "https://github.com/Tharindu-Ishan",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };