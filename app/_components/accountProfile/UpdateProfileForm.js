"use client";
import { useActionState } from "react";
import Button from "../Button";
import FormField from "./FormField";
import { updateProfileAction } from "@/app/_lib/actions";
import { PiSpinnerBold } from "react-icons/pi";

function UpdateProfileForm({ guest = {}, children }) {
  const [state, formAction, isPending] = useActionState(
    updateProfileAction,
    null
  );

  return (
    <form
      action={formAction}
      className="p-4 flex flex-col gap-4 bg-primary-900 rounded-md "
    >
      <FormField
        label="Full name"
        name="fullName"
        defaultValue={guest?.fullName}
        disabled
      />
      <FormField
        label="Email address"
        type="email"
        name="email"
        defaultValue={guest?.email}
        disabled
      />
      {children}
      <FormField
        label="National Id Number"
        type="number"
        name="nationalID"
        defaultValue={guest?.nationalID}
      />
      <FormField type="hidden" name="guestId" defaultValue={guest?.id} />
      <Button
        type="submit"
        className="self-end  !py-3 !px-4 flex items-center gap-2"
        disabled={isPending}
      >
        {isPending && <PiSpinnerBold className="animate-spin text-xl" />}
        Update profile
      </Button>
    </form>
  );
}

export default UpdateProfileForm;
