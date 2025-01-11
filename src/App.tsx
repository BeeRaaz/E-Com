import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  const { toggleTheme } = useContext(ThemeContext) || {};

  return (
    <>
      <CartProvider>
        <div className="w-full relative overflow-hidden">
          <span
            className="fixed z-[99999] top-[calc(85dvh)] right-10 w-10 h-10 rounded-full bg-slate-900 cursor-pointer border border-slate-900 dark:bg-white"
            onClick={toggleTheme}
          ></span>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </>
  );
}

export default App;
