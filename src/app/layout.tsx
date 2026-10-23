import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { FarmerProvider } from '@/context/FarmerContext';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'किसान सहायक (Kisan Sahayak) — Multilingual Farmer Platform',
  description: 'Complete Indian Farmer Assistance Platform: Crop Calendar, AI Crop Doctor, Live Mandi Rates, Weather & Spray Advisories, Govt Schemes, Expert Consultations.',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#166534',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌾</text></svg>" />
      </head>
      <body className="min-h-screen bg-cream-50 text-slate-900 pb-20 lg:pb-8 selection:bg-kisan-200">
        <LanguageProvider>
          <FarmerProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5">
                {children}
              </main>
              <BottomNav />
            </div>
          </FarmerProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
