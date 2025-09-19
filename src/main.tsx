import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "@/components/ui/provider"; // alias '@' must resolve to 'src'
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
