import path from 'path';
import fsPromise from 'fs/promises';
import * as fs from 'fs';
import matter from 'gray-matter';
import {marked} from 'marked';

const markdownDir = path.join(process.cwd(), 'markdown');  // current working directory,

const getPosts = async () => {
  const fileNames = await fsPromise.readdir(markdownDir);
  return fileNames.map(fileName => {
    const fullPath = path.join(markdownDir, fileName);
    const id = fileName.replace(/\.md$/g, '');
    const text = fs.readFileSync(fullPath, 'utf-8');
    const {data: {title, date}, content} = matter(text);
    return {
      id, title, date
    };
  });
};

const getPost = async (id: String) => {
  const fullPath = path.join(markdownDir, id + '.md');
  const text = fs.readFileSync(fullPath, 'utf-8');
  const {data: {title, date}, content} = matter(text);
  const htmlContent = marked(content);
  return {
    id, title, date: JSON.parse(JSON.stringify(date)), content,htmlContent
  };
};

const getPostIds = async () => {
  const fileNames = await fsPromise.readdir(markdownDir);
  return fileNames.map(item => item.replace(/\.md$/g, ''));
};


export default getPosts;
export {
  getPost,
  getPostIds
};