import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { CTA } from 'components/shared/container/CTA'
import { FeatureContainer } from 'components/shared/container/Feature'
import { Projects } from 'components/shared/container/Projects'
import { Testimonials } from 'components/shared/container/Testimonials'
import { Header } from 'components/shared/Header'
import HeroCenter from 'components/shared/HeroCenter'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import type { HomePagePayload } from 'types'

export interface HomePageProps {
  data: HomePagePayload | null
}

export function HomePage({ data }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseProjects = [], title = '' } = data ?? {}

  return (
    <div className="space-y-20">
      <HeroCenter />
      <FeatureContainer />
      <Projects />
      <Testimonials />
      <CTA />
      {/* Header */}
      {/* {title && <Header centered title={title} description={overview} />} */}
      {/* Showcase projects */}
      {/* {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project._type, project.slug)
            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href}>
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )} */}
    </div>
  )
}

export default HomePage
