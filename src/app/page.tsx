'use client'

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
      <div className={`w-full h-full flex justify-center items-center`}>
          <div className={`space-y-5`}>
              <div className={`space-y-1 text-zinc-50 text-2xl md:text-5xl`}>
                  <p>Hi,</p>
                  <p>I'm <span className={`font-bold`}>Jamie,</span></p>
                  <p>Fullstack Web Developer<span className={`font-bold`}>.</span></p>
              </div>
              <Button className={`flex gap-2`} onClick={() => console.log('hheh')}>
                  <span>Check Out My Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
              </Button>
          </div>
      </div>
  );
}
