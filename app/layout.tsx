'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState<number>(0);

  return (
    <html>
      <head></head>
      <body>
        <div>layout header</div>
        <div>{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <Link href="/dir1">dir 1</Link>
        <Link href="/dir2">dir 2</Link>
        <div>{children}</div>
      </body>
    </html>
  );
}
