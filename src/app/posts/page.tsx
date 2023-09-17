import { getAllPostIds } from "@/lib/posts";
import Link from "next/link";

type PostPageProps = {
  id: string
  [key: string]: any
}

export default async function PostPage() {  

  const allPosts: Array<PostPageProps> = await getAllPostIds();

  return(
    <div className="space-y-8">
      {allPosts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  )
}
