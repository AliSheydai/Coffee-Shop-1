import Header from "../components/Header"
import WhyChoose from "../components/WhyChoose"
import BaristaCard from "../components/BaristaCard"
import { BARISTA } from "../assets/data"
import "../css/About.css"

function About() {
  return (
    <>
      <Header />
      <section className="hero flex justify-center items-center text-center text-white">
        <div className="container mx-auto px-6 py-20 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">داستان ما</h1>
          <p className="text-xl max-w-2xl mx-auto mb-4">
            از یک شروع کوچک تا تبدیل شدن به کافی شاپ محله شما
          </p>
          <a href="#our-story" class="text-white animate-bounce inline-block">
              <i class="fas fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </section>

      <section id="our-story" class="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col items-center md:flex-row">
            <div className="text-center md:w-1/2 md:text-right mb-10 md:mb-0 md:pl-10">
              <h2 className="text-amber-800 text-2xl md:text-3xl font-bold mb-8">فعالیت قهوه بهشت چگونه شروع شد</h2>
              <p className="text-gray-600 mb-3 font-bold">
                در سال 2010، دو علاقه‌مند به قهوه، سارا و مایکل، تصمیم گرفتند علاقه خود را به حرفه تبدیل کنند. آنچه با یک گاری کوچک در بازار محلی شروع شد، امروز به بهار گرم و صمیمی که می‌بینید تبدیل شده است.
              </p>
              <p className="text-gray-600 mb-3 font-bold">
                ماموریت ما همیشه ساده بوده است: سرو قهوه‌ای استثنایی در محیطی گرم و دوستانه که هر کسی در آن احساس خانه کند.
              </p>
              <p className="text-gray-600 mb-3 font-bold">
                هر فنجانی که سرو می‌کنیم داستانی دارد - داستان کشاورزانی که دانه‌ها را پرورش دادند، رست‌کنندگانی که طعم را کامل کردند و باریستاهایی که نوشیدنی ایده‌آل شما را می‌سازند.
              </p>
            </div>
            <div className="relative md:w-1/2">
              <div className="overflow-hidden shadow-lg rounded-xl">
                <img 
                  src="https://res.cloudinary.com/dh5meukg5/image/upload/v1753793440/93af1b727abb3b2bf11dbe5f89ce267f_dmftez.jpg" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div class="absolute -bottom-5 -right-5 bg-amber-800 text-white px-4 py-2 rounded-lg shadow-lg">
                  <p class="playfair italic">شروع کوچک ما</p>
              </div>
            </div>
          </div>
      </section>
       
      <WhyChoose />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-amber-800 text-3xl md:text-4xl text-center font-bold mb-12">با تیم ما آشنا شوید</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BARISTA.map((p) => 
              <BaristaCard props={p}/>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
