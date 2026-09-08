import { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const BOT_NAME = 'Deepak Portfolio Assistant';
const GREETING =
  "Hi! I can answer questions about my background, skills, and projects. What would you like to know?";
const SUGGESTIONS = [
  'What are your core skills?',
  'Tell me about a recent project',
  'What kind of role are you looking for?',
  'How can I get in touch?',
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: GREETING }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  async function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const nextMessages = [...messages, { role: 'user', text: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: nextMessages.slice(0, -1),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');

      setMessages((prev) => [...prev, { role: 'bot', text: data.reply }]);
    } catch (err) {
      setError("I couldn't reach the server. Please try again in a moment.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="pcb-root">
      {isOpen && (
        <div className="pcb-panel" role="dialog" aria-label="Portfolio chat assistant">
          <div className="pcb-header">
            <div>
              <p className="pcb-header-title">{BOT_NAME}</p>
              <p className="pcb-header-subtitle">Usually replies in a few seconds</p>
            </div>
            <button
              className="pcb-icon-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="pcb-messages">
            {messages.map((m, i) => (
              <div key={i} className={`pcb-bubble-row pcb-bubble-row--${m.role}`}>
                <div className={`pcb-bubble pcb-bubble--${m.role}`}>{m.text}</div>
              </div>
            ))}

            {isLoading && (
              <div className="pcb-bubble-row pcb-bubble-row--bot">
                <div className="pcb-bubble pcb-bubble--bot pcb-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            {error && <p className="pcb-error">{error}</p>}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && !isLoading && (
            <div className="pcb-suggestions">
              {SUGGESTIONS.map((s) => (
                <button key={s} className="pcb-chip" onClick={() => sendMessage(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <form className="pcb-input-row" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={isLoading}
              maxLength={500}
            />
            <button type="submit" disabled={isLoading || !input.trim()} aria-label="Send message">
              ➤
            </button>
          </form>
        </div>
      )}

      <button
        className="pcb-toggle"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        aria-expanded={isOpen}
      >
        {isOpen ? '✕' : '💬'}
      </button>
    </div>
  );
}
