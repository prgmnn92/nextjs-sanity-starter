import { defineType } from 'sanity'

export const imagePosition = defineType({
  name: 'imagePosition',
  title: 'Image Position',
  description: 'Position of the image in the section',
  type: 'string',
  options: {
    list: ['left', 'right'],
    layout: 'radio',
  },
})
