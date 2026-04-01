import { createChallenge } from 'altcha-lib';
import { json } from '@sveltejs/kit';
import { ALTCHA_HMAC_KEY } from '$env/static/private';

export async function GET() {
  const challenge = await createChallenge({
    hmacKey: ALTCHA_HMAC_KEY,
    maxNumber: 50000 // Obtížnost
  });
  
  return json(challenge);
}