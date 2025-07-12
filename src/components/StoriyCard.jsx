function StoryCard({card}) {
    return(
        <div className=" overflow-hidden hover:shadow-lg transition-all rounded-lg bg-white">
            <div className="overflow-hidden h-48">
                <img src={card.image} alt={card.category} 
                     className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                    <h6 className="text-sm text-amber-700 font-medium">{card.category}</h6>
                    <span className="text-gray-600 text-sm ">{card.date}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{card.title}</h3>
                <a href="#" className="text-amber-700 font-bold text-sm hover:text-amber-800 transition-colors underline"> <i className="fas fa-arrow-right ml-1"></i>مطالعه بیشتر</a>
            </div>
        </div>
    )
}

export default StoryCard