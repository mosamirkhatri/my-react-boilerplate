import { useCallback, useEffect, useState } from "react";

export const useScroll = () => {
  const [percentageScrolled, setPercentageScrolled] = useState(0);
  const totalPageHeight = () => {
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    return docHeight - windowHeight;
  };
  const calculateScrollPercentage = useCallback(() => {
    const scrollOffset = window.pageYOffset;
    const scrollPercentage = Math.round(
      (scrollOffset / totalPageHeight()) * 100
    );
    return scrollPercentage;
  }, []);
  useEffect(() => {
    const scroll = () => setPercentageScrolled(calculateScrollPercentage());
    document.addEventListener("scroll", scroll);
    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, [calculateScrollPercentage]);
  return percentageScrolled;
};
