import { useEffect, useState } from "react";

function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 600px)").matches);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);
  return isSmallScreen;
}

export default useIsSmallScreen;
