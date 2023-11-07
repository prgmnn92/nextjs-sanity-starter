import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { FeatureSection2Image } from 'components/shared/FeatureSection2'
import type { Image } from 'sanity'
import { defineField, defineType } from 'sanity'
export interface IFeatureSectionImageText {
  heading?: string
  tagline?: string
  paragraph?: string
  imagePosition?: string
  image?: Image
  _type: string
}

export default defineType({
  name: 'featureSectionImageText',
  type: 'object',
  title: 'Feature Section Image Text',
  //   preview: {
  //     select: {
  //       title: 'heading',
  //       image: 'image',
  //     },
  //     prepare({ title, image }) {
  //       return {
  //         title: title || 'Untitled',
  //         subtitle: 'Hero',
  //         media: FeatureSection2Image || DocumentTextIcon,
  //       }
  //     },
  //   },
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'paragraph',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'imagePosition',
      type: 'imagePosition',
    }),
  ],
})

//TODO: add icon and description
