import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProjectVerse",
  description:
    "ProjectVerse is a next-generation project management, collaboration, CMS, and operational workspace platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}