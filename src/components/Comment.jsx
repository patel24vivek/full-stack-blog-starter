import IMAGE from "./Image"


const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
       <div className="flex items-center gap-4">
        <IMAGE Src="userImg.jpeg"  className="w-10 h-10 rounded-full object-cover"
         w="40"/>
          <span className="font-medium">vivek patel</span>
          <span className="text-sm text-gray-500">2 days ago</span>
       </div>
            <div className="mt-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Rem hic deserunt placeat eligendi possimus itaque maiores
                     eveniet? Minus saepe amet eos aliquam voluptate delectus 
                     reprehenderit.
                </p>
            </div>
    </div>
  )
}

export default Comment