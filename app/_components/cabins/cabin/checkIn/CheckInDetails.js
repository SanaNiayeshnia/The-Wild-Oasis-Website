import FormField from "@/app/_components/accountProfile/FormField";
import { SelectBox } from "@/app/_components/accountProfile/SelectBox";
import Button from "@/app/_components/Button";

function CheckInDetails({ cabin = {} }) {
  const { maxCapacity } = cabin;
  return (
    <div className="flex flex-col flex-grow bg-primary-900">
      <p className="bg-primary-800 py-2 px-10 w-full text-primary-200">
        Logged in as
      </p>
      <div className="flex flex-col gap-3 py-5 px-10">
        <SelectBox
          label="How many guests?"
          value={0}
          options={[
            { label: "Select number of guests...", value: 0, disabled: true },
            ...Array.from({ length: maxCapacity }).map((item, index) => ({
              label: `${index + 1} guests`,
              value: index + 1,
            })),
          ]}
        />
        <FormField
          label="Anything we should know about your stay?"
          type="textarea"
          placeholder="Any pets, allergies, special requirments, etc?"
        />
        <div className="mt-3 self-end flex items-center gap-4">
          <p>Start by picking dates</p>
          <Button className="!py-3 !px-4">Reserve now</Button>
        </div>
      </div>
    </div>
  );
}

export default CheckInDetails;
