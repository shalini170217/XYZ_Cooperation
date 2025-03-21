import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Building2, FileText, MessageSquare, Shield, Users, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[20%] w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <header className="container mx-auto py-6 px-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <div className="bg-white p-2 rounded-lg shadow-lg">
            <Building2 className="h-8 w-8 text-indigo-600" />
          </div>
          <h1 className="text-2xl font-bold">XYZ Corporation</h1>
        </div>
        <Link href="/auth">
          <Button className="bg-white text-indigo-600 hover:bg-indigo-100 font-semibold">Sign In</Button>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-sm font-medium mb-4">
            Welcome to Your Company Portal
          </div>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Access Company Resources <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              Securely & Efficiently
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Connect with our AI assistant, manage documents, and access company information all in one place
          </p>
          <Link href="/auth">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-indigo-100 font-semibold text-lg px-8 py-6 h-auto rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Get Started <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-gradient-to-br from-cyan-500 to-blue-600 border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
            <CardContent className="p-8 text-white">
              <Shield className="h-14 w-14 mb-6 text-white/90 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">Secure Authentication</h3>
              <p className="text-white/80">
                Two-factor authentication keeps your account secure with time-based verification
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-violet-500 to-purple-600 border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
            <CardContent className="p-8 text-white">
              <MessageSquare className="h-14 w-14 mb-6 text-white/90 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">AI Chatbot</h3>
              <p className="text-white/80">
                Get instant answers to your company-related questions with our intelligent assistant
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-500 to-rose-600 border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
            <CardContent className="p-8 text-white">
              <FileText className="h-14 w-14 mb-6 text-white/90 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">Document Management</h3>
              <p className="text-white/80">Upload and manage important company documents with ease and security</p>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-xl mb-20">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                Company Overview
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Technology & IT Services</h3>
                    <p className="text-white/70">Leading innovation since 2010</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">5,000+ Employees</h3>
                    <p className="text-white/70">Across global offices</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Innovative Solutions</h3>
                    <p className="text-white/70">Transforming businesses worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-white/20 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">HR Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span>hr@xyzcorporation.com</span>
                </div>

                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span>+1 (800) 123-4567</span>
                </div>

                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>123 Main Street, San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-white/80 mb-8">
            Join thousands of employees already using our company portal for seamless communication and resource access.
          </p>
          <Link href="/auth">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-indigo-100 font-semibold px-8 py-6 h-auto rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Sign In Now <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-black/30 backdrop-blur-lg py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="bg-white/10 p-2 rounded-lg">
                <Building2 className="h-6 w-6" />
              </div>
              <span className="text-lg font-bold">XYZ Corporation</span>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center md:text-left text-white/50 text-sm">
            © 2023 XYZ Corporation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

