import { Link } from "react-router-dom"

function Footer() {

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                        <Link to="/" className="flex items-center gap-2 text-xl mb-2">
                            <i className="fas fa-coffee text-amber-600"></i> قهوه بهشت 
                        </Link>
            
                        <p className="text-gray-400 mb-4">از سال ۲۰۱۸، بهترین تجربه قهوه را به خانه شما می‌آوریم.</p>
                        <div className="flex gap-4">
                            <a href="#"><i className="fab fa-facebook-f text-lg hover:text-amber-600 hover:scale-110 transition-all"></i></a>
                            <a href="#"><i className="fab fa-instagram text-lg hover:text-amber-600 hover:scale-110 transition-all"></i></a>
                            <a href="#"><i className="fab fa-twitter text-lg hover:text-amber-600 hover:scale-110 transition-all"></i></a>
                            <a href="#"><i className="fab fa-pinterest text-lg hover:text-amber-600 hover:scale-110 transition-all"></i></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">دسترسی سریع</h3>
                        <ul className="space-y-1.5">
                            <li><Link to="/shop" className="text-gray-400 text-sm hover:text-amber-600 transition-colors">فروشاگاه</Link></li>
                            <li><Link to="/about-us" className="text-gray-400 text-sm hover:text-amber-600 transition-colors">درباره ما</Link></li>
                            <li><Link to="/guide" className="text-gray-400 text-sm hover:text-amber-600 transition-colors">راهنمای قهوه</Link></li>
                            <li><Link to="/sustainability" className="text-gray-400 text-sm hover:text-amber-600 transition-colors">پایداری</Link></li>
                            <li><Link to="/Careers" className="text-gray-400 text-sm hover:text-amber-600 transition-colors">مشاغل</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">خدمات مشتری</h3>
                        <ul className="space-y-1.5">
                            <li><Link to="contact-us" className="text-gray-400 text-sm hover:text-amber-600 transition-colors">ارتباط با ما</Link></li>
                            <li><Link to="FAQs" className="text-gray-400 text-sm hover:text-amber-600 transition-colors">سوالات متداول</Link></li>
                            <li><Link to="shipping-&-returns" className="text-gray-400 text-sm hover:text-amber-600 transition-colors">حمل و نقل و برگشت</Link></li>
                            <li><Link to="store-locator" className="text-gray-400 text-sm hover:text-amber-600 transition-colors">مکان یاب فروشگاه</Link></li>
                            <li><Link to="terms-&-conditions" className="text-gray-400 text-sm hover:text-amber-600 transition-colors">شرایط و ضوابط</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">ارتباط با ما</h3>
                        <ul class="flex flex-col gap-4">
                            <li class="flex items-center gap-2">
                                <div class="text-amber-600">
                                    <i class="ri-map-pin-line"></i>
                                </div>
                                <span class="text-gray-400">تهران، خیابان میرداماد، مرکز خرید میرداماد، طبقه ۲، واحد
                                    ۲۱۵</span>
                            </li>

                            <li class="flex items-center gap-2">
                                <div class="text-amber-600">
                                    <i class="ri-phone-line"></i>
                                </div>
                                <span class="text-gray-400">۰۲۱-۸۸۶۵۴۳۲۱</span>
                            </li>

                            <li class="flex items-center gap-2">
                                <div class="text-amber-600">
                                    <i class="ri-mail-line"></i>
                                </div>
                                <span class="text-gray-400">info@perfumeluxury.ir</span>
                            </li>

                            <li class="flex items-center gap-2">
                                <div class="text-amber-600">
                                    <i class="ri-time-line"></i>
                                </div>
                                <span class="text-gray-400">دوشنبه تا شنبه: ۱۰ صبح تا ۸ شب</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer