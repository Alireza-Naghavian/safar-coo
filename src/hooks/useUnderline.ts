import { useEffect, useRef, useState } from "react";

const useUnderline = () => {
  const markerRef = useRef<HTMLDivElement  | null>(null);
  const itemsRef = useRef<HTMLUListElement[]>([]);
  const [style, setStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const updatePosition = (e: MouseEvent) => {
    const target = e.target as HTMLAnchorElement;
    if (markerRef.current && target) {
      setStyle({
        left: target.offsetLeft,
        width: target.offsetWidth,
        opacity: 1,
      });
    }
  };
  const hideUnderline = () => {
    setStyle((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };
  useEffect(() => {
    const items = itemsRef.current;
    if (items) {
      items.forEach((link) => {
        link.addEventListener("mousemove", updatePosition);
        link.addEventListener("mouseleave", hideUnderline);
      });
    }

    return () => {
     
      if (items) {
        items.forEach((link) => {
          link.removeEventListener("mousemove", updatePosition);
          link.removeEventListener("mouseleave", hideUnderline);
        });
      }
    };
  }, []);
  return { itemsRef, markerRef, style, updatePosition, hideUnderline };
};

export default useUnderline;
