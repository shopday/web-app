import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <main className="bg-brand">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
