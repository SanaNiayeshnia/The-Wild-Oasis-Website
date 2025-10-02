import { auth } from "../_lib/auth";

export const metadata = { title: "Account" };
async function Page() {
  const session = await auth();
  console.log(session);

  return (
    <div>
      <h1 className="text-accent-400 text-xl md:text-2xl font-semibold">
        Welcome, {session?.user?.name}
      </h1>
    </div>
  );
}

export default Page;
