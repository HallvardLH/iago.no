import React, { ReactNode } from 'react';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar logo="/logo.svg"/>

      <main>
        {children}
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} My Website</p>
      </footer>
    </>
  );
};

export default Layout;