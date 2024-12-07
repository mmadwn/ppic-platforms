'use client'

import React, { createContext, useContext, useEffect, useState, createRef } from 'react'
import { ConfigProvider, theme } from 'antd'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)
  const providerRef = createRef<HTMLDivElement>()

  useEffect(() => {
    setMounted(true)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setCurrentTheme(mediaQuery.matches ? 'dark' : 'light')

    const handler = (e: MediaQueryListEvent) => {
      setCurrentTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(currentTheme)
    }
  }, [currentTheme, mounted])

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <ConfigProvider
        theme={{
          algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: {
            colorPrimary: currentTheme === 'light' ? 'var(--primary)' : '#1a365d',
            borderRadius: 8,
          },
        }}
      >
        <div ref={providerRef}>
          {children}
        </div>
      </ConfigProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

