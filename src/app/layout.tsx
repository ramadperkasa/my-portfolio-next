'use client';

import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from './section/navbar/navbar';
// Flowbite
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';

const inter = Inter({ subsets: ['latin'] });

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
        <meta name='description' content='Rama Dwiyantara Perkasa Portfolio' />
        <meta name='author' content='Rama Dwiyantara Perkasa' />
        <meta name='keywords' content='Rama Dwiyantara Perkasa, Portfolio' />
        <link rel='icon' href='/favicon.ico' />
        <title>Rama Dwiyantara Perkasa</title>
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
