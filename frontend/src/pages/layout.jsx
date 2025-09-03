import { Outlet } from "react-router-dom";
import Navbar from "../components/jsx/navbar";
import Footer from "../components/jsx/footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-dvh 
                    bg-purple-50 dark:bg-slate-950
                    text-slate-950 dark:text-purple-50
                    transition-colors duration-500">
      
      <Navbar />

      <main className="flex-1 w-full px-4 sm:px-8 lg:px-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
