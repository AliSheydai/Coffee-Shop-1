import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../assets/data";

const HeaderContext = createContext()

export const UseHeaderContext = () => useContext(HeaderContext)

export const HeaderProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const [cartCount, setCartCount] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    }

    const addToCart = () => {
        setCartCount(prev => prev + 1)
    }

    const handleSearch = async e => {
        e.preventDefault()
        const q = searchQuery.trim()
        if (!q) {
            setSearchResults([])
            setShowResults(false)
            return
        }

        setIsloading(true)
        try {
            const lower = q.toLowerCase()
            const results = PRODUCTS.filter(
                p =>
                    p.name.toLowerCase().includes(lower) ||
                    p.description.toLowerCase().includes(lower)
            )
            setSearchResults(results)
            setShowResults(true)
            navigate(`/?search=${encodeURIComponent(q)}`)
        } catch (err) {
            console.error("Search Error:", err)
            setSearchResults([])
            setShowResults(false)
        } finally {
            setIsloading(false)
        }
    }

    const value = {
        cartCount,
        addToCart,
        isMenuOpen,
        setIsMenuOpen,
        toggleMenu,
        searchQuery,
        setSearchQuery,
        handleSearch,
        searchResults,
        isLoading,
        showResults
    }

    return <HeaderContext.Provider value={value}>
        {children}
    </HeaderContext.Provider>
}