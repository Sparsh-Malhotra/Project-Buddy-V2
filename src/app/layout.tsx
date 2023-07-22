import { inter } from "@/core/Fonts";
import "./globals.css";

export const metadata = {
  title: "Project Buddy",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
