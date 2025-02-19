'use client'
import './globals.css';
import NavComponent from './ui/navs/NavComponent';
import FooterContact from './ui/footers/FooterComponent';
import { DataProvider } from './contexts/DataContext';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

//cache para personalización del Emotion
const cache = createCache({ key: 'mui', prepend: true, });

export default function RootLayout({ children }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <html lang="en">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
          <body className='flex-cols'>
            <header className='h-24'>
              <NavComponent />
            </header>
            <DataProvider>
              <main className='flex flex-wrap justify-evenly dark:bg-gray-800'>
                {children}
              </main>
            </DataProvider>
            <footer>
              <FooterContact />
            </footer>
          </body>
        </html>
      </ThemeProvider>
    </CacheProvider>
  );
}
