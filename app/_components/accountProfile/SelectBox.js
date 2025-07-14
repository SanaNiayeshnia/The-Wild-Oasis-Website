"use client";

import { useFormStatus } from "react-dom";

export const SelectBox = ({
  label = "",
  options = {},
  name = "",
  defaultValue = "",
  disabled = false,
  ...rest
}) => {
  const { pending } = useFormStatus();
  return (
    <div className="flex flex-col-reverse gap-1">
      <select
        name={name}
        defaultValue={defaultValue}
        className={`bg-primary-700 peer rounded-xs px-2 py-3 focus:outline-0 focus:bg-primary-600 transition-all duration-300 [&_option]:disabled:text-accent-200 ${
          disabled || pending
            ? "bg-primary-800 text-primary-400"
            : "bg-primary-700 text-white focus:bg-primary-600"
        }`}
        disabled={pending}
        {...rest}
      >
        {options?.map((option, index) => (
          <option key={index} disabled={option?.disabled} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
      <label
        htmlFor=""
        className="peer-focus:!text-accent-200 transition-all duration-300"
      >
        {label}
      </label>
    </div>
  );
};
