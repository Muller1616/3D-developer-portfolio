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
    flutter,
    meta,
    starbucks,
    tesla,
    shopify,
    food,
    D,
    amazon,
    threejs,
    Free,
    Solo,
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
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Video Editor",
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
    {
      name: "flutter",
      icon: flutter,
    },
  ];

  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "ADAMA SCIENCE  and TECH",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2022 - April 2023",
      points: [
        "making a responsive website with a very attractive ui/ux design and ensuring cross-browser compatibility.",
        "help in code editing and as a final project reviewer.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality website",
        "build the Amazon clone website.",
      ],
    },
    {
      title: "Software Engineering",
      company_name: "ADAMA SCIENCE and TECH",
      icon: tesla,
      iconBg: "#E6DEDD",
      points: [
        "Currently taking Software Engineering Courses at ADAMA SCIENCE AND TECH.",
        "Worked on different projects which are based on Python, C++, and Java advanced programming. I have made remarkable projects using those languages, including websites, and games. I am pretty good at those too."
      ],
    },
    {
      title: "Web Developer",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "ADAMA SCIENCE and TECH",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Conducted performance tuning and debugging to ensure minimal server downtime and maximum responsiveness.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Designed and developed scalable RESTful APIs using Node.js and Express.js to support front-end functionality.",
        "Collaborated with front-end developers to align API responses with UI requirements and improve user experience.",
        "i also built a food delivery website using Servlet and JSP technologies"
      ],
    },
  ];
  const testimonials = [
    {
      testimonial:
        "I have no word to explain him!. He is not only a great problem solver and developer but also a fantastic team player who ensures projects are completed efficiently and effectively.",
      name: "Mihreteab ",
      designation: "Mobile App",
      company: "Developer, Escalate ",
      image: "mulugeta-portfolio/src/assets/web.png",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Mulugeta does.",
      name: "Mr. Mengisteab",
      designation: "Product Manager,",
      company: "AI Engineer",
      image: "web.png",
    },
    {
      testimonial:
        "I would say simply, he is the best developer I have ever worked with.",
      name: "Mr. Yoseph",
      designation: "Product Leader, ",
      company: "Project Manager",
      image: "mulugeta-portfolio/src/assets/web.png",
    },
  ];
  
  const projects = [
    {
      name: "Food-Order",
      description:
        "Food Order Web Application is designed to provide a seamless and efficient experience for both customers and restaurant owners, making the process of ordering food online easy, fast, and enjoyable. The application allows users to browse through a variety of restaurants, explore different cuisines, and order their favorite meals with just a few clicks. One of the key features of the platform is its real-time order tracking system. Additionally, the application supports multiple payment options, including credit/debit cards, mobile wallets, and cash on delivery, making it flexible and accessible to a wide range of users.",
      tags: [
        {
          name: "Servlet",
          color: "blue-text-gradient",
        },
        {
          name: "JDBC",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "MySql",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: food,
      source_code_link: "https://github.com/Muller1616/Food-Order-web-app",
    },
    {
      name: "Dictionary App",
      description:
        " Dictionary & Translator Web Application is designed to be a comprehensive language resource, providing users with accurate word definitions, translations, synonyms, antonyms, and pronunciation guides—all in one place. The app functions as both a dictionary and a translator. Users can enter a word in any supported language to instantly receive its meaning, pronunciation, and examples of usage. The dictionary feature provides detailed word definitions, part of speech, phonetics, and related words, helping users expand their vocabulary and understand words in context.",
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
          name: "Wordnik API",
          color: "blue-text-gradient",
        },
      ],
      image: D,
      source_code_link: "https://github.com/Muller1616/DICTIONARY-APP",
    },
    {
      name: "Amazon-Clone",
      description:
        "Amazon Clone Frontend Project is a carefully crafted user interface that replicates the look and feel of Amazon, providing a seamless and visually engaging shopping experience.  This project focusing on responsive design, interactive UI elements, and modern front-end development practices. The application features a dynamic homepage with product listings, banners, and category sections, mimicking the structure of a real e-commerce platform. The navigation bar includes a search bar, cart icon, and user account section, ensuring a familiar and intuitive experience for users. Each product card is designed with a professional layout, displaying the product image, title, price, rating, and an “Add to Cart” button.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: amazon,
      source_code_link: "https://github.com/Muller1616/AMAZON-CLONE-PROJECT",
    },
  ];
  
   const certificates = [
    {
      title: "Frontend Development Certificate",
      platform: "@ Sololearn",
      image: Solo,
    },
    
    {
      title: "Responsive Web Design Certificate",
      platform: "@ FreeCodeCamp",
      image: Free,
    },
    // Add more certificates here...
  ];
  
  export { services, technologies, experiences, testimonials, projects , certificates};