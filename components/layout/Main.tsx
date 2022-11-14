import { LayoutProps } from '@/pages/_app';
import { Box, Stack } from '@mui/material';
import { Footer, Header } from '../common';

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack>
      <Header />
      <Box component="main">{children}</Box>
      <Footer />
    </Stack>
  );
}
