import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export async function getSiteSettings() {
  const query = `*[_type == "siteSettings"][0]`
  return await client.fetch(query)
}

export async function getFounder() {
  const query = `*[_type == "founder"][0]`
  return await client.fetch(query)
}

export async function getServices() {
  const query = `*[_type == "service"] | order(order asc)`
  return await client.fetch(query)
}

export async function getService(slug: string) {
  const query = `*[_type == "service" && slug.current == $slug][0]`
  return await client.fetch(query, { slug })
}

export async function getPackages() {
  const query = `*[_type == "package"] | order(order asc)`
  return await client.fetch(query)
}

export async function getPackagesByCategory(category: string) {
  const query = `*[_type == "package" && category == $category] | order(order asc)`
  return await client.fetch(query, { category })
}

export async function getTestimonials() {
  const query = `*[_type == "testimonial"] | order(order asc)`
  return await client.fetch(query)
}

export async function getTestimonialsByCategory(category: string) {
  const query = `*[_type == "testimonial" && category == $category] | order(order asc)`
  return await client.fetch(query, { category })
}

export default client
