import { useEffect } from "react";

export const useClickOutside = (ref, callback, exclude) => {
    useEffect(() => {
        const handleClick = (event) => {
          const isIgnored = event.target.closest(`[${exclude}="true"]`);
          const isOutside = ref.current && !ref.current.contains(event.target);
    
          if (!isIgnored && isOutside) {
            callback();
          }
        };

        const handleKeyDown = (event) => {
          if (event.key === "Escape") {
            callback();
          }
        };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref, callback, exclude]);
};
