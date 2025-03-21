import { NextApiRequest, NextApiResponse } from 'next'
import { authenticator } from 'otplib'

// Define the secret key
const secret: string = 'CompanyChatBotCompanyChatBot'

// Generate TOTP
export function generateTOTP(): string {
  return authenticator.generate(secret) // ✅ Pass secret directly
}

// Verify the TOTP
export function verifyTOTP(code: string): boolean {
  return authenticator.verify({ token: code, secret }) // ✅ Pass secret correctly
}

// API handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { code } = req.body
    if (verifyTOTP(code)) {
      res.status(200).json({ success: true, message: '✅ OTP Verified' })
    } else {
      res.status(400).json({ success: false, message: '❌ OTP Invalid' })
    }
  } else if (req.method === 'GET') {
    const otp = generateTOTP()
    res.status(200).json({ otp })
  } else {
    res.status(405).end('Method Not Allowed')
  }
}
