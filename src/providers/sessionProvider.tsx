// 'use client'

// import React, { createContext, useContext, useState } from 'react'
// import { Sessions } from '@/types'

// interface SessionContextType {
//   sessions: Sessions | undefined
//   setSessions: (sessions: Sessions | undefined) => void
// }

// const SessionContext = createContext<SessionContextType | undefined>(undefined)

// export function SessionProvider({ children }: { children: React.ReactNode }) {
//   const [sessions, setSessions] = useState<Sessions | undefined>({
//     code: 200,
//     info: "OK",
//     data: {
//       user: {
//         id: "1",
//         username: "admin",
//         email: "admin@example.com",
//         role: "admin"
//       }
//     },
//     token: "your-token-here"
//   })

//   return (
//     <SessionContext.Provider value={{ sessions, setSessions }}>
//       {children}
//     </SessionContext.Provider>
//   )
// }

// export function useSession() {
//   const context = useContext(SessionContext)
//   if (context === undefined) {
//     throw new Error('useSession must be used within a SessionProvider')
//   }
//   return context
// } 