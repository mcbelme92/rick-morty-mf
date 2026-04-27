import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { layout } from "@/styles/tokens";

export default function Layout({ children, globalSearch, setGlobalSearch }) {
  console.log(globalSearch);
  return (
    <div className="min-h-screen flex flex-col bg-surface dark:bg-surfaceDark">
      <Navbar search={globalSearch} onSearchChange={setGlobalSearch} />

      <main className={`${layout.container} flex-1`}>{children}</main>

      <Footer />
    </div>
  );
}
