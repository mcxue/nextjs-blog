import {NextApiRequest, NextApiResponse} from 'next';
import fsPromise from 'fs/promises';
import path from 'path';
import getPosts from '../../../libs/posts';


const Posts = async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await getPosts();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(posts));
  res.end();
};

export default Posts;