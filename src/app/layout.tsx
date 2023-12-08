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
            <body
                className={inter.className}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <Header />
                <Container
                    component="main"
                    sx={{ flex: '1', paddingTop: '1.5rem' }}
                >
                    {children}
                </Container>
                <Footer />
            </body>
        </html>
    );
}
