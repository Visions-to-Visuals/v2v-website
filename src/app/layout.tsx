import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-tt-hoves antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
