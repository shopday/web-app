import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Grommet } from "grommet";
import { myTheme } from "./config/appInit";
import { Provider } from "react-redux";
import store from "./lib/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { persistStore } from "redux-persist";

import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";

function App() {
  let persistor = persistStore(store);

  return (
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Grommet theme={myTheme}>
            <main className="bg-brand">
              <Header />
              <Outlet />
              <Footer />
            </main>
            <ToastContainer />
          </Grommet>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
