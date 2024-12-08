import type { Metadata } from "next";
import "./globals.css";

import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "NexaCode",
  description: "Created by Nexacode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
