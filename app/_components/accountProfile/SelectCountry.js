import { getCountries } from "@/app/_lib/data_services";
import { SelectBox } from "./SelectBox";

export const SelectCountry = async ({ defaultValue = "" }) => {
  const countries = await getCountries();
  console.log(defaultValue);
  return (
    <SelectBox
      label="Where are you from?"
      name="nationality"
      defaultValue={defaultValue}
      options={[
        { value: "", label: "Select a country...", disabled: true },
        ...countries?.map((country) => ({
          value: country?.name,
          label: country?.name,
        })),
      ]}
    />
  );
};
