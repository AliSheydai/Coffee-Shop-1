import { CUSTOMERSDATA } from "../assets/data"
import CustomersCard from "./CustomersCard"

function CustomersSay(){
    return(
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-gray-800 text-center mb-4 text-3xl font-bold">مشتریان درباره ما چه میگویند</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {CUSTOMERSDATA.map((card) => 
                        <CustomersCard card={card}/>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CustomersSay