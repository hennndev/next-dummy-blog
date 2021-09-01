import Blogs from '../components/blogs/blogs'
import Categories from '../components/categories/categories'
import { dataDummy } from '../data_dummy/data_dummy'

export default function Home() {
  return (
    <div className="sm:container mx-auto">
      <Categories/>
      <Blogs data={dataDummy}/>
    </div>
  )
}
