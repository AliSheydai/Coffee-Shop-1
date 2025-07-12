import Hero from "../components/Hero"
import Category from "../components/Category"
import FeaturedProducts from "../components/FeaturedProducts"
import WhyChoose from "../components/WhyChoose"
import CustomersSay from "../components/CustomersSay"
import Stories from "../components/Stories"
import Subscription from "../components/Subscription"


function Home() {
    return (
        <main >
            <Hero />
            <Category />
            <FeaturedProducts />
            <CustomersSay />
            <Stories />
            <Subscription />
        </main>
    )
}

export default Home