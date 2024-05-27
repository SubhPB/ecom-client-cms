// Byimaan

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Store Products",
  description: "All products of the store.",
};

const Layout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <>
      <main className='store-products-layout relative flex-grow-[1] '>
        {children}
      </main>
    </>
  );
};

export default Layout;
