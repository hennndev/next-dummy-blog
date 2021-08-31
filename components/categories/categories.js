import Category from "./category"

const Categories = () => {
    const categories = ['All', 'Travel', 'Food', 'Bussines', 'Technology']
    return (
        <div className="flex items-center flex-wrap mx-5 mt-5">
            {categories.map((cty, idx) => (
                <Category key={idx} title={cty}/>
            ))}
        </div>
    )
}

export default Categories
