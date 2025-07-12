function Pagination({ currentPage, totalPages, onPageChange }) {
    const makePages = () => {
        const pages = []
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - 1 && i <= currentPage + 1)
            ) {
                pages.push(i);
            } else if (pages[pages.length - 1] !== "...") {
                pages.push("...");
            }
        }
        return pages
    }

    const pages = makePages()

    return (
        <div className="flex justify-center mt-12 mb-8">
            <nav className="flex items-center gap-2">
                <button
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <i className="fas fa-chevron-right text-xs"></i>
                </button>

                {pages.map((p, i) =>
                    p === "..." ? (
                        <span key={`page-${i}-${p}`} className="text-gray-500">...</span>
                    ) : (
                        <button
                            className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ${p === currentPage ? (
                                    "bg-amber-600 text-white"
                                ) : (
                                    "border border-gray-300 text-gray-600 hover:bg-gray-50"
                                )
                                }`}
                            key={`page-${i}-${p}`}
                            onClick={() => onPageChange(p)}
                        >
                            {p}
                        </button>
                    )
                )}
                {/* <button className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-600 text-white cursor-pointer !rounded-button whitespace-nowrap">1</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap">2</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap">3</button>
                    <span className="text-gray-500">...</span> */}
                <button
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <i className="fas fa-chevron-left text-xs"></i>
                </button>
            </nav>
        </div>
    )
}

export default Pagination