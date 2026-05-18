import BlogPage from "./blog/page";

export default function Home(){
  return (
    <div className="w-full ">
      <h1 className="p-10 text-center text-4xl text-blue-500 font-bold ">
        Welcome To Our Store
      </h1>
      <BlogPage/>
    </div>
  )
}