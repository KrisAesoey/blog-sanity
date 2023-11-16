import {defineField, defineType} from 'sanity'

export const textBlocks = defineType({
  name: 'textBlocks',
  title: 'Text blocks',
  description: 'A list of blocks of text',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineField({
          name: 'textBlock',
          title: 'textBlock',
          type: 'object',
          fields: [
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                {
                  type: 'block',
                },
              ],
            }),
          ],
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      textBlocks: 'items',
    },
    prepare: ({textBlocks}) => ({
      title: textBlocks
        ? `${textBlocks.length} text block${textBlocks.length === 1 ? '' : 's'}`
        : 'empty',
    }),
  },
})
