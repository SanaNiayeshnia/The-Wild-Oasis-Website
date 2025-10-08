"use client";
import { useActionState, useEffect } from "react";
import Button from "../Button";
import FormField from "./FormField";
import { updateProfileAction } from "@/app/_lib/actions";
import { PiSpinnerBold } from "react-icons/pi";
import { toast } from "sonner";
import { formatDate } from "@/app/_lib/functions";

function UpdateProfileForm({ guest = {}, children }) {
  const [state, formAction, isPending] = useActionState(
    updateProfileAction,
    null
  );

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success("Profile updated successfully!", {
        description: formatDate(new Date(), "dddd, MMMM DD, YYYY [at] hh:mm A"),
      });
    } else if (state.error) {
      toast.error("Failed to update the profile!", {
        description: state.error,
      });
    }
  }, [state]);

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
        size="small"
        className="self-end flex items-center gap-2"
        disabled={isPending}
      >
        {isPending && <PiSpinnerBold className="animate-spin text-xl" />}
        Update profile
      </Button>
    </form>
  );
}

export default UpdateProfileForm;
