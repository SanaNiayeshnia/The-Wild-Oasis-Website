import { getCountries } from "@/app/_lib/data_services";
import { SelectBox } from "./SelectBox";

export const SelectCountry = async ({
  label = "",
  control = {},
  name = "",
}) => {
  const countries = await getCountries();
  return (
    <>
      <SelectBox
        label={label}
        options={[
          { value: "", label: "Select a country...", disabled: true },
          ...countries?.map((country) => ({
            value: country?.id,
            label: country?.name,
          })),
        ]}
      />
    </>
  );
};
