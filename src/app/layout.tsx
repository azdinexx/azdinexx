import Grain from '@/layout/grain';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Footer from '@/components/footer';

const inter = Poppins({
  weight: ['300', '200', '400', '500', '600', '700', '800', '900', '100'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Azdinexx',
  description:
    'the porfolio website for Azdine Bouali , a fullstack developer from morocco',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className} style={{ backgroundColor: '#eee' }}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
