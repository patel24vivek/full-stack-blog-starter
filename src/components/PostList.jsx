import PostListItem from "./PostListItem"


const PostList = () => {
  return (
    <div className="flex flex-col gap-12 mb-8">
     <PostListItem item = 'postimg1.png'/>
     <PostListItem item = 'logo.png'/>
     <PostListItem item = 'logo.png'/>
     <PostListItem item = 'logo.png'/>
     <PostListItem item = 'logo.png'/>
    </div>
  )
}

export default PostList