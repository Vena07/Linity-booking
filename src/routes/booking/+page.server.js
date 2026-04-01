import nodemailer from 'nodemailer';
import { GMAIL_USER, GMAIL_PASS, ADMIN_EMAIL, ALTCHA_HMAC_KEY } from '$env/static/private';
import { verifySolution } from 'altcha-lib';
import prisma from '$lib/server/prisma'; // DŮLEŽITÉ: Připojení k DB

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    
    // --- 1. OVĚŘENÍ ANTISPAMU (ALTCHA) ---
    const altchaPayload = formData.get('altcha');
    if (!altchaPayload) {
        return { success: false, error: "Potvrďte prosím, že nejste robot." };
    }
    const isValid = await verifySolution(altchaPayload, ALTCHA_HMAC_KEY);
    if (!isValid) {
        return { success: false, error: "Ověření selhalo. Zkuste to znovu." };
    }

    // --- 2. SBĚR DAT Z FORMULÁŘE ---
    const clubDetails = formData.get('clubDetails');
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const bookingType = formData.get('bookingType');
    const message = formData.get('message') || 'Bez doplňujících informací.';

    // --- 3. ULOŽENÍ DO DATABÁZE (PRISMA) ---
    try {
      await prisma.bookingRequest.create({
        data: {
          clubDetails,
          name,
          phone,
          email,
          bookingType,
          message
        }
      });
      console.log('✅ Poptávka úspěšně uložena do DB');
    } catch (dbError) {
      console.error('❌ Chyba při ukládání do DB:', dbError);
      // I když DB spadne, nechceme to uživateli hned zablokovat, 
      // mail se pokusíme odeslat dál.
    }

    // --- 4. KONFIGURACE NODEMAILERU ---
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
      }
    });

    // Převedení typu bookingu na čitelný text
    const types = {
      'Konkretni_DJ': 'Booking konkrétního DJe',
      'Jednorazova_produkce': 'Produkce 1 akce (Line-up, koncept)',
      'Dlouhodoba_spoluprace': 'Dlouhodobá rezidentura klubu',
      'Technika': 'Pouze technické zajištění'
    };
    const bookingText = types[bookingType] || bookingType;

    // --- 5. DESIGN EMAILU ---
    const adminHtml = `
      <div style="background-color: #f8fafc; padding: 50px 20px; font-family: 'Helvetica', Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 15px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
          <div style="background: #16a34a; padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; text-transform: uppercase; letter-spacing: 2px;">Nová Poptávka 🎫</h1>
            <p style="color: #f0fdf4; margin-top: 10px; font-size: 18px;">Linity Booking B2B</p>
          </div>
          
          <div style="padding: 40px;">
            <p style="font-size: 14px; color: #64748b; text-transform: uppercase; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Detaily klienta</p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; width: 140px;">Klub / Město:</td>
                <td style="padding: 10px 0; font-weight: bold; color: #0f172a;">${clubDetails}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8;">Promotér:</td>
                <td style="padding: 10px 0; font-weight: bold; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8;">Telefon:</td>
                <td style="padding: 10px 0; font-weight: bold; color: #0f172a;"><a href="tel:${phone}" style="color: #16a34a; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8;">Email:</td>
                <td style="padding: 10px 0; font-weight: bold; color: #0f172a;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8;">Typ zájmu:</td>
                <td style="padding: 10px 0; font-weight: bold; color: #16a34a;">${bookingText}</td>
              </tr>
            </table>

            <div style="margin-top: 30px; background: #f8fafc; padding: 25px; border-radius: 12px; border: 1px solid #e2e8f0;">
              <p style="margin: 0 0 10px; font-weight: bold; color: #0f172a; text-transform: uppercase; font-size: 12px;">Zpráva / Požadavky:</p>
              <p style="margin: 0; color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="background: #f1f5f9; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
            Tento email byl odeslán z webu booking.linityagency.com
          </div>
        </div>
      </div>
    `;

    // --- 6. SAMOTNÉ ODESLÁNÍ EMAILU ---
    try {
      await transporter.sendMail({
        from: GMAIL_USER,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject: `🔥 Poptávka BOOKING: ${clubDetails} (${name})`,
        html: adminHtml
      });

      return { success: true };
    } catch (error) {
      console.error("❌ Chyba při odesílání emailu:", error);
      return { success: false, error: "E-mail se nepodařilo odeslat. Zkuste to prosím znovu." };
    }
  }
};