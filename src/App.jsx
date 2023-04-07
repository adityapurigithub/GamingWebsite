import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Category from "./Components/Category";

function App() {
  return (
    <div className="App bg-slate-900 ">
      <div className="bg-banner bg-cover bg-center ">
        <div className="bg-banner-gradient">
          <Navbar />
          <Banner />
        </div>
        <div className="banner-fadeBottom" />
      </div>
      <section className="px-6 relative z-0">
        <Cards />
        <Category />
      </section>
      <Footer />
    </div>
  );
}

export default App;
