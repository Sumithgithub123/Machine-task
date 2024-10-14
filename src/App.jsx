import { useState } from "react";
import { useOutside } from "./context/useOutside";
import { PDFViewer } from "@react-pdf/renderer";
import Pdf from "./components/PDF";
import SideMenuBar from "./components/SideMenuBar";
import Boxes from "./components/Boxes";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UserTable from "./components/UserTable";
import WheatherChart from "./components/WheatherChart";

function App() {
  const [state, setstate] = useState(false);
  const [img, setimage] = useState([]);
  const refe = useOutside(setstate);

  return (
    <div className="p-4 py-5 bg-white flex gap-2 h-screen">
      <Sidebar />
      <SideMenuBar refe={refe} setstate={setstate} state={state} />

      <div className="flex flex-col w-full">
        <Header img={img} setimage={setimage} setstate={setstate} />
        <div className="h-full overflow-scroll">
          <Boxes />
          <div className="p-2 px-4">
            <div className="p-2 flex items-center">
              <div className="w-full">
                <h1 className="mt-5 mb-5 text-slate-800 font-semibold text-xl">
                  Temperature Stats | Kerala
                </h1>
                <WheatherChart />
              </div>
            </div>
            <UserTable />
            <PDFViewer className="hidden">
              <Pdf img={img} />
            </PDFViewer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
