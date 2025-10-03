import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createAGuest, getGuest } from "./data_services";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    authorized: async ({ auth }) => !!auth?.user,
    signIn: async ({ user }) => {
      try {
        const existingUser = await getGuest(user?.email);
        if (!existingUser) {
          await createAGuest({ email: user?.email, fullName: user?.name });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    session: async ({ session }) => {
      const guest = await getGuest(session?.user?.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: { signIn: "/login" },
});
