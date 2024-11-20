export const navLinks = [
{
    id: 1,
    name: 'Home',
    href: '#home',
},
{
    id: 2,
    name: 'About',
    href: '#about',
},
{
    id: 3,
    name: 'Project',
    href: '#project',
},
{
    id: 4,
    name: 'Experience',
    href: '#experience',
},
{
    id: 5,
    name: 'Contact',
    href: '#contact',
},
];

export const myProjects = [
{
    title: ' BBForum - Stock Market Discussion Forum(Inspired by C Money Stock Discussion Community)',
    desc: 'Centered around stock exchange, BBForum provides a convenient platform for investors to share investment experiences, discuss market trends, and exchange the latest stock information. ',
    subdesc:
    "The project is built with Python and Django's MTV architecture, connecting to a PostgreSQL database with ORM for data access. Using TailwindCSS and Alpine.js, it delivers a responsive UI and is deployed on Heroku.",
    href: 'https://www.bbforums.org',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/Bbforum.png',
    spotlight: '/assets/spotlight00.png',
    tags: [
    {
        id: 1,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
    },
    {
        id: 2,
        name: 'Alpinejs',
        path: '/assets/Alpinejs.png',
    },
    {
        id: 3,
        name: 'Django',
        path: 'assets/Django.png',
    },
    {
        id: 4,
        name: 'AWS',
        path: '/assets/AWS.png',
    },
    {
        id: 5,
        name: 'Postgresql',
        path: 'assets/Postgresql.png',
    },
    ],
},
{
    title: 'Coming Soon...',
    desc: [],
    subdesc: [],
    href: [],
    spotlight: '/textures/project/project3.mp4',
    logo: [],
    texture: '/textures/project/project2.mp4',
    tags: [],
},

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
return {
    deskScale: isSmall ? 0.03 : isMobile ? 0.06 : isTablet ? 0.065 : 0.07,
    deskPosition: isSmall ? [0.3, -4.5, 0] : isMobile ? [0.5, -4.5, 0] : isTablet ? [0.35, -5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [3.6, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [8, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [2.7, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [9, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-7.4, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-18, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-7.4, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-14, -7, -10] : [-13, -13, -10],
};
};

export const workExperiences = [
{
    id: 1,
    name: '5xcampus - ASTRO CAMP',
    pos: 'Student',
    duration: '2024/06 - Present',
    title: (
        <>
            * Collaborated with team members to complete the planning, development, and deployment of a stock market forum project with full functionality within six weeks. <br />
            * Learned Git, SQL, Python, Django, HTML/CSS, JavaScript, and more from scratch, building a solid foundation in programming, database concepts, and network operations. <br />
            * Project: Stock Market Forum Website - BBForum Website Link. <br />
            * Used QuickDatabaseDiagrams to plan project database relationships. <br />
            * Used GitHub to manage feature tickets.
        </>
    ),
    icon: '/assets/5xcampus.svg',
    animation: 'raising',
},
{
    id: 2,
    name: 'IPrimo Corp.',
    pos: 'Wedding Ring Consultant',
    duration: '2024/01 - 2024/05',
    title: 
    <>
        * Sold three necklaces totaling over NT$20,000 within one month of starting.<br />
        * Skilled in product sales and customer service, actively achieving sales targets.
    </>
    ,
    icon: '/assets/IPrimo.svg',
    animation: 'happy',
},
{
    id: 3,
    name: 'Wowprime Corp.',
    pos: 'Pastry Chef',
    duration: '2023/09 - 2023/11',
    title:  
        <>
        * Collaborated with a partner to handle a Mother's Day peak of 500 customers, ensuring efficient and high-quality service.<br />
        * Maintained high standards of food quality through three consecutive holiday shifts.<br />
        * Trained new employees to work independently within a month.
        </>
    ,
    icon: '/assets/Wowprime.svg',
    animation: 'excited',
},
];