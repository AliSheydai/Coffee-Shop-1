function CategoryCard({category}) {
    return (
        <div className=" overflow-hidden bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300" key={category.id}>
            <div className=" overflow-hidden h-48">
                <img src={category.image} alt={category.name} 
                     className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"      
                />
            </div>
            <div className=" py-4 text-center">
                <h3 className="text-lg font-medium mb-2">{category.name}</h3>
                <a href="#" className="text-amber-700 hover:text-amber-800 cursor-pointer font-medium group whitespace-nowrap" data-readdy="true">
                    <i className="fas fa-arrow-right group-hover:-rotate-90 transition-transform"></i> مشاهده
                </a>
            </div>
        </div>
    )
}

export default CategoryCard