import type { Metadata } from "next";
import "./globals.css";
import Layout from "../components/LayoutQi";

export const metadata: Metadata = {
  title: "Essência Qi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
