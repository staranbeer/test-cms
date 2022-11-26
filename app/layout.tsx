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
        <div className="flex min-h-screen overflow-hidden">
          <main className="bg-white flex-1 ">{children}</main>
        </div>
      </body>
    </html>
  );
}
