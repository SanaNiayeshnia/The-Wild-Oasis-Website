"use client";
import { useFormStatus } from "react-dom";

function FormField({
  label = "",
  value = "",
  type = "text",
  name = "",
  placeholder = "",
  disabled = false,
  defaultValue = "",
  ...rest
}) {
  const { pending } = useFormStatus();
  const classes = ` peer rounded-xs p-2 focus:outline-0  transition-all duration-300 ${
    disabled || pending
      ? "bg-primary-800 text-primary-400"
      : "bg-primary-700 text-white focus:bg-primary-600"
  }`;

  return (
    <div className="flex flex-col-reverse gap-1">
      {type === "textarea" ? (
        <textarea
          cols={4}
          className={`${classes} resize-none`}
          name={name}
          placeholder={placeholder}
          disabled={disabled || pending}
          defaultValue={defaultValue}
          {...rest}
        />
      ) : (
        <input
          type={type}
          name={name}
          defaultValue={defaultValue}
          className={`${classes} ${
            type === "number"
              ? "appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance:textfield]"
              : ""
          } `}
          placeholder={placeholder}
          disabled={disabled || pending}
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
