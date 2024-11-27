"use client"
import React, { useEffect } from "react";

const ZohoForm = () => {
  useEffect(() => {
    const containerId = "zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk";
    const iframeSrc =
      "https://forms.zohopublic.in/nikhilmindf1/form/RequestanAppointment/formperma/GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk?zf_rszfm=1";

    try {
      const container = document.getElementById(containerId);

      // Ensure the container exists
      if (!container) {
        console.error("Zoho form container not found.");
        return;
      }

      // Prevent duplicate iframes
      if (container.querySelector("iframe")) {
        console.log("Iframe already exists.");
        return;
      }

      // Create iframe
      const iframe = document.createElement("iframe");
      iframe.src = iframeSrc;
      iframe.style.border = "none";
      iframe.style.height = "100vh"; // Full height for responsiveness
      iframe.style.width = "100%"; // Edge-to-edge width
      iframe.style.margin = "0"; // Remove margins
      iframe.style.padding = "0"; // Remove padding
      iframe.style.transition = "all 0.5s ease";
      iframe.setAttribute("aria-label", "Request an Appointment");

      // Append iframe
      container.appendChild(iframe);

      // Add event listener for resizing
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

      // Cleanup on unmount
      return () => {
        window.removeEventListener("message", handleResize);
        if (container) {
          container.innerHTML = ""; // Remove iframe
        }
      };
    } catch (error) {
      console.error("Error loading Zoho form:", error);
    }
  }, []);

  return (
    <div
      id="zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk"
      style={{
        width: "100%",
        height: "100%",
        margin: "0", // Remove container margins
        padding: "0", // Remove container padding
        textAlign: "center",
      }}
    ></div>
  );
};

export default ZohoForm;
