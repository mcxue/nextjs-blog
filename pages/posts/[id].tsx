import {getPost, getPostIds} from '../../libs/posts';
import {NextPage} from 'next';

type Props = {
  post: Post
}

const PostsShow: NextPage<Props> = (props) => {
  const {post} = props;
  return (
    <div>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{__html: post.htmlContent}} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const idList = await getPostIds();
  return {
    paths: idList.map(id => ({params: {id}})),
    fallback: false
  };
};

export const getStaticProps = async (x: any) => {
  const id = x.params.id;
  const post = await getPost(id);
  return {
    props: {
      post: post
    }
  };
};

export default PostsShow;