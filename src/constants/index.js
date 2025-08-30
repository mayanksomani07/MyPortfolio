import { meta, shopify, starbucks, tesla, prism, designers_dorm, pingidentity } from "../assets/images";
import {
    car,
    contact,
    cplusplus,
    c,
    java,
    python,
    css,
    php, 
    sql,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    photoshop,
    illustrator,
    premier_pro,
    after_effect,
    xd,
    solidity,
    solidwork,
    javafx,
    firebase,
    powerbi,
    event,
    crowdfunding,
    olympic,
    whatsapp,
    cryptopulse,
    nft_card_game,
    reverse_backdoor
} from "../assets/icons";

export const skills = [
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Prgramming Language",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Prgramming Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Prgramming Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Prgramming Language",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Scripting Language",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Datatype",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: photoshop,
        name: "Photoshop",
        type: "Graphic Design",
    },
    {
        imageUrl: illustrator,
        name: "Illustrator",
        type: "Graphic Design",
    },
    {
        imageUrl: premier_pro,
        name: "Premier Pro",
        type: "Video Editing",
    },
    {
        imageUrl: after_effect,
        name: "After Effect",
        type: "Video Editing",
    },
    {
        imageUrl: xd,
        name: "XD",
        type: "Website Prototype Tool",
    },
    {
        imageUrl: javafx,
        name: "JavaFX",
        type: "Others",
    },
    {
        imageUrl: solidity,
        name: "Solidity",
        type: "Others",
    },
    {
        imageUrl: solidwork,
        name: "SolidWorks",
        type: "Others",
    },
    {
        imageUrl: powerbi,
        name: "PowerBI",
        type: "Others",
    }
];

export const experiences = [
    {
        title: "Software Engineering 1 ",
        company_name: "PingIdentity",
        icon: pingidentity,
        iconBg: "#C1272D",
        date: "July 2024 - Present",
        points: [
            "Contributed to the design and implementation of an AI-driven chatbot for PingOne DaVinci, enabling intuitive natural language interaction with orchestration workflows and enhancing user engagement.",
            "Performed minor bug fixes on Helix-Proxy, backend service linking PingOne and Helix for AI agent development.",
            "Assisted in building an AI-powered assistant for the PingOne Platform, facilitating platform-wide interactions and administrative tasks through natural language, reducing manual effort and improving operational efficiency.",
            "Collaborated with the Helix Platform team to resolve multiple UI bug fixes, enhancing user experience.",
            "Developed an AI Agent workflow within the Ping Protect ecosystem, automating decision-making processes for better threat detection and incident response."
        ],
    },
    {
        title: "SDE Intern",
        company_name: "PingIdentity",
        icon: pingidentity,
        iconBg: "#C1272D",
        date: "January 2024 - June 2024",
        points: [
            "Designed and deployed a full-stack semantic video search web application for internal use, leveraging ReactJS, Node.js, PM2, and Nginx, significantly improving content discoverability for employees.",
            "Increased unit test coverage of the DaVinci application from 62.1% to 72.3% using the Mocha and Chai testing frameworks, contributing to better reliability and code quality.",
            "Executed and validated over 500 TestRail test cases as part of the quality assurance process for DaVinci Flows."
        ],
    },
    {
        title: "Mentee",
        company_name: "Samsung Prims",
        icon: prism,
        iconBg: "#a2d2ea",
        date: "January 2023 - June 2023",
        points: [
            "Developed and deployed a specialized load-testing client to evaluate latency, throughput performance of the Aerospike NoSQL database.",
            "Collected and analyzed benchmarking results, utilizing Prometheus for metrics extraction and Grafana dashboards for visualization.",
        ],
    },
    {
        title: "Graphic Designer",
        company_name: "Designer Dorm",
        icon: designers_dorm,
        iconBg: "#fcfcfc",
        date: "Novemeber 2021 - December 2021",
        points: [
            "Created 3 unique t-shirt designs as a freelance graphic designer, which were successfully printed.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/mayanksomani07',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mayank-somani-3868bb1ba/',
    }
];

export const projects = [
    {
        iconUrl: event,
        theme: 'btn-back-blue',
        name: 'Department Event Management System',
        description: 'Designed and developed a website for facilitating ease of managing events in our department. In the project, features like create, view, register event, report generation have been implemented.',
        link: 'https://github.com/mayanksomani07/departmenteventmanagement.github.io',
    },
    {
        iconUrl: crowdfunding,
        theme: 'btn-back-pink',
        name: 'Crowdfunding',
        description: 'Designed and Developed a D-app using blockchain technology to improve accessibility, and transparency in crowdfunding. In the project, features like creating, displaying campaigns, and raising funds for campaigns are demonstrated.',
        link: 'https://github.com/mayanksomani07/crowdfunding',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real Estate Management System',
        description: 'Designed and developed a Website for managing activities related to real estate. In the Project, features like view, upload property, update details, and house-price prediction have been implemented.',
        link: 'https://github.com/mayanksomani07/REMS.github.io',
    },
    {
        iconUrl: olympic,
        theme: 'btn-back-yellow',
        name: 'Olympics Data Analysis',
        description: 'Developed a project, giving insight of Overall analysis, Country wise analysis, Athlete wise analysis for Olympics Game. In the project, Olympics Medal Predictor feature have also been implemented.',
        link: 'https://github.com/mayanksomani07/OlymicsDataAnalysis',
    },
    {
        iconUrl: whatsapp,
        theme: 'btn-back-red',
        name: 'Whatsapp Chat Analysis',
        description: 'Developed a project for analysis of WhatsApp chat by dragging and dropping of WhatsApp chat file. In the project, features like most busy user, activity map, monthly timeline, daily timeline, statistical data are demonstrated.',
        link: 'https://github.com/mayanksomani07/whatsappchatanalyzer.github.io',
    },
    {
        iconUrl: cryptopulse,
        theme: 'btn-back-green',
        name: 'CryptoPulse',
        description: 'Developed a website for management of cryptocoin portfolio and maintenance of supplier, user and item list by admin. In the project, features like purchase order, receive order, return list, sale list, cryptocurrencies news are demonstrated.',
        link: 'https://github.com/mayanksomani07/cyptopulse',
    },
    {
        iconUrl: nft_card_game,
        theme: 'btn-back-blue',
        name: 'NFT Card Game',
        description: 'Desing and Developed a D-app using blockchain technology to build own characters, create and join live battles, choose battleground, and battle other players in real-time, adopting Web 3.0 model, smart contract.',
        link: 'https://github.com/mayanksomani07/card_game',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'PriceWise',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/mayanksomani07/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/mayanksomani07/threads_app',
    },
    {
        iconUrl: reverse_backdoor,
        theme: 'btn-back-pink',
        name: 'Reverse Backdoor',
        description: 'Implemented and analyzed reverse backdoor attack using rademacher complexity model, gaining valuable insights into potential security vulnerabilities and countermeasures within network systems.',
        link: 'https://github.com/mayanksomani07/reverse-backdoor',
    },
];