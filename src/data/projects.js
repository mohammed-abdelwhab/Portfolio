const rawProjects = [
  {
    id: 1,
    name: "MAG Design",
    position: "forward",
    jerseyNumber: 10,
    role: "Full-Stack",
    liveUrl: "https://mag-design-hdj8.vercel.app",
    repoUrl: "https://github.com/mohammed-abdelwhab/MAG-Design",
    description: "A Next.js 14 luxury interior design platform. Bilingual EN/AR with RTL switching, multi-step booking, and a secure client portal for tracking project phases.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"]
  },
  {
    id: 2,
    name: "ABC Advanced Body Care",
    position: "forward",
    jerseyNumber: 9,
    role: "Frontend",
    liveUrl: "#", // Add live URL if provided later
    repoUrl: "#",
    description: "Modern landing page for an advanced body care clinic. Focuses on premium aesthetics and smooth scrolling experiences.",
    stack: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 3,
    name: "React Quiz App",
    position: "midfielder",
    jerseyNumber: 8,
    role: "Frontend",
    liveUrl: "https://react-reducer-quiz.vercel.app/",
    repoUrl: "#",
    description: "An interactive React quiz application utilizing useReducer for complex state management, custom hooks, and dynamic feedback.",
    stack: ["React", "useReducer", "CSS Modules"]
  },
  {
    id: 4,
    name: "useMovies",
    position: "midfielder",
    jerseyNumber: 6,
    role: "Frontend",
    liveUrl: "https://github.com/mohammed-abdelwhab/movies-app", // Using github URL as live URL wasn't provided, or we can handle it
    repoUrl: "https://github.com/mohammed-abdelwhab/movies-app",
    description: "A movie database application with custom hooks, fetching data from OMDB API, local storage caching, and detailed movie views.",
    stack: ["React", "OMDB API", "Custom Hooks"]
  },
  {
    id: 5,
    name: "Bankist",
    position: "defender",
    jerseyNumber: 5,
    role: "Frontend",
    liveUrl: "https://mohammed-abdelwhab.github.io/bankist-app/",
    repoUrl: "#",
    description: "A minimalist banking application handling transfers, loans, and account closures. Note: Demo login: js/1111 or jd/2222.",
    stack: ["JavaScript", "DOM Manipulation", "CSS"]
  },
  {
    id: 6,
    name: "Mapty",
    position: "defender",
    jerseyNumber: 4,
    role: "Frontend",
    liveUrl: "https://mohammed-abdelwhab.github.io/mapty-app/",
    repoUrl: "#",
    description: "Workout tracking application using Geolocation API and Leaflet library to map running and cycling workouts.",
    stack: ["JavaScript", "Leaflet", "Geolocation"]
  },
  {
    id: 7,
    name: "FPL Scout",
    position: "goalkeeper",
    jerseyNumber: 1,
    role: "Frontend",
    liveUrl: "https://github.com/mohammed-abdelwhab/fpl-scout",
    repoUrl: "https://github.com/mohammed-abdelwhab/fpl-scout",
    description: "Fantasy Premier League analytics dashboard providing insights on player forms, upcoming fixtures, and optimal transfers.",
    stack: ["React", "FPL API", "Tailwind CSS"]
  },

];

export const projects = rawProjects;
