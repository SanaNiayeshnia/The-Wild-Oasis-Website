import Link from "next/link";

function Button({ href = "", onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="bg-accent-500 shadow-lg py-4 px-6 text-primary-950 rounded hover:bg-accent-600 hover:rounded-none hover:px-8 transition-all duration-300"
    >
      {children}
    </Link>
  );
}

export default Button;
