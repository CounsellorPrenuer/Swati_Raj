import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Swapath - Career Guidance',
  projectId: 'w0ll7f1u',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
