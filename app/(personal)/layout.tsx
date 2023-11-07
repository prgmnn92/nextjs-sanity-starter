import 'styles/index.css'

import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import { token } from 'lib/sanity.fetch'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { Suspense } from 'react'

const PreviewProvider = dynamic(
  () => import('components/preview/PreviewProvider'),
)

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const isDraftMode = draftMode().isEnabled

  const layout = (
    <div className="flex flex-col min-h-screen text-black bg-white">
      {isDraftMode && <PreviewBanner />}
      <Suspense>
        <Navbar />
      </Suspense>
      {/* <div className="flex-grow px-4 mt-20 md:px-16 lg:px-32"> */}
      <Suspense>{children}</Suspense>
      {/* </div> */}
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  )

  if (isDraftMode) {
    return <PreviewProvider token={token!}>{layout}</PreviewProvider>
  }

  return layout
}
