import { useEffect, useRef } from "react";

export function useOutside(handleout) {
  const refe = useRef();

  useEffect(() => {
    function handle(e) {
      if (!refe.current.contains(e.target)) {
        handleout(false);
      }
    }
    document.addEventListener("click", handle, true);

    return () => {
      document.removeEventListener("click", handle, true);
    };
  }, [handleout]);

  return refe;
}
