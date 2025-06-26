import Loader from "@/app/_components/Loader";

function loading() {
  return (
    <div className="-mt-30 flex-grow grid place-items-center">
      <Loader />
    </div>
  );
}

export default loading;
