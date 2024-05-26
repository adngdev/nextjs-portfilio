import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import { Poppins } from 'next/font/google';

import './globals.css';
import bgImg from '@/resources/background.jpg';

import Sidebar from '@/components/sidebar';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {title: 'Homepage' };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body className={`relative h-screen flex  ${poppins.className}`}>
                <Sidebar />
                <div className={`w-full h-full px-5 pt-20 pb-10`}>
                    {children}
                </div>
                <Image className={`absolute w-full h-full object-cover -z-10`} src={bgImg} alt={`background-img`} />
            </body>
        </html>
    );
  }
