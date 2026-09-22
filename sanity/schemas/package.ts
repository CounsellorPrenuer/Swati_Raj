export default {
  name: 'package',
  title: 'Packages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Package Title',
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
      title: 'Package Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price (in INR)',
      type: 'number',
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
      initialValue: '₹',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., 60 mins, 3 Sessions, Lifetime',
    },
    {
      name: 'features',
      title: 'Features/Highlights',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of features included in this package',
    },
    {
      name: 'image',
      title: 'Package Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isPopular',
      title: 'Mark as Popular',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'category',
      title: 'Package Category',
      type: 'string',
      options: {
        list: [
          {title: 'Mentoria - Career Counselling', value: 'mentoria'},
          {title: 'Admission Guidance', value: 'admission'},
          {title: 'Custom Package', value: 'custom'},
        ],
      },
    },
    {
      name: 'cta',
      title: 'Call to Action Button',
      type: 'string',
      initialValue: 'Book Now',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
