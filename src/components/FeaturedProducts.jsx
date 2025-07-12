import { FEATUREDPRODUCTSDATA } from "../assets/data"
import FeaturedCard from "./FeaturedCard"

function FeaturedProducts () {

    return(
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-gray-800 text-center mb-4 text-3xl font-bold">محصولات ویژه</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">محبوب‌ترین قهوه‌های ما را که با دقت برای دم کردن بی‌نظیرشان در هر بار تهیه شده‌اند، کشف کنید.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATUREDPRODUCTSDATA.map((category) => 
                        <FeaturedCard product={category} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts