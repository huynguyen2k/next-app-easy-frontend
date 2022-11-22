import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { MainLayout } from '@/components/layout';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { getBlogList } from '@/utils';
import { Post } from '@/models';
import { BlogList } from '@/components/blog';

export interface BlogPageProps {
  data: Post[];
}

export default function BlogPage({ data }: BlogPageProps) {
  return (
    <Box sx={{ pt: '90px', pb: '55px' }}>
      <Container maxWidth="md">
        <Typography
          component="h1"
          sx={{
            mb: '55px',
            fontWeight: 700,
            fontSize: '44px',
            lineHeight: '60px',
          }}
        >
          Blog
        </Typography>

        <BlogList data={data} />
      </Container>
    </Box>
  );
}

BlogPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const blogList = await getBlogList();

  return {
    props: {
      data: blogList,
    },
  };
};
