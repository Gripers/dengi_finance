import { FC, PropsWithChildren } from 'react';

import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
