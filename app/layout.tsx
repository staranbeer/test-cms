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
          <aside className="bg-white w-64 "></aside>
          <main className="bg-gray-100 flex-1 p-3">{children}</main>
        </div>
      </body>
    </html>
  );
}
