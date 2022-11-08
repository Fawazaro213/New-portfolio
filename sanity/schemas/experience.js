export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: "string"
    },
    {
      name: 'company',
      title: 'Company',
      type: "text"
    },
    {
      name: 'companyImage',
      title: 'CompanyImage',
      type: "image",
      option: {
        hotspot: true
      },
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: "date"
    },
    {
      name: 'dataEnded',
      title: 'DataEnded',
      type: "date",
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'IsCurrentlyWorkingHere',
      type: "boolean"
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: "array",
      of: [{type: 'reference', to: { type: 'skill' }}]
    },
    {
      name: 'points',
      title: 'Points',
      type: "array",
      of: [{type: 'string'}]
    },
  ],
}
