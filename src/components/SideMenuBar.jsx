import { HiXMark } from "react-icons/hi2";
import SidebarItems from "./SidebarItems";
import Proptypes from "prop-types";

SideMenuBar.propTypes = {
  refe: Proptypes.any,
  state: Proptypes.any,
  setstate: Proptypes.any,
};

function SideMenuBar({ refe, state, setstate }) {
  return (
    <div
      ref={refe}
      className={`w-60 ${
        !state && "-translate-x-full"
      } rounded-r-md h-full top-0 left-0 lg:hidden z-[100] fixed bg-gradient-to-b transition-transform duration-300 to-orange-100 from-slate-300 `}
    >
      <p
        onClick={() => setstate(false)}
        className="ml-[200px] rounded-md p-2 text-xl hover:bg-slate-50 mt-2 absolute"
      >
        <HiXMark />
      </p>
      <SidebarItems />
    </div>
  );
}

export default SideMenuBar;
