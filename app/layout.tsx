import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#080B20",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "For Farduus Xuseen ❤️",
  description:
    "Farriin qaas ah oo qalbigayga ka timid oo ku socota Farduus Xuseen. Hal Qalbi, Hal Jacayl, Hal Mustaqbal. ❤️",
  keywords: ["Farduus Xuseen", "Love Letter", "Farriin Jacayl", "Farduus Forever"],
  authors: [{ name: "Your Love" }],
  creator: "Your Love",
  publisher: "Farduus Forever",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://farduus-forever.vercel.app"
  ),
  openGraph: {
    title: "For Farduus Xuseen ❤️",
    description:
      "Farriin qaas ah oo qalbigayga ka timid oo ku socota Farduus Xuseen. Hal Qalbi, Hal Jacayl, Hal Mustaqbal. ❤️",
    type: "website",
    locale: "so_SO",
    siteName: "Farduus Forever ❤️",
    images: [
      {
        url: "/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "For Farduus Xuseen ❤️ — A Letter From My Heart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "For Farduus Xuseen ❤️",
    description:
      "Farriin qaas ah oo qalbigayga ka timid oo ku socota Farduus Xuseen. Hal Qalbi, Hal Jacayl, Hal Mustaqbal. ❤️",
    images: ["/images/og-preview.png"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="so" className="scroll-smooth">
      <body className="bg-midnight text-white antialiased selection:bg-rose-romantic selection:text-white overflow-x-hidden min-h-[100dvh] w-full max-w-[100vw]">
        {children}
      </body>
    </html>
  );
}
