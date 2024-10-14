import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useAppContext } from "../context/appcontext";
import { kelvinToCelsius } from "../apis/services";

function WheatherChart() {
  const { wheather: { main } = {}, isloading } = useAppContext();

  const data = [
    {
      name: "temperature",
      temperature: kelvinToCelsius(main?.temp),
    },
    {
      name: "minimum temperature",
      temperature: kelvinToCelsius(main?.temp_min),
    },
    {
      name: "maximum temperature",
      temperature: kelvinToCelsius(main?.temp_max),
    },
    {
      name: "feels-like",
      temperature: kelvinToCelsius(main?.feels_like),
      amt: 2000,
    },
  ];

  if (isloading)
    return <div className="h-96 w-full bg-stone-300 animate-pulse"></div>;

  return (
    <div
      id="newprint1"
      className="h-96 py-4 pt-10 pr-8 rounded-md p-2 bg-gradient-to-br from-slate-200 to-slate-300 "
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={100}
          height={100}
          data={main ? data : []}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#000000" strokeDasharray="3 3" />
          <XAxis stroke="#00188d" dataKey="name" />
          <YAxis stroke="#000f58" />
          <Tooltip separator={" in Celsius : "} />
          <Legend />
          <Bar
            dataKey="temperature"
            barSize={60}
            fill="#00124e"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WheatherChart;
