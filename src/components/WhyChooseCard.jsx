function WhyCooseCard({card}) {
    return (
        <div className="bg-amber-700/80 text-white p-8 rounded-lg text-center hover:shadow-lg transition-all">
            <i className={`fas ${card.icon} text-amber-100 text-4xl mb-4`}></i>
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="">{card.description}</p>
        </div>
    )
}

export default WhyCooseCard
