import { UseHeaderContext } from "../contexts/HeaderContext"
import { AuthContext } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import MobileMenu from "./MobileMenu"
import ProductCardList from "./ProductCardList"
import "../css/MobileMenu.css"
import { FaSignInAlt, FaUser } from 'react-icons/fa'
import { useContext } from "react"

function Header() {

    const {
        cartCount,
        isMenuOpen,
        setIsMenuOpen,
        searchQuery,
        setSearchQuery,
        handleSearch,
        searchResults,
        isLoading,
        showResults
    } = UseHeaderContext()

    const { state, dispatch} = useContext(AuthContext)

    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }

    return (
        <header className="bg-white fixed top-0 right-0 shadow-sm z-50 w-full">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <button className={`md:hidden hamburger text-xl group cursor-pointer flex flex-col gap-1.5 hamburger ${isMenuOpen ? 'open' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
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

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-4">
                        <Link to="/" className="text-gray-800 font-medium hover:text-amber-700 transition">خانه</Link>
                        <Link to="/shop" className="text-gray-800 font-medium hover:text-amber-700 transition">فروشگاه</Link>
                        <Link to="about" className="text-gray-800 font-medium hover:text-amber-700 transition">درباره ما</Link>
                        <Link to="/cuncat-us" className="text-gray-800 font-medium hover:text-amber-700 transition">تماس با ما</Link>
                    </ul>
                </nav>

                <div className="flex items-center gap-2">
                    <form onSubmit={handleSearch} className="relative hidden md:flex items-center">
                        <input
                            type="text"
                            placeholder="جستو جوی قهوه..."
                            className="bg-gray-100 py-2 px-4 pr-10 rounded-full w-48 text-sm border-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            disabled={isLoading}
                        />
                        <i className="fas fa-search absolute right-3 text-gray-400 text-sm"></i>
                    </form>
                    <div className="flex gap-4 items-center">
                        <Link
                            className="relative flex items-center justify-center hover:text-amber-700 cursor-pointer text-xl hover:scale-110 transition-all transform"
                            to="/cart"
                        >
                            <i className="fas fa-shopping-cart"></i>
                            {cartCount > 0 && (
                                <span className="absolute -top-3 -right-3 bg-amber-700 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {state.isAuthenticated ? (
                            <div className="flex justify-center items-center gap-2 flex-row-reverse">
                                <p className="font-medium text-amber-700">خوش آمدی {state.user.name}</p>
                                <button 
                                    onClick={handleLogout}
                                    className="relative flex items-center justify-center hover:text-amber-700 cursor-pointer text-lg hover:scale-110 transition-all transform"
                                >
                                    <FaSignInAlt />
                                </button>
                            </div>
                        )
                        : (
                            <Link  
                                to="login/"
                                className="relative flex items-center justify-center hover:text-amber-700 cursor-pointer text-xl hover:scale-110 transition-all transform"
                                >
                                <FaUser />
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {(showResults && searchQuery) && (
                <div className="top-0 right-0 left-0 bg-white border-t border-gray-200 h-screen overflow-auto z-40 p-4">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">
                        نتایج جستجو برای "{searchQuery}"
                    </h2>

                    {isLoading ? (
                        <div className="text-center text-gray-500 py-8">
                            <i className="fas fa-spinner fa-spin mr-2"></i>در حال جستجو…
                        </div>
                    ) : searchResults.length > 0 ? (
                        <div className="flex flex-col gap-4">
                            {searchResults.map(product => (
                                <ProductCardList key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 py-8">
                            موردی یافت نشد
                        </div>
                    )}
                </div>
            )}
            <MobileMenu />
        </header>
    )
}

export default Header