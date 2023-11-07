import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { BarChartIcon } from '@sanity/icons'
import { FeatureSection2Image } from 'components/shared/FeatureSection2'
import { defineField, defineType, Image } from 'sanity'

export interface IFeature2Item {
  heading: string
  tagline: string
  _type: string
}

export default defineType({
  name: 'featureSection2',
  type: 'object',
  title: 'Feature Section 2',
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Hero',
        media: FeatureSection2Image || DocumentTextIcon,
      }
    },
  },
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
  ],
})

//TODO: add icon and description
