import { Post } from '@/models';
import { getBlogList } from '@/utils';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';

export interface BlogDetailPageProps {
  data: Post;
}

export default function BlogDetailPage({ data }: BlogDetailPageProps) {
  return (
    <div>
      <h1>{data.title}</h1>
      <h3>{data.author?.name}</h3>
      <p>{data.desc}</p>
    </div>
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
