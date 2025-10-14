import { Link } from "react-router-dom"
import IMAGE from "./Image"

const Featuredposts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
      <IMAGE Src="featured1.jpeg" className="rounded-3xl object-cover" w="895"/>
      <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2days ago</span>
        </div>
        <Link 
         to="/test"
         className="text-xl lg:text-3xl font-semibold lg:font-bold">
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         </Link>
      </div>
      {/*others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/*second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
        <div className="w-1/3 aspect-video">
           <IMAGE
            Src="featured2.jpeg"
           className="rounded-3xl object-cover w-full h-full"
           w="298"
         />
         </div>
       
           {/*details adnd titles */} 
           <div className="w-2/3">
           {/*details */}
           <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">web design</Link>
              <span className="text-gray-500 text-sm"> 2 dayes ago</span>
            </div>
            {/*titles */}
            <Link to="/test"
            className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet.</Link>
           </div>
        </div>
        {/*third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
        <div className="w-1/3 aspect-video">
           <IMAGE
            Src="featured3.jpeg"
           className="rounded-3xl object-cover w-full h-full"
           w="298"
         />
         </div>
           {/*details adnd titles */} 
           <div className="w-2/3">
           {/*details */}
           <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">web design</Link>
              <span className="text-gray-500 text-sm"> 2 dayes ago</span>
            </div>
            {/*titles */}
            <Link to="/test"
            className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet.</Link>
           </div>
        </div>
        {/*forth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
        <div className="w-1/3 aspect-video">
           <IMAGE 
            Src="featured4.jpeg"
           className="rounded-3xl object-cover w-full h-full"
           w="298"
         />
         </div>
           {/*details adnd titles */} 
           <div className="w-2/3">
           {/*details */}
           <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">web design</Link>
              <span className="text-gray-500 text-sm"> 2 dayes ago</span>
            </div>
            {/*titles */}
            <Link to="/test"
            className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet.</Link>
           </div>
        </div>
      </div> 
      </div>
  )
}

export default Featuredposts