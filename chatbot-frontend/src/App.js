import React from "react";
import ChatWidget from "./ChatWidget";

/**
 * When loaded standalone (directly opening the app URL), we’ll show the widget
 * centered on the page for convenience. When embedded via iframe, it just fills
 * the iframe canvas.
 */
export default function App() {
  const backendUrl =
    // process.env.REACT_APP_BACKEND_URL || "https://yourdomain.com:8080";
    process.env.REACT_APP_BACKEND_URL || "http://69.197.187.24:8080";

  return (
    <div className="standalone">
      <div className="standalone-inner">
        <div className="title">Chatbot</div>
        <ChatWidget backendUrl={backendUrl} />
        <div className="hint">
          Connected to: <code>{backendUrl}</code>
        </div>
      </div>
    </div>
  );
}
