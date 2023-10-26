import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '')

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

    const fullName = `${firstName} ${lastName}`

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

    // Send Email
    try {
      await sendgrid.send({
        to: process.env.LIVELLA_CONTACT_EMAIL || 'info@livella.com',
        from: {
          name: 'Livella Enquiries',
          email: 'noreply@websiteenquiries.com',
        },
        replyTo: {
          name: `${fullName}`,
          email,
        },
        subject: `Quote Request from ${fullName}`,
        text: `
          Project Address: ${projectAddress}\n
          Phone: ${phone}\n
          Project Type: ${projectType}\n
          Requirements: ${requirements}\n
          Link: https://app.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries/${entry?.sys?.id}
        `,
      })
    } catch (error: any) {
      console.log({ error })
    }

    return Response.json({ success: true, entry  })
  } catch (error) {
    return Response.json({ success: false, error })
  }
}