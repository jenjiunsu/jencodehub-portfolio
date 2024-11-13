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
    name: 'Contact',
    href: '#contact',
},
];

export const myProjects = [
{
    title: 'Podcastr - AI Podcast Platform',
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    subdesc:
    'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
    backgroundColor: '#2A1816',
    border: '0.2px solid #36201D',
    boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
    {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
    },
    {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
    },
    {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
    },
    {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
    },
    ],
},
{
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
    'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
    backgroundColor: '#60f5a1',
    background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
    border: '0.2px solid rgba(208, 213, 221, 1)',
    boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
    {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
    },
    {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
    },
    {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
    },
    {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
    },
    ],
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
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
},
{
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
},
{
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
},
];