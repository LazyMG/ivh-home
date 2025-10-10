import { useEffect } from "react";

const useSolutionClass = (className: string) => {
  useEffect(() => {
    document.body.classList.add(className);

    return () => {
      document.body.classList.remove(className);
    };
  }, []);
};

export default useSolutionClass;
