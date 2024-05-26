import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import { Poppins } from 'next/font/google';

import './globals.css';
import bgImg from '@/resources/background.jpg';

import Sidebar from '@/components/sidebar';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Homepage',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body className={`relative ${poppins.className} flex h-screen`}>
                <Sidebar />
                {children}
                <Image className={`absolute w-full h-full object-cover -z-10`} src={bgImg} alt={`background-img`} />
            </body>
        </html>
    );
  }