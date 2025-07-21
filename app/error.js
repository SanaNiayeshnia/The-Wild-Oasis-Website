"use client";

import Button from "./_components/Button";

function Error({ error, reset }) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center flex-grow -translate-y-10">
      <h2 className="text-3xl font-semibold text-accent-500">
        Something went wrong!
      </h2>
      <p className="text-xl">{error.message}</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}

export default Error;
