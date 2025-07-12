import { useState } from "react"
import { SUBSCRIBEIMAGE } from "../assets/data"

function Subscription(){
    const [email, setEmail] = useState("")

    function handleEmailSubmit(e){
        e.preventDefualt()
        console.log("Email Submitted", email)
        setEmail("")
    }
    
    return(
        <section className="py-16 bg-amber-50">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-12">
                            <span className="text-sm text-amber-700 font-bold mb-2">پیشنهاد ویژه با مدت زمان محدود</span>
                            <h3 className="text-2xl font-bold mb-4">۲۰٪ تخفیف برای اولین اشتراک شما</h3>
                            <p className="text-gray-800 mb-4">برای اشتراک ماهانه قهوه ما ثبت نام کنید و دانه‌های ممتاز را درب منزل خود تحویل بگیرید. جعبه اول شامل یک راهنمای دم کردن رایگان است.</p>
                            <button className="bg-amber-600 py-2 px-6 w-fit cursor-pointer rounded-lg text-white font-medium hover:bg-white hover:text-amber-600 hover:border hover:border-amber-600 transition-colors">همین حالا مشترک شوید</button>
                        </div>
                        <div className="h-64 md:w-1/2 md:h-auto overflow-hidden">
                            <img src={SUBSCRIBEIMAGE} 
                                 className="h-full w-full object-cover object-top"       
                            />
                        </div>
                    </div>
                </div>
                <div className="pt-16 text-center max-w-2xl mx-auto">
                    <h3 className="text-xl font-bold mb-4">به انجمن قهوه ما بپیوندید</h3>
                    <p className="text-gray-700 mb-6">برای دریافت نکات دم کردن قهوه، پیشنهادات ویژه و ایده‌های جدید در خبرنامه ما مشترک شوید.</p>
                    <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
                        <input 
                            type="text" 
                            placeholder="آدرس ایمیل"
                            className=" outline-none bg-gray-100 py-3 pr-2 rounded-lg focus:ring-2 focus:ring-amber-600 whitespace-nowrap"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" className=" bg-amber-600 py-3 rounded-lg text-white font-medium hover:bg-amber-700 hover:shadow-lg cursor-pointer transition-all whitespace-nowrap">مشترک شوید</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Subscription