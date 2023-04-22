import '@/styles/globals.css';
import React from 'react';
import QueryProvider from '@/provider/query.provider';
import { StoreProvider } from '@/provider/store.provider';
import NavbarComponent from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js Application Template</title>
      </head>
      <body className="overflow-y-scroll border-zinc-800 bg-black p-8">
        <div className="container mx-auto mt-20">
          <div className="col-start-3 space-y-6">
            <StoreProvider>
              <QueryProvider>
                <NavbarComponent />
                {children}
              </QueryProvider>
            </StoreProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
