import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '@/models';

const BLOGS_FOLDER = path.join(process.cwd(), 'blogs');

export const getBlogList = async () => {
  const blogList: Post[] = [];
  const fileNameList = fs.readdirSync(BLOGS_FOLDER);

  fileNameList.forEach(fileName => {
    const filePath = path.join(BLOGS_FOLDER, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const { data, content, excerpt } = matter(fileContent, { excerpt_separator: '<!-- truncate-->' });
    blogList.push({
      id: data.slug,
      created: '12 Feb 2020',
      slug: data.slug,
      title: data.title,
      topics: data.tags,
      desc: excerpt,
      mdContent: content,
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url,
      },
    });
  });

  return blogList;
};
