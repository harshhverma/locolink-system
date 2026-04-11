"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Search, Clock, CheckCircle, AlertCircle, Train, Calendar, User } from "lucide-react"
import Link from "next/link"

interface ComplaintStatus {
  id: string
  pnr?: string
  trainNumber: string
  category: string
  description: string
  status: "pending" | "in-progress" | "resolved"
  submittedDate: string
  lastUpdated: string
  assignedTo?: string
  resolution?: string
}

// Mock data for demonstration
const mockComplaints: ComplaintStatus[] = [
  {
    id: "CMP001234",
    pnr: "1234567890",
    trainNumber: "12345",
    category: "Cleanliness",
    description: "Washroom facilities were not clean during the journey",
    status: "resolved",
    submittedDate: "2024-01-15",
    lastUpdated: "2024-01-18",
    assignedTo: "Station Manager - New Delhi",
    resolution:
      "Issue has been resolved. Cleaning staff has been instructed and washroom facilities have been improved.",
  },
  {
    id: "CMP001235",
    pnr: "9876543210",
    trainNumber: "67890",
    category: "Staff Behavior",
    description: "TTE was rude and unprofessional during ticket checking",
    status: "in-progress",
    submittedDate: "2024-01-20",
    lastUpdated: "2024-01-22",
    assignedTo: "Regional Manager - Mumbai",
  },
  {
    id: "CMP001236",
    trainNumber: "11111",
    category: "Punctuality",
    description: "Train was delayed by 3 hours without proper announcement",
    status: "pending",
    submittedDate: "2024-01-25",
    lastUpdated: "2024-01-25",
  },
]

export default function TrackComplaintPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState<ComplaintStatus | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsSearching(true)
    setNotFound(false)
    setSearchResult(null)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Search in mock data
    const result = mockComplaints.find(
      (complaint) => complaint.id.toLowerCase() === searchQuery.toLowerCase() || complaint.pnr === searchQuery,
    )

    if (result) {
      setSearchResult(result)
    } else {
      setNotFound(true)
    }

    setIsSearching(false)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-500" />
      case "in-progress":
        return <AlertCircle className="w-5 h-5 text-blue-500" />
      case "resolved":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            Pending
          </Badge>
        )
      case "in-progress":
        return (
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            In Progress
          </Badge>
        )
      case "resolved":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Resolved
          </Badge>
        )
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getProgressPercentage = (status: string) => {
    switch (status) {
      case "pending":
        return 25
      case "in-progress":
        return 65
      case "resolved":
        return 100
      default:
        return 0
    }
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
              <p className="text-sm text-muted-foreground">Track Complaint</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Track Your Complaint</h2>
          <p className="text-muted-foreground">
            Enter your Complaint ID or PNR number to check the status of your complaint
          </p>
        </div>

        {/* Search Form */}
        <Card className="border-border bg-card mb-8">
          <CardHeader>
            <CardTitle className="font-serif text-lg text-card-foreground">Search Complaint</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <Label htmlFor="search" className="text-sm font-medium text-foreground">
                  Complaint ID or PNR Number
                </Label>
                <Input
                  id="search"
                  type="text"
                  placeholder="Enter Complaint ID (e.g., CMP001234) or PNR"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <Button
                type="submit"
                disabled={isSearching}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                {isSearching ? "Searching..." : "Track Complaint"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Search Results */}
        {searchResult && (
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-serif text-lg text-card-foreground">Complaint Details</CardTitle>
                {getStatusBadge(searchResult.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-foreground">Complaint ID</p>
                  <p className="text-sm text-muted-foreground">{searchResult.id}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Train Number</p>
                  <p className="text-sm text-muted-foreground">{searchResult.trainNumber}</p>
                </div>
                {searchResult.pnr && (
                  <div>
                    <p className="text-sm font-medium text-foreground">PNR</p>
                    <p className="text-sm text-muted-foreground">{searchResult.pnr}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-foreground">Category</p>
                  <p className="text-sm text-muted-foreground">{searchResult.category}</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Description</p>
                <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">{searchResult.description}</p>
              </div>

              {/* Progress Indicator */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-foreground">Progress</p>
                  <span className="text-sm text-muted-foreground">{getProgressPercentage(searchResult.status)}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      searchResult.status === "resolved"
                        ? "bg-green-500"
                        : searchResult.status === "in-progress"
                          ? "bg-blue-500"
                          : "bg-yellow-500"
                    }`}
                    style={{ width: `${getProgressPercentage(searchResult.status)}%` }}
                  />
                </div>
              </div>

              {/* Status Timeline */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Status Timeline</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    {getStatusIcon("pending")}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Complaint Submitted</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {searchResult.submittedDate}
                      </div>
                    </div>
                  </div>

                  {(searchResult.status === "in-progress" || searchResult.status === "resolved") && (
                    <div className="flex items-center gap-3">
                      {getStatusIcon("in-progress")}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Under Review</p>
                        {searchResult.assignedTo && (
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <User className="w-3 h-3" />
                            Assigned to: {searchResult.assignedTo}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {searchResult.status === "resolved" && (
                    <div className="flex items-center gap-3">
                      {getStatusIcon("resolved")}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Resolved</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {searchResult.lastUpdated}
                        </div>
                        {searchResult.resolution && (
                          <p className="text-xs text-muted-foreground mt-1 bg-green-50 p-2 rounded">
                            {searchResult.resolution}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Not Found Message */}
        {notFound && (
          <Card className="border-border bg-card">
            <CardContent className="text-center py-8">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground mb-2">No Complaint Found</h3>
              <p className="text-muted-foreground mb-4">
                We couldn't find any complaint with the provided ID or PNR number.
              </p>
              <p className="text-sm text-muted-foreground">
                Please check your Complaint ID or PNR and try again. If you need help, contact our support team.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Demo Data Info */}
        {!searchResult && !notFound && (
          <Card className="border-border bg-muted/50">
            <CardContent className="text-center py-6">
              <h3 className="font-serif font-semibold text-foreground mb-2">Demo Data Available</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Try searching with these sample IDs to see the tracking functionality:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="cursor-pointer" onClick={() => setSearchQuery("CMP001234")}>
                  CMP001234
                </Badge>
                <Badge variant="outline" className="cursor-pointer" onClick={() => setSearchQuery("CMP001235")}>
                  CMP001235
                </Badge>
                <Badge variant="outline" className="cursor-pointer" onClick={() => setSearchQuery("CMP001236")}>
                  CMP001236
                </Badge>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
