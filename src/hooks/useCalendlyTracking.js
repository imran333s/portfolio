// src/hooks/useCalendlyTracking.js
import { useEffect } from "react";
import { trackEvent } from "../utils/analytics";

const CALENDLY_TOKEN =
  "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzY0NzQ3NzQ0LCJqdGkiOiI5NGExZWQxZC05NTIwLTQyZTctYjQyNi01MjZlMWI2ZmE3YWMiLCJ1c2VyX3V1aWQiOiJmNzcyM2RlOC01YmYxLTRjYmUtYjJmMy0zNGJlNDk5ZGEzMTIifQ.mGuWZbF8y68JisjbhaZt1wo6HZU7qCaFk_DTMeGceQxGqW-_WQy_TLsUVQl1pL8iJ8t3iQSgwXCfXxd1W7noNQ"; // 🔑 Replace with your token

const useCalendlyTracking = () => {
  useEffect(() => {
    const handleMessage = async (e) => {
      if (!e.data.event || !e.data.payload) return;

      console.log("Calendly payload: ", e.data); // 🔍 For debugging

      switch (e.data.event) {
        case "calendly.event_scheduled": {
          try {
            const eventUri = e.data.payload?.event?.uri;
            const inviteeUri = e.data.payload?.invitee?.uri;

            if (!eventUri) return;

            // Fetch event details from Calendly API
            const response = await fetch(eventUri, {
              headers: { Authorization: `Bearer ${CALENDLY_TOKEN}` },
            });
            const eventData = await response.json();

            trackEvent("meeting_scheduled", {
              event_name: eventData?.name || "Unknown Event",
              invitee_name: eventData?.invitee_email || "Unknown", // depending on API
              start_time: eventData?.start_time || null,
              raw_payload: JSON.stringify(e.data.payload),
            });
          } catch (err) {
            console.error("Error fetching Calendly event:", err);
            // fallback to just sending URI
            trackEvent("meeting_scheduled", {
              event_name: "Unknown Event",
              invitee_name: "Unknown",
              start_time: null,
              raw_payload: JSON.stringify(e.data.payload),
            });
          }
          break;
        }

        case "calendly.date_and_time_selected": {
          const eventName = e.data.payload?.event?.name || "Unknown Event";
          const selectedTime = e.data.payload?.event?.start_time || null;

          trackEvent("meeting_time_selected", {
            event_name: eventName,
            selected_time: selectedTime,
            raw_payload: JSON.stringify(e.data.payload),
          });
          break;
        }

        default:
          break;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);
};

export default useCalendlyTracking;
