import { UseClearBtnContext } from "../contexts/ClearBtnContext"
import SortOptionBtn from "./SortOptionBtn"

function MobileFilterBar() {
    const { isFilterOpen, setIsFilterOpen } = UseClearBtnContext()

    return(
        <div className="md:hidden bg-white py-3 px-4 border-b border-gray-200 sticky top-16 z-40">
            <div className="flex justify-between items-center">
                <button className="bg-amber-50 hover:bg-amber-100 px-4 py-2 rounded-lg cursor-pointer flex items-center gap-2 whitespace-nowrap text-gray-800 hover:scale-105 transition-transform"
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                    <i className="fas fa-filter text-amber-700 font-medium"></i>
                    <span className="font-normal">فیلتر ها</span>
                </button>

                <SortOptionBtn />
            </div>
        </div>
    )
}

export default MobileFilterBar