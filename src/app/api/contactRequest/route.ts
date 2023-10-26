import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '')

import contentfulClient from "@/utils/contentfulClient"

export async function POST(request: Request) {
  try {
    const jsonBody = await request.json()
    const {
      email,
      firstName,
      industry,
      lastName,
      message,
      phone,
    } = jsonBody

    const fullName = `${firstName} ${lastName}`

    const space = await contentfulClient.getSpace(process.env.CONTENTFUL_SPACE_ID || '')
    const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT || 'master')

    const entry = await environment.createEntry('contactRequest', {
      fields: {
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
        message: {
        "en-US": message,
        },
        phone: {
          "en-US": phone,
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
          Phone: ${phone}\n
          Message: ${message}\n
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