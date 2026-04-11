"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload, FileText, Train } from "lucide-react"
import Link from "next/link"

export default function RegisterComplaintPage() {
  const [formData, setFormData] = useState({
    trainNumber: "",
    pnr: "",
    coach: "",
    category: "",
    description: "",
  })

  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.pnr || !formData.trainNumber || !formData.category) {
      setMessage("Please fill all required fields")
      return
    }

    try {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY

      if (!apiKey) {
        throw new Error("API key is missing")
      }

      const data = {
        pnr: formData.pnr,
        train_no: formData.trainNumber,
        coach: formData.coach,
        category: formData.category
      }

      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/complaint",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "pharsh-key": apiKey
          },
          body: JSON.stringify(data)
        }
      )

      const result = await res.json()

      console.log(result)
      setMessage(result.message)

      // Clear form after success
      setFormData({
        trainNumber: "",
        pnr: "",
        coach: "",
        category: "",
        description: "",
      })

    } catch (error) {
      console.error(error)
      setMessage("Error sending complaint")
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, file }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Train className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-foreground">LocoLink</h1>
              <p className="text-sm text-muted-foreground">Register Complaint</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Register New Complaint</h2>
          <p className="text-muted-foreground">
            Please provide detailed information about your complaint for faster resolution
          </p>
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="font-serif text-lg text-card-foreground">Complaint Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Train + PNR */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-foreground">Train Number *</Label>
                  <Input
                    type="text"
                    value={formData.trainNumber}
                    onChange={(e) => setFormData((prev) => ({ ...prev, trainNumber: e.target.value }))}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-foreground">PNR Number *</Label>
                  <Input
                    type="text"
                    value={formData.pnr}
                    onChange={(e) => setFormData((prev) => ({ ...prev, pnr: e.target.value }))}
                    maxLength={10}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-foreground">Coach*</Label>
                  <Input
                    type="text"
                    value={formData.coach}
                    onChange={(e) => setFormData((prev) => ({ ...prev, coach: e.target.value }))}
                    maxLength={10}
                    required
                    className="mt-1"
                  />
                </div>
              </div>



              {/* Category */}
              <div>
                <Label className="text-sm font-medium text-foreground">Complaint Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select complaint category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cleanliness">Cleanliness</SelectItem>
                    <SelectItem value="AC not working">AC not working</SelectItem>
                    <SelectItem value="safety">Safety</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Description */}
              <div>
                <Label className="text-sm font-medium text-foreground">Complaint Description *</Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  required
                  rows={4}
                  className="mt-1"
                />
              </div>


              {/* Submit */}
              <Button type="submit" className="w-full">
                Submit Complaint
              </Button>

              {/* Message Display */}
              {message && (
                <p className="text-green-600 text-center mt-4">
                  {message}
                </p>
              )}

            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}