export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Service Description',
      type: 'text',
    },
    {
      name: 'details',
      title: 'Detailed Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'icon',
      title: 'Service Icon',
      type: 'string',
      description: 'Icon class name or emoji',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
