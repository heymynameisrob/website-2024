import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { POST_DIRECTORY } from './constants';


export async function getPostData(id: string) {
  const fullPath = path.join(POST_DIRECTORY, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export async function getAllPostIds() {
  const fileNames = fs.readdirSync(POST_DIRECTORY);

  const filterMarkdownFiles = (fileNames: string[]) => {
    return fileNames.filter(fileName => {
      return /\.md$/.test(fileName);
    });
  }

  return filterMarkdownFiles(fileNames).map(fileName => {

    const fullPath = path.join(POST_DIRECTORY, `${fileName}`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id: fileName.replace(/\.md$/, ''),
      ...matterResult.data
    };
  });
}
