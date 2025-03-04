import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Visions to Visuals | Trusted Websites for your Business",
  description: "We specialize in web design, development and branding. Let's take your awesome business to the next level.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden bg-black">
      <head>
        <Script src="https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz" strategy="beforeInteractive" />
        <Script src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.8.0-min.js.gz" strategy="beforeInteractive" />
        <Script id="amplitude-init" strategy="afterInteractive">
          {`
            window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1}));
            window.amplitude.init('e4f679d7fba1f871c1dc78e0bee4ac47', {"autocapture":{"elementInteractions":true}});
          `}
        </Script>
      </head>
      <body className="font-tt-hoves antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
