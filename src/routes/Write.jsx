import { useUser } from "@clerk/clerk-react"
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';

const Write = () => {
 const { isLoaded, isSignedIn} = useUser()
   
 if (!isLoaded){
  return <div className=""> loading......</div>
 }
 if (!isLoaded && !isSignedIn){
  return <div className="">you should login </div>
 }
  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className="text-cl font-light">Create a new post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          add cover image
        </button>
        <input type="text" placeholder="My Awesome Story" className="text-4xl font-semibold bg-transparent outline-none" />
        <div className="flex items-center gap-4">
           <label htmlFor=""> choose a category</label>
           <select name="category" id=""
          className="p-2 rounded-xl bg-white shadow-md">
            <option value="genral">genral</option>
            <option value="web design">web design</option>
            <option value="databases">databases</option>
            <option value="devlopement">devlopement</option>
            <option value="marketing">marketing</option>
            <option value="seo">search engines</option>
          </select> 
        </div>
        <textarea className="p-4 rounded-xl bg-white shadow-md" name="desc" placeholder="A Short Description/"> 
        </textarea>
        <ReactQuill theme="snow"  className="flex-1 rounded-xl bg-white shadow-md"/>
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed">Send</button>
      </form>

    
    
    </div>
  )
}

export default Write