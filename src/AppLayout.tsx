import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Grommet } from "grommet";
import { myTheme } from "./config/appInit";
import { Provider } from "react-redux";
import store from "./lib/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Provider store={store}>
          <Grommet theme={myTheme}>
            <main className="bg-brand">
              <Header />
              <Outlet />
              <Footer />
            </main>
            <ToastContainer />
          </Grommet>
        </Provider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
