import { meterToKm, mpsToKmph } from "../apis/services";
import PropTypes from "prop-types";

Box.propTypes = {
  icon: PropTypes.any,
  name: PropTypes.any,
  value: PropTypes.any,
  label: PropTypes.any,
};

function Box({ icon, name, value, label }) {
  if (!value) return null;
  return (
    <div className="border animate-fade-down px-5 py-6 flex flex-col gap-3  w-full sm:w-full bg-gradient-to-r from-yellow-100 to-blue-100 rounded-lg">
      <div className="flex items-center gap-5 justify-between">
        <p className="ml-5 text-3xl lg:text-5xl rounded-full text-yellow-900">
          {icon}
        </p>
        <p className="lg:text-4xl flex items-center gap-2 text-xl font-bold text-slate-700">
          {label === "km"
            ? meterToKm(value)
            : label === "km/h"
            ? mpsToKmph(value)
            : value}
          <span className="text-xs lg:text-sm"> {label}</span>
        </p>
      </div>
      <p className="text-end  lg:text-lg font-semibold text-slate-700">
        {name}
      </p>
    </div>
  );
}

export default Box;
