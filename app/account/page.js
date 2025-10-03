import { auth } from "../_lib/auth";

export const revalidate = 3600;
export const metadata = { title: "Account" };
async function Page() {
  const session = await auth();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(session);

  return (
    <div>
      <h1 className="text-accent-400 text-2xl font-semibold">
        Welcome, {session?.user?.name}
      </h1>
    </div>
  );
}

export default Page;
