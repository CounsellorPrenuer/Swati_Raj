export default {
  name: 'founder',
  title: 'About Founder',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Founder Name',
      type: 'string',
      initialValue: 'Swati Raj',
    },
    {
      name: 'image',
      title: 'Founder Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Short description under name (e.g., Blending executive wisdom with educational expertise)',
    },
    {
      name: 'shortBio',
      title: 'Short Biography',
      type: 'text',
      description: 'Brief introduction (2-3 sentences)',
    },
    {
      name: 'longBio',
      title: 'Detailed Biography',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Full biography with rich formatting',
    },
    {
      name: 'quote',
      title: 'Signature Quote',
      type: 'string',
      description: 'A memorable quote from the founder',
    },
    {
      name: 'credentials',
      title: 'Credentials & Expertise',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Credential Title'},
            {name: 'icon', type: 'string', title: 'Icon Class', description: 'e.g., award, briefcase, etc.'},
          ],
        },
      ],
    },
    {
      name: 'stats',
      title: 'Key Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'number', type: 'string', title: 'Number/Value'},
            {name: 'label', type: 'string', title: 'Label'},
          ],
        },
      ],
    },
  ],
}
