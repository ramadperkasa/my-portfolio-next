'use client';

import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from './section/navbar/navbar';

const inter = Inter({ subsets: ['latin'] });

// Flowbite
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className={inter.className}>
        <main>
          <Navbar />
          <div className='mx-auto h-full w-full'>
            <div>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
