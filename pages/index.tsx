import { MetaTags } from '@/components/common';
import { HeroSection, RecentPosts } from '@/components/home';
import { MainLayout } from '@/components/layout';
import { FeaturedWorks } from '@/components/work';
import { Post, Work } from '@/models';
import { Box } from '@mui/material';

const postList: Post[] = [
  {
    id: 1,
    title: 'Making a design system from scratch',
    created: '12 Feb 2020',
    topics: ['Design', 'Pattern'],
    desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    author: '',
  },
  {
    id: 2,
    title: 'Making a design system from scratch',
    created: '12 Feb 2020',
    topics: ['Design', 'Pattern'],
    desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    author: '',
  },
  {
    id: 3,
    title: 'Making a design system from scratch',
    created: '12 Feb 2020',
    topics: ['Design', 'Pattern'],
    desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    author: '',
  },
  {
    id: 4,
    title: 'Making a design system from scratch',
    created: '12 Feb 2020',
    topics: ['Design', 'Pattern'],
    desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    author: '',
  },
];

const workList: Work[] = [
  {
    id: 1,
    title: 'Designing Dashboards',
    shortDesc:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    fullDesc: '',
    tags: ['Dashboard'],
    createdAt: '2022',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    title: 'Vibrant Portraits of 2020',
    shortDesc:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    fullDesc: '',
    tags: ['Illustration'],
    createdAt: '2018',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    title: '36 Days of Malayalam type',
    shortDesc:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    fullDesc: '',
    tags: ['Typography'],
    createdAt: '2018',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];

export default function Home() {
  return (
    <Box>
      <MetaTags
        title="NextJS Tutorial | Easy Frontend"
        description="Step by step tutorials to build a full CRUD website using NextJS for beginners"
        url=""
        image="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />

      <HeroSection />
      <RecentPosts data={postList} />
      <FeaturedWorks data={workList} />
    </Box>
  );
}

Home.Layout = MainLayout;
