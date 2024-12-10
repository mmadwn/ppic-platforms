export interface Platform {
    id: string
    title: string
    description: string
    img_url: string | StaticImageData
    index_url: string
    status: 'active' | 'maintenance' | 'coming soon'
}
