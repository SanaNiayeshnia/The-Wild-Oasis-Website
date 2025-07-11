function FormField({
  label = "",
  value = "",
  type = "text",
  placeholder = "",
  ...rest
}) {
  const classes =
    "bg-primary-700 peer rounded-xs p-2 focus:outline-0 focus:bg-primary-600 transition-all duration-300";
  return (
    <div className="flex flex-col-reverse gap-1">
      {type === "textarea" ? (
        <textarea
          cols={4}
          className={`${classes} resize-none`}
          placeholder={placeholder}
          {...rest}
        />
      ) : (
        <input
          type={type}
          className={`${classes} ${
            type === "number"
              ? "appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance:textfield]"
              : ""
          }`}
          placeholder={placeholder}
          {...rest}
        />
      )}

      <label
        htmlFor=""
        className="peer-focus:!text-accent-200 transition-all duration-300"
      >
        {label}
      </label>
    </div>
  );
}

export default FormField;
