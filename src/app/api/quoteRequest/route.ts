import contentfulClient from "@/utils/contentfulClient"

export async function POST(request: Request) {
  try {
    const jsonBody = await request.json()
    const {
      address,
      attachmentIds = [],
      company,
      email,
      firstName,
      industry,
      lastName,
      phone,
      projectAddress,
      projectType,
      requirements,
      rooms = [],
    } = jsonBody

    const space = await contentfulClient.getSpace(process.env.CONTENTFUL_SPACE_ID || '')
    const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT || 'master')

    const entry = await environment.createEntry('quoteRequest', {
      fields: {
        address: {
          "en-US": address,
        },
        attachments: {
          "en-US": attachmentIds.map((id: string) => {
            return {
              sys: {
                type: "Link",
                linkType: "Asset",
                id,
              }
            }
          }),
        },
        company: {
          "en-US": company,
        },
        industry: {
          "en-US": industry,
        },
        firstName: {
          "en-US": firstName,
        },
        lastName: {
          "en-US": lastName,
        },
        email: {
          "en-US": email,
        },
        phone: {
          "en-US": phone,
        },
        projectAddress: {
          "en-US": projectAddress,
        },
        projectType: {
          "en-US": projectType,
        },
        requirements: {
          "en-US": requirements,
        },
        rooms: {
          "en-US": rooms,
        },
      }
    })

    // // Send Email to the Team
    

    return Response.json({ success: true, entry  })
  } catch (error) {
    return Response.json({ success: false, error })
  }
}