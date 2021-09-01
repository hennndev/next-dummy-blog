import Blogs from '../../components/blogs/blogs'
import Categories from '../../components/categories/categories'
import { useRouter } from 'next/router'
import { dataDummy } from '../../data_dummy/data_dummy'


const Slug = () => {
    const router = useRouter()

    if(router.query.slug) {
        const filteredData = dataDummy.filter(data => data.category === router.query?.slug[2])
        return (
            <div className="sm:container mx-auto">
                <Categories/>
                <Blogs data={router.query.slug[2] === 'All' ? dataDummy : filteredData}/>
            </div>
        )
    } else {
        return <p>Loading....</p>
    }
    
    

    
}

export default Slug
