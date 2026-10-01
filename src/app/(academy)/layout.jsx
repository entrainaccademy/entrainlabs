import Navbar from "@/components/premium/navbar";
import Footer from "@/components/premium/footer";
import FloatingCTA from "@/components/ui/floating-cta";

export default function AcademyLayout({ children }) {
  return (
    <div className="min-h-full flex flex-col antialiased">
      <main className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
        <Navbar />

        <div className="pt-20">{children}</div>

        <Footer />
      </main>
      <FloatingCTA />
    </div>
  );
}
