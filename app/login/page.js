import { FcGoogle } from "react-icons/fc";
import Logo from "../_components/Logo";
import { signInAction } from "../_lib/actions";

export const metadata = { title: "Sign In" };

function LoginPage() {
  return (
    <form action={signInAction} className="grid place-items-center flex-grow">
      <div className="flex flex-col items-center gap-5 -mt-15 bg-primary-900 p-5 rounded-md">
        <h1 className="text-accent-400 font-bold text-2xl">
          Welcome to The Wild Oasis
        </h1>
        <Logo text={false} width="100%" height="100%" />

        <p>Sign in to access your guest area.</p>
        <button className="border border-accent-400 cursor-pointer hover:bg-accent-400 transition-all duration-300 hover:rounded-none hover:text-stone-800 self-stretch justify-center  py-3 px-4 flex items-center gap-2 rounded">
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>
      </div>
    </form>
  );
}

export default LoginPage;
