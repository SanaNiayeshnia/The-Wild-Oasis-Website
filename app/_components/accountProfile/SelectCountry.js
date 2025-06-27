import { getCountries } from "@/app/_lib/data_services";
import { Controller } from "react-hook-form";

export const SelectCountry = async ({
  label = "",
  control = {},
  name = "",
}) => {
  const countries = await getCountries();
  console.log(countries);
  return (
    <div className="flex flex-col-reverse gap-1">
      {/* <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <select
            value={field?.value}
            onChange={field?.onChange}
            className="bg-primary-700 peer rounded-xs px-2 py-3 focus:outline-0 focus:bg-primary-600 transition-all duration-300 [&_option]:disabled:text-accent-200"
          >
            <option value="" disabled>
              Select a country...
            </option>
            {countries?.map((country, index) => (
              <option key={index}>{country?.name}</option>
            ))}
          </select>
        )}
      /> */}
      <select
        // value={field?.value}
        // onChange={field?.onChange}
        className="bg-primary-700 peer rounded-xs px-2 py-3 focus:outline-0 focus:bg-primary-600 transition-all duration-300 [&_option]:disabled:text-accent-200"
      >
        <option value="" disabled>
          Select a country...
        </option>
        {countries?.map((country, index) => (
          <option key={index}>{country?.name}</option>
        ))}
      </select>

      <div>
        <label
          htmlFor=""
          className="peer-focus:!text-accent-200 transition-all duration-300"
        >
          {label}
        </label>
      </div>
    </div>
  );
};
