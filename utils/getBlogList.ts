import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '@/models';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from '@mapbox/rehype-prism';

const BLOGS_FOLDER = path.join(process.cwd(), 'blogs');

export const getBlogList = async () => {
  const blogList: Post[] = [];
  const fileNameList = fs.readdirSync(BLOGS_FOLDER);

  fileNameList.forEach(async fileName => {
    const filePath = path.join(BLOGS_FOLDER, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const { data, content, excerpt } = matter(fileContent, { excerpt_separator: '<!-- truncate-->' });

    const htmlFile = await unified()
      .use(remarkParse)
      .use(remarkToc, { heading: 'Nội dung bài viết' })
      .use(remarkRehype)
      .use(rehypeDocument, { title: 'This is title' })
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
      .use(rehypePrism, { ignoreMissing: true })
      .use(rehypeFormat)
      .use(rehypeStringify)
      .process(content);

    blogList.push({
      id: data.slug,
      created: '12 Feb 2020',
      slug: data.slug,
      title: data.title,
      topics: data.tags,
      desc: excerpt,
      mdContent: content,
      htmlContent: htmlFile.toString(),
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
