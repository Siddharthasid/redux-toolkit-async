import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../features/posts/postSlice";

const Posts = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) {
    return <h2>Loading Posts.......</h2>;
  }

  if (!isLoading && isError) {
    return <h2>{error}</h2>;
  }

  if (!isLoading && !isError && posts.length === 0) {
    return <h2>Np posts available.</h2>;
  }

  return (
    <>
      <h4>Post Component</h4>
      <div>
        {posts.length > 0 &&
          posts.map((item, index) => {
            return (
              <div key={item.id}>
                <h5>
                  {index + 1}) {item.title}
                </h5>
                <p>{item.body}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Posts;
