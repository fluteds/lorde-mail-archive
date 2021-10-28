import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="font-semibold text-yellow-900 dark:text-yellow pr-6 py-4">HOME</a>
      </Link>
      <Link href="/about">
        <a className="font-semibold text-yellow-900 dark:text-yellow px-6 py-4">ABOUT</a>
      </Link>
      <Link href="https://www.lorde.co.nz/sign-up">
        <a className="font-semibold text-yellow-900 dark:text-yellow px-6 py-4">MAILING LIST</a>
      </Link>
    </nav>
  );
};

export default Navigation;
