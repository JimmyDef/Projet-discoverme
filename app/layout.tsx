import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Développeur Web React TypeScript",
  description: "Portfolio de développeur d'application web spécialisé en React, TypeScript et Next.js. Diplômé d'OpenClassrooms (RNCP niveau 6).",
  keywords: "développeur web, react, typescript, next.js, javascript, portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
