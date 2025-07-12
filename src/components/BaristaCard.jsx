

function BaristaCard({props}) {
  return (
    <div className="team-card transition duration-300 overflow-hidden shadow-md rounded-lg bg-amber-50">
        <div className=" relative overflow-hidden h-85 rounded-lg">
            <img src={props.image} alt={props.name}
                 className="object-cover h-full w-full hover:scale-105 duration-300 transition-transform"
            />
        </div>
        <div className="p-6">
            <div className="mb-3">
                <h3 className="text-amber-900 font-bold text-xl">{props.name}</h3>
                <span className="text-amber-600">{props.job}</span>
            </div>
            <p className="text-gray-600 mb-3">{props.description}</p>
            <div className="flex gap-3">
                <a href={props.instagramLink} className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-amber-600 transition-all duration-300 text-xl hover:text-white cursor-pointer">
                    <i className="fab fa-instagram font-medium"></i>
                </a>
                <a href={props.telegramLink} className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-amber-600 transition-all duration-300 text-xl hover:text-white cursor-pointer">
                    <i className="fab fa-telegram font-medium"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default BaristaCard
