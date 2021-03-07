import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bastian Arfianto | Web Developer', // e.g: 'Name | Developer'
  lang: 'en, id', // e.g: en, es, fr, jp
  description: 'Welcome to my web portfolio. Thanks for cody for the template', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello World, I'm",
  name: 'Bastian Arfianto',
  subtitle: 'Freelance Front-End Developer and Designer',
  cta: 'Get To Know Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hello, My name is Bastian Arfianto. You can call me Bastian. I am 21 years old. I am currently a final year student majoring in Informatics Engineering in one of university in Surabaya, Indonesia. I live in Surabaya, Indonesia. I am now looking for internship. If you're interested on me, you can contact all of my social media below.",
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
