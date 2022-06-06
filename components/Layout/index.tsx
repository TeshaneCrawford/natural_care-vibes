import React from 'react';

import Head from './Head';
import Footer from './Footer';
import Navbar from './Navbar';


type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Head title={'Natural Care Vibes'} />
      <div>
        <nav>
          <Navbar />
        </nav>
        <main>
            {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Layout;