import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-MT03G3FLZF', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default useAnalytics;
