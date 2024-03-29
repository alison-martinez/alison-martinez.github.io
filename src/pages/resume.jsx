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
              href="https://ggsb.uchicago.edu/"
              title="Ph.D., Genetics"
              description={
                <div>
                  <p className="mb-2">
                    {`Gained proficiency in C, C++, Perl, and scientific writing
                    in LaTeX, with a focus on optimizing existing software and
                    creating new scripts to analyze genetic data and present
                    results in an informative manner.`}
                  </p>
                  <p>
                    {`Collaborated with fellow graduate students and professors on
                    the design, implementation, visualization, and publication
                    of novel scientific work.`}
                  </p>
                </div>
              }
              event="The University of Chicago"
              cta="Learn More"
            />
            <Appearance
              href="https://science.psu.edu/bmb/undergraduate/degree-programs/MICRB"
              title="B.S., Microbiology"
              description="Earned a Bachelor of Science degree in microbiology and a minor in biochemistry and molecular biology."
              event="The Pennsylvania State University"
              cta="Learn More"
            />
          </SpeakingSection>
          <SpeakingSection title="Professional and Technical Experience">
            <Appearance
              href="https://testl-ab.github.io/"
              title="Test Lab Creator and Software Engineer"
              description={
                <div>
                  <p className="mb-2">
                    {`Collaborated with three other developers on the creation, design, and implementation of Test Lab, an open-source, self-hosted platform for creating and managing feature toggles, rollouts, and experiments.`}
                  </p>
                  <p className="mb-2">
                    {`Developed native Node, React, Ruby, and Python SDKs for Test Lab, with assignment logic to evaluate
features and allow rendering of user-specific variants while ensuring the integrity of A/B experiments.`}
                  </p>
                  <p className="mb-2">
                    {`Developed the Test Lab backend server, which exposes RESTful APIs for creating and managing
features, users, and experiment-related events.`}
                  </p>
                  <p className="mb-2">
                    {`Dockerized the Test Lab Node backend server, React frontend UI, and PostgreSQL database, available on
the AWS Elastic Container Registry for easy deployment on virtual private servers or AWS ECS.`}
                  </p>
                  <p>
                    {`Authored the Test Lab case study and documentation, available at TestL-ab.github.io `}
                  </p>
                </div>
              }
              event="Independent Study"
              cta="Learn More"
            />
            <Appearance
              href="https://www.sbir.gov/"
              title="SBIR/STTR Grant Reviewer"
              description={
                <div>
                  <p className="mb-2">
                    {`Reviews SBIR and STTR federal grant proposals prior to submission, focusing on novel
pharmaceuticals, biotech, genetic tests and technologies, medical devices, and other innovations applicable to the healthcare sector.`}
                  </p>
                  <p className="mb-2">
                    {`Evaluates the proposed innovation in terms of potential significance, commercial impact, technical
feasibility, and value proposition compared to existing and pipeline competitors.`}
                  </p>
                </div>
              }
              event="Independent Consultant"
              cta="Learn More"
            />
            <Appearance
              href="https://www.innovationpark.psu.edu/index.php/technology-transfer"
              title="Senior Technology Licensing Officer"
              description={
                <div>
                  <p className="mb-2">
                    {`Evaluated life science innovations from the College of Medicine in terms of intellectual property strength and potential commercial value.`}
                  </p>
                  <p>
                    {`Provided actionable feedback and recommendations to inventors on potential improvements to their
projects and proposals, including research design, commercialization strategy, and product positioning.`}
                  </p>
                </div>
              }
              event="Penn State University"
              cta="Learn More"
            />
            <Appearance
              href="https://oklahoma.gov/ohca/providers/molecular-pathology.html"
              title="Geneticist and Medicaid Clinical Data Specialist"
              description={
                <div>
                  <p className="mb-2">
                    {`Developed new software tools to allow for increased efficiency and functionality in handling large and
complex claims data sets using Perl, R, Tableau, Google Motion Charts, Circos, SQL, and 3M PPE.`}
                  </p>
                  <p className="mb-2">
                    {`Designed and executed research projects using physician, inpatient, outpatient, and pharmacy claims along
with enrollment data to aid in the development of health care policy, acting as an internal consultant to OHCA staff in determining the appropriate analysis for specific clinical questions.`}
                  </p>
                  <p className="mb-2">
                    {`Evaluated the analytical validity, clinical validity, and clinical utility of emerging genetic technologies,
including FDA-approved products and proprietary, lab-developed tests.`}
                  </p>
                  <p className="mb-2">
                    {`Developed evidence-based policies, guidelines, and reimbursement rates for coverage of genetic tests
and technologies for populations served by Oklahoma’s Medicaid agency.`}
                  </p>
                  <p className="mb-2">
                    {`Acted as a liaison between Oklahoma Medicaid and providers, working toward appropriate
utilization of genetic products and technologies.`}
                  </p>
                  <p className="mb-2">
                    {`Produced and delivered educational presentations on genetics to key internal and external
stakeholders, including the Medicaid Evidence-Based Decisions Project, the Oklahoma Health Care
Authority Board, the OK Hospital Association, and the University of OK College of Pharmacy.`}
                  </p>
                </div>
              }
              event="Oklahoma Health Care Authority"
              cta="Learn More"
            />
            <Appearance
              href="https://www.lek.com/"
              title="Life Science Consultant and Project Manager"
              description={
                <div>
                  <p className="mb-2">
                    {`Managed over 30 projects focused on a variety of client needs including strategic planning,
commercial due diligence, revenue forecasting, valuation, and target acquisition screening.`}
                  </p>
                  <p className="mb-2">
                    {`Developed market models, pharmacoeconomic evaluations, and other analytic approaches to quantify
the value of innovative technologies and financial impact of recommended strategies.`}
                  </p>
                  <p className="mb-2">
                    {`Conducted rigorous analysis of pharma, biotech, and medical device market segments to determine the
current treatment paradigm, competitive landscape, emerging technologies, IP status, reimbursement
environment, and unmet needs across various therapeutic and diagnostic areas.`}
                  </p>
                  <p className="mb-2">
                    {`Coordinated the short- and long-term tasks of teams comprised of L.E.K. associates and client
personnel to ensure that projects exceeded expectations and concluded on time and on budget.`}
                  </p>
                  <p>
                    {`Synthesized team findings into actionable recommendations and presented those findings to clients
ranging from start-ups to multi-billion dollar pharmaceutical, biotech, and medical device corporations.`}
                  </p>
                </div>
              }
              event="L.E.K. Consulting"
              cta="Learn More"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
