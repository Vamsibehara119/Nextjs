// app/layout.tsx
import Script from "next/script";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import ErrorBoundary from "@/ErrorBoundary/ErrorBoundary"
import FallbackUI from "@/ErrorBoundary/FallbackUI";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ErrorBoundary fallback={<FallbackUI area="Header" />}>
          <Header />
        </ErrorBoundary>

        <ErrorBoundary fallback={<FallbackUI area="Main" />}>
         <main className="app-shell__main grow">{children}</main>
        </ErrorBoundary>

        <ErrorBoundary fallback={<FallbackUI area="Footer" />}>
          <Footer />
        </ErrorBoundary>

        <Script
          id="ms-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "uke6z7kuoi");
      `,
          }}
        />
      </body>
    </html>
  );
}
