import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TripUp Demo",
  description: "An interactive mobile prototype for planning trips together.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
