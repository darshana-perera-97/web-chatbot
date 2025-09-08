import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export default function ChatWidget({ backendUrl }) {
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hi! I’m your chatbot. Ask me anything." }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    async function sendMessage(e) {
        e?.preventDefault();
        const text = input.trim();
        if (!text) return;

        const next = [...messages, { role: "user", content: text }];
        setMessages(next);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch(`${backendUrl}/api/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: next })
            });
            const data = await res.json();
            const reply = data?.reply || "Sorry, I couldn't reply.";
            setMessages(m => [...m, { role: "assistant", content: reply }]);
        } catch (err) {
            console.error(err);
            setMessages(m => [
                ...m,
                { role: "assistant", content: "Error: could not reach server." }
            ]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="chat-container">
            <div className="chat-header">Chatbot</div>

            <div className="chat-body">
                {messages.map((m, i) => (
                    <div key={i} className={`msg ${m.role}`}>
                        <div className="bubble">{m.content}</div>
                    </div>
                ))}
                {loading && <div className="typing">…</div>}
                <div ref={endRef} />
            </div>

            <form className="chat-input" onSubmit={sendMessage}>
                <input
                    placeholder="Type your message…"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                    Send
                </button>
            </form>
        </div>
    );
}

ChatWidget.propTypes = {
    backendUrl: PropTypes.string.isRequired
};
