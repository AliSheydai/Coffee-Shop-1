import { WHYCHOOSEDATA } from "../assets/data";
import WhyCooseCard from "./WhyChooseCard";
import "../css/About.css"

function WhyChoose() {

    return (

        <section className="py-20 collection-bg relative">
            <div class="bg-amber-600/10 inset-0 absolute"></div>
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-center text-3xl font-bold mb-12 text-amber-50">چرا بریو هون را انتخاب کنیم؟</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {WHYCHOOSEDATA.map((card) =>
                        <WhyCooseCard card={card}/>
                    )}
                </div>
            </div>
        </section>
    )
}

export default WhyChoose