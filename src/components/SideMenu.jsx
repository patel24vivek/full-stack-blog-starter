import { Link } from "react-router-dom"
import Search from "../components/Search"

const Sidemenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
        <h1 className="mb-4 text-sm font-medium">Search</h1>
        <Search/>
        <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
        <div className="flex flex-col gap-2 text-sm">
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          newest
            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
            type="radio"
            name="sort"
            value="Most Popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Most Popular
            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
            type="radio"
            name="sort"
            value="Tranding"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Tranding
            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
            type="radio"
            name="sort"
            value="Oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Oldest
            </label>
        </div>
        <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
        <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to="/posts">All</Link>
        <Link className="underline" to="/posts?cat= web-design">Web Design</Link>
        <Link className="underline" to="/posts?cat=development">devlopement</Link>
        <Link className="underline" to="/posts?cat=databases">databases</Link>
        <Link className="underline" to="/posts?cat=seo">search engines</Link>
        <Link className="underline" to="/posts?cat=marketing">marketing</Link>

    
      </div>
    </div>
  )
}

export default Sidemenu