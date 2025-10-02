import Link from "next/link";

function Button({
  href = "",
  onClick,
  type = "button",
  className = "",
  disabled = false,
  children,
}) {
  const classes = `bg-accent-500 cursor-pointer shadow-lg flex items-center gap-2 py-2 px-4 md:py-4 md:px-6 text-primary-950 rounded hover:bg-accent-600 hover:rounded-none hover:px-8 transition-all duration-300 ${className}`;

  return href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
