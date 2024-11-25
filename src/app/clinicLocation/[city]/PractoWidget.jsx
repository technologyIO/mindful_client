import React, { useEffect, useRef } from 'react';

const PractoWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Load the Practo widget script only if it hasn't been loaded already
    if (!document.getElementById('practo-widget-script')) {
      const script = document.createElement('script');
      script.id = 'practo-widget-script';
      script.src = "https://www.practo.com/bundles/practopractoapp/js/abs_widget_helper.js";
      script.async = true;
      script.onload = () => {
        // Initialize the Practo widget once the script is loaded
        if (window.Practo && window.Practo.initWidgets) {
          window.Practo.initWidgets();
        }
      };
      document.body.appendChild(script);
    } else {
      // If the script is already loaded, reinitialize the widget
      if (window.Practo && window.Practo.initWidgets) {
        window.Practo.initWidgets();
      }
    }

    // Inject the widget HTML directly into the DOM
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '<practo:abs_widget widget="5316e4974eb8170a"></practo:abs_widget>';
      if (window.Practo && window.Practo.initWidgets) {
        window.Practo.initWidgets();
      }
    }
  }, []);

  return <div ref={widgetRef}></div>;
};

export default PractoWidget;
