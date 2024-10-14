import { PDFDownloadLink } from "@react-pdf/renderer";
import { IoMdMenu } from "react-icons/io";
import { handledownload } from "../other/generateimage";
import Pdf from "./PDF";
import { useAppContext } from "../context/appcontext";
import Proptypes from "prop-types";

Header.propTypes = {
  setstate: Proptypes.any,
  img: Proptypes.any,
  setimage: Proptypes.any,
};

function Header({ setstate, img, setimage }) {
  const { isloading } = useAppContext();
  return (
    <header className="flex rounded-sm items-center justify-between px-5 p-3">
      <div className="flex items-center gap-3">
        <IoMdMenu
          className="text-4xl lg:hidden block"
          onClick={() => setstate((state) => !state)}
        />
        <h3 className="text-xl md:text-4xl text-slate-800 font-bold">
          Dashboard
        </h3>
      </div>
      {img.length !== 0 ? (
        <div className="p-1 text-xs md:text-sm hover:bg-slate-200 active:bg-slate-300  px-4 bg-slate-100 rounded-md">
          <PDFDownloadLink document={<Pdf img={img} />} fileName="somename.pdf">
            Download PDF
          </PDFDownloadLink>
        </div>
      ) : (
        <button
          onClick={async () => {
            if (!isloading) {
              const img = await handledownload();
              setimage(img);
            }
          }}
          className="p-1 text-xs md:text-sm hover:bg-slate-200 active:bg-slate-300  px-4 bg-slate-100 rounded-md"
        >
          Export as PDF
        </button>
      )}
    </header>
  );
}

export default Header;
