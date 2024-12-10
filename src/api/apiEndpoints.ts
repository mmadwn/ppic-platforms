const API_ENDPOINT = {
    SSO: process.env.NEXT_PUBLIC_SSO_API_URL || 'http://localhost:3001',
    API: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
}

export default API_ENDPOINT
