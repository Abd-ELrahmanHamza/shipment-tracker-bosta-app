import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useLanguage } from "./hooks/useLanguage";
import { useEffect } from "react";

export default function App() {
  const { init } = useLanguage();
  useEffect(() => {
    init();
  }, [init]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
