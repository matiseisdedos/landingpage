import './globals.css'
import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Matias Seisdedos - Frontend Developer',
  description: 'Portfolio of Matias Seisdedos.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='max-w-full overfow-hidden'>{children}</body>
      
      {/* 
        Desactivado por error content hidration
        <SpeedInsights />
      */}
      <Analytics />
    </html>
  )
}
