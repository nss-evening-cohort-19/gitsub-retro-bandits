const users = [
  {
    id: 1,
    name: 'Retro Bandits',
    username: 'retrobandits',
    photo: "../assets/images/retro.jpg",
    location:'Nashville, TN',
    email: 'retrobandits@gmail.com',
    website: 'https://github.com/retrobandits',
    sponsors: ['Kristen Chandler', 'Micah Stotsky', 'Justin Ferwerda'],
    repos: [
      {
        id: 1,
        title: 'INDIVIDUAL-PROJECT-sorting-hat',
        repoUrl: 'https://github.com/lesleyjkeyes/INDIVIDUAL-PROJECT-sorting-hat',
        favorite: true,
      },
      {
        id:2,
        title: 'LAB-pet-adoption',
        reporUrl: 'https://github.com/lesleyjkeyes/LAB-pet-adoption',
        favorite: false,
      },
      {
        id: 3,
        title: 'PRACTICE-youtube-player',
        repoUrl: 'https://github.com/lesleyjkeyes/PRACTICE-youtube-player',
        favorite: false,
      }
    ],
  packages: [
    {
      packageName: 'Docker',
      packageDescription: 'A software platform used for building applications based on containers — small and lightweight execution environments.'
    },
    {
      packageName: 'Apache Maven',
      packageDescription: 'A default package manager used for the Java programming language and the Java runtime environment.'
    }, 
    {
      packageName: 'NuGet',
      packageDescription: 'A free and open source package manager used for the Microsoft development platforms including .NET.'
    }
  ],
  projects: [
    {
      projectName: 'Goal Board',
      projectUrl: 'https://github.com/users/lesleyjkeyes/projects/1'
    },
    {
      projectName: 'Word Counter',
      projectUrl: 'https://github.com/users/Justin-Ferwerda/projects/1'
    },
    {
      projectName: 'Pet adoption',
      projectUrl: 'https://github.com/Justin-Ferwerda/LAB-pet-adoption'
  
    },
    {
      projectName: 'Sorting Hat',
      projectUrl: 'https://github.com/Justin-Ferwerda/INDIVIDUAL-PROJECT-sorting-hat'
    },
    {
      projectName: 'JS methods',
      projectUrl: 'https://github.com/Justin-Ferwerda/ASSIGNMENT-intro-js-array-methods'
    }
  ]
  }
]

export default users;
