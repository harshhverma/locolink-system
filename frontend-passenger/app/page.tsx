import { Card, CardContent } from "@/components/ui/card"
import { FileText, Search, AlertTriangle, MessageSquare, Train, Phone } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Train className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-foreground">LocoLink</h1>
              <p className="text-sm text-muted-foreground">Railway Complaint Management</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Welcome to LocoLink</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your trusted platform for railway complaints and feedback. Quick, efficient, and reliable service at your
            fingertips.
          </p>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Register Complaint */}
          <Link href="/register-complaint">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-semibold text-lg text-card-foreground mb-1">Register Complaint</h3>
                    <p className="text-sm text-muted-foreground">Submit a new complaint about railway services</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Track Complaint */}
          <Link href="/track-complaint">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Search className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-semibold text-lg text-card-foreground mb-1">Track Complaint</h3>
                    <p className="text-sm text-muted-foreground">Check the status of your submitted complaints</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Emergency Help */}
          <Link href="/emergency-help">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-semibold text-lg text-card-foreground mb-1">Emergency Help</h3>
                    <p className="text-sm text-muted-foreground">Get immediate assistance for urgent situations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Feedback */}
          <Link href="/feedback">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-semibold text-lg text-card-foreground mb-1">Feedback</h3>
                    <p className="text-sm text-muted-foreground">Share your experience and suggestions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Quick Stats or Info Section */}
        <div className="bg-muted/50 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Phone className="w-5 h-5 text-primary" />
            <span className="font-serif font-semibold text-foreground">24/7 Support Available</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Our dedicated team is here to help you with any railway-related concerns
          </p>
        </div>
      </main>
    </div>
  )
}
