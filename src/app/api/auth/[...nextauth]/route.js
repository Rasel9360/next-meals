import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

export const authOption = {
    secret: process.env.NEXT_AUTH_PUBLIC_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: 'Your Email',
                    type: 'email',
                    required: true,
                    placeholder: 'Enter Your Name'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    required: true,
                    placeholder: 'Enter Your Password'
                },
            },


            async authorize(credentials) {
                const { email, password } = credentials;
                if (!credentials) {
                    return null;
                }

                if (email) {
                    const db = await connectDB();
                    const currentUser = await db.collection("users").findOne({ email });
                    // const currentUser = users.find(user => user.email === email)
                    if (currentUser) {
                        if (currentUser.password === password) {
                            return currentUser
                        }
                    }
                }

                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          })
    ],

    callbacks: {
        async jwt({ token, account, user }) {
            if (account) {
                token.type = user.type
            }
            return token
        },
        async session({ session, token }) {
            session.user.type = token.type
            return session
        }
    }
}

const handler = NextAuth(authOption)


// const users = [
//     {
//         id: 1,
//         name: 'Rasel',
//         email: 'rasel@gmail.com',
//         type: 'admin',
//         password: '123456',
//         image: 'https://picsum.photos/200/300'
//     },
//     {
//         id: 2,
//         name: 'Sagor',
//         email: 's@gmail.com',
//         type: 'moderator',
//         password: 'password',
//         image: 'https://picsum.photos/200/300'
//     },
//     {
//         id: 3,
//         name: 'Saiful',
//         email: 'a@gmail.com',
//         type: 'member',
//         password: 'sasasa',
//         image: 'https://picsum.photos/200/300'
//     },
// ]


export { handler as GET, handler as POST };