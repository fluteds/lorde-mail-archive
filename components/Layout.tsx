import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://lorde-mail-archive.vercel.app/';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8">
        <div className="text-yellow-900 max-w-5xl px-8 mx-auto">
          Lorde Mail Archive. Built by{' '}
          <a
            className="text-yellow-900 dark:text-white"
            href="https://github.com/fluteds"
          >
            Fluteds
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
