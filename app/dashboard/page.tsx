"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Building2, Send, LogOut, FileText, Users, BookOpen, Briefcase, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function Dashboard() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "👋 Hello! I'm your XYZ Corporation assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I can help you with HR policies, benefits, and company information. What would you like to know about XYZ Corporation?",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-lg sticky top-0 z-10">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <Building2 className="h-6 w-6 text-indigo-600" />
            </div>
            <h1 className="text-xl font-bold text-white">XYZ Corporation</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full">
              <Avatar className="border-2 border-white">
                <AvatarFallback className="bg-gradient-to-br from-indigo-400 to-purple-500 text-white">
                  U
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-white">User Portal</span>
            </div>
            <Link href="/">
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6 grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Card className="bg-white/10 backdrop-blur-lg border-0 shadow-lg text-white overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 pb-6">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Company Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10 hover:text-white">
                  <BookOpen className="h-4 w-4 mr-2" />
                  HR Policies
                </Button>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10 hover:text-white">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Benefits
                </Button>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10 hover:text-white">
                  <Users className="h-4 w-4 mr-2" />
                  Company Directory
                </Button>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10 hover:text-white">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Training Resources
                </Button>
              </nav>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-0 shadow-lg text-white mt-6 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-rose-600 pb-6">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm text-white/70 mb-1">Employees</div>
                  <div className="text-2xl font-bold">5,000+</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm text-white/70 mb-1">Locations</div>
                  <div className="text-2xl font-bold">12 Countries</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm text-white/70 mb-1">Founded</div>
                  <div className="text-2xl font-bold">2010</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3 flex flex-col">
          <Card className="flex-1 flex flex-col bg-white/10 backdrop-blur-lg border-0 shadow-lg text-white overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-600 pb-6">
              <CardTitle className="flex items-center gap-2 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.506 0 2.812.112 4.091l5.28-4.685a.75.75 0 01.972-.209 50.892 50.892 0 018.42 0c.323.027.652.05.986.071C22.595 15.42 24 17.167 24 19.138v6.224c0 1.203-.62 2.315-1.679 2.953a.75.75 0 01-1.079-.651v-5.573c0-1.97-1.405-3.718-3.413-3.979-2.075-.27-4.19-.408-6.337-.408-2.147 0-4.262.139-6.337.408-1.922.25-3.291 1.861-3.405 3.727a4.403 4.403 0 001.032-.211 50.89 50.89 0 008.42 0c2.358.196 4.04 2.19 4.04 4.434v4.286a4.47 4.47 0 00-2.433 3.984l-5.247 3.484a.75.75 0 01-1.28-.534v-3.784c0-1.506 0-2.812-.112-4.091l-5.28 4.685a.75.75 0 01-.972.209 50.892 50.892 0 01-8.42 0c-.323-.027-.652-.05-.986-.071C1.405 8.58 0 6.833 0 4.862V.638C0-.562.62-1.673 1.679-2.312a.75.75 0 011.079.651v5.573c0 1.97 1.405 3.718 3.413 3.979z" />
                </svg>
                Company Chatbot
              </CardTitle>
              <p className="text-white/80">Ask questions about company policies, benefits, and more</p>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col pt-6">
              <ScrollArea className="flex-1 h-[500px] pr-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl p-4 ${
                          message.sender === "user"
                            ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                            : "bg-white/20 text-white"
                        }`}
                      >
                        <p>{message.content}</p>
                        <p className="text-xs opacity-70 mt-2 text-right">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              <form onSubmit={handleSendMessage} className="mt-4 flex gap-2 bg-white/10 p-2 rounded-full">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-white/50"
                />
                <Button
                  type="submit"
                  className="rounded-full aspect-square p-2 bg-white text-indigo-600 hover:bg-indigo-100"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

