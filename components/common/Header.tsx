import * as React from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';

export function Header() {
  return (
    <Box component="header">
      <Link href="/">Home</Link>
      <Link href="/works">Works</Link>
      <Link href="/blog">Blog</Link>
    </Box>
  );
}
