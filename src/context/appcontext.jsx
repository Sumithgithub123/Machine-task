import { createContext, useContext, useEffect, useState } from "react";
import { getWheather } from "../apis/getWheather";
import { useErrorBoundary } from "react-error-boundary";
import { PropTypes } from "prop-types";

AppContextProvider.propTypes = {
  children: PropTypes.any,
};

const Appcontext = createContext();

export default function AppContextProvider({ children }) {
  const [wheather, setweather] = useState({});
  const [isloading, setisloading] = useState(false);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    async function getwh() {
      setisloading(true);
      const data = await getWheather(showBoundary);
      setweather(data);
      setisloading(false);
    }
    getwh();
  }, [showBoundary]);
  return (
    <Appcontext.Provider
      value={{ wheather, setweather, isloading, setisloading }}
    >
      {children}
    </Appcontext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(Appcontext);
  if (context === undefined)
    throw new Error("Appcontext used outside of its provider");

  return context;
}
