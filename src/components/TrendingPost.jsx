  const TrendingPosts = ({ posts }) => (
    <div className="text-zinc-500 text-center mt-20 font-bold">
      <h2 className="text-sm mb-10">TRENDING POSTS</h2>
      {posts.map((post, index) => (
        <div key={index} className="ml-10 flex items-center text-left mb-3">
          <img
            className="h-[90px] w-[90px] object-cover"
            src={post.img}
            alt="Trending Post"
          />
          <div className="text-sm ml-2">
            <h2>{post.title}</h2>
            <h2 className="text-xs">{post.date}</h2>
          </div>
        </div>
      ))}
    </div>
  );

export default TrendingPosts;
