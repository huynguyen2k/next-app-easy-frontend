import { Post } from '@/models';
import { Box, Card, CardContent, CardHeader, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export interface BlogItemProps {
  data: Post;
}

export function BlogItem({ data }: BlogItemProps) {
  return (
    <Card>
      <CardHeader
        title={
          <MuiLink component={Link} href={`/blog/${data.slug}`}>
            {data.title}
          </MuiLink>
        }
        subheader={
          <Stack
            direction="row"
            sx={{
              mt: '4px',
              alignItems: 'center',
            }}
          >
            <Typography component="span" variant="body1">
              {data.created}
            </Typography>
            <Box sx={{ mx: '16px', height: '16px', borderRight: '1px solid', borderColor: 'text.primary' }} />
            <Typography component="span" variant="body1">
              {data.topics.join(', ')}
            </Typography>
          </Stack>
        }
      />
      <CardContent>
        <Typography component="p" variant="body1">
          {data.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
