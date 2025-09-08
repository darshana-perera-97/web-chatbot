(function () {
    // CONFIG: change this to the full URL where this React app is hosted
    // var CHAT_APP_URL = "https://yourdomain.com"; // <-- Replace with your actual cPanel domain
    // Fallback for development/testing
    var CHAT_APP_URL = "http://69.197.187.24:3003";

    // Create the floating iframe
    var iframe = document.createElement("iframe");
    iframe.src = CHAT_APP_URL;
    iframe.title = "Chatbot";
    iframe.style.position = "fixed";
    iframe.style.bottom = "20px";
    iframe.style.right = "20px";
    iframe.style.width = "380px";
    iframe.style.height = "560px";
    iframe.style.border = "0";
    iframe.style.borderRadius = "12px";
    iframe.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
    iframe.allow = "clipboard-read; clipboard-write";
    iframe.setAttribute("aria-label", "Chatbot widget");

    document.addEventListener("DOMContentLoaded", function () {
        document.body.appendChild(iframe);
    });
})();
