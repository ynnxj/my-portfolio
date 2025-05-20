import type { Project } from '@/types/Project'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Lumina',
    image: import.meta.env.BASE_URL + 'assets/projects/lumina-preview.png',
    description:
      'A group assigment where we recieved a Figma design from another group, and turned it into a real app using Vue.js. This was my first time tackling a bigger Vue project, and I certainly learned a lot about building components and collaborating with others!',
    demoLink: 'https://ynnxj.github.io/lumina/',
    githubLink: 'https://github.com/ynnxj/lumina',
  },
  {
    id: 2,
    title: 'Book Haus',
    image: import.meta.env.BASE_URL + 'assets/projects/bookhaus-preview.png',
    description:
      'This was my first experience working with backend during an API course. My group and I created databases, and I was responsible for implementing the user authentication system, including login, logout, and registration. Connecting backend with frontend was challenging but very rewarding, for sure.',
    demoLink: '#',
    githubLink: 'https://github.com/ynnxj/bookhaus-fullstack',
  },
  {
    id: 3,
    title: 'Webshop',
    image: import.meta.env.BASE_URL + 'assets/projects/webshop-preview.png',
    description:
      'My first project using JavaScript! I built a simple webshop and learned how to work with functions, events, and DOM manipulation. It was definitely a challenge to keep everything organized at first, but it helped me understand how JavaScript, HTML, and CSS come together to build interactive websites. This project gave me a solid foundation to keep evolving.',
    demoLink: 'https://ynnxj.github.io/webshop-assigment/',
    githubLink: 'https://github.com/ynnxj/webshop-assigment',
  },
  {
    id: 4,
    title: 'Quiz',
    image: import.meta.env.BASE_URL + 'assets/projects/quiz-preview.png',
    description:
      'Our first group assignment using JavaScript — and my first experience working in a dev team. We followed the Scrum method and used a modular structure to build the app. It was a great introduction to collaborative coding, task splitting, and version control.',
    demoLink: 'https://ynnxj.github.io/quiz-web-app/',
    githubLink: 'https://github.com/ynnxj/quiz-web-app',
  },
  {
    id: 5,
    title: 'Nemo (UX)',
    image: import.meta.env.BASE_URL + 'assets/projects/nemo-preview.png',
    description:
      'Taking what we learned in our UX course, my group designed this app. We came up with an idé, focused on wireframes, visual layout, page structure, fonts, and overall branding. The result was a complete design handoff and a clear guide for the other group to implement. This project helped me understand how to think from both a user and developer perspective during the design process.',
    demoLink: 'https://medieinstitutet.github.io/fed24d-grafiska-verktyg-clownfiskarna/',
    githubLink: 'https://github.com/Medieinstitutet/fed24d-grafiska-verktyg-clownfiskarna',
  },
]
