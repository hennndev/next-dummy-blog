import { useRouter } from "next/router"

const Contact = () => {
    const router = useRouter()

    return (
        <div className="ml-5 mt-10 mb-10 sm:container sm:ml-16">
            <h1 className="font-bold text-lg mb-5">Contact Me</h1>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper tempus feugiat. Morbi posuere metus eget eros dignissim, non hendrerit tellus dapibus. Sed euismod metus nisl. Donec id nunc sit amet ante semper dictum id facilisis lectus. Praesent quam ante, fringilla quis risus vitae, faucibus viverra nisi. Duis ut tempor nisi. Suspendisse tortor mauris, interdum vitae volutpat vel, tincidunt a erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc rhoncus aliquet diam, sit amet efficitur orci dictum eu. Nunc laoreet ante eget lorem gravida interdum. Aenean aliquam mi lectus, non elementum lacus sagittis aliquam. Cras et diam rhoncus, convallis arcu nec, aliquet arcu. Duis nec metus tempor neque faucibus hendrerit sit amet id libero. Cras posuere est fringilla congue dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Donec eros lacus, pretium at tortor quis, dapibus viverra magna. Aenean arcu diam, posuere vel nunc dapibus, tempus hendrerit sapien. Aenean sodales semper dolor, dignissim luctus libero dictum vitae. Nunc eu est sed arcu aliquet vulputate. Ut a ultricies justo. Praesent sagittis molestie leo, id accumsan justo scelerisque vitae. Nulla facilisi. Suspendisse eu lorem condimentum, tempus lectus nec, elementum urna. Proin pretium massa lacus.</p>
            <div className="mt-4">
                <button onClick={() => router.push('/')} 
                    className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded-md text-white cursor-pointer">Back Home
                </button>
            </div>
        </div>
    )
}

export default Contact
