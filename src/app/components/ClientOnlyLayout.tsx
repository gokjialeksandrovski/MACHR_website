'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ClientOnlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideFooterOnPaths = ['/user-dashboard'];

  return (
    <>
      {children}
      {!hideFooterOnPaths.includes(pathname) && <Footer />}
    </>
  );
}
