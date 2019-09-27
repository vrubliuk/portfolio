import { useState, useEffect } from "react";

const useWidth = () => {
  console.log(1);
  
  
  const [isSmall, setIsSmall] = useState(false);

 const handleResize = (e) =>  {
    console.log(e.target.innerWidth);
    
 
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log(window.innerWidth);
    
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return isSmall;
};

export default useWidth
