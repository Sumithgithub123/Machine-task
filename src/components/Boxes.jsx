import { GiPoisonCloud } from "react-icons/gi";
import { LuCloudy } from "react-icons/lu";
import { WiCloudyWindy, WiHumidity } from "react-icons/wi";
import { useAppContext } from "../context/appcontext";
import Box from "./Box";
import Loadingbox from "./Loadingbox";

const icons = [
  <WiCloudyWindy key={0} />,
  <WiHumidity key={1} />,
  <LuCloudy key={2} />,
  <GiPoisonCloud key={3} />,
];
const names = ["Wind", "Pressure", "Humidity", "Visibility"];
const units = ["km/h", "hpa", "%", "km"];

function Boxes() {
  const { wheather: { wind, main, visibility } = {}, isloading } =
    useAppContext();

  const values = [wind?.speed, main?.pressure, main?.humidity, visibility];

  if (isloading || !wind)
    return (
      <div className="flex mt-8 overflow-scroll p-3 gap-5">
        {Array.from({ length: names.length }, (_, i) => {
          return <Loadingbox key={i} />;
        })}
      </div>
    );

  return (
    <div className="flex mt-8 overflow-scroll p-3 gap-5">
      {Array.from({ length: names.length }, (_, i) => {
        return (
          <Box
            key={i}
            icon={icons[i]}
            name={names[i]}
            label={units[i]}
            value={values[i]}
          />
        );
      })}
    </div>
  );
}

export default Boxes;
