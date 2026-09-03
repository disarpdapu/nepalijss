import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PageShell = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen flex-col bg-background">
    <Navbar />
    <main id="main" tabIndex={-1} className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

export default PageShell;
