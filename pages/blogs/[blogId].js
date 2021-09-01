import { useRouter } from "next/router"
import { dataDummy } from "../../data_dummy/data_dummy"

const BlogId = () => {
    const router = useRouter()
    const blog = dataDummy.find(blog => blog.id === router.query.blogId)

    if(blog) {
        return (
            <div className="sm:container sm:mx-auto my-10 mx-5">
                <div className="w-full h-xl">
                    <img src={blog.img} className="w-full h-full object-cover"/>
                </div>
                <div className="mt-3 flex items-center justify-between">
                    <p>{new Date().toDateString()}</p>
                    <p>{blog.author}</p>
                </div>
                <div className="mt-5">
                    <h2 className="font-bold text-2xl mb-4">{blog.title}</h2>
                    <p className="text-gray-700">{blog.desc}</p>
                </div>
                <div className="mt-4">
                    <button onClick={() => router.push('/blogs')} 
                        className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded-md text-white cursor-pointer">Get Back
                    </button>
                </div>
            </div>
        )
    } else {
        return <p>Loading...</p>
    }

    
}

export default BlogId
