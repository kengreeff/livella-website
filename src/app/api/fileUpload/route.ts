import contentfulClient from "@/utils/contentfulClient"

// We have to send through the Next.js API to protect the Contentful Management API key.
// Unfortunately at this stage the key cannot be scoped or locked down to a specific domain.
// Which would mean anyone could use it to create entries in our Contentful space.

export async function POST(request: Request) {
  const formData = await request.formData()
  
  const contentType = formData.get('type') as string
  const file: File | null = formData.get('file') as unknown as File
  const fileName = formData.get('name') as string

  if (!file) {
    return Response.json({ success: false, error: 'No file supplied.' })
  }

  const bytes = await file.arrayBuffer()

  const space = await contentfulClient.getSpace(process.env.CONTENTFUL_SPACE_ID || '')
  const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT || 'master')

  const asset = await environment.createAssetFromFiles({
    fields: {
      title: {
        'en-US': fileName,
      },
      description: {
        'en-US': 'Uploaded from the website.',
      },
      file: {
        'en-US': {
          contentType,
          fileName,
          file: bytes,
        }
      }
    }
  })

  asset.processForAllLocales()

  return Response.json({ success: true, asset })
}