import { UseClearBtnContext } from "../contexts/ClearBtnContext"
import CheckBoxFilter from "./CheckBoxFilter"
import "../css/MobileFilterSheet.css"

function MobileFilterSheet() {
    const { isFilterOpen, setIsFilterOpen, priceRange, setPriceRange, clearFilters } = UseClearBtnContext()

    return(
        <div className={`${isFilterOpen ? "fixed inset-0 z-50 md:hidden": ""}`}>
            <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isFilterOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setIsFilterOpen(!isFilterOpen)}></div>
            <div className={`absolute bg-white rounded-t-2xl bottom-0 right-0 left-0 max-h-[80vh] overflow-y-auto mobile-filter ${isFilterOpen ? "open": ""}`}>
                <div className="p-4 sticky top-0 z-10 bg-white border-b border-b-gray-200">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-medium">فیلتر ها</h3>
                        <button 
                            className="text-lg text-gray-500 cursor-pointer"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div className="p-4">
                    <div className="mb-6 pb-6 border-b border-b-gray-200">
                        <h4 className="text-lg font-medium mb-2">محدوده قیمت (هزار تومان)</h4>
                        <div className="flex items-center justify-between text-gray-500 mb-2 text-sm">
                            <span>{priceRange[0]}</span>
                            <span>{priceRange[1]}</span>
                        </div>
                        <input 
                            type="range"
                            min="0"
                            max="100"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                            className="appearance-none h-2 bg-gray-200 w-full rounded-lg cursor-pointer"
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
                <div className="p-4 sticky bottom-0 z-10 bg-white border-t border-t-gray-300">
                    <div className="flex gap-4">
                        <button 
                            onClick={clearFilters}
                            className="flex-1 bg-white text-gray-700 font-medium border border-gray-300 py-3 rounded-lg hover:shadow-lg hover:shadow-amber-500 hover:text-amber-700 hover:border-amber-700 transition-all cursor-pointer whitespace-nowrap"
                        >
                            پاک کردن
                        </button>
                        <button 
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex-1 bg-amber-600 text-white font-medium py-3 rounded-lg hover:shadow-sm hover:shadow-amber-600 hover:bg-amber-700 transition-all cursor-pointer whitespace-nowrap"
                        >
                            اعمال فیلتر ها
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileFilterSheet