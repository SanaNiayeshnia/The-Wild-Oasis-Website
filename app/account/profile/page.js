import { SelectCountry } from "@/app/_components/accountProfile/SelectCountry";
import UpdateProfileForm from "@/app/_components/accountProfile/UpdateProfileForm";

function Page() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-accent-400 text-2xl font-semibold">
        Update your guest profile
      </h1>
      <p>
        Providing the following information will make your check in process
        faster and smoother.
        <br />
        See you soon.
      </p>

      <UpdateProfileForm>
        <SelectCountry label="Where are you from?" />
      </UpdateProfileForm>
    </div>
  );
}

export default Page;
