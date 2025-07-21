import Button from "@/app/_components/Bbutton";

function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center flex-grow -translate-y-10">
      <h2 className="text-8xl font-semibold text-accent-500">404</h2>
      <p className="text-xl">Cabin not found!</p>
      <Button href="/cabins">Back to all cabins</Button>
    </div>
  );
}

export default NotFound;
