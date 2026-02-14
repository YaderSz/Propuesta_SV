import "./globals.css";
import LayoutClientWrapped from "./layout/LayoutClientWrapped";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feliz 14 Priscila Mi Amor",
  icons: {
    icon: "/amor.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
      <LayoutClientWrapped>{children}</LayoutClientWrapped>
      </body>
    </html>
  );
}
