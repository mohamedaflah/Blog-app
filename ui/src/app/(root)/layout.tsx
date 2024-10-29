// import Footer from "@/components/pages-components/Footer";
// import Header from "@/components/pages-components/Header";

export default function HomePageLayout({
  children,
  header,
  footer,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}>) {
  return (
    <main className="w-full">
      {header}
      {children}
      {footer}
    </main>
  );
}
