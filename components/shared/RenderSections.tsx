import React from 'react'

import FeatureSection2 from './FeatureSection2'
import FeatureSectionImageText from './FeatureSectionImageText'

function RenderSections({ content }: { content: any }) {
  switch (content._type) {
    // Add your custom components here
    case 'FeatureSection2':
      return <FeatureSection2 content={content} />
    case 'FeatureSectionImageText':
      return <FeatureSectionImageText content={content} />
    default:
      return <div>Error finding to correct type for your section</div>
  }
}

export default RenderSections
