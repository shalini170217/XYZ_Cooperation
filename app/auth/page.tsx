"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, ArrowLeft, LockKeyhole, Fingerprint } from "lucide-react"
import Link from "next/link"
import { verifyTOTP } from "@/lib/totp"

export default function AuthPage() {
  const router = useRouter()
  const [otpValue, setOtpValue] = useState("")
  const [error, setError] = useState("")
  const [qrCodeUrl, setQrCodeUrl] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setQrCodeUrl("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nzgOfqKPwnvwbpuQbj9l85QTSdrBwb.png") // Using the provided QR code image
  }, [])

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate verification delay
    setTimeout(() => {
      const isValid = verifyTOTP(otpValue)

      if (isValid) {
        if (isAdmin) {
          router.push("/admin")
        } else {
          router.push("https://b73826cb45b1360b4f.gradio.live")
        }
      } else {
        setError("Invalid OTP code. Please try again.")
        setIsLoading(false)
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[20%] w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Link href="/" className="absolute top-6 left-6 flex items-center gap-2 text-white hover:text-white/80 z-10">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <div className="flex items-center gap-3 mb-8 relative z-10">
        <div className="bg-white p-3 rounded-xl shadow-lg">
          <Building2 className="h-8 w-8 text-indigo-600" />
        </div>
        <h1 className="text-3xl font-bold text-white">XYZ Corporation</h1>
      </div>

      <Card className="w-full max-w-md border-0 shadow-2xl bg-white/10 backdrop-blur-xl relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-500 rounded-bl-full opacity-20"></div>

        <CardHeader className="text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white/20 p-2 rounded-lg">
              <LockKeyhole className="h-5 w-5" />
            </div>
            <CardTitle className="text-2xl">Secure Authentication</CardTitle>
          </div>
          <p className="text-white/80">Scan the QR code with your authenticator app and enter the verification code</p>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="user" className="mb-6">
            <TabsList className="grid w-full grid-cols-2 bg-white/20">
              <TabsTrigger
                value="user"
                onClick={() => setIsAdmin(false)}
                className="data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-lg"
              >
                User
              </TabsTrigger>
              <TabsTrigger
                value="admin"
                onClick={() => setIsAdmin(true)}
                className="data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-lg"
              >
                Admin
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-col items-center mb-6">
            <div className="bg-white p-3 rounded-xl shadow-lg mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-white opacity-50"></div>
              <img
                src={qrCodeUrl || "/placeholder.svg"}
                alt="Authentication QR Code"
                className="w-56 h-56 relative z-10"
              />
            </div>
            <p className="text-sm text-white/80 text-center">
              Scan this QR code with Google Authenticator, Authy, or any other TOTP app
            </p>
          </div>

          <form onSubmit={handleVerify}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp" className="text-white">
                  Enter Verification Code
                </Label>
                <div className="relative">
                  <Fingerprint className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-300" />
                  <Input
                    id="otp"
                    placeholder="123456"
                    value={otpValue}
                    onChange={(e) => setOtpValue(e.target.value)}
                    maxLength={6}
                    className="pl-10 bg-white/20 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                  />
                </div>
              </div>
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-white rounded-lg p-3 text-sm">{error}</div>
              )}
            </div>
            <Button
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-6 h-auto text-lg shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Verifying...
                </div>
              ) : (
                "Verify & Continue"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

