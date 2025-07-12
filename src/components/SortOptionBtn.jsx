import { useState, useRef, useEffect } from "react"
import "../css/SortBtn.css"

const SORT_OPTIONS = [
  "پرفروش ترین",
  "جدیدترین",
  "گران ترین",
  "ارزان ترین",
  "محبوب ترین"
]

function SortOptionBtn() {
    const [sortOption, setSortOption] = useState(SORT_OPTIONS[0])
    const [isOpen, setIsOpen] = useState(false)
    const btnRef = useRef(null)
    const menuRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                btnRef.current &&
                !btnRef.current.contains(e.target) &&
                menuRef.current &&
                !menuRef.current.contains(e.target)
            ) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () =>  document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleOptionClick = (optoin) => {
        setSortOption(optoin)
        setIsOpen(false)
    }

    return(
        <div className="relative inline-block">
            <button 
                ref={btnRef}
                className="bg-gray-50 text-sm py-3 px-4 rounded-t-lg flex items-center whitespace-nowrap gap-2 cursor-pointer group hover:shadow-lg transition-all"
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span className="font-medium">مرتب سازی: {sortOption}</span>
                <i className={`fas fa-chevron-down font-medium group-hover:text-amber-700 transition-transform ${isOpen ? "rotate-180": ""}`}></i>
            </button>
            <ul
                ref={menuRef}
                className={`sort-btn absolute right-0 w-48 bg-gray-50 rounded-b-lg z-10 transition-all ${isOpen ? "open": "" }`}
            >
                {SORT_OPTIONS.map(option => (
                    <li 
                        key={option}
                        className="pt-3 pb-1 last:pb-3 text-right px-4 border-b border-b-gray-200 font-medium"
                    >
                        <button
                            onClick={() => handleOptionClick(option)}
                            className="cursor-pointer text-sm hover:text-amber-600 transition-colors"
                        >{option}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SortOptionBtn