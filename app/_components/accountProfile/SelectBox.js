export const SelectBox = ({ label = "", options = {}, value = "" }) => {
  return (
    <div className="flex flex-col-reverse gap-1">
      <select
        value={value}
        className="bg-primary-700 peer rounded-xs px-2 py-3 focus:outline-0 focus:bg-primary-600 transition-all duration-300 [&_option]:disabled:text-accent-200"
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
