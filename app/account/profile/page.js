import { SelectCountry } from "@/app/_components/accountProfile/SelectCountry";
import UpdateProfileForm from "@/app/_components/accountProfile/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data_services";

export const metadata = {
  title: "Profile",
};
async function ProfilePage() {
  const session = await auth();
  const guest = await getGuest(session?.user?.email);
  console.log(guest);

  return (
    <div className="flex flex-col gap-4 max-w-[700px]">
      <h1 className="text-accent-400 text-xl sm:text-2xl font-semibold">
        Update your guest profile
      </h1>
      <p>
        Providing the following information will make your check in process
        faster and smoother.
        <br />
        See you soon.
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          defaultValue={guest?.nationality || ""}
          key={guest?.nationality || "form"}
        />
      </UpdateProfileForm>
    </div>
  );
}

export default ProfilePage;
