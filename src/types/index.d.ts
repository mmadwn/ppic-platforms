export interface Platform {
    id: string
    title: string
    description: string
    imageSrc: string
    href: string
    status: 'active' | 'maintenance' | 'coming soon'
  }