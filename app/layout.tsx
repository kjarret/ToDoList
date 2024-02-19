import type { Metadata } from "next";
import "./globals.css";

import { ChakraProvider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "ToDoList",
  description: "ToDoList using NextJs, React, MongoDB, Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
