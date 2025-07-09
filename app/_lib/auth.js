import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createAGuest, getGuest } from "./data_services";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    authorized: async ({ auth }) => !!auth,
    signIn: async ({ user }) => {
      try {
        const existingUser = await getGuest(user?.email);
        if (!existingUser) {
          await createAGuest({ email: user?.email, fullName: user?.name });
        }
        return true;
      } catch {
        return false;
      }
    },
    session: async ({ session }) => {
      const guest = await getGuest(session?.user?.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: { signIn: "/login", signOut: "/logout" },
});
