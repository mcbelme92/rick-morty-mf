import Footer from "@/features/shell/components/Footer";
import Navbar from "@/features/shell/components/NavBar";
import { layout } from "@/styles/tokens";

export default function Layout({ children, globalSearch, setGlobalSearch }) {
  return (
    <div className="min-h-screen flex flex-col bg-surface dark:bg-surfaceDark">
      <Navbar search={globalSearch} onSearchChange={setGlobalSearch} />

      <main className={`${layout.container} flex-1`}>{children}</main>

      <Footer />
    </div>
  );
}
