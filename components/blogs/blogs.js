import BlogItem from './blogItem'

const Blogs = ({data}) => {
    return (
        <div className="mx-5 my-10 grid grid-cols-auto-fill sm:grid-cols-auto-fill-sm gap-y-7 gap-x-5">
            {data.map(item => (
                <BlogItem key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default Blogs
