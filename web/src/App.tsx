import { useEffect } from "react";
import { useStore } from "./store.js";
import { Sidebar } from "./components/Sidebar.js";
import { ChatView } from "./components/ChatView.js";
import { TopBar } from "./components/TopBar.js";
import { HomePage } from "./components/HomePage.js";

export default function App() {
  const darkMode = useStore((s) => s.darkMode);
  const currentSessionId = useStore((s) => s.currentSessionId);
  const sidebarOpen = useStore((s) => s.sidebarOpen);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="h-screen flex font-sans-ui bg-cc-bg text-cc-fg antialiased">
      {/* Sidebar */}
      <div
        className={`shrink-0 transition-all duration-200 ${
          sidebarOpen ? "w-[260px]" : "w-0"
        } overflow-hidden`}
      >
        <Sidebar />
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar />
        <div className="flex-1 overflow-hidden">
          {currentSessionId ? (
            <ChatView sessionId={currentSessionId} />
          ) : (
            <HomePage />
          )}
        </div>
      </div>
    </div>
  );
}
