"use client";
import { useState } from "react";
import Button from "../Button";
import FormField from "./FormField";

function UpdateProfileForm({ children }) {
  const [fakeState, setFakeState] = useState();
  return (
    <form className="p-4 flex flex-col gap-4 bg-primary-900 rounded-md">
      <FormField label="Full name" />
      <FormField label="Email address" type="email" />
      {children}
      <FormField label="National Id Number" type="number" />

      <Button type="submit" className="self-end mt-2 !py-3 !px-4">
        Update profile
      </Button>
    </form>
  );
}

export default UpdateProfileForm;
