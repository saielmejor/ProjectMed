import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./AppRoutes.tsx";

import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate.tsx";
import { Toaster } from "sonner";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}> 
      <Auth0ProviderWithNavigate>
        <AppRoutes />
        <Toaster visibleToasts={1} position="top-right" richColors></Toaster>
      </Auth0ProviderWithNavigate>  
      </QueryClientProvider>
     
    </Router>
  </React.StrictMode>
);
