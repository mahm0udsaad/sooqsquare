import prisma  from '../../../../prisma/client'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { useRouter } from 'next/navigation';
import { Prisma } from '@prisma/client';


const authOption = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" , placeholder:"xxxx" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

          try {
            // Check if the user already exists
            const existingUser = await prisma.User.findUnique({
              where: {
                email: credentials.email,
              },
            });
  
            if (existingUser) {
              return null;
            }
  
            const newUser = await Prisma.User.create({
              data: {
                email: credentials.email,
                password: credentials.password, 
              },
            });
  
            return newUser; 
          } catch (error) {
            console.error('Error creating user:', error);
            return null; 
          }
      },
      
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error('No profile')
      }
      return true
    },
  },
}

const handler = NextAuth(authOption)
export { handler as GET, handler as POST }