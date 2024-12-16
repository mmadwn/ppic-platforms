import { useQuery } from "@tanstack/react-query"
import { Platform } from "@/types"

interface ApiResponse {
  data: Platform[]
  status: string
  message: string
}

async function fetchPlatforms(): Promise<Platform[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_DEV}/api/portal/platforms`, {
    headers: {
      'Authorization': '',
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch platforms')
  }

  const result: ApiResponse = await response.json()
  
  // Tambahkan logging untuk debug
  console.log('API Response:', result)
  
  // Validasi response
  if (!result.data || !Array.isArray(result.data)) {
    console.error('Invalid response format:', result)
    throw new Error('Invalid response format: data is not an array')
  }

  return result.data
}

export function usePlatforms() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
  })
}

