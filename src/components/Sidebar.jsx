import SidebarItems from "./SidebarItems";

function Sidebar() {
  return (
    <div className="w-72 hidden lg:flex justify-center border rounded-md h-full bg-gradient-to-b to-orange-100 from-slate-200 ">
      <SidebarItems />
    </div>
  );
}

export default Sidebar;
