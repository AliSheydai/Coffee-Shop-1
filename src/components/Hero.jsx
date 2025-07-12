import { Link } from "react-router-dom"
import { HERO_BACKGROUND } from "../assets/data"

function Hero() {

    return (
        <section className="relative h-[600px] overflow-hidden">
            <div className="absolute bg-cover bg-center inset-0"
                style={{
                    backgroundImage: `url("${HERO_BACKGROUND}")`
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent"></div>
            </div>
            <div className="container mx-auto px-4 h-full flex items-center">
                <div className=" max-w-lg text-white relative z-10">
                    <h1 className="text-5xl font-bold leading-tight mb-4">قهوه ممتاز را در خانه تجربه کنید</h1>
                    <p className="text-lg mb-12">دانه‌های قهوه ما را که با دقت از سراسر جهان انتخاب شده‌اند و برای یک تجربه دم‌آوری استثنایی، به طور بی‌نظیری برشته شده‌اند، کشف کنید.</p>

                    <Link
                        to="/shop"
                        className="py-3 px-8 bg-amber-600 rounded-lg font-medium text-white hover:bg-amber-700 hover:scale-105 cursor-pointer transition-all transform whitespace-nowrap"
                        aria-label="به صفحه فروشگاه بروید"
                    >
                        خرید کنید
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero