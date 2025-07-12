import "../css/CuncatUs.css"
import { GOOGLEMAPADDRESS } from "../assets/data"

function CuncatUs() {
  return (
    <div className="bg-amber-50 py-16">
      <section class="coffee-bg text-white pb-20 py-30 relative">
        <div class="container mx-auto px-6 relative z-10 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">با ما در تماس باشید</h1>
          <p class="text-xl max-w-2xl mx-auto">ما مشتاق شنیدن نظرات شما هستیم! چه سوالی دارید، چه پیشنهادی یا فقط می‌خواهید سلامی بگویید.</p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* contact form */}
          <div className="bg-white contact-card rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-amber-900">پیام خود را ارسال کنید</h2>
            <form id="contactForm" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">نام شما</label>
                <input type="text" id="name" placeholder="نام و نام خانوادگی" className="w-full px-3 py-2 form-input bg-transparent" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">آدرس ایمیل</label>
                <input type="email" id="email" placeholder="example@email.com" className="w-full px-3 py-2 form-input bg-transparent" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">موضوع</label>
                <input type="text" id="subject" placeholder="موضوع پیام" className="w-full px-3 py-2 form-input bg-transparent" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">پیام شما</label>
                <textarea rows={5} id="message" placeholder="نظرات شما..." className="w-full px-3 py-2 form-input bg-transparent" required />
              </div>
              <button
                type="submit" className="btn-primary cursor-pointer text-white px-6 py-3 rounded-full font-medium w-full"
              >
                ارسال پیام <i class="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* location */}
            <div className="bg-white rounded-lg p-6 contact-card">
              <h3 className="text-xl text-amber-900 mb-4 flex items-center">
                <i class="fas fa-map-marker-alt ml-3"></i> آدرس ما
              </h3>
              <p className="text-amber-800 mb-4">
                خیابان قهوه، کوچه بروئر <br />تهران، ایران
              </p>
              <div className="map-container">
                <iframe
                  title="Milad Tower Location"
                  src={GOOGLEMAPADDRESS}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-lg p-6 contact-card">
              <h3 class="text-xl font-bold mb-4 text-amber-700 flex items-center">
                <i class="fas fa-phone-alt ml-3"></i> راه‌های ارتباطی
              </h3>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <i class="fas fa-phone ml-3 text-amber-700"></i>
                  <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
                </li>
                <li class="flex items-center">
                  <i class="fas fa-envelope ml-3 text-amber-700"></i>
                  <span>info@brewhaven.ir</span>
                </li>
                <li class="flex items-center">
                  <i class="fas fa-clock ml-3 text-amber-700"></i>
                  <span>همه‌روزه از ساعت ۷ صبح تا ۸ شب</span>
                </li>
              </ul>
            </div>

            {/* Social Medai */}
            <div className="bg-white rounded-lg p-6 contact-card">
              <h3 class="text-xl font-bold mb-4 text-amber-700 flex items-center">
                <i class="fas fa-hashtag ml-3"></i> ما را دنبال کنید
              </h3>
              <div class="flex space-x-4">
                <a href="#" class="social-icon text-amber-700 hover:text-amber-900 text-2xl">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="social-icon text-amber-700 hover:text-amber-900 text-2xl">
                  <i class="fab fa-telegram"></i>
                </a>
                <a href="#" class="social-icon text-amber-700 hover:text-amber-900 text-2xl">
                  <i class="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hours Section */}
        <div className="mt-16 bg-white rounded-lg p-8 max-w-4xl mx-auto contact-card">
          <h2 class="text-2xl font-bold mb-6 text-center text-amber-900">ساعات کاری</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-lg font-semibold mb-4">روزهای هفته</h3>
              <ul>
                <li class="hours-item flex justify-between">
                  <span>شنبه</span>
                  <span>۷:۰۰ صبح - ۸:۰۰ شب</span>
                </li>
                <li class="hours-item flex justify-between">
                  <span>یکشنبه</span>
                  <span>۷:۰۰ صبح - ۸:۰۰ شب</span>
                </li>
                <li class="hours-item flex justify-between">
                  <span>دوشنبه</span>
                  <span>۷:۰۰ صبح - ۸:۰۰ شب</span>
                </li>
                <li class="hours-item flex justify-between">
                  <span>سه‌شنبه</span>
                  <span>۷:۰۰ صبح - ۹:۰۰ شب</span>
                </li>
                <li class="hours-item flex justify-between">
                  <span>چهارشنبه</span>
                  <span>۷:۰۰ صبح - ۹:۰۰ شب</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-4">پایان هفته</h3>
              <ul>
                <li class="hours-item flex justify-between">
                  <span>پنجشنبه</span>
                  <span>۸:۰۰ صبح - ۱۰:۰۰ شب</span>
                </li>
                <li class="hours-item flex justify-between">
                  <span>جمعه</span>
                  <span>۸:۰۰ صبح - ۸:۰۰ شب</span>
                </li>
                <li class="hours-item flex justify-between">
                  <span class="font-semibold">مناسبت‌های خاص</span>
                  <span>ساعات کاری بیشتر</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-6 text-center text-sm text-gray-500">
            <p>*ساعات کاری در تعطیلات ممکن است تغییر کند. برای اطلاع از آخرین تغییرات ما را در شبکه‌های اجتماعی دنبال کنید.</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CuncatUs
