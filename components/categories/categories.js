import Category from "./category"
import { useRouter } from "next/router"

const Categories = () => {
    const router = useRouter()
    const categories = ['All', 'Travel', 'Food', 'Education', 'Knowledge', 'Bussines', 'Technology']
    return (
        <div className="flex items-center flex-wrap mx-5 mt-5">
            {categories.map((cty, idx) => (
                <Category key={idx} title={cty} clicked={() => router.push(`/blogs/category/${cty}`)}/>
            ))}
        </div>
    )
}

export default Categories
