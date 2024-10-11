import Header from "@/ui/Header";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container m-auto">
        <Header />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </BrowserRouter>
  );
}
