import { usePostsSSR } from '@/services/post.service';
import { Post } from '@/entities/post.entity';

async function Page() {
  try {
    const { data } = await usePostsSSR();
    return (
      <div>
        {(data as Post[])?.map((post) => (
          <div className="text-white" key={post.id}>
            {post.title}
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <div className="text-white">
        <h2>Something went wrong!</h2>
      </div>
    );
  }
}

export default Page;
