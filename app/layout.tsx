import type { Metadata } from "next";
import { RuntimeGrid } from "@/components/global/runtime-grid";
import { Navigation } from "@/components/global/navigation";
import { Providers } from "@/app/providers";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "DCORE - Adaptive Systems & Runtime Intelligence",
  description: "Beyond Static Systems. Infrastructure-grade intelligence platform for adaptive runtime systems.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-900 text-white antialiased">
        <RuntimeGrid />
        <Providers>
          <Navigation />
          <main className="relative z-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}