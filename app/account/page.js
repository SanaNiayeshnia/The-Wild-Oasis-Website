import { auth } from "../_lib/auth";

export const revalidate = 3600;
export const metadata = { title: "Account" };
async function AccountPage() {
  const session = await auth();

  return (
    <div className="grid place-items-center flex-grow h-[70vh]">
      <div className="max-w-96 ">
        <h1 className="text-accent-400 text-center text-2xl font-semibold mb-4">
          Welcome, {session?.user?.name}
        </h1>
        <p className="text-primary-50 text-center ">
          We’re glad to see you again. You can review your upcoming stays,
          manage reservations, or update your profile info right here.
        </p>
      </div>
    </div>
  );
}

export default AccountPage;
