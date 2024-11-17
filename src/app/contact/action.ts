'use server'

import { revalidatePath } from "next/cache";

export default async function SendWebEnquiry(formData: FormData) {

    const RESEND_API_KEY = 're_HvgeoKns_8kTD7HL8nZeRfcyLpPjgU2kT';

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");


    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Web Form Submission <submission@forms.dynaserve.io>',
            to: 'WebMessages@dynaserve.io',
            subject: 'New Form Submission Received',
            html: `<strong>New Web Form Submission Received</strong><dl><dt><b>Name:</b><dd><i>${name}</i><dt><b>Email:</b><dd><i>${email}</i><dt><b>Phone:</b><dd><i>${phone}</i><dt><b>Subject:</b><dd><i>${subject}</i><dt><b>Message:</b><dd><i>${message}</i></dl>`,
          }),
        });
        revalidatePath('/contact')
        const result = await response.json();
        return result;

}
