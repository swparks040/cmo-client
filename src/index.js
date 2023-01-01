import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CMO } from "./components/CMO";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <CMO />
  </BrowserRouter>
);
