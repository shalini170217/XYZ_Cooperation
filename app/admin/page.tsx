"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Send, LogOut, Upload, FileText, Trash2, Download } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

type UploadedFile = {
  id: string
  name: string
  size: string
  uploadedAt: Date
}

export default function AdminDashboard() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "👋 Hello Admin! How can I assist you with document management today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    {
      id: "1",
      name: "Company HR Details.pdf",
      size: "245 KB",
      uploadedAt: new Date(),
    },
  ])

  const [isDragging, setIsDragging] = useState(false)
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
          "I'm the XYZ Corporation admin assistant. I can help you manage documents and answer questions about company data. What would you like to do?",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    // Simulate file upload
    const newFiles: UploadedFile[] = Array.from(files).map((file) => ({
      id: Date.now().toString(),
      name: file.name,
      size: `${Math.round(file.size / 1024)} KB`,
      uploadedAt: new Date(),
    }))

    setUploadedFiles((prev) => [...prev, ...newFiles])
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (!files || files.length === 0) return

    // Simulate file upload
    const newFiles: UploadedFile[] = Array.from(files).map((file) => ({
      id: Date.now().toString(),
      name: file.name,
      size: `${Math.round(file.size / 1024)} KB`,
      uploadedAt: new Date(),
    }))

    setUploadedFiles((prev) => [...prev, ...newFiles])
  }

  const deleteFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== id))
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
                <AvatarFallback className="bg-gradient-to-br from-pink-400 to-rose-500 text-white">A</AvatarFallback>
              </Avatar>
              <span className="font-medium text-white">Admin Portal</span>
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

      <main className="flex-1 container mx-auto px-4 py-6">
        <Tabs defaultValue="documents" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6 bg-white/10 p-1">
            <TabsTrigger
              value="documents"
              className="data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-lg text-white"
            >
              Document Management
            </TabsTrigger>
            <TabsTrigger
              value="chatbot"
              className="data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-lg text-white"
            >
              Admin Chatbot
            </TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-0 shadow-lg text-white overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-rose-600 pb-6">
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Documents
                </CardTitle>
                <p className="text-white/80">Upload PDF documents to make them available for the chatbot</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div
                  className={`border-2 border-dashed rounded-xl p-10 text-center mb-8 transition-all ${
                    isDragging ? "border-white bg-white/20" : "border-white/30 hover:border-white/50 hover:bg-white/10"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="bg-white/20 p-4 rounded-full inline-block mb-4">
                    <Upload className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Drag and drop files here</h3>
                  <p className="text-white/70 mb-6">or click to browse files on your computer</p>
                  <div className="relative">
                    <Input
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileUpload}
                      multiple
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <Button className="bg-white text-indigo-600 hover:bg-indigo-100 font-medium px-6">
                      Select Files
                    </Button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">Uploaded Documents</h3>
                    <Badge className="bg-white/20 hover:bg-white/30 text-white">{uploadedFiles.length} Files</Badge>
                  </div>

                  <div className="space-y-3">
                    {uploadedFiles.map((file) => (
                      <div
                        key={file.id}
                        className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-white/20 p-2 rounded-lg">
                            <FileText className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="font-medium">{file.name}</p>
                            <p className="text-xs text-white/70">
                              {file.size} • Uploaded {file.uploadedAt.toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-white/70 hover:text-white hover:bg-white/10"
                            onClick={() => {}}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-white/70 hover:text-white hover:bg-white/10"
                            onClick={() => deleteFile(file.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chatbot">
            <Card className="bg-white/10 backdrop-blur-lg border-0 shadow-lg text-white overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-600 pb-6">
                <CardTitle className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0-1.97 1.405-3.718 3.413-3.98 2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L15.28 21.53A.75.75 0 0114 21v-4.03a48.527 48.527 0 01-1.087-.128C10.905 16.58 9.5 14.833 9.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                  </svg>
                  Admin Chatbot
                </CardTitle>
                <p className="text-white/80">Ask questions about uploaded documents and company data</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ScrollArea className="h-[500px] pr-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl p-4 ${
                            message.sender === "user"
                              ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white"
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
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

