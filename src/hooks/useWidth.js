import { useState, useEffect } from "react";

const useWidth = () => {
  const [isSmall, setIsSmall] = useState(false);

  const handleResize = () => {
    setIsSmall(window.innerWidth < 1366 ? true : false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isSmall };
};

export default useWidth;
