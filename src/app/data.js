/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

*/



export const repoHandler = async (req, res) => {
  const GITHUB_API_URL = "https://api.github.com/user/repos?type=all";
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  try {
    const response = await fetch(`${GITHUB_API_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (!response.ok) {
      // return res.status(response.status).json({ error: response.statusText })
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const repos = await response.json();
    console.log('Raw response from GitHub:', repos);


    const projects = repos.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'No description provided',
      date: repo.created_at.split('T')[0],
      url: repo.html_url,
      private: repo.private,
    }))

    console.log(projects);

    // Respond with the projects data
    res.status(200).json(projects);
    // return projects;

  } catch (error) {
    console.error('Failed to fetch GitHub repositories:', error);
    res.status(500).json({ error: 'Failed to fetch GitHub repositories' });

  }
}



export const BtnList = [
  {
    label: "Home",
    link: "/",
    icon: "home",
    newTab: false
  },
  {
    label: "About",
    link: "/about",
    icon: "about",
    newTab: false
  },
  {
    label: "Projects",
    link: "/projects",
    icon: "projects",
    newTab: false
  },
  {
    label: "Contact",
    link: "/contact",
    icon: "contact",
    newTab: false
  },
  {
    label: "Github",
    link: "https://github.com/faizan-adil1",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/faizan-adil/",
    icon: "linkedin",
    newTab: true,
  },
  // {
  //   label: "X",
  //   link: "https://www.x.com/code_bucks",
  //   icon: "twitter",
  //   newTab: true,
  // },
  {
    label: "Resume",
    link: "/Resume Faizan.pdf",
    icon: "resume",
    newTab: true,
  },
];

export const projectsData = [

  {
    id: 2,
    name: "ArtGallery Online",
    description: "Digital art showcase platform",
    date: "2022-06-20",
    demoLink: "https://artgalleryonline.example.com",
  },
  {
    id: 3,
    name: "BudgetPlanner",
    description: "Plan and track expenses",
    date: "2022-09-10",
    demoLink: "https://budgetplanner.example.com",
  },
  {
    id: 4,
    name: "HealthBeat",
    description: "Monitor heart rate zones",
    date: "2022-05-30",
    demoLink: "https://healthbeat.example.com",
  },
  {
    id: 5,
    name: "RecipeFinder",
    description: "Discover new recipes",
    date: "2022-07-12",
    demoLink: "https://recipefinder.example.com",
  },
  {
    id: 6,
    name: "JourneyLogger",
    description: "Log your travels",
    date: "2022-10-01",
    demoLink: "https://journeylogger.example.com",
  },
  {
    id: 7,
    name: "StudyBuddy",
    description: "Collaborative learning platform",
    date: "2022-04-18",
    demoLink: "https://studybuddy.example.com",
  },
  {
    id: 8,
    name: "TechTalk",
    description: "Tech news aggregator",
    date: "2022-11-05",
    demoLink: "https://techtalk.example.com",
  },
  {
    id: 9,
    name: "FitTrack",
    description: "Fitness and workout tracker",
    date: "2022-03-22",
    demoLink: "https://fittrack.example.com",
  },
  {
    id: 10,
    name: "MindfulMoments",
    description: "Meditation and mindfulness app",
    date: "2022-02-14",
    demoLink: "https://mindfulmoments.example.com",
  },
];

