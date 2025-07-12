import { UseClearBtnContext } from "../contexts/ClearBtnContext"
import CheckBoxFilter from "./CheckBoxFilter"
import ProductsList from "./ProductsList"
import MobileFilterSheet from "./MobileFilterSheet"
import "../css/InputPrice.css"
import { PRODUCTS } from "../assets/data"

function BodyShop() {
    const { clearFilters } = UseClearBtnContext()
    const { priceRange } = UseClearBtnContext()
    const { setPriceRange } = UseClearBtnContext()

    return (
        // <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="hidden md:block w-64 flex-shrink-0 sticky top-28">
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold">فیلترها</h3>
                                <button
                                    className="bg-amber-50 text-amber-700 text-sm font-medium py-2 px-3 rounded-lg hover:shadow-lg hover:shadow-amber-500 hover:scale-105 whitespace-nowrap transition-all cursor-pointer"
                                    onClick={clearFilters}
                                >
                                    پاک کردن همه
                                </button>
                            </div>

                            {/* Price Range */}
                            <div className="mb-6 border-b-1 border-gray-300 pb-6">
                                <h4 className="font-medium text-gray-800 mb-4">محدوده قیمت (هزار تومان)</h4>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600">{priceRange[0]}</span>
                                    <span className="text-gray-600">{priceRange[1]}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            {/* Bean type */}
                            <div className="mb-6 border-b-1 border-gray-300 pb-6">
                                <h4 className="font-medium mb-4">نوع دانه</h4>
                                <CheckBoxFilter filterKey="beanType"/>
                            </div>
            
                            {/* Origin */}
                            <div className="mb-6 border-b-1 border-gray-300 pb-6">
                                <h4 className="font-medium mb-4">کشور مبدأ</h4>
                                <CheckBoxFilter filterKey="origin" />
                            </div>

                            {/* Roast Level */}
                            <div className="mb-6 border-b-1 border-gray-300 pb-6">
                                <h4 className="font-medium mb-4">درجه برشته‌کاری</h4>
                                <CheckBoxFilter filterKey="roastLevel" />
                            </div>

                            {/* Flavor Notes */}  
                            <div className="mb-6 border-b-1 border-gray-300 pb-6">
                                <h4 className="font-medium mb-4">نت‌های طعمی</h4>
                                <CheckBoxFilter filterKey="flavor" />
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <ProductsList products={PRODUCTS}/>

                    {/* Mobile Filter Sheet */}
                    <MobileFilterSheet />
                </div>
            </div>
        // </div>
    )
}

export default BodyShop