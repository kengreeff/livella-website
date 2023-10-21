import { createClient } from 'contentful-management'

const contentfulClient = createClient({
  accessToken: process.env.CONTENTFUL_CMA_TOKEN || '',
})

export default contentfulClient
