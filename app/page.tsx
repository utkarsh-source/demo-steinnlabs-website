'use client';

import { Navbar } from './components';
import { Home } from './home/Home';

/* eslint-disable import/no-default-export */

export default function Page() {
  return (
    <div className="overflow-hidden min-h-screen scrollbar-hide">
      <Navbar />
      <Home />
    </div>
  );
}
