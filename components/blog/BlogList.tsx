import { Post } from '@/models';
import { Grid } from '@mui/material';
import { BlogItem } from './BlogItem';

export interface BlogListProps {
  data: Post[];
}

export function BlogList({ data }: BlogListProps) {
  return (
    <Grid container rowSpacing="16px">
      {data.map(post => (
        <Grid key={post.id} item xs={12}>
          <BlogItem data={post} />
        </Grid>
      ))}
    </Grid>
  );
}
