import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { WorkList } from './WorkList';
import { Work } from '@/models';

export interface FeaturedWorksProps {
  data: Work[];
}

export function FeaturedWorks({ data }: FeaturedWorksProps) {
  return (
    <Box component="section" sx={{ pt: '40px', pb: '80px' }}>
      <Container maxWidth="md">
        <Typography component="h3" variant="h5" sx={{ mb: '8px', textAlign: { xs: 'center', md: 'left' } }}>
          Featured works
        </Typography>

        <WorkList data={data} />
      </Container>
    </Box>
  );
}
