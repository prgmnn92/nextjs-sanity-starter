import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import RenderSections from 'components/shared/RenderSections'
import type { PagePayload } from 'types'

export interface PageProps {
  data: PagePayload | null
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title, content } = data ?? {}

  return (
    <div>
      {/* <div className="mb-14"> */}
      {/* Header */}
      {/* <Header title={title} description={overview} /> */}
      {/* Body */}

      {/* {body && ( */}
      {/* <CustomPortableText */}
      {/* paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl" */}
      {/* value={body} */}
      {/* /> */}
      {/* )} */}
      {/* </div> */}
      <div className="absolute left-0 w-screen border-t" />
      {content?.map((content) => {
        return <RenderSections key={content._key} content={content} />
      })}
    </div>
  )
}

export default Page
