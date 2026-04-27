import "./App.css";
import { AppRouter } from "./AppRouter";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
