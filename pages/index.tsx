import { HeroSection, RecentPosts } from '@/components/home';
import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
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

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <RecentPosts data={postList} />
    </Box>
  );
}

Home.Layout = MainLayout;
