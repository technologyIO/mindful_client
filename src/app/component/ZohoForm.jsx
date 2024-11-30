"use client";
import React, { useEffect } from "react";

const ZohoForm = ({ containerId, iframeSrc }) => {
  useEffect(() => {
    try {
      const container = document.getElementById(containerId);

      if (!container) {
        console.error("Zoho form container not found.");
        return;
      }

      if (container.querySelector("iframe")) {
        console.log("Iframe already exists.");
        return;
      }

      const iframe = document.createElement("iframe");
      iframe.src = iframeSrc;
      iframe.style.border = "none";
      // iframe.style.height = "100vh";
      iframe.style.width = "100%";
      iframe.style.margin = "0";
      iframe.style.padding = "0";
      iframe.style.transition = "all 0.5s ease";
      iframe.setAttribute("aria-label", "Request an Appointment");

      container.appendChild(iframe);

      const handleResize = (event) => {
        const evntData = event.data;
        if (evntData && evntData.constructor === String) {
          const zf_ifrm_data = evntData.split("|");
          if (zf_ifrm_data.length >= 2) {
            const zf_perma = zf_ifrm_data[0];
            const zf_ifrm_ht_nw = `${parseInt(zf_ifrm_data[1], 10) + 15}px`;
            if (
              iframe.src.includes("formperma") &&
              iframe.src.includes(zf_perma)
            ) {
              iframe.style.height = zf_ifrm_ht_nw;
            }
          }
        }
      };

      window.addEventListener("message", handleResize, false);

      return () => {
        window.removeEventListener("message", handleResize);
        if (container) {
          container.innerHTML = "";
        }
      };
    } catch (error) {
      console.error("Error loading Zoho form:", error);
    }
  }, [containerId, iframeSrc]);
  

  return (

    
    <iframe
      aria-label="Select your Clinic"
      frameBorder="0"
      style={{ height: "500px", width: "99%", border: "none" }}
      src={iframeSrc}
    ></iframe>
  );
};

export default ZohoForm;
