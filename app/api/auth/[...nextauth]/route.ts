import authOuptions from '@/app/auth/authOptions';
import NextAuth from 'next-auth';

const handler = NextAuth(authOuptions);

export { handler as GET, handler as POST };
