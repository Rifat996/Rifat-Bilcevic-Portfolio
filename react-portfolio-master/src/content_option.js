import Mock1 from "./assets/images/mock1.png";
import Mock2 from "./assets/images/mock2.png";
import Mock3 from "./assets/images/mock3.jpg";
import Mock4 from "./assets/images/mock4.jpg";
import Myimg from "./assets/images/myimg.jpg";
import Mock5 from "./assets/images/mock5.jpg";
import Mock6 from "./assets/images/mock6.jpg";


const logotext = "RIFAT BILCEVIC";
const meta = {
    title: "Rifat Bilcevic",
    description: "I'm Rifat Bilcevic _ Web developer,currently residing in Bosnia and Herzegovina",
};

const introdata = {
    title: "I'm Rifat",
    animated: {
        first: "a web developer",
        second: "a migrant assistance worker",
        third: "a lifelong student",
    },
    description: "Feel free to explore my portfolio and/or contact me.",
    your_img_url: Myimg,
};

const dataabout = {
    title: "About myself",
    aboutme: "I'm a highly motivated and self-taught web developer based in Sarajevo, Bosnia and Herzegovina. I have a diverse range of experiences and skills that have shaped my career path.",
    education: "My educational background includes studying Arabic language and literature at the University of Sarajevo. This not only provided me with a strong foundation in linguistic and cultural studies but also allowed me to develop effective communication skills. Additionally, I hold an English Access Program Certificate sponsored by the US embassy in BiH, which has further enhanced my language proficiency and cross-cultural understanding. Throughout my academic journey, I consistently excelled in my studies and was recognized for my achievements. I was honored with the Student of Generation diploma during my high school years, attaining the highest marks throughout my four-year education. This recognition reflects my dedication and commitment to academic excellence.",
    employment: "Since April 2020, I have been employed at IOM (International Organization for Migration) as an MPA (Migration Program Assistant). In this role, I am deeply involved in addressing the challenges faced by migrants and refugees on their journey towards EU countries. This work is not only fulfilling but also allows me to apply my knowledge and skills to make a positive impact on individuals' lives. Furthermore, within the organization, I have taken on the responsibility of being the Respectful Workplace Focal Point for the region of Bosnia and Herzegovina. This role involves assisting colleagues in processing and addressing any potential misconduct in the workplace. I am committed to creating a safe and inclusive working environment where everyone feels respected and valued.",
    certification: "Continuing my professional development, I obtained a UN Language Proficiency Certificate in Arabic during my employment with IOM. This certification recognizes my proficiency in Arabic and further validates my language skills.",
    goals: "With my strong academic background, diverse experiences, and passion for continuous learning, I strive to expand my knowledge in web development and explore new technologies. I am eager to leverage my skills and experiences to create innovative web solutions and contribute to the ever-evolving field of technology."
};
const worktimeline = [{
        jobtitle: "Tourism Worker",
        where: "Valley of Tourism",
        date: "2016-2020",
    },
    {
        jobtitle: "Migrant Protection Assistant",
        where: "IOM/UN Migration",
        date: "2020-now",
    },
    {
        jobtitle: "Web Developer",
        where: "Freelance",
        date: "2022-now",
    },
];

const skills = [{
        name: "JavaScript",
        value: 90,
    },
    {
        name: "React",
        value: 90,
    },
    {
        name: "Firebase",
        value: 85,
    },
    {
        name: "HTML/CSS",
        value: 90,
    },
    {
        name: "Node.js/Express.js",
        value: 65,
    },
];

const services = [{
        title: "Medresa 'Osman ef. Redzovic'",
        description: "2011-2015, Student of Generation 2015 Award",
    },
    {
        title: "University of Sarajevo",
        description: "2016-2020, Arabic language and literature",
    },
    {
        title: "IT Academy Sarajevo",
        description: "2021-2022, JavaScript Frontend Development",
    },
];

const dataportfolio = [{
        img: Mock1,
        description: "Car service site with admin panel to generate bills and record vehicle service history",
        link: "https://central-m-systems.web.app/login",
    },
    {
        img: Mock6,
        description: "Gym website with owner controlled schedule and blog",
        link: "https://kinlab-project.web.app/",
    },
    {
        img: Mock2,
        description: "Tour agency site with booking and Leaflet maps functionalities",
        link: "https://rifat996.github.io/RifatTravelEx/#myPage",
    },
    {
        img: Mock3,
        description: "React Native Project - built a Nike Clone Shop with Product Modal and Cart functionalities",
        link: "https://github.com/Rifat996/React-Native-Nike-Shop/tree/master/AwesomeProject",
    },
    {
        img: Mock4,
        description: "Shoe 3D model built with Three.js and Fiber, interactive Gyroscope functionality",
        link: "https://github.com/Rifat996/ThreeJsShoeApp",
    },
    {
        img: Mock5,
        description: "Handmade bags website/webshop - online soon",
        link: "https://github.com/Rifat996",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "bilcevicrifat@gmail.com",
    YOUR_FONE: "+(387)62-069/303",
    description: "Hey there, my website visitors! You can either shoot me an email like a proper grown-up or hit me up on WhatsApp for a casual coffee or a meet-up where we can bond over our shared love of terrible puns and sarcasm. Just be warned, I'll probably order the duža u malu and start with annoying comments. So take your pick and let's make some magic happen!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "RifatGmail",
    YOUR_TEMPLATE_ID: "template_prum6ii",
    YOUR_USER_ID: "N1ZkcfLFcUW4zPbT1",
};

const socialprofils = {
    github: "https://github.com/Rifat996",
    linkedin: "https://www.linkedin.com/in/rifat-bil%C4%8Devi%C4%87-081b961a4/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};