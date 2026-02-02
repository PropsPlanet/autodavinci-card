import React from 'react';
import { BusinessCard } from './components/BusinessCard';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-navy-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content */}
      <main className="z-10 w-full max-w-[1400px] flex flex-col items-center justify-center gap-8">
        
        <BusinessCard />
        
        <p className="text-slate-500 text-sm font-medium tracking-wider uppercase animate-pulse mt-8">
          Kliknij wizytówkę, aby odwrócić
        </p>

      </main>
    </div>
  );
}