import Button from "./_components/Button";

function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center flex-grow -translate-y-10">
      <h2 className="text-8xl font-semibold text-accent-500">404</h2>
      <p className="text-xl">Page not found!</p>
      <Button href="/">Go back to home</Button>
    </div>
  );
}

export default NotFound;
