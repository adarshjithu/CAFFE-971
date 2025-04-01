import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "flatpickr/dist/flatpickr.css";
import App from "./App.tsx";
import {Toaster} from 'react-hot-toast'
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import {Provider} from 'react-redux'
import { store } from "./app/store.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
    <Provider store={store}>

      <AppWrapper>
      <Toaster/>
        <App />
      </AppWrapper>
    </Provider>
    </ThemeProvider>
  </StrictMode>,
);
