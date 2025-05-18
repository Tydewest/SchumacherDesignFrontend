'use server'

import { revalidatePath } from "next/cache";

export default async function SendWebEnquiry(formData: FormData) {

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const device = fromData.get("device");
    const userAgent = formData.get("userAgent")


    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'LSD Web Form<WebForm@dynaserve.io>',
            to: 'WebMessages@dynaserve.io',
            subject: 'New Form Submission Received',
            html: `<strong>New Web Form Submission Received</strong><dl><dt><b>Name:</b><dd><i>${name}</i><dt><b>Email:</b><dd><i>${email}</i><dt><b>Phone:</b><dd><i>${phone}</i><dt><b>Subject:</b><dd><i>${subject}</i><dt><b>Message:</b><dd><i>${message}</i></dl><b>User Metadata:</b><dd><i>${device}</i><br/><i>${userAgent}</dl>`,
          }),
        });
        revalidatePath('/contact')
        const result = await response.json();
        return result;

}
