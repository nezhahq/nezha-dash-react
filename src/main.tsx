import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n";
import { ThemeProvider } from "./components/ThemeProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { MotionProvider } from "./components/motion/motion-provider";
import { WebSocketProvider } from "./context/websocket-provider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MotionProvider>
      <ThemeProvider storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <WebSocketProvider url="/api/v1/ws/server">
            <App />
            <Toaster
              duration={1000}
              toastOptions={{
                classNames: {
                  default:
                    "w-fit rounded-full px-2.5 py-1.5 bg-neutral-100 border border-neutral-200 backdrop-blur-xl shadow-none",
                },
              }}
              position="top-center"
              className={"flex items-center justify-center"}
            />
            <ReactQueryDevtools />
          </WebSocketProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </MotionProvider>
  </React.StrictMode>,
);
