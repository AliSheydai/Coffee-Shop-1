import { UseHeaderContext } from "../contexts/HeaderContext"
import { Link } from "react-router-dom"
import { useRef, useEffect, useCallback } from "react"
import "../css/MobileMenu.css"

function MobileMenu() {
    const { isMenuOpen, searchQuery, setSearchQuery, handleSearch, setIsMenuOpen, isLoading } = UseHeaderContext()
    const btnRef = useRef(null)
    const menuRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if(
                btnRef.current &&
                !btnRef.current.contains(event.target) &&
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const onMobileSearch = useCallback(
        e => {
            handleSearch(e);        // perform your search & navigation
            setIsMenuOpen(false);   // then close the mobile menu
        },
        [handleSearch, setIsMenuOpen]
    );

    return (
        <div ref={menuRef} className={`mobile-menu h-screen p-6 top-0 right-0 z-50 fixed flex flex-col w-3/5 bg-amber-50 shadow-sm shadow-amber-200 ${isMenuOpen ? "open": ""}`}>
            <div className="flex items-center justify-between mb-8">
                <button className={`md:hidden hamburger text-xl group cursor-pointer flex flex-col gap-1.5 hamburger ${isMenuOpen ? 'open' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        ref={btnRef}
                >
                    <span class="w-6 h-0.5 bg-gray-800 block rounded-full group-hover:bg-amber-700"></span>
                    <span class="w-6 h-0.5 bg-gray-800 block rounded-full group-hover:bg-amber-700"></span>
                    <span class="w-6 h-0.5 bg-gray-800 block rounded-full group-hover:bg-amber-700"></span>
                </button>
                <Link to="/" className="flex items-center gap-2">
                    <i className="fas fa-coffee text-amber-800 text-2xl"></i>
                    <span className="font-bold text-2xl">قهوه بهشت</span>
                </Link>
                </div>
            <form 
                onSubmit={onMobileSearch}
                className="relative flex items-center mb-8 rounded-xl shadow-sm"        
            >
                <input 
                    type="text"
                    placeholder="جستو جو..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="outline-none bg-gray-100 py-3 px-2 pr-6 rounded-xl border-none w-full focus:ring-2 focus:ring-amber-200"
                    disabled={isLoading}
                />
                <div
                    className="absolute text-lg left-4 top-1/2 w-5 h-5 transform -translate-y-1/2 flex justify-center items-center text-gray-400">
                    <i className="ri-search-line"></i>
                </div>
            </form>
            <nav>
                <ul className="flex flex-col justify-start gap-8">
                    <li className="border-b border-gray-300 py-2 pr-1"><Link to="/" onClick={() => {setIsMenuOpen(!isMenuOpen); setSearchQuery("")}} className="text-gray-800 font-bold hover:text-amber-700">خانه</Link></li>
                    <li className="border-b border-gray-300 py-2 pr-1"><Link to="/shop" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 font-bold hover:text-amber-700">فروشگاه</Link></li>
                    <li className="border-b border-gray-300 py-2 pr-1"><Link to="/about" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 font-bold hover:text-amber-700">درباره ما</Link></li>
                    <li className="border-b border-gray-300 py-2 pr-1"><Link to="/cuncat-us" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 font-bold hover:text-amber-700">تماس با ما</Link></li>
                </ul>
            </nav>
            <p>asdfasdf</p>
        </div>
    )
}

export default MobileMenu