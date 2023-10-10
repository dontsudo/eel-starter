import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PlaygroundPage from "@/app/playground/page";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import "@/styles/globals.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlaygroundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
);
