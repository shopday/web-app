import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HeroTop from "./layout/homepage/HeroTop";
import LatestEnterprise from "./layout/homepage/LatestEnterprise";

function App() {
  return (
    <main className="bg-brand">
      <Header />
      <HeroTop />
      <LatestEnterprise />
      <Footer />
    </main>
  );
}

export default App;
