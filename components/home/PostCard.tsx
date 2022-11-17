import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Post } from '@/models';

export interface PostCardProps {
  data: Post;
}

export function PostCard({ data }: PostCardProps) {
  return (
    <Box sx={{ borderRadius: '4px', p: '24px', pb: '32px', bgcolor: 'common.white' }}>
      <Typography component="h3" variant="h3" sx={{ fontWeight: 700, fontSize: '26px', lineGeight: '38px' }}>
        {data.title}
      </Typography>

      <Stack
        direction="row"
        sx={{ my: '16px', alignItems: 'center', fontWeight: 400, fontSize: '18px', lineHeight: '26px' }}
      >
        <Typography>{data.created}</Typography>
        <Box sx={{ width: '1px', height: '20px', bgcolor: 'common.black', mx: '24px' }} />
        <Typography>{data.topics.join(', ')}</Typography>
      </Stack>

      <Typography sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '24px' }}>{data.desc}</Typography>
    </Box>
  );
}
