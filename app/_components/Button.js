import Link from "next/link";

function Button({
  href = "",
  onClick,
  type = "button",
  className = "",
  disabled = false,
  size = "large",
  children,
}) {
  const classes = `bg-accent-500 cursor-pointer shadow-lg flex items-center gap-2  text-primary-950 rounded hover:bg-accent-600 hover:rounded-none transition-all duration-300 ${
    size === "large"
      ? "py-2 px-4 md:py-4 md:px-6 hover:px-6 md:hover:px-8"
      : "py-1 px-2 md:py-2 md:px-3 hover:px-3 md:hover:px-5 "
  } ${className}`;

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
