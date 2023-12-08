import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Elixirs of Hogwarts',
    description:
        'Unveiling the Mystique of Magical Potions from the Wizarding World',
    icons: '/images/magicPotion.png',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className + ' flex flex-col min-h-[100vh]'}>
                <Header />
                <Container className="flex-1 pt-[1.5rem]" component="main">
                    {children}
                </Container>
                <Footer />
            </body>
        </html>
    );
}
