import { CiNoWaitingSign, CiSettings } from "react-icons/ci";
import { MdOutlineDashboard, MdOutlineHome } from "react-icons/md";

function SidebarItems() {
  return (
    <div className="mt-10 flex gap-5 flex-col items-center">
      <h2 className="text-xl font-bold drop-shadow-lg">Wheather</h2>
      <nav className="mt-5 flex flex-col gap-5">
        <p className="text-lg bg-stone-50 rounded-md flex items-center gap-2 border p-3 px-9 hover:cursor-pointer">
          <MdOutlineDashboard color="#414852e7" className="text-2xl" />
          Dashboard
        </p>
        <p className="text-lg bg-stone-50 flex gap-2 items-center rounded-md border p-3 px-9 hover:cursor-pointer">
          <MdOutlineHome color="#414852e7" className="text-2xl" />
          Home
        </p>
        <p className="text-lg bg-stone-50 flex gap-2 items-center rounded-md border p-3 px-9 hover:cursor-pointer">
          <CiSettings color="#414852e7" className="text-2xl" />
          Setings
        </p>
        <p className="text-lg bg-stone-50 flex gap-2 items-center rounded-md border p-3 px-9 hover:cursor-pointer">
          <CiNoWaitingSign color="#414852e7" className="text-2xl" />
          Other
        </p>
        <p className="text-lg bg-stone-50 flex gap-2 items-center rounded-md border p-3 px-9 hover:cursor-pointer">
          <CiNoWaitingSign color="#414852e7" className="text-2xl" />
          Other
        </p>
      </nav>
    </div>
  );
}

export default SidebarItems;
