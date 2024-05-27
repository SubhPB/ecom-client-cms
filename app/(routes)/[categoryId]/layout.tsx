// components/Layout.tsx
import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Store Category",
  description: "Category page",
};

const Layout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <>
      <main className='store-category-layout w-full'>
        {children}
      </main>
    </>
  );
};

export default Layout;
