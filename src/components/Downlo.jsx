import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "./PDF";

function Downlo() {
  return (
    <div>
      <PDFDownloadLink document={<Pdf />} fileName="somename.pdf">
        Download
      </PDFDownloadLink>
    </div>
  );
}

export default Downlo;
