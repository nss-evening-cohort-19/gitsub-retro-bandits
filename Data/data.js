const users = [
  {
    id: 1,
    name: 'Lesley Keyes',
    username: 'lesleyjkeyes',
    photo: '',
    location:'Nashville, TN',
    email: 'lesleyjkeyes@gmail.com',
    website: 'https://github.com/lesleyjkeyes',
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
  ]
  }
]

export default users;
