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
      <main className='store-cart-layout flex-grow'>
        {children}
      </main>
    </>
  );
};

export default Layout;
