import Footer from "@/components/pages-components/Footer";
import Header from "@/components/pages-components/Header";

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
