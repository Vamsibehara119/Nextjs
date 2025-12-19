// app/layout.tsx
import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: 16, background: "#eee" }}>
          <h2>🍔 Food App</h2>
        </header>
        <main style={{ padding: 16 }}>{children}</main>
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
