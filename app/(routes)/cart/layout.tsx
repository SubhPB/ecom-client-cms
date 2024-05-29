// Byimaan

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Store Cart",
  description: "Customer's shopping cart.",
};

const Layout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <>
      <main className='store-cart-layout flex-grow px-4'>
        {children}
      </main>
    </>
  );
};

export default Layout;
