import { CATEGORYDATA } from "../assets/data"
import CategoryCard from "./CategoryCard";

function Category() {
    return(
        <section className=" py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-gray-800 text-center mb-12 text-3xl font-bold">خرید بر اساس دسته بندی</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {CATEGORYDATA.map((category) => 
                        <CategoryCard category={category} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Category;