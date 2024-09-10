import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const cache = createCache({
  key: "css",
  prepend: true,
});

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={cache}>
          <App />
        </CacheProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  </StrictMode>,
);
