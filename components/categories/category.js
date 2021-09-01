const Category = ({title, clicked}) => {
    return <p 
        className="px-4 py-2 m-1 bg-gray-600 text-white rounded-md cursor-pointer hover:bg-gray-700"
        onClick={clicked}>
        {title}
    </p>
}

export default Category
