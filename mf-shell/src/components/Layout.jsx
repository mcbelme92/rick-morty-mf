import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

export default function Layout({ children, globalSearch, setGlobalSearch }) {
  console.log(globalSearch);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar search={globalSearch} onSearchChange={setGlobalSearch} />

      <main className="flex-1 flex">{children}</main>

      <Footer />
    </div>
  );
}
