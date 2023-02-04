import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Resume - Alison Martinez</title>
        <meta name="description" content="Experience." />
      </Head>
      <SimpleLayout
        title="Experience."
        intro="I've worn a number of proverbial hats throughout my career, from
                management consulting to reimbursement consulting to clinical
                data analysis, but I always managed to work software development and engineering into every role."
      >
        <div className="space-y-20">
          <SpeakingSection title="Education">
            <Appearance
              href="https://public.launchschool.com/employers"
              title="Software Engineering"
              description="The mastery-based Core Curriculum followed by Capstone, with a focus on job readiness and just-in-time learning."
              event="Launch School"
              cta="Learn More"
            />
            <Appearance
              href="https://ggsb.uchicago.edu/"
              title="Ph.D., Genetics"
              description="Gained proficiency in C, C++, Perl, and scientific writing
                    in LaTeX, with a focus on optimizing existing software and
                    creating new scripts to analyze genetic data and present
                    results in an informative manner. 
                    
                    Collaborated with fellow graduate students and professors
                    on the design, implementation, visualization, and
                    publication of novel scientific work."
              event="The University of Chicago"
              cta="Learn More"
            />
            <Appearance
              href="https://science.psu.edu/bmb/undergraduate/degree-programs/MICRB"
              title="B.S., Microbiology"
              description="Bachelor of Science degree in microbiology and a minor in biochemistry and molecular biology."
              event="The Pennsylvania State University"
              cta="Learn More"
            />
          </SpeakingSection>
          <SpeakingSection title="Professional Experience">
            <Appearance
              href="https://www.innovationpark.psu.edu/index.php/technology-transfer"
              title="Senior Technology Licensing Officer"
              description="Evaluated innovations in terms of intellectual property strength, significance, commercial impact,
technical feasibility, and value proposition compared to existing and pipeline competitors, focusing on
novel pharmaceuticals, biotech, medical devices, and innovations applicable to the healthcare sector.
Provided actionable feedback and recommendations to inventors on potential improvements to their
projects and proposals, including research design, commercialization strategy, and product positioning"
              event="Penn State University"
              cta="Learn More"
            />
            <Appearance
              href="https://oklahoma.gov/ohca/providers/molecular-pathology.html"
              title="Geneticist and Clinical Data Specialist"
              description="Developed new software tools to allow for increased efficiency and functionality in handling large and
complex data sets, with a special interest in Perl, R, Google Motion Charts, Circos, and 3M PPE tools.
Evaluated the analytical validity, clinical validity, and clinical utility of emerging genetic technologies,
including FDA-approved products and proprietary, lab-developed tests"
              event="Oklahoma Health Care Authority"
              cta="Learn More"
            />
            <Appearance
              href="https://www.lek.com/"
              title="Life Science Consultant and Project Manager"
              description="Developed market models, pharmacoeconomic evaluations, and other analytic approaches to quantify
the value of innovative technologies and financial impact of recommended strategies.
Conducted rigorous analysis of pharma, biotech, and medical device market segments to determine the
current treatment paradigm, competitive landscape, emerging technologies, IP status, reimbursement
environment, and unmet needs across various therapeutic and diagnostic areas.
Synthesized team findings into actionable recommendations and presented those findings to clients
ranging from start-ups to multi-billion dollar pharmaceutical, biotech, and medical device corporations."
              event="L.E.K. Consulting"
              cta="Learn More"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
