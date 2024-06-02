'use client'

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

const Sidebar = () => {
    const [isMenuOpened, setMenuOpen] = useState(false);

    const router = useRouter();

    const handleRoute = (route: string)  => {
        router.push(route);
        setMenuOpen(false);
    };

    return (
        <div className={`absolute px-2 py-3 h-full lg:hidden`}>
            <Button variant={`none`} onClick={() => setMenuOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-10 h-10 text-zinc-100`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </Button>
            <div className={`fixed z-20 h-full w-full flex flex-col justify-between py-5 space-y-10 ${isMenuOpened ? 'animate-slide-right inset-0' : 'hidden'} bg-zinc-800 backdrop-blur`}>
                <div>
                    <Button onClick={() => handleRoute('/')} variant={`ghost`} size={`xl`} className={`w-full text-3xl text-zinc-50`}>
                        Home
                    </Button>
                    <Button onClick={() => handleRoute('/about')} variant={`ghost`} size={`xl`} className={`w-full text-3xl text-zinc-50`}>
                        About Me
                    </Button>
                    <Button onClick={() => handleRoute('/projects')} variant={`ghost`} size={`xl`} className={`w-full text-3xl text-zinc-50`}>
                        My Projects
                    </Button>
                </div>
                <Button variant={`ghost`} className={`w-full text-3xl text-zinc-50`} onClick={() => setMenuOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-10 h-10`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </Button>

            </div>
        </div>
    );
};

export default Sidebar;
