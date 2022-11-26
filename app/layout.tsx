import React from "react";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <aside></aside>
        <main className="p-3">{children}</main>
      </body>
    </html>
  );
}
