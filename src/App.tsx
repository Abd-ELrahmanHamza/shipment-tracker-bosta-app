import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import { useLanguage } from "./hooks/useLanguage";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  const { init } = useLanguage();
  useEffect(() => {
    init();
  }, [init]);
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
        </Routes>
      </QueryClientProvider>
    </HashRouter>
  );
}
