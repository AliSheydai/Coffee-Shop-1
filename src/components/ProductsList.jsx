import { useState } from "react";
import SortOptionBtn from "./SortOptionBtn"
import ProductCardGrid from "./ProductCardGrid";
import ProductCardList from "./ProductCardList";
import Pagination from "./Pagination";

function ProductsList({ products }) {
    const [activeView, setActiveView] = useState('grid')

    const itemsPerPage = 8
    const [currentPage, setCurrentPage] = useState(1)

    const totalItems = products.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage
    const displayed = products.slice(startIndex, startIndex + itemsPerPage)

    return(
        <div className="flex-1">
            <div className="hidden md:flex justify-between items-center bg-white mb-6 p-4 shadow-sm rounded-lg">
                <div className="flex items-center gap-4">
                    <h3>نمایش {displayed.length} محصول</h3>
                    <div className="flex items-center gap-2">
                        <button
                            className={`p-2 rounded ${activeView === "grid" ? 'bg-amber-100 text-amber-700' : "bg-gray-100 text-gray-700"} cursor-pointer whitespace-nowrap`}
                            onClick={() => setActiveView('grid')}
                        >
                            <i className="fas fa-th-large font-medium"></i>
                        </button>
                        <button
                            className={`p-2 rounded ${activeView === "list" ? 'bg-amber-100 text-amber-700' : "bg-gray-100 text-gray-700"} cursor-pointer whitespace-nowrap`}
                            onClick={() => setActiveView('list')}
                        >
                            <i className="fas fa-list font-medium"></i>
                        </button>
                    </div>
                </div>
                <SortOptionBtn />
            </div>

            {activeView === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {displayed.map((product) => 
                        <ProductCardGrid product={product}/>
                    )}
                </div>
            ): (
                <div className="flex flex-col gap-4">
                    {displayed.map((product) => 
                        <ProductCardList product={product}/>
                    )}
                </div>
            )}
            
            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    )
}

export default ProductsList