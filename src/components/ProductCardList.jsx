import { UseHeaderContext } from "../contexts/HeaderContext"

function ProductCardList({ product }) {
    const { addToCart } = UseHeaderContext()
    return (
        <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex gap-2">
                <div className="relative sm:w-1/4 h-48 sm:h-auto overflow-hidden group">
                    <img src={product.image} alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
                        <button className="w-10 h-10 bg-white rounded-xl transform translate-y-6 group-hover:translate-y-0 transition-all flex justify-center items-center cursor-pointer hover:text-amber-600 text-lg hover:shadow-amber-100 hover:shadow-lg">
                            <i className="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <div className="w-full p-4 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold">{product.name}</h3>
                            <span className="text-xs bg-amber-100 text-amber-800 py-1 px-2 rounded">
                                {product.roastLevel}
                            </span>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                            <span>{product.origin}</span> • <span>{product.weight}</span>
                        </div>
                        <p className="text-gray-700 mb-4 text-sm line-clamp-2">{product.description}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-bold">{product.price} تومان</span>
                        <button 
                            className="px-2 py-1 bg-amber-600 rounded-sm text-white whitespace-nowrap hover:shadow-lg hover:shadow-amber-600 cursor-pointer hover:text-amber-600 hover:bg-amber-100 transition-all lg:px-12"
                            onClick={addToCart}
                            >
                                افزودن به سبد
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCardList