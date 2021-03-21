import { useEffect } from "react";

const useAddEventToDom = (eventType, callback) => {
  useEffect(() => {
    document.addEventListener(eventType, callback);
    return () => {
      document.removeEventListener(eventType, callback);
    };
  }, [callback, eventType]);
};

export default useAddEventToDom;
