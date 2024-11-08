import { Metadata } from "next";
import "./css/style.css";

import { Kode_Mono } from "next/font/google";

// 添加 Script 组件的导入
import Script from "next/script";

const inter = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Minecraft: Revolutionary Game Generation with Oasis AI | Play Now",
  description:
    "Experience the future of gaming with AI Minecraft powered by Oasis AI. Play the first real-time AI-generated Minecraft-style game by Decart AI.",
  keywords:
    "ai minecraft, oasis decart ai, oasis ai, minecraft ai, oasis ai minecraft, oasis minecraft, ai minecraft oasis",
  icons: {
    icon: "/images/favicons/favicon.ico",
    apple: "/images/favicons/apple-touch-icon.png",
  },
  openGraph: {
    title:
      "AI Minecraft: Revolutionary Game Generation with Oasis AI | Play Now",
    description:
      "Experience the future of gaming with AI Minecraft powered by Oasis AI. Play the first real-time AI-generated Minecraft-style game by Decart AI.",
    type: "website",
    url: "https://aiminecraft.cc",
    images: [
      {
        url: "/images/og-graph.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Minecraft: Revolutionary Game Generation with Oasis AI | Play Now",
    site: "https://aiminecraft.cc",
    description:
      "Experience the future of gaming with AI Minecraft powered by Oasis AI. Play the first real-time AI-generated Minecraft-style game by Decart AI.",
    images: [
      {
        url: "/images/og-graph.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 添加 Google Analytics 跟踪代码 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-NREP572H9F`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NREP572H9F');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} font-inter antialiased bg-black text-white tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
