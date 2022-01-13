import {NextPage} from 'next';
import usePosts from '../../hooks/usePosts';
import getPosts from '../../libs/posts';
import Link from 'next/link';

type Props = {
  posts: Post[]
}

const PostIndex: NextPage<Props> = (props) => {
  const {posts} = props;
  return (
    <div>
      <h1>文章列表</h1>
      {
        posts.map(item => <div key={item.id}>
          <Link href={`/posts/${item.id}`}>
            <a>{item.id}</a>
          </Link>
        </div>)
      }
    </div>
  );
};

const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  };
};

export default PostIndex;

export {
  getStaticProps
};

