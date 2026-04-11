"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertTriangle, Phone, Shield, Heart, Users, Train, MapPin } from "lucide-react"
import Link from "next/link"

interface EmergencyContact {
  name: string
  number: string
  description: string
  icon: React.ReactNode
  color: string
}

const emergencyContacts: EmergencyContact[] = [
  {
    name: "GRP (Government Railway Police)",
    number: "182",
    description: "For security issues, theft, and criminal activities",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    name: "RPF (Railway Protection Force)",
    number: "1512",
    description: "For railway property protection and passenger security",
    icon: <Users className="w-6 h-6" />,
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    name: "Medical Emergency",
    number: "108",
    description: "For medical emergencies and ambulance services",
    icon: <Heart className="w-6 h-6" />,
    color: "bg-red-500 hover:bg-red-600",
  },
]

export default function EmergencyHelpPage() {
  const [sosPressed, setSosPressed] = useState(false)

  const handleSOS = () => {
    setSosPressed(true)
    // In a real app, this would trigger emergency protocols
    alert("SOS Alert Sent! Emergency services have been notified. Help is on the way.")
    setTimeout(() => setSosPressed(false), 3000)
  }

  const handleQuickCall = (contact: EmergencyContact) => {
    // In a real app, this would initiate a phone call
    alert(`Calling ${contact.name} at ${contact.number}`)
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
            <div className="w-10 h-10 bg-destructive rounded-lg flex items-center justify-center">
              <Train className="w-6 h-6 text-destructive-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-foreground">LocoLink</h1>
              <p className="text-sm text-muted-foreground">Emergency Help</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Emergency Help</h2>
          <p className="text-muted-foreground">
            Get immediate assistance for urgent situations. Your safety is our priority.
          </p>
        </div>

        {/* SOS Button */}
        <Card className="border-destructive/20 bg-destructive/5 mb-8">
          <CardContent className="text-center py-8">
            <div className="mb-6">
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">Emergency SOS</h3>
              <p className="text-sm text-muted-foreground">
                Press this button only in case of immediate danger or life-threatening emergency
              </p>
            </div>
            <Button
              onClick={handleSOS}
              disabled={sosPressed}
              className={`w-32 h-32 rounded-full text-white font-bold text-lg shadow-lg transition-all duration-200 ${
                sosPressed
                  ? "bg-destructive/70 scale-95"
                  : "bg-destructive hover:bg-destructive/90 hover:scale-105 active:scale-95"
              }`}
            >
              {sosPressed ? (
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mb-1" />
                  <span className="text-sm">Sending...</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <AlertTriangle className="w-8 h-8 mb-1" />
                  <span>SOS</span>
                </div>
              )}
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              This will immediately alert railway authorities and emergency services
            </p>
          </CardContent>
        </Card>

        {/* Quick Call Buttons */}
        <Card className="border-border bg-card mb-8">
          <CardHeader>
            <CardTitle className="font-serif text-lg text-card-foreground flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Quick Call Emergency Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className={`w-12 h-12 ${contact.color} rounded-lg flex items-center justify-center text-white`}>
                  {contact.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{contact.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{contact.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span className="font-mono">{contact.number}</span>
                  </div>
                </div>
                <Button
                  onClick={() => handleQuickCall(contact)}
                  className={`${contact.color} text-white px-6`}
                  size="sm"
                >
                  Call Now
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Additional Emergency Info */}
        <Card className="border-border bg-card mb-8">
          <CardHeader>
            <CardTitle className="font-serif text-lg text-card-foreground flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Emergency Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Stay Calm</h4>
                  <p className="text-sm text-muted-foreground">
                    Keep yourself and others calm. Assess the situation before taking action.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Provide Location</h4>
                  <p className="text-sm text-muted-foreground">
                    When calling, provide your exact location, train number, and coach details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Follow Instructions</h4>
                  <p className="text-sm text-muted-foreground">
                    Listen carefully to emergency responders and follow their instructions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="text-center py-6">
            <AlertTriangle className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <h3 className="font-serif font-semibold text-yellow-800 mb-2">Important Notice</h3>
            <p className="text-sm text-yellow-700">
              Use emergency services responsibly. False alarms can delay response to real emergencies and may result in
              legal consequences.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
