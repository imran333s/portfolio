// utils/analytics.js
export const trackEvent = (eventName, params = {}) => {
  // Assign a unique user/session id
  let userId = localStorage.getItem("user_id");
  if (!userId) {
    userId = "user_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("user_id", userId);
  }

  const fullParams = {
    ...params,
    user_id: userId, // add user identifier
  };

  console.log("Event tracked:", eventName, fullParams);

  if (window.gtag) {
    window.gtag("event", eventName, fullParams);
  }
};
