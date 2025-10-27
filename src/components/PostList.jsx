import PostListItem from "./PostListItem"


const PostList = () => {
  return (
    <div className="flex flex-col gap-12 mb-8">
     <PostListItem item = 'postimg1.png'/>
     <PostListItem item = 'postimg2.png'/>
     <PostListItem item = 'postimg1.png'/>  
     <PostListItem item = 'postimg2.png'/>
     <PostListItem item = 'postimg1.png'/>
    </div>
  )
}

export default PostList