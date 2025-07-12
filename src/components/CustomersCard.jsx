function CustomersCard({card}) {
    return(
        <div className=" shadow-xl p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
                <img src={card.image} 
                     className="w-12 h-12 rounded-full"
                />
                <div className="">
                    <h4 className="text-lg font-medium text-gray-800">{card.name}</h4>
                    <span className="text-gray-600">{card.role}</span>
                </div>
            </div>
            <p className="text-gray-800">{card.quote}</p>
        </div>
    )
}

export default CustomersCard