import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useLanguage } from "./hooks/useLanguage";
import { useEffect } from "react";
import { ShipmentProvider } from "./Contexts/Shipments";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  const { init } = useLanguage();
  useEffect(() => {
    init();
  }, [init]);
  return (
    <QueryClientProvider client={queryClient}>
      <ShipmentProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ShipmentProvider>
    </QueryClientProvider>
  );
}
