export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: 'SWAPATH - FIND YOUR WAY',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      initialValue: 'Career Guidance & Admission Guidance Services',
    },
    {
      name: 'brandColor',
      title: 'Primary Brand Color',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Contact Phone',
      type: 'string',
    },
    {
      name: 'domain',
      title: 'Domain Name',
      type: 'string',
      initialValue: 'FindSwapath.com',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
