import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "./analytics";

const useAnalytics = () => {
  const location = useLocation();

  // Page view tracking
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-MT03G3FLZF", {
        page_path: location.pathname,
      });
    }

    // Page view event
    trackEvent("page_view_custom", {
      page_path: location.pathname,
    });
  }, [location]);

  // Scroll depth tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent > 25) trackEvent("scroll_25");
      if (scrollPercent > 50) trackEvent("scroll_50");
      if (scrollPercent > 75) trackEvent("scroll_75");
      if (scrollPercent > 90) trackEvent("scroll_100");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Session duration tracking
  useEffect(() => {
    const start = Date.now();

    const handleBeforeUnload = () => {
      const duration = Math.round((Date.now() - start) / 1000);
      trackEvent("session_duration", { seconds: duration });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);
};

export default useAnalytics;
