import { Post } from '@/models';
import { getBlogList } from '@/utils';
import { Container } from '@mui/material';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useEffect } from 'react';

export interface BlogDetailPageProps {
  data: Post;
}

export default function BlogDetailPage({ data }: BlogDetailPageProps) {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = '/prism.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container maxWidth="md">
      <div className="line-numbers" dangerouslySetInnerHTML={{ __html: data.htmlContent ?? '' }} />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogList = await getBlogList();

  return {
    paths: blogList.map(blog => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogDetailPageProps> = async (context: GetStaticPropsContext) => {
  const blogList = await getBlogList();
  const slug = context.params?.slug;

  if (!slug) return { notFound: true };

  const blog = blogList.find(x => x.slug === slug);
  if (!blog) return { notFound: true };

  return {
    props: {
      data: blog,
    },
  };
};
