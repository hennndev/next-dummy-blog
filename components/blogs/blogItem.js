import Image from 'next/image'
import { useRouter } from 'next/router'

const BlogItem = ({item}) => {
    const formatedDesc = item.desc.split(' ').slice(0, 10).join(' ')
    const router = useRouter()

    const handleLink = (path) => {
        router.push(`/blogs/${path}`)
    }
   
    return (
        <div className="shadow-md rounded-md group cursor-pointer overflow-hidden">
            <Image 
                src={item.img}
                layout="responsive"
                width={1920}
                height={1080}/>
            <div className="px-3 py-4">  
                <div className="flex items-center justify-between mb-1">
                    <small className="text-gray-500">{new Date().toDateString()}</small>
                    <small className="text-gray-500">{item.category}</small>
                </div> 
                <p className="hover:text-blue-500" onClick={() => handleLink(item.id)}>{item.title}</p>
                <p className="text-sm text-gray-500">{`${formatedDesc}...`}</p>
                <div className="flex items-center justify-between mt-1">
                    <p className="underline text-blue-500 text-sm" onClick={() => handleLink(item.id)}>Detail</p>
                    <small className="text-gray-500">{item.author}</small>
                </div>
            </div>
        </div>
    )
}

export default BlogItem
