import { MainLayout } from '@/components/layout';
import { Box, Container } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Container maxWidth="xs">This is container</Container>
      <Container>This is container</Container>
      <Container maxWidth="md">This is container</Container>
      <Container maxWidth="lg">This is container</Container>
      <Container maxWidth="xl">This is container</Container>
    </Box>
  );
}

Home.Layout = MainLayout;
