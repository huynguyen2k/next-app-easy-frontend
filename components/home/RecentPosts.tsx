import * as React from 'react';
import { Box, Stack, Container, Grid, Typography } from '@mui/material';
import { PostCard } from './PostCard';
import { Post } from '@/models';

export interface RecentPostsProps {
  data: Post[];
}

export function RecentPosts({ data }: RecentPostsProps) {
  return (
    <Box component="section" sx={{ py: '32px', bgcolor: 'secondary.light' }}>
      <Container maxWidth="md">
        <Stack
          direction="row"
          sx={{ mb: '8px', alignItems: 'center', justifyContent: { xs: 'center', md: 'space-between' } }}
        >
          <Typography component="h3" variant="h5">
            Recent posts
          </Typography>
          <Typography component="span" variant="body1" sx={{ display: { xs: 'none', md: 'inline-block' } }}>
            View all
          </Typography>
        </Stack>

        <Grid container spacing="20px">
          {data.map(x => (
            <Grid key={x.id} item xs={12} md={6}>
              <PostCard data={x} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
