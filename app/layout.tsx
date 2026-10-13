import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Axion Rental | Management Demo', description: 'Event and rental management demo by Axion Creatives' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
