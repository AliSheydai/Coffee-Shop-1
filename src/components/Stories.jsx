import { STORYDATA } from "../assets/data"
import StoryCard from "./StoriyCard"

function Stories(){
    return(
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-gray-800 text-center mb-4 text-3xl font-bold">داستان‌ها و نکات قهوه</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">برای راهنماهای دم کردن، خاستگاه قهوه و بینش‌های صنعت، وبلاگ ما را بررسی کنید.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {STORYDATA.map((card) => 
                        <StoryCard card={card} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Stories