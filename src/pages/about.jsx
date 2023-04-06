import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Alison Martinez</title>
        <meta
          name="description"
          content="I’m Alison Martinez. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {`Hi! I'm Alison`}.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                {`My interests and pursuits include mid-century modern furniture, Stephen King and Haruki Murakami novels, HBO's The Leftovers, my mint green Fiat 500, and smart home automation. I love to golf...poorly.  I share my home with my husband of 12 years and six rescued animals -- three Norwegian Elkhounds (Chewie, Lyanna, and Nora) and three cats (Eames, Daphne, and Clementine).`}
              </p>
              <p>
                {`Back in the dark ages when I was in high school, our programming curriculum consisted of a single class in GW-Basic on already-outdated Commodore 64s. I thoroughly enjoyed it, but at the time it wasn't considered part of the "academic" track to be interested in computers. I earned a Bachelor's degree in microbiology because it seemed interesting at the time, but I never really thought about what job I would actually do with that degree. It turns out that if you don't want to work in a lab, the answer is not much.`}
              </p>
              <p>
                {`I decided to pursue a PhD in genetics at the University of Chicago and discovered computational genetics -- no wet lab work required. I dual-booted my Windows laptop with Linux and taught myself enough Perl, R, and C++ to to develop and run coalescent simulations and process the data for my dissertation.  This started my self-taught dive into software and development.`}
              </p>
              <p>
                {`After years of working in software engineering-adjacent roles, I'm taking a leap and looking to fully transition into a pure software engineering role. With my unique background and experience, I am excited to bring fresh
                perspectives and contributions to new opportunities.`}
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink
                href="https://twitter.com/martinez_alison"
                target="_blank"
                rel="noopener noreferrer"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink> */}
              <SocialLink
                href="https://www.linkedin.com/in/alisonadamsmartinez/"
                target="_blank"
                rel="noopener noreferrer"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="https://github.com/alison-martinez"
                target="_blank"
                rel="noopener noreferrer"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/alison.martinez/"
                target="_blank"
                rel="noopener noreferrer"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>

              <SocialLink
                href="mailto:alison@alisonmartinez.info"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                alison@alisonmartinez.dev
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
