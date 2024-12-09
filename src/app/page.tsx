'use client'

import Header from "@/layouts/Header"
import { PlatformCard } from "@/components/platform/PlatformCard"
import { usePlatforms } from "@/hooks/usePlatforms"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Typography, Spin, Alert } from "antd"
import { ThemeProvider } from "@/providers/themeProvider"
import styles from '@/styles/Layout.module.css'
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
    <main className="min-h-screen relative bg-background text-foreground">
      <div className={styles.container}>
        <Header />
        <div className={styles.heroSection}>
          <Title level={1} className="text-foreground">
            Welcome to PPIC Platforms
          </Title>
          <Paragraph className="text-foreground/80">
            Your centralized gateway to PPIC&apos;s digital ecosystem. Seamlessly navigate and access enterprise services through our secure, integrated dashboard experience.
          </Paragraph>
        </div>

        <div className={styles.cardGrid}>
          {platforms?.map((platform) => (
            <PlatformCard
              key={platform.id}
              {...platform}
            />
          ))}
        </div>
      </div>
    </main>
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
