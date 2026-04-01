import nodemailer from 'nodemailer';
import { GMAIL_USER, GMAIL_PASS, ADMIN_EMAIL } from '$env/static/private';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    
    const name = formData.get('name');
    const contact = formData.get('contact');
    const message = formData.get('message');
    const altcha = formData.get('altcha'); // Získání tokenu

    // --- BOT KONTROLA ---
    if (!altcha) {
      return { success: false, error: 'Chybějící ověření bota.' };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: GMAIL_USER, pass: GMAIL_PASS }
    });

    // ... (zbytek tvého adminHtml a clientHtml zůstává stejný) ...

    try {
      // Odeslání adminovi
      await transporter.sendMail({
        from: `"Web Kontakt" <${GMAIL_USER}>`,
        to: ADMIN_EMAIL,
        replyTo: contact.includes('@') ? contact : undefined,
        subject: `Zpráva od: ${name}`,
        html: adminHtml
      });

      if (contact.includes('@')) {
        await transporter.sendMail({
          from: `"Linity Agency" <${GMAIL_USER}>`,
          to: contact,
          subject: `Potvrzení přijetí zprávy`,
          html: clientHtml
        });
      }

      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  }
};