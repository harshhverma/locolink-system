"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, MessageSquare, Star, Train, ThumbsUp } from "lucide-react"
import Link from "next/link"

export default function FeedbackPage() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (rating === 0) {
      alert("Please provide a rating before submitting.")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false)
      setRating(0)
      setFeedback("")
    }, 3000)
  }

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex)
  }

  const handleStarHover = (starIndex: number) => {
    setHoverRating(starIndex)
  }

  const handleStarLeave = () => {
    setHoverRating(0)
  }

  const getRatingText = (rating: number) => {
    switch (rating) {
      case 1:
        return "Very Poor"
      case 2:
        return "Poor"
      case 3:
        return "Average"
      case 4:
        return "Good"
      case 5:
        return "Excellent"
      default:
        return "Rate your experience"
    }
  }

  if (isSubmitted) {
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
                <p className="text-sm text-muted-foreground">Feedback</p>
              </div>
            </div>
          </div>
        </header>

        {/* Success Message */}
        <main className="max-w-2xl mx-auto px-4 py-8">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="text-center py-12">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-green-800 mb-2">Thank You!</h2>
              <p className="text-green-700 mb-4">Your feedback has been submitted successfully.</p>
              <p className="text-sm text-green-600">
                We appreciate your input and will use it to improve our services.
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
    )
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
              <p className="text-sm text-muted-foreground">Feedback</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Share Your Feedback</h2>
          <p className="text-muted-foreground">Help us improve our services by sharing your experience with LocoLink</p>
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="font-serif text-lg text-card-foreground">Rate Your Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Star Rating */}
              <div className="text-center">
                <Label className="text-sm font-medium text-foreground mb-4 block">
                  How would you rate your overall experience?
                </Label>
                <div className="flex justify-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleStarClick(star)}
                      onMouseEnter={() => handleStarHover(star)}
                      onMouseLeave={handleStarLeave}
                      className="p-1 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          star <= (hoverRating || rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300 hover:text-yellow-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{getRatingText(hoverRating || rating)}</p>
              </div>

              {/* Feedback Text */}
              <div>
                <Label htmlFor="feedback" className="text-sm font-medium text-foreground">
                  Your Feedback (Optional)
                </Label>
                <Textarea
                  id="feedback"
                  placeholder="Tell us about your experience, suggestions for improvement, or any issues you encountered..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={5}
                  className="mt-1 resize-none"
                />
                <p className="text-xs text-muted-foreground mt-1">Your detailed feedback helps us serve you better</p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting || rating === 0}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-3"
                  size="lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting Feedback...
                    </div>
                  ) : (
                    "Submit Feedback"
                  )}
                </Button>
              </div>

              {/* Help Text */}
              <div className="text-center pt-4">
                <p className="text-xs text-muted-foreground">
                  Your feedback is anonymous and will be used to improve our services. Thank you for helping us serve
                  you better.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <Card className="border-border bg-muted/50 mt-8">
          <CardContent className="text-center py-6">
            <h3 className="font-serif font-semibold text-foreground mb-2">Other Ways to Reach Us</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: feedback@locolink</p>
              <p>Available 24/7 for your assistance</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
