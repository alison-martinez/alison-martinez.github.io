import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoUChicago from '@/images/logos/uchicago.svg'
import logoDumpster from '@/images/logos/dumpster.svg'
import logoGenetics from '@/images/logos/genetics.svg'
import logoPNAS from '@/images/logos/pnas.svg'
import logoStarburst from '@/images/logos/starburst.svg'
import logoContacts from '@/images/logos/contacts.svg'
import logoList from '@/images/logos/list.svg'
import logoTestLab from '@/images/logos/testLabIcon.svg'

const projects = [
  {
    name: 'Test Lab A/B Testing Platform',
    description:
      'TestLab is an open-source, self-hosted feature flagging and experimentation platform for creating feature toggles, rollouts, and experiments, with native Node, React, Ruby, and Python SDKs to evaluate features and allow rendering of user-specific variants. ',
    link: { href: 'https://testl-ab.github.io/', label: 'Test Lab' },
    logo: logoTestLab,
  },
  {
    name: 'The Dumpster of Disappointment',
    description:
      'A light-hearted take on a request bin, generating custom endpoints for aggregating and viewing webhook data, using Node, Express, and React.',
    link: {
      href: 'https://alisonmartinez.info/request',
      label: 'Request Bin',
    },
    logo: logoDumpster,
  },
  {
    name: 'Starburst Inventory',
    description: `A simple tool for keeping track of my inventory of Franciscan Starburst dishes, using Ruby, Sinatra, PostgreSQL, and MongoDB.`,
    link: {
      href: 'https://starburst.alisonmartinez.info',
      label: 'Starburst',
    },
    logo: logoStarburst,
  },
  {
    name: 'Genetics',
    description:
      'A maximum-likelihood method for demographic inference is applied to data sets consisting of the frequency spectrum of unlinked single-nucleotide polymorphisms (SNPs).',
    link: {
      href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1448761/pdf/171.pdf',
      label: 'academic.oup.com/genetics',
    },
    logo: logoGenetics,
  },
  {
    name: 'Proceedings of the National Academy of Sciences',
    description:
      'Making inferences about human demographic history by using a technique that combines multiple aspects of genetic data, including levels of polymorphism, the allele frequency spectrum, and linkage disequilibrium.',
    link: {
      href: 'https://www.pnas.org/doi/10.1073/pnas.0507325102',
      label: 'pnas.org',
    },
    logo: logoPNAS,
  },
  {
    name: 'Doctoral Thesis',
    description:
      'Inferring human demography from patterns of genetic variation.',
    link: {
      href: '/AlisonThesisFinal.pdf',
      label: 'uchicago.edu',
    },
    logo: logoUChicago,
  },

  //href: 'https://catalog.lib.uchicago.edu/vufind/Record/6091826',

  // {
  //   name: 'Contact Manager',
  //   description: `A contact manager webapp using Node and vanilla JavaScript.`,
  //   link: {
  //     href: 'https://contacts.alisonmartinez.info',
  //     label: 'contacts',
  //   },
  //   logo: logoContacts,
  // },
  // {
  //   name: 'To-Do Webapp',
  //   description: `A to-do list manager using Ruby, Sinatra, and PostgreSQL.`,
  //   link: {
  //     href: 'https://todos.alisonmartinez.info',
  //     label: 'to-dos',
  //   },
  //   logo: logoList,
  // },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Alison Martinez</title>
        <meta
          name="description"
          content="These are a few of my favorite things."
        />
      </Head>
      <SimpleLayout
        title="These are a few of my favorite things."
        intro="I’ve worked on tons of little projects over the years but here is a small selection of recent projects and professional publications."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-white dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
