import { UseHeaderContext } from "../contexts/HeaderContext"

function FeaturedCard({product}) {
    const { addToCart } = UseHeaderContext()

    return (
        <div className=" overflow-hidden bg-white shadow-md hover:shadow-lg transition-all rounded-lg" key={product.id}>
            <div className=" overflow-hidden h-64">
                <img src={product.image} alt={product.name} 
                     className=" object-cover object-top h-full w-full hover:scale-105 transition-transform"
                />
            </div>
            <div className="p-6">
                <h2 className=" font-medium text-xl text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex items-center justify-between lg:flex-col lg:gap-2">
                    <span className="font-bold text main-img-lg">{product.price}</span>
                    <button className="py-2 px-4 lg:w-full bg-amber-600 rounded-lg whitespace-nowrap text-white font-medium hover:bg-amber-800 transition-all cursor-pointer" onClick={addToCart}>افزودن به سبد خرید</button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard