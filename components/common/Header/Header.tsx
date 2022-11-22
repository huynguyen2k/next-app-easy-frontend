import { Box } from '@mui/material';
import * as React from 'react';
import { HeaderDesktop } from './HeaderDesktop';
import { HeaderMobile } from './HeaderMobile';

export function Header() {
  return (
    <Box component="header">
      <HeaderDesktop />
      <HeaderMobile />
    </Box>
  );
}
