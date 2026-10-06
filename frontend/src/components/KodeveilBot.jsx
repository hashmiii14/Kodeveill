import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, User } from "lucide-react";

import { WHO_WE_ARE, SERVICES, PRICING_PLANS } from "@/data/content";

const KNOWLEDGE_BASE = [
  {
    keywords: ["hi", "hello", "hey", "start"],
    response: "Hello! I am Kodeveil Bot. I can answer questions about our services, pricing, process, or portfolio. How can I help you today?",
  },
  {
    keywords: ["price", "pricing", "cost", "how much", "plans"],
    response: `We offer transparent, fixed-price plans:\n- **Basic Web Presence**: ${PRICING_PLANS[0].price}\n- **Professional Business**: ${PRICING_PLANS[1].price}\n- **Elite E-Commerce**: ${PRICING_PLANS[2].price}\nLet me know if you need details on a specific plan!`,
  },
  {
    keywords: ["services", "what do you do", "offer", "build"],
    response: `We specialize in:\n${SERVICES.slice(0, 4).map(s => `- ${s.title}`).join("\n")}\n...and much more, including UI/UX design and custom web apps!`,
  },
  {
    keywords: ["contact", "hire", "email", "reach"],
    response: "You can easily reach out to us through the contact form at the bottom of the page, or email our team directly to discuss your project requirements.",
  },
  {
    keywords: ["fast", "speed", "performance", "lighthouse"],
    response: "Performance is our priority. We engineer websites for sub-second load times and target 95+ Google Lighthouse speed scores without using bloated templates.",
  },
  {
    keywords: ["who", "about", "mission"],
    response: WHO_WE_ARE.mission,
  },
  {
    keywords: ["portfolio", "work", "projects", "examples"],
    response: "We have delivered over 50+ successful projects, including luxury e-commerce for Oakmora, corporate platforms for VYU Industries, and medical portals for Faiz Dental. Check our Portfolio section for more!",
  }
];

function getBotResponse(input) {
  const lowerInput = input.toLowerCase();
  
  for (const entry of KNOWLEDGE_BASE) {
    if (entry.keywords.some(kw => lowerInput.includes(kw))) {
      return entry.response;
    }
  }

  return "I'm not exactly sure about that, but our team at Kodeveil would love to help! Please use the contact form to reach out directly.";
}

export const KodeveilBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi there! I'm Kodeveil Bot. Ask me anything about our services or pricing." }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { role: "user", content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate thinking delay
    setTimeout(() => {
      const botResponse = { role: "bot", content: getBotResponse(userMessage.content) };
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 transition-transform ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Open Kodeveil Bot"
      >
        <Bot className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed sm:bottom-6 sm:left-6 bottom-4 left-4 z-50 flex sm:h-[550px] h-[calc(100dvh-2rem)] sm:w-[380px] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-slate-200 dark:bg-[#15161d] dark:ring-white/10 dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-indigo-600 px-4 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Kodeveil Bot</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-indigo-100 font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-indigo-100 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-[#0D0E12]">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${msg.role === 'user' ? 'bg-slate-200 text-slate-600 dark:bg-[#1a1b23] dark:text-slate-400' : 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400'}`}>
                    {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-sm' : 'bg-white text-slate-800 shadow-sm ring-1 ring-slate-200 dark:bg-[#15161d] dark:text-slate-200 dark:ring-white/10 rounded-tl-sm'}`}>
                    {/* Render line breaks */}
                    {msg.content.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line.includes('**') ? (
                          <span dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        ) : (
                          line
                        )}
                        {i !== msg.content.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="border-t border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-[#15161d]">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-4 pr-12 text-sm text-slate-900 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-white/10 dark:bg-[#1a1b23] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-indigo-500"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white transition-colors hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
