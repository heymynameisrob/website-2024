import { formatDate } from "@/lib/date";
import { getPostData } from "@/lib/posts";
import { PostDataProps } from "@/lib/types";

export default async function PostPage({params}: any) {

  const postData: PostDataProps = await getPostData(params.id);

  console.log(postData);

  return(
    <div className="space-y-8">
      <p>{postData.title}</p>
      <p>{postData.id}</p>
      <p>{formatDate(postData.date)}</p>      
      <div 
      className="prose prose-slate xl:prose-xl dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  )
}