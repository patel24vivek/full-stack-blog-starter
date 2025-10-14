import { Link } from "react-router-dom"
import IMAGE from "./Image"

const PostListItem = () => {
  return (

    <div className="flex flex-col xl:flex-row gap-8">
        {/*image */}
        <div className="md:hidden xl:block xl:w-1/3">
            <IMAGE  Src="postImg.jpeg"  className="rounded-2xl object-cover" w="735"/>
            
            </div>
        {/*details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className="text-4xl font-semibold"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, error!
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>written by</span>
              <Link className="text-blue-800">vivek patel</Link>
              <span>on</span>
              <Link className="text-blue-800">web design</Link>
              <span>2 days ago</span>  
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Quos voluptas odio possimus consequatur officia excepturi 
               odit non quam quaerat earum exercitationem minima sunt officiis
              dignissimos obcaecati explicabo asperiores mollitia, aliquam dolorem 
               omnis provident vel.
               Quidem odio laudantium aut delectus iure.
            </p>
            <Link to="/test" className="underline text-blue-800 text-sm">read more</Link>
        </div>
    </div>
        
  )
}

export default PostListItem