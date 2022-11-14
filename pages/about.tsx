import { MainLayout } from '@/components/layout';

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  return (
    <div>
      <h1>About page</h1>
    </div>
  );
}

AboutPage.Layout = MainLayout;
