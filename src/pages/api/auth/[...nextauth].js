import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_ID,
      clientSecret: process.env.NEXT_PUBLIC_SECRETID
    })
  ]
}

export default NextAuth(authOptions)
