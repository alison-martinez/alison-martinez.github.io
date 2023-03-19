const features = [
  {
    name: 'Ruby / Sinatra',
    description: '',
    icon: 'devicon-ruby-plain colored',
    //icon: 'nf-dev-ruby',
  },
  {
    name: 'HTML',
    description: '',
    icon: 'devicon-html5-plain colored',
  },
  {
    name: 'Javascript',
    description: '',
    icon: 'devicon-javascript-plain colored',
  },
  {
    name: 'Node.js',
    description: '',
    icon: 'devicon-nodejs-plain colored',
  },
  {
    name: 'Express',
    description: '',
    icon: 'devicon-express-original',
  },
  {
    name: 'React',
    description: '',
    icon: 'devicon-react-original colored',
  },
  {
    name: 'Next.js',
    description: '',
    icon: 'devicon-nextjs-original colored',
  },
  {
    name: 'Go',
    description: '',
    icon: 'devicon-go-plain colored',
  },
  {
    name: 'Perl',
    description: '',
    icon: 'devicon-perl-plain colored',
  },
  {
    name: 'Python',
    description: '',
    icon: 'devicon-python-plain colored',
  },
  {
    name: 'Docker',
    description: '',
    icon: 'devicon-docker-plain colored',
  },
  {
    name: 'nginx',
    description: '',
    icon: 'devicon-nginx-original colored',
  },
  {
    name: 'Digital Ocean',
    description: '',
    icon: 'devicon-digitalocean-plain colored',
  },
  {
    name: 'Postgresql',
    description: '',
    icon: 'devicon-postgresql-plain',
  },
  {
    name: 'MongoDB',
    description: '',
    icon: 'devicon-mongodb-plain colored',
  },
  {
    name: 'Markdown',
    description: '',
    icon: 'devicon-markdown-plain colored',
  },
  {
    name: 'AWS',
    description: '',
    icon: 'devicon-amazonwebservices-plain colored',
  },
  {
    name: 'VS Code',
    description: '',
    icon: 'devicon-vscode-plain colored',
  },
  {
    name: 'LaTeX',
    description: '',
    icon: 'devicon-latex-plain colored',
  },
  {
    name: 'R',
    description: '',
    icon: 'devicon-r-plain colored',
  },
  {
    name: 'GitHub',
    description: '',
    icon: 'devicon-github-plain colored',
  },
]

export function Skills() {
  return (
    <div className="bg-transparent py-24 sm:py-32">
      {/*<div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"> */}
      <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8  lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-zinc-200">
              <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-600">
                <i className={`${feature.icon} text-4xl text-blue-400`} />
                {/*<i class="devicon-react-original colored"></i>*/}
                {/*<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />*/}
              </div>
              {feature.name}
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              {feature.description}
            </dd>
          </div>
        ))}
      </dl>
      {/*
      </div>
      </div> */}
    </div>
  )
}
