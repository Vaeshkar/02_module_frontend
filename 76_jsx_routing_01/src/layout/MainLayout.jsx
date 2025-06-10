import { Outlet } from "react-router";
import { Navbar, Footer } from "../components/shared";

export function MainLayout() {
  return (
    <div className="flex w-full flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}