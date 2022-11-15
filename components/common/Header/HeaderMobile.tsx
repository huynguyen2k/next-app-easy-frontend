import * as React from 'react';
import { Box } from '@mui/material';

export default function HeaderMobile() {
  return <Box sx={{ display: { xs: 'block', md: 'none' } }}>Header mobile</Box>;
}
