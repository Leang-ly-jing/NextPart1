export default async function PostSlug({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const res = await fetch(
    `https://dummyjson.com/posts/${id}`
  );

  const post = await res.json();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        {post.title}
      </h1>

      <p>{post.body}</p>
    </div>
  );
}