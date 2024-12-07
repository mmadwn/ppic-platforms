'use client'

import Header from "@/components/Header"
import { PlatformCard } from "@/components/PlatformCard"
import { usePlatforms } from "@/hooks/usePlatforms"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Typography, Spin, Alert } from "antd"
import { ThemeProvider } from "@/providers/theme-provider"
import { Platform } from "@/hooks/usePlatforms"
import styles from '@/styles/Layout.module.css'

const { Title, Paragraph } = Typography
const queryClient = new QueryClient()

function Home() {
  // const { theme } = useTheme()
  const { data: platforms, isLoading, error } = usePlatforms()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert
          message="Error"
          description="Failed to load platforms"
          type="error"
          showIcon
        />
      </div>
    )
  }

  return (
    <main className="min-h-screen relative">
      <div className={styles.container}>
        <Header />
        
        <div className={styles.heroSection}>
          <Title level={1} className={styles.title}>
            Welcome to PPIC Platforms
          </Title>
          <Paragraph className={styles.description}>
            Your centralized gateway to PPIC&apos;s digital ecosystem. Seamlessly navigate and access enterprise services through our secure, integrated dashboard experience.
          </Paragraph>
        </div>

        <div className={styles.cardGrid}>
          {platforms?.map((platform: Platform) => (
            <PlatformCard
              key={platform.id}
              title={platform.title}
              description={platform.description}
              imageSrc={platform.imageSrc}
              href={platform.href}
              status={platform.status}
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
