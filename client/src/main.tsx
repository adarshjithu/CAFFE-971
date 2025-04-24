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
import NetworkWrapper from "./layout/NetworkWrapper.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
    <Provider store={store}>

      <AppWrapper>
      <Toaster/>
      <NetworkWrapper>

        <App />
      </NetworkWrapper>
      </AppWrapper>
    </Provider>
    </ThemeProvider>
  </StrictMode>,
);
