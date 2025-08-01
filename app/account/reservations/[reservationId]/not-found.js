import Button from "@/app/_components/Button";

function notFound() {
  return (
    <div className="grid place-items-center place-content-center h-[70vh]  gap-4 flex-grow">
      <h2 className="text-8xl font-semibold text-accent-500">404</h2>
      <p className="text-xl">Reservation not found!</p>
      <Button href="/account/reservations">Back to all reservations</Button>
    </div>
  );
}

export default notFound;
