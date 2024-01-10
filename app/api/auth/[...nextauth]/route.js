import prisma  from '../../../../prisma/client'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const authOption = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error('No profile')
      }
    //   await prisma.user.upsert({
    //     where: {
    //       email: profile.email,
    //     },
    //     create: {
    //       email: profile.email,
    //       name: profile.name,
    //     },
    //     update: {
    //       name: profile.name,
    //     },
    //   })
      return true
    },
  },
}

const handler = NextAuth(authOption)
export { handler as GET, handler as POST }