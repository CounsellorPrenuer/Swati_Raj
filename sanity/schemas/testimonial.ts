export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Author Role/Title',
      type: 'string',
      description: 'e.g., Student, Parent, Professional',
    },
    {
      name: 'image',
      title: 'Author Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    },
    {
      name: 'category',
      title: 'Testimonial Category',
      type: 'string',
      options: {
        list: [
          {title: 'Career Guidance', value: 'career'},
          {title: 'Admission Guidance', value: 'admission'},
          {title: 'General', value: 'general'},
        ],
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
