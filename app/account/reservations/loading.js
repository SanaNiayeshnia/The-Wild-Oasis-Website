import Loader from "@/app/_components/Loader";

function Loading() {
  return (
    <div className="flex-grow h-full grid place-items-center">
      <Loader />
    </div>
  );
}

export default Loading;
