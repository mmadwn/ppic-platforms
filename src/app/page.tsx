'use client'

import Header from "@/layouts/Header"
import Footer from "@/layouts/Footer"
import { PlatformCard } from "@/components/platform/PlatformCard"
import { usePlatforms } from "@/hooks/usePlatforms"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Typography, Spin, Alert } from "antd"
import { ThemeProvider } from "@/providers/themeProvider"

const { Title, Paragraph } = Typography
const queryClient = new QueryClient()

function Home() {
  const { data: platforms, isLoading, error } = usePlatforms()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Spin size="large" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Alert
            message="Error"
            description="Failed to load platforms"
            type="error"
            showIcon
          />
        </div>
      </div>
    )
  }

  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <div className="layout-container">
          <div className="hero-section">
            <Title level={1} className="hero-title">
              Welcome to PPIC Platforms
            </Title>
            <Paragraph className="hero-description">
              Your centralized gateway to PPIC&apos;s digital ecosystem. Seamlessly navigate and access enterprise services through our secure, integrated dashboard experience.
            </Paragraph>
          </div>

          <div className="card-grid">
            {platforms?.map((platform) => (
              <PlatformCard
                key={platform.id}
                {...platform}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
