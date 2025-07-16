import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";

function ReservationCardsBtns() {
  return (
    <div className=" divide-y-2 flex flex-col min-w-30 justify-center divide-primary-900">
      <button className="py-2 px-3 flex-grow flex items-center justify-center cursor-pointer hover:bg-primary-900 transition-all duration-300 group gap-2">
        <RiEdit2Fill className="group-hover:rotate-[360deg] transition-all duration-300" />
        Edit
      </button>
      <button className="py-2 px-3 flex-grow flex items-center justify-center cursor-pointer hover:bg-primary-900 transition-all duration-300 group gap-2">
        <RiDeleteBin5Fill className="group-hover:rotate-[360deg] transition-all duration-300" />
        Delete
      </button>
    </div>
  );
}

export default ReservationCardsBtns;
